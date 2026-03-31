/**
 * GET /api/auth/lookup-user?username=xxx
 * ==========================================
 * Checks whether a username (child_name) exists in the profiles table.
 * Returns { found: true, name: 'ActualName' } or { found: false }.
 * Used by GiftModal for live username verification before sending a gift.
 */
import { getSupabaseAdmin } from '../_lib/supabase';
import { getAuthUser } from '../_lib/auth';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // Must be logged in
  const user = await getAuthUser(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  const username = (req.query?.username || '').toString().trim();
  if (!username || username.length < 2) {
    return res.status(400).json({ found: false, error: 'Username too short' });
  }
  if (username.length > 30) {
    return res.status(400).json({ found: false, error: 'Username too long' });
  }

  try {
    const supabase = await getSupabaseAdmin();

    const { data, error } = await supabase
      .from('profiles')
      .select('id, child_name')
      .ilike('child_name', username)
      .neq('id', user.id)          // can't gift yourself
      .maybeSingle();

    if (error) {
      console.error('[lookup-user] DB error:', error.message);
      return res.status(500).json({ found: false, error: 'Lookup failed' });
    }

    if (!data || !data.child_name) {
      return res.status(200).json({ found: false });
    }

    return res.status(200).json({ found: true, name: data.child_name });
  } catch (err: any) {
    console.error('[lookup-user] Error:', err.message);
    return res.status(500).json({ found: false, error: 'Lookup failed' });
  }
}
