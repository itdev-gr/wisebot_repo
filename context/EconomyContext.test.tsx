import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { EconomyProvider, useEconomy, type Badges } from './EconomyContext';

// Base costs as documented in EconomyContext.tsx — if a test fails here,
// either the price changed on purpose (update constants.tsx copy too, see
// wisebot-credits skill) or a discount broke.
const BASE = { image: 6, video: 80, song: 60, threeD: 60, business: 4 };

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <EconomyProvider>{children}</EconomyProvider>
);

const seedCredits = (n: number) => localStorage.setItem('wb_credits', String(n));

const seedBadges = (overrides: Partial<Badges>) =>
  localStorage.setItem(
    'wb_badges',
    JSON.stringify({
      thinker: false, creator: false, filmmaker: false, builder: false,
      market: false, musician: false, scientist: false, explorer: false,
      ...overrides,
    }),
  );

const renderEconomy = () => renderHook(() => useEconomy(), { wrapper });

beforeEach(() => {
  localStorage.clear();
});

describe('spendCredits — balance checks', () => {
  it('refuses to spend more than the balance and leaves it untouched', () => {
    seedCredits(5);
    const { result } = renderEconomy();

    let allowed: boolean | undefined;
    act(() => { allowed = result.current.spendCredits(6); });

    expect(allowed).toBe(false);
    expect(result.current.credits).toBe(5);
    expect(localStorage.getItem('wb_credits')).toBe('5');
  });

  it('allows spending the exact balance, down to zero', () => {
    seedCredits(6);
    const { result } = renderEconomy();

    let allowed: boolean | undefined;
    act(() => { allowed = result.current.spendCredits(6); });

    expect(allowed).toBe(true);
    expect(result.current.credits).toBe(0);
    expect(localStorage.getItem('wb_credits')).toBe('0');
  });

  it('refuses to spend from a zero balance', () => {
    seedCredits(0);
    const { result } = renderEconomy();

    let allowed: boolean | undefined;
    act(() => { allowed = result.current.spendCredits(1); });

    expect(allowed).toBe(false);
    expect(result.current.credits).toBe(0);
  });
});

describe('costs — same for everyone', () => {
  it('charges base prices when no badge is unlocked', () => {
    const { result } = renderEconomy();
    expect(result.current.costs).toEqual(BASE);
  });

  it('badges change nothing about prices (the server charges base; the UI must agree)', () => {
    // Until 24 Αυγούστου 2026 badges discounted the displayed price only, so a
    // badged child was told 58 and charged 60. Prices are now equal to api/_lib/costs.ts.
    seedBadges({ thinker: true, filmmaker: true, musician: true });
    const { result } = renderEconomy();
    expect(result.current.costs).toEqual(BASE);
  });
});

describe('earnXp — effort pays in XP, not credits', () => {
  it('never changes the credit balance and dispatches wb:xp', () => {
    seedCredits(10);
    const { result } = renderEconomy();
    const seen: number[] = [];
    const onXp = (e: Event) => seen.push((e as CustomEvent).detail.amount);
    window.addEventListener('wb:xp', onXp);
    act(() => { result.current.earnXp(30, 'GAME_REWARD'); });
    window.removeEventListener('wb:xp', onXp);

    expect(seen).toEqual([30]);
    expect(result.current.credits).toBe(10);
  });
});

describe('spendCredits — double-spend', () => {
  it('two synchronous calls in the same tick cannot both succeed on one balance', () => {
    // credits=10, cost=6: a stale-state implementation would approve both
    // (10-6 twice) because setState hasn't flushed between the calls. The
    // ref-based guard must refuse the second.
    seedCredits(10);
    const { result } = renderEconomy();

    let first: boolean | undefined;
    let second: boolean | undefined;
    act(() => {
      first = result.current.spendCredits(6);
      second = result.current.spendCredits(6);
    });

    expect(first).toBe(true);
    expect(second).toBe(false);
    expect(result.current.credits).toBe(4);
  });

  it('two calls both succeed when the balance genuinely covers both', () => {
    seedCredits(12);
    const { result } = renderEconomy();

    let first: boolean | undefined;
    let second: boolean | undefined;
    act(() => {
      first = result.current.spendCredits(6);
      second = result.current.spendCredits(6);
    });

    expect(first).toBe(true);
    expect(second).toBe(true);
    expect(result.current.credits).toBe(0);
  });

  it('rapid calls across separate renders still deduct exactly once each', () => {
    seedCredits(10);
    const { result } = renderEconomy();

    let first: boolean | undefined;
    let second: boolean | undefined;
    act(() => { first = result.current.spendCredits(6); });
    act(() => { second = result.current.spendCredits(6); });

    expect(first).toBe(true);
    expect(second).toBe(false);
    expect(result.current.credits).toBe(4);
  });
});
