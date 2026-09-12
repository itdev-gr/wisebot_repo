# WiseBot — Current State (survey for the World module)

Read-only survey written 10 Σεπτεμβρίου 2026. Describes the repository as it exists at
`~/Projects/wisebot` on branch `main`. No code was changed to produce this document.

Scope: the four questions asked — stack, GameCenter and EconomyContext, existing
geographic data, and where an isolated World module could live. Anything noted as
"drift" or "stale" is recorded here only; nothing was fixed.

---

## 1. Stack

### Framework and build

| Layer | Choice |
| --- | --- |
| UI | React 19.2, Framer Motion 11, Tailwind 3.4, lucide-react icons |
| Build | Vite 6.2, TypeScript 5.8 |
| Routing | React Router 7 (`BrowserRouter`, declared in `App.tsx`) |
| Hosting | Vercel, serverless functions under `api/` |
| PWA | `vite-plugin-pwa` + `workbox-window` |
| Errors | Sentry (`@sentry/react`) |

`tsconfig.json` does **not** enable `strict`. There is no CI. `npm run lint` reports a
baseline of roughly 655 errors that has never been burned down, so a clean lint run is
not a usable gate. `npm run typecheck` and `npm run test` (vitest) are the gates that
work.

### Database

Supabase Postgres, project `wisebot-academy`, ref `qvqhwnsejbtrbrlfjrgz`, region
eu-central-1. Nineteen tables in `public`, every one of them user state:

`profiles`, `stats`, `badges`, `heroes`, `purchases`, `credit_transactions`,
`gift_items`, `user_videos`, `user_songs`, `quiz_best`, `market_listings`,
`market_purchases`, `market_reports`, `print_orders`, `parent_pins`,
`phone_verifications`, `rate_limits`, `ip_rate_limits`, `error_logs`.

Row-level security is enabled on all of them. Migrations live in
`supabase/migrations/` as timestamped SQL files.

**No table holds content.** Books, lessons, quizzes and game questions are static
TypeScript. The database stores only what a user has done.

### Auth

Supabase Auth, wired in `context/AuthContext.tsx`.

- **Register** goes through the server: `POST /api/auth/signup` creates the user with
  the anon client and sends the verification email.
- **Login** is direct from the browser: `supabase.auth.signInWithPassword`.
- **Google OAuth** via `supabase.auth.signInWithOAuth`. A profile row is auto-created
  on first OAuth login, because the signup endpoint never ran for that user.
- **Guest mode** is first-class: `isGuest = !user` (`context/AuthContext.tsx:375`).
  Most routes render for guests and the server endpoints enforce auth, so there is no
  client-side login wall except `/admin`.
- **Session bootstrap** uses `getSession()` once, then `onAuthStateChange` for
  everything after, deliberately skipping `INITIAL_SESSION` to avoid double handling.
- **Parent PIN** is server-side, hashed in `parent_pins`, handled by
  `api/auth/parent-pin.ts`. There is no client-side PIN constant any more.
- **Admin** is a separate path entirely: email plus password exchanged for a 12-hour
  HMAC token in `api/_lib/adminAuth.ts`.

The browser client uses the anon key only (`services/supabaseClient.ts`). All AI calls
are proxied through `api/ai/*`; `vite.config.ts` deliberately blanks `process.env.API_KEY`
so a stray client-side SDK call cannot pick up a key.

### How i18n works today

There is no i18n library, no locale files, and no `locales/`, `i18n/` or `messages/`
directory. Localization is a two-member TypeScript union threaded through the tree.

- The language is `'el' | 'en'`, held as state in `App()` (`App.tsx:608`), persisted to
  `localStorage` under `wb_lang`, and defaulted from `navigator.language` on a first
  visit. It also sets `document.documentElement.lang`.
- It is passed down as a `lang` prop to nearly every component, including all 22 games.
- The shared UI dictionary is `UI_TEXT` in `constants.tsx`, keyed by language, read as
  `const t = UI_TEXT[lang]`.
