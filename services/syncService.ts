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

// --- MERGE (server = source of truth for credits, take higher for stats/badges) ---
export function mergeState(local: SyncState, cloud: SyncState): SyncState {
  return {
    // SECURITY: Credits ALWAYS come from server (source of truth).
    // This prevents localStorage manipulation attacks.
    credits: cloud.credits,
    // XP/Level: take higher (non-monetary, safe)
    xp: Math.max(local.xp, cloud.xp),
    level: Math.max(local.level, cloud.level),
    streakCurrent: Math.max(local.streakCurrent, cloud.streakCurrent),
    streakBest: Math.max(local.streakBest, cloud.streakBest),
    childName: cloud.childName || local.childName,
    avatarUrl: local.avatarUrl || cloud.avatarUrl,
    // Stats: take higher (non-monetary progression, safe to merge)
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
    // Badges: union (once unlocked, stays unlocked)
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
    // Update profile
    const { error: profileError } = await supabase
      .from('profiles')
      .update({
        credits: state.credits,
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
