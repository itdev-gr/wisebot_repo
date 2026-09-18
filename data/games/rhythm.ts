/**
 * ΡΥΘΜΟΣ — content for the `rhythm` game
 * =======================================
 * Notes fall in three lanes; the child taps in time with one of our own songs.
 * Perfect / Good / Miss, and a combo. Three difficulties per song.
 *
 * THE SONGS are WiseBot Academy originals already shipped in `/public/songs`
 * and played by `components/MusicStudio.tsx` (same display titles). No new
 * licence question (docs/games/NOTES.md §4).
 *
 * THE CHARTS ARE MEASURED, NOT HAND-WRITTEN. `docs/games/research/beatmaps.json`
 * holds each song's beat grid and per-beat onset strength, measured from the
 * audio. `scripts/games-rhythm-charts.mjs` turns that into three note charts
 * per song (the rules are at the top of the script) and writes
 * `./rhythmCharts.ts`, which this file expands into `{ t, lane }` notes. To
 * change a chart, change the rule and re-run the script; the contract a chart
 * must pass is `data/games/rhythm.test.ts`.
 *
 * THE CLOCK (see `components/games/Rhythm.tsx`): song time is the AudioContext
 * clock only — `ctx.currentTime` minus the start, minus the browser's reported
 * output latency, minus the child's latency offset below. Never `Date.now()`.
 *
 * NO REACT IN THIS FILE. Imported by `components/games/Rhythm.tsx`,
 * `components/games/rhythmLogic.ts` and the tests.
 *
 * PRIVACY (audience 6–12): nothing leaves the device. The only things stored
 * are the latency offset and the best combo per song; the share card carries
 * a combo, an accuracy and a song title — never a name.
 */
import { RHYTHM_CHART_DATA } from './rhythmCharts';

/* ────────────────────────────── the types ──────────────────────────────── */

export type RhythmLane = 0 | 1 | 2;
export const RHYTHM_LANES: readonly RhythmLane[] = [0, 1, 2];

export const RHYTHM_DIFFICULTIES = ['easy', 'normal', 'hard'] as const;
export type RhythmDifficulty = (typeof RHYTHM_DIFFICULTIES)[number];

export interface RhythmNote {
  /** Song time in seconds, from the start of the mp3. */
  t: number;
  lane: RhythmLane;
}

export interface RhythmSong {
  id: string;
  file: string;
  /** Served from `/public/songs`. */
  src: string;
  titleEl: string;
  titleEn: string;
  emoji: string;
  bpm: number;
  /** First beat of the measured grid (s). */
  offsetSec: number;
  durationSec: number;
  /** The audio starts here (s) — a short lead-in before the first note. */
  playFromSec: number;
  /** The round ends here (s) — shortly after the last note. */
  playToSec: number;
  charts: Readonly<Record<RhythmDifficulty, readonly RhythmNote[]>>;
}

/** How precise a tap must be, per difficulty. */
export interface RhythmWindows {
  /** |tap − note| ≤ this → PERFECT. */
  perfectMs: number;
  /** |tap − note| ≤ this → GOOD. A note not tapped by +goodMs is a MISS. */
  goodMs: number;
  /**
   * A tap this much EARLIER than goodMs still takes the note, as a MISS — so
   * hammering a lane does not pay. 0 = off: an early tap is simply ignored.
   */
  earlyMissMs: number;
}

export interface RhythmDifficultyInfo {
  windows: RhythmWindows;
  /** Seconds a note takes from the top of the lane to the hit line. */
  fallSec: number;
}

/* ────────────────────────────── the numbers ────────────────────────────── */

export const RHYTHM_GAME_KEY = 'rhythm';

/** Checked free with `grep -rn wb_rhythm_ components/ data/ utils/` (13/9/2026 set). */
export const RHYTHM_STORAGE_KEY = 'wb_rhythm_progress';

export const RHYTHM_ACCENT = '#d946ef';

export const RHYTHM_DIFFICULTY_INFO: Readonly<Record<RhythmDifficulty, RhythmDifficultyInfo>> = {
  // Easy is for a 6-year-old: wide windows, slow notes, and an early tap is
  // just ignored — it never costs the note.
  easy: { windows: { perfectMs: 90, goodMs: 180, earlyMissMs: 0 }, fallSec: 1.9 },
  normal: { windows: { perfectMs: 60, goodMs: 140, earlyMissMs: 90 }, fallSec: 1.5 },
  hard: { windows: { perfectMs: 50, goodMs: 120, earlyMissMs: 80 }, fallSec: 1.2 },
};

