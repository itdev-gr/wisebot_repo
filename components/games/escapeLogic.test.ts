/**
 * Tests for the «Δωμάτιο Απόδρασης» rules.
 *
 * The headline test plays every puzzle of every room, in both languages, with
 * the room's own stated answer: if the checker rejected one of them, a child
 * who solved it would be stuck behind a door that never opens. The rest pin
 * the forgiving word check («ΗΛΙΟΣ» = «ηλιος» = «Ήλιος»), the numeric keypad,
 * the «7′12″» format, the weekly unlock and the per-room record.
 */
import { describe, it, expect } from 'vitest';
import { ESCAPE_REPLAY_TIER, ESCAPE_ROOMS, ESCAPE_START_DAY, HINT_AFTER_MS, KEYPAD_MAX_DIGITS, type EscapePuzzle } from '../../data/games/escape';
import {
  addDays,
  checkAnswer,
  dayAndMonth,
  deleteDigit,
  emptyProgress,
  escapeTier,
  formatElapsed,
  hintDue,
  isRoomUnlocked,
  noteLabel,
  normalizeWord,
  parseProgress,
  pressDigit,
  recordEscape,
  roomUnlockDay,
  toPuzzleView,
  unlockedRooms,
  weekOf,
} from './escapeLogic';

const LANGS = ['el', 'en'] as const;
const ans = (p: EscapePuzzle, l: 'el' | 'en') => (l === 'el' ? p.answerEl : p.answerEn);
const all = ESCAPE_ROOMS.flatMap((room) => room.puzzles.map((p, i) => ({ id: `${room.id} puzzle ${i + 1}`, p })));

/** A synthetic word puzzle for the normalisation cases. */
const word = (el: string, en: string): EscapePuzzle => ({
  type: 'logic', answerType: 'word', promptEl: '?', promptEn: '?', answerEl: el, answerEn: en,
  hintEl: 'h', hintEn: 'h', solutionEl: 's', solutionEn: 's',
});

describe('checkAnswer — every stated answer opens its lock', () => {
  it('passes for all 18 puzzles in both languages, through checkAnswer and through the PuzzleView', () => {
    expect(all).toHaveLength(ESCAPE_ROOMS.length * 6);
    for (const { id, p } of all) {
      for (const l of LANGS) {
        expect(checkAnswer(p, l, ans(p, l)), `${id} ${l}`).toBe(true);
        expect(toPuzzleView(p, l).check(ans(p, l)), `${id} ${l} view`).toBe(true);
      }
    }
  });

  it('word answers pass in the ways a child really types them: CAPS, accented, padded', () => {
    for (const { id, p } of all) {
      if (p.answerType !== 'word') continue;
      for (const l of LANGS) {
        const a = ans(p, l);
        for (const v of [a.toUpperCase(), a.toLowerCase(), `  ${a}  `, a.normalize('NFD').replace(/\p{M}/gu, '')]) {
          expect(checkAnswer(p, l, v), `${id} ${l} «${v}»`).toBe(true);
        }
      }
    }
    // The accented spellings the answer key leaves out (it stores «κοκκινο», «σπιτι»).
    const r3 = ESCAPE_ROOMS[2].puzzles;
    expect(checkAnswer(r3[0], 'el', 'κόκκινο')).toBe(true);
    expect(checkAnswer(r3[0], 'el', 'Κόκκινο')).toBe(true);
    expect(checkAnswer(r3[2], 'el', 'σπίτι')).toBe(true);
    expect(checkAnswer(r3[2], 'el', 'ΣΠΊΤΙ')).toBe(true);
    expect(checkAnswer(r3[2], 'en', 'House')).toBe(true);
    expect(checkAnswer(ESCAPE_ROOMS[1].puzzles[0], 'el', 'μπλε')).toBe(true);
    expect(checkAnswer(ESCAPE_ROOMS[1].puzzles[2], 'el', 'Δέκα')).toBe(true);
  });

  it('number answers accept surrounding spaces and leading zeros', () => {
    const p = ESCAPE_ROOMS[0].puzzles[1]; // 10
    expect(checkAnswer(p, 'el', ' 10 ')).toBe(true);
    expect(checkAnswer(p, 'en', '010')).toBe(true);
  });
});

