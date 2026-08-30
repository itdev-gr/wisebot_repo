// Apple guideline 3.1.1: digital credits may not be sold through Stripe inside
// the iOS app — the App Store build must not show purchase UI or € prices.
// The Capacitor shell (store/ios) loads wisebot.gr and injects window.Capacitor,
// which is how the web app knows it is running inside the iOS app.
export function isIosApp(): boolean {
  try {
    const cap = (window as any).Capacitor;
    return !!cap && typeof cap.getPlatform === 'function' && cap.getPlatform() === 'ios';
  } catch {
    return false;
  }
}
