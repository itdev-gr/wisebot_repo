# WiseBot — Fix Plan

Ordered by value per hour of work. Written 15 Αυγούστου 2026 after a read-through of the
codebase, `AUDIT-BUGS.md`, and the build/tooling setup. Tick items as they land.

Rationale for the ordering: this repo has **no automated safety net at all** — no tests, no
linter, no CI, and `strict` disabled. Roughly a fifth of the 38 bugs in `AUDIT-BUGS.md` are
mistakes a linter catches for free. Buying the safety net first means every later fix is
verified instead of hoped-for.

---

## Tier 1 — the safety net (do these first)

- [x] **ESLint + `eslint-plugin-react-hooks`.** Installed 16 Αυγούστου 2026 — flat config in
      `eslint.config.js`, `npm run lint` added. Baseline over 200 files: **655 errors, 2
      warnings**, of which **22 `react-hooks/exhaustive-deps`** across 14 files and 2
      `react-hooks/rules-of-hooks` in `components/games/DungeonExplorer.tsx`. Nothing fixed yet
      — that is Task 2. The bulk (368 `no-explicit-any`, 232 `no-unused-vars`) is noise by
      comparison; do not let it hide the hook errors.
      The single highest-value change in the repo.
      At least 8 audited bugs (`H1`, `H3`, `B2`, `B4`, `CS1`, `CTX3`, `CTX4`, `D1`) are
      dependency-array or stale-closure mistakes that `react-hooks/exhaustive-deps` reports
      automatically. Expect a large initial error count — do not fix them all at once; record
      the number, then burn it down file by file.
      *Effort: ~30 min to install, days to burn down. Start anyway.*

- [x] **`typecheck` script** — `npm run typecheck` added to `package.json`.

- [x] **`tsconfig.json` `exclude`** — was absent, so `tsc` walked `server/node_modules` and
      `.claude/worktrees/`. A typecheck ran >15 minutes without finishing; after the fix it
      completes and reports **zero type errors**. Note the run still takes ~3 minutes wall
      clock for only 4.8s of CPU — it is starved by iCloud disk I/O, not by compilation.
      Moving the repo out of the iCloud-synced Desktop would fix that.
      Treat the clean result cautiously: with `strict` off, `tsc` was never asked the
      questions that matter. It proves the code compiles, not that it is null-safe.

- [ ] **Turn on `strict`, incrementally.** Do not flip it repo-wide in one go. Order:
      `noImplicitAny` → `strictNullChecks` → full `strict`. `strictNullChecks` is the one that
      matters here: bug `C1` was a production crash on `selectedHero.avatar.startsWith()`
      where `avatar` was undefined, and the compiler was never asked to check.

- [ ] **CI on push.** A GitHub Actions workflow running `typecheck` + `lint` + `build`. Without
      it the above only helps when someone remembers to run it locally.

## Tier 2 — correctness that touches money

- [ ] **`API3` — credit race conditions.** Still open, and the only unfixed bug that affects
      real money. Concurrent requests can duplicate or lose credits because credit updates are
      read-then-write with no database-level lock. Replace with an atomic Postgres RPC:
      `UPDATE profiles SET credits = credits - $cost WHERE id = $id AND credits >= $cost RETURNING credits`.
      Supabase MCP access is available for writing and applying the migration.

- [ ] **Add tests for `EconomyContext`.** There are currently **zero** test files in the repo.
      If only one module is ever tested, make it this one — it decides what children are
      charged. Cover: insufficient balance, exact balance, badge discounts (`CTX3` shipped
      them entirely non-functional), and double-spend under repeated calls.

- [ ] **`H4` — free retries.** "Try Again" re-enters a paid step without charging, while the
      server bills every attempt. Either charge again or disable the button.

## Tier 3 — cleanup with real payoff

