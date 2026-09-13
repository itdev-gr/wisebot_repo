/**
 * Small geo helpers for the Explorer. No library: two formulas and a permission wrapper.
 * The position never leaves the device — it is compared with the spot list in memory and
 * thrown away (see the privacy note in components/Explore.tsx).
 */

export interface GeoPoint { lat: number; lng: number }

/** Great-circle distance in metres (haversine). Good to <0.5 % at city scale. */
export function distanceM(a: GeoPoint, b: GeoPoint): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/** "120 μ." / "1,3 χλμ." — what a child reads on the trail. */
export function formatDistance(m: number, lang: 'el' | 'en'): string {
  // Ten-metre steps under a kilometre: a phone's GPS is not more precise, and the number stops ticking while you stand still.
  const r = m < 1000 ? Math.round(m / 10) * 10 : m;
  if (r < 1000) return lang === 'el' ? `${r} μ.` : `${r} m`;
  const km = (r / 1000).toFixed(1).replace('.', lang === 'el' ? ',' : '.');
  return lang === 'el' ? `${km} χλμ.` : `${km} km`;
}

/**
 * Is the phone "at" the spot? GPS between tall buildings drifts 20–50 m, so the reported
 * accuracy (up to 40 m of it) is forgiven on top of the spot's own radius.
 */
export function isWithin(here: GeoPoint, accuracyM: number, spot: GeoPoint, radiusM: number): boolean {
  return distanceM(here, spot) - Math.min(Math.max(accuracyM, 0), 40) <= radiusM;
}

/**
 * How close to one of a country's cities counts as being in the country.
 *
 * A country is not a circle, so this is deliberately generous: 150 km around any city we
 * actually have content for. A family in Fiesole is in Italy; a family on their sofa in
 * Athens is not in France, which is the only thing this has to get right. It is a
 * presence check, never a border.
 */
export const COUNTRY_RADIUS_M = 150_000;

/** Is the phone within `radiusM` of ANY of these points? Same accuracy forgiveness. */
export function isNearAny(here: GeoPoint, accuracyM: number, points: GeoPoint[], radiusM: number): boolean {
  return points.some((p) => isWithin(here, accuracyM, p, radiusM));
}

export interface Fix extends GeoPoint { accuracyM: number; at: number }

export type GeoError = 'unsupported' | 'denied' | 'unavailable' | 'timeout';

/**
 * What the browser has already decided about location for this site — read WITHOUT
 * asking, so nothing pops up.
 *
 *   granted  → `locateOnce` will answer silently.
 *   prompt   → `locateOnce` will show the system prompt; only call it from a tap.
 *   denied   → `locateOnce` fails at once and NO prompt will ever appear again until a
 *              grown-up changes a setting (Safari remembers «Don't Allow» per site;
 *              Chrome blocks after repeated dismissals). The UI must say so.
 *   unknown  → no Permissions API (older Safari) or it threw; nothing can be said in
 *              advance, so treat it like `prompt` and never ask without a gesture.
 */
export type GeoPermission = 'granted' | 'prompt' | 'denied' | 'unknown';

/**
 * The slice of the Capacitor bridge this file touches, typed by hand: the plugin is a
 * dependency of the iOS shell in `store/ios`, not of the web app, so its types are not
 * installed here. Absent everywhere but inside the App Store build.
 */
interface CapacitorGeolocation {
  checkPermissions?: () => Promise<{ location?: string }>;
  requestPermissions?: (o: { permissions: string[] }) => Promise<{ location?: string }>;
  getCurrentPosition?: (o: {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
  }) => Promise<{ coords: { latitude: number; longitude: number; accuracy?: number }; timestamp?: number }>;
}
interface CapacitorBridge {
  isNativePlatform?: () => boolean;
  Plugins?: { Geolocation?: CapacitorGeolocation };
}
const capacitor = (): CapacitorBridge | undefined =>
  typeof window === 'undefined' ? undefined : (window as unknown as { Capacitor?: CapacitorBridge }).Capacitor;

