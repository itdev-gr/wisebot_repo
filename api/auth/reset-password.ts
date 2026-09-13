/**
 * POST /api/auth/reset-password  { email }
 * ==========================================
 * Sends the "choose a new password" email through Resend, the same way signup and
 * resend-verification do. Supabase's own mailer is capped at a few emails per hour
 * per project, so `resetPasswordForEmail` from the browser answered "email rate limit
 * exceeded" to the second parent of the day. Here the recovery link is generated with
 * the service key and delivered by Resend from noreply@wisebot.gr.
 *
 * Always answers success, so the endpoint cannot be used to learn which emails have
 * accounts. Rate limited: 3 per 30 minutes per IP.
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { checkIpRateLimit, getClientIp } = await import('../_lib/rateLimit.js');
  const ipCheck = await checkIpRateLimit(getClientIp(req), 'reset-password', 3, 30);
  if (!ipCheck.allowed) {
    return res.status(429).json({
      error: 'Πολλές απόπειρες. Περίμενε λίγο. / Too many attempts. Please wait.',
      retryAfter: ipCheck.retryAfter,
    });
  }

  try {
    const { email } = req.body || {};
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Email required' });
    }
    const cleanEmail = email.trim().toLowerCase();

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error('[Reset Password] RESEND_API_KEY missing');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } },
    );

    const { data, error } = await supabaseAdmin.auth.admin.generateLink({
      type: 'recovery',
      email: cleanEmail,
      options: { redirectTo: 'https://wisebot.gr/login?mode=reset' },
    });
    const link = data?.properties?.action_link;

    // Unknown email → same answer as a known one, and no email goes out.
    if (error || !link) {
      if (error && !/not found|user/i.test(error.message)) {
        console.warn('[Reset Password] generateLink:', error.message);
      }
      return res.status(200).json({ success: true });
    }

    const mailResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'WiseBot Academy <noreply@wisebot.gr>',
        to: [cleanEmail],
        subject: 'WiseBot Academy — Αλλαγή κωδικού / Reset your password',
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:24px;">
            <h2 style="color:#1a1a2e;margin-bottom:4px;">Αλλαγή κωδικού</h2>
            <p>Ζητήσατε νέο κωδικό για τον λογαριασμό σας στο WiseBot Academy. Πατήστε το κουμπί και διαλέξτε τον καινούργιο:</p>
            <p style="text-align:center;margin:28px 0;">
              <a href="${link}" style="background:#4f46e5;color:#fff;padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:bold;display:inline-block;">ΝΕΟΣ ΚΩΔΙΚΟΣ / NEW PASSWORD</a>
            </p>
            <p style="color:#666;font-size:13px;">Ο σύνδεσμος ισχύει για λίγη ώρα και μόνο στον browser που θα τον ανοίξετε. Αν το κουμπί δεν λειτουργεί, αντιγράψτε αυτόν τον σύνδεσμο:<br>
              <a href="${link}" style="color:#4f46e5;word-break:break-all;">${link}</a></p>
            <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
            <p style="color:#999;font-size:12px;">Αν δεν ζητήσατε εσείς αλλαγή κωδικού, αγνοήστε αυτό το email· ο κωδικός σας δεν αλλάζει.<br>© 2026 WiseBot Academy — wisebot.gr</p>
          </div>
        `,
      }),
    });
    if (!mailResp.ok) {
      console.error('[Reset Password] Resend error:', mailResp.status, (await mailResp.text()).slice(0, 200));
      return res.status(500).json({ error: 'Email could not be sent' });
    }
    console.log('[Reset Password] Reset email sent via Resend');
    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('[Reset Password]', err?.message || err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
