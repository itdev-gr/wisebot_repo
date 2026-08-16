---
name: wisebot-review
description: Review WiseBot changes against the failure modes this codebase actually produces — React hook dependency/stale-closure bugs, null crashes, credit double-charging, unauthenticated API endpoints, hardcoded Greek/English strings, and cost constants drifting from EconomyContext. Use before committing any change to components/, context/, or api/, and whenever asked to review, audit, or check WiseBot code.
---

# WiseBot review checklist

`AUDIT-BUGS.md` records ~38 real bugs found in this project. They are not random — they
cluster into six repeating shapes. Check the ones that apply to the changed files. Report
findings with `file:line`, and say plainly when a category does not apply.

## 1. React hook dependencies (the single biggest source)

At least eight audited bugs were dependency-array mistakes: H3, CS1, CTX3, CTX4, D1, B4, H1.
There is **no ESLint in this project**, so nothing catches these automatically. You are the
linter.

For every `useEffect`, `useMemo`, `useCallback` you touch or read:

- Does the body reference a value absent from the deps array? That value is frozen at first
  render. `CTX3` shipped with `costs` in a `useMemo` with `[]` deps — badge discounts were
  entirely dead for months.
- Does an effect depend on an **object or array** identity (`[hero]`, `[resultLogo]`)? It
  re-fires on every render that recreates the object. Under React 19 StrictMode this
  double-fires in dev and, if the effect spends credits or calls an API, double-charges the
  user (`H1`, `B4`). Depend on a primitive (`hero.id`, `hero.name`) or guard with a ref.
- Is there a "safety timeout" that calls `setStep(...)` regardless of in-flight state? Two
  bugs (`H2`, `B2`) came from exactly this. A timeout that fires while a request is pending
  must check a ref and bail, not force the UI forward.

## 2. Null and undefined

`strict` is **off** in `tsconfig.json`, so TypeScript does not flag possibly-undefined access.
`C1` was a hard crash on `selectedHero.avatar.startsWith(...)` where `avatar` was undefined.

Treat anything from Supabase, the AI endpoints, or `localStorage` as possibly missing. Use
`?.` and default values. Do not trust a type annotation to mean the value is present at
runtime — with strict off, the compiler never checked.

## 3. Credits and economy

Money-adjacent, and the audit found five separate defects here. See the `wisebot-credits`
skill for the full rules. At minimum:

- `spendCredits(amount)` is **synchronous** and returns `boolean` (`context/EconomyContext.tsx:533`).
  Its return value must be checked before doing the paid work. `B3` ignored it entirely.
- It takes **one** argument. `CTX1` passed a second action string that was silently dropped.
- The server also deducts via `deductCredits` (`api/_lib/auth.ts:122`). Client and server must
  not both charge for one action.
- Never merge local and cloud credits with `Math.max` — `CTX5` let users undo spending by
  signing in from a stale device.

## 4. API endpoint auth

Every handler under `api/` must resolve a user before doing work. `API1` and `API2` shipped
status and Stripe endpoints with no auth at all. Follow the `wisebot-api-endpoint` skill.

Check: `getAuthUser` called and null-checked, rate limit applied, CORS via
`resolveCorsOrigin`, admin routes via `verifyAdminToken`, and `maxDuration` declared in
`vercel.json` for anything slow.

## 5. Hardcoded language strings

The app is Greek and English. `CTX8`, `CTX9`, `CTX10` each shipped a user-facing string
locked to one language. UI text goes through `UI_TEXT[lang]` (see `constants.tsx`, used as
`const t = UI_TEXT[lang]`). Any new visible string that is a bare Greek or English literal is
a bug.

## 6. Constants drift

`CTX11` and `CTX12` were comments and UI copy claiming credit costs that no longer matched
`EconomyContext`. If you change a cost, grep for the old number across `constants.tsx`,
component copy, and comments. The number a child sees must equal the number actually charged.

## Reporting

Rank by real user impact: a double credit charge or an unauthenticated financial endpoint
outranks a mispositioned icon. For each finding give the file, the line, the concrete failure
(inputs → wrong result), and the fix. If you verified a category and it is clean, say so —
that is useful information, not filler.
