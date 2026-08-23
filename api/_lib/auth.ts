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

// Guests get a small free trial enforced client-side + IP rate limits server-side.
// Authenticated users have a real balance in profiles.credits.
const GUEST_FREE_CREDITS = 10;

// `allowGuest` is the endpoint's explicit decision. (An earlier version also
// let every /api/ai/* request through as a guest regardless, which made
// `allowGuest: false` meaningless for exactly the endpoints that spend money.)
function guestUser(allowGuest?: boolean): AuthUser | null {
  return allowGuest
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
      return guestUser(options.allowGuest);
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
      return guestUser(options.allowGuest);
    }

    return {
      id: user.id,
      email: user.email || '',
      role: user.role,
    };
  } catch {
    return guestUser(options.allowGuest);
  }
}

async function getAdminClient() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

/**
 * Check if user has enough credits for an action.
 * Guests are allowed through (their trial is enforced client-side and abuse
 * is capped by IP rate limits); authenticated users use profiles.credits.
 * Fails open on DB errors so a Supabase blip never blocks paying users.
 */
export async function checkCredits(userId: string, cost: number): Promise<{ ok: boolean; credits?: number; error?: string }> {
  if (!userId || userId === 'guest') {
    return { ok: true, credits: GUEST_FREE_CREDITS };
  }
  try {
    const supabase = await getAdminClient();
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('credits')
      .eq('id', userId)
      .single();

    if (error || !profile) {
      // Profile lookup failed — don't block the user on our own error.
      console.error('[credits] check failed:', error?.message);
      return { ok: true };
    }

    const credits = profile.credits || 0;
    if (credits < cost) {
      return { ok: false, credits, error: 'Insufficient credits' };
    }
    return { ok: true, credits };
  } catch (err: any) {
    console.error('[credits] check error:', err.message);
    return { ok: true };
  }
}

/**
 * Deduct credits from an authenticated user's profile via the atomic
 * spend_credits RPC (row lock + balance check + transaction log).
 * Guests are a no-op. Returns true if deducted (or guest), false if the
 * balance was insufficient at deduction time.
 */
export async function deductCredits(userId: string, cost: number, action: string = 'AI_GENERATION'): Promise<boolean> {
  if (!userId || userId === 'guest' || cost <= 0) return true;
  try {
    const supabase = await getAdminClient();
    const { data, error } = await supabase.rpc('spend_credits', {
      p_user_id: userId,
      p_amount: cost,
      p_action: action,
    });
    if (error) {
      console.error('[credits] deduct RPC error:', error.message);
      return true; // fail open — generation already happened, don't surface an error
    }
    return data === true;
  } catch (err: any) {
    console.error('[credits] deduct error:', err.message);
    return true;
  }
}

/**
 * Give credits back for a paid task that failed after the charge.
 * ----------------------------------------------------------------
 * Tasks (song, 3D, video) are charged when the provider accepts the job, and the
 * job can still fail minutes later. The status endpoint calls this when it sees
 * a terminal failure. It is idempotent per `taskId`: a unique index on
 * credit_transactions(user_id, action, action_id) makes a second refund for the
 * same task fail inside earn_credits, which rolls the whole RPC back — so a
 * client polling every few seconds can never be refunded twice.
 *
 * Returns the new balance if a refund happened, null if it was already refunded,
 * skipped (guest) or failed.
 */
export async function refundCredits(
  userId: string,
  amount: number,
  action: string,
  taskId: string,
): Promise<number | null> {
  if (!userId || userId === 'guest' || amount <= 0 || !taskId) return null;
  try {
    const supabase = await getAdminClient();
    const { data, error } = await supabase.rpc('earn_credits', {
      p_user_id: userId,
      p_amount: amount,
      p_action: action,
      p_action_id: taskId,
    });
    if (error) {
      // 23505 = unique_violation → this task was refunded by an earlier poll.
      if (error.code !== '23505') console.error('[credits] refund RPC error:', error.message);
      return null;
    }
    console.log(`[credits] refunded ${amount} to ${userId} for ${action} ${taskId}`);
    return typeof data === 'number' ? data : null;
  } catch (err: any) {
    console.error('[credits] refund error:', err.message);
    return null;
  }
}
