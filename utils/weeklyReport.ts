/**
 * Parent weekly report — pure aggregation (PRODUCT-VISION Νο5).
 * =============================================================
 * «Όχι '57 λεπτά', αλλά τι έμαθε, πόσο καλά τα πήγε, τι δημιούργησε.»
 * Everything here is computed from rows that carry REAL server timestamps
 * (quiz_best.achieved_at, heroes/user_songs/user_videos.created_at) — no guessing
 * from cumulative counters. Pure functions so the numbers are pinned by tests;
 * fetching and rendering live in components/ParentWeeklyReport.tsx.
 */

export interface WeeklyQuizRow {
  category_id: string;
  score: number;
  total: number;
  achieved_at: string; // ISO
}

export interface WeeklyCreationRow {
  /** hero name / song title / video title — shown to the parent, may be null. */
  title: string | null;
  created_at: string; // ISO
}

export interface WeeklyInput {
  quizRows: WeeklyQuizRow[];
  heroes: WeeklyCreationRow[];
  songs: WeeklyCreationRow[];
  videos: WeeklyCreationRow[];
  /** End of the window (defaults to now); the window is the 7 days before it. */
  now?: number;
}

export interface WeeklyReportData {
  /** School best runs improved this week (exams excluded). */
  schoolMissions: number;
  /** Stars those runs are worth (0–3 each, same thresholds as getQuizStars). */
  schoolStars: number;
  /** Weighted correct % across ALL quiz best-runs improved this week, 0–100; null if none. */
  quizPct: number | null;
  /** Subject id ('math' | 'greek' | …) with the most improved school runs; null if none. */
  topSubject: string | null;
  heroes: number;
  songs: number;
  videos: number;
  creationsTotal: number;
  /** Up to 3 creation names to make the report human («τον ήρωα 'Δράκος 3000'»). */
  creationTitles: string[];
  /** True when the whole week is empty — the UI shows the nudge state. */
  quiet: boolean;
}

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const SCHOOL_RE = /^school-g\d+-/;
const EXAM_RE = /^school-g\d+-exam$/;
/** school-g3-math-multiplication → math */
const SUBJECT_RE = /^school-g\d+-([a-z]+)/;

const starsFor = (score: number, total: number): number => {
  if (!(total > 0) || !(score >= 0)) return 0;
  const pct = score / total;
  return pct >= 1 ? 3 : pct >= 0.75 ? 2 : pct >= 0.5 ? 1 : 0;
};

const inWindow = (iso: string, now: number): boolean => {
  const ts = Date.parse(iso);
  return Number.isFinite(ts) && ts > now - WEEK_MS && ts <= now;
};

export function computeWeeklyReport(input: WeeklyInput): WeeklyReportData {
  const now = input.now ?? Date.now();

  const quiz = (input.quizRows || []).filter(r =>
    r && typeof r.category_id === 'string' && r.total > 0 && r.score >= 0 && inWindow(r.achieved_at, now));

  const school = quiz.filter(r => SCHOOL_RE.test(r.category_id) && !EXAM_RE.test(r.category_id));

  const bySubject = new Map<string, number>();
  for (const r of school) {
    const m = SUBJECT_RE.exec(r.category_id);
    if (m) bySubject.set(m[1], (bySubject.get(m[1]) || 0) + 1);
  }
  let topSubject: string | null = null;
  let topCount = 0;
  for (const [subj, count] of bySubject) {
    if (count > topCount) { topSubject = subj; topCount = count; }
  }

  const answered = quiz.reduce((s, r) => s + r.total, 0);
  const correct = quiz.reduce((s, r) => s + r.score, 0);

  const pick = (rows: WeeklyCreationRow[]) => (rows || []).filter(r => r && inWindow(r.created_at, now));
  const heroes = pick(input.heroes);
  const songs = pick(input.songs);
  const videos = pick(input.videos);

  const creationTitles = [...heroes, ...songs, ...videos]
    .map(r => (r.title || '').trim())
    .filter(t => t.length > 0 && t.length <= 60)
    .slice(0, 3);

  const creationsTotal = heroes.length + songs.length + videos.length;

  return {
    schoolMissions: school.length,
    schoolStars: school.reduce((s, r) => s + starsFor(r.score, r.total), 0),
    quizPct: answered > 0 ? Math.round((correct / answered) * 100) : null,
    topSubject,
    heroes: heroes.length,
    songs: songs.length,
    videos: videos.length,
    creationsTotal,
    creationTitles,
    quiet: quiz.length === 0 && creationsTotal === 0,
  };
}

