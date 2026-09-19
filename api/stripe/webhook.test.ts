/**
 * The Stripe webhook's money path, replayed the way Stripe actually replays it.
 * Each test is one delivery timeline; the assertions are about EXACTLY-ONCE
 * crediting: earn_credits' unique (user, PURCHASE, session) is the idempotency
 * key, a purchases row alone proves nothing, and nothing is ever deleted.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// ---- scriptable fakes -------------------------------------------------------

interface WebhookState {
  existing: boolean;            // does the purchases row already exist?
  insertError: any;             // error for the purchases insert, or null
  earnQueue: any[];             // per-earn_credits-call error, null = success
  inserts: number;
  deletes: number;
  earnCalls: number;
  earnAmounts: number[];
}

let state: WebhookState;

const resetState = (over: Partial<WebhookState> = {}) => {
  state = {
    existing: false,
    insertError: null,
    earnQueue: [],
    inserts: 0,
    deletes: 0,
    earnCalls: 0,
    earnAmounts: [],
    ...over,
  };
};

const benignRow = { data: null, error: null };

const fakeSupabase = {
  from(table: string) {
    if (table === 'purchases') {
      return {
        select: () => ({
          eq: () => ({
            maybeSingle: async () => ({ data: state.existing ? { id: 'p1' } : null, error: null }),
          }),
        }),
        insert: async () => {
          state.inserts++;
          return { error: state.insertError };
        },
        delete: () => ({
          eq: async () => {
            state.deletes++;
            return { error: null };
          },
        }),
      };
    }
    // profiles etc. — the referral/email blocks catch their own errors, so
    // benign nulls keep them quiet.
    return {
      select: () => ({
        eq: () => ({
          single: async () => benignRow,
          maybeSingle: async () => benignRow,
        }),
      }),
      update: () => ({ eq: async () => ({ error: null }) }),
      insert: async () => ({ error: null }),
    };
  },
  rpc: async (fn: string, args: any) => {
    if (fn !== 'earn_credits') return { data: null, error: null };
    const err = state.earnQueue.length ? state.earnQueue.shift() : null;
    state.earnCalls++;
    state.earnAmounts.push(args?.p_amount);
    return err ? { data: null, error: err } : { data: 42, error: null };
  },
};

vi.mock('@supabase/supabase-js', () => ({ createClient: () => fakeSupabase }));
vi.mock('stripe', () => ({
  default: class FakeStripe {
    webhooks = {
      constructEvent: () => ({
        type: 'checkout.session.completed',
        data: {
          object: {
            id: 'cs_test_1',
            metadata: { userId: 'u1', packId: 'starter', credits: '50' },
            amount_total: 499,
          },
        },
      }),
    };
  },
}));

const makeReq = () => ({
  method: 'POST',
  headers: { 'stripe-signature': 'sig', origin: 'https://wisebot.gr' },
  on(event: string, cb: (...a: any[]) => void) {
    if (event === 'end') setTimeout(() => cb(), 0);
    return this;
  },
});

const makeRes = () => {
  const res: any = { statusCode: 200, body: null };
  res.setHeader = () => res;
  res.status = (c: number) => ((res.statusCode = c), res);
  res.json = (b: any) => ((res.body = b), res);
  res.end = () => res;
  return res;
};

const deliver = async () => {
  const handler = (await import('./webhook')).default;
  const res = makeRes();
  await handler(makeReq(), res);
  return res;
};

beforeEach(() => {
  process.env.STRIPE_SECRET_KEY = 'sk_test';
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test';
  resetState();
});

// ---- the timelines ----------------------------------------------------------

describe('stripe webhook — exactly-once crediting under retries', () => {
  it('fresh delivery: row inserted, credited once, 200', async () => {
    const res = await deliver();
    expect(res.statusCode).toBe(200);
    expect(state.inserts).toBe(1);
    expect(state.earnCalls).toBe(1);
    expect(state.earnAmounts).toEqual([50]);
    expect(state.deletes).toBe(0);
  });

  it('retry after the response was lost BETWEEN insert and credit: the row exists but the ledger is empty — the retry must credit, not skip', async () => {
    resetState({ existing: true });
    const res = await deliver();
    expect(res.statusCode).toBe(200);
    expect(state.inserts).toBe(0);
    expect(state.earnCalls).toBe(1); // recovered: credits granted on the retry
  });

  it('retry after the response was lost AFTER the credit committed: ledger answers 23505 — 200 and the row is NOT deleted', async () => {
    resetState({ existing: true, earnQueue: [{ code: '23505', message: 'dup' }] });
    const res = await deliver();
    expect(res.statusCode).toBe(200);
    expect(state.deletes).toBe(0);
  });

  it('two concurrent deliveries: the insert loser (23505) still consults the ledger and does not double-credit', async () => {
    resetState({ insertError: { code: '23505', message: 'dup' }, earnQueue: [{ code: '23505', message: 'dup' }] });
    const res = await deliver();
    expect(res.statusCode).toBe(200);
    expect(state.earnCalls).toBe(1); // asked once, told "already"
    expect(state.deletes).toBe(0);
  });

  it('transient insert error: 500 so Stripe retries, and no credit was attempted', async () => {
    resetState({ insertError: { code: 'XX000', message: 'timeout' } });
    const res = await deliver();
    expect(res.statusCode).toBe(500);
    expect(state.earnCalls).toBe(0);
  });

  it('transient credit error: 500 so Stripe retries, and the purchases row is KEPT (deleting it was the old repeat-forever bug)', async () => {
    resetState({ earnQueue: [{ code: 'XX000', message: 'timeout' }] });
    const res = await deliver();
    expect(res.statusCode).toBe(500);
    expect(state.deletes).toBe(0);
  });
});
