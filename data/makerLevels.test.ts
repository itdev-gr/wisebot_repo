/**
 * The Maker ladder is identity — a wrong mapping demotes a child visibly, so the
 * invariants are pinned: thresholds strictly ascend from 0, boundaries land exactly on
 * their tier, and garbage XP degrades to Dreamer instead of crashing.
 */
import { describe, expect, it } from 'vitest';
import { MAKER_LEVELS, makerLevelForXp, makerProgress, makerLevelIndex } from './makerLevels';

describe('MAKER_LEVELS', () => {
  it('has the 7 vision ranks, starting at 0 XP, strictly ascending', () => {
    expect(MAKER_LEVELS.map(l => l.id)).toEqual([
      'dreamer', 'explorer', 'creator', 'maker', 'inventor', 'founder', 'legend',
    ]);
    expect(MAKER_LEVELS[0].minXp).toBe(0);
    for (let i = 1; i < MAKER_LEVELS.length; i++) {
      expect(MAKER_LEVELS[i].minXp).toBeGreaterThan(MAKER_LEVELS[i - 1].minXp);
    }
  });

  it('every tier has both taglines and an emblem', () => {
    for (const l of MAKER_LEVELS) {
      expect(l.tagline.el.length).toBeGreaterThan(0);
      expect(l.tagline.en.length).toBeGreaterThan(0);
      expect(l.emoji.length).toBeGreaterThan(0);
      expect(l.gradient).toContain('from-');
    }
  });
});

describe('makerLevelForXp', () => {
  it('maps boundaries to their exact tier', () => {
    for (const l of MAKER_LEVELS) {
      expect(makerLevelForXp(l.minXp).id).toBe(l.id);
      expect(makerLevelForXp(l.minXp + 1).id).toBe(l.id);
    }
  });

  it('maps one XP below a boundary to the previous tier', () => {
    for (let i = 1; i < MAKER_LEVELS.length; i++) {
      expect(makerLevelForXp(MAKER_LEVELS[i].minXp - 1).id).toBe(MAKER_LEVELS[i - 1].id);
    }
  });

  it('degrades garbage input to Dreamer', () => {
    expect(makerLevelForXp(NaN).id).toBe('dreamer');
    expect(makerLevelForXp(-50).id).toBe('dreamer');
    expect(makerLevelForXp(undefined as unknown as number).id).toBe('dreamer');
  });

  it('caps at Legend for any huge XP', () => {
    expect(makerLevelForXp(10_000_000).id).toBe('legend');
  });
});

describe('makerProgress', () => {
  it('reports progress toward the next tier', () => {
    const p = makerProgress(650); // Explorer (300) → Creator (1000)
    expect(p.current.id).toBe('explorer');
    expect(p.next!.id).toBe('creator');
    expect(p.pct).toBe(50);
    expect(p.xpForNext).toBe(350);
  });

  it('is complete at Legend', () => {
    const p = makerProgress(30_000);
    expect(p.current.id).toBe('legend');
    expect(p.next).toBeNull();
    expect(p.pct).toBe(100);
  });

  it('never exceeds 0–100', () => {
    for (const xp of [0, 1, 299, 300, 999, 24_999, 25_000, 1e9]) {
      const p = makerProgress(xp);
      expect(p.pct).toBeGreaterThanOrEqual(0);
      expect(p.pct).toBeLessThanOrEqual(100);
    }
  });
});

describe('makerLevelIndex', () => {
  it('orders ranks for tier-up detection', () => {
    expect(makerLevelIndex('dreamer')).toBe(0);
    expect(makerLevelIndex('legend')).toBe(6);
    expect(makerLevelIndex('maker')).toBeGreaterThan(makerLevelIndex('creator'));
  });
});
