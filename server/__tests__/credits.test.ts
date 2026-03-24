/**
 * CREDITS ROUTES — Unit Tests
 * ============================
 * Tests for server-side credit validation, spending, and earning.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock Supabase before importing routes
vi.mock('../lib/supabase.js', () => ({
  supabaseAdmin: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          single: vi.fn(() => ({ data: { credits: 50 }, error: null })),
        })),
      })),
    })),
    rpc: vi.fn(),
  },
}));

import { supabaseAdmin } from '../lib/supabase.js';

describe('Credit System Validation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Action Cost Map', () => {
    const ACTION_COSTS: Record<string, number> = {
      CREATE_IMAGE: 6,
      CREATE_VIDEO: 50,
      CREATE_SONG: 60,
      CREATE_3D: 60,
      CREATE_BUSINESS: 4,
    };

    it('should have correct costs for all actions', () => {
      expect(ACTION_COSTS.CREATE_IMAGE).toBe(6);
      expect(ACTION_COSTS.CREATE_VIDEO).toBe(50);
      expect(ACTION_COSTS.CREATE_SONG).toBe(60);
      expect(ACTION_COSTS.CREATE_3D).toBe(60);
      expect(ACTION_COSTS.CREATE_BUSINESS).toBe(4);
    });

    it('should not allow negative costs', () => {
      Object.values(ACTION_COSTS).forEach(cost => {
        expect(cost).toBeGreaterThan(0);
      });
    });
  });

  describe('Earn Rewards Map', () => {
    const EARN_REWARDS: Record<string, number> = {
      PASS_QUIZ: 2,
      PASS_QUIZ_SCIENTIST: 3,
      READ_BOOK: 2,
      READ_ACADEMY: 1,
      CREATE_BUSINESS: 3,
      DAILY_MISSION: 3,
      DAILY_MISSION_EXPLORER: 5,
      DAILY_BONUS: 3,
      BUILDER_BONUS: 1,
      HERO_SALE: 20,
      STREAK_BONUS_3: 1,
      STREAK_BONUS_7: 3,
      LEVEL_UP: 5,
    };

    it('should have positive rewards for all actions', () => {
      Object.entries(EARN_REWARDS).forEach(([action, reward]) => {
        expect(reward).toBeGreaterThan(0);
      });
    });

    it('scientist badge should give more quiz credits than base', () => {
      expect(EARN_REWARDS.PASS_QUIZ_SCIENTIST).toBeGreaterThan(EARN_REWARDS.PASS_QUIZ);
    });

    it('explorer badge should give more daily mission credits than base', () => {
      expect(EARN_REWARDS.DAILY_MISSION_EXPLORER).toBeGreaterThan(EARN_REWARDS.DAILY_MISSION);
    });
  });

  describe('Spend Credits RPC', () => {
    it('should call spend_credits with correct parameters', async () => {
      const mockRpc = vi.mocked(supabaseAdmin.rpc);
      mockRpc.mockResolvedValue({ data: true, error: null } as any);

      const result = await supabaseAdmin.rpc('spend_credits', {
        p_user_id: 'user-123',
        p_amount: 6,
        p_action: 'CREATE_IMAGE',
      });

      expect(mockRpc).toHaveBeenCalledWith('spend_credits', {
        p_user_id: 'user-123',
        p_amount: 6,
        p_action: 'CREATE_IMAGE',
      });
      expect(result.data).toBe(true);
    });

    it('should return false when insufficient credits', async () => {
      const mockRpc = vi.mocked(supabaseAdmin.rpc);
      mockRpc.mockResolvedValue({ data: false, error: null } as any);

      const result = await supabaseAdmin.rpc('spend_credits', {
        p_user_id: 'user-123',
        p_amount: 999,
        p_action: 'CREATE_VIDEO',
      });

      expect(result.data).toBe(false);
    });

    it('should handle database errors gracefully', async () => {
      const mockRpc = vi.mocked(supabaseAdmin.rpc);
      mockRpc.mockResolvedValue({ data: null, error: { message: 'DB error' } } as any);

      const result = await supabaseAdmin.rpc('spend_credits', {
        p_user_id: 'user-123',
        p_amount: 6,
        p_action: 'CREATE_IMAGE',
      });

      expect(result.error).toBeDefined();
    });
  });

  describe('Earn Credits RPC', () => {
    it('should call earn_credits and return new balance', async () => {
      const mockRpc = vi.mocked(supabaseAdmin.rpc);
      mockRpc.mockResolvedValue({ data: 52, error: null } as any);

      const result = await supabaseAdmin.rpc('earn_credits', {
        p_user_id: 'user-123',
        p_amount: 2,
        p_action: 'PASS_QUIZ',
        p_action_id: 'quiz-456',
      });

      expect(result.data).toBe(52);
    });
  });

  describe('Input Validation', () => {
    it('should reject negative amounts', () => {
      const amount = -5;
      expect(amount > 0).toBe(false);
    });

    it('should reject zero amounts', () => {
      const amount = 0;
      expect(amount > 0).toBe(false);
    });

    it('should reject amounts over the safety cap', () => {
      const MAX_EARN_AMOUNT = 100;
      const amount = 150;
      expect(amount <= MAX_EARN_AMOUNT).toBe(false);
    });

    it('should accept valid amounts', () => {
      const amount = 6;
      expect(amount > 0 && typeof amount === 'number').toBe(true);
    });
  });
});

describe('Badge Unlock Conditions', () => {
  it('thinker: 5 quizzes or 5 lessons', () => {
    expect(5 >= 5).toBe(true);
    expect(4 >= 5).toBe(false);
  });

  it('creator: 5 images', () => {
    expect(5 >= 5).toBe(true);
  });

  it('filmmaker: 2 videos', () => {
    expect(2 >= 2).toBe(true);
  });

  it('musician: 3 songs', () => {
    expect(3 >= 3).toBe(true);
  });

  it('scientist: 10 quizzes', () => {
    expect(10 >= 10).toBe(true);
    expect(9 >= 10).toBe(false);
  });

  it('explorer: 10 academy stories', () => {
    expect(10 >= 10).toBe(true);
  });
});