/** Minimum gap between two easy notes (s). The generator guarantees two beats. */
export const EASY_MIN_GAP_SEC = 0.9;

/**
 * The child's latency offset in ms, added on top of what the browser reports
 * (`AudioContext.outputLatency`). Positive = "I hear the music late".
 */
export const LATENCY_OFFSET = { min: -150, max: 250, step: 10, default: 0 } as const;

/** Tap-in-time calibration: this many clicks, one every `intervalSec`; the first `skip` taps are warm-up. */
export const CALIBRATION = { clicks: 10, intervalSec: 0.6, skip: 2, minTaps: 4 } as const;

/** Points per judgement, before the combo multiplier. */
export const RHYTHM_POINTS = { perfect: 100, good: 50 } as const;
/** The multiplier grows by 1 every `step` combo, up to `max`. */
export const COMBO_MULTIPLIER = { step: 10, max: 4 } as const;
/** Accuracy (0–1) needed for XP tier 1, 2, 3. A GOOD counts half. */
export const RHYTHM_TIER_ACCURACY = [0.4, 0.7, 0.9] as const;

/* ────────────────────────────── the songs ─────────────────────────────── */

const SONG_META: readonly { id: string; titleEl: string; titleEn: string; emoji: string }[] = [
  { id: 'apo-idea-se-paixnidi', titleEl: 'Από Ιδέα… σε Παιχνίδι!', titleEn: 'From Idea… to Game!', emoji: '🎮' },
  { id: 'wisebot-future-mode', titleEl: 'Future Mode', titleEn: 'Future Mode', emoji: '🚀' },
  { id: 'wisebot-hero-squad', titleEl: 'WiseBot Hero Squad', titleEn: 'WiseBot Hero Squad', emoji: '🦸' },
  { id: 'wisebot-maker-mind', titleEl: 'The Maker Mind', titleEn: 'The Maker Mind', emoji: '🧠' },
  { id: 'xypna-maker', titleEl: 'Ξύπνα Maker!', titleEn: 'Wake Up, Maker!', emoji: '⚡' },
];

function expandChart(ms: readonly number[], lanes: string): RhythmNote[] {
  return ms.map((m, i) => ({ t: m / 1000, lane: Number(lanes[i]) as RhythmLane }));
}

export const RHYTHM_SONGS: readonly RhythmSong[] = SONG_META.map((meta) => {
  const d = RHYTHM_CHART_DATA[meta.id];
  if (!d) throw new Error(`rhythm: no chart data for ${meta.id}`);
  return {
    ...meta,
    file: `${meta.id}.mp3`,
    src: `/songs/${meta.id}.mp3`,
    bpm: d.bpm,
    offsetSec: d.offsetSec,
    durationSec: d.durationSec,
    playFromSec: d.playFromSec,
    playToSec: d.playToSec,
    charts: {
      easy: expandChart(d.charts.easy.ms, d.charts.easy.lanes),
      normal: expandChart(d.charts.normal.ms, d.charts.normal.lanes),
      hard: expandChart(d.charts.hard.ms, d.charts.hard.lanes),
    },
  };
});

/* ────────────────────────────── every string ───────────────────────────── */

export interface RhythmCopy {
  title: string;
  tagline: string;
  /* picker */
  pickSong: string;
  difficulty: string;
  difficultyName: Readonly<Record<RhythmDifficulty, string>>;
  difficultyHint: Readonly<Record<RhythmDifficulty, string>>;
  bpm: (bpm: number) => string;
  notesCount: (n: number) => string;
  bestCombo: (n: number) => string;
  start: string;
  loading: string;
  loadFailed: string;
  retry: string;
  /* latency */
  sync: string;
  syncHelp: string;
  syncValue: (ms: number) => string;
  syncLater: string;
  syncEarlier: string;
  calibrate: string;
  calibrateTitle: string;
  calibrateHelp: string;
  calibrateTap: string;
  calibrateDone: (ms: number) => string;
  calibrateFailed: string;
  close: string;
  /* play */
  laneLabel: (n: number) => string;
  judgement: Readonly<Record<'perfect' | 'good' | 'miss', string>>;
  combo: string;
  score: string;
  quit: string;
  paused: string;
  resume: string;
  getReady: string;
  /* end */
  endTitle: string;
  maxCombo: string;
  accuracy: string;
  fullCombo: string;
  newBest: string;
  playAgain: string;
  otherSong: string;
  exit: string;
  xpNote: string;
  noXpNote: string;
  /* sharing (combo, accuracy and a song title only) */
  share: string;
  sharing: string;
  shareDone: { shared: string; copied: string; downloaded: string };
  shareFailed: string;
  shareTitle: string;
  shareText: (combo: number, song: string) => string;
  cardTitle: string;
  cardHeadline: (combo: number, song: string) => string;
  cardSubstat: (accuracyPct: number, difficulty: string) => string;
}

