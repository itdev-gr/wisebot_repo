/**
 * Η ΠΡΟΚΛΗΣΗ ΤΗΣ ΗΜΕΡΑΣ — content for the `daily` game
 * ====================================================
 * Everything the content team may want to change without touching a component:
 * which rounds the challenge draws from, how long a round lasts, how many
 * rounds make a day, what counts as a perfect round, where the XP tiers sit,
 * and every single user-visible string in Greek and English.
 *
 * NO REACT IN THIS FILE. It is imported by `components/games/DailyChallenge.tsx`
 * and by `components/games/dailyChallenge.test.ts`; the round components
 * themselves are reached only through the `load()` dynamic imports below, so
 * nothing here drags a React chunk into a test or into the daily shell before
 * the child actually presses ΞΕΚΙΝΑ.
 *
 * PRIVACY (hard rule, audience is 6–12): the share strings below are the only
 * text that ever reaches a share sheet. They carry a score and a streak and
 * nothing else — no child name, no date of birth, no free text. Do not add an
 * interpolation slot for any of those.
 */
import type { RoundDescriptor } from '../../components/games/playRound';

/* ────────────────────────────── the numbers ────────────────────────────── */

/** How long one round runs, in milliseconds. The brief says 30". */
export const ROUND_MS = 30_000;

/** How many rounds make up one daily challenge. */
export const ROUNDS_PER_DAY = 3;

/** The score scale the child sees: 0–10 ("Σκορ 0–10" in the brief). */
export const MAX_SCORE = 10;

/** Seconds of "get ready" before each round, so the 30" never starts on a
 *  child who is still reading the round name. */
export const READY_SECONDS = 3;

/** Accent used by the share card and by the game's own chrome (orange-500). */
export const DAILY_ACCENT = '#f97316';

/**
 * localStorage key for the streak record. Shared with `dailyLogic.ts`.
 *
 * NOT `wb_daily_streak`: that key is already owned by `components/DailyRewardPopup.tsx`,
 * the login-reward popup mounted on every Dashboard visit. It stores a different shape
 * (`{lastClaimDate, streak, totalClaimed}`), and sharing the key made each feature read
 * the other's record as "nothing claimed today" — so both would pay out a second time on
 * the same day. Keep this key distinct from anything under `components/`.
 */
export const DAILY_STORAGE_KEY = 'wb_daily_challenge';

/** Game key handed to `grantGameReward` — also the GameCenter URL (`/game?g=daily`). */
export const DAILY_GAME_KEY = 'daily';

/* ─────────────────────────────── the rounds ────────────────────────────── */

/**
 * A round in the daily pool.
 *
 * `target` is the content lever that makes three very different rounds
 * comparable: it is how many correct answers count as a *perfect* round.
 * Math Rush is open-ended (a child answers as many as they can in 30"), while
 * Word Quest and Spot It ask a fixed four — so scoring `correct / total` would
 * hand a full mark to a child who answered one question slowly. Each round is
 * scored `min(1, correct / target)` instead, and the three ratios are averaged
 * into the 0–10 score.
 *
 * Raise a target to make the challenge harder, lower it to make it kinder.
 */
export interface DailyRound extends RoundDescriptor {
  /** Correct answers that count as a perfect round. Must be > 0. */
  target: number;
}

/**
 * The pool the day's three rounds are drawn from. Add a fourth entry and the
 * daily challenge starts varying *which* games appear, not just their order —
 * no code change needed, as long as the component satisfies `PlayRoundProps`
 * (see `components/games/playRound.ts`).
 */
export const DAILY_ROUND_POOL: ReadonlyArray<DailyRound> = [
  {
    key: 'mathrush',
    label: { el: 'ΠΡΑΞΕΙΣ', en: 'MATH' },
    target: 8,
    load: () => import('../../components/games/rounds/MathRushRound'),
  },
  {
    key: 'wordquest',
    label: { el: 'ΛΕΞΕΙΣ', en: 'WORDS' },
    target: 4,
    load: () => import('../../components/games/rounds/WordQuestRound'),
  },
  {
    key: 'diff',
    label: { el: 'ΔΙΑΦΟΡΕΣ', en: 'SPOT IT' },
    target: 4,
    load: () => import('../../components/games/rounds/DiffRound'),
  },
];

