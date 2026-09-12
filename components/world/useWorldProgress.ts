/**
 * WiseBot World — the child's passport.
 *
 * Owns every award the module makes and every stamp it keeps. Nothing else in World
 * writes to storage, and nothing in World calls `earnXp` directly, so "did this pay
 * twice?" has exactly one file to read.
 *
 * Four rules, all of them failure modes this repository has actually produced:
 *
 *  1. **Awarding is keyed on the stamp, not on a render.** Every award function reads
 *     `ref.current`, refuses if the stamp is already there, and writes the stamp in the
 *     same synchronous step. React 19 StrictMode double-invokes effects and state
 *     updaters in development; this is the exact shape that double-paid credits before.
 *  2. **Every read and every write is wrapped.** Corrupt JSON is a real state here, and
 *     storage can be full or blocked in a private window. Neither may break the screen
 *     the child is on.
 *  3. **Ids are permanent.** A renamed `PlaceId` erases a stamp, silently.
 *  4. **XP only.** No credits, no badge, no `trackAction`. Credits are bought by
 *     parents; effort pays in XP. `earnXp` dispatches `wb:xp`, which `App.tsx` already
 *     listens for, so the economy context never learns this module exists.
 *
 * Guests keep everything: progress is local, so a child with no account collects
 * stamps normally. That is the same deal every other room offers.
 */

import { useCallback, useMemo, useRef, useState } from 'react';
import { useEconomy } from '../../context/EconomyContext';
import type {
  City,
  CityId,
  Country,
  CountryId,
  ExhibitId,
  Place,
  PlaceId,
  RiddleId,
  Trail,
  TrailId,
} from '../../data/world/types';

const KEY = 'wb_world_progress';
const VERSION = 2;

/**
 * What each thing is worth.
 *
 * Tuned against `data/makerLevels.ts`, where the Explorer tier starts at 300 XP: a
 * fifteen-place city with two museums lands a child most of the way there, and a
 * second city takes them past it. Change these only against that ladder, never in
 * isolation — and remember the rank rule from that file, that a tier may be made
 * easier to reach but never harder.
 */
export const WORLD_XP = {
  /** Stepping into a country for the first time. The stamp is the real reward. */
  enterCountry: 10,
  /** Reading a place's story to the end. */
  visitPlace: 10,
  /** Getting that place's question right, first try. */
  placeCorrect: 10,
  /** One exhibit inside a museum. Smaller, because there are many. */
  exhibitCorrect: 5,
  /** A riddle. Larger, because the child had to look around to solve it. */
  riddle: 15,
  /** Every place on a trail. */
  trail: 30,
  /** Every place in a city. */
  city: 50,
  /** Every city in a country. */
  country: 100,
} as const;

// ------------------------------------------------------------------- storage

export interface PlaceStamp {
  /** ISO date of the first visit. What the passport prints. */
  at: string;
  /** Whether the question was right on that first attempt. */
  correct: boolean;
}

export interface WorldProgress {
  /** Bumped only for a breaking shape change; the reader resets rather than guesses. */
  v: number;
  /** ISO date the child first entered each country. The entry stamp. */
  entries: Record<CountryId, string>;
  places: Record<PlaceId, PlaceStamp>;
  /** Exhibits answered correctly, by id. */
  exhibits: Record<ExhibitId, string>;
  /** Riddles solved, by id. */
  riddles: Record<RiddleId, string>;
  trailsDone: TrailId[];
  citiesDone: CityId[];
  countriesDone: CountryId[];
}

const EMPTY: WorldProgress = {
  v: VERSION,
  entries: {},
  places: {},
  exhibits: {},
  riddles: {},
  trailsDone: [],
  citiesDone: [],
  countriesDone: [],
};

/**
 * Today where the child is, not today in UTC.
 *
 * `toISOString()` converts to UTC first, so a child in Athens who earns a stamp at half
 * past midnight gets yesterday's date printed on it — the passport disagrees with the
 * clock they are looking at. Every hour east of Greenwich has this, and the three hours
 * of Greek summer time make it a nightly occurrence rather than an edge case.
 */
