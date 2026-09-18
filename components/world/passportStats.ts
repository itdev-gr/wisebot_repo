/**
 * WiseBot World — the passport's statistics, as pure arithmetic.
 * ==================================================================
 * Everything the statistics page shows is computed here from the passport object that
 * is already on disk (`WorldProgress`) and from the registry's own metadata. No React,
 * no storage, no network, no XP: this file can only count, and a test can call it with
 * a hand-written passport.
 *
 * Three decisions written down so the next session does not re-litigate them:
 *
 *  1. **No kilometres, now or later (§28).** The brief's §12 lists "χιλιόμετρα 143"; §28
 *     and its decisions row ("Ισχύουν πλήρως… καμία αποθήκευση θέσης") forbid any
 *     location history, and §28 wins. Nothing in `wb_world_progress` holds a coordinate,
 *     a time of fix or an accuracy, and nothing here reads one. The ticket's proposed
 *     substitute — the distance between OUR published place coordinates — is also left
 *     out: it needs every stamped city's content module loaded to read `place.location`,
 *     and it needs the owner's approval first. If it is ever approved it belongs in a
 *     separate function that takes the loaded places as an argument; it does not belong
 *     in this one.
 *  2. **Museums finished is omitted, not shown as 0.** No field records a finished
 *     museum yet (ticket `l3-museum-stamp`). A permanent "0 museums" reads to a child who
 *     walked three of them as an insult, so the page shows what IS recorded — exhibits
 *     answered and riddles solved — and nothing about whole museums.
 *  3. **Artifacts and rare badges are omitted.** Decisions row §30–31 puts artifacts after
 *     the field test, and spec 02 lines 35-39 forbid a new badge. No placeholder tile.
 *
 * "Missions" is defined here and nowhere else: places stamped + exhibits answered +
 * riddles solved + trails finished. It is computed from the passport only and MUST NOT
 * read `stats.missionsCompleted` or anything fed by `trackAction` — that is the daily
 * Academy mission, a different thing with the same word.
 *
 * `onSite` is read exactly as `worldProgressStore.ts` documents it: `true` is the
 * pavement, `false` is the sofa, and ABSENT is unknown — a stamp from before the flag
 * existed, some of which were walked. The three are counted separately and the page
 * says so, rather than folding the unknown ones into "at home".
 */

import type { CityId, CountryId, WorldLang } from '../../data/world/types';
import type { WorldProgress } from './worldProgressStore';

/**
 * The denominator §12 writes: "χώρες 8/195". The number of countries in the world is
 * the brief's, and it lives here once. How many WiseBot World has OPEN is a different
 * number, always derived from the content the page was handed — never a literal.
 */
export const WORLD_COUNTRY_COUNT = 195;

/** The slice of a `City` the arithmetic needs. Kept minimal so a test can hand in three fields. */
export interface StatsCity {
  id: CityId;
  countryId: CountryId;
}

export interface BestCity {
  cityId: CityId;
  /** Places of this city that carry a stamp. */
  stamps: number;
  /** Places the city has in total, or 0 when the registry does not know it. */
  total: number;
}

export interface CountryStamps {
  countryId: CountryId;
  /** Place stamps inside this country's cities. */
  stamps: number;
  /** Distinct cities of this country with at least one stamp. */
  cities: number;
  /** Whether the entry stamp is in the passport. A country can be entered with 0 stamps. */
  entered: boolean;
}

export interface PassportStats {
  countriesEntered: number;
  countriesSealed: number;
  /** Distinct cities with at least one stamped place. Visited, not sealed. */
  citiesVisited: number;
  citiesSealed: number;
  placesStamped: number;
  /** Stamps whose question was unlocked by «Είμαι εδώ!». */
  onSite: number;
  /** Stamps whose question was answered at home. */
  atHome: number;
  /** Stamps written before the flag existed. Unknown, never "at home". */
  unknownSite: number;
  /** Stamps whose question was right on the first try. */
  correct: number;
  exhibitsAnswered: number;
  riddlesSolved: number;
  trailsDone: number;
  /** places + exhibits + riddles + trails. Defined in this file's header. */
  missions: number;
  /** The city with the most stamps; ties go to the earlier city in display order. */
  bestCity: BestCity | null;
  /** The earliest date in the passport, ISO `YYYY-MM-DD`, or null when nothing is dated. */
  firstStampAt: string | null;
  /** Whole days between `firstStampAt` and today, never negative; null when either is unreadable. */
  daysSince: number | null;
  /** Every country entered or stamped, most stamps first, then display order. */
  perCountry: CountryStamps[];
}

