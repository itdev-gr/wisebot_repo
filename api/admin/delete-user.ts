/**
 * POST /api/admin/delete-user — Delete a user account
 * ====================================================
 * Admin-only endpoint to permanently delete any user account.
 * Uses supabaseAdmin.auth.admin.deleteUser() which cascade deletes all data.
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
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Token');
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
    const { userId, reason } = req.body || {};

    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'userId is required' });
    }
    if (!reason || typeof reason !== 'string') {
      return res.status(400).json({ error: 'reason is required' });
    }

    const supabase = await getSupabaseAdmin();

    // Delete user via Supabase Auth Admin API — this cascade deletes all data
    const { error: deleteError } = await supabase.auth.admin.deleteUser(userId);

    if (deleteError) {
      console.error('[Admin DeleteUser] Supabase error:', deleteError);
      return res.status(500).json({ error: deleteError.message });
    }

    console.log(`[Admin DeleteUser] User ${userId} deleted. Reason: ${reason}`);

    return res.status(200).json({
      success: true,
      userId,
      reason,
      deletedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error('[Admin DeleteUser] Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
