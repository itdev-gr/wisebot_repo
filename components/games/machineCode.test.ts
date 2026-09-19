/**
 * Tests for the level code: round-trips for every shipped level and for
 * seeded random free-mode machines, the alphabet promise (nothing ambiguous
 * on screen, forgiving on input), and rejection of corrupted codes.
 */
import { describe, it, expect } from 'vitest';
import { mulberry32 } from '../../utils/dailySeed';
import {
  MACHINE_FREE_MAX_PIECES,
  MACHINE_LEVELS,
  MACHINE_TOOLS,
  MACHINE_WORLD,
  type MachineBuild,
  type MachinePiece,
} from '../../data/games/machine';
import { simulate } from './machinePhysics';
import {
  CODE_ALPHABET,
  cleanCode,
  codeLength,
  decodeMachine,
  encodeMachine,
  formatCode,
  normalizeRot,
} from './machineCode';

function levelBuild(i: number): MachineBuild {
  const L = MACHINE_LEVELS[i];
  return { ball: L.ball, goal: L.goal, pieces: [...L.fixed, ...L.solution] };
}

function randomBuild(rng: () => number, count: number): MachineBuild {
  const int = (max: number) => Math.min(Math.floor(rng() * max), max - 1);
  const pieces: MachinePiece[] = [];
  for (let i = 0; i < count; i++) {
    const type = MACHINE_TOOLS[int(MACHINE_TOOLS.length)];
    const rot = type === 'ramp' || type === 'trampoline' ? int(16) : type === 'fan' ? int(4) : 0;
    pieces.push({ type, x: int(MACHINE_WORLD.w), y: int(MACHINE_WORLD.h), rot });
  }
  return { ball: { x: int(MACHINE_WORLD.w), y: int(MACHINE_WORLD.h) }, goal: { x: int(MACHINE_WORLD.w), y: int(MACHINE_WORLD.h) }, pieces };
}

describe('alphabet', () => {
  it('has 32 distinct symbols and none of I, L, O, U', () => {
    expect(CODE_ALPHABET).toHaveLength(32);
    expect(new Set(CODE_ALPHABET).size).toBe(32);
    for (const ch of 'ILOU') expect(CODE_ALPHABET).not.toContain(ch);
  });

  it('codes are printed as WB- plus groups of four', () => {
    const code = encodeMachine(levelBuild(0));
    expect(code).toMatch(/^WB(-[0-9A-Z]{1,4})+$/);
    expect(formatCode('ABCDEFGHJ')).toBe('WB-ABCD-EFGH-J');
  });

  it('accepts lower case, spaces, missing dashes and O/I/l typos', () => {
    const code = encodeMachine(levelBuild(2));
    expect(code).not.toBeNull();
    const typed = (code as string).toLowerCase().replace(/-/g, ' ').replace(/0/g, 'o').replace(/1/g, 'l');
    expect(decodeMachine(typed)).toEqual(decodeMachine(code as string));
    expect(cleanCode('wb-ab cd')).toBe('ABCD');
    expect(cleanCode('WB-AB*D')).toBeNull();
    expect(cleanCode('')).toBeNull();
  });
});

describe('round trip', () => {
  MACHINE_LEVELS.forEach((L, i) => {
    it(`level ${L.id} encodes and decodes to the same machine`, () => {
      const b = levelBuild(i);
      const code = encodeMachine(b);
      expect(code).not.toBeNull();
      const back = decodeMachine(code as string);
      expect(back).toEqual(b);
      // and the decoded machine still solves the level
      expect(simulate(back as MachineBuild).reachedGoal).toBe(true);
      expect(codeLength(b)).toBe((code as string).replace(/[^0-9A-Z]/g, '').slice(2).length);
    });
  });

  it('200 seeded random free-mode machines round-trip', () => {
    const rng = mulberry32(20260918);
    for (let i = 0; i < 200; i++) {
      const count = Math.min(Math.floor(rng() * (MACHINE_FREE_MAX_PIECES + 1)), MACHINE_FREE_MAX_PIECES);
      const b = randomBuild(rng, count);
      const code = encodeMachine(b);
      expect(code).not.toBeNull();
      expect(decodeMachine(code as string)).toEqual(b);
    }
  });

  it('normalises rotations into the bits the code holds', () => {
    expect(normalizeRot('ramp', 17)).toBe(1);
    expect(normalizeRot('ramp', -1)).toBe(15);
    expect(normalizeRot('fan', 5)).toBe(1);
    expect(normalizeRot('magnet', 9)).toBe(0);
    const b: MachineBuild = { ball: { x: 1, y: 1 }, goal: { x: 2, y: 2 }, pieces: [{ type: 'ramp', x: 3, y: 3, rot: 18 }] };
    expect(decodeMachine(encodeMachine(b) as string)?.pieces[0].rot).toBe(2);
  });

  it('refuses what it cannot hold', () => {
    const rng = mulberry32(7);
    expect(encodeMachine(randomBuild(rng, MACHINE_FREE_MAX_PIECES + 1))).toBeNull();
    expect(encodeMachine({ ball: { x: 40, y: 1 }, goal: { x: 1, y: 1 }, pieces: [] })).toBeNull();
    expect(encodeMachine({ ball: { x: 1.5, y: 1 }, goal: { x: 1, y: 1 }, pieces: [] })).toBeNull();
  });

  it('is as short as honestly possible: 9 symbols empty, ≤ 4 per piece', () => {
    expect(codeLength({ ball: { x: 0, y: 0 }, goal: { x: 0, y: 0 }, pieces: [] })).toBe(9);
    const rng = mulberry32(3);
    const full = randomBuild(rng, MACHINE_FREE_MAX_PIECES);
    expect(codeLength(full)).toBeLessThanOrEqual(9 + 4 * MACHINE_FREE_MAX_PIECES);
  });
});

describe('corrupted codes decode to null', () => {
  it('a single mistyped symbol is rejected', () => {
    const rng = mulberry32(99);
    let rejected = 0;
    let total = 0;
    for (let i = 0; i < 100; i++) {
      const b = randomBuild(rng, 1 + Math.floor(rng() * 8));
      const code = encodeMachine(b) as string;
      const body = code.slice(3);
      for (let k = 0; k < body.length; k++) {
        if (body[k] === '-') continue;
        const wrong = CODE_ALPHABET[(CODE_ALPHABET.indexOf(body[k]) + 1 + Math.floor(rng() * 31)) % 32];
        const mutated = `WB-${body.slice(0, k)}${wrong}${body.slice(k + 1)}`;
        total++;
        const d = decodeMachine(mutated);
        if (d === null) rejected++;
        else expect(d).not.toEqual(b); // never a silently wrong copy of the original
      }
    }
    // 15-bit checksum + range checks: essentially every typo is caught.
    expect(rejected / total).toBeGreaterThan(0.999);
  });

  it('truncated, swapped and garbage codes are rejected', () => {
    const code = encodeMachine(levelBuild(14)) as string;
    expect(decodeMachine(code.slice(0, -2))).toBeNull();
    expect(decodeMachine(`${code}A`)).toBeNull();
    const body = code.slice(3).replace(/-/g, '');
    const swapped = body.slice(0, 5) + body[6] + body[5] + body.slice(7);
    if (swapped !== body) expect(decodeMachine(swapped)).toBeNull();
    expect(decodeMachine('WB-HELLO-WORLD')).toBeNull();
    expect(decodeMachine('WB-1234-5678-9ABC')).toBeNull();
    expect(decodeMachine('')).toBeNull();
    expect(decodeMachine('WB')).toBeNull();
  });
});
