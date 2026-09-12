// @vitest-environment jsdom

/**
 * «Αρκετά για σήμερα» has to mean it.
 *
 * The card is asked after every finished place, so the one thing that must work is the
 * memory: a child who said enough is not asked again four stops later, and is asked again
 * tomorrow. The date is the child's own calendar day, not UTC — a stamp earned at half
 * past midnight in Athens belongs to the day the child thinks it is.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { saidEnoughToday } from './AnotherOne';
import { today } from './worldProgressStore';

const KEY = 'wb_world_enough_for_today';

afterEach(() => {
  localStorage.clear();
  vi.useRealTimers();
});

describe('saidEnoughToday', () => {
  it('is false on a fresh device', () => {
    expect(saidEnoughToday()).toBe(false);
  });

  it('is true for the rest of the day the child said it', () => {
    localStorage.setItem(KEY, today());
    expect(saidEnoughToday()).toBe(true);
  });

  it('is false again the next day', () => {
    localStorage.setItem(KEY, '2026-09-11');
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 8, 12, 9, 0, 0));
    expect(saidEnoughToday()).toBe(false);
  });

  it('uses the local calendar day, so half past midnight in Athens is still today', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 8, 12, 0, 30, 0));
    localStorage.setItem(KEY, today());
    expect(today()).toBe('2026-09-12');
    expect(saidEnoughToday()).toBe(true);
  });

  it('treats junk in the key as "not said"', () => {
    localStorage.setItem(KEY, 'yes');
    expect(saidEnoughToday()).toBe(false);
  });

  it('says "not said" rather than throwing when storage is blocked', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked in a private window');
    });
    expect(() => saidEnoughToday()).not.toThrow();
    expect(saidEnoughToday()).toBe(false);
    spy.mockRestore();
  });
});
