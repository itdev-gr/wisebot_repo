# WiseBot Academy — Full Bug Audit (28 Μαρτίου 2026)

> **Re-audit 30 Ιουλίου 2026:** τα περισσότερα items έχουν διορθωθεί σε προηγούμενα
> commits. Στο commit `477b8f4` διορθώθηκαν επιπλέον: B2/B4 (BusinessSimulation
> race + double save), L4 (max rank), AC2 (join date), API2 (Stripe checkout/verify
> auth). Παραμένουν ανοιχτά, χαμηλής προτεραιότητας: H2 (blind 90s timeout στο
> HeroFactory — πλέον αβλαβές), H4 (free retry μόνο σε error screen — server
> χρεώνει ούτως ή άλλως), CTX6 (/admin route χωρίς client guard — προστατεύεται
> server-side με PIN + 12h HMAC token), API5 (mismatches μόνο σε νεκρό κώδικα:
> backendAI.chat/quiz χωρίς callers).

Backup tag: `backup-before-audit-20260328-010406`
Rollback commit: `52a5483` (reverted to `38a5619`)

---

## 🔴 HIGH SEVERITY (3)

### B1: Gemini API key exposed client-side in BusinessSimulation
**File:** `components/BusinessSimulation.tsx:102`
`new GoogleGenAI()` is called directly in the browser. All other AI features use `backendAI` proxy. This exposes the API key in the client bundle.
**Fix:** Use `backendAI.business()` instead of direct Gemini SDK.

### H1: Double API calls in HeroFactory
**File:** `components/HeroFactory.tsx:177`
useEffect dependency array includes `hero` object reference. React StrictMode can trigger duplicate generation and double credit charges.
**Fix:** Remove `hero` from deps, use a ref instead.

### C1: Crash on null avatar in Cinema
**File:** `components/Cinema.tsx:469`
`selectedHero.avatar.startsWith('data:')` will throw if avatar is undefined.
**Fix:** Add null check: `selectedHero.avatar?.startsWith('data:')`.

---

## 🟠 MEDIUM SEVERITY (17)

### H2: Race condition between generation and safety timeout
**File:** `components/HeroFactory.tsx:169-172`
Safety timeout sets `setStep(5)` after 45 seconds regardless of generation state. Can cause `heroSavedRef` guard to be bypassed.

### H3: Save effect has incomplete dependency array
**File:** `components/HeroFactory.tsx:200`
References `hero.name`, `resultImage`, `lang` but only depends on `[step]`. Safety timeout can save hero with default image.

### H4: "Try Again" gives free retry without re-spending credits
**File:** `components/HeroFactory.tsx:950`
Clicking "Try Again" re-enters step 4 without deducting credits again.

### L1: Games lock logic inconsistent between Layout and Dashboard
**File:** `components/Layout.tsx:113`
Layout requires `booksRead >= 1 || quizzesPassed >= 1` but Dashboard always shows games as unlocked.

### E1: Quiz loading condition wrong
**File:** `components/Ebooks.tsx:337`
Quiz data loaded only when `Object.keys(loadedQuizzes).length === 0`. If first book fails, subsequent loads skip quiz loading.

### CS1: Stripe verification has stale closures
**File:** `components/CreditStore.tsx:78`
useEffect with `[]` deps references `lang`, `showNotification` — stale closures from initial render.

### B2: BusinessSimulation safety timeout race condition
**File:** `components/BusinessSimulation.tsx:158`
10-second timeout advances to results before API calls return. Shows empty data.

### B3: spendCredits not awaited in BusinessSimulation
**File:** `components/BusinessSimulation.tsx:203`
`spendCredits(COST)` called without `await`. Flow continues even if credit check fails.

### B4: Business save effect fires multiple times
**File:** `components/BusinessSimulation.tsx:167-189`
Dependency `[step, resultLogo]` causes multiple saves. `Date.now()` ID never matches guard.

### W1: WiseBotChat uses localStorage instead of auth context
**File:** `components/WiseBotChat.tsx:124`
`localStorage.getItem('wb_auth_token')` check doesn't verify if token is valid/expired.

### AU1: Dynamic import of Supabase client in login handler
**File:** `components/AuthScreen.tsx:159`
Creates new import each time, adds latency. Should use existing `supabase` instance.

### WF1: Hero unlock check uses wrong ID format
**File:** `components/WiseFriends.tsx:227`
Checks `book_X` / `ebook_X` (underscores) but completedIds use `ebook-X` (hyphens). Heroes never unlock via book reading.

### CTX1: spendCredits accepts 1 arg but called with 2
**File:** `context/EconomyContext.tsx:521`
Second arg (action string) silently discarded. `trackAction` never called by `spendCredits`.

