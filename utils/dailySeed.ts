/**
 * DAILY SEED — the same challenge for every child, on every device
 * ================================================================
 * "Η Πρόκληση της Ημέρας" only works if a phone in Θεσσαλονίκη and a tablet in
 * Λονδίνο generate the identical round on the same calendar day. That means two
 * things have to be pinned down:
 *
 *   1. **Which day it is.** The day rolls over at midnight *in Athens*, not in
 *      the device's timezone and not in UTC. The offset is +02:00 in winter and
 *      +03:00 in summer, so it is resolved with `Intl.DateTimeFormat` and the
 *      IANA zone `Europe/Athens` — never by adding a hand-written offset, which
 *      would put half the year's challenges on the wrong date.
 *   2. **A pure PRNG.** `Math.random()` cannot be used anywhere in a daily
 *      round. Everything random — question order, distractors, which image gets
 *      the difference — must come from `mulberry32(seedFromDayKey(key))`, which
 *      is a pure function of the day key.
 *
 * Usage:
 *   const key  = athensDayKey();            // '2026-09-13'
 *   const rng  = mulberry32(seedFromDayKey(key));
 *   const pick = seededShuffle(rng, QUESTIONS).slice(0, 3);
 *
 * Each round should build its own `mulberry32` from the day seed (optionally
 * offset per round) so that one round consuming a different number of values
 * cannot shift the next round's content.
 */

/* ────────────────────────────── day key ────────────────────────────── */

let cachedFormatter: Intl.DateTimeFormat | null = null;

function athensFormatter(): Intl.DateTimeFormat | null {
  if (cachedFormatter) return cachedFormatter;
  try {
    cachedFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Athens',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  } catch {
    // No Intl timezone data (ancient runtime). Handled by the caller.
    return null;
  }
  return cachedFormatter;
}

const pad2 = (n: number): string => (n < 10 ? `0${n}` : String(n));

/**
 * The current calendar date in Europe/Athens as 'YYYY-MM-DD'.
 *
 * DST-correct by construction: the zone is resolved by the ICU database, so
 * 2026-07-15T22:30:00Z (01:30 Athens, UTC+3) and 2026-01-15T23:30:00Z (01:30
 * Athens, UTC+2) both land on the 16th.
 *
 * If the runtime has no timezone data at all we fall back to the UTC date. That
 * still agrees across devices — the whole point — it just rolls over 2–3 hours
 * late for Greek players.
 */
export function athensDayKey(now: Date = new Date()): string {
  const fmt = athensFormatter();
  if (fmt && !Number.isNaN(now.getTime())) {
    let year = '';
    let month = '';
    let day = '';
    for (const part of fmt.formatToParts(now)) {
      if (part.type === 'year') year = part.value;
      else if (part.type === 'month') month = part.value;
      else if (part.type === 'day') day = part.value;
    }
    if (year && month && day) return `${year}-${month}-${day}`;
  }
  const fallback = Number.isNaN(now.getTime()) ? new Date() : now;
  return `${fallback.getUTCFullYear()}-${pad2(fallback.getUTCMonth() + 1)}-${pad2(fallback.getUTCDate())}`;
}

/* ──────────────────────────────── seed ─────────────────────────────── */

/**
 * Stable 32-bit hash of a day key: FNV-1a followed by an avalanche mix.
 *
 * The plain FNV-1a of '2026-01-15' and '2026-01-16' differs only in the low
 * bits; the final mix spreads that across the whole word so consecutive days
 * produce completely unrelated challenges. Pure, platform-independent, and
 * `Math.imul` keeps every step in exact 32-bit integer arithmetic.
 */
export function seedFromDayKey(key: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  // Avalanche (xmur3 finaliser).
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

/** Shorthand for `seedFromDayKey(athensDayKey(now))`. */
export function athensDaySeed(now: Date = new Date()): number {
  return seedFromDayKey(athensDayKey(now));
}

/* ──────────────────────────────── prng ─────────────────────────────── */

/**
 * mulberry32 — a small, fast, deterministic PRNG returning values in [0, 1).
 * Identical output for the same seed on every engine (all arithmetic is 32-bit
 * integer, no floating-point accumulation).
 */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ─────────────────────────────── helpers ───────────────────────────── */

/** Integer in [min, max], both ends inclusive. Tolerates a swapped range. */
export function seededInt(rng: () => number, min: number, max: number): number {
  const lo = Math.ceil(Math.min(min, max));
  const hi = Math.floor(Math.max(min, max));
  if (hi <= lo) return lo;
  const roll = Math.floor(rng() * (hi - lo + 1));
  // A caller-supplied rng that returns exactly 1 must not overflow the range.
  return lo + Math.min(Math.max(roll, 0), hi - lo);
}

/**
 * Fisher–Yates shuffle driven by `rng`. Pure: returns a new array and never
 * touches the input, so the same seed always yields the same order.
 */
export function seededShuffle<T>(rng: () => number, array: readonly T[]): T[] {
  const out = array.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.min(Math.floor(rng() * (i + 1)), i);
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

/** `count` distinct items picked deterministically from `array`. */
export function seededPick<T>(rng: () => number, array: readonly T[], count: number): T[] {
  if (count <= 0) return [];
  return seededShuffle(rng, array).slice(0, Math.min(count, array.length));
}
