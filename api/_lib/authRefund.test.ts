/**
 * refundCredits — the contract the status endpoints rely on:
 * null = definitively nothing to refund; a THROW = transient, retry next poll;
 * and the amount is what the charge row took, never today's COSTS.*.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

interface RefundState {
  charge: { data: any; error: any };
  earnError: any;
  selectCalls: number;
  earnCalls: number;
  earnAmounts: number[];
}

let state: RefundState;

const resetState = (over: Partial<RefundState> = {}) => {
  state = {
    charge: { data: null, error: null },
    earnError: null,
    selectCalls: 0,
    earnCalls: 0,
    earnAmounts: [],
    ...over,
  };
};

const chain = () => {
  const c: any = {
    eq: () => c,
    limit: () => c,
    maybeSingle: async () => {
      state.selectCalls++;
      return state.charge;
    },
  };
  return c;
};

const fakeSupabase = {
  from: () => ({ select: () => chain() }),
  rpc: async (_fn: string, args: any) => {
    state.earnCalls++;
    state.earnAmounts.push(args?.p_amount);
    return state.earnError ? { data: null, error: state.earnError } : { data: 42, error: null };
  },
};

vi.mock('@supabase/supabase-js', () => ({ createClient: () => fakeSupabase }));

const refund = async (spendAction: string | null = 'CREATE_SONG') => {
  const { refundCredits } = await import('./auth');
  return refundCredits('u1', 60, 'REFUND_SONG', 'task-1', spendAction);
};

beforeEach(() => resetState());

describe('refundCredits ownership and amounts', () => {
  it('refunds exactly what the charge row took, not the amount passed in', async () => {
    resetState({ charge: { data: { id: 't1', amount: -45 }, error: null } });
    await expect(refund()).resolves.toBe(42);
    expect(state.earnAmounts).toEqual([45]); // charge said 45, caller said 60
  });

  it('no charge row for this user+task → null, and no credit is minted', async () => {
    await expect(refund()).resolves.toBeNull();
    expect(state.earnCalls).toBe(0);
  });

  it('transient error on the ownership check → THROWS (a null here would stop the polling client and lose a legit refund)', async () => {
    resetState({ charge: { data: null, error: { message: 'timeout' } } });
    await expect(refund()).rejects.toThrow();
    expect(state.earnCalls).toBe(0);
  });

  it('already refunded (earn 23505) → null, quietly', async () => {
    resetState({
      charge: { data: { id: 't1', amount: -60 }, error: null },
      earnError: { code: '23505', message: 'dup' },
    });
    await expect(refund()).resolves.toBeNull();
  });

  it('transient earn error → THROWS so the next poll retries', async () => {
    resetState({
      charge: { data: { id: 't1', amount: -60 }, error: null },
      earnError: { code: 'XX000', message: 'timeout' },
    });
    await expect(refund()).rejects.toThrow();
  });

  it('spendAction null (trusted caller) skips the ownership check and uses the passed amount', async () => {
    await expect(refund(null)).resolves.toBe(42);
    expect(state.selectCalls).toBe(0);
    expect(state.earnAmounts).toEqual([60]);
  });

  it('guests never refund', async () => {
    const { refundCredits } = await import('./auth');
    await expect(refundCredits('guest', 60, 'REFUND_SONG', 'task-1', 'CREATE_SONG')).resolves.toBeNull();
    expect(state.earnCalls).toBe(0);
  });
});

describe('taskBelongsToUser — the status endpoints ownership gate', () => {
  const belongs = async (userId = 'u1') => {
    const { taskBelongsToUser } = await import('./auth');
    return taskBelongsToUser(userId, 'CREATE_SONG', 'task-1');
  };

  it('true only when this user has the charge row', async () => {
    resetState({ charge: { data: { id: 't1' }, error: null } });
    await expect(belongs()).resolves.toBe(true);
  });

  it('no charge row → false (the endpoint 404s like a made-up id)', async () => {
    await expect(belongs()).resolves.toBe(false);
  });

  it('transient DB error → THROWS so the endpoint 500s and the next poll retries', async () => {
    resetState({ charge: { data: null, error: { message: 'timeout' } } });
    await expect(belongs()).rejects.toThrow();
  });

  it('guests own nothing', async () => {
    resetState({ charge: { data: { id: 't1' }, error: null } });
    await expect(belongs('guest')).resolves.toBe(false);
    expect(state.selectCalls).toBe(0);
  });
});