/* ─────────────────────────────── the tiers ─────────────────────────────── */

/**
 * Score (0–10) → reward tier for `grantGameReward`, which pays 10/20/30 ⭐ XP
 * for tiers 1/2/3. Checked top-down; anything below the last `minScore` earns
 * no XP. Deliberately generous at the bottom — a six-year-old who finishes all
 * three rounds should not walk away with nothing.
 */
export const SCORE_TIERS: ReadonlyArray<{ minScore: number; tier: 1 | 2 | 3 }> = [
  { minScore: 7, tier: 3 },
  { minScore: 4, tier: 2 },
  { minScore: 1, tier: 1 },
];

/** Score → the praise line on the result screen. Checked top-down. */
export const PRAISE_STEPS: ReadonlyArray<{ minScore: number; el: string; en: string }> = [
  { minScore: 10, el: 'ΤΕΛΕΙΟ ΔΕΚΑΡΙ!', en: 'A PERFECT TEN!' },
  { minScore: 8, el: 'ΦΟΒΕΡΟΣ!', en: 'AMAZING!' },
  { minScore: 6, el: 'ΜΠΡΑΒΟ!', en: 'WELL DONE!' },
  { minScore: 3, el: 'ΚΑΛΗ ΠΡΟΣΠΑΘΕΙΑ!', en: 'GOOD TRY!' },
  { minScore: 0, el: 'ΑΥΡΙΟ ΞΑΝΑ!', en: 'TRY AGAIN TOMORROW!' },
];

/* ──────────────────────────────── the copy ─────────────────────────────── */

export interface DailyCopy {
  title: string;
  tagline: string;
  howTitle: string;
  how: readonly string[];
  todayLabel: string;
  start: string;
  practice: string;
  practiceNote: string;
  ready: string;
  go: string;
  roundOf: (n: number, total: number) => string;
  loading: string;
  scoreLabel: string;
  roundsLabel: string;
  streakLabel: string;
  streakDays: (n: number) => string;
  bestLabel: string;
  newRecord: string;
  firstDay: string;
  alreadyTitle: string;
  alreadyBody: string;
  comeBack: string;
  share: string;
  sharing: string;
  shareDone: { shared: string; copied: string; downloaded: string };
  shareFailed: string;
  shareTitle: string;
  shareText: (score: number, max: number) => string;
  cardTitle: string;
  cardHeadline: (score: number, max: number) => string;
  cardSubstat: (rounds: string) => string;
  xpNote: string;
  noXpNote: string;
}

