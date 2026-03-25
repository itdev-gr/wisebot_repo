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
import { withAuth } from '../_lib/middleware';
import { getSupabaseAdmin } from '../_lib/supabase';

export default withAuth(async (req, res, user) => {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const supabaseAdmin = await getSupabaseAdmin();
    const { error } = await supabaseAdmin.auth.admin.deleteUser(user.userId);

    if (error) {
      console.error('[Delete Account] Error deleting user:', error.message);
      return res.status(500).json({ error: 'Failed to delete account' });
    }

    console.log('[Delete Account] User deleted:', user.userId);
    return res.status(200).json({ success: true, message: 'Account deleted successfully' });
  } catch (err: any) {
    console.error('[Delete Account] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
