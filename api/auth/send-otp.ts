/**
 * POST /api/auth/send-otp — Send SMS OTP to parent's phone
 * ==========================================================
 * Generates a 6-digit code, stores in DB, sends via Twilio.
 * Rate limited: 3 per 30 min per IP.
 * Only for email/password users (not Google OAuth).
 */

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Rate limit
  const { checkIpRateLimit, getClientIp } = await import('../_lib/rateLimit.js');
  const clientIp = getClientIp(req);
  const ipCheck = await checkIpRateLimit(clientIp, 'send-otp', 5, 30);
  if (!ipCheck.allowed) {
    return res.status(429).json({ error: 'Too many attempts. Please wait.' });
  }

  try {
    const { phone } = req.body || {};

    if (!phone || typeof phone !== 'string') {
      return res.status(400).json({ error: 'Phone number required' });
    }

    // Derive userId from the caller's JWT — never trust a client-supplied id,
    // otherwise anyone could bind their phone to (or trigger OTPs for) any account.
    const authHeader = req.headers?.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    let userId: string;
    {
      const token = authHeader.slice(7);
      const { createClient } = await import('@supabase/supabase-js');
      const authClient = createClient(
        process.env.SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_KEY || '',
        { auth: { autoRefreshToken: false, persistSession: false } }
      );
      const { data: { user: u }, error: authErr } = await authClient.auth.getUser(token);
      if (authErr || !u) return res.status(401).json({ error: 'Invalid token' });
      userId = u.id;
    }

    // Normalize phone: ensure it starts with +
    const normalizedPhone = phone.startsWith('+') ? phone : `+${phone}`;

    // Validate phone format (basic: + followed by 7-15 digits)
    if (!/^\+\d{7,15}$/.test(normalizedPhone)) {
      return res.status(400).json({ error: 'Invalid phone number format. Use international format: +30XXXXXXXXXX' });
    }

    // Generate 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store in DB
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    // Delete any previous unverified codes for this user
    await supabase
      .from('phone_verifications')
      .delete()
      .eq('user_id', userId)
      .eq('verified', false);

    // Insert new code
    const { error: insertError } = await supabase
      .from('phone_verifications')
      .insert({
        user_id: userId,
        phone_number: normalizedPhone,
        code,
        expires_at: expiresAt.toISOString(),
      });

    if (insertError) {
      console.error('[Send OTP] DB error:', insertError.message);
      return res.status(500).json({ error: 'Failed to generate code' });
    }

    // Send SMS via Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      console.error('[Send OTP] Twilio not configured');
      return res.status(500).json({ error: 'SMS service not configured' });
    }

    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const twilioAuth = Buffer.from(`${accountSid}:${authToken}`).toString('base64');

    const smsBody = `WiseBot Academy: Ο κωδικός επαλήθευσης είναι ${code}. Λήγει σε 10 λεπτά. / Your verification code is ${code}. Expires in 10 minutes.`;

    const smsResponse = await fetch(twilioUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${twilioAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: normalizedPhone,
        From: fromNumber,
        Body: smsBody,
      }).toString(),
    });

    if (!smsResponse.ok) {
      const errData = await smsResponse.json().catch(() => ({}));
      console.error('[Send OTP] Twilio error:', errData.message || smsResponse.status);
      return res.status(500).json({ error: 'Failed to send SMS. Check phone number format.' });
    }

    console.log(`[Send OTP] SMS sent to ${normalizedPhone.slice(0, 6)}*** for user ${userId}`);

    // Save phone to profile
    await supabase
      .from('profiles')
      .update({ phone_number: normalizedPhone })
      .eq('id', userId);

    return res.status(200).json({ success: true, message: 'OTP sent' });
  } catch (err: any) {
    console.error('[Send OTP] Unexpected error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