export const DAILY_COPY: Record<'el' | 'en', DailyCopy> = {
  el: {
    // Greek is written already-uppercase where it should look uppercase:
    // toUpperCase() would keep the accents («ΠΡΌΚΛΗΣΗ») and look wrong.
    title: 'Η ΠΡΟΚΛΗΣΗ ΤΗΣ ΗΜΕΡΑΣ',
    tagline: 'Τρεις γύροι των 30". Ίδιοι για κάθε παιδί, σήμερα.',
    howTitle: 'ΠΩΣ ΠΑΙΖΕΤΑΙ',
    how: [
      'Τρεις γύροι, 30 δευτερόλεπτα ο καθένας.',
      'Όλα τα παιδιά παίζουν ακριβώς την ίδια πρόκληση σήμερα.',
      'Στο τέλος παίρνεις σκορ από 0 ως 10 — και το σερί σου μεγαλώνει.',
    ],
    todayLabel: 'ΣΗΜΕΡΑ',
    start: 'ΞΕΚΙΝΑ',
    practice: 'ΕΞΑΣΚΗΣΗ',
    practiceNote: 'Η εξάσκηση δεν αλλάζει το σερί και δεν δίνει XP.',
    ready: 'ΕΤΟΙΜΟΣ;',
    go: 'ΠΑΜΕ!',
    roundOf: (n, total) => `ΓΥΡΟΣ ${n}/${total}`,
    loading: 'ΦΟΡΤΩΝΕΙ…',
    scoreLabel: 'ΤΟ ΣΚΟΡ ΣΟΥ',
    roundsLabel: 'ΟΙ ΓΥΡΟΙ ΣΟΥ',
    streakLabel: 'ΣΕΡΙ',
    streakDays: (n) => (n === 1 ? '1 ΜΕΡΑ ΣΕΡΙ' : `${n} ΜΕΡΕΣ ΣΕΡΙ`),
    bestLabel: 'ΡΕΚΟΡ',
    newRecord: 'ΝΕΟ ΡΕΚΟΡ ΣΕΡΙ!',
    firstDay: 'Η πρώτη σου μέρα! Έλα και αύριο για να μεγαλώσει το σερί.',
    alreadyTitle: 'ΤΟ ΕΠΑΙΞΕΣ ΗΔΗ ΣΗΜΕΡΑ',
    alreadyBody: 'Αυτό είναι το σκορ σου για σήμερα.',
    comeBack: 'Νέα πρόκληση αύριο το πρωί!',
    share: 'ΜΟΙΡΑΣΟΥ',
    sharing: 'ΕΤΟΙΜΑΖΩ…',
    shareDone: {
      shared: 'Έφυγε! 🎉',
      copied: 'Το αντέγραψα! Επικόλλησέ το όπου θες. 📋',
      downloaded: 'Το αποθήκευσα σαν εικόνα. 💾',
    },
    shareFailed: 'Δεν μπόρεσα να φτιάξω την κάρτα. Δοκίμασε ξανά.',
    shareTitle: 'Η Πρόκληση της Ημέρας',
    shareText: (score, max) =>
      `Η Πρόκληση της Ημέρας στο WiseBot Academy: ${score}/${max}. Θα με περάσεις;`,
    cardTitle: 'Η ΠΡΟΚΛΗΣΗ ΤΗΣ ΗΜΕΡΑΣ',
    cardHeadline: (score, max) => `Έκανα ${score}/${max} σήμερα, εσύ;`,
    cardSubstat: (rounds) => rounds,
    xpNote: 'Μία φορά τη μέρα κερδίζεις XP.',
    noXpNote: 'Χωρίς XP — το σημερινό το πήρες ήδη.',
  },
  en: {
    title: 'DAILY CHALLENGE',
    tagline: 'Three 30s rounds. The same for every child, today.',
    howTitle: 'HOW TO PLAY',
    how: [
      'Three rounds, 30 seconds each.',
      'Every child plays exactly the same challenge today.',
      'You finish with a score from 0 to 10 — and your streak grows.',
    ],
    todayLabel: 'TODAY',
    start: 'START',
    practice: 'PRACTICE',
    practiceNote: 'Practice runs do not change your streak and give no XP.',
    ready: 'READY?',
    go: 'GO!',
    roundOf: (n, total) => `ROUND ${n}/${total}`,
    loading: 'LOADING…',
    scoreLabel: 'YOUR SCORE',
    roundsLabel: 'YOUR ROUNDS',
    streakLabel: 'STREAK',
    streakDays: (n) => (n === 1 ? '1 DAY STREAK' : `${n} DAY STREAK`),
    bestLabel: 'BEST',
    newRecord: 'NEW STREAK RECORD!',
    firstDay: 'Day one! Come back tomorrow to grow your streak.',
    alreadyTitle: 'ALREADY PLAYED TODAY',
    alreadyBody: 'This is your score for today.',
    comeBack: 'A new challenge tomorrow morning!',
    share: 'SHARE',
    sharing: 'PREPARING…',
    shareDone: {
      shared: 'Sent! 🎉',
      copied: 'Copied! Paste it anywhere. 📋',
      downloaded: 'Saved as a picture. 💾',
    },
    shareFailed: 'Could not build the card. Try again.',
    shareTitle: 'Daily Challenge',
    shareText: (score, max) =>
      `Daily Challenge on WiseBot Academy: ${score}/${max}. Can you beat me?`,
    cardTitle: 'DAILY CHALLENGE',
    cardHeadline: (score, max) => `I scored ${score}/${max} today, can you beat me?`,
    cardSubstat: (rounds) => rounds,
    xpNote: 'XP once a day.',
    noXpNote: 'No XP — you already earned today’s.',
  },
};