const ISO_DAY = /^(\d{4})-(\d{2})-(\d{2})/;

/** Midday UTC of an ISO day, so a DST change on either side cannot shave a day off. */
function dayNumber(iso: string): number | null {
  const m = ISO_DAY.exec(typeof iso === 'string' ? iso.trim() : '');
  if (!m) return null;
  const ms = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12);
  if (Number.isNaN(ms)) return null;
  return Math.floor(ms / 86_400_000);
}

const isRecord = (x: unknown): x is Record<string, unknown> =>
  typeof x === 'object' && x !== null && !Array.isArray(x);

/**
 * The city a place belongs to, by the prefix invariant `data/world/world.test.ts` pins:
 * every place id starts with its city id and a dash. The LONGEST matching city wins, so
 * a future city id that happens to be a prefix of another cannot steal its places. A
 * place that matches no city — content not yet loaded, or an id from a later build — is
 * still a stamp; it just belongs to no city and no country here.
 */
function cityOfPlace(placeId: string, cities: readonly StatsCity[]): StatsCity | null {
  let best: StatsCity | null = null;
  for (const city of cities) {
    if (placeId === city.id || placeId.startsWith(`${city.id}-`)) {
      if (!best || city.id.length > best.id.length) best = city;
    }
  }
  return best;
}

/**
 * Every counter on the statistics page, from one passport and the registry's metadata.
 *
 * @param progress    the passport as `readWorldProgress()` returns it. Fields are still
 *                    guarded one by one — a caller under test may hand in less.
 * @param cities      every city the page knows about, in display order. Order matters:
 *                    it breaks the best-city tie and orders countries with equal stamps.
 * @param placeCounts how many places each city has (`PLACE_COUNTS` from the registry).
 * @param today       ISO `YYYY-MM-DD`, the child's local day, for `daysSince`.
 */
