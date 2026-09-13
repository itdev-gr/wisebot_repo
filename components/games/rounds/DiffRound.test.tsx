/**
 * The daily Difference Finder round: the generator has to be a pure function of
 * the seed (two children, same day, same four differences), and the component
 * has to report `{ correct, total }` exactly once however the round ends —
 * clock out, all found, or unmounted mid-round.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import DiffRound from './DiffRound';
import {
  buildDiffRound,
  DIFF_IMAGES,
  DIFF_SHAPES,
  DIFF_SPOT_COUNT,
  DIFF_JITTER,
} from '../../../data/games/rounds/diffRoundData';

/* ───────────────────────────── the generator ───────────────────────────── */

describe('buildDiffRound', () => {
  it('is deterministic — the same seed rebuilds the identical round', () => {
    for (const seed of [0, 1, 7, 12345, 0xdeadbeef, 4294967295]) {
      expect(buildDiffRound(seed)).toEqual(buildDiffRound(seed));
    }
  });

  it('gives different days different rounds', () => {
    const signatures = new Set<string>();
    for (let seed = 1; seed <= 40; seed++) {
      signatures.add(JSON.stringify(buildDiffRound(seed * 2654435761)));
    }
    // Not asking for 40 distinct rounds (the palette is finite), just that the
    // seed genuinely drives the output instead of a constant board.
    expect(signatures.size).toBeGreaterThan(30);
  });

  it('always asks for DIFF_SPOT_COUNT distinct differences on a shipped photo', () => {
    for (let seed = 0; seed < 60; seed++) {
      const { image, spots } = buildDiffRound(seed);
      expect(DIFF_IMAGES).toContain(image);
      expect(spots).toHaveLength(DIFF_SPOT_COUNT);
      expect(new Set(spots.map(s => s.id)).size).toBe(DIFF_SPOT_COUNT);
      // Distinct shapes, so two differences never read as the same puzzle.
      expect(new Set(spots.map(s => s.shape.key)).size).toBe(DIFF_SPOT_COUNT);
      spots.forEach(s => expect(DIFF_SHAPES).toContain(s.shape));
    }
  });

  it('keeps every marker inside the panel', () => {
    for (let seed = 0; seed < 60; seed++) {
      for (const spot of buildDiffRound(seed).spots) {
        expect(spot.x).toBeGreaterThanOrEqual(10);
        expect(spot.x).toBeLessThanOrEqual(90);
        expect(spot.y).toBeGreaterThanOrEqual(12);
        expect(spot.y).toBeLessThanOrEqual(88);
      }
    }
  });

  it('never lets two 48px touch targets overlap', () => {
    // Grid anchors are 32% apart horizontally and 28% vertically; jitter is
    // ±DIFF_JITTER on each, so the worst case is still a clean gap.
    const minX = 32 - 2 * DIFF_JITTER;
    const minY = 28 - 2 * DIFF_JITTER;
    for (let seed = 0; seed < 60; seed++) {
      const { spots } = buildDiffRound(seed);
      for (let i = 0; i < spots.length; i++) {
        for (let j = i + 1; j < spots.length; j++) {
          const dx = Math.abs(spots[i].x - spots[j].x);
          const dy = Math.abs(spots[i].y - spots[j].y);
          expect(dx >= minX || dy >= minY).toBe(true);
        }
      }
    }
  });

  it('never hides a difference as an invisible rotation', () => {
    // A circle, square or hexagon turned 180° is the same circle, square or
    // hexagon — those shapes must fall back to a colour swap.
    for (let seed = 0; seed < 200; seed++) {
      for (const spot of buildDiffRound(seed).spots) {
        if (spot.kind === 'rotate') expect(spot.shape.rotatable).toBe(true);
      }
    }
  });
});

/* ───────────────────────────── the component ───────────────────────────── */

const ROUND_MS = 30_000;

