/**
 * Render tests for «Δωμάτιο Απόδρασης».
 *
 * 1. The observe pictures: the DOM really contains exactly as many shapes as
 *    each answer says (the research spec asks for this renderer count).
 * 2. Room 1, played end to end in Greek with its own stated answers — with a
 *    wrong answer and a double tap on the last «ΑΝΟΙΞΕ ΤΗΝ ΠΟΡΤΑ» thrown in —
 *    escapes once and grants XP once.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { ESCAPE_COPY, ESCAPE_ROOMS, ESCAPE_STORAGE_KEY } from '../../data/games/escape';

const grants = vi.hoisted(() => ({ calls: [] as Array<{ key: string; tier: number }> }));

vi.mock('../../context/EconomyContext', () => ({
  useEconomy: () => ({ earnXp: () => {}, showNotification: () => {} }),
}));

vi.mock('./gameRewards', () => ({
  grantGameReward: (key: string, tier: number) => {
    grants.calls.push({ key, tier });
    return tier * 10;
  },
}));

import EscapeRoom, { ObservePicture } from './EscapeRoom';

beforeEach(() => {
  cleanup();
  grants.calls.length = 0;
  localStorage.removeItem(ESCAPE_STORAGE_KEY);
});

describe('ObservePicture', () => {
  it('draws exactly the counted shapes each observe answer states', () => {
    for (const room of ESCAPE_ROOMS) {
      const p = room.puzzles[3];
      const { container, unmount } = render(<ObservePicture image={p.image!} overlay={p.overlay!} label="x" />);
      const counted = container.querySelectorAll(`path[data-shape="${p.overlay!.counts}"]`).length;
      expect(counted, room.id).toBe(Number(p.answerEl));
      expect(container.querySelectorAll('path[data-shape]').length, room.id).toBe(p.overlay!.groups.reduce((s, g) => s + g.at.length, 0));
      expect(container.querySelectorAll('rect').length, room.id).toBe(p.overlay!.panel ? 1 : 0);
      unmount();
    }
  });
});

describe('EscapeRoom — room 1 end to end', () => {
  it('escapes with the stated answers, shakes on a wrong one, grants XP once', async () => {
    const t = ESCAPE_COPY.el;
    const room = ESCAPE_ROOMS[0];
    render(<EscapeRoom lang="el" onBack={() => {}} />);

    fireEvent.click(await screen.findByText(room.titleEl));
    fireEvent.click(await screen.findByText(t.start));

    for (let i = 0; i < room.puzzles.length; i++) {
      const p = room.puzzles[i];
      await screen.findByText(t.puzzleOf(i + 1, room.puzzles.length));
      if (p.answerType === 'choice') {
        if (i === 0) {
          fireEvent.click(screen.getByRole('button', { name: p.optionsEl!.find((o) => o !== p.answerEl)! }));
          expect(await screen.findByText(t.notYet)).toBeTruthy();
        }
        fireEvent.click(screen.getByRole('button', { name: p.answerEl }));
      } else {
        for (const d of p.answerEl) fireEvent.click(screen.getByRole('button', { name: d }));
        fireEvent.click(screen.getAllByRole('button', { name: t.check })[0]);
      }
      await screen.findByText(t.correct);
      const nextLabel = i === room.puzzles.length - 1 ? t.openDoor : t.next;
      const btn = screen.getByRole('button', { name: new RegExp(nextLabel) });
      fireEvent.click(btn);
      fireEvent.click(btn); // the double tap the exit tween allows
    }

    await screen.findByText(t.escapedTitle);
    await waitFor(() => expect(grants.calls).toEqual([{ key: 'escape', tier: room.xpTier }]));
    const saved = JSON.parse(localStorage.getItem(ESCAPE_STORAGE_KEY) ?? '{}');
    expect(saved.rooms[room.id].escapes).toBe(1);
  });
});
