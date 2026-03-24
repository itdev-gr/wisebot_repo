/**
 * CREDITS ROUTES
 * ==============
 * Server-side credit management using Supabase atomic functions.
 * All routes require authentication via requireAuth middleware.
 *
 * The Supabase schema provides:
 * - spend_credits(p_user_id, p_amount, p_action) → boolean
 * - earn_credits(p_user_id, p_amount, p_action, p_action_id) → integer (new balance)
 */

import { Router } from 'express';
import { supabaseAdmin } from '../lib/supabase.js';

export const creditsRouter = Router();

// ─── Valid action costs (server-side validation) ──────────────
const ACTION_COSTS: Record<string, number> = {
  CREATE_IMAGE: 6,
  CREATE_VIDEO: 50,
  CREATE_SONG: 60,
  CREATE_3D: 60,
  CREATE_BUSINESS: 4,
};

// ─── Valid earn actions and their rewards ──────────────────────
const EARN_REWARDS: Record<string, number> = {
  PASS_QUIZ: 2,
  PASS_QUIZ_SCIENTIST: 3,   // With scientist badge
  READ_BOOK: 2,
  READ_ACADEMY: 1,
  CREATE_BUSINESS: 3,       // Business completion reward
  DAILY_MISSION: 3,
  DAILY_MISSION_EXPLORER: 5, // With explorer badge
  DAILY_BONUS: 3,
  BUILDER_BONUS: 1,         // Builder badge bonus on image create
  HERO_SALE: 20,            // Selling a hero on marketplace
  STREAK_BONUS_3: 1,        // 3-day streak
  STREAK_BONUS_7: 3,        // 7-day streak
  LEVEL_UP: 5,              // Level up reward
  PURCHASE: 0,              // Purchases — amount comes from Stripe metadata
};

const MAX_EARN_AMOUNT = 100; // Safety cap

// ─── Get user credit balance ──────────────────────────────────
creditsRouter.get('/', async (req, res) => {
  try {
    const userId = req.user!.id;

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('credits')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('[Credits] Balance fetch error:', error.message);
      return res.status(500).json({ error: 'Failed to get credits' });
    }

    res.json({ credits: data.credits });
  } catch (err: any) {
    console.error('[Credits] Error:', err.message);
    res.status(500).json({ error: 'Failed to get credits' });
  }
});

// ─── Spend credits (server validates!) ────────────────────────
creditsRouter.post('/spend', async (req, res) => {
  try {
    const userId = req.user!.id;
    const { amount, action } = req.body;

    // Validate inputs
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    if (!action || typeof action !== 'string') {
      return res.status(400).json({ error: 'Action required' });
    }

    // Validate that the cost matches the action (prevent frontend manipulation)
    const expectedCost = ACTION_COSTS[action];
    if (expectedCost !== undefined && amount !== expectedCost) {
      console.warn(`[Credits] Cost mismatch for ${action}: sent ${amount}, expected ${expectedCost} (user: ${userId})`);
      return res.status(400).json({ error: 'Cost mismatch' });
    }

    // Atomic spend via Supabase RPC
    const { data: success, error } = await supabaseAdmin
      .rpc('spend_credits', {
        p_user_id: userId,
        p_amount: amount,
        p_action: action,
      });

    if (error) {
      console.error('[Credits] Spend RPC error:', error.message);
      return res.status(500).json({ error: 'Failed to spend credits' });
    }

    if (!success) {
      return res.status(402).json({ error: 'Insufficient credits' });
    }

    // Fetch new balance
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('credits')
      .eq('id', userId)
      .single();

    res.json({
      success: true,
      remaining: profile?.credits ?? 0,
    });
  } catch (err: any) {
    console.error('[Credits] Spend error:', err.message);
    res.status(500).json({ error: 'Failed to spend credits' });
  }
});

// ─── Earn credits (server validates the action!) ──────────────
creditsRouter.post('/earn', async (req, res) => {
  try {
    const userId = req.user!.id;
    const { amount, action, actionId } = req.body;

    // Validate inputs
    if (!amount || typeof amount !== 'number' || amount <= 0 || amount > MAX_EARN_AMOUNT) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    if (!action || typeof action !== 'string') {
      return res.status(400).json({ error: 'Action required' });
    }

    // Validate that the earn amount is within expected bounds
    const expectedReward = EARN_REWARDS[action];
    if (expectedReward !== undefined && expectedReward > 0 && amount !== expectedReward) {
      console.warn(`[Credits] Earn mismatch for ${action}: sent ${amount}, expected ${expectedReward} (user: ${userId})`);
      return res.status(400).json({ error: 'Reward mismatch' });
    }

    // Atomic earn via Supabase RPC
    const { data: newBalance, error } = await supabaseAdmin
      .rpc('earn_credits', {
        p_user_id: userId,
        p_amount: amount,
        p_action: action,
        p_action_id: actionId || null,
      });

    if (error) {
      console.error('[Credits] Earn RPC error:', error.message);
      return res.status(500).json({ error: 'Failed to earn credits' });
    }

    res.json({
      success: true,
      newBalance: newBalance ?? 0,
    });
  } catch (err: any) {
    console.error('[Credits] Earn error:', err.message);
    res.status(500).json({ error: 'Failed to earn credits' });
  }
});

