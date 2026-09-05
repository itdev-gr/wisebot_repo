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
  { id: 'rome', name: { el: 'Ρώμη', en: 'Rome' }, country: { el: 'Ιταλία', en: 'Italy' }, countryCode: 'IT', emoji: '🏛️', spotCount: 10 },
  { id: 'paris', name: { el: 'Παρίσι', en: 'Paris' }, country: { el: 'Γαλλία', en: 'France' }, countryCode: 'FR', emoji: '🗼', spotCount: 10 },
  { id: 'barcelona', name: { el: 'Βαρκελώνη', en: 'Barcelona' }, country: { el: 'Ισπανία', en: 'Spain' }, countryCode: 'ES', emoji: '🎨', spotCount: 10 },
  { id: 'london', name: { el: 'Λονδίνο', en: 'London' }, country: { el: 'Ηνωμένο Βασίλειο', en: 'United Kingdom' }, countryCode: 'GB', emoji: '🎡', spotCount: 10 },
  { id: 'berlin', name: { el: 'Βερολίνο', en: 'Berlin' }, country: { el: 'Γερμανία', en: 'Germany' }, countryCode: 'DE', emoji: '🐻', spotCount: 10 },
  { id: 'amsterdam', name: { el: 'Άμστερνταμ', en: 'Amsterdam' }, country: { el: 'Ολλανδία', en: 'Netherlands' }, countryCode: 'NL', emoji: '🚲', spotCount: 10 },
  { id: 'vienna', name: { el: 'Βιέννη', en: 'Vienna' }, country: { el: 'Αυστρία', en: 'Austria' }, countryCode: 'AT', emoji: '🎻', spotCount: 10 },
  { id: 'prague', name: { el: 'Πράγα', en: 'Prague' }, country: { el: 'Τσεχία', en: 'Czechia' }, countryCode: 'CZ', emoji: '🕰️', spotCount: 10 },
  { id: 'budapest', name: { el: 'Βουδαπέστη', en: 'Budapest' }, country: { el: 'Ουγγαρία', en: 'Hungary' }, countryCode: 'HU', emoji: '♨️', spotCount: 10 },
  { id: 'istanbul', name: { el: 'Κωνσταντινούπολη', en: 'Istanbul' }, country: { el: 'Τουρκία', en: 'Türkiye' }, countryCode: 'TR', emoji: '🕌', spotCount: 10 },
];

const loaders: Record<string, () => Promise<{ CITY: ExploreCity }>> = {
  athens: () => import('./cities/athens'),
  lisbon: () => import('./cities/lisbon'),
  porto: () => import('./cities/porto'),
  rome: () => import('./cities/rome'),
  paris: () => import('./cities/paris'),
  barcelona: () => import('./cities/barcelona'),
  london: () => import('./cities/london'),
  berlin: () => import('./cities/berlin'),
  amsterdam: () => import('./cities/amsterdam'),
  vienna: () => import('./cities/vienna'),
  prague: () => import('./cities/prague'),
  budapest: () => import('./cities/budapest'),
  istanbul: () => import('./cities/istanbul'),
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
