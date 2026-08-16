---
name: wisebot-credits
description: Rules for any WiseBot code that spends, earns, syncs, or displays credits — the paid economy children's parents fund. Covers spendCredits' synchronous boolean contract, double-charge prevention under React 19 StrictMode, server-side deduction, cloud sync conflicts, and keeping displayed costs equal to charged costs. Use when touching context/EconomyContext.tsx, services/syncService.ts, CreditStore, or any feature that costs credits.
---

# WiseBot credit rules

Credits are bought with real money by parents and spent by children. Five separate audited
bugs lived here (`B3`, `CTX1`, `CTX3`, `CTX5`, `API3`). Every one of them either charged a
child twice or gave away paid features for free.

## The client contract

```ts
spendCredits: (amount: number) => boolean   // context/EconomyContext.tsx:533
```

**Synchronous. Returns boolean. Takes exactly one argument.**

- It is **not** a promise. Do not `await` it and do not treat it as async.
- Its return value is the permission to proceed. `B3` called it bare and continued even when
  the child had no credits.
- A second argument is silently discarded (`CTX1` passed an action string that went nowhere).
  To record an action, call `trackAction` separately.

```ts
if (!spendCredits(COST)) {
  showNotification(t.notEnoughCredits);
  return;
}
// paid work only after this point
```

## Never charge twice

React 19 StrictMode double-invokes effects in development, and an effect keyed on an object
identity re-fires in production too. `H1` and `B4` both double-charged this way.

- Never spend credits inside a `useEffect` that depends on an object or array.
- Guard one-shot paid work with a ref (`heroSavedRef` is the existing pattern), set **before**
  the async call, not after it resolves.
- A "Try Again" button that re-enters a paid step must charge again or be disabled — `H4`
  gave unlimited free retries from the error screen while the server billed every attempt.

## The server is the source of truth

The client balance is a display convenience. Real deduction happens in
`api/_lib/auth.ts`: `checkCredits(userId, cost)` then `deductCredits(userId, cost, action)`.

- Do not let the client be the only place a cost is enforced.
- Do not deduct in both places for one action.
- `API3` remains open: concurrent requests can duplicate or lose credits because there is no
  database-level lock. When you touch credit writes, prefer an atomic Postgres operation (an
  RPC doing a conditional `UPDATE ... WHERE credits >= cost RETURNING`) over read-then-write.

## Syncing local and cloud

`services/syncService.ts:121` used `Math.max(local.credits, cloud.credits)`. That meant
spending could be **undone** by signing in from a device with a stale balance — a free credit
generator.

Never merge balances by taking the larger. The cloud value wins, or a transaction log is
replayed. If you find `Math.max` near a balance, it is a bug.

## Displayed cost must equal charged cost

`CTX11` and `CTX12` shipped copy promising "50 credits" for something that charged 6. When a
cost changes, update every place it appears:

- `context/EconomyContext.tsx` — the real values, in the `costs` memo
- `constants.tsx` — user-facing copy in both `UI_TEXT` languages
- any comment describing the cost, which the audit found universally wrong

Grep the old number before you finish. A child who is told one price and charged another is a
support ticket from a parent.

## Badge discounts

`CTX3`: the `costs` memo had `[]` dependencies, so badge discounts never applied at all. If
you add a modifier to pricing, confirm the memo actually depends on the values it reads, and
verify the discount changes the number charged, not only the number shown.
