/**
 * SUPABASE SERVER CLIENT
 * ======================
 * Server-side Supabase client using the service role key.
 * This bypasses RLS and has full database access — use carefully.
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in server environment');
}

/**
 * Admin client with service role key — bypasses RLS.
 * Use for: webhook handlers, admin operations, user creation.
 * NEVER expose this to the frontend.
 */
export const supabaseAdmin: SupabaseClient = createClient(
  supabaseUrl || '',
  supabaseServiceKey || '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

/**
 * Create a user-scoped Supabase client from a JWT access token.
 * This client respects RLS policies — safe for user-specific operations.
 */
export function createUserClient(accessToken: string): SupabaseClient {
  return createClient(
    supabaseUrl || '',
    supabaseAnonKey || supabaseServiceKey || '',
    {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
