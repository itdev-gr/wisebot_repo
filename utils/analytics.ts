/**
 * GA4 conversion events — consent-safe by construction.
 * ======================================================
 * index.html always defines the gtag() stub (it only queues into dataLayer); the GA
 * script itself loads ONLY after the parent accepts analytics cookies (CookieConsent →
 * window.enableAnalytics). Events fired without consent therefore never leave the
 * browser. Never pass emails, names or any child data — event names and coarse
 * parameters only.
 */

type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void;

export const track = (event: string, params?: Record<string, unknown>) => {
  try {
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    gtag?.('event', event, params);
  } catch { /* analytics must never break the app */ }
};

/** The funnel steps the business actually watches (see the 24/8 audit). */
export const trackSignUp = (method: 'password' | 'google') => track('sign_up', { method });
export const trackLogin = (method: 'password' | 'google') => track('login', { method });
export const trackBeginCheckout = (pack: string) => track('begin_checkout', { item_id: pack });
// `value` must be euros — passing credits here made a €9.99 sale report as 240 EUR
// of GA4 revenue (CRO-AUDIT P0-5).
export const trackPurchase = (valueEur: number, credits: number) => track('purchase', { value: valueEur, currency: 'EUR', credits });

/**
 * Drop-off visibility (CRO-AUDIT P0-5): every wall the funnel can hit, so GA4 can
 * show WHERE visitors stop, not only that they stopped.
 * gate: 'unlock' = level/progress gate · 'login' = account required ·
 * 'credits' = not enough credits · 'verify' = parent verification required.
 */
export const trackGateBlock = (gate: 'unlock' | 'login' | 'credits' | 'verify', feature: string) =>
  track('wb_gate_block', { gate, feature });
export const trackViewStore = () => track('wb_view_store');
export const trackPortalEnter = () => track('wb_portal_enter');
