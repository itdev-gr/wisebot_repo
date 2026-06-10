/**
 * GET /api/auth/get-gifts — Get unclaimed received gifts for the current user
 * ===========================================================================
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

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

    const { data: gifts, error } = await supabaseAdmin
      .from('gift_items')
      .select('*')
      .eq('to_user_id', userId)
      .is('claimed_at', null)
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      console.error('[GetGifts] Error:', error.message);
      return res.status(500).json({ error: 'Failed to fetch gifts' });
    }

    return res.status(200).json({ gifts: gifts || [] });
  } catch (err: any) {
    console.error('[GetGifts] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
