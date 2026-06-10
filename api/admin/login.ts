/**
 * POST /api/admin/login — Admin authentication
 * ==============================================
 * Validates admin credentials against environment variables.
 * Returns a session token for subsequent admin API calls.
 * Credentials are NEVER stored in source code.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  ADMIN_CORS_HEADERS,
  createAdminToken,
  isAdminAuthConfigured,
  verifyAdminCredentials,
} from '../_lib/adminAuth';

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', ADMIN_CORS_HEADERS);
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    if (!isAdminAuthConfigured()) {
      console.error('[admin/login] Missing env vars');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!verifyAdminCredentials(email, password)) {
      // Delay to prevent brute force
      await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));
      return res.status(403).json({ error: 'Invalid credentials' });
    }

    const token = createAdminToken();
    if (!token) {
      console.error('[admin/login] Missing admin secret');
      return res.status(500).json({ error: 'Server configuration error' });
    }

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