describe('<DiffRound />', () => {
  beforeEach(() => vi.useFakeTimers());
  // vitest runs without `globals`, so testing-library never registers its own
  // afterEach — without this, every render piles up in the same document.
  afterEach(() => { cleanup(); vi.useRealTimers(); });

  const advance = (ms: number) => act(() => { vi.advanceTimersByTime(ms); });
  /** A <span>, to skip the wrapper div that carries the same textContent. */
  const label = (text: string) => screen.getByText(text, { selector: 'span' });

  it('renders one touch target per difference, in Greek and in English', () => {
    const el = render(<DiffRound seed={99} ms={ROUND_MS} lang="el" onDone={() => {}} />);
    expect(label('ΒΡΕΣ ΤΙΣ ΔΙΑΦΟΡΕΣ')).toBeTruthy();
    expect(screen.getAllByRole('button')).toHaveLength(DIFF_SPOT_COUNT);
    expect(screen.getByLabelText(`Διαφορά 1 από ${DIFF_SPOT_COUNT}`)).toBeTruthy();
    el.unmount();

    render(<DiffRound seed={99} ms={ROUND_MS} lang="en" onDone={() => {}} />);
    expect(label('SPOT THE DIFFERENCES')).toBeTruthy();
    expect(screen.getByLabelText(`Difference 1 of ${DIFF_SPOT_COUNT}`)).toBeTruthy();
  });

  it('shows the same board twice for the same seed', () => {
    const first = render(<DiffRound seed={2026} ms={ROUND_MS} lang="en" onDone={() => {}} />);
    const boardA = first.container.innerHTML;
    first.unmount();
    const second = render(<DiffRound seed={2026} ms={ROUND_MS} lang="en" onDone={() => {}} />);
    expect(second.container.innerHTML).toBe(boardA);
  });

  it('counts down and reports 0 correct when nothing is found', () => {
    const onDone = vi.fn();
    render(<DiffRound seed={5} ms={ROUND_MS} lang="en" onDone={onDone} />);
    expect(label('30s')).toBeTruthy();

    advance(10_000);
    expect(label('20s')).toBeTruthy();
    expect(onDone).not.toHaveBeenCalled();

    advance(20_000);
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledWith({ correct: 0, total: DIFF_SPOT_COUNT });
  });

  it('counts each found difference once, and ignores a second tap on it', () => {
    const onDone = vi.fn();
    render(<DiffRound seed={5} ms={ROUND_MS} lang="en" onDone={onDone} />);
    const spots = screen.getAllByRole('button');

    fireEvent.click(spots[0]);
    fireEvent.click(spots[0]);
    fireEvent.click(spots[1]);
    expect(label(`2 / ${DIFF_SPOT_COUNT}`)).toBeTruthy();

    advance(ROUND_MS + 1000);
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledWith({ correct: 2, total: DIFF_SPOT_COUNT });
  });

  it('ends early once every difference is found', () => {
    const onDone = vi.fn();
    render(<DiffRound seed={5} ms={ROUND_MS} lang="el" onDone={onDone} />);
    screen.getAllByRole('button').forEach(b => fireEvent.click(b));

    expect(label('ΤΙΣ ΒΡΗΚΕΣ ΟΛΕΣ!')).toBeTruthy();
    expect(onDone).not.toHaveBeenCalled(); // short flourish first

    advance(1000);
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledWith({ correct: DIFF_SPOT_COUNT, total: DIFF_SPOT_COUNT });

    // The clock must not report a second time behind it.
    advance(ROUND_MS * 2);
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it('fires onDone exactly once when the clock runs out, however long we wait', () => {
    const onDone = vi.fn();
    render(<DiffRound seed={5} ms={ROUND_MS} lang="en" onDone={onDone} />);
    advance(ROUND_MS);
    advance(ROUND_MS * 5);
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it('leaves no timer behind after unmount', () => {
    const onDone = vi.fn();
    const { unmount } = render(<DiffRound seed={5} ms={ROUND_MS} lang="en" onDone={onDone} />);
    fireEvent.click(screen.getAllByRole('button')[0]);
    unmount();
    advance(ROUND_MS * 3);
    expect(onDone).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('shows missed-tap feedback without ending or scoring the round', () => {
    const onDone = vi.fn();
    const { container } = render(<DiffRound seed={5} ms={ROUND_MS} lang="en" onDone={onDone} />);
    const panels = container.querySelectorAll('.cursor-crosshair');
    fireEvent.click(panels[0]);
    expect(container.querySelector('.animate-ping')).toBeTruthy();
    expect(label(`0 / ${DIFF_SPOT_COUNT}`)).toBeTruthy();

    advance(600);
    expect(container.querySelector('.animate-ping')).toBeNull();
    expect(onDone).not.toHaveBeenCalled();
  });
});
