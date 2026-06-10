/**
 * GET /api/auth/export-data — GDPR Data Portability
 * ===================================================
 * Returns all user data in JSON format.
 * Requires authentication. Returns data for the authenticated user only.
 */
async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // Required auth
  const authHeader = req.headers?.authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'Authentication required' });
  let user: { userId: string; email: string };
  try {
    const token = authHeader.slice(7);
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!, { auth: { autoRefreshToken: false, persistSession: false } });
    const { data: { user: u }, error } = await supabase.auth.getUser(token);
    if (error || !u) return res.status(401).json({ error: 'Invalid token' });
    user = { userId: u.id, email: u.email || '' };
  } catch { return res.status(401).json({ error: 'Auth failed' }); }

  try {
    const supabase = await getSupabaseAdmin();
    const userId = user.userId;

    // Fetch all user data in parallel
    const [profile, stats, badges, heroes, purchases, transactions] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', userId).single(),
      supabase.from('stats').select('*').eq('user_id', userId).single(),
      supabase.from('badges').select('*').eq('user_id', userId),
      supabase.from('heroes').select('*').eq('user_id', userId),
      supabase.from('purchases').select('*').eq('user_id', userId),
      supabase.from('credit_transactions').select('*').eq('user_id', userId),
    ]);

    const exportData = {
      exportedAt: new Date().toISOString(),
      userId,
      email: user.email,
      profile: profile.data || null,
      stats: stats.data || null,
      badges: badges.data || [],
      heroes: heroes.data || [],
      purchases: purchases.data || [],
      creditTransactions: transactions.data || [],
    };

    // Set headers for file download
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="wisebot-data-${userId.slice(0, 8)}.json"`);

    return res.status(200).json(exportData);
  } catch (err: any) {
    console.error('[export-data] Error:', err.message);
    return res.status(500).json({ error: 'Failed to export data' });
  }
}
