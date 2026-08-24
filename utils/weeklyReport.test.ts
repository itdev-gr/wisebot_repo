/**
 * The weekly report is what the parent pays attention to — wrong numbers here erode
 * exactly the trust it exists to build. Pins the window boundaries, the star/percent
 * math, subject detection, and that the conversation prompt never points at something
 * the child didn't do (e.g. «δείξε τη δημιουργία σου» with zero creations).
 */
import { describe, expect, it } from 'vitest';
import { computeWeeklyReport, conversationPrompt, type WeeklyInput } from './weeklyReport';

const NOW = Date.parse('2026-08-24T12:00:00Z');
const daysAgo = (d: number) => new Date(NOW - d * 24 * 60 * 60 * 1000).toISOString();

const base = (over: Partial<WeeklyInput> = {}): WeeklyInput => ({
  quizRows: [], heroes: [], songs: [], videos: [], now: NOW, ...over,
});

describe('computeWeeklyReport', () => {
  it('counts only rows inside the 7-day window', () => {
    const r = computeWeeklyReport(base({
      quizRows: [
        { category_id: 'school-g3-math-multiplication', score: 4, total: 4, achieved_at: daysAgo(1) },
        { category_id: 'school-g3-math-division', score: 3, total: 4, achieved_at: daysAgo(8) }, // too old
      ],
      heroes: [
        { title: 'Δράκος 3000', created_at: daysAgo(2) },
        { title: 'Old Hero', created_at: daysAgo(30) },
      ],
    }));
    expect(r.schoolMissions).toBe(1);
    expect(r.heroes).toBe(1);
    expect(r.creationTitles).toEqual(['Δράκος 3000']);
    expect(r.quiet).toBe(false);
  });

  it('computes stars and the weighted quiz percentage', () => {
    const r = computeWeeklyReport(base({
      quizRows: [
        { category_id: 'school-g1-math-addition-to-10', score: 4, total: 4, achieved_at: daysAgo(1) },  // 3★
        { category_id: 'school-g1-greek-syllables', score: 3, total: 4, achieved_at: daysAgo(2) },      // 2★
        { category_id: 'school-g1-greek-first-words', score: 1, total: 4, achieved_at: daysAgo(3) },    // 0★
        { category_id: 'book-quiz-space', score: 2, total: 4, achieved_at: daysAgo(1) },                // not school
      ],
    }));
    expect(r.schoolMissions).toBe(3);
    expect(r.schoolStars).toBe(5);
    expect(r.quizPct).toBe(63); // (4+3+1+2)/(16) = 62.5 → 63
    expect(r.topSubject).toBe('greek');
  });

  it('excludes grade exams from mission counts but keeps them in the percentage', () => {
    const r = computeWeeklyReport(base({
      quizRows: [
        { category_id: 'school-g1-exam', score: 10, total: 12, achieved_at: daysAgo(1) },
      ],
    }));
    expect(r.schoolMissions).toBe(0);
    expect(r.quizPct).toBe(83);
  });

  it('drops malformed rows instead of crashing', () => {
    const r = computeWeeklyReport(base({
      quizRows: [
        { category_id: 'school-g1-math-x', score: 2, total: 0, achieved_at: daysAgo(1) },
        { category_id: 'school-g1-math-y', score: 2, total: 4, achieved_at: 'not-a-date' },
        null as never,
      ],
      heroes: [{ title: null, created_at: daysAgo(1) }],
    }));
    expect(r.schoolMissions).toBe(0);
    expect(r.quizPct).toBeNull();
    expect(r.heroes).toBe(1);        // counted…
    expect(r.creationTitles).toEqual([]); // …but no null title shown
  });

  it('flags a fully quiet week', () => {
    const r = computeWeeklyReport(base());
    expect(r.quiet).toBe(true);
    expect(r.quizPct).toBeNull();
  });
});

describe('conversationPrompt', () => {
  it('suggests starting together on a quiet week', () => {
    const r = computeWeeklyReport(base());
    expect(conversationPrompt(r, 'el', NOW)).toMatch(/μαζί/);
  });

  it('never gives the "show me your creation" prompt when nothing was created', () => {
    const r = computeWeeklyReport(base({
      quizRows: [{ category_id: 'book-quiz-space', score: 3, total: 4, achieved_at: daysAgo(1) }],
    }));
    // only non-school quiz activity → the general pool, not the creation pool
    for (let day = 0; day < 7; day++) {
      const p = conversationPrompt(r, 'en', NOW + day * 24 * 60 * 60 * 1000);
      expect(p).not.toMatch(/created|creation is/);
    }
  });

  it('follows the top school subject', () => {
    const r = computeWeeklyReport(base({
      quizRows: [
        { category_id: 'school-g3-history-athens', score: 4, total: 4, achieved_at: daysAgo(1) },
        { category_id: 'school-g3-history-sparta', score: 3, total: 4, achieved_at: daysAgo(2) },
      ],
    }));
    expect(r.topSubject).toBe('history');
    expect(conversationPrompt(r, 'el', NOW)).toMatch(/Ιστορ/);
  });

  it('prefers creations when they outweigh school work', () => {
    const r = computeWeeklyReport(base({
      heroes: [{ title: 'A', created_at: daysAgo(1) }, { title: 'B', created_at: daysAgo(2) }],
    }));
    expect(conversationPrompt(r, 'en', NOW)).toMatch(/creat/i);
  });

  it('is stable within a day and bilingual', () => {
    const r = computeWeeklyReport(base({ heroes: [{ title: 'A', created_at: daysAgo(1) }] }));
    expect(conversationPrompt(r, 'el', NOW)).toBe(conversationPrompt(r, 'el', NOW + 1000));
    expect(conversationPrompt(r, 'el', NOW)).not.toBe(conversationPrompt(r, 'en', NOW));
  });
});
