/**
 * The passport share card is the thing a parent forwards to other parents, so two
 * things are pinned: that every sentence exists in every language and reads right in
 * the singular and the plural, and that nothing personal can reach the card — no dates,
 * no names, no places — because the model's input has no room for them and the output
 * is only what we wrote.
 */
import { describe, expect, it } from 'vitest';
import { MAX_FLAGS, passportCardModel } from './worldShareCard';

const LANGS = ['el', 'en', 'de', 'fr', 'es', 'it'] as const;

describe('passportCardModel — the sentences', () => {
  it('has a title, a headline, three labels and a share text in every language, all different', () => {
    const seen = new Set<string>();
    for (const lang of LANGS) {
      const m = passportCardModel({ lang, flags: ['🇬🇷'], countries: 1, cities: 1, places: 3 });
      expect(m.title.length).toBeGreaterThan(3);
      expect(m.headline.length).toBeGreaterThan(5);
      expect(m.stats).toHaveLength(3);
      expect(m.shareText).toContain(m.headline);
      seen.add(m.title);
      seen.add(m.headline);
    }
    expect(seen.size).toBe(LANGS.length * 2);
  });

  it('counts in the singular and the plural in Greek', () => {
    const one = passportCardModel({ lang: 'el', flags: ['🇬🇷'], countries: 1, cities: 0, places: 1 });
    expect(one.headline).toBe('1 σφραγίδα σε 1 χώρα!');
    const many = passportCardModel({ lang: 'el', flags: ['🇬🇷', '🇮🇹'], countries: 2, cities: 1, places: 5 });
    expect(many.headline).toBe('5 σφραγίδες σε 2 χώρες!');
  });

  it('says something proud when there is nothing yet, and something honest with entry stamps only', () => {
    const nothing = passportCardModel({ lang: 'en', flags: [], countries: 0, cities: 0, places: 0 });
    expect(nothing.headline).toBe('My first stamp is waiting!');
    expect(nothing.flags).toEqual([]);
    const entered = passportCardModel({ lang: 'en', flags: ['🇫🇷'], countries: 1, cities: 0, places: 0 });
    expect(entered.headline).toBe('1 country in my passport!');
  });

  it('keeps each language’s own plural rules', () => {
    expect(passportCardModel({ lang: 'fr', flags: [], countries: 2, cities: 0, places: 1 }).headline).toBe('1 tampon dans 2 pays !');
    expect(passportCardModel({ lang: 'de', flags: [], countries: 2, cities: 0, places: 3 }).headline).toBe('3 Stempel in 2 Ländern!');
    expect(passportCardModel({ lang: 'es', flags: [], countries: 1, cities: 0, places: 2 }).headline).toBe('¡2 sellos en 1 país!');
    expect(passportCardModel({ lang: 'it', flags: [], countries: 3, cities: 0, places: 1 }).headline).toBe('1 timbro in 3 Paesi!');
  });
});

describe('passportCardModel — what can and cannot reach the card', () => {
  it('links to the parent’s invite when there is a code, and to World otherwise', () => {
    const guest = passportCardModel({ lang: 'el', flags: [], countries: 0, cities: 0, places: 0 });
    expect(guest.link).toBe('https://wisebot.gr/world');
    const parent = passportCardModel({ lang: 'el', flags: [], countries: 0, cities: 0, places: 0, referralCode: 'AB12cd' });
    expect(parent.link).toBe('https://wisebot.gr/?ref=AB12cd');
    expect(parent.shareText).toContain('?ref=AB12cd');
  });

  it('drops a code that does not look like ours, so nothing typed can become a link', () => {
    const odd = passportCardModel({ lang: 'en', flags: [], countries: 0, cities: 0, places: 0, referralCode: 'x y<script>' });
    expect(odd.link).toBe('https://wisebot.gr/world');
  });

  it('caps the flags and ignores junk in the list', () => {
    const flags = Array.from({ length: 30 }, () => '🇬🇷').concat(['', '   ']);
    const m = passportCardModel({ lang: 'en', flags, countries: 30, cities: 0, places: 0 });
    expect(m.flags).toHaveLength(MAX_FLAGS);
  });

  it('never prints a negative or fractional total', () => {
    const m = passportCardModel({ lang: 'en', flags: [], countries: -2, cities: 1.7, places: Number.NaN });
    expect(m.stats.map((s) => s.value)).toEqual([0, 1, 0]);
  });

  it('carries no date, no name and no place: the output is only counts, flags and our own words', () => {
    const m = passportCardModel({ lang: 'el', flags: ['🇬🇷'], countries: 1, cities: 1, places: 2, referralCode: 'AB12' });
    const everything = JSON.stringify(m);
    expect(everything).not.toMatch(/\d{4}-\d{2}-\d{2}/);
    expect(everything).not.toMatch(/athens|αθήνα|acropolis/i);
    expect(Object.keys(m).sort()).toEqual(
      ['flags', 'headline', 'kicker', 'lang', 'link', 'shareText', 'shareTitle', 'stats', 'title'].sort(),
    );
  });
});
