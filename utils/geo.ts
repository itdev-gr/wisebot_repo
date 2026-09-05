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
  if (m < 1000) return lang === 'el' ? `${Math.round(m)} μ.` : `${Math.round(m)} m`;
  const km = (m / 1000).toFixed(1).replace('.', lang === 'el' ? ',' : '.');
  return lang === 'el' ? `${km} χλμ.` : `${km} km`;
}

/**
 * Is the phone "at" the spot? GPS between tall buildings drifts 20–50 m, so the reported
 * accuracy (up to 40 m of it) is forgiven on top of the spot's own radius.
 */
export function isWithin(here: GeoPoint, accuracyM: number, spot: GeoPoint, radiusM: number): boolean {
  return distanceM(here, spot) - Math.min(Math.max(accuracyM, 0), 40) <= radiusM;
}

export interface Fix extends GeoPoint { accuracyM: number; at: number }

export type GeoError = 'unsupported' | 'denied' | 'unavailable' | 'timeout';

/** One-shot position with a sane timeout; resolves to a Fix or a GeoError string. */
export function locateOnce(): Promise<Fix | GeoError> {
  if (typeof navigator === 'undefined' || !navigator.geolocation) return Promise.resolve('unsupported');
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
