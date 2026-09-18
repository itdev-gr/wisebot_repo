/**
 * The mechanical guard for BUSINESS-PLAN §28: nothing but five counters, and nothing on
 * those counters but a city or country id. If a call site ever passes a coordinate, a
 * place id or an account id, the wire guard drops it and this file is what says so.
 */
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('./analytics', () => ({ track: vi.fn() }));

import { track } from './analytics';
import {
  ALLOWED_PARAMS,
  WORLD_EVENTS,
  cleanWorldParams,
  trackWorldAnotherOne,
  trackWorldMissionCompleted,
  trackWorldSecondCity,
  trackWorldStampEarned,
} from './worldAnalytics';

const sent = () => (track as unknown as ReturnType<typeof vi.fn>).mock.calls;

beforeEach(() => {
  (track as unknown as ReturnType<typeof vi.fn>).mockClear();
});

describe('the five counters', () => {
  it('are exactly five, all under the wb_world_ prefix', () => {
    const names = Object.values(WORLD_EVENTS);
    expect(names).toHaveLength(5);
    expect(new Set(names).size).toBe(5);
    for (const n of names) expect(n).toMatch(/^wb_world_[a-z_]+$/);
  });

  it('count a mission and a green stamp per city, an entry stamp per country', () => {
    trackWorldMissionCompleted('athens');
    trackWorldStampEarned({ cityId: 'athens' });
    trackWorldStampEarned({ countryId: 'greece' });
    expect(sent()).toEqual([
      ['wb_world_mission_completed', { city_id: 'athens' }],
      ['wb_world_stamp_earned', { city_id: 'athens' }],
      ['wb_world_stamp_earned', { country_id: 'greece' }],
    ]);
  });

  it('count «Άλλη μία;» and the second city with no parameters at all', () => {
    trackWorldAnotherOne(true);
    trackWorldAnotherOne(false);
    trackWorldSecondCity();
    expect(sent()).toEqual([
      ['wb_world_another_one_yes', undefined],
      ['wb_world_another_one_no', undefined],
      ['wb_world_second_city', undefined],
    ]);
  });
});

describe('the wire guard', () => {
  it('allows only city_id and country_id', () => {
    expect([...ALLOWED_PARAMS]).toEqual(['city_id', 'country_id']);
  });

  it('drops everything that could become a location history or an identity', () => {
    const smuggled = {
      city_id: 'athens',
      lat: 37.98,
      lng: 23.72,
      latitude: 37.98,
      longitude: 23.72,
      coords: [37.98, 23.72],
      accuracy: 12,
      distance: 40,
      bearing: 90,
      place_id: 'athens-acropolis',
      address: 'Dionysiou Areopagitou',
      user_id: 'u-1',
      profile_id: 'p-1',
      email: 'a@b.gr',
      child_name: 'Νίκος',
      on_site: true,
      trip_id: 'abc',
      timestamp: 1700000000,
    };
    expect(cleanWorldParams(smuggled)).toEqual({ city_id: 'athens' });
  });

  it('drops a value that is not an id, so free text can never ride on an id key', () => {
    expect(cleanWorldParams({ city_id: 'Athens, Greece' })).toEqual({});
    expect(cleanWorldParams({ country_id: '37.98,23.72' })).toEqual({});
    expect(cleanWorldParams({ city_id: '' })).toEqual({});
    expect(cleanWorldParams(undefined)).toEqual({});
  });

  it('never lets a smuggled key reach track(), whatever a call site passes', () => {
    trackWorldStampEarned({ cityId: 'rome', lat: 41.9 } as unknown as { cityId: string });
    expect(sent()).toEqual([['wb_world_stamp_earned', { city_id: 'rome' }]]);
  });
});
