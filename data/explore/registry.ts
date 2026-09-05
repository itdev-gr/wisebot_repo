/**
 * Explorer city registry — the picker only needs the tiny meta list; a city's spots,
 * riddles and quizzes load on demand (`loadCity`), so the Explore chunk stays small and a
 * phone downloads only the city the family is standing in.
 * Adding a city: write data/explore/cities/<id>.ts (export an ExploreCity), then add one
 * line to CITY_META and one loader below.
 */
import type { ExploreCity, ExploreCityMeta } from './types';

export const CITY_META: ExploreCityMeta[] = [
  { id: 'athens', name: { el: 'Αθήνα', en: 'Athens' }, country: { el: 'Ελλάδα', en: 'Greece' }, countryCode: 'GR', emoji: '🏛️', spotCount: 10 },
  { id: 'lisbon', name: { el: 'Λισαβόνα', en: 'Lisbon' }, country: { el: 'Πορτογαλία', en: 'Portugal' }, countryCode: 'PT', emoji: '🚋', spotCount: 10 },
  { id: 'porto', name: { el: 'Πόρτο', en: 'Porto' }, country: { el: 'Πορτογαλία', en: 'Portugal' }, countryCode: 'PT', emoji: '🌉', spotCount: 10 },
];

const loaders: Record<string, () => Promise<{ CITY: ExploreCity }>> = {
  athens: () => import('./cities/athens'),
  lisbon: () => import('./cities/lisbon'),
  porto: () => import('./cities/porto'),
};

const cache: Record<string, Promise<ExploreCity>> = {};

export function loadCity(id: string): Promise<ExploreCity | null> {
  const load = loaders[id];
  if (!load) return Promise.resolve(null);
  return (cache[id] ??= load().then(m => m.CITY));
}

/** Country flag from the ISO code — two regional-indicator symbols, no image needed. */
export const flagEmoji = (countryCode: string): string =>
  countryCode.toUpperCase().replace(/./g, ch => String.fromCodePoint(0x1f1e6 + ch.charCodeAt(0) - 65));
