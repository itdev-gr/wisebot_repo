// @vitest-environment jsdom

/**
 * visitPlace records whether the family was standing there — and only the first time.
 *
 * The flag moves nothing: no XP, no seal. What it has to get right is permanence. A place
 * read at home and walked to later keeps its first stamp, so a later on-site visit cannot
 * rewrite a sofa stamp into a pavement one, and the North Star cannot be inflated by
 * reopening places.
 */

import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { City, Place } from '../../data/world/types';

const earnXp = vi.fn();
vi.mock('../../context/EconomyContext', () => ({ useEconomy: () => ({ earnXp }) }));
// The cloud push is fire-and-forget and irrelevant here; keep the test offline.
vi.mock('../../services/worldStampsSync', () => ({ pushWorldStamp: vi.fn(() => Promise.resolve()) }));

const { useWorldProgress } = await import('./useWorldProgress');

const city = { id: 'rome', countryId: 'italy' } as unknown as City;
const place = (id: string) => ({ id, cityId: 'rome' }) as unknown as Place;
// Two places so the first stamp does not also seal the city and muddy the XP check.
const IDS = ['rome-a', 'rome-b'];

afterEach(() => {
  localStorage.clear();
  earnXp.mockClear();
});

describe('visitPlace and onSite', () => {
  it('records true when the question was unlocked on the spot', () => {
    const { result } = renderHook(() => useWorldProgress());
    act(() => {
      result.current.visitPlace(place('rome-a'), true, city, IDS, ['rome'], true);
    });
    expect(result.current.progress.places['rome-a'].onSite).toBe(true);
  });

  it('records false, and a later on-site visit cannot rewrite it', () => {
    const { result } = renderHook(() => useWorldProgress());
    act(() => {
      result.current.visitPlace(place('rome-a'), true, city, IDS, ['rome'], false);
    });
    let second: unknown = 'not called';
    act(() => {
      second = result.current.visitPlace(place('rome-a'), true, city, IDS, ['rome'], true);
    });
    expect(second).toBeNull();
    expect(result.current.progress.places['rome-a'].onSite).toBe(false);
  });

  it('pays exactly the same XP either way', () => {
    const home = renderHook(() => useWorldProgress());
    act(() => {
      home.result.current.visitPlace(place('rome-a'), true, city, IDS, ['rome'], false);
    });
    const paidAtHome = earnXp.mock.calls.map((c) => c[0]);

    localStorage.clear();
    earnXp.mockClear();

    const street = renderHook(() => useWorldProgress());
    act(() => {
      street.result.current.visitPlace(place('rome-a'), true, city, IDS, ['rome'], true);
    });
    expect(earnXp.mock.calls.map((c) => c[0])).toEqual(paidAtHome);
  });

  it('writes the flag through to storage', () => {
    const { result } = renderHook(() => useWorldProgress());
    act(() => {
      result.current.visitPlace(place('rome-a'), false, city, IDS, ['rome'], true);
    });
    const stored = JSON.parse(localStorage.getItem('wb_world_progress') ?? '{}');
    expect(stored.places['rome-a']).toMatchObject({ correct: false, onSite: true });
  });
});
