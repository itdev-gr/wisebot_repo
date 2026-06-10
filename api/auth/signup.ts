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

async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

async function getSupabaseAnon() {
  const { createClient } = await import('@supabase/supabase-js');
  const url = process.env.SUPABASE_URL || '';
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';
  return createClient(url, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
}

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // IP rate limit: max 5 signups per 30 minutes per IP (prevents registration spam)
  const { checkIpRateLimit, getClientIp } = await import('../_lib/rateLimit');
  const clientIp = getClientIp(req);
  const ipCheck = await checkIpRateLimit(clientIp, 'signup', 5, 30);
  if (!ipCheck.allowed) {
    return res.status(429).json({
      error: `Πολλές απόπειρες εγγραφής. Παρακαλώ περίμενε ${Math.ceil((ipCheck.retryAfter || 60) / 60)} λεπτά. / Too many signup attempts. Please wait ${Math.ceil((ipCheck.retryAfter || 60) / 60)} minutes.`,
      retryAfter: ipCheck.retryAfter,
    });
  }

  try {
    const body = req.body || {};

    // Trim all string inputs
    const parentEmail = typeof body.parentEmail === 'string' ? body.parentEmail.trim() : '';
    const password = typeof body.password === 'string' ? body.password : '';
    const childName = typeof body.childName === 'string' ? body.childName.trim() : '';
    const phoneNumber = typeof body.phoneNumber === 'string' ? body.phoneNumber.trim() : '';

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

    // Check username (childName) uniqueness — case-insensitive
    const supabaseForCheck = await getSupabaseAdmin();
    const { data: existingUser, error: checkError } = await supabaseForCheck
      .from('profiles')
      .select('id')
      .ilike('child_name', childName)
      .limit(1);

    if (!checkError && existingUser && existingUser.length > 0) {
      return res.status(409).json({
        error: 'Αυτό το ψευδώνυμο υπάρχει ήδη. Δοκίμασε ένα άλλο! / This nickname is already taken. Try another!',
        details: 'child_name_taken',
      });
    }

    // Use anon client for signUp — this sends a REAL verification email to the parent.
    // Parent must click the link before the child can use the app.
    const supabaseAnon = await getSupabaseAnon();

    let data: any = null;
    let error: any = null;

    const result = await supabaseAnon.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'https://wisebot.gr/auth',
        data: { child_name: childName, parent_email: email },
      },
    });
    data = result.data;
    error = result.error;

    if (error) {
      console.error('[Auth Signup] Error:', error.message);

      if (error.message.includes('already been registered') || error.message.includes('already exists')) {
        return res.status(409).json({
          error: 'User already exists',
          details: 'An account with this email already exists. Try logging in instead.',
        });
      }

      // Password policy error from Supabase — translate to user-friendly message
      if (error.message.includes('pattern') || error.message.includes('Pattern')) {
        return res.status(400).json({
          error: 'Ο κωδικός πρέπει να περιέχει τουλάχιστον ένα κεφαλαίο γράμμα, ένα αριθμό και ένα ειδικό σύμβολο (π.χ. !@#$%) / Password must contain at least one uppercase letter, one number, and one special character (e.g. !@#$%)',
          details: 'password_pattern',
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
      const supabaseAdminForProfile = await getSupabaseAdmin();
      const { error: profileError } = await supabaseAdminForProfile.from('profiles').upsert({
        id: data.user.id,
        child_name: childName,
        parent_email: email,
        parent_verified: false,
        has_password: true, // email/password signups have a password
        phone_number: phoneNumber || null,
        phone_verified: false,
        credits: 10, // welcome credits — matches the landing page promise & DB default
      });

      if (profileError) {
        console.error('[Auth Signup] Profile creation error:', profileError.message);
        // Don't fail the whole signup — user was created, profile can be retried
      }
    }

    // Send notification email to admin about new signup
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'WiseBot <noreply@wisebot.gr>',
            to: ['info@wisebot.gr'],
            subject: `🎉 Νέα Εγγραφή: ${childName}`,
            html: `
              <h2>Νέα εγγραφή στο WiseBot Academy!</h2>
              <p><strong>Ψευδώνυμο:</strong> ${childName}</p>
              <p><strong>Email γονέα:</strong> ${email}</p>
              <p><strong>Ημερομηνία:</strong> ${new Date().toLocaleString('el-GR')}</p>
              <p><strong>User ID:</strong> ${data.user?.id}</p>
              <p><strong>Credits:</strong> 10 (default)</p>
              <hr>
              <p style="color:#888;">Αυτό είναι αυτόματο email από το WiseBot Academy.</p>
            `,
          }),
        });
      } catch (emailErr) {
        console.warn('[Auth Signup] Notification email failed:', (emailErr as any)?.message);
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
}
