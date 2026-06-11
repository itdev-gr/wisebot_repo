/**
 * SHARED GAME REWARDS
 * ===================
 * Every mini-game banks small credit rewards through this helper so the
 * rules live in one place:
 *   - max 2 reward grants per game per day (localStorage-tracked)
 *   - reward size is decided by the game (1-3⚡, validated here)
 *
 * Usage inside a game component:
 *   const { earnCredits, showNotification } = useEconomy();
 *   ...on game over:
 *   grantGameReward('nebula', score >= 20 ? 3 : score >= 10 ? 2 : score >= 4 ? 1 : 0,
 *     earnCredits, showNotification, lang);
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

/**
 * Grant a credit reward for a finished game run. No-op when the amount is 0
 * or the daily cap for this game is reached. Returns the credits granted.
 */
export function grantGameReward(
  gameKey: string,
  amount: number,
  earnCredits: (amount: number, action?: string) => void,
  showNotification: (emoji: string, title: string, subtitle?: string) => void,
  lang: 'el' | 'en',
): number {
  const reward = Math.min(Math.max(0, Math.floor(amount)), MAX_REWARD);
  if (reward <= 0 || gameRewardsLeftToday(gameKey) <= 0) return 0;
  consumeGameReward(gameKey);
  earnCredits(reward, 'GAME_REWARD');
  showNotification('🏆', lang === 'el' ? 'ΝΙΚΗ!' : 'VICTORY!', `+${reward} Credits ⚡`);
  return reward;
}
