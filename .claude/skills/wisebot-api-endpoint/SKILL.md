---
name: wisebot-api-endpoint
description: The required structure for a WiseBot serverless endpoint under api/ — CORS, authentication, rate limiting, input validation, kid-safety moderation, credit deduction, and vercel.json maxDuration. Use when adding, editing, or reviewing any file in api/, or when an endpoint returns 401/429/500 unexpectedly.
---

# Writing a WiseBot API endpoint

Endpoints live in `api/` and run as Vercel serverless functions. Shared helpers are in
`api/_lib/`. `api/ai/quiz.ts` is the reference implementation — read it before writing a new
one.

Two endpoints shipped with **no authentication at all** (`API1`, `API2` in `AUDIT-BUGS.md`),
including Stripe checkout. The order below is not stylistic; skipping a step is how those
happened.

## Required order

### 1. CORS, then the preflight short-circuit

```ts
res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
if (req.method === 'OPTIONS') return res.status(204).end();
```

Never reflect `req.headers.origin` directly — `resolveCorsOrigin` (`api/_lib/cors.ts:28`)
exists to whitelist. Admin endpoints use `ADMIN_CORS_HEADERS` from `_lib/adminAuth.js`
instead, because they carry `X-Admin-Token`.

### 2. Authenticate before anything else

```ts
const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: true });
if (!user) return res.status(401).json({ error: 'Authentication required' });
```

`allowGuest: true` only for features guests are meant to try. Anything that **spends money,
touches another user's data, or costs an API call** must use `allowGuest: false` (the
default). Admin endpoints instead call `verifyAdminToken` from `_lib/adminAuth.js`.

The `.js` extension in these dynamic imports is required — the functions are ESM at runtime.

### 3. Reject wrong methods

```ts
if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
```

### 4. Rate limit

```ts
const { aiRateLimit } = await import('../_lib/rateLimit.js');
const rl = await aiRateLimit(req, user, 'quiz', { guest: 20, user: 100, windowMinutes: 60 });
if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });
```

Guests are limited by IP, authenticated users by id. Pick limits proportional to what the
call costs you: an image or video generation deserves far tighter limits than a quiz.

### 5. Validate input

Check required fields, then cap length — `if (topic.length > 4000)`. Unbounded input reaches
a paid model and is billed to you.

### 6. Moderate content — this app is used by children aged 6–12

AI endpoints run user text through `isContentSafe()` (blocklists for both English and Greek)
**and** pass `SAFETY_SETTINGS` to Gemini with `BLOCK_LOW_AND_ABOVE`. Copy both from
`api/ai/quiz.ts`. Check the model's **output** too, not only the input — a clean prompt can
still return something unsuitable.

### 7. Charge credits, on the server

`checkCredits(userId, cost)` then `deductCredits(userId, cost, action)`
(`api/_lib/auth.ts:87` and `:122`). The server is the source of truth. Deduct **after** the
expensive call succeeds, or refund on failure — never leave a child charged for a generation
that errored.

### 8. Errors leak nothing

Log the real message with `console.error('[endpoint] ...', err.message)`; return a generic
one. Never return a stack trace, provider error, or env var name to the client.

## Then register it in vercel.json

Default is `maxDuration: 30` via the `api/**/*.ts` glob. Anything slower needs its own entry
**before** that glob:

```json
"api/ai/video-generate.ts": { "maxDuration": 300 }
```

An endpoint that quietly exceeds its limit fails as a timeout with no useful error.

## Before you add a new endpoint

Check it is not already dead code. The audit found four ghost or no-op endpoints (`API5`–`API8`):
`music-generate.ts` (never called), `suno-callback.ts` (logs and does nothing), and three
`backendAuth` routes the client calls that never existed on the server. Grep for callers
first.
