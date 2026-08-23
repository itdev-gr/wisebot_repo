/**
 * SYNC SERVICE — Bidirectional sync between localStorage and Supabase
 * ====================================================================
 * Handles pulling data from cloud on login and pushing changes on state updates.
 * Uses a "take higher" merge strategy for credits/stats/xp.
 */
import { supabase, isSupabaseConfigured } from './supabaseClient';

// --- Types matching EconomyContext ---
export interface SyncBadges {
  thinker: boolean;
  creator: boolean;
  filmmaker: boolean;
  builder: boolean;
  market: boolean;
  musician: boolean;
  scientist: boolean;
  explorer: boolean;
}

export interface SyncStats {
  quizzesPassed: number;
  imagesCreated: number;
  videosCreated: number;
  heroesUploaded: number;
  lessonsRead: number;
  booksRead: number;
  businessesCreated: number;
  songsCreated: number;
}

export interface SyncState {
  credits: number;
  xp: number;
  level: number;
  stats: SyncStats;
  badges: SyncBadges;
  streakCurrent: number;
  streakBest: number;
  childName: string;
  avatarUrl: string;
}

// --- PULL FROM CLOUD ---
export async function pullFromCloud(userId: string): Promise<SyncState | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    // Fetch profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (profileError || !profile) {
      console.warn('[Sync] Could not fetch profile:', profileError?.message);
      return null;
    }

    // Fetch stats
    const { data: stats } = await supabase
      .from('stats')
      .select('*')
      .eq('user_id', userId)
      .single();

    // Fetch badges
    const { data: badgeRows } = await supabase
      .from('badges')
      .select('badge_type')
      .eq('user_id', userId);

    // Convert badge rows to object
    const badges: SyncBadges = {
      thinker: false, creator: false, filmmaker: false,
      builder: false, market: false, musician: false,
      scientist: false, explorer: false,
    };
    if (badgeRows) {
      for (const row of badgeRows) {
        if (row.badge_type in badges) {
          (badges as any)[row.badge_type] = true;
        }
      }
    }

    return {
      credits: profile.credits || 0,
      xp: profile.xp || 0,
      level: profile.level || 1,
      streakCurrent: profile.streak_current || 0,
      streakBest: profile.streak_best || 0,
      childName: profile.child_name || '',
      avatarUrl: profile.avatar_url || '',
      stats: stats ? {
        quizzesPassed: stats.quizzes_passed || 0,
        imagesCreated: stats.images_created || 0,
        videosCreated: stats.videos_created || 0,
        heroesUploaded: stats.heroes_uploaded || 0,
        lessonsRead: stats.stories_read || 0,
        booksRead: stats.books_read || 0,
        businessesCreated: stats.businesses_created || 0,
        songsCreated: stats.songs_created || 0,
      } : {
        quizzesPassed: 0, imagesCreated: 0, videosCreated: 0,
        heroesUploaded: 0, lessonsRead: 0, booksRead: 0,
        businessesCreated: 0, songsCreated: 0,
      },
      badges,
    };
  } catch (err) {
    console.error('[Sync] Pull error:', err);
    return null;
  }
}

// --- MERGE (cloud-authoritative credits, take-higher stats, union badges) ---
export function mergeState(local: SyncState, cloud: SyncState): SyncState {
  return {
    // Credits: the server (profiles.credits) is the source of truth — it is
    // the only writer (AI deductions, /api/auth/earn, purchases, gifts).
    // Math.max here would resurrect spent credits on every login.
    credits: cloud.credits,
    xp: Math.max(local.xp, cloud.xp),
    level: Math.max(local.level, cloud.level),
    streakCurrent: Math.max(local.streakCurrent, cloud.streakCurrent),
    streakBest: Math.max(local.streakBest, cloud.streakBest),
    childName: cloud.childName || local.childName,
    avatarUrl: local.avatarUrl || cloud.avatarUrl,
    stats: {
      quizzesPassed: Math.max(local.stats.quizzesPassed, cloud.stats.quizzesPassed),
      imagesCreated: Math.max(local.stats.imagesCreated, cloud.stats.imagesCreated),
      videosCreated: Math.max(local.stats.videosCreated, cloud.stats.videosCreated),
      heroesUploaded: Math.max(local.stats.heroesUploaded, cloud.stats.heroesUploaded),
      lessonsRead: Math.max(local.stats.lessonsRead, cloud.stats.lessonsRead),
      booksRead: Math.max(local.stats.booksRead, cloud.stats.booksRead),
      businessesCreated: Math.max(local.stats.businessesCreated, cloud.stats.businessesCreated),
      songsCreated: Math.max(local.stats.songsCreated, cloud.stats.songsCreated),
    },
    badges: {
      thinker: local.badges.thinker || cloud.badges.thinker,
      creator: local.badges.creator || cloud.badges.creator,
      filmmaker: local.badges.filmmaker || cloud.badges.filmmaker,
      builder: local.badges.builder || cloud.badges.builder,
      market: local.badges.market || cloud.badges.market,
      musician: local.badges.musician || cloud.badges.musician,
      scientist: local.badges.scientist || cloud.badges.scientist,
      explorer: local.badges.explorer || cloud.badges.explorer,
    },
  };
}

