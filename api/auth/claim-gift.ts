/**
 * POST /api/auth/claim-gift — Mark a gift item as claimed
 * =========================================================
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const authHeader = req.headers?.authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'Authentication required' });

  let userId: string;
  try {
    const token = authHeader.slice(7);
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
    const { data: { user: u }, error } = await supabase.auth.getUser(token);
    if (error || !u) return res.status(401).json({ error: 'Invalid token' });
    userId = u.id;
  } catch {
    return res.status(401).json({ error: 'Auth failed' });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const body = req.body || {};
    const giftId = typeof body.giftId === 'string' ? body.giftId : '';
    if (!giftId) return res.status(400).json({ error: 'giftId is required' });

    const { error } = await supabaseAdmin
      .from('gift_items')
      .update({ claimed_at: new Date().toISOString() })
      .eq('id', giftId)
      .eq('to_user_id', userId)  // Security: only recipient can claim
      .is('claimed_at', null);   // Prevent double-claim

    if (error) {
      console.error('[ClaimGift] Error:', error.message);
      return res.status(500).json({ error: 'Failed to claim gift' });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('[ClaimGift] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
