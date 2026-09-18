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

/**
 * The passport's schema version. Read this before touching it.
 *
 * A NEW field is added optional, defaulted in `salvage()` below, and this number does NOT
 * move. The version moves only when an EXISTING field changes meaning — and then only with
 * a step beside it in `MIGRATIONS`, never on its own.
 *
 * It used to be the other way round. The reader threw away any object whose `v` did not
 * match, so bumping this number was a silent `localStorage.clear()` of every child's
 * passport on every device: every stamp, every seal, every date, gone, and a blank book
 * with no explanation. It had already fired once, going from 1 to 2.
 */
export const WORLD_PROGRESS_VERSION = 2;

export interface PlaceStamp {
  /** ISO date of the first visit. What the passport prints. */
  at: string;
  /** Whether the question was right on that first attempt. */
  correct: boolean;
  /**
   * True when the question was unlocked by «Είμαι εδώ!» — the family was standing there —
   * rather than read at home. The North Star is «completed REAL-WORLD missions», and
   * without this a story read on the sofa and a place reached on foot are the same stamp.
   *
   * ABSENT on every stamp written before this field existed. Treat absent as UNKNOWN,
   * never as false, in any count or report: some of those were walked.
   *
   * One boolean, decided on the device. No position, accuracy or time of fix is stored
   * or passed to anything — §28.
   */
  onSite?: boolean;
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

type Raw = Record<string, unknown>;

const isObject = (x: unknown): x is Raw => typeof x === 'object' && x !== null && !Array.isArray(x);

/**
 * A fresh empty passport. Not `{ ...EMPTY_WORLD_PROGRESS }`: that spread copies the top
 * level only, so every "empty" passport would share one `places` object and one set of
 * arrays with the constant — and the first in-place write anywhere would quietly give
 * every future empty passport a stamp.
 */
const fresh = (): WorldProgress => ({
  v: WORLD_PROGRESS_VERSION,
  entries: {},
  places: {},
  exhibits: {},
  riddles: {},
  trailsDone: [],
  citiesDone: [],
  countriesDone: [],
});

/** A map of id → date string. Entries of any other shape are dropped one by one. */
function stringMap(x: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (!isObject(x)) return out;
  for (const [key, value] of Object.entries(x)) {
    if (typeof value === 'string') out[key] = value;
  }
  return out;
}

/** The stamps. A stamp without a date string and a boolean is not a stamp we can print. */
function stampMap(x: unknown): Record<string, PlaceStamp> {
  const out: Record<string, PlaceStamp> = {};
  if (!isObject(x)) return out;
  for (const [key, value] of Object.entries(x)) {
    if (isObject(value) && typeof value.at === 'string' && typeof value.correct === 'boolean') {
      const stamp: PlaceStamp = { at: value.at, correct: value.correct };
      // Kept only when it is a real boolean. Absent stays absent — "unknown" — rather than
      // being defaulted to false and quietly reclassifying a walked stamp as a sofa one.
      if (typeof value.onSite === 'boolean') stamp.onSite = value.onSite;
      out[key] = stamp;
    }
  }
  return out;
}

const stringList = (x: unknown): string[] =>
  Array.isArray(x) ? x.filter((s): s is string => typeof s === 'string') : [];

/**
 * Keep everything that has the right shape, drop only what does not — field by field,
 * never the whole passport. This is also where a new optional field gets its default.
 */
function salvage(raw: Raw): WorldProgress {
  return {
    v: WORLD_PROGRESS_VERSION,
    entries: stringMap(raw.entries),
    places: stampMap(raw.places),
    exhibits: stringMap(raw.exhibits),
    riddles: stringMap(raw.riddles),
    trailsDone: stringList(raw.trailsDone),
    citiesDone: stringList(raw.citiesDone),
    countriesDone: stringList(raw.countriesDone),
  };
}

/**
 * One step per version whose fields CHANGED MEANING, keyed by the version it upgrades
 * from. A version that only added fields needs no work here — `salvage` defaults them —
 * but it still gets a line, so the ladder reads as a history rather than a guess.
 */
const MIGRATIONS: Record<number, (raw: Raw) => Raw> = {
  /**
   * v1 → v2 added `entries`, `exhibits`, `riddles` and `countriesDone`. Nothing v1 held —
   * `places`, `trailsDone`, `citiesDone` — changed meaning, so it carries over whole.
   */
  1: (raw) => raw,
};

/**
 * Bring any stored object up to the current shape without losing a stamp.
 *
 * Older: walk the ladder from its version to ours. Newer, or a `v` that is not a whole
 * number — a child who opened a later build in another browser profile — has no steps to
 * apply, so salvage what is recognisable and keep it. A passport we half-understand is
 * worth more to the child than a blank one we fully understand.
 *
 * Exported for the tests. It never pays XP and it cannot: nothing in this file knows the
 * economy exists. Paying on read would pay a child again on every device, the same reason
 * the cloud sync is forbidden to.
 */
export function migrateWorldProgress(parsed: Raw): WorldProgress {
  let raw = parsed;
  const from = raw.v;
  if (typeof from === 'number' && Number.isInteger(from) && from >= 1 && from < WORLD_PROGRESS_VERSION) {
    for (let version = from; version < WORLD_PROGRESS_VERSION; version++) {
      const step = MIGRATIONS[version];
      if (step) raw = step(raw);
    }
  }
  return salvage(raw);
}

/** Corrupt JSON is a real state here. A bad read is an empty passport, never a crash. */
export function readWorldProgress(): WorldProgress {
  try {
    const text = localStorage.getItem(WORLD_PROGRESS_KEY);
    if (!text) return fresh();
    const parsed: unknown = JSON.parse(text);
    return isObject(parsed) ? migrateWorldProgress(parsed) : fresh();
  } catch {
    return fresh();
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