/**
 * «Ρωτήστε τον/την σήμερα…» — one conversation starter per report, picked from what
 * the child actually touched. Deterministic within a day (day-index rotation), so the
 * prompt doesn't change on every re-render but rotates across the week.
 */
export function conversationPrompt(report: WeeklyReportData, lang: 'el' | 'en', now: number = Date.now()): string {
  const day = Math.floor(now / (24 * 60 * 60 * 1000));
  const pools: Record<string, { el: string[]; en: string[] }> = {
    math: {
      el: ['Ρωτήστε το παιδί να σας εξηγήσει το πιο δύσκολο πρόβλημα Μαθηματικών που έλυσε αυτή την εβδομάδα.', 'Ζητήστε του να σας «κάνει τον δάσκαλο» σε ό,τι έμαθε στα Μαθηματικά.'],
      en: ['Ask your child to explain the hardest maths problem they solved this week.', 'Ask them to "be the teacher" on what they learned in maths.'],
    },
    greek: {
      el: ['Ζητήστε του να σας πει μια καινούργια λέξη που έμαθε — και να τη χρησιμοποιήσετε μαζί σε μια πρόταση.', 'Ρωτήστε ποιο κείμενο του άρεσε πιο πολύ στη Γλώσσα και γιατί.'],
      en: ['Ask for a new word they learned — and build a sentence with it together.', 'Ask which text they liked most in Greek and why.'],
    },
    science: {
      el: ['Ρωτήστε το παιδί τι έμαθε για τον κόσμο γύρω μας — και πείτε του κι εσείς κάτι που δεν ήξερε.', 'Ζητήστε του να σας εξηγήσει ένα φαινόμενο που έμαθε, με δικά του λόγια.'],
      en: ['Ask what they learned about the world around us — and share one thing they did not know.', 'Ask them to explain a phenomenon they learned, in their own words.'],
    },
    history: {
      el: ['Ρωτήστε ποιο πρόσωπο ή γεγονός της Ιστορίας τού έκανε εντύπωση αυτή την εβδομάδα.', 'Ζητήστε του να σας διηγηθεί μια ιστορία από την Ιστορία — σαν παραμύθι.'],
      en: ['Ask which person or event in History impressed them this week.', 'Ask them to tell you a story from History — like a fairy tale.'],
    },
    geography: {
      el: ['Ρωτήστε ποιο μέρος του κόσμου θα ήθελε να επισκεφθεί απ\' όσα έμαθε — και ψάξτε το μαζί στον χάρτη.'],
      en: ['Ask which place they would like to visit from what they learned — and find it together on a map.'],
    },
    english: {
      el: ['Ζητήστε του να σας μάθει τρεις αγγλικές λέξεις που έμαθε αυτή την εβδομάδα.'],
      en: ['Ask them to teach you three English words they learned this week.'],
    },
    creation: {
      el: ['Ζητήστε να σας δείξει τι δημιούργησε αυτή την εβδομάδα — και ρωτήστε πώς το σκέφτηκε.', 'Ρωτήστε ποια δημιουργία του είναι η αγαπημένη του και τι θα έφτιαχνε μετά.'],
      en: ['Ask them to show you what they created this week — and how they came up with it.', 'Ask which creation is their favourite and what they would make next.'],
    },
    quiet: {
      el: ['Προτείνετε να διαλέξετε μαζί μια αποστολή στο Σχολείο — δέκα λεπτά φτάνουν για τα πρώτα αστέρια.', 'Ρωτήστε το παιδί τι ονειρεύεται να φτιάξει — και ξεκινήστε το μαζί στο WiseBot.'],
      en: ['Suggest picking a School mission together — ten minutes is enough for the first stars.', 'Ask your child what they dream of making — and start it together on WiseBot.'],
    },
    general: {
      el: ['Ρωτήστε το παιδί ποια ερώτηση quiz το δυσκόλεψε πιο πολύ αυτή την εβδομάδα — και λύστε τη μαζί.', 'Ρωτήστε τι καινούργιο έμαθε αυτή την εβδομάδα που θα ήθελε να το ξέρουν όλοι.'],
      en: ['Ask which quiz question was the trickiest this week — and solve it together.', 'Ask what new thing they learned this week that everyone should know.'],
    },
  };

  let key: string;
  if (report.quiet) key = 'quiet';
  else if (report.creationsTotal > 0 && report.creationsTotal > report.schoolMissions) key = 'creation';
  else if (report.topSubject && pools[report.topSubject]) key = report.topSubject;
  else if (report.creationsTotal > 0) key = 'creation';
  else key = 'general';
  const pool = pools[key][lang];
  return pool[day % pool.length];
}
