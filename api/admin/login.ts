/**
 * POST /api/admin/login — Admin authentication
 * ==============================================
 * Validates admin credentials against environment variables.
 * Returns a session token for subsequent admin API calls.
 * Credentials are NEVER stored in source code.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

function safeCompare(a: string, b: string): boolean {
  // Hash both to ensure equal length for timingSafeEqual
  const hashA = crypto.createHash('sha256').update(a).digest();
  const hashB = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Credentials are stored ONLY in Vercel Environment Variables
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminSecret = process.env.ADMIN_SECRET;

    if (!adminEmail || !adminPassword || !adminSecret) {
      console.error('[admin/login] Missing env vars');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Trim any whitespace/newlines from env vars (common issue with env var injection)
    const cleanEnvEmail = adminEmail.trim().toLowerCase();
    const cleanEnvPass = adminPassword.trim();
    const cleanInputEmail = email.trim().toLowerCase();
    const cleanInputPass = password.trim();

    // Safe constant-time comparison (hashes ensure equal buffer length)
    const emailMatch = safeCompare(cleanInputEmail, cleanEnvEmail);
    const passMatch = safeCompare(cleanInputPass, cleanEnvPass);

    if (!emailMatch || !passMatch) {
      // Delay to prevent brute force
      await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));
      return res.status(403).json({ error: 'Invalid credentials' });
    }

    // Generate session token (HMAC of fixed message + secret)
    // Uses a deterministic message so stats/credits endpoints can verify
    const token = crypto
      .createHmac('sha256', adminSecret)
      .update('wisebot_admin_session')
      .digest('hex');

    return res.status(200).json({
      success: true,
      token,
    });
  } catch (err: any) {
    console.error('[admin/login] Error:', err.message);
    // Don't reveal error details — always return generic message
    await new Promise(resolve => setTimeout(resolve, 500));
    return res.status(403).json({ error: 'Invalid credentials' });
  }
}
