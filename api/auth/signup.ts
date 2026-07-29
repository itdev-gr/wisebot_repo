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
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // IP rate limit: max 5 signups per 30 minutes per IP (prevents registration spam)
  const { checkIpRateLimit, getClientIp } = await import('../_lib/rateLimit.js');
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
    const referralCode = typeof body.referralCode === 'string' ? body.referralCode.trim().toUpperCase() : '';

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

    // Create the user + verification link via the admin API, then email the
    // link ourselves through Resend (noreply@wisebot.gr). Supabase's built-in
    // SMTP is capped at a few emails per hour and lands in spam — signups
    // beyond that limit silently never received their confirmation email.
    let data: any = null;
    let error: any = null;
    let verificationLink: string | null = null;

    const supabaseAdminForLink = await getSupabaseAdmin();
    const linkResult = await supabaseAdminForLink.auth.admin.generateLink({
      type: 'signup',
      email,
      password,
      options: {
        redirectTo: 'https://wisebot.gr/auth',
        data: { child_name: childName, parent_email: email },
      },
    });
    data = linkResult.data;
    error = linkResult.error;
    verificationLink = linkResult.data?.properties?.action_link || null;

    // Fallback: if the admin link path fails for any reason, use the classic
    // signUp flow (Supabase sends its own email — rate-limited but functional).
    if (error || !verificationLink) {
      console.warn('[Auth Signup] generateLink failed, falling back to signUp:', error?.message);
      const supabaseAnon = await getSupabaseAnon();
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
      verificationLink = null;
    }

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

    // Send the verification email through Resend (reliable + branded).
    // Only when we hold a link from generateLink — the fallback path above
    // already had Supabase send its own email.
    if (verificationLink) {
      const resendKeyForVerify = process.env.RESEND_API_KEY;
      if (!resendKeyForVerify) {
        console.error('[Auth Signup] RESEND_API_KEY missing — verification email NOT sent');
      } else {
        try {
          const mailResp = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${resendKeyForVerify}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
              from: 'WiseBot Academy <noreply@wisebot.gr>',
              to: [email],
              subject: 'WiseBot Academy — Επιβεβαίωση εγγραφής / Confirm your signup',
              html: `
                <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:24px;">
                  <h2 style="color:#1a1a2e;margin-bottom:4px;">Καλώς ήρθατε στο WiseBot Academy! 🎉</h2>
                  <p>Αγαπητέ γονέα,</p>
                  <p>Δημιουργήθηκε λογαριασμός για το παιδί σας <strong>${childName}</strong>.
                     Πατήστε το κουμπί για να επιβεβαιώσετε το email σας και να ενεργοποιηθεί ο λογαριασμός:</p>
                  <p style="text-align:center;margin:28px 0;">
                    <a href="${verificationLink}"
                       style="background:#4f46e5;color:#fff;padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:bold;display:inline-block;">
                      ΕΠΙΒΕΒΑΙΩΣΗ EMAIL
                    </a>
                  </p>
                  <p style="color:#666;font-size:13px;">Αν το κουμπί δεν λειτουργεί, αντιγράψτε αυτόν τον σύνδεσμο στον browser σας:<br>
                    <a href="${verificationLink}" style="color:#4f46e5;word-break:break-all;">${verificationLink}</a></p>
                  <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
                  <p style="color:#999;font-size:12px;">Αν δεν κάνατε εσείς αυτή την εγγραφή, αγνοήστε αυτό το email.<br>© 2026 WiseBot Academy — wisebot.gr</p>
                </div>
              `,
            }),
          });
          if (!mailResp.ok) {
            console.error('[Auth Signup] Resend error:', mailResp.status, (await mailResp.text()).slice(0, 200));
          } else {
            console.log('[Auth Signup] Verification email sent via Resend to', email);
          }
        } catch (mailErr: any) {
          console.error('[Auth Signup] Verification email error:', mailErr.message);
        }
      }
    }

    // Referral: resolve the invite code to the inviter's profile. The invited
    // child gets +5 bonus credits now; the inviter is paid via claim_referral()
    // only after this account verifies + logs in (see /api/auth/referral).
    let referredBy: string | null = null;
    if (referralCode && /^[A-Z2-9]{4,12}$/.test(referralCode)) {
      const supabaseForRef = await getSupabaseAdmin();
      const { data: inviter } = await supabaseForRef
        .from('profiles')
        .select('id')
        .eq('referral_code', referralCode)
        .limit(1)
        .maybeSingle();
      if (inviter?.id && inviter.id !== data.user?.id) referredBy = inviter.id;
    }

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
        credits: referredBy ? 15 : 10, // welcome credits (+5 referral bonus)
        referred_by: referredBy,
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
