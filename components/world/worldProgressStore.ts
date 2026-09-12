/**
 * WiseBot World — where the passport is kept.
 *
 * The shape, the key and the two functions that touch localStorage. Split out of
 * `useWorldProgress.ts` so the cloud-sync layer can read and write the same passport
 * without importing the award machinery — and, more to the point, without the two files
 * importing each other. `useWorldProgress.ts` owns every decision about what is *earned*;
 * this file owns nothing but the bytes.
 *
 * It has no React in it and no Supabase in it, so a test can call it directly.
 */

import type { CityId, CountryId, ExhibitId, PlaceId, RiddleId, TrailId } from '../../data/world/types';

/** The one key. One rather than a key per place: low quota, survives a partial write. */
export const WORLD_PROGRESS_KEY = 'wb_world_progress';

/** Bumped only for a breaking shape change; the reader resets rather than guesses. */
export const WORLD_PROGRESS_VERSION = 2;

export interface PlaceStamp {
  /** ISO date of the first visit. What the passport prints. */
  at: string;
  /** Whether the question was right on that first attempt. */
  correct: boolean;
}

export interface WorldProgress {
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

export const EMPTY_WORLD_PROGRESS: WorldProgress = {
  v: WORLD_PROGRESS_VERSION,
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

/** Corrupt JSON is a real state here. A bad read is an empty passport, never a crash. */
export function readWorldProgress(): WorldProgress {
  try {
    const raw = localStorage.getItem(WORLD_PROGRESS_KEY);
    if (!raw) return { ...EMPTY_WORLD_PROGRESS };
    const parsed = JSON.parse(raw) as Partial<WorldProgress>;
    if (parsed?.v !== WORLD_PROGRESS_VERSION) return { ...EMPTY_WORLD_PROGRESS };
    return {
      ...EMPTY_WORLD_PROGRESS,
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
    return { ...EMPTY_WORLD_PROGRESS };
  }
}

/** Storage can be full or blocked in a private window. Never break the screen over it. */
export function writeWorldProgress(progress: WorldProgress): void {
  try {
    localStorage.setItem(WORLD_PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    /* full, or blocked in a private window — never break the screen over it */
  }
}
