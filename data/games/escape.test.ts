/**
 * Tests for «Δωμάτιο Απόδρασης» — the rooms file as a contract.
 *
 * A new room is a data-only change, so this suite is what stands between a
 * content edit and a room a child cannot finish: six puzzles in the brief's
 * order, both languages everywhere, a choice answer that is really one of its
 * options, a number answer the keypad can type, and — the one that matters
 * most — an observe picture that draws exactly as many shapes as the answer
 * says. Every failure message names the room and the puzzle.
 */
import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';
import {
  ESCAPE_COPY,
  ESCAPE_PUZZLE_ORDER,
  ESCAPE_ROOMS,
  ESCAPE_START_DAY,
  ESCAPE_STORAGE_KEY,
  HINT_AFTER_MS,
  KEYPAD_MAX_DIGITS,
} from './escape';
import { addDays, countedShapes, dayNumber, minCentreDistance, overlayNodes, roomUnlockDay, unlockedRooms } from '../../components/games/escapeLogic';

const where = (roomId: string, i: number) => `${roomId} puzzle ${i + 1}`;
const LANGS = ['El', 'En'] as const;

describe('escape rooms — shape', () => {
  it('has the three MVP rooms, weeks 1, 2, 3 with unique ids', () => {
    expect(ESCAPE_ROOMS.length).toBeGreaterThanOrEqual(3);
    expect(ESCAPE_ROOMS.map((r) => r.week)).toEqual(ESCAPE_ROOMS.map((_, i) => i + 1));
    expect(new Set(ESCAPE_ROOMS.map((r) => r.id)).size).toBe(ESCAPE_ROOMS.length);
  });

  it('every room has six puzzles in the order logic → pattern → code → observe → knowledge → final', () => {
    for (const room of ESCAPE_ROOMS) {
      expect(room.puzzles.map((p) => p.type), room.id).toEqual([...ESCAPE_PUZZLE_ORDER]);
    }
  });

  it('every room has non-empty el + en title, intro, outro and age label, and a tier 1–3', () => {
    for (const room of ESCAPE_ROOMS) {
      for (const k of ['title', 'intro', 'outro', 'age'] as const) {
        for (const l of LANGS) expect(room[`${k}${l}`].trim().length, `${room.id} ${k}${l}`).toBeGreaterThan(0);
      }
      expect([1, 2, 3], room.id).toContain(room.xpTier);
    }
  });

  it('every puzzle has a non-empty el + en prompt, hint, solution and answer', () => {
    ESCAPE_ROOMS.forEach((room) =>
      room.puzzles.forEach((p, i) => {
        for (const k of ['prompt', 'hint', 'solution', 'answer'] as const) {
          for (const l of LANGS) expect(p[`${k}${l}`].trim().length, `${where(room.id, i)} ${k}${l}`).toBeGreaterThan(0);
        }
      }),
    );
  });

  it('room 1 (ages 6–8) never asks for typing: choice or number only', () => {
    for (const p of ESCAPE_ROOMS[0].puzzles) expect(['choice', 'number']).toContain(p.answerType);
  });
});