- Content strings use the `LocalizedString` interface, `{ el: string; en: string }`
  (`types.ts:27`), embedded directly in the data files.
- Many components ignore `UI_TEXT` and build a local `t` object inline instead, for
  example `components/GameCenter.tsx:61` and `components/MakerPassport.tsx:64`.
- `EconomyContext` reads the language through a ref rather than a dependency, and the
  reason is documented at `context/EconomyContext.tsx:482`: listing `lang` in that
  callback's dependencies changed its identity on a language switch and re-fired every
  dependent effect, including paid AI generations.

Consequences worth knowing before designing anything multilingual: there is no fallback
chain, no pluralization, no message ids, and no `translation_status` field anywhere in
the repository. Adding a third language means widening the `'el' | 'en'` union at every
site that names it, which is most of the component tree.

### How game content is stored

Static TypeScript modules under `data/`, roughly 49 files. No CMS, no database, no JSON
fetched at runtime.

- **Books**: `data/bookData_1.ts` through `data/bookData_34.ts`, typed as `Book` with
  `BookPage[]`, all text as `LocalizedString`.
- **Academy**: `data/academyCourses.ts`, `data/academyQuizData.ts`.
- **School units**: `data/units/<gradeN>/<subject>-<topic>.ts`, one file per unit, each
  exporting a single named const array of `QuizQuestion`.
- **The registry pattern**: `data/units/registry.ts` holds `UNIT_COUNTS`, a small static
  map the trail UI needs before any content loads, plus a lazy `loadGradeQuestions` so a
  phone downloads only the grade it opens. The comment at the top of that file states
  the reason: keeping the School chunk under the 1 MB PWA precache limit. Per-grade
  `index.ts` barrels are generated by `node scripts/school-units.mjs registry`.
- **Mini-games** keep their own question pools inline rather than in `data/`. For
  example the `POOL` constant at `components/games/GeoExplorer.tsx:44`.

This registry-plus-lazy-loader arrangement is the most modular content precedent in the
repository and the closest existing model for a new content-heavy module.

---

## 2. GameCenter and EconomyContext

### GameCenter

`components/GameCenter.tsx`, 495 lines, one file.

- **22 games**, each `React.lazy`-imported so it becomes its own chunk
  (`components/GameCenter.tsx:9-30`).
- **Two parallel lists must stay in sync**: the `GameKey` union and the `GAME_KEYS`
  array (`components/GameCenter.tsx:41-42`), plus a third place, the `switch` that maps
  a key to a component (line 100).
- **The active game lives in the URL**, `?g=<key>`, not in component state. The comment
  at line 50 gives the reason: the phone's back gesture then returns to the game list
  instead of leaving `/game` altogether. Navigation records
  `state.fromGameMenu` so `handleBack` can choose between real history back and a
  replace for deep links.
- **When a game is active** it renders in a fixed full-screen overlay at `z-[9999]`,
  deliberately covering the `Layout` header so the game's own back button is the only
  exit.
- **Every game receives exactly two props**: `lang` and `onBack`. That is the whole
  contract.
- The `games` array (line 144) carries presentation only: icon component, thumbnail
  path, category label, and static Tailwind class strings. The classes are written out
  literally rather than composed, so Tailwind's scanner can see them.
- Rewards do not live here. Each game calls `grantGameReward` from
  `components/games/gameRewards.ts`: the game passes a tier of 1 to 3, which becomes
  10, 20 or 30 XP, capped at 2 grants per game per day, tracked in `localStorage` under
  `wb_gamereward_<gameKey>`.

Drift noted, not fixed: the first-time tip at `components/GameCenter.tsx:414` says "16
games" in both languages while 22 are registered.

### EconomyContext

`context/EconomyContext.tsx`, 843 lines. Provider sits above `AuthProvider`
(`App.tsx:623`), so auth can read the economy during sync.

**What it owns**

