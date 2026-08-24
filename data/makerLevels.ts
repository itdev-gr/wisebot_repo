/**
 * Maker Levels — the Journey's rank ladder (PRODUCT-VISION.md, «Τα 5 επιλεγμένα» Νο3).
 * ===================================================================================
 * Dreamer → Explorer → Creator → Maker → Inventor → Founder → Legend, derived purely
 * from total XP. This file is the single source of truth: the Passport screen, the
 * level-up celebration and any future unlock all read from here so they can never
 * disagree (same principle as utils/unlocks.ts).
 *
 * Deliberately independent of the numeric level counter in App.tsx (`wb_level`, +1 per
 * level*500 XP): that counter keeps existing UI («Επίπεδο 4») working untouched, while
 * the tier is the named identity the child carries. XP already syncs to profiles.xp, so
 * the tier follows the account across devices with no new server work.
 *
 * Calibration (see EconomyContext XP constants): quiz 20, story 20, book 50, business 30,
 * daily bonus 30, missions extra — an engaged child earns roughly 100–200 XP/day. The
 * thresholds pace the ladder from "first afternoon" (Explorer) to "a school year" (Legend).
 * Tune ONLY here; a tier must never be taken away, so thresholds may only be lowered.
 */

export interface MakerLevel {
  /** Stable id — persisted in wb_maker_level, never rename. */
  id: 'dreamer' | 'explorer' | 'creator' | 'maker' | 'inventor' | 'founder' | 'legend';
  /** Brand name, shared across languages (the vision names the ranks in English). */
  name: string;
  tagline: { el: string; en: string };
  emoji: string;
  /** Tailwind gradient classes for the tier's emblem/accents. */
  gradient: string;
  minXp: number;
}

export const MAKER_LEVELS: MakerLevel[] = [
  {
    id: 'dreamer', name: 'Dreamer', emoji: '💭', minXp: 0,
    gradient: 'from-sky-400 to-blue-500',
    tagline: { el: 'Όλα ξεκινούν από ένα όνειρο', en: 'Everything starts with a dream' },
  },
  {
    id: 'explorer', name: 'Explorer', emoji: '🧭', minXp: 300,
    gradient: 'from-emerald-400 to-teal-500',
    tagline: { el: 'Εξερευνάς και μαθαίνεις', en: 'You explore and you learn' },
  },
  {
    id: 'creator', name: 'Creator', emoji: '🎨', minXp: 1000,
    gradient: 'from-fuchsia-400 to-purple-500',
    tagline: { el: 'Δεν κοιτάς — δημιουργείς', en: "You don't watch — you create" },
  },
  {
    id: 'maker', name: 'Maker', emoji: '🛠️', minXp: 2500,
    gradient: 'from-amber-400 to-orange-500',
    tagline: { el: 'Οι ιδέες σου γίνονται πραγματικότητα', en: 'Your ideas become real' },
  },
  {
    id: 'inventor', name: 'Inventor', emoji: '💡', minXp: 6000,
    gradient: 'from-yellow-300 to-amber-500',
    tagline: { el: 'Φτιάχνεις πράγματα που δεν υπήρχαν', en: 'You build things that never existed' },
  },
  {
    id: 'founder', name: 'Founder', emoji: '🚀', minXp: 12000,
    gradient: 'from-rose-400 to-red-500',
    tagline: { el: 'Χτίζεις τον δικό σου κόσμο', en: 'You build your own world' },
  },
  {
    id: 'legend', name: 'Legend', emoji: '👑', minXp: 25000,
    gradient: 'from-indigo-400 via-purple-400 to-amber-400',
    tagline: { el: 'Μην αφήσεις ποτέ κανέναν να σου μάθει να σταματήσεις', en: 'Never let anyone teach you to stop' },
  },
];

/** The tier a child with this XP holds. Always defined (Dreamer at 0). */
export function makerLevelForXp(xp: number): MakerLevel {
  const safe = Number.isFinite(xp) && xp > 0 ? xp : 0;
  let current = MAKER_LEVELS[0];
  for (const lvl of MAKER_LEVELS) {
    if (safe >= lvl.minXp) current = lvl;
    else break;
  }
  return current;
}

export interface MakerProgress {
  current: MakerLevel;
  /** null when the child is a Legend — the ladder is complete. */
  next: MakerLevel | null;
  /** 0–100 toward the next tier (100 for Legend). */
  pct: number;
  xpIntoTier: number;
  xpForNext: number;
}

export function makerProgress(xp: number): MakerProgress {
  const safe = Number.isFinite(xp) && xp > 0 ? xp : 0;
  const current = makerLevelForXp(safe);
  const idx = MAKER_LEVELS.findIndex(l => l.id === current.id);
  const next = idx < MAKER_LEVELS.length - 1 ? MAKER_LEVELS[idx + 1] : null;
  if (!next) return { current, next: null, pct: 100, xpIntoTier: safe - current.minXp, xpForNext: 0 };
  const span = next.minXp - current.minXp;
  const into = safe - current.minXp;
  return {
    current,
    next,
    pct: Math.max(0, Math.min(100, Math.floor((into / span) * 100))),
    xpIntoTier: into,
    xpForNext: next.minXp - safe,
  };
}

/** Rank index (0-based) — used to detect tier-ups without comparing objects. */
export const makerLevelIndex = (id: MakerLevel['id']): number =>
  MAKER_LEVELS.findIndex(l => l.id === id);
