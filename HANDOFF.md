# WiseBot — Handoff

Start here. Written at the end of the setup session (15–16 Αυγούστου 2026), when the new
MacBook had no toolchain and no local project context.

---

## ⚡ STATUS 25 Αυγούστου 2026 (απόγευμα) — Journey Νο3: Maker Levels + Passport

**Open: PR #34 `feat/maker-levels-passport`** (CI green, for the owner's say-so).
Dreamer→Explorer→Creator→Maker→Inventor→Founder→Legend from total XP.
`data/makerLevels.ts` is the single source of truth (thresholds/taglines tune there);
the numeric `wb_level` counter is untouched. `/passport` (lazy, SemiPublicRoute): tier +
ladder + portfolio from EconomyContext stats and the School `wb_quiz_best_*` keys — shows
only, awards nothing. `MakerLevelUp` overlay celebrates tier-ups; `wb_maker_level` is
written before showing (double-run safe) and the first run only baselines. Entry points:
Dashboard header tier pill + the wallet level chip. 10 tests pin the ladder invariants
(suite 56/56). Verified in dev: desktop + mobile, celebration flow, both entry points.

---

## ⚡ STATUS 25 Αυγούστου 2026 (ξημερώματα) — SEO overhaul live + Journey step 1 merged

On the owner's say-so, **PR #32 (SEO) and PR #29 (server-side progress) are merged and
live on wisebot.gr**; the `quiz_best` migration was applied to Supabase via MCP (advisors
clean). #17 (voice sampler) and #30 (real Hero Market) also merged today by other sessions.

**PR #32 — SEO/positioning** (three commits):
- Fixed: `/school` had no PAGE_META entry — it served the home meta with a canonical to `/`
  and was absent from sitemap/robots. Google's verdict for it was literally «Discovered —
  currently not indexed». Now: full meta + Course/FAQ JSON-LD, prerendered page, sitemap.
- Repositioned per PRODUCT-VISION.md: title/OG/JSON-LD/noscript and the landing hero are now
  «Οι Ιδέες σου Γίνονται Πραγματικότητα» (maker academy), not «Το Διάβασμα Έγινε Παιχνίδι».
  Removed the fabricated `aggregateRating` 4.8/156 (Google guidelines risk).
- New: 6 per-grade pages `/askiseis-<τάξη>-dimotikou` targeting «ασκήσεις Χ' δημοτικού»
  queries, generated from the curriculum skeleton (`components/SchoolGradeSEOPage.tsx`),
  prerendered + in sitemap (now 25 URLs). Slugs duplicated in App.tsx / generator / sitemap.