export function computePassportStats(
  progress: WorldProgress,
  cities: readonly StatsCity[],
  placeCounts: Readonly<Record<CityId, number>>,
  today: string,
): PassportStats {
  const entries = isRecord(progress?.entries) ? progress.entries : {};
  const places = isRecord(progress?.places) ? progress.places : {};
  const exhibits = isRecord(progress?.exhibits) ? progress.exhibits : {};
  const riddles = isRecord(progress?.riddles) ? progress.riddles : {};
  const trailsDone = Array.isArray(progress?.trailsDone) ? progress.trailsDone : [];
  const citiesDone = Array.isArray(progress?.citiesDone) ? progress.citiesDone : [];
  const countriesDone = Array.isArray(progress?.countriesDone) ? progress.countriesDone : [];
  const knownCities = Array.isArray(cities) ? cities : [];

  let onSite = 0;
  let atHome = 0;
  let unknownSite = 0;
  let correct = 0;
  const stampsPerCity = new Map<CityId, number>();
  let earliest: string | null = null;

  const noteDate = (iso: unknown) => {
    if (typeof iso !== 'string' || !ISO_DAY.test(iso.trim())) return;
    const day = iso.trim().slice(0, 10);
    if (earliest === null || day < earliest) earliest = day;
  };

  for (const [placeId, stamp] of Object.entries(places)) {
    if (!isRecord(stamp)) continue;
    if (stamp.onSite === true) onSite += 1;
    else if (stamp.onSite === false) atHome += 1;
    else unknownSite += 1;
    if (stamp.correct === true) correct += 1;
    noteDate(stamp.at);

    const city = cityOfPlace(placeId, knownCities);
    if (city) stampsPerCity.set(city.id, (stampsPerCity.get(city.id) ?? 0) + 1);
  }
  for (const iso of Object.values(entries)) noteDate(iso);
  for (const iso of Object.values(exhibits)) noteDate(iso);
  for (const iso of Object.values(riddles)) noteDate(iso);

  // Best city: most stamps, earliest in display order on a tie. Walking `cities` in its
  // own order and only replacing on a STRICTLY larger count is what makes the tie rule.
  let bestCity: BestCity | null = null;
  for (const city of knownCities) {
    const stamps = stampsPerCity.get(city.id) ?? 0;
    if (stamps > 0 && (bestCity === null || stamps > bestCity.stamps)) {
      const total = placeCounts?.[city.id];
      bestCity = {
        cityId: city.id,
        stamps,
        total: typeof total === 'number' && Number.isFinite(total) && total > 0 ? total : 0,
      };
    }
  }

  // Per country, in display order first, then re-sorted by stamps. The sort is stable,
  // so two countries with equal stamps keep the world list's order.
  const perCountryMap = new Map<CountryId, CountryStamps>();
  for (const city of knownCities) {
    const stamps = stampsPerCity.get(city.id) ?? 0;
    const row = perCountryMap.get(city.countryId) ?? {
      countryId: city.countryId,
      stamps: 0,
      cities: 0,
      entered: Boolean(entries[city.countryId]),
    };
    row.stamps += stamps;
    if (stamps > 0) row.cities += 1;
    perCountryMap.set(city.countryId, row);
  }
  // A country entered whose cities are not in `cities` at all — content not loaded —
  // still gets its row, with the entry stamp and nothing else.
  for (const countryId of Object.keys(entries)) {
    if (!perCountryMap.has(countryId)) {
      perCountryMap.set(countryId, { countryId, stamps: 0, cities: 0, entered: true });
    }
  }
  const perCountry = [...perCountryMap.values()]
    .filter((row) => row.entered || row.stamps > 0)
    .sort((a, b) => b.stamps - a.stamps);

  const placesStamped = Object.keys(places).length;
  const exhibitsAnswered = Object.keys(exhibits).length;
  const riddlesSolved = Object.keys(riddles).length;

  const firstDay = earliest === null ? null : dayNumber(earliest);
  const todayDay = dayNumber(today);
  const daysSince =
    firstDay === null || todayDay === null ? null : Math.max(0, todayDay - firstDay);

  return {
    countriesEntered: Object.keys(entries).length,
    countriesSealed: countriesDone.length,
    citiesVisited: stampsPerCity.size,
    citiesSealed: citiesDone.length,
    placesStamped,
    onSite,
    atHome,
    unknownSite,
    correct,
    exhibitsAnswered,
    riddlesSolved,
    trailsDone: trailsDone.length,
    missions: placesStamped + exhibitsAnswered + riddlesSolved + trailsDone.length,
    bestCity,
    firstStampAt: earliest,
    daysSince,
    perCountry,
  };
}

/** Nothing counted at all — the page shows its empty state instead of a grid of zeros. */
export function isEmptyPassport(stats: PassportStats): boolean {
  return (
    stats.countriesEntered === 0 &&
    stats.placesStamped === 0 &&
    stats.exhibitsAnswered === 0 &&
    stats.riddlesSolved === 0 &&
    stats.trailsDone === 0
  );
}

const LOCALE: Record<WorldLang, string> = {
  el: 'el-GR',
  en: 'en-GB',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
};

/**
 * An ISO day as the child would write it — "12 Σεπτεμβρίου 2026", "12 September 2026".
 * Formatted at midday UTC and read back in UTC, so the printed day is the stored day in
 * every timezone. An unreadable date prints as given rather than as "Invalid Date".
 */
export function formatIsoDate(iso: string, lang: WorldLang): string {
  const m = ISO_DAY.exec(typeof iso === 'string' ? iso.trim() : '');
  if (!m) return typeof iso === 'string' ? iso : '';
  const date = new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12));
  if (Number.isNaN(date.getTime())) return iso;
  try {
    return new Intl.DateTimeFormat(LOCALE[lang] ?? LOCALE.en, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(date);
  } catch {
    return `${m[3]}/${m[2]}/${m[1]}`;
  }
}
