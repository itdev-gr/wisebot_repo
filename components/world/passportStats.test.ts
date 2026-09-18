/**
 * The passport's statistics are arithmetic over the stored object and nothing else.
 *
 * These pin the counters the page shows: an empty passport yields zeros without
 * throwing, the on-site / at-home / unknown split reads `onSite` exactly as the store
 * documents it, "visited" and "sealed" are two different numbers, and the best city and
 * the first stamp come out of the data rather than out of the render order.
 */

import { describe, expect, it } from 'vitest';
import {
  WORLD_COUNTRY_COUNT,
  computePassportStats,
  formatIsoDate,
  isEmptyPassport,
  type StatsCity,
} from './passportStats';
import { EMPTY_WORLD_PROGRESS, type WorldProgress } from './worldProgressStore';

const CITIES: StatsCity[] = [
  { id: 'athens', countryId: 'greece' },
  { id: 'thessaloniki', countryId: 'greece' },
  { id: 'rome', countryId: 'italy' },
  { id: 'venice', countryId: 'italy' },
  { id: 'paris', countryId: 'france' },
];

const COUNTS = { athens: 18, thessaloniki: 17, rome: 18, venice: 16, paris: 13 };

const TODAY = '2026-09-18';

const passport = (over: Partial<WorldProgress>): WorldProgress => ({
  ...EMPTY_WORLD_PROGRESS,
  entries: {},
  places: {},
  exhibits: {},
  riddles: {},
  trailsDone: [],
  citiesDone: [],
  countriesDone: [],
  ...over,
});

describe('an empty passport', () => {
  it('counts to zero everywhere and names nothing', () => {
    const s = computePassportStats(passport({}), CITIES, COUNTS, TODAY);
    expect(s).toEqual({
      countriesEntered: 0,
      countriesSealed: 0,
      citiesVisited: 0,
      citiesSealed: 0,
      placesStamped: 0,
      onSite: 0,
      atHome: 0,
      unknownSite: 0,
      correct: 0,
      exhibitsAnswered: 0,
      riddlesSolved: 0,
      trailsDone: 0,
      missions: 0,
      bestCity: null,
      firstStampAt: null,
      daysSince: null,
      perCountry: [],
    });
    expect(isEmptyPassport(s)).toBe(true);
  });

  it('survives an object with none of its fields, and no cities', () => {
    const s = computePassportStats({} as WorldProgress, [], {}, TODAY);
    expect(s.placesStamped).toBe(0);
    expect(s.perCountry).toEqual([]);
    expect(isEmptyPassport(s)).toBe(true);
  });

  it('is not empty once a single country has been entered', () => {
    const s = computePassportStats(passport({ entries: { greece: '2026-09-01' } }), CITIES, COUNTS, TODAY);
    expect(isEmptyPassport(s)).toBe(false);
    expect(s.countriesEntered).toBe(1);
    expect(s.perCountry).toEqual([{ countryId: 'greece', stamps: 0, cities: 0, entered: true }]);
  });
});

describe('on site, at home, and the stamps from before the flag', () => {
  const p = passport({
    places: {
      'athens-acropolis': { at: '2026-09-10', correct: true, onSite: true },
      'athens-agora': { at: '2026-09-10', correct: false, onSite: true },
      'athens-plaka': { at: '2026-09-11', correct: true, onSite: false },
      'rome-colosseum': { at: '2026-08-30', correct: true }, // written before onSite existed
      'rome-pantheon': { at: '2026-08-30', correct: false },
    },
  });

  it('splits the stamps three ways and never files an unknown one as "at home"', () => {
    const s = computePassportStats(p, CITIES, COUNTS, TODAY);
    expect(s.placesStamped).toBe(5);
    expect(s.onSite).toBe(2);
    expect(s.atHome).toBe(1);
    expect(s.unknownSite).toBe(2);
    expect(s.onSite + s.atHome + s.unknownSite).toBe(s.placesStamped);
  });

  it('counts only the questions right on the first try', () => {
    expect(computePassportStats(p, CITIES, COUNTS, TODAY).correct).toBe(3);
  });
});