- **GSC (access via the owner's Chrome + Claude extension works):** baseline over 16 months
  was 51 clicks (40 branded), 9 queries total, 8 pages indexed. On 23/8 late night the new
  sitemap was resubmitted (Success, 25 discovered) and indexing was requested for /school +
  all 6 grade pages («Indexing requested» confirmed each). Check Coverage again ~end of week.
- Socials in Organization `sameAs` since PR #33 (merged, live): Instagram wisebot.gr,
  Facebook page 100094647660224, TikTok @wisebotgr, YouTube @wisebotfriends.
- **Visibility audit (24/8):** only 8 URLs indexed (/, /game, /quiz, /music, /wise-friends
  + 3 SEO landing pages) — /academy and /ebooks were «crawled/discovered - not indexed»
  since April; indexing re-requested for both (daily manual quota now used: 9 URLs).
  **www.wisebot.gr redirects with 307 (temporary)** so Google keeps www as a separate URL —
  OWNER: Vercel → wisebot-claude-ok → Settings → Domains → www.wisebot.gr → set the
  redirect to 308/permanent. **Bing has zero pages indexed** — OWNER: open Bing Webmaster
  Tools once, «Import from Google Search Console», done. GSC has no Brand profile section
  for this property yet (Google gates it on brand recognition); the sameAs schema is the
  signal that feeds it. No knowledge panel exists yet to claim.

**Journey step 1 (PR #29, merged, migration applied):** the child's quiz best runs sync to
a new `quiz_best` Supabase table (`wb_quiz_best_*` keys — School stars/Master/diplomas)
through the existing syncService pattern.

- **Merge rule enforced in the database**: a `BEFORE UPDATE` trigger only accepts a strictly
  better score/total ratio — no client can ever lower a best run. RLS: own rows only, no
  delete. Migration: `supabase/migrations/20260824220000_quiz_best_sync.sql` — applied.
- Sync points: login (`SyncBridge` in AuthContext), each improved run (QuizEngine
  `saveQuizBest`, fire-and-forget), and Parent Dashboard mount (`ParentSchoolProgress`
  pulls cloud runs first — the parent now sees progress from other devices; its copy
  drops «σε αυτή τη συσκευή» for signed-in accounts). Guests: localStorage only, unchanged.
- Merge/round-trip invariants pinned in `services/syncService.test.ts` (10 tests).
- Maker Levels / Passport / weekly report can build on `quiz_best` next.

---

## ⚡ STATUS 24 Αυγούστου 2026 (μέρα) — SCHOOL overhaul, read this first

**Owner's instruction for this phase: work only on the School; touch nothing else.**
Merged today: #13, #15 and — at 21:30, on the owner's say-so — **#16, the whole School
overhaul (live on wisebot.gr)**. Still open: #17 (voice sampler).

What PR #16 shipped:
- **School = mission trail.** `components/SchoolUnitMap.tsx`: grade → subject → trail of
  "αποστολές" with 0–3 stars each, Master badge at 2+ stars everywhere, WiseBot card at the
  end of each mission (`MissionResult` in `School.tsx`, via QuizEngine's new `finishSlot`).
  Nothing locked. Subjects without units keep the old flat quiz.
- **Curriculum skeleton Α'–ΣΤ'**, 212 units from the ΙΕΠ Προγράμματα Σπουδών and the
  textbook chapter titles (`data/units/curriculum.ts`, one-line brief per unit).
- **All 212 units written and audited (Α' 27, Β' 28, Γ' 35, Δ' 37, Ε' 43, ΣΤ' 42) —
  3,816 original bilingual questions with explanations.** Α'/Β' landed 24 Αυγούστου
  (evening) once the spend limit was raised; every Α'/Β' maths answer and the Β' «Τόνοι»
  unit were read by hand. One file per unit in `data/units/grade<N>/`, bundled per grade in
  `grade<N>/index.ts`, loaded on demand by `data/units/registry.ts` (`loadGradeQuestions`).
  `UNIT_COUNTS` there is the static part. Each unit was one agent, ~60k tokens.
- **Tooling:** `node scripts/school-units.mjs audit | print 3/math | registry`.
  `registry` rewrites the grade index files and UNIT_COUNTS. `data/schoolData.test.ts`
  validates every question in CI (24 tests).
- Build note: the PWA precache limit is 1 MB (`vite.config.ts`); School is 240 KB and each
  grade chunk 175–590 KB. Do not re-bundle the grades together.
- Known cosmetic: the Δ' grade file names its science subject «Φυσικά» (should be «Μελέτη
  Περιβάλλοντος» — Φυσικά starts in Ε'); the name comes from `data/schoolGrade4.ts`.

**Open: PR #25 `feat/school-parent-view`** (CI green, for the owner's say-so) — the three
School follow-ups in one: Parent Dashboard «Σχολείο» section (`components/
ParentSchoolProgress.tsx`: per played grade, stars/Master per subject, exam/diploma, and the
missions under 2 stars — replaces the stale "Coming Soon — school subjects" block); the
grade exam now unlocks only with Master in every subject; grade cards count missions; Δ'
«Φυσικά» → «Μελέτη Περιβάλλοντος». Note: Α' still has a 5th flat subject «Ο τόπος μου»
(12 questions, not in the unit skeleton) — fold it into Μελέτη Περιβάλλοντος or leave.

**Next for School:** owner reads samples per subject on the phone and reports anything
off; then the parent view could move server-side (today it reads this device's
localStorage, so a parent on another phone sees nothing).

---

## ⚡ STATUS 24 Αυγούστου 2026 (νύχτα)

**Four open PRs, all CI green, all independent of each other (each branches off `main`).
Merge only on the owner's explicit say-so.** Content (books, academy texts) must never be
changed in meaning — none was.

| PR | Branch | What |
|---|---|---|
| #13 | `fix/quiz-offline-back` | the list below |
| #15 | `ux/game-back-button` | one 44px «ΠΙΣΩ» pill in all 22 games (`components/games/GameBackButton.tsx`); Puzzle menu no longer clips its top |
| #16 | `content/grade3-multiplication` | **for approval**: Γ' Πολλαπλασιασμός, 18 original questions (`data/units/grade3/math-multiplication.ts`), wired into the unit skeleton only — UI unchanged. Plus `data/schoolData.test.ts` validating every school question; it found and fixed 2 duplicate English options (Δ', ΣΤ' Γλώσσα) |
| #17 | `tooling/voice-sampler` | `scripts/generate-voice-samples.mjs` upgraded (gpt-4o-mini-tts + storyteller instruction, ElevenLabs Greek voices, Gemini Pro). **Not run** — needs keys and the owner's go |
| #18 | `fix/academy-count` | UI/SEO said «98 ιστορίες»; it is 113 since PR #14 (MONEY_MIND 101–123). Counts now in `data/contentCounts.ts`, locked by `contentCounts.test.ts` (also: unique ids, 3 quiz per story) |
| #19 | `chore/strict-null-checks` | `strictNullChecks: true` — only 15 errors, all `let x = null` / forEach-narrowing inference gaps, fixed, no behaviour change. Task 3 done |
| #20 | `chore/cleanup-dead-endpoints` | Task 6 re-verified: API6/API7 are **not** dead (kept), API8 already gone, dead `backendAI.chat/tts/quiz` removed, admin endpoint list fixed, PINs out of `.env`. **Owner:** delete `VITE_*_PIN` from Vercel env if present |

**Done today, merged:** PR #14 — 15 new MONEY_MIND Academy stories (ids 109–123: Thiel, Vaynerchuk,
Girard, Knight, Housel, Newport, Voss, Schwartz, Kim & Mauborgne, Tracy, Peale, Kiyosaki ×2, Sharma,
Dyer). Academy = 113 stories.

**Still undefined:** the «Βιβλία» pass from the category-by-category plan — no concrete brief
exists for what to change in the 34 books. Needs the owner's input before anyone starts.

**PR #13** (7 commits):

What it fixes, each verified on a 375×812 viewport in dev:
1. **Quiz answers were predictable** — correct option in slot 0/1 for 93% of book questions,
   86% school, fixed 0-1-2 pattern in academy. `utils/shuffleOptions.ts` shuffles options per
   question once per quiz in `EbookQuiz` and `QuizEngine` (+6 tests). Data untouched.
2. **Offline banner** covered the header/back button (`fixed top-0`). Now `components/
   OfflineBanner.tsx` in flow above the header, child wording in `UI_TEXT.offline`.
3. **Phone back gesture threw the child to the home page** from a game. Active game is now
   in the URL (`/game?g=ballrush`).
4. Same bug in Quiz / School (2 levels) / Academy / Ebooks → `utils/useBackCloses.ts`
   (pushes a history entry per open sub-view, closes it on pop). Read its header before reuse.
5. P3 leftovers: Music button shows `costs.song` (60) instead of "-2⚡"; `/parent` for guests
   explains itself + Log in / Create account; signup form has labels, a one-line "why the
   phone" hint, correct autocomplete; `/login?mode=register` actually opens the signup tab.

**Owner's new ideas (23 Αυγούστου, evening), with status:**
- Random answer order in book quizzes → done (PR #13).
- Offline bar hides the back button → done (PR #13).
- A proper "back" in games/quiz instead of dropping to home → the navigation bug is done;
  **unifying the look of the 22 in-game back buttons is still open** (a shared floating
  button was tried and collides with Ball Rush's controls — do it per game, or not at all).
- **Re-record Academy + ebook narration with top voices.** Demos done (24 Αυγούστου,
  βράδυ): 4 Gemini samples on an Academy excerpt (Kore/Puck flash, Kore/Charon pro) were
  sent to the owner — **waiting for the owner to pick a voice**; parked until then. The
  OpenAI key in `.env.vercel` is invalid (401) and there is no ElevenLabs key. Batch
  estimate: 113 stories ≈ 280k chars → Pro TTS ~€5–6, Flash ~€1. Facts: 558 MB of mp3
  in `public/audio/` (189 academy, 260 ebook pages), generated with a mix of OpenAI
  `coral`/`fable`, Gemini `Kore`, ElevenLabs; scripts in `scripts/generate-*voices*.mjs`.
  Proposed first step: one ebook page in 4–5 candidate voices for the owner to hear on a
  phone, then batch. Costs API money — get a go-ahead first. Consider moving audio to
  Supabase Storage/CDN instead of the repo.
- Before ads: sign up with a Gmail address and confirm the verification email arrives
  promptly (needs a real mailbox — owner's task, or switch Supabase auth SMTP to a
  dedicated provider if it lands in spam).

**Found while reviewing, not fixed (pre-existing):** badge discounts are client-only —
`costs.song` shows 58 with the musician badge but `api/ai/suno-generate.ts` always deducts
`SONG_COST = 60` (same shape for image/video badges). Displayed ≠ charged by the discount.
Either the server reads the badge, or the discount goes. Owner's call.

**PR #6 (Cursor, May, Supabase-role admin access):** recommended to close — 46 commits
behind, rewrites files `main` has since rewritten, and its token never expires. Not closed;
waiting for the owner.

---

## ⚡ STATUS 23 Αυγούστου 2026

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
