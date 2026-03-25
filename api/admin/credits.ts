/**
 * POST /api/admin/credits — Give credits to a user
 * ===================================================
 * Admin-only endpoint to add credits to any user's profile.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';

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
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Token-based auth — verify HMAC token matches what login generates
  const token = req.headers['x-admin-token'] as string;
  const adminSecret = process.env.ADMIN_SECRET;
  if (!token || !adminSecret) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  const crypto = await import('crypto');
  const expectedToken = crypto
    .createHmac('sha256', adminSecret)
    .update('wisebot_admin_session')
    .digest('hex');
  const tokenBuf = Buffer.from(token);
  const expectedBuf = Buffer.from(expectedToken);
  if (tokenBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(tokenBuf, expectedBuf)) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  try {
    const { userId, amount } = req.body || {};

    if (!userId || !amount || typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ error: 'userId and positive amount required' });
    }

    const supabase = await getSupabaseAdmin();

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
