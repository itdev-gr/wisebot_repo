/**
 * Explorer progress — what is persisted, and the badges derived from it.
 * Kept out of components/Explore.tsx so the Passport and the parent view can read Explorer
 * stamps without pulling Leaflet into their chunks.
 *
 * Two stores, both on-device:
 * - `wb_explore_<city>`: which envelopes are open (and how) + on-site missions done;
 * - the QuizEngine best runs under `explore-<city>-<spot>` (stars; synced like School's).
 */
import { getQuizStars } from '../../components/QuizEngine';
import { CITY_META } from './registry';
import type { ExploreCityMeta } from './types';

export type Unlock = 'gps' | 'riddle';

export interface CityProgress {
  opened: Record<string, { via: Unlock; at: number }>;
  onSite: Record<string, boolean>;
  /** Taste items the family ticked ("Το δοκίμασα!"), with when. */
  tasted: Record<string, number>;
}

const progressKey = (cityId: string) => `wb_explore_${cityId}`;

export const readProgress = (cityId: string): CityProgress => {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(progressKey(cityId)) : null;
    if (raw) { const p = JSON.parse(raw); return { opened: p.opened || {}, onSite: p.onSite || {}, tasted: p.tasted || {} }; }
  } catch { /* private mode / corrupt */ }
  return { opened: {}, onSite: {}, tasted: {} };
};

export const writeProgress = (cityId: string, p: CityProgress) => {
  try { localStorage.setItem(progressKey(cityId), JSON.stringify(p)); } catch { /* storage full */ }
};

/** Quiz category id — the same key space as School, so stars/best runs persist and sync. */
export const spotQuizId = (cityId: string, spotId: string) => `explore-${cityId}-${spotId}`;

/** A spot "counts" once its envelope is open and its quiz has been passed at least once. */
export const spotsDone = (cityId: string, progress: CityProgress = readProgress(cityId)): number =>
  Object.keys(progress.opened).filter(spotId => getQuizStars(spotQuizId(cityId, spotId)) >= 1).length;

/** Taste badge ("Γευσιγνώστης Πόρτο"): three things tasted — a weekend's worth of courage. */
export const TASTE_BADGE_AT = 3;
export const tastedCount = (cityId: string, progress: CityProgress = readProgress(cityId)): number => Object.keys(progress.tasted).length;
export const tasteBadgeEarned = (cityId: string, progress?: CityProgress): boolean => tastedCount(cityId, progress) >= TASTE_BADGE_AT;

/** City badge ("Εξερευνητής Αθήνας"): all spots but two — a family rarely finishes every one. */
export const cityBadgeNeed = (spotCount: number, badgeAt?: number) => badgeAt ?? Math.max(1, spotCount - 2);

export const cityBadgeEarned = (meta: Pick<ExploreCityMeta, 'id' | 'spotCount'>, badgeAt?: number): boolean =>
  spotsDone(meta.id) >= cityBadgeNeed(meta.spotCount, badgeAt);

/** Country badge ("Εξερευνητής Πορτογαλίας"): every city of that country in the picker. */
export const countryBadgeEarned = (countryCode: string): boolean => {
  const cities = CITY_META.filter(c => c.countryCode === countryCode);
  return cities.length > 0 && cities.every(c => cityBadgeEarned(c));
};

export interface ExplorerSummary {
  citiesStarted: number;
  spotsOpened: number;
  spotsDone: number;
  stars: number;
  cityBadges: ExploreCityMeta[];
  countryCodes: string[]; // countries with the country badge
  tasted: number;         // things tasted, all cities
  tasteBadges: number;    // cities with the taste badge
}

/** One read for the Passport / parent view. */
export const explorerSummary = (): ExplorerSummary => {
  let citiesStarted = 0, spotsOpened = 0, done = 0, stars = 0, tasted = 0, tasteBadges = 0;
  const cityBadges: ExploreCityMeta[] = [];
  for (const c of CITY_META) {
    const p = readProgress(c.id);
    tasted += tastedCount(c.id, p);
    if (tasteBadgeEarned(c.id, p)) tasteBadges++;
    const opened = Object.keys(p.opened);
    if (opened.length) citiesStarted++;
    spotsOpened += opened.length;
    for (const s of opened) stars += getQuizStars(spotQuizId(c.id, s));
    done += spotsDone(c.id, p);
    if (cityBadgeEarned(c)) cityBadges.push(c);
  }
  const countryCodes = [...new Set(CITY_META.map(c => c.countryCode))].filter(countryBadgeEarned);
  return { citiesStarted, spotsOpened, spotsDone: done, stars, cityBadges, countryCodes, tasted, tasteBadges };
};