export const today = (): string => {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

function read(): WorldProgress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw) as Partial<WorldProgress>;
    if (parsed?.v !== VERSION) return { ...EMPTY };
    return {
      ...EMPTY,
      ...parsed,
      entries: parsed.entries ?? {},
      places: parsed.places ?? {},
      exhibits: parsed.exhibits ?? {},
      riddles: parsed.riddles ?? {},
      trailsDone: parsed.trailsDone ?? [],
      citiesDone: parsed.citiesDone ?? [],
      countriesDone: parsed.countriesDone ?? [],
    };
  } catch {
    return { ...EMPTY };
  }
}

function write(progress: WorldProgress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    /* full, or blocked in a private window — never break the screen over it */
  }
}

// -------------------------------------------------------------------- awards

/**
 * What just happened, so the caller can celebrate it. `null` means the child had
 * already earned this and nothing was paid.
 */
export interface WorldAward {
  xp: number;
  /** Set when this was the child's first step into the country. */
  enteredCountry?: Country;
  /** Set when this completed the city. */
  citySealed?: CityId;
  /** Set when this completed the country. */
  countrySealed?: CountryId;
  /** Set when this completed a trail. */
  trailDone?: TrailId;
}

export interface UseWorldProgress {
  progress: WorldProgress;

  /** Has this place been stamped? */
  hasPlace: (id: PlaceId) => boolean;
  hasExhibit: (id: ExhibitId) => boolean;
  hasRiddle: (id: RiddleId) => boolean;
  hasEntered: (id: CountryId) => boolean;

  /** How many places of this city are stamped. For the city card's progress ring. */
  cityStamped: (placeIds: PlaceId[]) => number;

  /**
   * Called the first time a child opens a country. Pays once, ever, and returns the
   * award carrying the country so the caller can ink the entry stamp.
   */
  enterCountry: (country: Country) => WorldAward | null;

  /**
   * Called once a child has read a place's story and answered its question.
   *
   * The two id lists are passed in rather than looked up. This hook deliberately does
   * not import the registry: the caller knows which content is live, and a hook that
   * reached for the registry itself would silently award nothing wherever the registry
   * is not the source — under test, and in the development fixture.
   *
   * @param cityPlaceIds    every place of this city, for the city seal
   * @param countryCityIds  every city of this country, for the country seal
   */
  visitPlace: (
    place: Place,
    correct: boolean,
    city: City,
    cityPlaceIds: PlaceId[],
    countryCityIds: CityId[],
  ) => WorldAward | null;

  /** One exhibit's question, inside a museum. */
  answerExhibit: (id: ExhibitId, correct: boolean) => WorldAward | null;
  /** One riddle, solved by tapping the right exhibit. */
  solveRiddle: (id: RiddleId) => WorldAward | null;
  /** Every place of a trail stamped. Safe to call on every stamp. */
  completeTrail: (trail: Trail) => WorldAward | null;
}