// --- PUSH TO CLOUD ---
export async function pushToCloud(userId: string, state: SyncState): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;

  try {
    // Update profile — credits intentionally NOT pushed: the server is the
    // only writer of profiles.credits (deductions, earn endpoint, purchases).
    const { error: profileError } = await supabase
      .from('profiles')
      .update({
        xp: state.xp,
        level: state.level,
        streak_current: state.streakCurrent,
        streak_best: state.streakBest,
        avatar_url: state.avatarUrl || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);

    if (profileError) {
      console.warn('[Sync] Profile push error:', profileError.message);
      return false;
    }

    // Update stats
    const { error: statsError } = await supabase
      .from('stats')
      .update({
        quizzes_passed: state.stats.quizzesPassed,
        images_created: state.stats.imagesCreated,
        videos_created: state.stats.videosCreated,
        heroes_uploaded: state.stats.heroesUploaded,
        stories_read: state.stats.lessonsRead,
        books_read: state.stats.booksRead,
        businesses_created: state.stats.businessesCreated,
        songs_created: state.stats.songsCreated,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId);

    if (statsError) {
      console.warn('[Sync] Stats push error:', statsError.message);
    }

    // Upsert badges (insert new ones, ignore existing)
    const badgeTypes = Object.entries(state.badges)
      .filter(([_, unlocked]) => unlocked)
      .map(([type]) => type);

    if (badgeTypes.length > 0) {
      const badgeRows = badgeTypes.map(type => ({
        user_id: userId,
        badge_type: type,
      }));

      await supabase
        .from('badges')
        .upsert(badgeRows, { onConflict: 'user_id,badge_type', ignoreDuplicates: true });
    }

    return true;
  } catch (err) {
    console.error('[Sync] Push error:', err);
    return false;
  }
}

// ─── QUIZ BEST RUNS (wb_quiz_best_* ↔ public.quiz_best) ───
// Best quiz runs drive School stars, Master badges and diplomas (QuizEngine.saveQuizBest).
// They sync per key with the same "strictly better ratio wins" rule saveQuizBest uses, so
// a best run can never be lowered — the quiz_best table's trigger enforces the same rule
// server-side against stale or concurrent writers.

export interface QuizBestEntry {
  score: number;
  total: number;
  timestamp: number;
}

const QUIZ_BEST_PREFIX = 'wb_quiz_best_';
// Mirrors the table's CHECK constraints — invalid junk must not poison a batch upsert.
const isValidQuizBest = (e: QuizBestEntry): boolean =>
  Number.isFinite(e.score) && Number.isFinite(e.total) &&
  Number.isInteger(e.score) && Number.isInteger(e.total) &&
  e.total >= 1 && e.total <= 500 && e.score >= 0 && e.score <= e.total;

/** Same comparison as QuizEngine.saveQuizBest: strictly higher score/total wins. */
export function isBetterQuizBest(candidate: QuizBestEntry, incumbent: QuizBestEntry | null): boolean {
  if (!isValidQuizBest(candidate)) return false;
  if (!incumbent || !isValidQuizBest(incumbent)) return true;
  return candidate.score / candidate.total > incumbent.score / incumbent.total;
}

/** Per-key take-better merge. Ties keep the local entry (no churn, matches saveQuizBest). */
export function mergeQuizBests(
  local: Record<string, QuizBestEntry>,
  cloud: Record<string, QuizBestEntry>,
): Record<string, QuizBestEntry> {
  const merged: Record<string, QuizBestEntry> = {};
  for (const [key, entry] of Object.entries(local)) {
    if (isValidQuizBest(entry)) merged[key] = entry;
  }
  for (const [key, entry] of Object.entries(cloud)) {
    if (isBetterQuizBest(entry, merged[key] ?? null)) merged[key] = entry;
  }
  return merged;
}

export function readLocalQuizBests(): Record<string, QuizBestEntry> {
  const out: Record<string, QuizBestEntry> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(QUIZ_BEST_PREFIX)) continue;
    const categoryId = key.slice(QUIZ_BEST_PREFIX.length);
    if (!categoryId || categoryId.length > 120) continue;
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || '') as QuizBestEntry;
      if (isValidQuizBest(parsed)) out[categoryId] = parsed;
    } catch { /* corrupt entry — skip */ }
  }
  return out;
}

