/**
 * Progressive unlocks — "Πρώτα η μάθηση, μετά η μαγεία."
 * ========================================================
 * Learning rooms (library, academy, school, quiz, games) and the Music Studio are always
 * open. The other AI creation rooms open as the child reads and creates — small, easy
 * steps, each one a celebration (see ONBOARDING-PLAN.md).
 *
 * This file is the single source of truth. Dashboard cards, the menu, the route gate and
 * the unlock celebration all read from here so they can never disagree.
 *
 * Music stays open on purpose: it is the door the ads bring children through.
 */
import type { EconomyStats } from '../context/EconomyContext';

export type UnlockKey = 'factory' | 'cinema' | '3d' | 'business';

type Lang = 'el' | 'en';

export interface UnlockRule {
  key: UnlockKey;
  /** Stats thresholds that open the room. All must be met. */
  needs: Partial<Record<keyof EconomyStats, number>>;
  /** If any of these stats is > 0 the room is open regardless — existing users who have
   *  already used a tool must never wake up to find it locked. */
  grandfatheredBy: (keyof EconomyStats)[];
  room: Record<Lang, string>;
  /** What the child must do, in WiseBot's voice. `{n}` = how many are still missing. */
  hint: Record<Lang, string>;
  /** Where the unlocking action happens. */
  goTo: string;
  celebrate: Record<Lang, { title: string; subtitle: string }>;
}

export const UNLOCK_RULES: Record<UnlockKey, UnlockRule> = {
  factory: {
    key: 'factory',
    needs: { lessonsRead: 1 },
    grandfatheredBy: ['imagesCreated', 'heroesUploaded'],
    room: { el: 'Εργαστήριο Ηρώων', en: 'Hero Factory' },
    hint: {
      el: 'Διάβασε {n} ιστορία στην Ακαδημία και ξεκλειδώνει. Ξεκίνα από τον Walt Disney!',
      en: 'Read {n} story in the Academy and it unlocks. Start with Walt Disney!',
    },
    goTo: '/academy',
    celebrate: {
      el: { title: 'ΞΕΚΛΕΙΔΩΣΕΣ ΤΟ ΕΡΓΑΣΤΗΡΙΟ!', subtitle: 'Τώρα φτιάξε τον δικό σου ήρωα 🎨' },
      en: { title: 'HERO FACTORY UNLOCKED!', subtitle: 'Now make your own hero 🎨' },
    },
  },
  cinema: {
    key: 'cinema',
    needs: { imagesCreated: 1 },
    grandfatheredBy: ['videosCreated'],
    room: { el: 'Κινηματογράφος', en: 'Cinema' },
    hint: {
      el: 'Φτιάξε {n} ήρωα στο Εργαστήριο — μετά τον ζωντανεύεις σε βίντεο.',
      en: 'Make {n} hero in the Factory — then bring them to life on video.',
    },
    goTo: '/factory',
    celebrate: {
      el: { title: 'ΞΕΚΛΕΙΔΩΣΕΣ ΤΟΝ ΚΙΝΗΜΑΤΟΓΡΑΦΟ!', subtitle: 'Ο ήρωάς σου μπορεί να κινηθεί 🎬' },
      en: { title: 'CINEMA UNLOCKED!', subtitle: 'Your hero can move now 🎬' },
    },
  },
  '3d': {
    key: '3d',
    needs: { imagesCreated: 1 },
    grandfatheredBy: ['videosCreated'],
    room: { el: '3D Εργοστάσιο', en: '3D Factory' },
    hint: {
      el: 'Φτιάξε {n} ήρωα στο Εργαστήριο — μετά τον κάνεις 3D.',
      en: 'Make {n} hero in the Factory — then turn them into 3D.',
    },
    goTo: '/factory',
    celebrate: {
      el: { title: 'ΞΕΚΛΕΙΔΩΣΕΣ ΤΟ 3D!', subtitle: 'Ο ήρωάς σου σε τρεις διαστάσεις 🧊' },
      en: { title: '3D UNLOCKED!', subtitle: 'Your hero in three dimensions 🧊' },
    },
  },
  business: {
    key: 'business',
    needs: { lessonsRead: 2 },
    grandfatheredBy: ['businessesCreated'],
    room: { el: 'Η Εταιρεία Μου', en: 'My Company' },
    hint: {
      el: 'Διάβασε {n} ιστορίες ακόμα στην Ακαδημία — μετά γίνεσαι αφεντικό.',
      en: 'Read {n} more stories in the Academy — then you become the boss.',
    },
    goTo: '/academy',
    celebrate: {
      el: { title: 'ΕΤΟΙΜΟΣ ΓΙΑ ΑΦΕΝΤΙΚΟ!', subtitle: 'Η Εταιρεία Μου ξεκλειδώθηκε 🏢' },
      en: { title: 'READY TO BE THE BOSS!', subtitle: 'My Company is unlocked 🏢' },
    },
  },
};

export const isUnlocked = (key: UnlockKey, stats: EconomyStats): boolean => {
  const rule = UNLOCK_RULES[key];
  if (rule.grandfatheredBy.some(k => (stats[k] ?? 0) > 0)) return true;
  return Object.entries(rule.needs).every(([k, n]) => (stats[k as keyof EconomyStats] ?? 0) >= (n ?? 0));
};

/** Hint with `{n}` filled in with what is still missing (never below 1). */
export const unlockHint = (key: UnlockKey, stats: EconomyStats, lang: Lang): string => {
  const rule = UNLOCK_RULES[key];
  const missing = Math.max(
    1,
    ...Object.entries(rule.needs).map(([k, n]) => (n ?? 0) - (stats[k as keyof EconomyStats] ?? 0)),
  );
  return rule.hint[lang].replace('{n}', String(missing));
};

const SEEN_PREFIX = 'wb_unlocked_';
export const wasCelebrated = (key: UnlockKey) => {
  try { return localStorage.getItem(SEEN_PREFIX + key) === '1'; } catch { return true; }
};
export const markCelebrated = (key: UnlockKey) => {
  try { localStorage.setItem(SEEN_PREFIX + key, '1'); } catch { /* private mode */ }
};

/** Route → unlock key, for the route gate and the menu. */
export const ROUTE_UNLOCK: Record<string, UnlockKey> = {
  '/factory': 'factory',
  '/cinema': 'cinema',
  '/3d-factory': '3d',
  '/business': 'business',
};