- [ ] ~~Delete `server/`~~ — **DO NOT DELETE. Decided 16 Αυγούστου 2026.**
      An earlier note in this file called it "44 MB of only `node_modules`". That was wrong —
      it was written after an `ls` without `-a`. `server/` also contains a hidden **`server/.env`**
      holding the only local copy of four server-side secrets: `SUPABASE_SERVICE_KEY` (bypasses
      RLS entirely), `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `GEMINI_API_KEY`. None are in
      git (gitignored) and none are in the root `.env`, which holds only public `VITE_` values.
      Production is unaffected either way — Vercel holds its own env vars — but deleting this
      folder destroys the local copies permanently.
      If it is ever cleaned up: copy `server/.env` somewhere safe **first**, and treat a
      forgotten `SUPABASE_SERVICE_KEY` on disk as a security matter in its own right.

- [ ] **Delete `.claude/worktrees/recursing-nash/`.** Leftover worktree, already gitignored.
      Check for hidden files with `ls -a` before deleting anything, for the reason above.

- [ ] **Remove `VITE_ADMIN_PIN` and `VITE_PARENT_PIN` from `.env`.** Referenced by no code.
      Admin auth is server-side via `api/_lib/adminAuth.ts` (email + password → 12h HMAC
      token). Any `VITE_`-prefixed variable is compiled into the public browser bundle, so
      leaving them invites someone to "reuse" them one day and publish a PIN.

- [ ] **Delete the dead endpoints** (`API5`–`API8`): `api/ai/music-generate.ts` (never called),
      `api/ai/suno-callback.ts` (logs, does nothing), and the three `backendAuth` routes the
      client calls but which never existed server-side. Grep for callers first.

- [x] **Node version on Vercel — checked 16 Αυγούστου 2026, no action needed here.**
      `wisebot-claude-ok` already builds on **Node 24.x**, so it is *not* the project the
      dashboard warns about. Some other project under the `itdev-gr` team is still on Node 20
      and will start failing on 1 Οκτωβρίου 2026 — worth finding, but it is not this one.
      Note also that this project is **live on `wisebot.gr` and `www.wisebot.gr`**, with a
      `…-git-main-…` domain, i.e. git integration on `main`: **pushing to `main` deploys to
      production.**

## Tier 4 — worth doing, not urgent

- [ ] **`CTX6`** — `/admin` has no client-side route guard. Server-side protection exists, so
      this is defence-in-depth, not an open door.
- [ ] **`H2`** — blind 90s safety timeout in `HeroFactory`, currently harmless.
- [ ] **Split the largest components.** `EndlessRunner.tsx` (1354 lines), `MusicStudio.tsx`
      (1263), `Dashboard.tsx` (1256), `AdminDashboard.tsx` (1238). Not a bug, but these are
      where the hook bugs cluster, and they are hard to review as single units.
- [ ] **Reconcile cost constants.** `CTX11`/`CTX12` found comments and UI copy quoting prices
      that no longer match `EconomyContext`. Grep every credit number and make displayed
      equal charged.

---

## Not broken — verified, leave alone

Checked during this review and found correct. Recorded so nobody "fixes" them later:

- **No AI key reaches the browser.** All Gemini calls go through `api/ai/*`; `vite.config.ts`
  deliberately blanks `process.env.API_KEY` and `GEMINI_API_KEY`. Client env exposes only
  `VITE_SENTRY_DSN`.
- **No secrets are committed.** `.env` is gitignored and untracked; no JWT literals in source.
- **Kid-safety moderation is real** — Greek *and* English blocklists plus Gemini
  `SAFETY_SETTINGS` at `BLOCK_LOW_AND_ABOVE` on AI endpoints.
- **Admin auth is server-side** with a 12h HMAC token and a deliberate brute-force delay.
- **Security headers are set** in `vercel.json`: `nosniff`, `X-Frame-Options: DENY`,
  `Referrer-Policy`, and a `Permissions-Policy` that denies camera and geolocation.
- **Caching strategy is sound** — immutable hashes for assets, PWA precaching limited to the
  app shell with heavy media loaded on demand.