describe('visited is not sealed', () => {
  it('counts a city with one stamp as visited, and only citiesDone as sealed', () => {
    const s = computePassportStats(
      passport({
        places: { 'athens-acropolis': { at: '2026-09-10', correct: true } },
        citiesDone: ['rome'],
      }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(s.citiesVisited).toBe(1);
    expect(s.citiesSealed).toBe(1);
  });

  it('keeps a stamp whose city it does not know: still a place, in no city', () => {
    const s = computePassportStats(
      passport({ places: { 'atlantis-palace': { at: '2026-09-10', correct: true } } }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(s.placesStamped).toBe(1);
    expect(s.citiesVisited).toBe(0);
    expect(s.bestCity).toBeNull();
    expect(s.perCountry).toEqual([]);
  });
});

describe('missions', () => {
  it('is places + exhibits + riddles + trails, from the passport only', () => {
    const s = computePassportStats(
      passport({
        places: {
          'athens-acropolis': { at: '2026-09-10', correct: true },
          'athens-agora': { at: '2026-09-10', correct: true },
        },
        exhibits: { 'athens-museum-a': '2026-09-10', 'athens-museum-b': '2026-09-10', 'athens-museum-c': '2026-09-10' },
        riddles: { 'athens-museum-riddle-1': '2026-09-10' },
        trailsDone: ['athens-ancient'],
      }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(s.exhibitsAnswered).toBe(3);
    expect(s.riddlesSolved).toBe(1);
    expect(s.trailsDone).toBe(1);
    expect(s.missions).toBe(2 + 3 + 1 + 1);
  });
});

describe('the best city', () => {
  it('is the one with the most stamps, with its total from the registry', () => {
    const s = computePassportStats(
      passport({
        places: {
          'athens-acropolis': { at: '2026-09-10', correct: true },
          'rome-colosseum': { at: '2026-09-10', correct: true },
          'rome-pantheon': { at: '2026-09-10', correct: true },
        },
      }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(s.bestCity).toEqual({ cityId: 'rome', stamps: 2, total: 18 });
  });

  it('breaks a tie by display order, not by which stamp was stored first', () => {
    const s = computePassportStats(
      passport({
        places: {
          'rome-colosseum': { at: '2026-09-10', correct: true },
          'athens-acropolis': { at: '2026-09-10', correct: true },
        },
      }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(s.bestCity?.cityId).toBe('athens');
  });

  it('reports a total of 0 when the registry does not know the city', () => {
    const s = computePassportStats(
      passport({ places: { 'paris-louvre': { at: '2026-09-10', correct: true } } }),
      CITIES,
      { athens: 18 },
      TODAY,
    );
    expect(s.bestCity).toEqual({ cityId: 'paris', stamps: 1, total: 0 });
  });
});

describe('the first stamp', () => {
  it('is the earliest date across entries, places, exhibits and riddles', () => {
    const s = computePassportStats(
      passport({
        entries: { greece: '2026-09-05', italy: '2026-08-20' },
        places: { 'athens-acropolis': { at: '2026-09-06', correct: true } },
        exhibits: { 'athens-museum-a': '2026-09-07' },
        riddles: { 'athens-museum-riddle-1': '2026-09-08' },
      }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(s.firstStampAt).toBe('2026-08-20');
    expect(s.daysSince).toBe(29);
  });

  it('is today when the first stamp went in today, and never negative', () => {
    const todayStats = computePassportStats(
      passport({ entries: { greece: TODAY } }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(todayStats.daysSince).toBe(0);
    const future = computePassportStats(
      passport({ entries: { greece: '2026-12-25' } }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(future.daysSince).toBe(0);
  });

  it('ignores a date it cannot read and gives up on days when today is unreadable', () => {
    const s = computePassportStats(
      passport({ entries: { greece: 'yesterday-ish', italy: '2026-09-01' } }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(s.firstStampAt).toBe('2026-09-01');
    const noToday = computePassportStats(passport({ entries: { italy: '2026-09-01' } }), CITIES, COUNTS, '');
    expect(noToday.firstStampAt).toBe('2026-09-01');
    expect(noToday.daysSince).toBeNull();
  });
});

describe('stamps per country', () => {
  it('lists most stamps first, keeps display order on a tie, and includes an entered country with none', () => {
    const s = computePassportStats(
      passport({
        entries: { greece: '2026-09-01', france: '2026-09-02' },
        places: {
          'athens-acropolis': { at: '2026-09-10', correct: true },
          'thessaloniki-tower': { at: '2026-09-11', correct: true },
          'rome-colosseum': { at: '2026-09-10', correct: true },
          'rome-pantheon': { at: '2026-09-10', correct: true },
          'venice-rialto': { at: '2026-09-10', correct: true },
        },
      }),
      CITIES,
      COUNTS,
      TODAY,
    );
    expect(s.perCountry).toEqual([
      { countryId: 'italy', stamps: 3, cities: 2, entered: false },
      { countryId: 'greece', stamps: 2, cities: 2, entered: true },
      { countryId: 'france', stamps: 0, cities: 0, entered: true },
    ]);
  });

  it('still lists a country entered whose cities are not loaded', () => {
    const s = computePassportStats(passport({ entries: { japan: '2026-09-01' } }), CITIES, COUNTS, TODAY);
    expect(s.perCountry).toEqual([{ countryId: 'japan', stamps: 0, cities: 0, entered: true }]);
  });
});

describe('the §12 denominator and the date the child reads', () => {
  it('keeps the 195 of §12 in one place', () => {
    expect(WORLD_COUNTRY_COUNT).toBe(195);
  });

  it('prints an ISO day in the child’s language, and an unreadable one as given', () => {
    expect(formatIsoDate('2026-09-01', 'en')).toBe('1 September 2026');
    expect(formatIsoDate('2026-09-01', 'el')).toMatch(/Σεπτεμβρίου 2026/);
    expect(formatIsoDate('2026-09-01', 'de')).toBe('1. September 2026');
    expect(formatIsoDate('not-a-date', 'fr')).toBe('not-a-date');
  });
});
