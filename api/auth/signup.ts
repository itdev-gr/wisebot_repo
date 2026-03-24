/**
 * POST /api/auth/signup — Create a new user + profile
 * =====================================================
 * Children don't have email. The parent's email IS the account email.
 *
 * Flow:
 * 1. Use the regular Supabase client (anon key) for signUp — this
 *    automatically sends the email verification link to the parent.
 * 2. Use the admin client (service role) to create the profile row,
 *    which needs to bypass RLS.
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

function getSupabaseAnon() {
  const url = process.env.SUPABASE_URL || '';
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';
  return createClient(url, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
}

export default withProtection(async (req: any, res: any) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body || {};

    // Trim all string inputs
    const parentEmail = typeof body.parentEmail === 'string' ? body.parentEmail.trim() : '';
    const password = typeof body.password === 'string' ? body.password : '';
    const childName = typeof body.childName === 'string' ? body.childName.trim() : '';

    // Backwards compat: accept `email` as fallback for `parentEmail`
    const email = parentEmail || (typeof body.email === 'string' ? body.email.trim() : '');

    // Validation — required fields
    if (!email || !password || !childName) {
      return res.status(400).json({
        error: 'Missing required fields',
        details: 'parentEmail, password, and childName are required',
      });
    }

    // Email format validation (basic regex)
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format',
        details: 'Please provide a valid email address',
      });
    }

    // childName max length
    if (childName.length > 50) {
      return res.status(400).json({
        error: 'Child name too long',
        details: 'Child name must be 50 characters or fewer',
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        error: 'Password too short',
        details: 'Password must be at least 8 characters',
      });
    }

    // Step 1: Try regular client first (sends verification email automatically)
    // Fall back to admin client if anon key is not available
    const anonUrl = process.env.SUPABASE_URL || '';
    const anonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

    let data: any = null;
    let error: any = null;

    if (anonKey) {
      // Regular client — auto-sends verification email
      const supabaseAnon = getSupabaseAnon();
      const result = await supabaseAnon.auth.signUp({
        email,
        password,
        options: {
          data: { child_name: childName, parent_email: email },
          emailRedirectTo: 'https://wisebot.gr/#/login',
        },
      });
      data = result.data;
      error = result.error;
    } else {
      // Fallback: Admin client — create user without auto-confirm
      console.log('[Auth Signup] SUPABASE_ANON_KEY not set, using admin API');
      const supabaseAdmin = getSupabaseAdmin();
      const result = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: false, // Require email verification
        user_metadata: { child_name: childName, parent_email: email },
      });
      data = result.data;
      error = result.error;

      // Admin API: manually trigger verification email
      if (data?.user && !error) {
        try {
          await supabaseAdmin.auth.admin.generateLink({
            type: 'signup',
            email,
            options: { redirectTo: 'https://wisebot.gr/#/login' },
          });
        } catch (linkErr) {
          console.warn('[Auth Signup] Could not generate verification link:', (linkErr as any)?.message);
        }
      }
    }

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

    // Supabase signUp can return a user with a fake id if the email
    // already exists but is unconfirmed. Check for identities to detect this.
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      return res.status(409).json({
        error: 'User already exists',
        details: 'An account with this email already exists. Try logging in instead.',
      });
    }

    console.log('[Auth Signup] User created:', data.user?.id);

    // Step 2: Create profile with admin client (bypasses RLS)
    if (data.user?.id) {
      const supabaseAdmin = getSupabaseAdmin();
      const { error: profileError } = await supabaseAdmin.from('profiles').upsert({
        id: data.user.id,
        child_name: childName,
        parent_email: email,
        parent_verified: false,
        credits: 50, // starter credits
      });

      if (profileError) {
        console.error('[Auth Signup] Profile creation error:', profileError.message);
        // Don't fail the whole signup — user was created, profile can be retried
      }
    }

    return res.status(200).json({
      success: true,
      userId: data.user?.id,
      message: 'Verification email sent to parent',
    });
  } catch (err: any) {
    console.error('[Auth Signup] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
