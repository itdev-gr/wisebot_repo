# WiseBot World — Session 1: Current State (discovery only)

Written 10 Σεπτεμβρίου 2026 on branch `feature/opus-prep`. **Nothing in the app was
changed to produce this document.** It records what exists today, so the World /
Explore module can be designed against reality instead of assumptions.

Scope of the survey: the `wisebot` repo, the three sibling checkouts in `~/Projects`,
and the live Supabase project.

---

## 1. Stack

| Layer | What is actually used |
| --- | --- |
| Framework | React 19.2 + Vite 6.2, TypeScript 5.8, ESM (`"type": "module"`) |
| Routing | React Router 7 (`BrowserRouter` in `App.tsx`), all feature screens `React.lazy` |
| Styling | Tailwind 3.4 (+ typography plugin), PostCSS, no CSS modules |
| Animation | Framer Motion 11, aliased as `const motion = m as any` in most files |
| Icons | `lucide-react` |
| Backend | Vercel serverless functions under `api/`, shared helpers in `api/_lib/` |
| Database / auth / storage | Supabase (`@supabase/supabase-js` 2.99) |
| AI | Google Gemini via `@google/genai`, **server-side only** |
| Payments | Stripe |
| Errors | Sentry (`@sentry/react`) |
| PWA | `vite-plugin-pwa` + `workbox-window` |
| Head tags | `react-helmet-async` via `components/SEO.tsx` |

Commands: `npm run dev` (port 3000), `build`, `typecheck`, `lint`, `test` (vitest).

**Safety net is thin and must be respected.** `tsconfig.json` does not enable `strict`,
`npm run lint` has a ~655-error baseline that has never been burned down, and test
coverage is a handful of files (`data/makerLevels.test.ts`, `context/EconomyContext.test.tsx`,
`data/contentCounts.test.ts`, `data/schoolData.test.ts`, `utils/*.test.ts`). A green
`typecheck` plus a green `vitest run` is the realistic gate for new work; a green `lint`
is not achievable today.

### Database

Supabase project `wisebot-academy`, ref `qvqhwnsejbtrbrlfjrgz`, region eu-central-1.
Nineteen tables in `public`, **all with RLS enabled**:

```
profiles · stats · badges · heroes · purchases · credit_transactions · gift_items
user_videos · user_songs · rate_limits · ip_rate_limits · error_logs
phone_verifications · parent_pins · market_listings · market_purchases
print_orders · quiz_best · market_reports
```

Relevant shapes for the World module: `profiles` holds `credits`, `xp`, `level`,
`streak_current`, `streak_best`, `child_name`, `avatar_url`. `stats` is one row per user
with counter columns. `badges` is one row per unlocked badge (`user_id`, `badge_type`) —
a set, not a boolean column per badge. `quiz_best` is one row per `category_id` with a
server-side trigger that refuses a worse run.

### Auth

Supabase auth, wrapped by `context/AuthContext.tsx`. There is no login wall on feature
routes: `SemiPublicRoute` renders content for guests, and the server endpoints enforce
auth themselves via `api/_lib/auth.ts`. Admin is separate and server-side
(`api/_lib/adminAuth.ts`, email + password → 12h HMAC token). Guests are first-class —
progress lives in `localStorage` and is adopted on sign-in.

### i18n

There is no i18n library. Language is a `'el' | 'en'` union threaded as a prop from
`App.tsx` state, persisted in `localStorage` under `wb_lang`, defaulting to the browser
language. Two patterns coexist:

- `UI_TEXT[lang]` in `constants.tsx` — the menu, dashboard, factory, and other
  long-lived screens.
- Inline `{ el: '…', en: '…' }` objects declared next to the component or the data —
  what every game and most newer content files do, e.g. `GeoExplorer`'s question pool.

Both languages are mandatory. Bare string literals in the UI are a review failure.

### How game content is stored

Static TypeScript modules, compiled into the bundle. No CMS, no content tables.

- `data/` — 49 files: `bookData_1.ts` … `bookData_34.ts`, `bookMetadata.ts`,
  `academyCourses.ts`, `academyQuizData.ts`, `generalQuizData.ts`, `heroQuizData.ts`,
  `schoolGrade1-6.ts`, and `data/units/` for the per-subject school curriculum.