describe('checkAnswer — common wrong answers stay locked', () => {
  const r1 = ESCAPE_ROOMS[0].puzzles;
  const r2 = ESCAPE_ROOMS[1].puzzles;
  const r3 = ESCAPE_ROOMS[2].puzzles;

  it('rejects the distractors of every choice puzzle', () => {
    for (const { id, p } of all) {
      if (p.answerType !== 'choice') continue;
      for (const l of LANGS) {
        const opts = (l === 'el' ? p.optionsEl : p.optionsEn)!;
        for (const o of opts.filter((x) => x !== ans(p, l))) expect(checkAnswer(p, l, o), `${id} ${l} «${o}»`).toBe(false);
      }
    }
  });

  it('a choice answer is exact: other case, other language or not an option fails', () => {
    expect(checkAnswer(r1[2], 'el', 'φως')).toBe(false);
    expect(checkAnswer(r1[2], 'el', 'LIGHT')).toBe(false);
    expect(checkAnswer(r1[2], 'en', 'ΦΩΣ')).toBe(false);
    expect(checkAnswer(r1[0], 'en', 'Yellow')).toBe(false);
  });

  it('rejects the classic slips on number puzzles', () => {
    expect(checkAnswer(r1[1], 'el', '9')).toBe(false);
    expect(checkAnswer(r1[3], 'el', '8')).toBe(false); // miscounted star
    expect(checkAnswer(r1[5], 'el', '30')).toBe(false);
    expect(checkAnswer(r2[1], 'el', '17')).toBe(false); // 1/16 → 1/17
    expect(checkAnswer(r2[1], 'el', '1/32')).toBe(false); // keypad can't type it; the checker wants digits
    expect(checkAnswer(r2[3], 'en', '11')).toBe(false); // counted the triangles too
    expect(checkAnswer(r2[5], 'en', '56')).toBe(false);
    expect(checkAnswer(r3[1], 'el', '20')).toBe(false);
    expect(checkAnswer(r3[3], 'el', '14')).toBe(false); // counted the hearts too
    expect(checkAnswer(r3[5], 'en', '51')).toBe(false);
  });

  it('rejects empty, non-digit and signed number input', () => {
    for (const bad of ['', '   ', 'ten', '1 0', '-10', '10.0', '+10']) expect(checkAnswer(r1[1], 'en', bad), `«${bad}»`).toBe(false);
  });

  it('rejects wrong words, other-language words and empty input', () => {
    expect(checkAnswer(r2[0], 'el', 'κόκκινο')).toBe(false);
    expect(checkAnswer(r2[0], 'en', 'red')).toBe(false);
    expect(checkAnswer(r2[0], 'el', 'BLUE')).toBe(false);
    expect(checkAnswer(r2[0], 'el', 'mple')).toBe(false);
    expect(checkAnswer(r2[2], 'el', '10')).toBe(false);
    expect(checkAnswer(r2[2], 'en', 'ΔΕΚΑ')).toBe(false);
    expect(checkAnswer(r3[0], 'el', 'μπλε')).toBe(false);
    expect(checkAnswer(r3[2], 'en', 'home')).toBe(false);
    expect(checkAnswer(r3[2], 'el', '')).toBe(false);
    expect(checkAnswer(r3[2], 'el', '   ')).toBe(false);
  });
});

describe('normalizeWord', () => {
  it('«ΗΛΙΟΣ» == «ηλιος» == «Ήλιος»', () => {
    const p = word('ήλιος', 'sun');
    for (const v of ['ΗΛΙΟΣ', 'ηλιος', 'Ήλιος', 'ήλιος', ' ΉΛΙΟΣ ']) expect(checkAnswer(p, 'el', v), v).toBe(true);
    expect(normalizeWord('ΗΛΙΟΣ')).toBe(normalizeWord('Ήλιος'));
  });

  it('strips διαλυτικά too, and folds final sigma', () => {
    expect(normalizeWord('Προϊόν')).toBe('προιον');
    expect(normalizeWord('ΠΡΟΪΟΝ')).toBe('προιον');
    expect(normalizeWord('κόσμος')).toBe(normalizeWord('ΚΟΣΜΟΣ'));
  });

  it('collapses inner spaces', () => {
    const p = word('καλή μέρα', 'good day');
    expect(checkAnswer(p, 'el', 'ΚΑΛΗ    ΜΕΡΑ')).toBe(true);
    expect(checkAnswer(p, 'en', ' Good  Day ')).toBe(true);
  });
});

