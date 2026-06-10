/**
 * CORS ORIGIN ALLOWLIST
 * =====================
 * Endpoints previously reflected the raw `Origin` request header, which lets
 * any website receive cross-origin responses. This helper only echoes origins
 * on an explicit allowlist; everything else falls back to the canonical site.
 */

const STATIC_ALLOWED = new Set([
  'https://wisebot.gr',
  'https://www.wisebot.gr',
]);

const DEFAULT_ORIGIN = 'https://wisebot.gr';

function isAllowed(origin: string): boolean {
  if (STATIC_ALLOWED.has(origin)) return true;
  // Local development servers
  if (/^http:\/\/localhost(:\d+)?$/.test(origin)) return true;
  if (/^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin)) return true;
  return false;
}

/**
 * Returns a safe value for the Access-Control-Allow-Origin header.
 * Echoes the request origin only when it is on the allowlist.
 */
export function resolveCorsOrigin(origin: unknown): string {
  const value = Array.isArray(origin) ? origin[0] : origin;
  if (typeof value === 'string' && isAllowed(value)) return value;
  return DEFAULT_ORIGIN;
}
