# WiseBot Academy

Greek/English educational web app for children aged 6–12 — AI-generated heroes, ebooks with
narration, quizzes, music, cinema, mini-games, and a school/gamification track. Parents buy
credits; children spend them on AI generations. Built and maintained solo by the repo owner.

## Stack

React 19 + Vite 6 + TypeScript 5.8 + Tailwind 3, deployed on Vercel.
Supabase (Postgres, auth, storage) · Stripe (payments) · Google Gemini via `@google/genai`
(all AI) · Sentry (errors) · PWA via `vite-plugin-pwa` · React Router 7 · Framer Motion.

- **Supabase project**: `wisebot-academy`, ref `qvqhwnsejbtrbrlfjrgz`, region eu-central-1
- **Vercel project**: `wisebot-claude-ok` (`prj_52m5VPabhFiNhhQkzRmgGBnA1yA0`), team `itdev-gr`
- **Git remote**: `github.com/itdev-gr/wisebot_repo`, branch `main`

## Layout

```
App.tsx            routing + top-level auth/XP wiring
components/        64 files; feature-per-file, several over 1000 lines
components/games/  EndlessRunner, HeroFusion, TowerDefense, GeometryDash
context/           AuthContext, EconomyContext (credits, badges, streaks)
api/               Vercel serverless functions
api/_lib/          auth, adminAuth, rateLimit, cors — shared, always use these
data/              49 files: book content, academy courses, quiz data
services/          supabaseClient, geminiProxy, syncService, backendApi
scripts/           TTS + ebook generation, SEO page prerender
```

`server/` contains only a stray `node_modules` — dead, ignore it.

## Conventions

- **AI never runs in the browser.** All Gemini calls go through `api/ai/*`. `vite.config.ts`
  deliberately blanks `process.env.API_KEY` so an accidental client-side SDK call cannot pick
  up a key. Client talks to endpoints via `services/geminiProxy.ts`.
- **UI text** comes from `UI_TEXT[lang]` in `constants.tsx` (`const t = UI_TEXT[lang]`). Greek
  and English both required — no bare string literals in the UI.
- **Path alias** `@/*` maps to the repo root.
- **Content safety is mandatory** on anything AI-facing: Greek + English blocklists plus
  Gemini `SAFETY_SETTINGS` at `BLOCK_LOW_AND_ABOVE`. The audience is children.

## Commands

```bash
npm run dev       # vite, port 3000
npm run build     # vite build
npm run preview
npm run typecheck # tsc --noEmit
npm run lint      # eslint . — flat config in eslint.config.js
```

Vercel build additionally runs `node scripts/generate-seo-pages.mjs`.

## Known state — read before changing anything

`AUDIT-BUGS.md` lists ~38 audited bugs. Most are fixed; still open and low priority: `H2`,
`H4`, `CTX6`, `API3`, `API5`.

**The safety net is still thin**: no tests, no CI, and `tsconfig.json` does **not** enable
`strict`. `typecheck` and `lint` now exist; lint reports a 655-error baseline that has not
been burned down, so a clean run is not yet a passing gate. Reviews remain the main line of
defence, which is why the `.claude/skills/` here encode the failure modes this codebase
actually produces:

- `wisebot-review` — the six recurring bug shapes; run before committing
- `wisebot-api-endpoint` — required structure for anything under `api/`
- `wisebot-credits` — rules for the paid economy

Read the relevant one rather than relying on general React or Node instincts; the bugs here
are specific and repeat.

## Environment

`.env` (gitignored, never commit or paste) holds `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`,
`VITE_STRIPE_PUBLISHABLE_KEY`, `VITE_API_URL`. `VITE_ADMIN_PIN` and `VITE_PARENT_PIN` are
**stale leftovers referenced by no code** — admin auth is server-side via
`api/_lib/adminAuth.ts` (email + password → 12h HMAC token). Delete them rather than reusing
them: any `VITE_`-prefixed value is compiled into the public browser bundle.

## Working notes

- `git status` in this directory can hang past two minutes (iCloud Desktop sync). Run git
  commands in the background rather than blocking on them.
- Node 24 LTS and `gh` live in `~/.local/bin`, which is **not** on PATH for non-interactive
  shells — `export PATH="$HOME/.local/bin:$PATH"` first.
