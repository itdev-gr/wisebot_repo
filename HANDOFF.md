# WiseBot — Handoff

Start here. Written at the end of the setup session (15–16 Αυγούστου 2026), when the new
MacBook had no toolchain and no local project context.

---

## ⚡ STATUS 23 Αυγούστου 2026 — read this first

**Live on wisebot.gr (merged today, PR #11):** the whole first-run experience from
`ONBOARDING-PLAN.md` — greeting by name, WiseBot's one-time tip in each room
(`components/FirstTimeTip.tsx`), onboarding picks a hero before any photo, localized reward
toasts with a first-book moment, honest credit labels, and **progressive unlocks**
(`utils/unlocks.ts`, `components/UnlockGate.tsx`): Hero Factory ← 1 story, Cinema/3D ← 1 hero,
My Company ← 2 stories; Music and all learning rooms always open. Existing users are
grandfathered by their stats.

**Earlier today (PR #9, #10):** parent-trust gates, first-run overlay cleanup, landing
repositioned ('Το διάβασμα έγινε παιχνίδι'), Vitest in CI (10 tests).

**Repo:** `~/Projects/wisebot` (not the old Desktop copy). typecheck ~3s, tests ~0.5s.

**Next, in order:**
1. P3 UX leftovers — Music Studio shows "-2⚡" vs store "-60": verify which is real;
   Parent Dashboard dead-ends guests; signup form needs labels + why the phone is asked.
2. Category by category, as the owner wants: Βιβλία → Ακαδημία → Quiz → Σχολείο. The
   School is where the promise becomes content: `CONTENT-PLAN.md` Phase 1b, Γ' Δημοτικού
   multiplication sample unit (18 questions) for approval before the other 29 units.
3. `strictNullChecks`; cleanup (dead endpoints, unused PINs).

**Owner decisions made:** merge only on explicit say-so; music stays unlocked (it is the ad
hook); unlocks must be easy; tips/unlocks in localStorage are fine for v1.

---

## ⚡ STATUS 17 Αυγούστου 2026 — read this first; it supersedes the task list below

**Infrastructure is done.** `gh` is logged in as itdev-gr (keyring), git identity set, push →
Vercel auto-deploy → wisebot.gr proven. CI (`.github/workflows/ci.yml`: typecheck + lint +
build) gates `main`; lint is at **0 errors**. Database security fixes are live and recorded in
`supabase/migrations/`. `AUDIT-2026-08-16.md` is the technical audit; `AUDIT-BUGS.md`'s API3
entry is stale (already race-safe).

**Open PR #9 — `ux/parent-trust`** (3 commits, CI green, Vercel preview up). From the UX
audit of the live site. Merging deploys to wisebot.gr — **owner's call**:
- P0 parent trust: photo upload only for verified-parent accounts (+ honest "not stored"
  note); parent-consent checkbox on signup; "Χωρίς chat" → "Χωρίς chat με αγνώστους";
  store buttons show the parent-verification lock.
- P1 first run: one overlay instead of four; entrance ~2.5s → ~1s; portal intro plays once;
  the 8 portal cards navigate; "Σύνδεση" link on the landing; FAB/mute overlaps fixed.
- P2 landing repositioned: "Το διάβασμα έγινε παιχνίδι." Age/grades first, books + school
  track lead, AI framed as the reward, new "Για γονείς" section, SEO title/OG updated.

**Remaining UX (P3, small, separate PR):** Music Studio shows "-2⚡" while the store says a
song costs 60 — verify which is real; Parent Dashboard is a dead end for guests (asks for a
password with no explanation); signup form lacks field labels and does not say why it asks
for a phone number; password rule (upper+digit+symbol) is friction — length 8+ plus the
Supabase leaked-password check (currently OFF, one dashboard toggle) is better.

**Repo moved (17 Αυγούστου, later the same day): `~/Projects/wisebot`.** Fresh clone off
iCloud, no space in the path; `.env`, `.env.vercel`, `server/.env`, `.vercel/`, and
`.claude/{settings.local,launch}.json` copied over by hand (they are gitignored). The old
`~/Desktop/Projects/wisebot-claude-ok 3` still exists as a stale copy — **work only in
`~/Projects/wisebot`**. `~/.claude/launch.json` (`wisebot-dev`) points to the new path.

**Parked:** `wip/tests` branch holds a Vitest setup + EconomyContext tests. They could not run
at the old path (the space in the folder name was URL-encoded by vitest's fork pool). Retry
them here first — the move may be the whole fix.

**Next after PR #9:** P3 UX items · move the repo · unpark tests · `strictNullChecks` ·
CONTENT-PLAN.md Phase 1b (Γ' Δημοτικού multiplication sample unit).

Tasks 1, 2, 4, 7 below are DONE; 5 is parked; 3 and 6 remain.

`CLAUDE.md` describes the codebase. `FIX-PLAN.md` is the prioritised backlog. This file is the
state of the machine, what was already done, and the order to work in.

---

## 1. Machine state

Node, npm and gh were installed from official tarballs into `~/.local`, **without sudo**
(Homebrew's installer needs a password that only the owner can type):

| Tool | Version | Location |
|---|---|---|
| Node | v24.19.0 LTS | `~/.local/opt/node-v24.19.0-darwin-arm64` |
| npm | 11.17.0 | same |
| gh | 2.97.0 | `~/.local/opt/gh_2.97.0` |
| git | 2.50.1 | Apple, `/usr/bin/git` |

`~/.zshrc` was created solely to put `~/.local/bin` on PATH. **Non-interactive shells do not
source it** — prefix commands with `export PATH="$HOME/.local/bin:$PATH"` when scripting.

Not installed: Homebrew, SSH keys, `~/.gitconfig`.

## 2. Connections

- **Supabase** — working. Project `wisebot-academy`, ref `qvqhwnsejbtrbrlfjrgz`, eu-central-1.
- **Vercel** — working, but `list_teams` returns an empty array. Every call must be given the
  team slug **`itdev-gr`** by hand or it errors. Project `wisebot-claude-ok`,
  `prj_52m5VPabhFiNhhQkzRmgGBnA1yA0`.
- **GitHub** — not authenticated. Needed **only for push**; reading and editing code works
  without it. Run `gh auth login` in an interactive terminal.
- 19 other connectors (Ahrefs, Notion, Figma, Slack, Monday…) are unauthorised. Authorise from
  the connector settings on claude.ai if wanted.

## 3. Already done — do not redo

- `CLAUDE.md` written. **Do not run `/init`, it will overwrite this.**
- `FIX-PLAN.md` written — the prioritised backlog.
- Three project skills in `.claude/skills/`: `wisebot-review`, `wisebot-api-endpoint`,
  `wisebot-credits`. They load automatically when working in this directory.
- `tsconfig.json` — added the missing `exclude`. A typecheck previously ran 15+ minutes without
  finishing because `tsc` walked `server/node_modules`.
- `package.json` — added `npm run typecheck`. It now passes with **zero errors** (weak signal:
  `strict` is off, so the compiler was never asked the hard questions).

## 4. Verified correct — do not "fix"

No AI key reaches the browser · no secrets committed · kid-safety moderation is real (Greek and
English blocklists plus Gemini `SAFETY_SETTINGS`) · admin auth is server-side with a 12h HMAC
token · security headers set in `vercel.json` · caching strategy sound.

## 5. Known environment problems

- ~~The repo lives on the iCloud-synced Desktop.~~ Resolved 17 Αυγούστου — see STATUS above.
  Old observation kept for context: typecheck used 4.8s CPU over 3 min wall clock there.
- **`server/` must not be deleted.** It looks like a dead 44 MB `node_modules`, but a hidden
  `server/.env` holds the only local copy of `SUPABASE_SERVICE_KEY`, `STRIPE_SECRET_KEY`,
  `STRIPE_WEBHOOK_SECRET` and `GEMINI_API_KEY` — untracked by git and absent from the root
  `.env`. Decided 16 Αυγούστου 2026: leave it alone.

---

## 6. Work order

Each task below is a session. Paste the prompt, finish the task, commit, move on. They are
ordered so that each one is verified by the safety net built in the one before it.

### Task 1 — ESLint (highest value in the repo)

> Set up ESLint for this project with `eslint-plugin-react-hooks` and the TypeScript parser.
> Do not fix any violations yet. Run it, tell me the total error count broken down by rule,
> and show me the ten files with the most `react-hooks/exhaustive-deps` violations. Add a
> `lint` script to package.json.

Why first: at least 8 bugs in `AUDIT-BUGS.md` (`H1`, `H3`, `B2`, `B4`, `CS1`, `CTX3`, `CTX4`,
`D1`) are dependency-array or stale-closure mistakes this rule reports automatically.

### Task 2 — Burn down the hook violations

> Using the `wisebot-review` skill, fix the `react-hooks/exhaustive-deps` violations file by
> file, in this order: `components/HeroFactory.tsx` (3), `context/AuthContext.tsx` (2),
> `components/BusinessSimulation.tsx` (2), `components/CreditStore.tsx` (1) — the credit and
> auth paths first — then `components/QuizEngine.tsx` (2), then the games.
> After each file, run `npm run typecheck` and `npm run lint` and show me the diff before
> moving on. Do not batch several files into one change.

Two corrections from the ESLint baseline of 16 Αυγούστου 2026:

- **`context/EconomyContext.tsx` has zero violations.** An earlier draft of this task listed it
  first; there is nothing to fix there. Its bugs (`CTX1`, `CTX3`, `CTX5`) are the object-identity
  and contract shapes the rule does not report — use the `wisebot-review` skill, not the linter.
- **The 2 `rules-of-hooks` errors in `components/games/DungeonExplorer.tsx` are false positives.**
  Line 355 declares `const usePotion = useCallback(...)`, an ordinary game function whose name
  begins with `use`, so the linter treats every call as a hook call. Rename it to `drinkPotion`;
  do not disable the rule.

### Task 3 — `strictNullChecks`

> Turn on `strictNullChecks` in tsconfig.json and run `npm run typecheck`. Report the error
> count and group the errors by cause. Then fix them starting with `components/Cinema.tsx` and
> anything else that reads `.avatar`, since bug C1 in AUDIT-BUGS.md was a production crash of
> exactly that shape. Do not enable full `strict` yet.

### Task 4 — API3, the credit race condition

> Fix API3 from AUDIT-BUGS.md — credit operations have no database-level locking, so
> concurrent requests can duplicate or lose credits. Write a Supabase migration adding an
> atomic RPC that deducts credits in a single statement
> (`UPDATE ... WHERE credits >= cost RETURNING`), then change `api/_lib/auth.ts` to use it.
> Use the `wisebot-credits` skill. Show me the migration before applying it.

The only open bug that touches real money.

### Task 5 — Tests for the economy

> There are zero tests in this repo. Add Vitest and write tests for `context/EconomyContext.tsx`
> only: insufficient balance, exact balance, badge discounts actually changing the charged
> amount, and no double-spend when `spendCredits` is called twice in quick succession. Add a
> `test` script.

### Task 6 — Cleanup

> Work through Tier 3 of FIX-PLAN.md: remove the unused `VITE_ADMIN_PIN` and `VITE_PARENT_PIN`
> from `.env`, delete the stray `.claude/worktrees/` directory, and delete the dead endpoints
> API5–API8 after confirming nothing calls them. **Do not touch `server/`** — it holds the only
> local copy of the server-side secrets. Run `ls -a` on anything before deleting it, and confirm
> each deletion with me first.

### Task 7 — CI

> Add a GitHub Actions workflow that runs typecheck, lint and build on push and pull request.
> Then check whether the `wisebot-claude-ok` Vercel project still builds on Node 20 — the
> dashboard warns those builds fail from 1 October 2026 — and upgrade it to Node 24 if so.

### Optional, any time — escape iCloud

Moving the repo off the synced Desktop removes the 3-minute typechecks and the hanging
`git status`. Everything else keeps working; only the paths change.
