/**
 * Η ΜΗΧΑΝΗ ΤΟΥ SPARKEN — the physics, pure (no React, no library, no clock).
 * ========================================================================
 * ONE ball, fixed timestep (1/120 s), an integer number of steps. Everything
 * is a plain number: no Date.now(), no Math.random(). The same level always
 * produces the identical trajectory — that is what makes the 60 fps replay
 * (rendered from the precomputed trace, never simulated in the render loop)
 * and the shared level codes work: a friend's phone runs the same machine.
 *
 * World: `MACHINE_WORLD.w` × `MACHINE_WORLD.h` units, y DOWN (screen
 * coordinates), one unit = one grid cell. Left/right walls are solid, the top
 * is open, and falling out of the bottom ends the run.
 *
 * The six tools:
 *   ramp        segment, low restitution, a little friction (the ball rolls)
 *   trampoline  segment, restitution > 1 with a minimum launch (sends higher)
 *   fan         non-solid region that pushes the ball along its direction
 *   domino      standing stick; a hit topples it, it sweeps the ball and the
 *               next domino in its row (chain), then lies flat
 *   magnet      radial pull inside a radius, small solid body
 *   goal        the target — the run succeeds when the ball reaches it
 *
 * Collision order is fixed (walls, then pieces in level order), so the result
 * cannot depend on iteration order of anything unordered.
 */
import {
  MACHINE_WORLD,
  type FanDir,
  type MachineBuild,
  type MachinePiece,
} from '../../data/games/machine';

/* ────────────────────────────── constants ─────────────────────────────── */

export const DT = 1 / 120;
/** Steps per second of sim time. */
export const STEPS_PER_SEC = 120;
/** 20 s of sim time. */
export const MAX_STEPS = 20 * STEPS_PER_SEC;
/** Every 2nd step is sampled → 60 frames per second of replay. */
export const SAMPLE_EVERY = 2;

export const BALL_R = 0.7;
export const GRAVITY = 30;
export const MAX_SPEED = 60;
export const WALL_E = 0.35;

export const RAMP = { len: 6, e: 0.15, friction: 0.004, restEps: 1.2 } as const;
export const TRAMPOLINE = { len: 4, e: 1.1, minLaunch: 13, maxLaunch: 36, friction: 0, restEps: 0 } as const;
export const FAN = { len: 9, halfW: 3, accel: 80, windMax: 16 } as const;
/** A domino stands on its base at (x, y + baseDy) and reaches h above it. */
export const DOMINO = { h: 3, baseDy: 1, omega: 7, toppleSpeed: 1.5, keep: 0.85, e: 0.3, friction: 0.004, restEps: 1.2 } as const;
export const MAGNET = { pullR: 8, accel: 32, bodyR: 0.9, e: 0.3, restEps: 1.0 } as const;
export const GOAL_R = 1.6;

/** Ball slower than this for this many steps → the run is over ('stuck'). */
const STUCK_SPEED = 0.15;
const STUCK_STEPS = 90;

/** Ramp/trampoline rotation steps of 22.5° (16 steps = full turn). */
export const ROT_STEPS = 16;

/* ──────────────────────────────── types ───────────────────────────────── */

export type SimLevel = MachineBuild;

export type EndReason = 'goal' | 'fell' | 'stuck' | 'timeout';

export interface SimResult {
  reachedGoal: boolean;
  endReason: EndReason;
  /** Steps actually simulated. */
  steps: number;
  /** Ball centre every `SAMPLE_EVERY` steps (frame 0 = the start). */
  trace: [number, number][];
  /** Domino angle (rad, + = tip to the right) per domino, per trace frame. */
  dominoes: number[][];
}

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface DominoState {
  x: number;
  /** Pivot (base) y. */
  baseY: number;
  /** 0 upright; grows toward ±π/2. */
  theta: number;
  /** 0 standing, +1 falling right, −1 falling left. */
  dir: number;
}

/* ─────────────────────────────── geometry ─────────────────────────────── */

export function rotAngle(rot: number): number {
  return ((rot % ROT_STEPS) + ROT_STEPS) % ROT_STEPS * (Math.PI * 2 / ROT_STEPS);
}

