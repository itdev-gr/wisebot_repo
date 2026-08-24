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
export const trackPurchase = (credits: number) => track('purchase', { value: credits, currency: 'EUR' });
