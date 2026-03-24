/**
 * API ABSTRACTION LAYER
 * ====================
 *
 * TODO [BACKEND]: This file provides the abstraction layer between
 * the frontend components and the backend API. Currently all data
 * is stored in localStorage. When the backend is ready, replace
 * the localStorage calls with actual API calls.
 *
 * ARCHITECTURE:
 * - Components call these functions instead of localStorage directly
 * - When backend is ready, only THIS file needs to change
 * - All other components remain untouched
 *
 * ENDPOINTS TO IMPLEMENT:
 *
 * AUTH:
 *   POST   /api/auth/register     - Create account (with parental consent)
 *   POST   /api/auth/login         - Login
 *   POST   /api/auth/parent-verify - Verify parent email for COPPA
 *   DELETE /api/auth/account       - Delete account (COPPA requirement)
 *
 * CREDITS & ECONOMY:
 *   GET    /api/credits            - Get user credit balance
 *   POST   /api/credits/spend      - Spend credits (server validates)
 *   POST   /api/credits/earn       - Earn credits (server validates action)
 *   GET    /api/badges             - Get unlocked badges
 *   GET    /api/stats              - Get user stats
 *   POST   /api/daily-mission      - Complete daily mission
 *   POST   /api/daily-bonus        - Claim daily bonus
 *
 * HEROES:
 *   GET    /api/heroes             - Get user's heroes
 *   POST   /api/heroes             - Save new hero
 *   PUT    /api/heroes/:id         - Update hero
 *   DELETE /api/heroes/:id         - Delete hero
 *
 * (Marketplace & Leaderboard — planned for future release)
 *
 * AI GENERATION (proxy through backend to protect API keys):
 *   POST   /api/ai/image           - Generate hero image
 *   POST   /api/ai/video           - Generate video
 *   POST   /api/ai/music           - Generate song
 *   POST   /api/ai/3d              - Generate 3D model
 *   POST   /api/ai/chat            - Chat with WiseBot
 *   POST   /api/ai/quiz            - Generate quiz questions
 *   POST   /api/ai/story           - Generate story
 *
 * ADMIN:
 *   GET    /api/admin/dashboard    - Admin stats (requires admin role)
 *   GET    /api/admin/users        - User management
 *   POST   /api/admin/broadcast    - Send announcement
 *
 * PURCHASES:
 *   POST   /api/purchase/credits   - Buy credit pack (Stripe integration)
 *   POST   /api/purchase/3d-print  - Order 3D printed hero
 *   GET    /api/purchase/history   - Purchase history
 */

// ─── STORAGE KEYS ────────────────────────────────────────────────
// Centralized localStorage key definitions
export const STORAGE_KEYS = {
  // Core progression
  XP: 'wb_xp',
  LEVEL: 'wb_level',
  COMPLETED_IDS: 'wb_completed_ids',

  // Inventory
  HEROES: 'wb_heroes',
  BUSINESSES: 'wb_businesses',

  // Economy
  CREDITS: 'wb_credits',
  STATS: 'wb_stats',
  BADGES: 'wb_badges',

  // Daily systems
  DAILY_MISSION: 'wb_daily_mission',
  DAILY_STREAK: 'wb_daily_streak',

  // User preferences
  USER_NAME: 'wb_user_name',
  USER_AVATAR: 'wb_user_avatar',
  ONBOARDING_DONE: 'wb_onboarding_done',
  QUEST_STAGE: 'wb_quest_stage',

  // Admin
  ADMIN_UNLOCKED: 'wb_admin_unlocked',

  // Game scores
  HERO_FUSION_BEST: 'hero_fusion_best',
  BALLRUSH_BEST: 'wisebot_ballrush_best',
  MUSIC_LIBRARY: 'wisebot_music_library',
} as const;

// ─── API BASE URL ────────────────────────────────────────────────
// TODO [BACKEND]: Set this to your production API URL
// @ts-ignore - Vite env variable, resolved at build time
const API_BASE: string = (import.meta as any).env?.VITE_API_URL || '';

// ─── HELPER ──────────────────────────────────────────────────────
// TODO [BACKEND]: Uncomment this when backend is ready
// async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
//   const token = localStorage.getItem('wb_auth_token');
//   const res = await fetch(`${API_BASE}${endpoint}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
//     },
//     ...options,
//   });
//   if (!res.ok) throw new Error(`API Error: ${res.status}`);
//   return res.json();
// }

// ─── CREDITS API ─────────────────────────────────────────────────
// TODO [BACKEND]: Replace localStorage reads with API calls
export const creditsAPI = {
  getBalance: (): number => {
    const saved = localStorage.getItem(STORAGE_KEYS.CREDITS);
    return saved ? parseInt(saved) : 10;
  },

  // TODO [BACKEND]: Server must validate that the action actually happened
  // before granting credits. Never trust the frontend for credit changes.
  spend: (amount: number): boolean => {
    const current = creditsAPI.getBalance();
    if (current >= amount) {
      localStorage.setItem(STORAGE_KEYS.CREDITS, (current - amount).toString());
      return true;
    }
    return false;
  },

  earn: (amount: number): void => {
    const current = creditsAPI.getBalance();
    localStorage.setItem(STORAGE_KEYS.CREDITS, (current + amount).toString());
  },
};

// ─── HEROES API ──────────────────────────────────────────────────
export const heroesAPI = {
  getAll: (): any[] => {
    const saved = localStorage.getItem(STORAGE_KEYS.HEROES);
    return saved ? JSON.parse(saved) : [];
  },

  save: (hero: any): void => {
    const heroes = heroesAPI.getAll();
    heroes.push(hero);
    localStorage.setItem(STORAGE_KEYS.HEROES, JSON.stringify(heroes));
  },

  update: (updatedHero: any): void => {
    const heroes = heroesAPI.getAll();
    const updated = heroes.map((h: any) => h.id === updatedHero.id ? updatedHero : h);
    localStorage.setItem(STORAGE_KEYS.HEROES, JSON.stringify(updated));
  },
};

// ─── NETWORK STATUS ──────────────────────────────────────────────
export const isOnline = (): boolean => navigator.onLine;