/** Endpoints of a ramp/trampoline segment. */
export function segmentOf(p: MachinePiece): [number, number, number, number] {
  const len = p.type === 'trampoline' ? TRAMPOLINE.len : RAMP.len;
  const a = rotAngle(p.rot);
  const dx = Math.cos(a) * len / 2;
  const dy = Math.sin(a) * len / 2;
  return [p.x - dx, p.y - dy, p.x + dx, p.y + dy];
}

export function fanVector(dir: FanDir): [number, number] {
  switch (dir) {
    case 1: return [0, -1];
    case 2: return [-1, 0];
    case 3: return [0, 1];
    default: return [1, 0];
  }
}

/** Domino tip for a given angle (base at (x, baseY)). */
export function dominoTip(x: number, baseY: number, theta: number): [number, number] {
  return [x + Math.sin(theta) * DOMINO.h, baseY - Math.cos(theta) * DOMINO.h];
}

/* ─────────────────────────────── collision ────────────────────────────── */

interface Surface {
  e: number;
  friction: number;
  restEps: number;
  minLaunch: number;
  maxLaunch: number;
}

/**
 * Circle vs segment AB. Pushes the ball out and reflects the normal velocity.
 * `omega` + pivot (A) give the segment's own motion (a falling domino), so the
 * ball picks up the surface speed at the contact point.
 * Returns the contact normal and the relative normal speed (for toppling).
 * Rolling friction is the caller's (once per step, see `simulate`).
 */
function collideSegment(
  b: Ball,
  ax: number, ay: number, bx: number, by: number,
  s: Surface,
  omega = 0,
): { hit: boolean; nx: number; ny: number; vn: number } {
  const dx = bx - ax;
  const dy = by - ay;
  const len2 = dx * dx + dy * dy;
  let t = len2 > 0 ? ((b.x - ax) * dx + (b.y - ay) * dy) / len2 : 0;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const cx = ax + t * dx;
  const cy = ay + t * dy;
  let nx = b.x - cx;
  let ny = b.y - cy;
  const d = Math.sqrt(nx * nx + ny * ny);
  if (d >= BALL_R) return { hit: false, nx: 0, ny: 0, vn: 0 };
  if (d < 1e-9) {
    // Dead centre on the line: push back the way the ball came.
    const len = Math.sqrt(len2) || 1;
    nx = -dy / len;
    ny = dx / len;
    if (b.vx * nx + b.vy * ny > 0) {
      nx = -nx;
      ny = -ny;
    }
  } else {
    nx /= d;
    ny /= d;
  }
  b.x += nx * (BALL_R - d);
  b.y += ny * (BALL_R - d);

  // Surface velocity at the contact point (rotation about A).
  const rx = cx - ax;
  const ry = cy - ay;
  const sx = omega * -ry;
  const sy = omega * rx;

  const rvx = b.vx - sx;
  const rvy = b.vy - sy;
  const vn = rvx * nx + rvy * ny;
  if (vn < 0) {
    let bounce = -vn * s.e;
    if (bounce < s.restEps) bounce = 0;
    if (bounce < s.minLaunch) bounce = s.minLaunch;
    if (bounce > s.maxLaunch) bounce = s.maxLaunch;
    const tx = rvx - vn * nx;
    const ty = rvy - vn * ny;
    b.vx = tx + nx * bounce + sx;
    b.vy = ty + ny * bounce + sy;
  }
  return { hit: true, nx, ny, vn };
}

function collideCircle(b: Ball, cx: number, cy: number, r: number, s: Surface): boolean {
  let nx = b.x - cx;
  let ny = b.y - cy;
  const d = Math.sqrt(nx * nx + ny * ny);
  const minD = r + BALL_R;
  if (d >= minD) return false;
  if (d < 1e-9) {
    nx = 0;
    ny = -1;
  } else {
    nx /= d;
    ny /= d;
  }
  b.x += nx * (minD - d);
  b.y += ny * (minD - d);
  const vn = b.vx * nx + b.vy * ny;
  if (vn < 0) {
    let bounce = -vn * s.e;
    if (bounce < s.restEps) bounce = 0;
    const tx = b.vx - vn * nx;
    const ty = b.vy - vn * ny;
    b.vx = tx + nx * bounce;
    b.vy = ty + ny * bounce;
  }
  return true;
}

