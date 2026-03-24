/**
 * SUPABASE ADMIN CLIENT — Server-side only
 * ==========================================
 * Uses the service_role key for admin operations (bypass RLS).
 * Only used in serverless functions (Stripe webhook, admin ops).
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || '';

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
