/**
 * GET /api/auth/lookup-user?username=xxx
 * ==========================================
 * Checks whether a username (child_name) exists in the profiles table.
 * Returns { found: true, name: 'ActualName' } or { found: false }.
 * Used by GiftModal for live username verification before sending a gift.
 *
 * Uses inline auth (same pattern as gift.ts / send-gift-item.ts)
 * to avoid ERR_MODULE_NOT_FOUND issues with static _lib imports on Vercel.
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // Verify JWT — inline pattern (same as gift.ts)
  const authHeader = req.headers?.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ found: false, error: 'Authentication required' });
  }

  let callerId: string;
  try {
    const token = authHeader.slice(7);
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) return res.status(401).json({ found: false, error: 'Invalid token' });
    callerId = user.id;
  } catch {
    return res.status(401).json({ found: false, error: 'Auth failed' });
  }

  // Rate limit: max 30 lookups per 10 minutes per user (prevents username enumeration)
  const { checkRateLimit } = await import('../_lib/rateLimit');
  const lookupCheck = await checkRateLimit(callerId, 'lookup', 30, 10);
  if (!lookupCheck.allowed) {
    return res.status(429).json({
      found: false,
      error: `Πολλές αναζητήσεις. Παρακαλώ περίμενε λίγα λεπτά. / Too many lookups. Please wait a few minutes.`,
      retryAfter: lookupCheck.retryAfter,
    });
  }

  const username = (req.query?.username || '').toString().trim();
  if (!username || username.length < 2) {
    return res.status(400).json({ found: false, error: 'Username too short' });
  }
  if (username.length > 30) {
    return res.status(400).json({ found: false, error: 'Username too long' });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('id, child_name')
      .ilike('child_name', username)
      .neq('id', callerId)       // can't gift yourself
      .not('child_name', 'is', null)   // skip profiles with no nickname
      .maybeSingle();

    if (error) {
      console.error('[lookup-user] DB error:', error.message);
      return res.status(500).json({ found: false, error: 'Lookup failed' });
    }

    if (!data || !data.child_name) {
      return res.status(200).json({ found: false });
    }

    return res.status(200).json({ found: true, name: data.child_name });
  } catch (err: any) {
    console.error('[lookup-user] Error:', err.message);
    return res.status(500).json({ found: false, error: 'Lookup failed' });
  }
}