const RAMP_SURFACE: Surface = { e: RAMP.e, friction: RAMP.friction, restEps: RAMP.restEps, minLaunch: 0, maxLaunch: MAX_SPEED };
const TRAMP_SURFACE: Surface = { e: TRAMPOLINE.e, friction: TRAMPOLINE.friction, restEps: TRAMPOLINE.restEps, minLaunch: TRAMPOLINE.minLaunch, maxLaunch: TRAMPOLINE.maxLaunch };
const DOMINO_SURFACE: Surface = { e: DOMINO.e, friction: DOMINO.friction, restEps: DOMINO.restEps, minLaunch: 0, maxLaunch: MAX_SPEED };
const MAGNET_SURFACE: Surface = { e: MAGNET.e, friction: 0, restEps: MAGNET.restEps, minLaunch: 0, maxLaunch: MAX_SPEED };

/* ─────────────────────────────── the sim ──────────────────────────────── */

/**
 * Run the machine. Pure and deterministic: same level → same result, always.
 * `maxSteps` is an integer step count (default 20 s of sim time).
 */
export function simulate(level: SimLevel, maxSteps: number = MAX_STEPS, sampleEvery: number = SAMPLE_EVERY): SimResult {
  const W = MACHINE_WORLD.w;
  const H = MACHINE_WORLD.h;
  const b: Ball = { x: level.ball.x, y: level.ball.y, vx: 0, vy: 0 };
  const pieces = level.pieces;

  // Pre-resolved geometry, in level order.
  const segs: { ax: number; ay: number; bx: number; by: number; s: Surface }[] = [];
  const fans: { x: number; y: number; dx: number; dy: number }[] = [];
  const magnets: { x: number; y: number }[] = [];
  const doms: DominoState[] = [];
  for (const p of pieces) {
    if (p.type === 'ramp' || p.type === 'trampoline') {
      const [ax, ay, bx, by] = segmentOf(p);
      segs.push({ ax, ay, bx, by, s: p.type === 'ramp' ? RAMP_SURFACE : TRAMP_SURFACE });
    } else if (p.type === 'fan') {
      const [dx, dy] = fanVector((((p.rot % 4) + 4) % 4) as FanDir);
      fans.push({ x: p.x, y: p.y, dx, dy });
    } else if (p.type === 'magnet') {
      magnets.push({ x: p.x, y: p.y });
    } else if (p.type === 'domino') {
      doms.push({ x: p.x, baseY: p.y + DOMINO.baseDy, theta: 0, dir: 0 });
    }
  }

  const trace: [number, number][] = [];
  const domTrace: number[][] = [];
  const sample = () => {
    trace.push([b.x, b.y]);
    domTrace.push(doms.map((d) => d.theta));
  };
  sample();

  let reachedGoal = false;
  let endReason: EndReason = 'timeout';
  let stuckFor = 0;
  let steps = 0;
  const gx = level.goal.x;
  const gy = level.goal.y;

  for (steps = 1; steps <= maxSteps; steps++) {
    /* forces */
    b.vy += GRAVITY * DT;
    for (const f of fans) {
      const px = b.x - f.x;
      const py = b.y - f.y;
      const along = px * f.dx + py * f.dy;
      const across = px * -f.dy + py * f.dx;
      if (along >= 0 && along <= FAN.len && across >= -FAN.halfW && across <= FAN.halfW) {
        if (b.vx * f.dx + b.vy * f.dy < FAN.windMax) {
          b.vx += f.dx * FAN.accel * DT;
          b.vy += f.dy * FAN.accel * DT;
        }
      }
    }
    for (const m of magnets) {
      const px = m.x - b.x;
      const py = m.y - b.y;
      const d = Math.sqrt(px * px + py * py);
      if (d < MAGNET.pullR && d > 1e-6) {
        b.vx += (px / d) * MAGNET.accel * DT;
        b.vy += (py / d) * MAGNET.accel * DT;
      }
    }
    const sp = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    if (sp > MAX_SPEED) {
      b.vx *= MAX_SPEED / sp;
      b.vy *= MAX_SPEED / sp;
    }

    /* integrate */
    b.x += b.vx * DT;
    b.y += b.vy * DT;

    /* dominoes rotate */
    for (const d of doms) {
      if (d.dir !== 0) {
        d.theta += d.dir * DOMINO.omega * DT;
        if (d.theta > Math.PI / 2) d.theta = Math.PI / 2;
        if (d.theta < -Math.PI / 2) d.theta = -Math.PI / 2;
      }
    }
    // Chain: a falling domino's tip reaches the next standing one in its row.
    for (const d of doms) {
      if (d.dir === 0) continue;
      const reach = Math.abs(Math.sin(d.theta)) * DOMINO.h;
      for (const o of doms) {
        if (o === d || o.dir !== 0) continue;
        if (Math.abs(o.baseY - d.baseY) > 1) continue;
        const gap = (o.x - d.x) * d.dir;
        if (gap > 0 && gap <= DOMINO.h && reach >= gap - 0.2) o.dir = d.dir;
      }
    }

    /* walls */
    if (b.x < BALL_R) {
      b.x = BALL_R;
      if (b.vx < 0) b.vx = -b.vx * WALL_E;
    } else if (b.x > W - BALL_R) {
      b.x = W - BALL_R;
      if (b.vx > 0) b.vx = -b.vx * WALL_E;
    }

    /* pieces — rolling friction is applied ONCE per step (the strongest
       surface touched), so overlapping segments do not multiply it. */
    let friction = 0;
    for (const s of segs) {
      if (collideSegment(b, s.ax, s.ay, s.bx, s.by, s.s).hit && s.s.friction > friction) friction = s.s.friction;
    }
    for (const d of doms) {
      const [tx, ty] = dominoTip(d.x, d.baseY, d.theta);
      const falling = d.dir !== 0 && Math.abs(d.theta) < Math.PI / 2;
      if (falling) {
        // The flat segment it will lie on is solid from the moment it topples,
        // so the ball that knocked it over is never left without a floor.
        const [fx, fy] = dominoTip(d.x, d.baseY, d.dir * Math.PI / 2);
        if (collideSegment(b, d.x, d.baseY, fx, fy, DOMINO_SURFACE).hit && DOMINO_SURFACE.friction > friction) friction = DOMINO_SURFACE.friction;
        // A falling domino moves away from whatever is behind it: no contact
        // there. In front of it, the sweep kicks the ball (the nudge).
        if ((b.x - d.x) * d.dir < 0) continue;
      }
      const vx0 = b.vx;
      const vy0 = b.vy;
      const r = collideSegment(b, d.x, d.baseY, tx, ty, DOMINO_SURFACE, falling ? d.dir * DOMINO.omega : 0);
      if (r.hit && DOMINO_SURFACE.friction > friction) friction = DOMINO_SURFACE.friction;
      if (r.hit && d.dir === 0 && r.vn <= -DOMINO.toppleSpeed && Math.abs(r.nx) > 0.3) {
        // A fast enough side hit topples it away from the ball; the ball
        // keeps most of its speed and pushes through (the row becomes a bridge).
        d.dir = r.nx < 0 ? 1 : -1;
        b.vx = vx0 * DOMINO.keep;
        b.vy = vy0 * DOMINO.keep;
      }
    }
    for (const m of magnets) collideCircle(b, m.x, m.y, MAGNET.bodyR, MAGNET_SURFACE);
    if (friction > 0) {
      b.vx *= 1 - friction;
      b.vy *= 1 - friction;
    }

    /* end conditions */
    const ex = b.x - gx;
    const ey = b.y - gy;
    if (ex * ex + ey * ey < GOAL_R * GOAL_R) {
      reachedGoal = true;
      endReason = 'goal';
    } else if (b.y > H + 3) {
      endReason = 'fell';
    } else {
      const v = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
      stuckFor = v < STUCK_SPEED ? stuckFor + 1 : 0;
      if (stuckFor >= STUCK_STEPS) endReason = 'stuck';
    }
    const done = reachedGoal || endReason !== 'timeout';
    if (done || steps % sampleEvery === 0) sample();
    if (done) break;
  }
  if (steps > maxSteps) steps = maxSteps;

  return { reachedGoal, endReason, steps, trace, dominoes: domTrace };
}

/** Final ball position of a run (for tests and level design). */
export function finalPosition(r: SimResult): [number, number] {
  return r.trace[r.trace.length - 1];
}
