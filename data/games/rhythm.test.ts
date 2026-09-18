/**
 * Tests for «Ρυθμός» — the songs and their charts as a contract.
 *
 * The charts are generated (scripts/games-rhythm-charts.mjs), so this suite is
 * what stands between a rule change and a chart a child cannot play: notes in
 * order, inside the audio that actually plays, three lanes, easy notes far
 * enough apart for a 6-year-old, and hard ≥ normal ≥ easy.
 */
import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';
import {
  CALIBRATION,
  EASY_MIN_GAP_SEC,
  LATENCY_OFFSET,
  RHYTHM_COPY,
  RHYTHM_DIFFICULTIES,
  RHYTHM_DIFFICULTY_INFO,
  RHYTHM_SONGS,
  RHYTHM_STORAGE_KEY,
  RHYTHM_TIER_ACCURACY,
} from './rhythm';

const EXPECTED = [
  ['apo-idea-se-paixnidi.mp3', 105],
  ['wisebot-future-mode.mp3', 119],
  ['wisebot-hero-squad.mp3', 128.5],
  ['wisebot-maker-mind.mp3', 130.25],
  ['xypna-maker.mp3', 127.75],
] as const;

describe('rhythm songs', () => {
  it('are exactly the five measured songs, with the measured BPM', () => {
    expect(RHYTHM_SONGS.map((s) => [s.file, s.bpm])).toEqual(EXPECTED.map(([f, b]) => [f, b]));
    expect(new Set(RHYTHM_SONGS.map((s) => s.id)).size).toBe(5);
  });

  it('every song is served from /public/songs and the file exists', () => {
    for (const s of RHYTHM_SONGS) {
      expect(s.src).toBe(`/songs/${s.file}`);
      expect(existsSync(path.join(process.cwd(), 'public', s.src)), s.src).toBe(true);
    }
  });

  it('every song has an el + en title', () => {
    for (const s of RHYTHM_SONGS) {
      expect(s.titleEl.trim().length, s.id).toBeGreaterThan(0);
      expect(s.titleEn.trim().length, s.id).toBeGreaterThan(0);
    }
  });

  it('the round plays inside the song and lasts at most ~90 s', () => {
    for (const s of RHYTHM_SONGS) {
      expect(s.playFromSec, s.id).toBeGreaterThanOrEqual(0);
      expect(s.playToSec, s.id).toBeLessThanOrEqual(s.durationSec);
      expect(s.playToSec - s.playFromSec, s.id).toBeLessThanOrEqual(96);
    }
  });
});

describe('rhythm charts', () => {
  for (const s of RHYTHM_SONGS) {
    for (const d of RHYTHM_DIFFICULTIES) {
      const notes = s.charts[d];
      const where = `${s.id} ${d}`;

      it(`${where}: sorted, inside the played audio, lanes 0–2`, () => {
        expect(notes.length, where).toBeGreaterThan(20);
        for (let i = 0; i < notes.length; i++) {
          const n = notes[i];
          expect([0, 1, 2], `${where} #${i}`).toContain(n.lane);
          expect(Number.isFinite(n.t), `${where} #${i}`).toBe(true);
          if (i > 0) expect(n.t, `${where} #${i}`).toBeGreaterThan(notes[i - 1].t);
        }
        // Enough lead-in for the first note to fall in from the top.
        expect(notes[0].t - s.playFromSec, where).toBeGreaterThanOrEqual(RHYTHM_DIFFICULTY_INFO[d].fallSec);
        expect(notes[notes.length - 1].t, where).toBeLessThan(s.playToSec);
        expect(notes[notes.length - 1].t, where).toBeLessThan(s.durationSec);
      });

      it(`${where}: never three notes in a row on the same lane`, () => {
        for (let i = 2; i < notes.length; i++) {
          const same = notes[i].lane === notes[i - 1].lane && notes[i].lane === notes[i - 2].lane;
          expect(same, `${where} #${i}`).toBe(false);
        }
      });
    }

    it(`${s.id}: easy notes are at least ${EASY_MIN_GAP_SEC} s apart`, () => {
      const e = s.charts.easy;
      for (let i = 1; i < e.length; i++) expect(e[i].t - e[i - 1].t, `${s.id} easy #${i}`).toBeGreaterThanOrEqual(EASY_MIN_GAP_SEC);
    });

    it(`${s.id}: hard ≥ normal ≥ easy`, () => {
      expect(s.charts.hard.length).toBeGreaterThanOrEqual(s.charts.normal.length);
      expect(s.charts.normal.length).toBeGreaterThanOrEqual(s.charts.easy.length);
      expect(s.charts.hard.length).toBeGreaterThan(s.charts.easy.length);
    });
  }
});

