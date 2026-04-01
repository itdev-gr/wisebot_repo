/**
 * RATE LIMITER — Supabase-backed, per user per endpoint
 * =======================================================
 * Uses the rate_limits table to track request counts in a rolling window.
 *
 * Usage:
 *   const { allowed, remaining, retryAfter } = await checkRateLimit(userId, 'video', 3, 60);
 *   if (!allowed) return res.status(429).json({ error: 'Too many requests', retryAfter });
 */

import { getSupabaseAdmin } from './supabase';

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter?: number; // seconds until window resets
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
    const supabase = await getSupabaseAdmin();
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
    // If rate limiting fails (DB error), allow request through (fail open)
    console.error('[rateLimit] Error:', err.message);
    return { allowed: true, remaining: 0 };
  }
}
