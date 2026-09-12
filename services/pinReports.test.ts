// @vitest-environment jsdom

/**
 * What a «Λάθος σημείο» report may contain, and what it may never contain.
 *
 * The second half matters more than the first. A parent files this while standing at the
 * place, so their position is the most tempting field in the product and the one thing
 * brief §28 forbids storing. These tests pin the shape that reaches Supabase.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

interface InsertedRow {
  place_id: string;
  reason: string;
  user_id: string | null;
}

const insert = vi.fn<(row: InsertedRow) => Promise<{ error: { message: string } | null }>>(() =>
  Promise.resolve({ error: null }),
);
const getSession = vi.fn<() => Promise<{ data: { session: { user: { id: string } } | null } }>>(() =>
  Promise.resolve({ data: { session: null } }),
);

/** The row the service handed to Supabase on call `n`. */
const rowAt = (n: number): InsertedRow => {
  const call = insert.mock.calls[n];
  if (!call) throw new Error(`insert was not called ${n + 1} time(s)`);
  return call[0];
};

vi.mock('./supabaseClient', () => ({
  supabase: {
    from: () => ({ insert }),
    auth: { getSession: () => getSession() },
  },
  isSupabaseConfigured: () => true,
}));

const { PIN_REPORT_REASONS, alreadyReported, reportWrongPin } = await import('./pinReports');

beforeEach(() => {
  insert.mockClear();
  getSession.mockClear();
  localStorage.clear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('what is sent', () => {
  it('sends the place, the reason and the user — and nothing else', async () => {
    await reportWrongPin('rome-colosseo', 'entrance');
    expect(insert).toHaveBeenCalledTimes(1);
    expect(Object.keys(rowAt(0)).sort()).toEqual(['place_id', 'reason', 'user_id']);
  });

  it('never sends a coordinate, an accuracy, a time or free text', async () => {
    await reportWrongPin('rome-colosseo', 'gone');
    const payload = JSON.stringify(rowAt(0));
    for (const forbidden of ['lat', 'lng', 'accuracy', 'coords', 'note', 'text', 'message', 'at']) {
      expect(payload).not.toContain(forbidden);
    }
  });

  it('files anonymously when there is no session', async () => {
    await reportWrongPin('rome-colosseo', 'wrong');
    expect(rowAt(0).user_id).toBeNull();
  });

  it('files as the parent when there is one', async () => {
    getSession.mockResolvedValueOnce({ data: { session: { user: { id: 'u-1' } } } });
    await reportWrongPin('rome-colosseo', 'wrong');
    expect(rowAt(0).user_id).toBe('u-1');
  });
});

describe('what is refused', () => {
  it('has exactly three reasons', () => {
    expect(PIN_REPORT_REASONS).toEqual(['entrance', 'wrong', 'gone']);
  });

  it('refuses a reason that is not one of the three', async () => {
    await reportWrongPin('rome-colosseo', 'other' as never);
    expect(insert).not.toHaveBeenCalled();
  });

  it('refuses a place id the table would reject anyway', async () => {
    for (const bad of ['', 'rome', 'Rome-Colosseo', 'rome colosseo', 'rome--', 'x'.repeat(130)]) {
      await reportWrongPin(bad, 'wrong');
    }
    expect(insert).not.toHaveBeenCalled();
  });
});

describe('one report per place per device', () => {
  it('remembers a place that was reported', async () => {
    expect(alreadyReported('rome-colosseo')).toBe(false);
    await reportWrongPin('rome-colosseo', 'entrance');
    expect(alreadyReported('rome-colosseo')).toBe(true);
    expect(alreadyReported('rome-pantheon')).toBe(false);
  });

  it('remembers even when the send failed, so nobody is asked to repeat themselves', async () => {
    insert.mockResolvedValueOnce({ error: { message: 'offline' } });
    expect(await reportWrongPin('paris-louvre', 'gone')).toBe(false);
    expect(alreadyReported('paris-louvre')).toBe(true);
  });

  it('does not throw when storage is blocked', async () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    await expect(reportWrongPin('london-tower', 'wrong')).resolves.toBe(true);
  });
});
