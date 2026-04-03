/**
 * POST /api/auth/resend-verification
 * ====================================
 * Resends the email verification link to the parent.
 * Rate limited: 3 per 30 minutes per IP.
 */

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Rate limit
  const { checkIpRateLimit, getClientIp } = await import('../_lib/rateLimit');
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

    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email.trim(),
      options: { emailRedirectTo: 'https://wisebot.gr/auth' },
    });

    if (error) {
      console.error('[Resend Verification] Error:', error.message);
      // Don't reveal if email exists or not — always return success
    }

    return res.status(200).json({ success: true, message: 'If this email has an account, a verification link has been sent.' });
  } catch (err: any) {
    console.error('[Resend Verification] Unexpected error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