describe('toPuzzleView — the common { prompt, check } interface', () => {
  it('always shows the current language, including the room 1 code puzzle with its different maps', () => {
    const p = ESCAPE_ROOMS[0].puzzles[2];
    const el = toPuzzleView(p, 'el');
    const en = toPuzzleView(p, 'en');
    expect(el.prompt).toContain('★=Φ');
    expect(en.prompt).toContain('★=L');
    expect(el.options).toContain('ΦΩΣ');
    expect(en.options).toContain('LIGHT');
    expect(el.check('ΦΩΣ')).toBe(true);
    expect(en.check('LIGHT')).toBe(true);
    expect(el.check('LIGHT')).toBe(false);
  });

  it('carries type, hint, solution and the observe picture', () => {
    const v = toPuzzleView(ESCAPE_ROOMS[1].puzzles[3], 'en');
    expect(v.type).toBe('observe');
    expect(v.answerType).toBe('number');
    expect(v.hint.length).toBeGreaterThan(0);
    expect(v.solution.length).toBeGreaterThan(0);
    expect(v.image).toBe('/images/pencilo.jpg');
    expect(v.overlay?.counts).toBe('hexagon');
    expect(v.options).toBeUndefined();
  });

  it('notes on the final lock read cleanly', () => {
    expect(noteLabel(ESCAPE_ROOMS[2].puzzles[0], ' κόκκινο ')).toBe('ΚΟΚΚΙΝΟ');
    expect(noteLabel(ESCAPE_ROOMS[0].puzzles[1], '010')).toBe('10');
    expect(noteLabel(ESCAPE_ROOMS[1].puzzles[4], 'Κάθε 4 χρόνια')).toBe('Κάθε 4 χρόνια');
  });
});

describe('keypad', () => {
  it('types digits, drops a leading zero, stops at the limit and deletes', () => {
    let e = '';
    for (const d of ['0', '2', '9']) e = pressDigit(e, d);
    expect(e).toBe('29');
    expect(pressDigit('29', 'x')).toBe('29');
    expect(pressDigit('9'.repeat(KEYPAD_MAX_DIGITS), '1')).toBe('9'.repeat(KEYPAD_MAX_DIGITS));
    expect(deleteDigit('29')).toBe('2');
    expect(deleteDigit('')).toBe('');
  });
});

describe('time', () => {
  it('formats 432000 ms as «7′12″»', () => {
    expect(formatElapsed(432_000)).toBe('7′12″');
  });

  it('pads seconds, rounds down, never goes negative, does not cap minutes', () => {
    expect(formatElapsed(0)).toBe('0′00″');
    expect(formatElapsed(65_999)).toBe('1′05″');
    expect(formatElapsed(-5)).toBe('0′00″');
    expect(formatElapsed(Number.NaN)).toBe('0′00″');
    expect(formatElapsed(3_725_000)).toBe('62′05″');
  });

  it('the free hint is due after 60″ of inactivity, not before', () => {
    expect(hintDue(1_000, 1_000 + HINT_AFTER_MS - 1)).toBe(false);
    expect(hintDue(1_000, 1_000 + HINT_AFTER_MS)).toBe(true);
  });
});

