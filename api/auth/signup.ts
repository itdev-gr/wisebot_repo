/**
 * POST /api/auth/signup — Create a new user via Supabase Admin API
 * =================================================================
 * Uses service_role key to create user with email_confirm: true,
 * bypassing the need for email verification.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { withProtection } from '../_lib/middleware';

function getSupabaseAdmin() {
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default withProtection(async (req: any, res: any) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { email, password, childName, parentEmail } = req.body || {};

    // Validation
    if (!email || !password || !childName) {
      return res.status(400).json({
        error: 'Missing required fields',
        details: 'email, password, and childName are required',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: 'Password too short',
        details: 'Password must be at least 6 characters',
      });
    }

    const supabaseAdmin = getSupabaseAdmin();

    // Create user via admin API (auto-confirms email)
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        child_name: childName,
        parent_email: parentEmail || '',
      },
    });

    if (error) {
      console.error('[Auth Signup] Error:', error.message);

      if (error.message.includes('already been registered') || error.message.includes('already exists')) {
        return res.status(409).json({
          error: 'User already exists',
          details: 'An account with this email already exists. Try logging in instead.',
        });
      }

      return res.status(400).json({ error: error.message });
    }

    console.log('[Auth Signup] User created:', data.user?.id);

    return res.status(200).json({
      success: true,
      userId: data.user?.id,
    });
  } catch (err: any) {
    console.error('[Auth Signup] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