export const RHYTHM_COPY: Record<'el' | 'en', RhythmCopy> = {
  el: {
    title: 'ΡΥΘΜΟΣ',
    tagline: 'Πάτα τις νότες τη στιγμή που φτάνουν στον κύκλο!',
    pickSong: 'ΔΙΑΛΕΞΕ ΤΡΑΓΟΥΔΙ',
    difficulty: 'ΔΥΣΚΟΛΙΑ',
    difficultyName: { easy: 'ΕΥΚΟΛΟ', normal: 'ΚΑΝΟΝΙΚΟ', hard: 'ΔΥΣΚΟΛΟ' },
    difficultyHint: {
      easy: 'Λίγες νότες, αργές. Για αρχή!',
      normal: 'Μία νότα σε κάθε δυνατό χτύπο.',
      hard: 'Κάθε χτύπος — και λίγο παραπάνω!',
    },
    bpm: (bpm) => `${Math.round(bpm)} BPM`,
    notesCount: (n) => `${n} νότες`,
    bestCombo: (n) => `Ρεκόρ combo: ${n}`,
    start: 'ΠΑΙΞΕ!',
    loading: 'ΦΟΡΤΩΝΩ ΤΟ ΤΡΑΓΟΥΔΙ…',
    loadFailed: 'Δεν μπόρεσα να φορτώσω το τραγούδι.',
    retry: 'ΞΑΝΑ',
    sync: 'ΣΥΓΧΡΟΝΙΣΜΟΣ ΗΧΟΥ',
    syncHelp: 'Αν οι νότες σου βγαίνουν πάντα αργά ή νωρίς, κάνε το τεστ.',
    syncValue: (ms) => `${ms > 0 ? '+' : ''}${ms} ms`,
    syncLater: 'Ο ήχος έρχεται πιο αργά',
    syncEarlier: 'Ο ήχος έρχεται πιο νωρίς',
    calibrate: 'ΤΕΣΤ',
    calibrateTitle: 'ΤΕΣΤ ΣΥΓΧΡΟΝΙΣΜΟΥ',
    calibrateHelp: 'Άκου τα «μπιπ» και πάτα το μεγάλο κουμπί μαζί τους.',
    calibrateTap: 'ΠΑΤΑ ΜΑΖΙ!',
    calibrateDone: (ms) => `Έτοιμο! Συγχρονισμός: ${ms > 0 ? '+' : ''}${ms} ms`,
    calibrateFailed: 'Δεν έπιασα αρκετά πατήματα. Δοκίμασε ξανά!',
    close: 'ΚΛΕΙΣΕ',
    laneLabel: (n) => `Λωρίδα ${n}`,
    judgement: { perfect: 'ΤΕΛΕΙΟ!', good: 'ΚΑΛΟ', miss: 'ΑΣΤΟΧΙΑ' },
    combo: 'COMBO',
    score: 'ΠΟΝΤΟΙ',
    quit: 'ΣΤΑΜΑΤΑ',
    paused: 'ΠΑΥΣΗ',
    resume: 'ΣΥΝΕΧΕΙΑ',
    getReady: 'ΕΤΟΙΜΟΣ;',
    endTitle: 'ΤΕΛΟΣ ΤΡΑΓΟΥΔΙΟΥ!',
    maxCombo: 'ΜΕΓΙΣΤΟ COMBO',
    accuracy: 'ΑΚΡΙΒΕΙΑ',
    fullCombo: 'ΟΛΕΣ ΤΙΣ ΝΟΤΕΣ! FULL COMBO!',
    newBest: 'ΝΕΟ ΡΕΚΟΡ COMBO!',
    playAgain: 'ΞΑΝΑ',
    otherSong: 'ΑΛΛΟ ΤΡΑΓΟΥΔΙ',
    exit: 'ΤΕΛΟΣ',
    xpNote: 'Κέρδισες XP για αυτό το τραγούδι.',
    noXpNote: 'Χωρίς XP αυτή τη φορά — ή πήρες ήδη το σημερινό.',
    share: 'ΜΟΙΡΑΣΟΥ ΤΟ',
    sharing: 'ΕΤΟΙΜΑΖΩ…',
    shareDone: {
      shared: 'Έφυγε! 🎉',
      copied: 'Το αντέγραψα! Επικόλλησέ το όπου θες. 📋',
      downloaded: 'Το αποθήκευσα σαν εικόνα. 💾',
    },
    shareFailed: 'Δεν μπόρεσα να φτιάξω την κάρτα. Δοκίμασε ξανά.',
    shareTitle: 'Ρυθμός',
    shareText: (combo, song) => `Ρυθμός στο WiseBot Academy: Combo ${combo} στο “${song}”! Εσύ;`,
    cardTitle: 'ΡΥΘΜΟΣ',
    cardHeadline: (combo, song) => `Combo ${combo} στο “${song}”`,
    cardSubstat: (pct, diff) => `Ακρίβεια ${pct}% · ${diff}`,
  },
  en: {
    title: 'RHYTHM',
    tagline: 'Tap the notes the moment they reach the circle!',
    pickSong: 'PICK A SONG',
    difficulty: 'DIFFICULTY',
    difficultyName: { easy: 'EASY', normal: 'NORMAL', hard: 'HARD' },
    difficultyHint: {
      easy: 'Few notes, slow ones. Start here!',
      normal: 'A note on every strong beat.',
      hard: 'Every beat — and a bit more!',
    },
    bpm: (bpm) => `${Math.round(bpm)} BPM`,
    notesCount: (n) => `${n} notes`,
    bestCombo: (n) => `Best combo: ${n}`,
    start: 'PLAY!',
    loading: 'LOADING THE SONG…',
    loadFailed: "I couldn't load the song.",
    retry: 'RETRY',
    sync: 'AUDIO SYNC',
    syncHelp: 'If your notes always come out late or early, take the test.',
    syncValue: (ms) => `${ms > 0 ? '+' : ''}${ms} ms`,
    syncLater: 'Sound arrives later',
    syncEarlier: 'Sound arrives earlier',
    calibrate: 'TEST',
    calibrateTitle: 'SYNC TEST',
    calibrateHelp: 'Listen to the beeps and tap the big button with them.',
    calibrateTap: 'TAP ALONG!',
    calibrateDone: (ms) => `Done! Sync: ${ms > 0 ? '+' : ''}${ms} ms`,
    calibrateFailed: "I didn't catch enough taps. Try again!",
    close: 'CLOSE',
    laneLabel: (n) => `Lane ${n}`,
    judgement: { perfect: 'PERFECT!', good: 'GOOD', miss: 'MISS' },
    combo: 'COMBO',
    score: 'SCORE',
    quit: 'STOP',
    paused: 'PAUSED',
    resume: 'RESUME',
    getReady: 'GET READY!',
    endTitle: 'SONG COMPLETE!',
    maxCombo: 'MAX COMBO',
    accuracy: 'ACCURACY',
    fullCombo: 'EVERY NOTE! FULL COMBO!',
    newBest: 'NEW BEST COMBO!',
    playAgain: 'AGAIN',
    otherSong: 'ANOTHER SONG',
    exit: 'EXIT',
    xpNote: 'You earned XP for this song.',
    noXpNote: "No XP this time — or you already got today's.",
    share: 'SHARE IT',
    sharing: 'PREPARING…',
    shareDone: {
      shared: 'Sent! 🎉',
      copied: 'Copied! Paste it anywhere. 📋',
      downloaded: 'Saved as an image. 💾',
    },
    shareFailed: "I couldn't make the card. Try again.",
    shareTitle: 'Rhythm',
    shareText: (combo, song) => `Rhythm at WiseBot Academy: Combo ${combo} on “${song}”! Can you beat it?`,
    cardTitle: 'RHYTHM',
    cardHeadline: (combo, song) => `Combo ${combo} on “${song}”`,
    cardSubstat: (pct, diff) => `Accuracy ${pct}% · ${diff}`,
  },
};
