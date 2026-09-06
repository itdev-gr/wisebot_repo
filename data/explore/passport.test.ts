/**
 * Explorer Passport: stamp dates come from the envelope timestamps Explorer already keeps,
 * the home country opens the booklet, and every Explorer country can be a home country.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { CITY_META } from './registry';
import {
  HOME_COUNTRIES, buildPassport, cityStamp, countryName, passportNumber, passportIssuedAt,
  readHomeCountry, writeHomeCountry, stampTilt, stampInk,
} from './passport';

const athens = CITY_META.find(c => c.id === 'athens')!;

/** Open `n` spots in a city at t = 1000, 2000, … and pass every quiz. */
const play = (cityId: string, n: number, passQuiz = true) => {
  const opened: Record<string, { via: 'gps'; at: number }> = {};
  for (let i = 1; i <= n; i++) {
    opened[`s${i}`] = { via: 'gps', at: i * 1000 };
    if (passQuiz) localStorage.setItem(`wb_quiz_best_explore-${cityId}-s${i}`, JSON.stringify({ score: 3, total: 3, timestamp: i * 1000 }));
  }
  localStorage.setItem(`wb_explore_${cityId}`, JSON.stringify({ opened, onSite: {}, tasted: {} }));
};

beforeEach(() => localStorage.clear());

describe('city stamps', () => {
  it('is dated the moment the N-th counting spot opened, not today', () => {
    play('athens', 10);
    const s = cityStamp(athens);
    expect(s.need).toBe(8);
    expect(s.done).toBe(10);
    expect(s.earnedAt).toBe(8000);
  });

  it('is not earned one spot short, and an opened envelope without a passed quiz does not count', () => {
    play('athens', 7);
    expect(cityStamp(athens).earnedAt).toBeNull();
    localStorage.clear();
    play('athens', 10, false);
    const s = cityStamp(athens);
    expect(s.done).toBe(0);
    expect(s.earnedAt).toBeNull();
  });
});

describe('the booklet', () => {
  it('puts the home country first and the rest alphabetically in the child\'s language', () => {
    const book = buildPassport('en', 'PT');
    expect(book.countries[0].code).toBe('PT');
    expect(book.countries[0].home).toBe(true);
    const rest = book.countries.slice(1).map(c => c.name.en);
    expect(rest).toEqual([...rest].sort((a, b) => a.localeCompare(b, 'en')));
    expect(book.countries).toHaveLength(new Set(CITY_META.map(c => c.countryCode)).size);
  });

  it('gives a home country without Explorer cities its own empty page — never a crash', () => {
    const book = buildPassport('el', 'SE');
    expect(book.countries[0]).toMatchObject({ code: 'SE', home: true, stamps: [], earnedAt: null });
    expect(book.countries[0].name.el).toBe('Σουηδία');
    expect(book.countries).toHaveLength(new Set(CITY_META.map(c => c.countryCode)).size + 1);
  });

  it('counts visited countries, city stamps and country stamps', () => {
    play('lisbon', 10);
    let book = buildPassport('el', 'GR');
    const pt = book.countries.find(c => c.code === 'PT')!;
    expect(pt.stamps.filter(s => s.earnedAt !== null)).toHaveLength(1);
    expect(pt.earnedAt).toBeNull(); // Porto still missing
    expect(book).toMatchObject({ visited: 1, cityStamps: 1, countryStamps: 0 });

    play('porto', 10);
    book = buildPassport('el', 'GR');
    expect(book.countries.find(c => c.code === 'PT')!.earnedAt).toBe(8000);
    expect(book).toMatchObject({ visited: 1, cityStamps: 2, countryStamps: 1 });
  });

  it('works with no home country chosen yet', () => {
    expect(readHomeCountry()).toBeNull();
    const book = buildPassport('el', null);
    expect(book.countries.every(c => !c.home)).toBe(true);
  });
});

describe('identity', () => {
  it('remembers the home country and rejects garbage', () => {
    writeHomeCountry('gr');
    expect(readHomeCountry()).toBe('GR');
    localStorage.setItem('wb_home_country', 'Atlantis');
    expect(readHomeCountry()).toBeNull();
  });

  it('issues one passport number and one issue date, then keeps them', () => {
    const n = passportNumber();
    expect(n).toMatch(/^WB-[A-HJ-NP-Z2-9]{7}$/);
    expect(passportNumber()).toBe(n);
    const issued = passportIssuedAt();
    expect(issued).toBeGreaterThan(0);
    expect(passportIssuedAt()).toBe(issued);
  });

  it('offers every Explorer country as a home, with both names and unique codes', () => {
    const codes = HOME_COUNTRIES.map(c => c.code);
    expect(new Set(codes).size).toBe(codes.length);
    for (const cc of new Set(CITY_META.map(c => c.countryCode))) expect(codes, cc).toContain(cc);
    for (const c of HOME_COUNTRIES) {
      expect(c.code).toMatch(/^[A-Z]{2}$/);
      expect(c.name.el.trim()).toBeTruthy();
      expect(c.name.en.trim()).toBeTruthy();
    }
    expect(countryName('GR', 'el')).toBe('Ελλάδα');
    expect(countryName('XX', 'en')).toBe('XX');
  });
});

describe('ink', () => {
  it('tilts stay small and colours cycle', () => {
    for (let i = 0; i < 40; i++) {
      expect(Math.abs(stampTilt(i))).toBeLessThanOrEqual(9);
      expect(stampInk(i)).toMatch(/^#[0-9a-f]{6}$/);
    }
    expect(stampTilt(3)).toBe(stampTilt(3));
  });
});
