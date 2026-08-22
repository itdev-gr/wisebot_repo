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

describe('costs — badge discounts', () => {
  it('charges base prices when no badge is unlocked', () => {
    const { result } = renderEconomy();
    expect(result.current.costs).toEqual(BASE);
  });

  it('applies thinker (-1 image), filmmaker (-2 video), musician (-2 song)', () => {
    seedBadges({ thinker: true, filmmaker: true, musician: true });
    const { result } = renderEconomy();

    expect(result.current.costs.image).toBe(BASE.image - 1);
    expect(result.current.costs.video).toBe(BASE.video - 2);
    expect(result.current.costs.song).toBe(BASE.song - 2);
    // No badge discounts these two
    expect(result.current.costs.threeD).toBe(BASE.threeD);
    expect(result.current.costs.business).toBe(BASE.business);
  });

  it('the discount changes the amount actually charged, not only the display', () => {
    seedBadges({ thinker: true });
    seedCredits(20);
    const { result } = renderEconomy();

    act(() => { result.current.spendCredits(result.current.costs.image); });

    // CTX3 regression: a [] dependency on the costs memo made discounts
    // display-only. Charged must be base - 1, so 20 - 5 = 15, not 14.
    expect(result.current.credits).toBe(20 - (BASE.image - 1));
  });

  it('a discount lets a balance pass that the base price would refuse', () => {
    seedBadges({ musician: true });
    seedCredits(BASE.song - 2); // exactly the discounted price, below base
    const { result } = renderEconomy();

    let allowed: boolean | undefined;
    act(() => { allowed = result.current.spendCredits(result.current.costs.song); });

    expect(allowed).toBe(true);
    expect(result.current.credits).toBe(0);
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
