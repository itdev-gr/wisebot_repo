/**
 * POST /api/log-error — lightweight client-side error logging
 * ============================================================
 * Called by ErrorBoundary on uncaught React render errors.
 * No auth required (errors can occur before login).
 * Rate-limited by Vercel's built-in IP limits.
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { error_message, error_stack, component, page_url } = req.body || {};
    if (!error_message) return res.status(400).json({ error: 'error_message required' });

    // Optionally get user from auth header (best-effort)
    let userId: string | null = null;
    try {
      const authHeader = req.headers?.authorization;
      if (authHeader?.startsWith('Bearer ')) {
        const { createClient } = await import('@supabase/supabase-js');
        const supabase = createClient(
          process.env.SUPABASE_URL || '',
          process.env.SUPABASE_SERVICE_KEY || '',
          { auth: { autoRefreshToken: false, persistSession: false } }
        );
        const { data: { user } } = await supabase.auth.getUser(authHeader.slice(7));
        userId = user?.id || null;
      }
    } catch {}

    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    await supabase.from('error_logs').insert({
      user_id: userId,
      error_message: String(error_message).slice(0, 500),
      error_stack: error_stack ? String(error_stack).slice(0, 2000) : null,
      component: component ? String(component).slice(0, 1000) : null,
      page_url: page_url ? String(page_url).slice(0, 200) : null,
    });

    console.error('[log-error] Client error logged:', error_message?.slice(0, 100));
    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('[log-error] Failed to log error:', err.message);
    return res.status(200).json({ success: false }); // Still 200 — don't cascade
  }
}
