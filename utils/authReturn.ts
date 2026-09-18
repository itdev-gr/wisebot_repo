/**
 * Where to go after the login screen — without losing the user's place.
 * ----------------------------------------------------------------------
 * Every auth gate used to send people to /login bare, and AuthScreen sent
 * everyone to /dashboard afterwards: a child blocked mid-creation who signed
 * up came back to the hub, a parent sent from the store's purchase gate lost
 * the pack they were buying. The store already solved the same problem for
 * its Stripe round-trip with wb_store_return_to; this is that idea for auth.
 *
 * The path ALSO survives the signup → e-mail-verification round trip via
 * localStorage: a query param cannot, because the child comes back through a
 * link in the parent's inbox, often hours later. 24h expiry and cleared on
 * first use, so a long-abandoned gate never hijacks next week's login.
 */

const KEY = 'wb_auth_return_to';
const MAX_AGE_MS = 24 * 60 * 60 * 1000;
// Relative in-app paths only — the same shape CreditStore already trusts.
const SAFE_PATH = /^\/[a-z0-9\-/]*$/i;

/** The /login URL a gate should navigate to, carrying where the user is now. */
export function loginPath(opts?: { register?: boolean }): string {
  const parts: string[] = [];
  if (opts?.register) parts.push('mode=register');
  try {
    const p = window.location.pathname;
    if (SAFE_PATH.test(p) && p !== '/' && p !== '/login' && p !== '/auth') {
      parts.push('returnTo=' + encodeURIComponent(p));
    }
  } catch {
    /* prerender — no window */
  }
  return parts.length ? `/login?${parts.join('&')}` : '/login';
}

export function rememberReturnTo(path: string | null): void {
  if (!path || !SAFE_PATH.test(path)) return;
  try {
    localStorage.setItem(KEY, JSON.stringify({ path, at: Date.now() }));
  } catch {
    /* private mode — losing the convenience must never break login */
  }
}

/** The remembered destination, or null. Always clears — one use per gate. */
export function takeReturnTo(): string | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    localStorage.removeItem(KEY);
    const { path, at } = JSON.parse(raw);
    if (typeof path !== 'string' || !SAFE_PATH.test(path)) return null;
    if (typeof at !== 'number' || Date.now() - at > MAX_AGE_MS) return null;
    return path;
  } catch {
    return null;
  }
}