export function writeLocalQuizBests(bests: Record<string, QuizBestEntry>) {
  for (const [categoryId, entry] of Object.entries(bests)) {
    try {
      localStorage.setItem(QUIZ_BEST_PREFIX + categoryId, JSON.stringify(entry));
    } catch { /* storage full */ }
  }
}

async function pullQuizBests(userId: string): Promise<Record<string, QuizBestEntry> | null> {
  const { data, error } = await supabase
    .from('quiz_best')
    .select('category_id, score, total, achieved_at')
    .eq('user_id', userId);
  if (error) {
    console.warn('[Sync] Quiz best pull error:', error.message);
    return null;
  }
  const out: Record<string, QuizBestEntry> = {};
  for (const row of data || []) {
    const entry: QuizBestEntry = {
      score: row.score,
      total: row.total,
      timestamp: Date.parse(row.achieved_at) || Date.now(),
    };
    if (isValidQuizBest(entry)) out[row.category_id] = entry;
  }
  return out;
}

async function upsertQuizBests(userId: string, bests: Record<string, QuizBestEntry>): Promise<boolean> {
  const rows = Object.entries(bests).map(([categoryId, e]) => ({
    user_id: userId,
    category_id: categoryId,
    score: e.score,
    total: e.total,
  }));
  if (rows.length === 0) return true;
  const { error } = await supabase
    .from('quiz_best')
    .upsert(rows, { onConflict: 'user_id,category_id' });
  if (error) {
    console.warn('[Sync] Quiz best push error:', error.message);
    return false;
  }
  return true;
}

/**
 * Full two-way sync: pull cloud rows, take the better run per key, write the result to
 * localStorage and push back only the keys where local was the better one. Called on
 * login (SyncBridge) and when the Parent Dashboard opens the School report.
 */
export async function syncQuizBests(userId: string): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;
  try {
    const cloud = await pullQuizBests(userId);
    if (cloud === null) return false;
    const local = readLocalQuizBests();
    const merged = mergeQuizBests(local, cloud);
    writeLocalQuizBests(merged);
    const localBetter: Record<string, QuizBestEntry> = {};
    for (const [key, entry] of Object.entries(merged)) {
      if (isBetterQuizBest(entry, cloud[key] ?? null)) localBetter[key] = entry;
    }
    return await upsertQuizBests(userId, localBetter);
  } catch (err) {
    console.error('[Sync] Quiz best sync error:', err);
    return false;
  }
}

/**
 * Fire-and-forget push of a single improved run (QuizEngine.saveQuizBest). Guests have no
 * session — the run stays in localStorage exactly as before. The table trigger drops the
 * write if the cloud already holds a better run, so no pre-read is needed.
 */
export async function pushQuizBest(categoryId: string, entry: QuizBestEntry): Promise<void> {
  if (!isSupabaseConfigured()) return;
  if (!isValidQuizBest(entry) || !categoryId || categoryId.length > 120) return;
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (!userId) return;
    await upsertQuizBests(userId, { [categoryId]: entry });
  } catch (err) {
    console.warn('[Sync] Quiz best push error:', err);
  }
}

// --- DEBOUNCE HELPER ---
let pushTimer: ReturnType<typeof setTimeout> | null = null;

export function debouncedPush(userId: string, state: SyncState, delayMs: number = 2000) {
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    pushToCloud(userId, state);
  }, delayMs);
}

export function cancelPendingPush() {
  if (pushTimer) {
    clearTimeout(pushTimer);
    pushTimer = null;
  }
}
