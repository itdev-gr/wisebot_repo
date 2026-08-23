/**
 * /api/auth/referral — Invite-a-friend program
 * =============================================
 * GET  → the caller's referral code + stats (code is generated lazily).
 * POST → claim the caller's pending referral: pays the inviter once the
 *        invited account actually logs in (email verified). Idempotent —
 *        the claim_referral() SQL function only pays while
 *        referral_rewarded=false.
 *
 * Rewards: inviter +10⚡ per verified friend; the invited child gets
 * +5⚡ at signup (handled in signup.ts).
 */

const INVITER_REWARD = 10;

// Unambiguous alphabet (no 0/O/1/I) for kid-friendly codes
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function randomCode(len = 6): string {
  let out = '';
  for (let i = 0; i < len; i++) {
    out += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return out;
}

async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = await (await import('../_lib/auth.js')).getAuthUser(req);
  if (!user || user.id === 'guest') {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const { checkRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await checkRateLimit(user.id, 'referral', 30, 60);
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  const supabase = await getSupabaseAdmin();

  try {
    if (req.method === 'GET') {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('referral_code, referral_count, referred_by, referral_rewarded')
        .eq('id', user.id)
        .single();
      if (error || !profile) return res.status(404).json({ error: 'Profile not found' });

      let code = profile.referral_code;
      if (!code) {
        // Lazy generation with collision retry (unique partial index enforces)
        for (let attempt = 0; attempt < 5 && !code; attempt++) {
          const candidate = randomCode();
          const { error: upErr } = await supabase
            .from('profiles')
            .update({ referral_code: candidate })
            .eq('id', user.id)
            .is('referral_code', null);
          if (!upErr) code = candidate;
        }
        if (!code) {
          // Another request may have won the race — re-read
          const { data: again } = await supabase
            .from('profiles').select('referral_code').eq('id', user.id).single();
          code = again?.referral_code || null;
        }
        if (!code) return res.status(500).json({ error: 'Could not generate code' });
      }

      return res.status(200).json({
        code,
        invitedCount: profile.referral_count || 0,
        creditsEarned: (profile.referral_count || 0) * INVITER_REWARD,
        rewardPerFriend: INVITER_REWARD,
      });
    }

    // POST used to claim the reward at first login. Since 24 Αυγούστου 2026 the
    // inviter is paid by the Stripe webhook when the invitee first buys credits.
    return res.status(410).json({ error: 'Referral rewards are paid automatically on your friend\'s first purchase.' });
  } catch (err: any) {
    console.error('[Referral] Unexpected error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
