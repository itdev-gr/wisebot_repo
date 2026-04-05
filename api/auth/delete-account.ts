/**
 * DELETE /api/auth/delete-account — Delete a user's account and all associated data
 * ===================================================================================
 * GDPR compliance: allows users to exercise their "right to erasure" (Article 17).
 *
 * Flow:
 * 1. Verify the authenticated user via withAuth middleware.
 * 2. Delete the auth user using supabaseAdmin — Supabase has ON DELETE CASCADE
 *    configured on all child tables (profiles, stats, badges, heroes, purchases,
 *    transactions), so deleting the auth user cascades to all related data.
 * 3. Return success.
 */
export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!, { auth: { autoRefreshToken: false, persistSession: false } });
    const { error } = await supabaseAdmin.auth.admin.deleteUser(user.userId);

    if (error) {
      console.error('[Delete Account] Error deleting user:', error.message);
      return res.status(500).json({ error: 'Failed to delete account' });
    }

    return res.status(200).json({ success: true, message: 'Account deleted successfully' });
  } catch (err: any) {
    console.error('[Delete Account] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
