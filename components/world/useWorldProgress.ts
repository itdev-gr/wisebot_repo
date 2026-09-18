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
 *     listens for, so the economy context never learns this module exists. The only
 *     other thing an award triggers is one of the five anonymous counters in
 *     `utils/worldAnalytics.ts` — a city or country id, never a place, a position or
 *     a person — fired after the commit, never before it.
 *
 * Guests keep everything: progress is local, so a child with no account collects
 * stamps normally. That is the same deal every other room offers.
 */

import { useCallback, useMemo, useRef, useState } from 'react';
import { useEconomy } from '../../context/EconomyContext';
import { pushWorldStamp } from '../../services/worldStampsSync';
import {
  trackWorldMissionCompleted,
  trackWorldSecondCity,
  trackWorldStampEarned,
} from '../../utils/worldAnalytics';
import {
  readWorldProgress as read,
  writeWorldProgress as write,
  today,
} from './worldProgressStore';
import type { PlaceStamp, WorldProgress } from './worldProgressStore';
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

// The shape, the key and the two storage functions live in `worldProgressStore.ts`, so
// the cloud-sync layer can read the same passport without importing this file's award
// machinery. Re-exported here because three screens already import them from this path.
export { today };
export type { PlaceStamp, WorldProgress };

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
   * @param onSite          the question was unlocked by «Είμαι εδώ!». Recorded on the
   *                        stamp and nothing else: it moves no XP and no seal.
   */
  visitPlace: (
    place: Place,
    correct: boolean,
    city: City,
    cityPlaceIds: PlaceId[],
    countryCityIds: CityId[],
    onSite: boolean,
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
      trackWorldStampEarned({ countryId: country.id });
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
      onSite: boolean,
    ): WorldAward | null => {
      const current = ref.current;
      // The FIRST stamp is the record. A place read at home and walked to later keeps
      // its first answer — this early return is why onSite can never be rewritten.
      if (current.places[place.id]) return null;

      // For the «second city» counter: is this the first stamp in this city, while
      // another city already has one? Decided on the state BEFORE this stamp lands.
      const firstInThisCity = !cityPlaceIds.some((id) => current.places[id]);
      const stampedElsewhere = Object.keys(current.places).some((id) => !cityPlaceIds.includes(id as PlaceId));

      const stamp: PlaceStamp = { at: today(), correct, onSite };
      const places = { ...current.places, [place.id]: stamp };
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

      // Push the moment it is earned, not on the next sign-in. `AuthContext.signOut`
      // clears every `wb_*` key, so a passport that had never been pushed would be gone.
      // Guests have no session and this returns without a request; a failed push is
      // picked up by the full sync at the next login, so it must not be awaited here.
      void pushWorldStamp(place.id, stamp);

      // Anonymous counters: a city id and nothing else (utils/worldAnalytics.ts).
      trackWorldMissionCompleted(city.id);
      if (correct) trackWorldStampEarned({ cityId: city.id });
      if (firstInThisCity && stampedElsewhere) trackWorldSecondCity();

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
