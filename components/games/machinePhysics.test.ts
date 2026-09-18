/**
 * Tests for the «Μηχανή» physics: determinism, each tool's defining
 * behaviour, and — the headline guarantee — that every shipped level is
 * solved by its stored reference solution and NOT by the empty board.
 */
import { describe, it, expect } from 'vitest';
import {
  MACHINE_LEVELS,
  MACHINE_TOOLS,
  MACHINE_WORLD,
  type MachineBuild,
  type MachinePiece,
  type MachineTool,
} from '../../data/games/machine';
import {
  BALL_R,
  DOMINO,
  MAX_STEPS,
  SAMPLE_EVERY,
  finalPosition,
  simulate,
} from './machinePhysics';

const P = (type: MachineTool, x: number, y: number, rot = 0): MachinePiece => ({ type, x, y, rot });
const FAR = { x: -50, y: -50 };
const build = (ball: { x: number; y: number }, pieces: MachinePiece[], goal = FAR): MachineBuild => ({ ball, goal, pieces });

describe('determinism', () => {
  it('two runs of the same machine produce the identical trace', () => {
    const L = MACHINE_LEVELS[MACHINE_LEVELS.length - 1];
    const lvl = { ball: L.ball, goal: L.goal, pieces: [...L.fixed, ...L.solution] };
    const a = simulate(lvl);
    const b = simulate(lvl);
    expect(a.steps).toBe(b.steps);
    expect(a.endReason).toBe(b.endReason);
    expect(a.trace).toEqual(b.trace);
    expect(a.dominoes).toEqual(b.dominoes);
  });

  it('runs an integer number of fixed steps and stops at the cap', () => {
    // A ball on a flat trampoline hops forever: the cap is the only end.
    const r = simulate(build({ x: 16, y: 4 }, [P('trampoline', 16, 20, 0)]));
    expect(r.endReason).toBe('timeout');
    expect(r.reachedGoal).toBe(false);
    expect(r.steps).toBe(MAX_STEPS);
    expect(r.trace.length).toBe(MAX_STEPS / SAMPLE_EVERY + 1);
  });

  it('the trace starts at the ball start', () => {
    const r = simulate(build({ x: 6, y: 4 }, []));
    expect(r.trace[0]).toEqual([6, 4]);
    expect(r.endReason).toBe('fell');
  });
});

