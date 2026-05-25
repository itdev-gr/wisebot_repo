/**
 * ADMIN AUTH HELPERS
 * ==================
 * Keeps admin credential parsing and token verification consistent across
 * serverless endpoints. Credentials must be provided through environment vars.
 */
import crypto from 'crypto';

const ADMIN_TOKEN_MESSAGE = 'wisebot_admin_session';

export const ADMIN_CORS_HEADERS = 'Content-Type, Authorization, X-Admin-Token';

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

export function createAdminToken(): string | null {
  const adminSecret = process.env.ADMIN_SECRET?.trim();
  if (!adminSecret) return null;

  return crypto
    .createHmac('sha256', adminSecret)
    .update(ADMIN_TOKEN_MESSAGE)
    .digest('hex');
}

export function verifyAdminToken(token: unknown): boolean {
  const rawToken = Array.isArray(token) ? token[0] : token;
  if (typeof rawToken !== 'string' || !rawToken) return false;

  const expectedToken = createAdminToken();
  if (!expectedToken) return false;

  const tokenBuf = Buffer.from(rawToken);
  const expectedBuf = Buffer.from(expectedToken);
  return tokenBuf.length === expectedBuf.length &&
    crypto.timingSafeEqual(tokenBuf, expectedBuf);
}