### CTX2: signOut() not awaited before navigate()
**File:** `App.tsx:312`
`signOut()` is async but navigate fires immediately. Can cause auth state flash.

### CTX3: Badge discounts never applied to costs
**File:** `context/EconomyContext.tsx:512-518`
`costs` useMemo has empty deps `[]`. Badge discounts are entirely non-functional.

### CTX4: XP level-up reads stale localStorage
**File:** `App.tsx:426-428`
Inside `setLevel`, reads `wb_xp` from localStorage before React state has persisted. Level-ups delayed by one action.

### CTX5: Credit sync uses Math.max — credits can never decrease
**File:** `services/syncService.ts:121`
`Math.max(local.credits, cloud.credits)` means spending credits can be "undone" by logging in from stale device.

### CTX6: Admin route has no admin role guard
**File:** `App.tsx:479`
Any authenticated user can access `/admin`. No route-level admin check.

---

## 🟡 LOW SEVERITY (18)

### D1: Missing useEffect dependency for completedStages
**File:** `components/Dashboard.tsx:417`

### D3: Video autoplay unmuted fails on mobile
**File:** `components/Dashboard.tsx:789`

### D4: Dashboard video 3 reuses same URL as video 1
**File:** `components/Dashboard.tsx:110`

### L2: Badge count may include non-badge keys
**File:** `components/Layout.tsx:116`

### L3: React.lazy inside AnimatePresence doesn't exit-animate
**File:** `components/Layout.tsx:50`

### L4: nextRank shows same rank when at max
**File:** `components/Layout.tsx:174`

### H5: Wand2 icon mispositioned (-translate-x-1/2 should be -y)
**File:** `components/HeroFactory.tsx:844`

### C2: User-created videos lost on component remount
**File:** `components/Cinema.tsx:374`

### C3: ShareButton receives blob URL (not shareable)
**File:** `components/Cinema.tsx:639`

### AC1: Avatar stored only in localStorage (not synced)
**File:** `components/Account.tsx:84`

### AC2: Join date always shows current year
**File:** `components/Account.tsx:270`

### Q1: Dynamic Tailwind class won't work with JIT
**File:** `components/Quiz.tsx:215`
`hover:${cat.border}` — Tailwind JIT can't detect dynamic classes.

### WF2: giftUsername state never set
**File:** `components/WiseFriends.tsx:221`

### CTX7: useAuth() fallback returns wrong interface
**File:** `context/AuthContext.tsx:345-361`
Includes `updateProfile` (doesn't exist), missing `signInWithGoogle`, `resetPassword`, `isGuest`.

### CTX8: OfflineBanner always Greek
**File:** `App.tsx:367`

### CTX9: PageLoader always Greek
**File:** `App.tsx:350`

### CTX10: PendingVerification always English
**File:** `App.tsx:294-321`

### CTX11: Cost comments all have wrong values
**File:** `context/EconomyContext.tsx:512-518`
Comments say 8/40/50/50/5 but actual values are 6/50/60/60/4.

### CTX12: constants.tsx says "50 credits" but actual cost is 6
**File:** `constants.tsx:36,96`

### CTX13: getTodayMinutes counts actions not minutes
**File:** `context/EconomyContext.tsx:162`

---

## 📊 API ENDPOINT ISSUES (from API audit)

### API1: Missing auth on video-status, suno-status, meshy-status, music-generate
These polling/status endpoints allow unauthenticated access.

### API2: Missing auth on stripe/checkout and stripe/verify
Financial endpoints accessible without authentication.

### API3: Race conditions in all credit operations
Concurrent requests can duplicate or lose credits (no DB-level locking).

### API4: Static admin token never expires
Once intercepted, grants permanent admin access.

### API5: Client-server parameter mismatches in backendApi.ts
At least 5 endpoints always fail because frontend sends wrong field names.

### API6: music-generate.ts is dead code (ElevenLabs)
Never called, no auth, wastes deployment. Can delete.

### API7: suno-callback.ts is no-op
Logs payload but does nothing. Wastes Suno callback call.

### API8: backendAuth (register/login/me) are ghost endpoints
3 endpoints in backendApi.ts that don't exist on server. Dead code.

---

## 📋 SESSION & AUDIO ANALYSIS

### Session refresh: Should NOT lose session normally
Supabase stores tokens in localStorage. Failures from:
- Token expiry + failed refresh
- Service Worker double-reload during auth init
- Network issues during token refresh

### Audio playback: No CSP/header blocking
Issues from:
- Browser autoplay policy (requires user gesture)
- iOS Safari AudioContext restrictions
- CORS on cross-origin audio URLs (Suno CDN)
- Silent error swallowing in .catch(() => {})