describe('escape rooms — answers', () => {
  it('choice answers are exactly one of their options, in both languages', () => {
    ESCAPE_ROOMS.forEach((room) =>
      room.puzzles.forEach((p, i) => {
        if (p.answerType !== 'choice') {
          expect(p.optionsEl, where(room.id, i)).toBeUndefined();
          expect(p.optionsEn, where(room.id, i)).toBeUndefined();
          return;
        }
        for (const [opts, ans] of [[p.optionsEl, p.answerEl], [p.optionsEn, p.answerEn]] as const) {
          expect(opts, where(room.id, i)).toBeDefined();
          expect(opts!.length, where(room.id, i)).toBeGreaterThanOrEqual(2);
          expect(new Set(opts).size, `${where(room.id, i)} duplicate option`).toBe(opts!.length);
          expect(opts!.filter((o) => o === ans), `${where(room.id, i)} answer «${ans}»`).toHaveLength(1);
        }
        expect(p.optionsEl!.length, where(room.id, i)).toBe(p.optionsEn!.length);
      }),
    );
  });

  it('number answers are digits only, the keypad can type them, and el = en', () => {
    ESCAPE_ROOMS.forEach((room) =>
      room.puzzles.forEach((p, i) => {
        if (p.answerType !== 'number') return;
        expect(p.answerEl, where(room.id, i)).toMatch(/^\d+$/);
        expect(p.answerEn, where(room.id, i)).toBe(p.answerEl);
        expect(p.answerEl.length, where(room.id, i)).toBeLessThanOrEqual(KEYPAD_MAX_DIGITS);
      }),
    );
  });

  it('word answers are letters only (no digits), so the keypad is never the right input', () => {
    ESCAPE_ROOMS.forEach((room) =>
      room.puzzles.forEach((p, i) => {
        if (p.answerType !== 'word') return;
        expect(p.answerEl, where(room.id, i)).toMatch(/^[\p{L} ]+$/u);
        expect(p.answerEn, where(room.id, i)).toMatch(/^[\p{L} ]+$/u);
      }),
    );
  });
});

describe('escape rooms — observe overlays', () => {
  const observes = ESCAPE_ROOMS.map((room) => ({ room, i: 3, p: room.puzzles[3] }));

  it('every observe puzzle has an image that exists in public/ and a structured overlay', () => {
    for (const { room, i, p } of observes) {
      expect(p.image, where(room.id, i)).toMatch(/^\/images\/.+\.(jpg|png|webp)$/);
      expect(existsSync(path.join(process.cwd(), 'public', p.image!)), `${where(room.id, i)} ${p.image}`).toBe(true);
      expect(p.overlay, where(room.id, i)).toBeDefined();
      expect(p.answerType, where(room.id, i)).toBe('number');
    }
  });

  it('the overlay draws exactly as many counted shapes as the stated answer', () => {
    for (const { room, i, p } of observes) {
      expect(countedShapes(p.overlay!), where(room.id, i)).toBe(Number(p.answerEl));
    }
    // The three rooms as authored: 7 stars; 7 hexagons + 4 triangles; 9 stars + 5 hearts.
    const byShape = (k: number) =>
      overlayNodes(ESCAPE_ROOMS[k].puzzles[3].overlay!).reduce<Record<string, number>>((acc, n) => ({ ...acc, [n.shape]: (acc[n.shape] ?? 0) + 1 }), {});
    expect(byShape(0)).toEqual({ star: 7 });
    expect(byShape(1)).toEqual({ hexagon: 7, triangle: 4 });
    expect(byShape(2)).toEqual({ star: 9, heart: 5 });
  });

  it('the node count never changes with the rendered size', () => {
    for (const { room, i, p } of observes) {
      const total = p.overlay!.groups.reduce((s, g) => s + g.at.length, 0);
      for (const w of [0, 120, 200, 343, 700, 1400]) expect(overlayNodes(p.overlay!, w), `${where(room.id, i)} @${w}px`).toHaveLength(total);
    }
  });

  it('no two shapes overlap and every shape sits inside the picture, at any rendered size', () => {
    for (const { room, i, p } of observes) {
      const o = p.overlay!;
      for (const w of [0, 150, 220, 343, 700]) {
        const nodes = overlayNodes(o, w);
        for (const n of nodes) {
          expect(n.cx - n.size / 2, `${where(room.id, i)} left @${w}`).toBeGreaterThan(0);
          expect(n.cx + n.size / 2, `${where(room.id, i)} right @${w}`).toBeLessThan(o.width);
          expect(n.cy - n.size / 2, `${where(room.id, i)} top @${w}`).toBeGreaterThan(0);
          expect(n.cy + n.size / 2, `${where(room.id, i)} bottom @${w}`).toBeLessThan(o.height);
        }
        for (let a = 0; a < nodes.length; a++) {
          for (let b = a + 1; b < nodes.length; b++) {
            const d = Math.hypot(nodes[a].cx - nodes[b].cx, nodes[a].cy - nodes[b].cy);
            expect(d, `${where(room.id, i)} nodes ${a}/${b} @${w}`).toBeGreaterThan((nodes[a].size + nodes[b].size) / 2);
          }
        }
      }
      expect(minCentreDistance(o)).toBeGreaterThan(0);
    }
  });

  it('room 1: every star sits fully on the opaque panel', () => {
    const o = ESCAPE_ROOMS[0].puzzles[3].overlay!;
    const pnl = o.panel!;
    expect(pnl).toBeDefined();
    for (const w of [0, 150, 220, 343]) {
      for (const n of overlayNodes(o, w)) {
        expect(n.cx - n.size / 2).toBeGreaterThan((pnl.x0 / 100) * o.width);
        expect(n.cx + n.size / 2).toBeLessThan((pnl.x1 / 100) * o.width);
        expect(n.cy - n.size / 2).toBeGreaterThan((pnl.y0 / 100) * o.height);
        expect(n.cy + n.size / 2).toBeLessThan((pnl.y1 / 100) * o.height);
      }
    }
  });
});