| State | localStorage key | Shape |
| --- | --- | --- |
| `credits` | `wb_credits` | integer |
| `stats` | `wb_stats` | `EconomyStats`, 8 counters |
| `badges` | `wb_badges` | `Badges`, 8 booleans |
| `dailyMission` | `wb_daily_mission` | `{ id, date, completed }` |
| `streak` | `wb_streak` | `{ count, lastDate }` |

**What it does not own: XP.** This is the most important structural fact for any new
module. `earnXp` does not hold XP; it dispatches a `wb:xp` window `CustomEvent`
(`context/EconomyContext.tsx:576`). `App.tsx` listens for it (`App.tsx:453`) and owns
`xp` and `level` state, persisted to `wb_xp` and `wb_level`, levelling up every
`level * 500` XP. Any feature can therefore award XP by firing one event, with no change
to the economy context at all.

**Credits** are bought, not earned. The single exception is `claimBookReward`: finishing
a whole book and passing its quiz yields one credit, verified and recorded server-side
by `api/auth/earn.ts`. Prices come from `BASE_COSTS`, which mirrors `api/_lib/costs.ts`.
Badge-based discounts were removed in August 2026 because they only ever changed the
displayed price while the server charged the base cost.

**Badges** are 8 booleans: `thinker`, `creator`, `filmmaker`, `builder`, `market`,
`musician`, `scientist`, `explorer`. They unlock on stat thresholds inside the
`trackAction` switch (`context/EconomyContext.tsx:685`). Two carry live gameplay
effects, and both are XP multipliers rather than credit discounts:

- `scientist` (10 quizzes passed) adds 10 XP per quiz.
- `explorer` (10 Academy stories) adds 20 XP per completed daily mission.

An unlock triggers a full-screen `BadgeCelebrationOverlay` with 60 confetti particles,
auto-dismissing after 6 seconds. Presentation metadata is in `BADGE_META` (line 152).

**Daily missions** are a fixed pool of 12, `MISSION_POOL` (line 136), each entry
`{ id, action, el, en }` where `action` is one of the `ActionType` strings. Today's
mission is chosen deterministically, day-of-year modulo pool length (line 214), so it is
the same for every child on a given day and needs no server. Completion is implicit:
`completeDailyMission` fires when `trackAction` receives an action string matching the
day's mission. The reward is 30 XP, plus 20 if the `explorer` badge is held, plus a
streak bonus of 10 at 3 days or 30 at 7 days. A streak survives if `lastDate` is today
or yesterday and resets otherwise.

Drift noted, not fixed: `components/DailyMission.tsx:72` displays a reward pill of
`+5`, `+6` or `+8` while the context awards 30, 40 or 60 XP. The component is
display-only and awards nothing, so this is a copy mismatch rather than a payout bug.

**`trackAction` is the single entry point** for progression. Nine `ActionType` values:
`PASS_QUIZ`, `CREATE_IMAGE`, `CREATE_VIDEO`, `UPLOAD_HERO`, `COMPLETE_HERO`,
`READ_ACADEMY`, `READ_BOOK`, `CREATE_BUSINESS`, `CREATE_SONG`. One call updates stats,
unlocks badges, awards XP, shows a toast, appends to the activity log, and fires a GA4
event named `wb_` plus the lowercased action.

**Two constraints the file documents about itself**, both worth respecting in new code:

1. Side effects must happen outside `setStats` (line 667), because React StrictMode
   invokes state updater functions twice in development.
2. Language is read through `langRef`, never a dependency (line 482), for the paid-generation
   re-fire reason described earlier.

**Cloud sync**: `syncFromCloud` bulk-applies Supabase values with equality checks to
avoid re-render cascades. `services/syncService.ts` handles pull, merge and push against
`profiles`, `stats`, `badges` and `quiz_best`, with a debounced push.

### The surrounding progression layer

Three more files complete the picture, and a World module would sit alongside them
rather than inside them.