export function useWorldProgress(): UseWorldProgress {
  const { earnXp } = useEconomy();
  const [progress, setProgress] = useState<WorldProgress>(read);

  /**
   * The authority for every award decision. State is for rendering; this ref is what
   * "have they already got it?" is asked of, because it updates synchronously and a
   * double-invoked updater therefore cannot pay twice.
   */
  const ref = useRef<WorldProgress>(progress);

  const commit = useCallback((next: WorldProgress, xp: number, action: string) => {
    ref.current = next;
    setProgress(next);
    write(next);
    if (xp > 0) earnXp(xp, action);
  }, [earnXp]);

  const hasPlace = useCallback((id: PlaceId) => Boolean(ref.current.places[id]), []);
  const hasExhibit = useCallback((id: ExhibitId) => Boolean(ref.current.exhibits[id]), []);
  const hasRiddle = useCallback((id: RiddleId) => Boolean(ref.current.riddles[id]), []);
  const hasEntered = useCallback((id: CountryId) => Boolean(ref.current.entries[id]), []);

  const cityStamped = useCallback(
    (placeIds: PlaceId[]) => placeIds.filter((id) => ref.current.places[id]).length,
    [],
  );

  const enterCountry = useCallback(
    (country: Country): WorldAward | null => {
      const current = ref.current;
      if (current.entries[country.id]) return null;

      const next: WorldProgress = {
        ...current,
        entries: { ...current.entries, [country.id]: today() },
      };
      commit(next, WORLD_XP.enterCountry, 'WORLD_ENTER_COUNTRY');
      return { xp: WORLD_XP.enterCountry, enteredCountry: country };
    },
    [commit],
  );

  const visitPlace = useCallback(
    (
      place: Place,
      correct: boolean,
      city: City,
      cityPlaceIds: PlaceId[],
      countryCityIds: CityId[],
    ): WorldAward | null => {
      const current = ref.current;
      if (current.places[place.id]) return null;

      const places = { ...current.places, [place.id]: { at: today(), correct } };
      let xp = WORLD_XP.visitPlace + (correct ? WORLD_XP.placeCorrect : 0);
      const award: WorldAward = { xp };

      // A city is done when every one of its places is stamped, and a country when
      // every one of its cities is. Both are derived here rather than stored twice,
      // so the two can never disagree.
      const citiesDone = [...current.citiesDone];
      const countriesDone = [...current.countriesDone];

      const cityComplete =
        cityPlaceIds.length > 0 && cityPlaceIds.every((id) => places[id]);
      if (cityComplete && !citiesDone.includes(city.id)) {
        citiesDone.push(city.id);
        xp += WORLD_XP.city;
        award.citySealed = city.id;

        const countryComplete =
          countryCityIds.length > 0 && countryCityIds.every((id) => citiesDone.includes(id));
        if (countryComplete && !countriesDone.includes(city.countryId)) {
          countriesDone.push(city.countryId);
          xp += WORLD_XP.country;
          award.countrySealed = city.countryId;
        }
      }

      award.xp = xp;
      commit({ ...current, places, citiesDone, countriesDone }, xp, 'WORLD_VISIT_PLACE');
      return award;
    },
    [commit],
  );

  const answerExhibit = useCallback(
    (id: ExhibitId, correct: boolean): WorldAward | null => {
      const current = ref.current;
      // A wrong answer is free to retry; only a correct one is recorded and paid.
      if (!correct || current.exhibits[id]) return null;

      const next: WorldProgress = {
        ...current,
        exhibits: { ...current.exhibits, [id]: today() },
      };
      commit(next, WORLD_XP.exhibitCorrect, 'WORLD_EXHIBIT');
      return { xp: WORLD_XP.exhibitCorrect };
    },
    [commit],
  );

  const solveRiddle = useCallback(
    (id: RiddleId): WorldAward | null => {
      const current = ref.current;
      if (current.riddles[id]) return null;

      const next: WorldProgress = {
        ...current,
        riddles: { ...current.riddles, [id]: today() },
      };
      commit(next, WORLD_XP.riddle, 'WORLD_RIDDLE');
      return { xp: WORLD_XP.riddle };
    },
    [commit],
  );

  const completeTrail = useCallback(
    (trail: Trail): WorldAward | null => {
      const current = ref.current;
      if (current.trailsDone.includes(trail.id)) return null;
      if (!trail.placeIds.length) return null;
      if (!trail.placeIds.every((id) => current.places[id])) return null;

      const next: WorldProgress = {
        ...current,
        trailsDone: [...current.trailsDone, trail.id],
      };
      commit(next, WORLD_XP.trail, 'WORLD_TRAIL');
      return { xp: WORLD_XP.trail, trailDone: trail.id };
    },
    [commit],
  );

  return useMemo(
    () => ({
      progress,
      hasPlace,
      hasExhibit,
      hasRiddle,
      hasEntered,
      cityStamped,
      enterCountry,
      visitPlace,
      answerExhibit,
      solveRiddle,
      completeTrail,
    }),
    [
      progress,
      hasPlace,
      hasExhibit,
      hasRiddle,
      hasEntered,
      cityStamped,
      enterCountry,
      visitPlace,
      answerExhibit,
      solveRiddle,
      completeTrail,
    ],
  );
}

/**
 * A read-only summary for the Maker Passport, which awards nothing and only counts.
 * Deliberately not the hook: the Passport must not mount World's award machinery.
 */
export function readWorldSummary(): {
  countries: number;
  cities: number;
  places: number;
  seals: number;
} {
  const p = read();
  return {
    countries: Object.keys(p.entries).length,
    cities: p.citiesDone.length,
    places: Object.keys(p.places).length,
    seals: p.citiesDone.length + p.countriesDone.length,
  };
}
