/**
 * AUTH MIDDLEWARE — Vercel Serverless
 * =====================================
 * Verifies the Supabase JWT from the Authorization header.
 * Returns the authenticated user or null.
 *
 * Usage in any endpoint:
 *   const user = await getAuthUser(req);
 *   if (!user) return res.status(401).json({ error: 'Authentication required' });
 */

import { getSupabaseAdmin } from './supabase';

export interface AuthUser {
  id: string;
  email: string;
  role?: string;
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

    const supabase = await getSupabaseAdmin();
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
    const supabase = await getSupabaseAdmin();
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
 * Deduct credits from a user's profile.
 * Returns the new credit balance or null on error.
 */
export async function deductCredits(userId: string, cost: number): Promise<number | null> {
  try {
    const supabase = await getSupabaseAdmin();

    // Use RPC or manual update with check
    const { data, error } = await supabase
      .from('profiles')
      .select('credits')
      .eq('id', userId)
      .single();

    if (error || !data) return null;

    const currentCredits = data.credits || 0;
    if (currentCredits < cost) return null;

    const newCredits = currentCredits - cost;
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ credits: newCredits })
      .eq('id', userId);

    if (updateError) return null;
    return newCredits;
  } catch {
    return null;
  }
}