describe('unlock by week', () => {
  const [r1, r2, r3] = ESCAPE_ROOMS;

  it('counts weeks from the start day', () => {
    expect(weekOf(ESCAPE_START_DAY)).toBe(1);
    expect(weekOf(addDays(ESCAPE_START_DAY, 6))).toBe(1);
    expect(weekOf(addDays(ESCAPE_START_DAY, 7))).toBe(2);
    expect(weekOf(addDays(ESCAPE_START_DAY, -1))).toBe(0);
  });

  it('opens room 1 always, room 2 on 28/9, room 3 on 5/10, and never closes one', () => {
    expect(roomUnlockDay(r2)).toBe('2026-09-28');
    expect(roomUnlockDay(r3)).toBe('2026-10-05');
    expect(dayAndMonth(roomUnlockDay(r2))).toEqual({ day: 28, month: 9 });

    expect(unlockedRooms('2026-09-18').map((r) => r.id)).toEqual([r1.id]);
    expect(unlockedRooms('2026-09-27').map((r) => r.id)).toEqual([r1.id]);
    expect(unlockedRooms('2026-09-28').map((r) => r.id)).toEqual([r1.id, r2.id]);
    expect(unlockedRooms('2026-10-04').map((r) => r.id)).toEqual([r1.id, r2.id]);
    expect(unlockedRooms('2026-10-05').map((r) => r.id)).toEqual([r1.id, r2.id, r3.id]);
    expect(unlockedRooms('2027-06-01').map((r) => r.id)).toEqual([r1.id, r2.id, r3.id]);
  });

  it('crosses a month and a year boundary correctly', () => {
    expect(addDays('2026-12-28', 7)).toBe('2027-01-04');
    expect(addDays('2026-10-25', 7)).toBe('2026-11-01'); // DST weekend: calendar maths, no clock
  });

  it('a later room added to the data opens on its own Monday with no code change', () => {
    const r4 = { ...r3, id: 'room4', week: 4 };
    const rooms = [...ESCAPE_ROOMS, r4];
    expect(roomUnlockDay(r4)).toBe('2026-10-12');
    expect(unlockedRooms('2026-10-11', rooms)).toHaveLength(3);
    expect(unlockedRooms('2026-10-12', rooms)).toHaveLength(4);
  });

  it('a malformed day key opens only room 1', () => {
    expect(isRoomUnlocked(r1, 'soon')).toBe(true);
    expect(isRoomUnlocked(r2, 'soon')).toBe(false);
  });
});

describe('room progress', () => {
  it('records escapes and the best time, without touching the input', () => {
    const p0 = emptyProgress();
    const a = recordEscape(p0, 'room1', 432_000);
    expect(p0.rooms).toEqual({});
    expect(a.first).toBe(true);
    expect(a.newBest).toBe(true);
    const b = recordEscape(a.progress, 'room1', 500_000);
    expect(b.first).toBe(false);
    expect(b.newBest).toBe(false);
    expect(b.progress.rooms.room1).toEqual({ escapes: 2, bestMs: 432_000 });
    const c = recordEscape(b.progress, 'room1', 300_000);
    expect(c.newBest).toBe(true);
    expect(c.progress.rooms.room1).toEqual({ escapes: 3, bestMs: 300_000 });
  });

  it('pays the room tier on the first escape and the replay tier after', () => {
    const room = ESCAPE_ROOMS[1];
    const p0 = emptyProgress();
    expect(escapeTier(room, p0)).toBe(room.xpTier);
    const p1 = recordEscape(p0, room.id, 1000).progress;
    expect(escapeTier(room, p1)).toBe(ESCAPE_REPLAY_TIER);
    expect(escapeTier(ESCAPE_ROOMS[0], p1)).toBe(ESCAPE_ROOMS[0].xpTier);
  });

  it('round-trips through storage and drops anything malformed', () => {
    const p = recordEscape(emptyProgress(), 'room2', 123_456).progress;
    expect(parseProgress(JSON.stringify(p))).toEqual(p);
    expect(parseProgress(null)).toEqual(emptyProgress());
    expect(parseProgress('{oops')).toEqual(emptyProgress());
    expect(parseProgress('[]')).toEqual(emptyProgress());
    expect(parseProgress(JSON.stringify({ rooms: { a: { escapes: 'x', bestMs: 5 }, b: null, c: { escapes: 1, bestMs: 9 } } }))).toEqual({
      rooms: { c: { escapes: 1, bestMs: 9 } },
    });
  });
});
