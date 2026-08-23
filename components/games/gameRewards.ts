/**
 * SHARED GAME REWARDS
 * ===================
 * Every mini-game rewards a finished run through this helper so the rules live
 * in one place:
 *   - max 2 reward grants per game per day (localStorage-tracked)
 *   - the game passes a tier 1-3; it becomes 10/20/30 ⭐ XP
 *
 * Games pay in XP, never in credits (24 Αυγούστου 2026): credits are bought by
 * parents; effort earns levels and badges.
 *
 * Usage inside a game component:
 *   const { earnXp, showNotification } = useEconomy();
 *   ...on game over:
 *   grantGameReward('nebula', score >= 20 ? 3 : score >= 10 ? 2 : score >= 4 ? 1 : 0,
 *     earnXp, showNotification, lang);
 */

const REWARDS_PER_DAY = 2;
const MAX_REWARD = 3;

function storageKey(gameKey: string): string {
  return `wb_gamereward_${gameKey}`;
}

export function gameRewardsLeftToday(gameKey: string): number {
  try {
    const raw = JSON.parse(localStorage.getItem(storageKey(gameKey)) || '{}');
    const today = new Date().toISOString().slice(0, 10);
    return raw.date === today ? Math.max(0, REWARDS_PER_DAY - (raw.count || 0)) : REWARDS_PER_DAY;
  } catch { return REWARDS_PER_DAY; }
}

function consumeGameReward(gameKey: string) {
  const today = new Date().toISOString().slice(0, 10);
  let raw: { date?: string; count?: number } = {};
  try { raw = JSON.parse(localStorage.getItem(storageKey(gameKey)) || '{}'); } catch { /* fresh */ }
  const count = raw.date === today ? (raw.count || 0) + 1 : 1;
  localStorage.setItem(storageKey(gameKey), JSON.stringify({ date: today, count }));
}

const XP_PER_TIER = 10;

/**
 * Grant an XP reward for a finished game run. No-op when the tier is 0 or the
 * daily cap for this game is reached. Returns the XP granted.
 */
export function grantGameReward(
  gameKey: string,
  tier: number,
  earnXp: (amount: number, action?: string) => void,
  showNotification: (emoji: string, title: string, subtitle?: string) => void,
  lang: 'el' | 'en',
): number {
  const level = Math.min(Math.max(0, Math.floor(tier)), MAX_REWARD);
  if (level <= 0 || gameRewardsLeftToday(gameKey) <= 0) return 0;
  consumeGameReward(gameKey);
  const xp = level * XP_PER_TIER;
  earnXp(xp, 'GAME_REWARD');
  showNotification('🏆', lang === 'el' ? 'ΝΙΚΗ!' : 'VICTORY!', `+${xp} ⭐ XP`);
  return xp;
}
