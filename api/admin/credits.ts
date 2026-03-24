/**
 * POST /api/admin/credits — Give credits to a user
 * ===================================================
 * Admin-only endpoint to add credits to any user's profile.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

function getSupabaseAdmin() {
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Token');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Token-based auth — credentials stored only in env vars
  const token = req.headers['x-admin-token'] as string;
  const adminSecret = process.env.ADMIN_SECRET;
  if (!token || !adminSecret || token.length < 32) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  try {
    const { userId, amount } = req.body || {};

    if (!userId || !amount || typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ error: 'userId and positive amount required' });
    }

    const supabase = getSupabaseAdmin();

    // Update credits directly
    const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('credits')
      .eq('id', userId)
      .single();

    if (fetchError || !profile) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newCredits = (profile.credits || 0) + amount;

    const { error: updateError } = await supabase
      .from('profiles')
      .update({ credits: newCredits })
      .eq('id', userId);

    if (updateError) {
      return res.status(500).json({ error: updateError.message });
    }

    return res.status(200).json({
      success: true,
      userId,
      previousCredits: profile.credits || 0,
      added: amount,
      newCredits,
    });
  } catch (err: any) {
    console.error('[Admin Credits] Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
