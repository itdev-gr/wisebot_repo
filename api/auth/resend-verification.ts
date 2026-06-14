/**
 * POST /api/auth/resend-verification
 * ====================================
 * Resends the email verification link to the parent.
 * Rate limited: 3 per 30 minutes per IP.
 */

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Rate limit
  const { checkIpRateLimit, getClientIp } = await import('../_lib/rateLimit.js');
  const clientIp = getClientIp(req);
  const ipCheck = await checkIpRateLimit(clientIp, 'resend-verification', 3, 30);
  if (!ipCheck.allowed) {
    return res.status(429).json({
      error: 'Πολλές απόπειρες. Περίμενε λίγο. / Too many attempts. Please wait.',
      retryAfter: ipCheck.retryAfter,
    });
  }

  try {
    const { email } = req.body || {};
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email required' });
    }

    const cleanEmail = email.trim();
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    // Generate a fresh login/verification link and email it via Resend —
    // Supabase's built-in SMTP is rate-limited to a few emails per hour.
    // A magiclink verifies the address on use, so it covers unconfirmed
    // accounts too. We always answer success to avoid leaking which emails
    // have accounts.
    const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
      type: 'magiclink',
      email: cleanEmail,
      options: { redirectTo: 'https://wisebot.gr/auth' },
    });
    const actionLink = linkData?.properties?.action_link;

    if (linkError || !actionLink) {
      console.warn('[Resend Verification] generateLink failed:', linkError?.message);
      return res.status(200).json({ success: true, message: 'If this email has an account, a verification link has been sent.' });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const mailResp = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'WiseBot Academy <noreply@wisebot.gr>',
            to: [cleanEmail],
            subject: 'WiseBot Academy — Σύνδεσμος επιβεβαίωσης / Verification link',
            html: `
              <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:24px;">
                <h2 style="color:#1a1a2e;margin-bottom:4px;">WiseBot Academy</h2>
                <p>Αγαπητέ γονέα,</p>
                <p>Ζητήσατε νέο σύνδεσμο επιβεβαίωσης. Πατήστε το κουμπί για να επιβεβαιώσετε το email σας και να συνδεθείτε:</p>
                <p style="text-align:center;margin:28px 0;">
                  <a href="${actionLink}"
                     style="background:#4f46e5;color:#fff;padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:bold;display:inline-block;">
                    ΕΠΙΒΕΒΑΙΩΣΗ & ΣΥΝΔΕΣΗ
                  </a>
                </p>
                <p style="color:#666;font-size:13px;">Αν το κουμπί δεν λειτουργεί, αντιγράψτε αυτόν τον σύνδεσμο στον browser σας:<br>
                  <a href="${actionLink}" style="color:#4f46e5;word-break:break-all;">${actionLink}</a></p>
                <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
                <p style="color:#999;font-size:12px;">Αν δεν το ζητήσατε εσείς, αγνοήστε αυτό το email.<br>© 2026 WiseBot Academy — wisebot.gr</p>
              </div>
            `,
          }),
        });
        if (!mailResp.ok) {
          console.error('[Resend Verification] Resend error:', mailResp.status, (await mailResp.text()).slice(0, 200));
        }
      } catch (mailErr: any) {
        console.error('[Resend Verification] Email error:', mailErr.message);
      }
    } else {
      console.error('[Resend Verification] RESEND_API_KEY missing');
    }

    return res.status(200).json({ success: true, message: 'If this email has an account, a verification link has been sent.' });
  } catch (err: any) {
    console.error('[Resend Verification] Unexpected error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
