/**
 * SUPABASE ADMIN CLIENT — Server-side only
 * ==========================================
 * Uses the service_role key for admin operations (bypass RLS).
 * Only used in serverless functions (Stripe webhook, admin ops).
 *
 * Lazy-loaded to avoid bundling @supabase/supabase-js at the top level,
 * which can cause FUNCTION_INVOCATION_FAILED on Vercel serverless.
 */

let _supabaseAdmin: any = null;

export async function getSupabaseAdmin() {
  if (!_supabaseAdmin) {
    const { createClient } = await import('@supabase/supabase-js');
    _supabaseAdmin = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );
  }
  return _supabaseAdmin;
}