// ─── Get user stats + badges ──────────────────────────────────
creditsRouter.get('/stats', async (req, res) => {
  try {
    const userId = req.user!.id;

    // Fetch profile, stats, and badges in parallel
    const [profileResult, statsResult, badgesResult] = await Promise.all([
      supabaseAdmin
        .from('profiles')
        .select('credits, xp, level, streak_current, streak_best, last_daily_bonus, last_daily_mission')
        .eq('id', userId)
        .single(),
      supabaseAdmin
        .from('stats')
        .select('*')
        .eq('user_id', userId)
        .single(),
      supabaseAdmin
        .from('badges')
        .select('badge_type, unlocked_at')
        .eq('user_id', userId),
    ]);

    if (profileResult.error) {
      return res.status(500).json({ error: 'Failed to fetch profile' });
    }

    const profile = profileResult.data;
    const stats = statsResult.data;
    const badges = badgesResult.data || [];

    // Convert badge rows to object
    const badgeMap: Record<string, boolean> = {
      thinker: false, creator: false, filmmaker: false,
      builder: false, market: false, musician: false,
      scientist: false, explorer: false,
    };
    for (const row of badges) {
      if (row.badge_type in badgeMap) {
        badgeMap[row.badge_type] = true;
      }
    }

    res.json({
      credits: profile.credits,
      xp: profile.xp,
      level: profile.level,
      streak: {
        current: profile.streak_current,
        best: profile.streak_best,
      },
      lastDailyBonus: profile.last_daily_bonus,
      lastDailyMission: profile.last_daily_mission,
      stats: stats ? {
        imagesCreated: stats.images_created || 0,
        videosCreated: stats.videos_created || 0,
        songsCreated: stats.songs_created || 0,
        quizzesPassed: stats.quizzes_passed || 0,
        booksRead: stats.books_read || 0,
        lessonsRead: stats.stories_read || 0,
        businessesCreated: stats.businesses_created || 0,
        heroesUploaded: stats.heroes_uploaded || 0,
      } : {},
      badges: badgeMap,
    });
  } catch (err: any) {
    console.error('[Credits] Stats error:', err.message);
    res.status(500).json({ error: 'Failed to get stats' });
  }
});

// ─── Update stats (track an action) ──────────────────────────
creditsRouter.post('/track', async (req, res) => {
  try {
    const userId = req.user!.id;
    const { action } = req.body;

    if (!action || typeof action !== 'string') {
      return res.status(400).json({ error: 'Action required' });
    }

    // Map action to stats column
    const STAT_COLUMNS: Record<string, string> = {
      CREATE_IMAGE: 'images_created',
      CREATE_VIDEO: 'videos_created',
      CREATE_SONG: 'songs_created',
      PASS_QUIZ: 'quizzes_passed',
      READ_BOOK: 'books_read',
      READ_ACADEMY: 'stories_read',
      CREATE_BUSINESS: 'businesses_created',
      UPLOAD_HERO: 'heroes_uploaded',
      COMPLETE_HERO: 'heroes_completed',
    };

    const column = STAT_COLUMNS[action];
    if (!column) {
      return res.status(400).json({ error: 'Invalid action type' });
    }

    // Increment the stat counter
    const { error } = await supabaseAdmin.rpc('increment_stat', {
      p_user_id: userId,
      p_column: column,
    });

    // Fallback: if RPC doesn't exist, do a manual increment
    if (error) {
      // Manual increment
      const { data: current } = await supabaseAdmin
        .from('stats')
        .select(column)
        .eq('user_id', userId)
        .single();

      if (current) {
        const newVal = ((current as any)[column] || 0) + 1;
        await supabaseAdmin
          .from('stats')
          .update({ [column]: newVal, updated_at: new Date().toISOString() })
          .eq('user_id', userId);
      }
    }

    // Check for badge unlocks
    const { data: stats } = await supabaseAdmin
      .from('stats')
      .select('*')
      .eq('user_id', userId)
      .single();

    const { data: existingBadges } = await supabaseAdmin
      .from('badges')
      .select('badge_type')
      .eq('user_id', userId);

    const hasBadge = (type: string) => existingBadges?.some(b => b.badge_type === type) || false;
    const newBadges: string[] = [];

    if (stats) {
      // Check badge unlock conditions
      if ((stats.quizzes_passed >= 5 || stats.stories_read >= 5) && !hasBadge('thinker')) newBadges.push('thinker');
      if (stats.images_created >= 5 && !hasBadge('creator')) newBadges.push('creator');
      if (stats.videos_created >= 2 && !hasBadge('filmmaker')) newBadges.push('filmmaker');
      if (stats.heroes_completed >= 1 && !hasBadge('builder')) newBadges.push('builder');
      if (stats.heroes_uploaded >= 1 && !hasBadge('market')) newBadges.push('market');
      if (stats.songs_created >= 3 && !hasBadge('musician')) newBadges.push('musician');
      if (stats.quizzes_passed >= 10 && !hasBadge('scientist')) newBadges.push('scientist');
      if (stats.stories_read >= 10 && !hasBadge('explorer')) newBadges.push('explorer');

      // Insert new badges
      if (newBadges.length > 0) {
        const badgeRows = newBadges.map(type => ({
          user_id: userId,
          badge_type: type,
        }));
        await supabaseAdmin
          .from('badges')
          .upsert(badgeRows, { onConflict: 'user_id,badge_type', ignoreDuplicates: true });
      }
    }

    res.json({
      success: true,
      newBadges,
    });
  } catch (err: any) {
    console.error('[Credits] Track error:', err.message);
    res.status(500).json({ error: 'Failed to track action' });
  }
});
