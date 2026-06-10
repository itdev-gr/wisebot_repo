/**
 * POST /api/auth/earn — Bank client-side activity rewards
 * =========================================================
 * The app rewards kids with small credit amounts for activities the server
 * can't verify (passing a quiz, reading a story, daily missions). The client
 * reports them here so the server-side balance (profiles.credits) stays the
 * source of truth.
 *
 * Abuse guards: auth required, amount capped per call, rate limited per user.
 *
 * Body: { amount: number, action: string }
 * Response: { credits: number } — the new balance
 */

const MAX_EARN_PER_CALL = 10;
const ALLOWED_ACTIONS = new Set([
  'PASS_QUIZ', 'READ_ACADEMY', 'READ_BOOK', 'CREATE_IMAGE', 'CREATE_BUSINESS',
  'DAILY_MISSION', 'GAME_REWARD', 'BADGE_BONUS',
]);

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth.js')).getAuthUser(req);
  if (!user || user.id === 'guest') {
    return res.status(401).json({ error: 'Authentication required' });
  }

  // Cap how fast rewards can be banked — generous for real play, stops scripts
  const { checkRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await checkRateLimit(user.id, 'earn', 40, 60);
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  const body = req.body || {};
  const amount = Number(body.amount);
  const action = typeof body.action === 'string' ? body.action.toUpperCase() : '';

  if (!Number.isInteger(amount) || amount < 1 || amount > MAX_EARN_PER_CALL) {
    return res.status(400).json({ error: `amount must be an integer 1-${MAX_EARN_PER_CALL}` });
  }
  if (!ALLOWED_ACTIONS.has(action)) {
    return res.status(400).json({ error: 'Unknown action' });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
    const { data, error } = await supabase.rpc('earn_credits', {
      p_user_id: user.id,
      p_amount: amount,
      p_action: action,
    });

    if (error) {
      console.error('[earn] RPC error:', error.message);
      return res.status(500).json({ error: 'Failed to add credits' });
    }

    return res.status(200).json({ credits: data });
  } catch (err: any) {
    console.error('[earn] Error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
