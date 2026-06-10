/**
 * RATE LIMITER — Supabase-backed, per user per endpoint
 * =======================================================
 * Uses the rate_limits table to track request counts in a rolling window.
 *
 * NOTE: No static imports — uses @supabase/supabase-js dynamic imports inline
 * to prevent ERR_MODULE_NOT_FOUND when this module is dynamically imported on Vercel.
 *
 * Usage:
 *   const { allowed, remaining, retryAfter } = await checkRateLimit(userId, 'video', 3, 60);
 *   if (!allowed) return res.status(429).json({ error: 'Too many requests', retryAfter });
 */

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter?: number; // seconds until window resets
}

async function getSupabase() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

/**
 * @param userId   Supabase user ID
 * @param endpoint Short endpoint key (e.g. 'video', 'suno', 'image')
 * @param maxCount Max requests allowed per window
 * @param windowMinutes Rolling window duration in minutes
 */
export async function checkRateLimit(
  userId: string,
  endpoint: string,
  maxCount: number,
  windowMinutes: number
): Promise<RateLimitResult> {
  try {
    const supabase = await getSupabase();
    const windowMs = windowMinutes * 60 * 1000;
    const now = new Date();

    // Get current rate limit row for this user+endpoint
    const { data: existing } = await supabase
      .from('rate_limits')
      .select('count, window_start')
      .eq('user_id', userId)
      .eq('endpoint', endpoint)
      .single();

    if (existing) {
      const windowStart = new Date(existing.window_start).getTime();
      const elapsed = now.getTime() - windowStart;

      if (elapsed < windowMs) {
        // Still within window
        if (existing.count >= maxCount) {
          const retryAfter = Math.ceil((windowMs - elapsed) / 1000);
          return { allowed: false, remaining: 0, retryAfter };
        }
        // Increment count
        await supabase
          .from('rate_limits')
          .update({ count: existing.count + 1 })
          .eq('user_id', userId)
          .eq('endpoint', endpoint);
        return { allowed: true, remaining: maxCount - existing.count - 1 };
      } else {
        // Window expired — reset
        await supabase
          .from('rate_limits')
          .update({ count: 1, window_start: now.toISOString() })
          .eq('user_id', userId)
          .eq('endpoint', endpoint);
        return { allowed: true, remaining: maxCount - 1 };
      }
    } else {
      // First request — insert new row
      await supabase
        .from('rate_limits')
        .insert({ user_id: userId, endpoint, count: 1, window_start: now.toISOString() });
      return { allowed: true, remaining: maxCount - 1 };
    }
  } catch (err: any) {
    // Fail closed — if the limiter DB is unreachable we block rather than let
    // expensive AI calls through unmetered. Clients can retry shortly.
    console.error('[rateLimit] Error (failing closed):', err.message);
    return { allowed: false, remaining: 0, retryAfter: 60 };
  }
}

/**
 * AI access guard — picks the right rate-limit bucket for the caller.
 *
 * Guests (no/invalid token) share the literal id 'guest', so a per-user limit
 * would be one global bucket for the whole internet. Instead we limit guests
 * per client IP, while authenticated users keep their own per-user bucket.
 *
 * Usage in an AI endpoint (after getAuthUser):
 *   const rl = await aiRateLimit(req, user, 'image', { guest: 10, user: 60, windowMinutes: 60 });
 *   if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });
 */
export async function aiRateLimit(
  req: any,
  user: { id: string; role?: string } | null,
  endpoint: string,
  limits: { guest: number; user: number; windowMinutes: number },
): Promise<RateLimitResult> {
  const isGuest = !user || user.id === 'guest' || user.role === 'guest';
  if (isGuest) {
    const ip = getClientIp(req);
    return checkIpRateLimit(ip, `ai:${endpoint}`, limits.guest, limits.windowMinutes);
  }
  return checkRateLimit(user.id, `ai:${endpoint}`, limits.user, limits.windowMinutes);
}

/**
 * Extract the real client IP from a Vercel/Node request.
 * Vercel sets x-forwarded-for for all requests through its edge network.
 */
export function getClientIp(req: any): string {
  const forwarded = req.headers?.['x-forwarded-for'];
  if (forwarded) return (forwarded as string).split(',')[0].trim();
  return req.connection?.remoteAddress || req.socket?.remoteAddress || 'unknown';
}

/**
 * IP-based rate limiter for public (unauthenticated) endpoints.
 * Uses the ip_rate_limits table — no FK dependency on auth.users.
 *
 * @param ip           Client IP address (use getClientIp(req))
 * @param endpoint     Short endpoint key (e.g. 'signup', 'contact')
 * @param maxCount     Max requests allowed per window
 * @param windowMinutes Rolling window duration in minutes
 */
export async function checkIpRateLimit(
  ip: string,
  endpoint: string,
  maxCount: number,
  windowMinutes: number,
): Promise<RateLimitResult> {
  try {
    const supabase = await getSupabase();
    const windowMs = windowMinutes * 60 * 1000;
    const now = new Date();

    const { data: existing } = await supabase
      .from('ip_rate_limits')
      .select('count, window_start')
      .eq('ip', ip)
      .eq('endpoint', endpoint)
      .single();

    if (existing) {
      const windowStart = new Date(existing.window_start).getTime();
      const elapsed = now.getTime() - windowStart;

      if (elapsed < windowMs) {
        // Still within window
        if (existing.count >= maxCount) {
          const retryAfter = Math.ceil((windowMs - elapsed) / 1000);
          return { allowed: false, remaining: 0, retryAfter };
        }
        await supabase
          .from('ip_rate_limits')
          .update({ count: existing.count + 1 })
          .eq('ip', ip)
          .eq('endpoint', endpoint);
        return { allowed: true, remaining: maxCount - existing.count - 1 };
      } else {
        // Window expired — reset
        await supabase
          .from('ip_rate_limits')
          .update({ count: 1, window_start: now.toISOString() })
          .eq('ip', ip)
          .eq('endpoint', endpoint);
        return { allowed: true, remaining: maxCount - 1 };
      }
    } else {
      // First request from this IP
      await supabase
        .from('ip_rate_limits')
        .insert({ ip, endpoint, count: 1, window_start: now.toISOString() });
      return { allowed: true, remaining: maxCount - 1 };
    }
  } catch (err: any) {
    // Fail closed — see checkRateLimit above for rationale.
    console.error('[rateLimit] IP rate limit error (failing closed):', err.message);
    return { allowed: false, remaining: 0, retryAfter: 60 };
  }
}