- **`data/makerLevels.ts`** is the named rank ladder: Dreamer, Explorer, Creator, Maker,
  Inventor, Founder, Legend, at XP thresholds 0, 300, 1000, 2500, 6000, 12000, 25000.
  Derived purely from total XP and deliberately independent of the numeric `wb_level`
  counter. The header states two rules: tune thresholds only in this file, and they may
  only ever be lowered, because a tier must never be taken away.
- **`components/MakerPassport.tsx`** is the child's identity page. It reads
  `EconomyContext` stats and School best runs and renders them. It awards nothing and
  charges nothing, which is stated in its own header comment.
- **`utils/unlocks.ts`** is the single source of truth for progressive room unlocks.
  Four keys, `factory`, `cinema`, `3d`, `business`, each with stat thresholds and a
  `grandfatheredBy` list so an existing user never finds a tool they have already used
  locked. Learning rooms and the Music Studio are always open. `ROUTE_UNLOCK` maps a
  route to its key for the route gate and the menu.

---

## 3. Geographic and city data that exists today

Searched all four repositories under `~/Projects` (`wisebot`, `wisebot-ai`,
`wisebot-books`, `wisebot-voices`) across `.ts`, `.tsx`, `.json`, `.sql` and `.mjs`,
excluding `node_modules`, plus every table in the Supabase project.

### Latitude and longitude: none

There is no coordinate data anywhere. No `lat`, `lng`, `latitude`, `longitude`,
`coordinates`, GeoJSON or bounding box, in code, data files, JSON or SQL. Every match
was one of three things:

- Greek sixth-grade geography lessons **about** the concepts, in
  `data/units/grade6/geography-earth-in-space.ts`, which teaches meridians, parallels
  and how latitude and longitude are read.
- One quiz question using `38° N, 24° E` as a puzzle value inside prose
  (`data/units/grade6/geography-earth-in-space.ts:133`).
- The `Permissions-Policy` header, discussed below.

No Supabase table has a geographic column of any kind.

### City names: present, but only as quiz strings

City names exist as answer options and as prose, never as records with an identity, an
id, or any attached data. Every occurrence:

| Location | Form |
| --- | --- |
| `components/games/GeoExplorer.tsx:44+` | Capital-city quiz pool, ~10 capitals as `{ el, en }` answer options. Lisbon and Porto appear as two options of one question. |
| `data/units/grade6/geography-europe.ts` | Sixth-grade capitals unit: Paris, Rome, Madrid, Berlin, Lisbon, Vienna |
| `components/games/TimeMachine.tsx:40,116` | Event labels, e.g. "Athens Olympics" |
| `data/generalQuizData.ts:297`, `data/schoolGrade4.ts:276+` | Athens and Olympia as quiz options |
| `scripts/stories-for-tts.json` | Athens, Lisbon and others inside biography prose |
| `components/LandingPage.tsx:61` | Ancient Athens in marketing copy |
| `api/auth/parent-summary.ts:37` | `'Europe/Athens'` as a timezone string, used for day-boundary maths on streaks. Not place data. |

There is no POI concept, no mission-per-place concept, and no city entity in the
codebase.

### Browser geolocation is switched off at the edge

`vercel.json:38` sets `Permissions-Policy: camera=(), microphone=(self), geolocation=()`.
Any feature needing the device's real position would require changing that header, which
is a deployment-configuration change and therefore outside a pure content module.

### About the other three repositories

`wisebot-ai`, `wisebot-books` and `wisebot-voices` are copies of the same tree checked
out at different branches. The findings above are identical in each. Per `CLAUDE.md`,
`~/Projects/wisebot` is the working copy; `~/Desktop/Projects/wisebot-claude-ok 3` and
its siblings are stale copies that should not be worked in.

---

## 4. Where an isolated World module could live

The goal is a module that adds a place-based experience without touching the existing
games, the economy, or i18n configuration. That is achievable, and the constraint that
makes it achievable is the XP event bus: a feature can award XP by dispatching `wb:xp`
without the economy context knowing it exists.

### Proposed shape

Mirror the School units pattern, which is the repository's own answer to "a lot of
content, loaded lazily".

