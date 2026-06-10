/**
 * POST /api/auth/verify-otp — Verify SMS OTP code
 * ==================================================
 * Checks the 6-digit code against the DB.
 * On success: marks phone_verified=true in profile, confirms email in auth.
 * Max 5 attempts per code.
 * Rate limited: 20 per 30 min per IP (prevents brute force across codes).
 */

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // IP-based rate limit: max 20 OTP attempts per 30 min per IP
  const { checkIpRateLimit, getClientIp } = await import('../_lib/rateLimit');
  const clientIp = getClientIp(req);
  const ipCheck = await checkIpRateLimit(clientIp, 'verify-otp', 20, 30);
  if (!ipCheck.allowed) {
    return res.status(429).json({ error: 'Too many attempts. Please wait before trying again.' });
  }

  try {
    const { code } = req.body || {};

    if (!code || typeof code !== 'string' || code.length !== 6) {
      return res.status(400).json({ error: 'Invalid code format' });
    }

    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    // Derive userId from the caller's JWT — never trust a client-supplied id,
    // otherwise an attacker could brute-force / verify another account's code.
    const authHeader = req.headers?.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    const { data: { user: authedUser }, error: authErr } =
      await supabase.auth.getUser(authHeader.slice(7));
    if (authErr || !authedUser) return res.status(401).json({ error: 'Invalid token' });
    const userId = authedUser.id;

    // Find the latest unverified code for this user
    const { data: verification, error: fetchError } = await supabase
      .from('phone_verifications')
      .select('*')
      .eq('user_id', userId)
      .eq('verified', false)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (fetchError || !verification) {
      return res.status(400).json({ error: 'No pending verification found. Request a new code.' });
    }

    // Check expiry
    if (new Date(verification.expires_at) < new Date()) {
      return res.status(400).json({ error: 'Code expired. Request a new one.' });
    }

    // Check max attempts (prevent brute force)
    if (verification.attempts >= 5) {
      return res.status(429).json({ error: 'Too many attempts. Request a new code.' });
    }

    // Increment attempts
    await supabase
      .from('phone_verifications')
      .update({ attempts: verification.attempts + 1 })
      .eq('id', verification.id);

    // Check code
    if (verification.code !== code) {
      const remaining = 4 - verification.attempts;
      return res.status(400).json({
        error: `Wrong code. ${remaining > 0 ? `${remaining} attempts remaining.` : 'No attempts left. Request a new code.'}`,
      });
    }

    // Code is correct! Mark as verified
    await supabase
      .from('phone_verifications')
      .update({ verified: true })
      .eq('id', verification.id);

    // Update profile: phone_verified = true, parent_verified = true
    await supabase
      .from('profiles')
      .update({
        phone_verified: true,
        parent_verified: true,
        phone_number: verification.phone_number,
      })
      .eq('id', userId);

    // Also confirm the email in auth (so the user can login without clicking email link)
    // This is the key: SMS verification acts as the primary verification for non-Google users
    await supabase.auth.admin.updateUserById(userId, {
      email_confirm: true,
    });

    console.log(`[Verify OTP] Phone verified for user ${userId}: ${verification.phone_number.slice(0, 6)}***`);

    return res.status(200).json({ success: true, message: 'Phone verified successfully' });
  } catch (err: any) {
    console.error('[Verify OTP] Unexpected error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
