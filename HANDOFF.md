# WiseBot — Handoff

Start here. Written at the end of the setup session (15–16 Αυγούστου 2026), when the new
MacBook had no toolchain and no local project context.

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

- **The repo lives on the iCloud-synced Desktop.** The typecheck used 4.8s of CPU spread over
  3 minutes of wall clock — 2% CPU, the rest waiting on disk. `git status` can hang past two
  minutes. Moving the repo to `~/Projects/` would remove this entirely, and is the cheapest
  large win available. Doing so invalidates the paths in this file.
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
> file, starting with the files that touch credits: `context/EconomyContext.tsx`,
> `components/HeroFactory.tsx`, `components/BusinessSimulation.tsx`, `components/CreditStore.tsx`.
> After each file, run `npm run typecheck` and `npm run lint` and show me the diff before
> moving on. Do not batch several files into one change.

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