```
data/world/
  registry.ts          static counts + lazy per-city loaders (model: data/units/registry.ts)
  cities/<city>.ts     one file per city, text as LocalizedString { el, en }
components/world/
  World.tsx            single lazy-loaded entry, the only thing App.tsx imports
  ...                  children, mirroring how components/games/ is organised
docs/world/            this document and the specs
```

### Integration points, and how to keep each one untouched

| Concern | Existing owner | How to avoid changing it |
| --- | --- | --- |
| XP | `App.tsx` via `wb:xp` | Dispatch the event, or call `earnXp` from `useEconomy`. Adds nothing to either file. |
| Per-run reward caps | `components/games/gameRewards.ts` | Reuse `grantGameReward` as-is, or copy its localStorage-cap pattern under a `wb_world_` prefix. |
| Badges, credits, stats | `EconomyContext` | Do not call `trackAction`. Every existing badge threshold is driven by the 9 `ActionType` values; introducing a tenth means editing the union, the switch, and by extension the badge rules. Avoid it. |
| Daily missions | `MISSION_POOL` | Leave the pool alone. Adding a World mission changes the day-of-year modulo and therefore shifts which mission every existing child sees today. |
| Progress state | `localStorage` + `syncService` | Keep World progress in its own keys under a `wb_world_` prefix, and in its own context if it needs one. Adding columns to `profiles` or `stats` would pull in a migration and the sync merge logic. |
| Route | `App.tsx` | One `React.lazy` import plus one `<Route>`. Unavoidable and small. |
| Menu label | `constants.tsx` `UI_TEXT.menu` | Two strings, `el` and `en`. Unavoidable and small. |

Only the last two require edits to existing files, and both are additive one-liners.

### Constraints to design against

- **PWA precache budget.** Chunks are kept under 1 MB; that is the stated reason the
  School registry exists. City content must be lazily loaded per city, not bundled.
- **Geolocation is blocked** by the `Permissions-Policy` header. Design for a map or a
  chosen-place model, not the device's position, unless that header change is approved
  separately.
- **Content belongs in TypeScript, not the database.** Every existing content module
  follows this, and the database holds only user state. Putting city content in Supabase
  would break the convention and add RLS and migration work.
- **`strict` is off and lint has a 655-error baseline.** New code cannot rely on either
  as a safety net. `npm run typecheck` and `npm run test` are the gates that work.
- **Content safety is mandatory** on anything AI-facing, per `CLAUDE.md`: Greek and
  English blocklists plus Gemini safety settings at `BLOCK_LOW_AND_ABOVE`. If World
  content is ever generated rather than authored, this applies.
- **Two languages only, both required.** Every user-facing string needs `el` and `en`.
  There is no fallback, so a missing key renders as nothing.

### Existing analogues worth reading first

- `data/units/registry.ts` and `data/units/grade1/index.ts` for the lazy content registry.
- `components/SchoolUnitMap.tsx` for the closest existing "map of places to visit" UI.
- `utils/unlocks.ts` for the single-source-of-truth pattern, if World needs gating.
- `components/games/gameRewards.ts` for daily-capped rewards.

---

## Appendix — repository facts

- Repository: `~/Projects/wisebot`, git remote `github.com/itdev-gr/wisebot_repo`.
- Branch at time of survey: `main`. The World work then moved to `feature/opus-prep`,
  branched from `main` on 10 Σεπτεμβρίου 2026; the uncommitted narration-script changes
  that were in the tree at that moment were stashed and are untouched.
- Over 100 branches exist in this repository.
- `docs/` did not exist before this document; this file creates it.
- Node 24 and `gh` live in `~/.local/bin`, which is not on `PATH` for non-interactive
  shells. Export it first.
- Existing planning documents at the repository root worth reading alongside this one:
  `CLAUDE.md`, `PRODUCT-VISION.md`, `CONTENT-PLAN.md`, `HANDOFF.md`, `AUDIT-BUGS.md`,
  `ONBOARDING-PLAN.md`.
