/**
 * ADMIN AUTH HELPERS — Server-side only
 * =====================================
 * Supports the existing HMAC admin session token and Supabase users whose
 * app_metadata marks them as admins.
 */

const ADMIN_SESSION_MESSAGE = 'wisebot_admin_session';

function getHeader(req: any, name: string): string {
  const value = req.headers?.[name.toLowerCase()] ?? req.headers?.[name];
  return Array.isArray(value) ? value[0] || '' : String(value || '');
}

function hasAdminMetadata(user: any): boolean {
  const meta = user?.app_metadata || user?.raw_app_meta_data || {};
  return meta.role === 'admin' || meta.is_admin === true;
}

export async function createAdminSessionToken(): Promise<string | null> {
  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret) return null;

  const crypto = await import('crypto');
  return crypto
    .createHmac('sha256', adminSecret)
    .update(ADMIN_SESSION_MESSAGE)
    .digest('hex');
}

async function hasValidAdminSessionToken(req: any): Promise<boolean> {
  const token = getHeader(req, 'x-admin-token');
  const expectedToken = await createAdminSessionToken();
  if (!token || !expectedToken) return false;

  const crypto = await import('crypto');
  const tokenBuf = Buffer.from(token);
  const expectedBuf = Buffer.from(expectedToken);
  return tokenBuf.length === expectedBuf.length && crypto.timingSafeEqual(tokenBuf, expectedBuf);
}

async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

async function hasAdminSupabaseJwt(req: any): Promise<boolean> {
  const authHeader = getHeader(req, 'authorization');
  if (!authHeader.startsWith('Bearer ')) return false;

  const token = authHeader.slice(7);
  if (!token) return false;

  const supabase = await getSupabaseAdmin();
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return false;

  if (hasAdminMetadata(user)) return true;

  // Fetch the canonical user record in case the access token predates a role change.
  const { data: adminData, error: adminError } = await supabase.auth.admin.getUserById(user.id);
  if (adminError || !adminData?.user) return false;
  return hasAdminMetadata(adminData.user);
}

export async function isAdminRequest(req: any): Promise<boolean> {
  if (await hasValidAdminSessionToken(req)) return true;
  return hasAdminSupabaseJwt(req);
}

export async function requireAdmin(req: any, res: any): Promise<boolean> {
  try {
    if (await isAdminRequest(req)) return true;
  } catch (err: any) {
    console.error('[Admin Auth] Authorization error:', err?.message || err);
  }
  res.status(403).json({ error: 'Unauthorized' });
  return false;
}