describe('escape rooms — weekly unlock', () => {
  it('starts on a Monday', () => {
    expect(ESCAPE_START_DAY).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(new Date(`${ESCAPE_START_DAY}T12:00:00Z`).getUTCDay()).toBe(1);
  });

  it('room N opens on the Monday of week N; room 1 is open even before the start', () => {
    ESCAPE_ROOMS.forEach((room) => {
      expect(roomUnlockDay(room)).toBe(addDays(ESCAPE_START_DAY, 7 * (room.week - 1)));
      expect(new Date(`${roomUnlockDay(room)}T12:00:00Z`).getUTCDay()).toBe(1);
    });
    expect(unlockedRooms(addDays(ESCAPE_START_DAY, -30)).map((r) => r.id)).toEqual([ESCAPE_ROOMS[0].id]);
  });

  it('is monotonic: a room once open never locks again, and the count only grows', () => {
    let prev: string[] = [];
    for (let d = -10; d <= 7 * (ESCAPE_ROOMS.length + 3); d++) {
      const day = addDays(ESCAPE_START_DAY, d);
      const open = unlockedRooms(day).map((r) => r.id);
      for (const id of prev) expect(open, day).toContain(id);
      expect(open.length, day).toBeGreaterThanOrEqual(prev.length);
      for (const room of ESCAPE_ROOMS) {
        expect(open.includes(room.id), `${room.id} on ${day}`).toBe(room.week === 1 || dayNumber(day) >= dayNumber(roomUnlockDay(room)));
      }
      prev = open;
    }
    expect(prev).toHaveLength(ESCAPE_ROOMS.length);
  });
});

describe('escape — copy and constants', () => {
  it('el and en copy have the same keys, none empty', () => {
    const el = ESCAPE_COPY.el as unknown as Record<string, unknown>;
    const en = ESCAPE_COPY.en as unknown as Record<string, unknown>;
    expect(Object.keys(el).sort()).toEqual(Object.keys(en).sort());
    for (const lang of [el, en]) {
      for (const [k, v] of Object.entries(lang)) {
        if (typeof v === 'string') expect(v.trim().length, k).toBeGreaterThan(0);
      }
    }
  });

  it('the Greek share headline reads like the brief', () => {
    expect(ESCAPE_COPY.el.cardHeadline(3, '7′12″')).toBe('Βγήκα από το Δωμάτιο 3 σε 7′12″');
  });

  it('hint after 60″; storage key is namespaced', () => {
    expect(HINT_AFTER_MS).toBe(60_000);
    expect(ESCAPE_STORAGE_KEY.startsWith('wb_escape_')).toBe(true);
  });
});
