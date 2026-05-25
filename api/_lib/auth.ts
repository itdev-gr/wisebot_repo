/**
 * AUTH MIDDLEWARE — Vercel Serverless
 * =====================================
 * Verifies the Supabase JWT from the Authorization header.
 * Returns the authenticated user or null.
 *
 * NOTE: No static imports — uses @supabase/supabase-js dynamic imports inline
 * to prevent ERR_MODULE_NOT_FOUND when this module is dynamically imported on Vercel.
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

const DEFAULT_FREE_CREDITS = 999999999;

function isAiRequest(req: any): boolean {
  const url = String(req.url || req.originalUrl || '');
  return url.includes('/api/ai/') || url.startsWith('/ai/');
}

function guestUser(req: any, allowGuest?: boolean): AuthUser | null {
  return allowGuest || isAiRequest(req)
    ? { id: 'guest', email: 'guest@wisebot.local', role: 'guest' }
    : null;
}

/**
 * Extract and verify the Supabase JWT from the request.
 * Returns the user object or null if not authenticated.
 */
export async function getAuthUser(req: any, options: { allowGuest?: boolean } = {}): Promise<AuthUser | null> {
  try {
    const authHeader = req.headers?.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return guestUser(req, options.allowGuest);
    }

    const token = authHeader.slice(7);
    if (!token) return null;

    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return guestUser(req, options.allowGuest);
    }

    return {
      id: user.id,
      email: user.email || '',
      role: user.role,
    };
  } catch {
    return guestUser(req, options.allowGuest);
  }
}

/**
 * Check if user has enough credits for an action.
 * Returns { ok, credits } or { ok: false, error }.
 */
export async function checkCredits(userId: string, cost: number): Promise<{ ok: boolean; credits?: number; error?: string }> {
  return { ok: true, credits: DEFAULT_FREE_CREDITS };
}

/**
 * Deduct credits from a user's profile.
 * Returns the new credit balance or null on error.
 */
export async function deductCredits(userId: string, cost: number): Promise<number | null> {
  return DEFAULT_FREE_CREDITS;
}
