/**
 * POST /api/admin/refund — Refund credits to a user
 * ===================================================
 * Admin-only endpoint to add credits back to a user's profile with a reason.
 * Also logs the refund to the credit_transactions table.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ADMIN_CORS_HEADERS, verifyAdminToken } from '../_lib/adminAuth.js';

async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', ADMIN_CORS_HEADERS);
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Token-based auth — verify HMAC token matches what login generates
  if (!verifyAdminToken(req.headers['x-admin-token'])) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  try {
    const { userId, amount, reason } = req.body || {};

    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'userId is required' });
    }
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ error: 'Positive amount required' });
    }
    if (!reason || typeof reason !== 'string') {
      return res.status(400).json({ error: 'reason is required' });
    }

    const supabase = await getSupabaseAdmin();

    // Fetch current credits
    const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('credits')
      .eq('id', userId)
      .single();

    if (fetchError || !profile) {
      return res.status(404).json({ error: 'User not found' });
    }

    const previousCredits = profile.credits || 0;
    const newCredits = previousCredits + amount;

    // Update credits
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ credits: newCredits })
      .eq('id', userId);

    if (updateError) {
      return res.status(500).json({ error: updateError.message });
    }

    // Log to credit_transactions table
    const { error: logError } = await supabase
      .from('credit_transactions')
      .insert({
        user_id: userId,
        action: 'ADMIN_REFUND',
        amount: amount,
        reason: reason,
        balance_after: newCredits,
      });

    if (logError) {
      // Non-fatal — credits were already updated, just log the error
      console.error('[Admin Refund] Failed to log transaction:', logError);
    }

    console.log(`[Admin Refund] User ${userId}: +${amount} credits (${reason}). Balance: ${previousCredits} -> ${newCredits}`);

    return res.status(200).json({
      success: true,
      userId,
      previousCredits,
      refunded: amount,
      newCredits,
      reason,
    });
  } catch (err: any) {
    console.error('[Admin Refund] Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
