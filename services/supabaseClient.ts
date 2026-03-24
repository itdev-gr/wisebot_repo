/**
 * SUPABASE CLIENT — Frontend (Browser)
 * =====================================
 * Uses the anon key (safe for frontend — RLS protects data).
 * Auth sessions are managed automatically by the Supabase client.
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY — auth & sync disabled');
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder');

export const isSupabaseConfigured = () => !!supabaseUrl && !!supabaseAnonKey;