export async function geoPermissionState(): Promise<GeoPermission> {
  try {
    // The iOS shell answers through the native plugin, whose states map one to one
    // ('prompt-with-rationale' is Android's "ask again with a reason" — still a prompt).
    const Geo = capacitor()?.Plugins?.Geolocation;
    if (Geo?.checkPermissions) {
      const p = await Geo.checkPermissions();
      const s = String(p?.location ?? '');
      return s === 'granted' || s === 'denied' ? s : s.startsWith('prompt') ? 'prompt' : 'unknown';
    }
    if (typeof navigator === 'undefined' || !navigator.permissions?.query) return 'unknown';
    const status = await navigator.permissions.query({ name: 'geolocation' });
    return status.state === 'granted' || status.state === 'prompt' || status.state === 'denied' ? status.state : 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Where the recovery instructions must point when location is blocked: the setting
 * lives in a different place on each. `iosApp` is the App Store shell (Capacitor), whose
 * permission is the app's own, under Settings → WiseBot, not Safari's.
 */
export type GeoPlatform = 'ios' | 'iosApp' | 'android' | 'desktop';

export function geoPlatform(): GeoPlatform {
  if (typeof navigator === 'undefined') return 'desktop';
  const ua = navigator.userAgent;
  // iPhone/iPod, iPad (which reports "Macintosh" with a touch screen) — not desktop Macs.
  const apple = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && (navigator.maxTouchPoints ?? 0) > 1);
  if (apple) return capacitor()?.isNativePlatform?.() ? 'iosApp' : 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'desktop';
}

/**
 * The browser's `timeout` option does not tick while the permission sheet is on screen,
 * so a family that leaves the sheet unanswered (or swipes it away on iOS, which fires no
 * callback at all) would leave the button on «ΨΑΧΝΩ…» for ever. This outer clock does
 * tick. Generous, because a first GPS fix outdoors can honestly take twenty seconds.
 */
const OUTER_TIMEOUT_MS = 45_000;

/** One-shot position with a sane timeout; resolves to a Fix or a GeoError string. */
export function locateOnce(): Promise<Fix | GeoError> {
  return Promise.race([
    locateUnbounded(),
    new Promise<GeoError>(resolve => setTimeout(() => resolve('timeout'), OUTER_TIMEOUT_MS)),
  ]);
}

async function locateUnbounded(): Promise<Fix | GeoError> {
  // Inside the iOS shell (Capacitor, WKWebView) the web geolocation API never shows the
  // system permission dialog: the request fails as "denied" before the parent sees any
  // prompt, and «Είμαι εδώ!» reads as broken. The native Geolocation plugin asks the
  // system properly; use it whenever the bridge exposes it, and fall through otherwise.
  const Geo = capacitor()?.Plugins?.Geolocation;
  if (Geo?.getCurrentPosition) {
    try {
      const perm = await Geo.requestPermissions?.({ permissions: ['location'] });
      if (perm?.location === 'denied') return 'denied';
      const p = await Geo.getCurrentPosition({ enableHighAccuracy: true, timeout: 12000, maximumAge: 5000 });
      return { lat: p.coords.latitude, lng: p.coords.longitude, accuracyM: p.coords.accuracy ?? 50, at: p.timestamp ?? Date.now() };
    } catch (e: unknown) {
      const msg = String((e as { message?: string })?.message ?? '').toLowerCase();
      // «Location services are not enabled» is the phone-wide switch. To the family that
      // is a block with a setting to change, not a weak signal to retry outdoors.
      if (/denied|permission|not enabled|disabled|location services/.test(msg)) return 'denied';
      return msg.includes('timeout') ? 'timeout' : 'unavailable';
    }
  }
  if (typeof navigator === 'undefined' || !navigator.geolocation) return 'unsupported';
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      p => resolve({ lat: p.coords.latitude, lng: p.coords.longitude, accuracyM: p.coords.accuracy ?? 50, at: p.timestamp }),
      e => resolve(e.code === 1 ? 'denied' : e.code === 3 ? 'timeout' : 'unavailable'),
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 5000 },
    );
  });
}

/** Continuous position; returns the stop function. Errors are reported once and watching stops. */
export function watchPosition(onFix: (f: Fix) => void, onError: (e: GeoError) => void): () => void {
  if (typeof navigator === 'undefined' || !navigator.geolocation) { onError('unsupported'); return () => {}; }
  const id = navigator.geolocation.watchPosition(
    p => onFix({ lat: p.coords.latitude, lng: p.coords.longitude, accuracyM: p.coords.accuracy ?? 50, at: p.timestamp }),
    e => onError(e.code === 1 ? 'denied' : e.code === 3 ? 'timeout' : 'unavailable'),
    { enableHighAccuracy: true, maximumAge: 3000 },
  );
  return () => navigator.geolocation.clearWatch(id);
}

/** Initial bearing from a to b, 0–360° clockwise from north. */
export function bearingDeg(a: GeoPoint, b: GeoPoint): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const φ1 = toRad(a.lat), φ2 = toRad(b.lat), Δλ = toRad(b.lng - a.lng);
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

const COMPASS = {
  el: ['βόρεια', 'βορειοανατολικά', 'ανατολικά', 'νοτιοανατολικά', 'νότια', 'νοτιοδυτικά', 'δυτικά', 'βορειοδυτικά'],
  en: ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west'],
};
const ARROWS = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'];

/** "↗ βορειοανατολικά" — eight sectors, what a child can act on. */
export function compass(deg: number, lang: 'el' | 'en'): { arrow: string; label: string } {
  const i = Math.round((((deg % 360) + 360) % 360) / 45) % 8;
  return { arrow: ARROWS[i], label: COMPASS[lang][i] };
}

/** Walking directions in the maps app the phone already has. Apple Maps only makes sense on iOS. */
export function mapsLinks(p: GeoPoint): { google: string; apple: string | null } {
  const dest = `${p.lat.toFixed(6)},${p.lng.toFixed(6)}`;
  const platform = geoPlatform();
  const isApple = platform === 'ios' || platform === 'iosApp';
  return {
    google: `https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=walking`,
    // `q=` would be a search in Apple's URL scheme, so only the coordinates go in.
    apple: isApple ? `https://maps.apple.com/?daddr=${dest}&dirflg=w` : null,
  };
}

/** Minutes on foot with a child in tow (~4.5 km/h), never less than one. */
export function walkMinutes(m: number): number {
  return Math.max(1, Math.round(m / 75));
}