- Each mini-game owns its own content inline. `GeoExplorer` declares a ~30-question
  `POOL` at [GeoExplorer.tsx:44](../../components/games/GeoExplorer.tsx#L44); the run
  shuffles and slices ten of them.
- Narration audio is generated offline by `scripts/` and served as static files.

Consequence for World: a content-heavy module can follow the same pattern (typed data
modules under `data/world/`) and ship with zero backend work. A table is only needed if
the content must change without a deploy.

---

## 2. GameCenter

One file, [components/GameCenter.tsx](../../components/GameCenter.tsx), 495 lines,
mounted at `/game` inside `SemiPublicRoute`.

- 22 games, each `React.lazy(() => import('./games/X'))` so each is its own chunk.
- A `GameKey` string union plus a parallel `GAME_KEYS` array is the registry
  ([GameCenter.tsx:41](../../components/GameCenter.tsx#L41)).
- **The active game lives in the URL**, `/game?g=ballrush`, not in state — deliberately,
  so the phone back gesture returns to the list instead of leaving `/game`.
- When a game is active the component renders a `fixed inset-0 z-[9999]` overlay that
  covers the app chrome; the game's own `GameBackButton` is the only way out.
- The menu itself is a hand-written `games` array carrying **static** Tailwind class
  strings per card (gradients, borders, glows). Static on purpose: Tailwind cannot see
  dynamically composed class names.
- Every game takes exactly `{ lang, onBack }`. That is the whole contract.

### Game rewards

[components/games/gameRewards.ts](../../components/games/gameRewards.ts) is the single
funnel: `grantGameReward(gameKey, tier, earnXp, showNotification, lang)`. A tier of 1–3
becomes 10/20/30 XP, capped at **2 grants per game per day**, tracked in `localStorage`
under `wb_gamereward_<gameKey>`. Games pay in XP, never in credits — that was decided on
24 Αυγούστου 2026 and holds: credits are bought by parents, effort earns XP and badges.

---

## 3. EconomyContext — XP, badges, credits

[context/EconomyContext.tsx](../../context/EconomyContext.tsx), 843 lines, wraps the whole
app above `AuthProvider`. It exposes `credits`, `badges`, `stats`, `costs`,
`dailyMission`, `streak`, and the actions `spendCredits`, `earnXp`, `claimBookReward`,
`refundCredits`, `trackAction`, `showNotification`, `syncFromCloud`.

**XP does not live here.** `earnXp(amount, action)` dispatches a `wb:xp` CustomEvent on
`window`; `AppContent` in [App.tsx:453](../../App.tsx#L453) listens, owns the `xp` and
`level` state, persists them to `wb_xp` / `wb_level`, and levels up every `level * 500`
XP. This event is the cleanest seam a new module can use: **dispatching XP requires no
change to EconomyContext at all.**

`trackAction(action)` is the heavier path. It takes one of nine `ActionType` values
(`PASS_QUIZ`, `CREATE_IMAGE`, `CREATE_VIDEO`, `UPLOAD_HERO`, `COMPLETE_HERO`,
`READ_ACADEMY`, `READ_BOOK`, `CREATE_BUSINESS`, `CREATE_SONG`) and in one pass increments
`stats`, unlocks badges, completes the daily mission, awards XP, fires toasts, and writes
the activity log. Side effects run **outside** the state updaters on purpose — React 19
StrictMode double-invokes updaters, and doing rewards inside them double-charged.

Eight badges, all boolean, and the list is duplicated in six places that must stay in
sync: the `Badges` interface and `DEFAULT_BADGES` and `BADGE_META` in EconomyContext,
`SyncBadges` in `services/syncService.ts`, `badgeList` in `components/Layout.tsx`, and the
label maps in `components/Account.tsx`. Note that `explorer` is already taken — it is the
badge for reading 10 Academy stories, and it grants +20 XP on the daily mission.

Credits are deliberately hard to touch: `spendCredits` is synchronous and returns a
boolean, reading `creditsRef.current` rather than state so two calls in the same tick
cannot both pass. The server deducts independently and `profiles.credits` is the source
of truth. `services/syncService.ts` merges cloud and local with three different rules —
credits are cloud-authoritative, stats take the higher value, badges are unioned.

### The Passport / rank ladder

[data/makerLevels.ts](../../data/makerLevels.ts) is the single source of truth for the
seven tiers, derived purely from total XP:

| Tier | Min XP |
| --- | --- |
| Dreamer | 0 |
| Explorer | 300 |
| Creator | 1000 |
| Maker | 2500 |
| Inventor | 6000 |
| Founder | 12000 |
| Legend | 25000 |

`components/MakerPassport.tsx` renders it at `/passport`: current tier, ladder, and a
portfolio built from counts that already exist (`EconomyContext` stats plus the
`wb_quiz_best_*` keys). It **shows only — it awards nothing and charges nothing**, and
`components/MakerLevelUp.tsx` handles the tier-up celebration by watching the same `xp`.

That is the hook a World "Passport / Rewards" surface should reuse: feed XP in through
`wb:xp`, and add a portfolio row to the Passport. The tier maths needs no change.

---

## 4. Is there any latitude/longitude or city data anywhere?

**No. Not one coordinate pair, in any of the four repos or in Supabase.**

Searched `~/Projects/wisebot`, `wisebot-ai`, `wisebot-books`, `wisebot-voices` for
`latitude`, `longitude`, `lat:`, `lng:`, `lon:`, `coordinates`, and separately for
`poi`/`poi_id`. Findings:

- `data/units/grade6/geography-earth-in-space.ts` — the words appear in Greek lesson
  prose and quiz questions about meridians and parallels. One question mentions
  `38° Β, 24° Α` as a riddle. Not data.
- `data/units/curriculum.ts` — the string `coordinates` inside a unit's `topics` summary.
- No `poi`, `poi_id`, or geo table anywhere.

City names exist only as **strings inside quiz answers and story prose**: Athens, Lisbon
and Porto appear in `GeoExplorer`'s capitals questions, in `data/units/grade6/geography-europe.ts`,
and in the Ronaldo story in `data/academyCourses.ts`. There is no structured place entity
anywhere — no id, no country code, no coordinate, no image reference.

The Supabase table list above confirms it: no `pois`, `places`, `cities`, or anything
with a geography column.

**The three sibling repos are stale clones, not separate products.** Their last commits
are all 23 Αυγούστου 2026 and they carry the same `App.tsx`, `components/`, `data/`
layout as `wisebot`, whose HEAD is 3 Σεπτεμβρίου 2026. Nothing unique lives in them.
Anything the World module needs must be created from scratch.

---

## 5. Where a World module should live

The goal is a module that can be deleted in one commit without touching a single existing
game. That argues for new directories rather than new entries in existing files:

```
components/world/          new — WorldMap, CityView, PlaceCard, WorldPassport…
data/world/                new — typed content modules (cities, places, missions)
api/world/                 only if server state is actually needed
docs/world/specs/          the Session 2 schemas
```

Wiring, kept to the smallest possible diff in existing files:

- **Route** — one lazy route in `App.tsx`, alongside `/passport`:
  `<Route path="/world" element={<SemiPublicRoute lang={lang}><World lang={lang} /></SemiPublicRoute>} />`.
  `SemiPublicRoute` gives guests the same read access every other room has.
- **XP** — dispatch through `useEconomy().earnXp(...)`, or reuse `grantGameReward` if the
  World has scored runs with a daily cap. Neither requires editing EconomyContext.
- **Progress** — `localStorage` under a `wb_world_*` prefix, matching every other feature.
  Cloud sync can come later; it is a `syncService` change, so it is a separate decision.
- **Passport** — a new portfolio row in `MakerPassport.tsx` reading World counts. That is
  a one-file, additive change.
- **Do not put World inside `GameCenter`.** It is not one of the 22 arcade games, its
  `{ lang, onBack }` contract does not fit a map-and-progress surface, and adding a
  `GameKey` touches the shared registry.

### Two things the owner has to decide before Session 3

1. **`PRODUCT-VISION.md` line 46 says the opposite of a new module.** Verbatim: «**Worlds**
   ως διαδρομές (Creator/Inventor/Explorer/Founder) — όχι νέα menu items.» In the vision,
   Worlds are *paths through the existing rooms*, not a new room. A World/Explore screen
   with its own map and menu entry contradicts that line. Either the vision moved, or the
   new module should present itself as a path rather than a destination. Session 2 will
   spec the data either way — the schema is the same — but the navigation answer is
   the owner's.
2. **Anything that adds a badge, an `ActionType`, or a `stats` counter is a shared-file
   change** across EconomyContext, syncService, Layout and Account, plus a `badges` row
   type in Supabase. If World rewards must be badges rather than XP, that needs explicit
   approval, because it touches the paid-economy files the current rules put off limits.

---

## Appendix — the seams, in one list

| I need to… | Use | Touches shared code? |
| --- | --- | --- |
| Award XP | `useEconomy().earnXp(n, 'ACTION')` → `wb:xp` → `App.tsx` | No |
| Award XP for a scored run, capped daily | `grantGameReward(key, tier, …)` | No |
| Show a toast | `useEconomy().showNotification(emoji, title, sub)` | No |
| Read the child's tier | `makerProgress(xp)` from `data/makerLevels.ts` | No |
| Read counts for a portfolio | `useEconomy().stats`, `readLocalQuizBests()` | No |
| Charge credits | `spendCredits(n, feature)` + a server-side deduction | **Yes** |
| Add a badge or a stat counter | EconomyContext + syncService + Layout + Account + DB | **Yes** |
| Persist across devices | `services/syncService.ts` + a Supabase table + RLS | **Yes** |
