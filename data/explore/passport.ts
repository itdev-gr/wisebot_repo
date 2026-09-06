/**
 * Explorer Passport — the booklet: a cover, the child's identity page, one page per country
 * with an ink stamp per city (and a big country stamp once every city of that country is
 * done), and an index at the back. Reads only what Explorer already persists
 * (`wb_explore_<city>` + the QuizEngine best runs) plus three small keys of its own:
 * home country, issue date, passport number. No network, nothing awarded here.
 *
 * Stamp dates are real: a city stamp is dated the moment the N-th spot that counts was
 * opened (N = cityBadgeNeed), taken from the `at` Explorer already stores per envelope —
 * so families who earned stamps before the passport existed see their true dates.
 */
import { CITY_META } from './registry';
import type { ExploreCityMeta } from './types';
import type { LocalizedString } from '../../types';
import { readProgress, spotQuizId, cityBadgeNeed, tasteBadgeEarned } from './progress';
import { getQuizStars } from '../../components/QuizEngine';

export type Lang = 'el' | 'en';

const HOME_KEY = 'wb_home_country';
const ISSUED_KEY = 'wb_passport_issued';
const NUMBER_KEY = 'wb_passport_no';

const read = (key: string): string | null => {
  try { return typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null; } catch { return null; }
};
const write = (key: string, value: string) => {
  try { localStorage.setItem(key, value); } catch { /* private mode / storage full */ }
};

/**
 * Countries a child can call home: every Explorer country plus the usual homes of the Greek
 * diaspora and of the English edition. Greek names are the everyday forms a child hears.
 */
export const HOME_COUNTRIES: { code: string; name: LocalizedString }[] = [
  { code: 'GR', name: { el: 'Ελλάδα', en: 'Greece' } },
  { code: 'CY', name: { el: 'Κύπρος', en: 'Cyprus' } },
  { code: 'GB', name: { el: 'Ηνωμένο Βασίλειο', en: 'United Kingdom' } },
  { code: 'IE', name: { el: 'Ιρλανδία', en: 'Ireland' } },
  { code: 'US', name: { el: 'ΗΠΑ', en: 'United States' } },
  { code: 'CA', name: { el: 'Καναδάς', en: 'Canada' } },
  { code: 'AU', name: { el: 'Αυστραλία', en: 'Australia' } },
  { code: 'NZ', name: { el: 'Νέα Ζηλανδία', en: 'New Zealand' } },
  { code: 'DE', name: { el: 'Γερμανία', en: 'Germany' } },
  { code: 'FR', name: { el: 'Γαλλία', en: 'France' } },
  { code: 'IT', name: { el: 'Ιταλία', en: 'Italy' } },
  { code: 'ES', name: { el: 'Ισπανία', en: 'Spain' } },
  { code: 'PT', name: { el: 'Πορτογαλία', en: 'Portugal' } },
  { code: 'NL', name: { el: 'Ολλανδία', en: 'Netherlands' } },
  { code: 'BE', name: { el: 'Βέλγιο', en: 'Belgium' } },
  { code: 'LU', name: { el: 'Λουξεμβούργο', en: 'Luxembourg' } },
  { code: 'AT', name: { el: 'Αυστρία', en: 'Austria' } },
  { code: 'CH', name: { el: 'Ελβετία', en: 'Switzerland' } },
  { code: 'SE', name: { el: 'Σουηδία', en: 'Sweden' } },
  { code: 'NO', name: { el: 'Νορβηγία', en: 'Norway' } },
  { code: 'DK', name: { el: 'Δανία', en: 'Denmark' } },
  { code: 'FI', name: { el: 'Φινλανδία', en: 'Finland' } },
  { code: 'PL', name: { el: 'Πολωνία', en: 'Poland' } },
  { code: 'CZ', name: { el: 'Τσεχία', en: 'Czechia' } },
  { code: 'HU', name: { el: 'Ουγγαρία', en: 'Hungary' } },
  { code: 'HR', name: { el: 'Κροατία', en: 'Croatia' } },
  { code: 'RO', name: { el: 'Ρουμανία', en: 'Romania' } },
  { code: 'BG', name: { el: 'Βουλγαρία', en: 'Bulgaria' } },
  { code: 'RS', name: { el: 'Σερβία', en: 'Serbia' } },
  { code: 'AL', name: { el: 'Αλβανία', en: 'Albania' } },
  { code: 'MT', name: { el: 'Μάλτα', en: 'Malta' } },
  { code: 'TR', name: { el: 'Τουρκία', en: 'Türkiye' } },
  { code: 'AE', name: { el: 'Ηνωμένα Αραβικά Εμιράτα', en: 'United Arab Emirates' } },
  { code: 'ZA', name: { el: 'Νότια Αφρική', en: 'South Africa' } },
];