describe('tools', () => {
  it('a ball dropped on a flat ramp settles on it', () => {
    const r = simulate(build({ x: 16, y: 4 }, [P('ramp', 16, 12, 0)]));
    expect(r.endReason).toBe('stuck');
    const [x, y] = finalPosition(r);
    expect(x).toBeCloseTo(16, 5);
    expect(y).toBeCloseTo(12 - BALL_R, 1);
  });

  it('a trampoline sends the ball higher than it fell', () => {
    const start = 4;
    const r = simulate(build({ x: 16, y: start }, [P('trampoline', 16, 20, 0)]));
    const highest = Math.min(...r.trace.map((p) => p[1]));
    expect(highest).toBeLessThan(start); // y is down: smaller = higher
    // and it never goes sideways off a flat trampoline
    expect(r.trace.every((p) => Math.abs(p[0] - 16) < 1e-9)).toBe(true);
  });

  it('a fan pushes the ball sideways', () => {
    const withoutFan = simulate(build({ x: 5, y: 4 }, [P('ramp', 6, 12, 0)]));
    const withFan = simulate(build({ x: 5, y: 4 }, [P('ramp', 6, 12, 0), P('fan', 2, 12, 0)]));
    expect(withoutFan.endReason).toBe('stuck');
    expect(finalPosition(withoutFan)[0]).toBeCloseTo(5, 5);
    expect(finalPosition(withFan)[0]).toBeGreaterThan(20);
  });

  it('a magnet pulls the ball toward it', () => {
    const free = simulate(build({ x: 8, y: 4 }, []));
    const pulled = simulate(build({ x: 8, y: 4 }, [P('magnet', 13, 12, 0)]));
    expect(finalPosition(free)[0]).toBeCloseTo(8, 5);
    expect(finalPosition(pulled)[0]).toBeGreaterThan(8 + 5);
  });

  it('a domino row falls when hit and becomes a bridge the ball crosses', () => {
    const fixed = [P('ramp', 6, 10, 2), P('ramp', 12, 14, 0)];
    const row = [P('domino', 15, 13, 0), P('domino', 17, 13, 0), P('domino', 19, 13, 0)];
    const r = simulate(build({ x: 4, y: 4 }, [...fixed, ...row]));
    const last = r.dominoes[r.dominoes.length - 1];
    expect(last).toHaveLength(3);
    for (const theta of last) expect(theta).toBeCloseTo(Math.PI / 2, 5); // all fell to the right
    // the row fell in order: the first domino is never behind the second
    for (const frame of r.dominoes) expect(frame[0]).toBeGreaterThanOrEqual(frame[1]);
    // the ball rolled across the fallen row (x beyond the last domino) at bridge height
    const crossed = r.trace.some(([x, y]) => x > 19 + DOMINO.h * 0.5 && Math.abs(y - (14 - BALL_R)) < 0.3);
    expect(crossed).toBe(true);
    // without the row the ball falls off the ramp end
    const none = simulate(build({ x: 4, y: 4 }, fixed));
    expect(none.trace.some(([x, y]) => x > 19 && Math.abs(y - (14 - BALL_R)) < 0.3)).toBe(false);
  });

  it('the goal ends the run', () => {
    const r = simulate({ ball: { x: 16, y: 4 }, goal: { x: 16, y: 12 }, pieces: [] });
    expect(r.reachedGoal).toBe(true);
    expect(r.endReason).toBe('goal');
    expect(r.steps).toBeLessThan(MAX_STEPS);
  });
});

describe('the 15 shipped levels', () => {
  it('ships exactly 15 levels numbered 1..15', () => {
    expect(MACHINE_LEVELS).toHaveLength(15);
    MACHINE_LEVELS.forEach((L, i) => expect(L.id).toBe(i + 1));
  });

  it('every level has el+en text and in-world positions', () => {
    for (const L of MACHINE_LEVELS) {
      expect(L.titleEl.length).toBeGreaterThan(0);
      expect(L.titleEn.length).toBeGreaterThan(0);
      expect(L.hintEl.length).toBeGreaterThan(0);
      expect(L.hintEn.length).toBeGreaterThan(0);
      for (const p of [L.ball, L.goal, ...L.fixed, ...L.solution]) {
        expect(Number.isInteger(p.x) && p.x >= 0 && p.x < MACHINE_WORLD.w).toBe(true);
        expect(Number.isInteger(p.y) && p.y >= 0 && p.y < MACHINE_WORLD.h).toBe(true);
      }
    }
  });

  it('every reference solution only uses what the toolbox offers', () => {
    for (const L of MACHINE_LEVELS) {
      const used: Partial<Record<MachineTool, number>> = {};
      for (const p of L.solution) used[p.type] = (used[p.type] ?? 0) + 1;
      for (const tool of MACHINE_TOOLS) {
        expect(used[tool] ?? 0, `level ${L.id} uses too many ${tool}`).toBeLessThanOrEqual(L.toolbox[tool] ?? 0);
      }
      expect(L.solution.length).toBeGreaterThan(0);
    }
  });

  for (const L of MACHINE_LEVELS) {
    it(`level ${L.id} «${L.titleEl}» is solved by its reference solution`, () => {
      const r = simulate({ ball: L.ball, goal: L.goal, pieces: [...L.fixed, ...L.solution] });
      expect(r.reachedGoal).toBe(true);
      expect(r.endReason).toBe('goal');
    });

    it(`level ${L.id} is NOT solved by the empty board`, () => {
      const r = simulate({ ball: L.ball, goal: L.goal, pieces: [...L.fixed] });
      expect(r.reachedGoal).toBe(false);
    });
  }
});
