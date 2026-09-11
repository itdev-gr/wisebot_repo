/**
 * Every Explorer city: shape, both languages, sane coordinates, 3-question quizzes.
 * A riddle that names its own spot or a marker in the wrong city is worse than no city.
 */
import { describe, it, expect } from 'vitest';
import { CITY_META, loadCity, flagEmoji } from './explore/registry';
import type { ExploreCity, ObservationTask } from './explore/types';
import { distanceM, isWithin, formatDistance } from '../utils/geo';

const both = (v: { el: string; en: string } | undefined, where: string) => {
  expect(v?.el?.trim(), `${where}: Greek`).toBeTruthy();
  expect(v?.en?.trim(), `${where}: English`).toBeTruthy();
};
const task = (t: ObservationTask, where: string) => {
  both(t.question, `${where}.question`);
  both(t.explanation, `${where}.explanation`);
  for (const l of ['el', 'en'] as const) {
    expect(t.options[l], `${where}.options.${l}`).toHaveLength(4);
    expect(new Set(t.options[l]).size, `${where}.options.${l} unique`).toBe(4);
  }
  expect(t.correct, `${where}.correct`).toBeGreaterThanOrEqual(0);
  expect(t.correct, `${where}.correct`).toBeLessThan(4);
};

describe('explorer cities', () => {
  it('every city in the picker loads and reports its true spot count', async () => {
    for (const meta of CITY_META) {
      const city = await loadCity(meta.id);
      expect(city, meta.id).not.toBeNull();
      expect(city!.id).toBe(meta.id);
      expect(city!.spots.length, `${meta.id} spotCount`).toBe(meta.spotCount);
      expect(flagEmoji(meta.countryCode)).toHaveLength(4); // two surrogate pairs
    }
  });

  it('unknown ids resolve to null, not a crash', async () => {
    expect(await loadCity('atlantis')).toBeNull();
  });

  for (const meta of CITY_META) {
    it(`${meta.id}: spots are well-formed and inside the city`, async () => {
      const city = (await loadCity(meta.id)) as ExploreCity;
      both(city.name, 'name'); both(city.country, 'country'); both(city.intro, 'intro');
      expect(city.spots.length).toBeGreaterThanOrEqual(8);
      expect(city.spots.length).toBeLessThanOrEqual(10);
      const ids = city.spots.map(s => s.id);
      expect(new Set(ids).size).toBe(ids.length);
      expect([...city.route].sort()).toEqual([...ids].sort());
      for (const s of city.spots) {
        const w = `${meta.id}/${s.id}`;
        expect(s.id).toMatch(/^[a-z0-9-]+$/);
        both(s.name, `${w}.name`); both(s.riddle, `${w}.riddle`); both(s.parentHint, `${w}.parentHint`);
        both(s.story, `${w}.story`); both(s.didYouKnow, `${w}.didYouKnow`);
        // Every spot within 12 km of the city centre — a typo in a coordinate lands in the sea.
        expect(distanceM(city.center, s), `${w} distance from centre`).toBeLessThan(12000);
        expect(s.radiusM, `${w}.radiusM`).toBeGreaterThanOrEqual(30);
        expect(s.radiusM, `${w}.radiusM`).toBeLessThanOrEqual(120);
        task(s.unlockQuestion, `${w}.unlockQuestion`);
        task(s.onSite, `${w}.onSite`);
        expect(s.quiz, `${w}.quiz`).toHaveLength(3);
        for (const q of s.quiz) task({ question: q.q, options: q.options, correct: q.correct, explanation: q.explanation! }, `${w}.quiz`);
        expect(s.riddle.en.toLowerCase(), `${w}: riddle gives the name away`).not.toContain(s.name.en.toLowerCase());
      }
    });

    it(`${meta.id}: WiseBot is «η WiseBot», the wise owl — never masculine in Greek`, async () => {
      const city = (await loadCity(meta.id)) as ExploreCity;
      const texts: string[] = [city.intro.el];
      for (const s of city.spots) {
        texts.push(s.riddle.el, s.parentHint.el, s.story.el, s.didYouKnow.el,
          s.unlockQuestion.question.el, s.unlockQuestion.explanation.el, s.onSite.question.el, s.onSite.explanation.el,
          ...s.quiz.map(q => q.q.el + ' ' + (q.explanation?.el ?? '')));
      }
      const masculine = /(^|[^\p{L}])(ο|Ο|τον|Τον|του|Του|έναν|Έναν)\s+WiseBot\b/u;
      for (const t of texts) expect(t, `${meta.id}: masculine WiseBot in «${t.slice(0, 60)}…»`).not.toMatch(masculine);
    });
  }
});

describe('geo helpers', () => {
  it('measures Syntagma → Monastiraki at about 900 m', () => {
    const d = distanceM({ lat: 37.9755, lng: 23.7348 }, { lat: 37.976, lng: 23.7256 });
    expect(d).toBeGreaterThan(750);
    expect(d).toBeLessThan(950);
  });
  it('forgives up to 40 m of GPS accuracy on top of the spot radius', () => {
    const spot = { lat: 37.9755, lng: 23.7348 };
    const near = { lat: 37.9760, lng: 23.7348 }; // ~56 m north
    expect(isWithin(near, 5, spot, 40)).toBe(false);
    expect(isWithin(near, 30, spot, 40)).toBe(true);
    const far = { lat: 37.9765, lng: 23.7348 }; // ~111 m north
    expect(isWithin(far, 500, spot, 40)).toBe(false); // forgiveness is capped at 40 m, so 111 − 40 > 40
  });
  it('formats distances the way a child reads them', () => {
    expect(formatDistance(120, 'el')).toBe('120 μ.');
    expect(formatDistance(1340, 'el')).toBe('1,3 χλμ.');
    expect(formatDistance(1340, 'en')).toBe('1.3 km');
  });
});
