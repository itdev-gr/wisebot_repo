/**
 * SHARED API MIDDLEWARE
 * ====================
 * Provides: CORS, rate limiting, authentication
 * Usage: wrap any handler with `withProtection(handler)` or `withAuth(handler)`
 */
import { createClient } from '@supabase/supabase-js';

// ─── CORS ────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'https://wisebot.gr',
  'https://www.wisebot.gr',
  'https://wisebot-claude-ok.vercel.app',
  process.env.FRONTEND_URL,
].filter(Boolean);

// In development, allow localhost
if (process.env.NODE_ENV !== 'production') {
  ALLOWED_ORIGINS.push('http://localhost:3000', 'http://localhost:5173');
}

export function setCorsHeaders(req: any, res: any): boolean {
  const origin = req.headers?.origin || '';
  const isAllowed = ALLOWED_ORIGINS.includes(origin) || !origin; // Allow same-origin (no origin header)

  if (isAllowed) {
    res.setHeader('Access-Control-Allow-Origin', origin || ALLOWED_ORIGINS[0]);
  } else {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGINS[0]);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return true; // Signal that response was sent
  }
  return false;
}

// ─── RATE LIMITING (in-memory, per-IP) ───────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 15; // 15 requests per minute per IP

// Clean up old entries on each request (no setInterval — serverless-safe)

export function checkRateLimit(req: any, res: any, maxRequests = RATE_LIMIT_MAX): boolean {
  const ip = req.headers?.['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers?.['x-real-ip']
    || req.socket?.remoteAddress
    || 'unknown';

  const now = Date.now();

  // Clean up expired entries (serverless-safe, no setInterval)
  if (rateLimitMap.size > 100) {
    for (const [key, val] of rateLimitMap) {
      if (val.resetAt < now) rateLimitMap.delete(key);
    }
  }

  const entry = rateLimitMap.get(ip);

  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false; // Not limited
  }

  entry.count++;
  if (entry.count > maxRequests) {
    res.setHeader('Retry-After', Math.ceil((entry.resetAt - now) / 1000).toString());
    res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
    return true; // Rate limited
  }

  return false;
}

// ─── AUTH (Supabase JWT verification) ────────────────────────────
export async function verifyAuth(req: any): Promise<{ userId: string; email: string } | null> {
  const authHeader = req.headers?.authorization;
  if (!authHeader?.startsWith('Bearer ')) return null;

  const token = authHeader.slice(7);
  if (!token || token.length < 20) return null;

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !supabaseKey) return null;

  try {
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) return null;

    return { userId: user.id, email: user.email || '' };
  } catch {
    return null;
  }
}

// ─── HANDLER WRAPPERS ────────────────────────────────────────────

/** Wrap handler with CORS + rate limiting (public endpoints) */
export function withProtection(handler: (req: any, res: any) => Promise<any>) {
  return async (req: any, res: any) => {
    if (setCorsHeaders(req, res)) return; // OPTIONS handled
    if (checkRateLimit(req, res)) return; // Rate limited
    return handler(req, res);
  };
}

/** Wrap handler with CORS + rate limiting + OPTIONAL auth (AI endpoints — works for guests too) */
export function withOptionalAuth(handler: (req: any, res: any, user: { userId: string; email: string } | null) => Promise<any>) {
  return async (req: any, res: any) => {
    if (setCorsHeaders(req, res)) return;
    if (checkRateLimit(req, res)) return;

    // Try to get user but don't require it
    const user = await verifyAuth(req);
    return handler(req, res, user);
  };
}

/** Wrap handler with CORS + rate limiting + REQUIRED auth (protected endpoints) */
export function withAuth(handler: (req: any, res: any, user: { userId: string; email: string }) => Promise<any>) {
  return async (req: any, res: any) => {
    if (setCorsHeaders(req, res)) return;
    if (checkRateLimit(req, res)) return;

    const user = await verifyAuth(req);
    if (!user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    return handler(req, res, user);
  };
}