describe('rhythm numbers', () => {
  it('windows widen from hard to easy, and perfect sits inside good', () => {
    for (const d of RHYTHM_DIFFICULTIES) {
      const w = RHYTHM_DIFFICULTY_INFO[d].windows;
      expect(w.perfectMs).toBeGreaterThan(0);
      expect(w.goodMs).toBeGreaterThan(w.perfectMs);
      expect(w.earlyMissMs).toBeGreaterThanOrEqual(0);
    }
    const e = RHYTHM_DIFFICULTY_INFO.easy.windows;
    const n = RHYTHM_DIFFICULTY_INFO.normal.windows;
    const h = RHYTHM_DIFFICULTY_INFO.hard.windows;
    expect(e.goodMs).toBeGreaterThanOrEqual(n.goodMs);
    expect(n.goodMs).toBeGreaterThanOrEqual(h.goodMs);
    // An early tap never costs a 6-year-old the note.
    expect(e.earlyMissMs).toBe(0);
  });

  it('latency offset: default inside the range, step divides it', () => {
    expect(LATENCY_OFFSET.min).toBeLessThan(0);
    expect(LATENCY_OFFSET.max).toBeGreaterThan(0);
    expect(LATENCY_OFFSET.default).toBeGreaterThanOrEqual(LATENCY_OFFSET.min);
    expect(LATENCY_OFFSET.default).toBeLessThanOrEqual(LATENCY_OFFSET.max);
    expect((LATENCY_OFFSET.max - LATENCY_OFFSET.min) % LATENCY_OFFSET.step).toBe(0);
    expect(CALIBRATION.clicks - CALIBRATION.skip).toBeGreaterThanOrEqual(CALIBRATION.minTaps);
  });

  it('tier thresholds rise', () => {
    expect([...RHYTHM_TIER_ACCURACY]).toEqual([...RHYTHM_TIER_ACCURACY].sort((a, b) => a - b));
  });

  it('storage key is namespaced', () => {
    expect(RHYTHM_STORAGE_KEY.startsWith('wb_rhythm_')).toBe(true);
  });
});

describe('rhythm copy', () => {
  it('el and en have the same keys and no empty string', () => {
    const el = RHYTHM_COPY.el as unknown as Record<string, unknown>;
    const en = RHYTHM_COPY.en as unknown as Record<string, unknown>;
    expect(Object.keys(el).sort()).toEqual(Object.keys(en).sort());
    const check = (obj: Record<string, unknown>, where: string) => {
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === 'string') expect(v.trim().length, `${where}.${k}`).toBeGreaterThan(0);
        else if (typeof v === 'function') expect(String((v as (...a: unknown[]) => unknown)(3, 'x')).trim().length, `${where}.${k}`).toBeGreaterThan(0);
        else if (v && typeof v === 'object') check(v as Record<string, unknown>, `${where}.${k}`);
      }
    };
    check(el, 'el');
    check(en, 'en');
  });

  it('every difficulty has a name and a hint in both languages', () => {
    for (const lang of ['el', 'en'] as const) {
      for (const d of RHYTHM_DIFFICULTIES) {
        expect(RHYTHM_COPY[lang].difficultyName[d].trim().length).toBeGreaterThan(0);
        expect(RHYTHM_COPY[lang].difficultyHint[d].trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('the Greek share headline reads like the brief', () => {
    expect(RHYTHM_COPY.el.cardHeadline(48, 'Future Mode')).toBe('Combo 48 στο “Future Mode”');
  });
});
