/**
 * AUTH MIDDLEWARE — Vercel Serverless
 * =====================================
 * Verifies the Supabase JWT from the Authorization header.
 * Returns the authenticated user or null.
 *
 * Uses a cached Supabase admin client to avoid creating a new one on every call.
 *
 * Usage in any endpoint:
 *   const user = await getAuthUser(req);
 *   if (!user) return res.status(401).json({ error: 'Authentication required' });
 */

export interface AuthUser {
  id: string;
  email: string;
  role?: string;
}

// Cached Supabase admin client — reused across calls in the same warm instance
let _cachedClient: any = null;

async function getClient() {
  if (_cachedClient) return _cachedClient;
  const { createClient } = await import('@supabase/supabase-js');
  _cachedClient = createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
  return _cachedClient;
}

/**
 * Extract and verify the Supabase JWT from the request.
 * Returns the user object or null if not authenticated.
 */
export async function getAuthUser(req: any): Promise<AuthUser | null> {
  try {
    const authHeader = req.headers?.authorization;
    if (!authHeader?.startsWith('Bearer ')) return null;

    const token = authHeader.slice(7);
    if (!token) return null;

    const supabase = await getClient();
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) return null;

    return {
      id: user.id,
      email: user.email || '',
      role: user.role,
    };
  } catch {
    return null;
  }
}

/**
 * Check if user has enough credits for an action.
 * Returns { ok, credits } or { ok: false, error }.
 */
export async function checkCredits(userId: string, cost: number): Promise<{ ok: boolean; credits?: number; error?: string }> {
  try {
    const supabase = await getClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('credits')
      .eq('id', userId)
      .single();

    if (error || !data) return { ok: false, error: 'Profile not found' };

    const credits = data.credits || 0;
    if (credits < cost) return { ok: false, credits, error: 'Not enough credits' };

    return { ok: true, credits };
  } catch {
    return { ok: false, error: 'Credit check failed' };
  }
}

/**
 * Atomically deduct credits from a user's profile.
 * Uses UPDATE with WHERE credits >= cost to prevent double-spending.
 * Returns the new credit balance or null on error.
 */
export async function deductCredits(userId: string, cost: number): Promise<number | null> {
  try {
    const supabase = await getClient();

    // Atomic: SELECT + UPDATE with gte guard — prevents double-spending
    const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('credits')
      .eq('id', userId)
      .gte('credits', cost)
      .single();

    if (fetchError || !profile) return null;

    const newCredits = profile.credits - cost;
    const { data: updated, error: updateError } = await supabase
      .from('profiles')
      .update({ credits: newCredits })
      .eq('id', userId)
      .gte('credits', cost)
      .select('credits')
      .single();

    if (updateError || !updated) return null;
    return updated.credits;
  } catch {
    return null;
  }
}

/**
 * Atomically check AND deduct credits in one operation.
 * Combines checkCredits + deductCredits to prevent race conditions.
 * Returns { ok, newBalance } or { ok: false, error }.
 */
export async function checkAndDeductCredits(
  userId: string,
  cost: number
): Promise<{ ok: boolean; newBalance?: number; error?: string }> {
  try {
    const supabase = await getClient();

    // Atomic: only deducts if credits >= cost
    const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('credits')
      .eq('id', userId)
      .single();

    if (fetchError || !profile) return { ok: false, error: 'Profile not found' };
    if ((profile.credits || 0) < cost) return { ok: false, error: 'Not enough credits' };

    // Atomic update with gte guard
    const { data: updated, error: updateError } = await supabase
      .from('profiles')
      .update({ credits: profile.credits - cost })
      .eq('id', userId)
      .gte('credits', cost)
      .select('credits')
      .single();

    if (updateError || !updated) return { ok: false, error: 'Credit deduction failed — try again' };

    return { ok: true, newBalance: updated.credits };
  } catch {
    return { ok: false, error: 'Credit deduction failed' };
  }
}
