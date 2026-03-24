/**
 * GET /api/auth/export-data — GDPR Data Portability
 * ===================================================
 * Returns all user data in JSON format.
 * Requires authentication. Returns data for the authenticated user only.
 */
import { createClient } from '@supabase/supabase-js';
import { withAuth } from '../_lib/middleware';

function getSupabaseAdmin() {
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default withAuth(async (req: any, res: any, user) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const supabase = getSupabaseAdmin();
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
});
