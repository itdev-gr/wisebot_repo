/**
 * ADMIN AUTH HELPERS
 * ==================
 * Keeps admin credential parsing and token verification consistent across
 * serverless endpoints. Credentials must be provided through environment vars.
 */
import crypto from 'crypto';

// Admin sessions expire after this window; admins re-authenticate afterwards.
const ADMIN_TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

export const ADMIN_CORS_HEADERS = 'Content-Type, Authorization, X-Admin-Token';

function b64url(buf: Buffer): string {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

interface AdminCredential {
  email: string;
  password: string;
}

function safeCompare(a: string, b: string): boolean {
  const hashA = crypto.createHash('sha256').update(a).digest();
  const hashB = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

function normalizeEmail(value: unknown): string {
  return String(value || '').trim().toLowerCase();
}

function normalizePassword(value: unknown): string {
  return String(value || '').trim();
}

function addCredential(credentials: AdminCredential[], email: unknown, password: unknown) {
  const cleanEmail = normalizeEmail(email);
  const cleanPassword = normalizePassword(password);
  if (cleanEmail && cleanPassword) {
    credentials.push({ email: cleanEmail, password: cleanPassword });
  }
}

function parseCredentialEntry(entry: string): AdminCredential | null {
  const trimmed = entry.trim();
  if (!trimmed) return null;

  const separatorIndex = trimmed.includes('=')
    ? trimmed.indexOf('=')
    : trimmed.indexOf(':');

  if (separatorIndex <= 0) return null;

  const email = normalizeEmail(trimmed.slice(0, separatorIndex));
  const password = normalizePassword(trimmed.slice(separatorIndex + 1));
  return email && password ? { email, password } : null;
}

function parseAdminCredentials(raw: string | undefined): AdminCredential[] {
  if (!raw?.trim()) return [];

  const credentials: AdminCredential[] = [];
  const trimmed = raw.trim();

  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    try {
      const parsed = JSON.parse(trimmed);
      const entries = Array.isArray(parsed)
        ? parsed
        : Object.entries(parsed).map(([email, password]) => ({ email, password }));

      for (const entry of entries) {
        if (typeof entry === 'string') {
          const credential = parseCredentialEntry(entry);
          if (credential) credentials.push(credential);
        } else if (entry && typeof entry === 'object') {
          const item = entry as Record<string, unknown>;
          addCredential(credentials, item.email ?? item.username, item.password);
        }
      }

      return credentials;
    } catch {
      // Fall through to line/comma parsing for simpler env var formats.
    }
  }

  for (const entry of trimmed.split(/\r?\n|,/)) {
    const credential = parseCredentialEntry(entry);
    if (credential) credentials.push(credential);
  }

  return credentials;
}

function getAdminCredentials(): AdminCredential[] {
  const credentials: AdminCredential[] = [];

  addCredential(credentials, process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);
  credentials.push(...parseAdminCredentials(process.env.ADMIN_CREDENTIALS));

  return credentials;
}

export function isAdminAuthConfigured(): boolean {
  return !!process.env.ADMIN_SECRET?.trim() && getAdminCredentials().length > 0;
}

export function verifyAdminCredentials(email: unknown, password: unknown): boolean {
  const inputEmail = normalizeEmail(email);
  const inputPassword = normalizePassword(password);

  if (!inputEmail || !inputPassword) return false;

  return getAdminCredentials().some(credential =>
    safeCompare(inputEmail, credential.email) &&
    safeCompare(inputPassword, credential.password)
  );
}

function signPayload(payloadB64: string, secret: string): string {
  return b64url(crypto.createHmac('sha256', secret).update(payloadB64).digest());
}

export function createAdminToken(): string | null {
  const adminSecret = process.env.ADMIN_SECRET?.trim();
  if (!adminSecret) return null;

  const now = Date.now();
  const payload = {
    iat: now,
    exp: now + ADMIN_TOKEN_TTL_MS,
    nonce: crypto.randomBytes(8).toString('hex'),
  };
  const payloadB64 = b64url(Buffer.from(JSON.stringify(payload)));
  const sig = signPayload(payloadB64, adminSecret);
  return `${payloadB64}.${sig}`;
}

export function verifyAdminToken(token: unknown): boolean {
  const rawToken = Array.isArray(token) ? token[0] : token;
  if (typeof rawToken !== 'string' || !rawToken) return false;

  const adminSecret = process.env.ADMIN_SECRET?.trim();
  if (!adminSecret) return false;

  const dotIndex = rawToken.indexOf('.');
  if (dotIndex <= 0) return false;

  const payloadB64 = rawToken.slice(0, dotIndex);
  const sigB64 = rawToken.slice(dotIndex + 1);

  const expectedSig = signPayload(payloadB64, adminSecret);
  const sigBuf = Buffer.from(sigB64);
  const expectedBuf = Buffer.from(expectedSig);
  if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
    return false;
  }

  try {
    const payloadJson = Buffer.from(
      payloadB64.replace(/-/g, '+').replace(/_/g, '/'),
      'base64',
    ).toString('utf8');
    const payload = JSON.parse(payloadJson) as { exp?: number };
    return typeof payload.exp === 'number' && Date.now() <= payload.exp;
  } catch {
    return false;
  }
}