export const readHomeCountry = (): string | null => {
  const v = read(HOME_KEY);
  return v && /^[A-Z]{2}$/.test(v) ? v : null;
};
export const writeHomeCountry = (code: string) => write(HOME_KEY, code.toUpperCase());

/** Name of any country we know — from the home list or the Explorer registry; the code itself as a last resort. */
export const countryName = (code: string, lang: Lang): string =>
  HOME_COUNTRIES.find(c => c.code === code)?.name[lang]
  ?? CITY_META.find(c => c.countryCode === code)?.country[lang]
  ?? code;

/** A passport number that never changes for this device/account: WB- plus seven characters. */
export const passportNumber = (): string => {
  const saved = read(NUMBER_KEY);
  if (saved && /^WB-[A-Z0-9]{7}$/.test(saved)) return saved;
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O/1/I — a child reads it aloud
  let out = 'WB-';
  const rnd = new Uint8Array(7);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) crypto.getRandomValues(rnd);
  else for (let i = 0; i < 7; i++) rnd[i] = Math.floor(Math.random() * 256);
  for (let i = 0; i < 7; i++) out += alphabet[rnd[i] % alphabet.length];
  write(NUMBER_KEY, out);
  return out;
};

/** Issue date: the first time the passport was opened. */
export const passportIssuedAt = (): number => {
  const saved = Number(read(ISSUED_KEY));
  if (saved > 0) return saved;
  const now = Date.now();
  write(ISSUED_KEY, String(now));
  return now;
};

export interface CityStamp {
  meta: ExploreCityMeta;
  done: number;             // spots opened + quiz passed
  need: number;             // spots needed for the stamp
  earnedAt: number | null;  // when the N-th counting spot was opened
  taste: boolean;           // the taste stamp ("Γευσιγνώστης"): three things tasted
}

export interface CountryPage {
  code: string;
  name: LocalizedString;
  home: boolean;
  stamps: CityStamp[];      // empty ⇒ the country has no Explorer city yet
  earnedAt: number | null;  // country stamp: every city of the country stamped
}

export interface PassportBook {
  home: string | null;
  countries: CountryPage[];
  visited: number;          // countries with at least one city stamp
  cityStamps: number;
  countryStamps: number;
  tasteStamps: number;
}

/** When the city stamp was earned — from the envelope timestamps Explorer already keeps. */
export const cityStamp = (meta: ExploreCityMeta): CityStamp => {
  const p = readProgress(meta.id);
  const doneAt = Object.entries(p.opened)
    .filter(([spotId]) => getQuizStars(spotQuizId(meta.id, spotId)) >= 1)
    .map(([, o]) => o.at)
    .sort((a, b) => a - b);
  const need = cityBadgeNeed(meta.spotCount);
  return { meta, done: doneAt.length, need, earnedAt: doneAt.length >= need ? doneAt[need - 1] : null, taste: tasteBadgeEarned(meta.id, p) };
};

/** The whole booklet, home country first, then the rest alphabetically in the child's language. */
export const buildPassport = (lang: Lang, home: string | null = readHomeCountry()): PassportBook => {
  const codes = [...new Set(CITY_META.map(c => c.countryCode))];
  const pages: CountryPage[] = codes.map(code => {
    const stamps = CITY_META.filter(c => c.countryCode === code).map(cityStamp);
    const all = stamps.every(s => s.earnedAt !== null);
    return {
      code,
      name: CITY_META.find(c => c.countryCode === code)!.country,
      home: code === home,
      stamps,
      earnedAt: all ? Math.max(...stamps.map(s => s.earnedAt!)) : null,
    };
  });
  if (home && !codes.includes(home)) {
    pages.push({ code: home, name: { el: countryName(home, 'el'), en: countryName(home, 'en') }, home: true, stamps: [], earnedAt: null });
  }
  pages.sort((a, b) => (a.home === b.home ? a.name[lang].localeCompare(b.name[lang], lang) : a.home ? -1 : 1));
  const cityStamps = pages.reduce((n, p) => n + p.stamps.filter(s => s.earnedAt !== null).length, 0);
  return {
    home,
    countries: pages,
    visited: pages.filter(p => p.stamps.some(s => s.earnedAt !== null)).length,
    cityStamps,
    countryStamps: pages.filter(p => p.earnedAt !== null).length,
    tasteStamps: pages.reduce((n, p) => n + p.stamps.filter(s => s.taste).length, 0),
  };
};

/** A stamp is never perfectly straight — a fixed tilt per slot so the page looks the same every visit. */
export const stampTilt = (i: number): number => ((i * 7) % 19) - 9;

/** Ink colours cycle per slot: the classic border-control reds, blues and greens. */
export const STAMP_INKS = ['#b3261e', '#1d4ed8', '#166534', '#6d28d9', '#b45309', '#0f766e'];
export const stampInk = (i: number): string => STAMP_INKS[i % STAMP_INKS.length];

export const formatStampDate = (ts: number, lang: Lang): string =>
  new Date(ts).toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
