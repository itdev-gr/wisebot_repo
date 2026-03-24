/**
 * CREDITS ROUTES
 * ==============
 * Server-side credit management.
 * TODO [SUPABASE]: Currently placeholder — replace with Supabase queries.
 */

import { Router } from 'express';

export const creditsRouter = Router();

// TODO [SUPABASE]: Replace with real database queries
// For now, these endpoints show the interface that the frontend will use.

// Get user credit balance
creditsRouter.get('/', async (req, res) => {
  try {
    // TODO: Get userId from auth middleware (JWT)
    // const userId = req.user.id;
    // const { data } = await supabase.from('users').select('credits').eq('id', userId).single();
    // res.json({ credits: data.credits });

    res.json({ credits: 10, message: 'Placeholder — connect Supabase' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to get credits' });
  }
});

// Spend credits (server validates!)
creditsRouter.post('/spend', async (req, res) => {
  try {
    const { amount, action } = req.body;
    if (!amount || amount <= 0) return res.status(400).json({ error: 'Invalid amount' });

    // TODO: Validate action type and cost match
    // const validCosts = { image: 5, video: 15, song: 7, threeD: 5, business: 3 };
    // if (validCosts[action] !== amount) return res.status(400).json({ error: 'Cost mismatch' });

    // TODO: Atomic decrement in database
    // const { data, error } = await supabase.rpc('spend_credits', { user_id: userId, amount });
    // if (error || !data.success) return res.status(400).json({ error: 'Insufficient credits' });

    res.json({ success: true, remaining: 5, message: 'Placeholder — connect Supabase' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to spend credits' });
  }
});

// Earn credits (server validates the action happened!)
creditsRouter.post('/earn', async (req, res) => {
  try {
    const { amount, action, actionId } = req.body;
    if (!amount || !action) return res.status(400).json({ error: 'Amount and action required' });

    // TODO: Validate that the action actually happened (prevent cheating)
    // e.g., for PASS_QUIZ, verify the quiz ID was actually completed
    // For DAILY_MISSION, check last claim was >24h ago

    // TODO: Atomic increment in database
    // await supabase.rpc('earn_credits', { user_id: userId, amount, action });

    res.json({ success: true, newBalance: 15, message: 'Placeholder — connect Supabase' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to earn credits' });
  }
});

// Get user stats + badges
creditsRouter.get('/stats', async (req, res) => {
  try {
    // TODO: Fetch from database
    res.json({
      stats: { imagesCreated: 0, videosCreated: 0, quizzesPassed: 0 },
      badges: {},
      streak: { current: 0, best: 0 },
      message: 'Placeholder — connect Supabase',
    });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to get stats' });
  }
});
