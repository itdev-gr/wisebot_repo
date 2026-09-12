# WiseBot World — tickets

Written 12 Σεπτεμβρίου 2026 by the «World engine & release» session, from
[PRODUCT-BRIEF-v1.md](PRODUCT-BRIEF-v1.md) and measured against the tree at `f52ffbf`
(PR #69 merged: Paris, Rome, London, Amsterdam are live on main).

**What overrides what.** The decisions table at the top of the brief beats the brief's own
prose. This file beats neither: where it disagrees with the table, the table wins and this
file is wrong. [STATUS.md](STATUS.md) §0α says what already exists, and a ticket is only
here because somebody went and checked that it does not.

**How it was built.** Eight readers took a cluster of brief sections each, established for
every item whether it EXISTS, PARTIALLY EXISTS or DOES NOT EXIST with file and line as
evidence, and wrote a ticket only for the gaps. Three auditors then went back to the code
through one lens each — duplication, file conflicts and ownership, contract violations.
Everything the auditors changed is marked **Changed after review** on the ticket itself,
so the correction is visible rather than silently applied.

53 tickets: 8 P0, 31 P1, 14 P2. By owner: engine 41, owner 7, i18n 3, content 2. The
engine share is that lopsided because most of what the brief asks for is a schema or a
gate, and because the two content sessions are already busy with cities.

---

## 0. Rules that apply to every ticket below

These come out of the audits. Ignoring them is how this project has already lost work
twice — `CountryScreens.tsx` was overwritten on top of somebody's edits, and it was
overwritten again.

**One session owns `data/world/types.ts` for a whole wave.** Sixteen tickets edit it, and
three separate groups each declared themselves an exclusive lock on it with no order
between them. The order is: `progress-version-migration`, then the five `loc-*` field
tickets as one sequence, then `mm-schema`, then `world-family-info-schema`, then the i18n
flag. One branch, one session, in that order. Not five worktrees.

**`data/world/world.test.ts` is the merge bottleneck of the quarter.** Twenty-two tickets
append an invariant to a 484-line file, and four of them each claim to go first. They go:
`loc-ab-quest-rule`, `i18n-countries-gate`, `mm-tests`, then the rest. Anything that is a
self-contained rule set belongs in a sibling file instead — `data/world/privacy.test.ts`,
`data/world/museum.test.ts` — and only invariants about the shared content model belong in
`world.test.ts` itself.

**Four P0s rewrite the same forty lines of `PlaceCard.tsx`.** The geofence block at
`:402-420` and the question section at `:705-783` are touched by `loc-ab-quest-rule`,
`quest-onsite-order`, `world-stamp-onsite-flag` and the analytics ticket, plus two P1
geofence tickets. They are sequenced in that order and they do not run in parallel. The
same file is also where the «Άλλη μία;» card and the «Λάθος σημείο» button land, both of
which the engine session is building now — see §4.

**An owner ticket never writes code.** Three owner tickets in the draft listed TypeScript
and JSON files. The walk, the decision and the price are the owner's; the commit is a
session's. Where that split was missing it has been made, and the owner ticket now names
the session ticket that lands its result.

**`data/world/registry.ts` is generated.** Two tickets listed it. Any wave that regenerates
it has exactly one session run `node scripts/world/build-registry.mjs` at the end, not
twelve translator sessions each running it against a generator another ticket is editing.

**A ticket that cannot be checked is not done.** The audits found a dozen acceptance
criteria nobody can close — «a genuinely standalone visit», «no dark patterns», «the owner
picks the number». Where the criterion survives, it now names who closes it. Where it did
not survive, it is gone. `geo-low-accuracy-copy` is the one to copy: it names the pure
function, gives the three-condition rule, and supplies the desktop-IP case that must
return `'far'`.

---

## 1. What is already true — do not raise a ticket for these

Eighty items were checked and found already built. The full list is §5. The ones most
likely to be re-raised by somebody reading the brief cold:

- **The six languages exist and CJK is not happening.** `WorldLang` is exactly
  el/en/de/fr/es/it. Chinese, Japanese, Arabic and Korean have zero code and zero data,
  and the decisions row says not in 2026. There is nothing to build and nothing to remove.
- **L1 country arrival, L2 city seal and L4 country seal all work**, with a ceremony.
  Only the L3 museum stamp is missing.
- **The GPS gate is 60 m, 120 m for areas, with a 40 m accuracy tolerance**, and it is
  never used inside a museum. Only the bad-accuracy wording is wrong.
- **`/world` URLs are indexed** — the generator emits 171 pages today across 25 countries,
  9 cities and 136 places, sitemap included.
- **Nothing stores a coordinate and nothing uploads a photo.** §28 and §29 hold today. Two
  tickets would have broken that; both were rewritten.
- **Map tiles and audio already cache after first use**, so «offline» is narrower than the
  brief implies and is correctly P2.

---

## 2. Open decisions only the owner can close

| # | Decision | Blocks |
| --- | --- | --- |
| 1 | May an on-site signal leave the device at all, given §28 forbids storing the time and §29 lists child-location history by name? | `world-analytics-minimum`, and with it the North Star |
| 2 | What is the L3 museum stamp worth in XP, on the `data/makerLevels.ts` ladder where Explorer starts at 300? | `l3-museum-stamp` |
| 3 | The four test prices, created in Stripe, and which of City Adventure / Greece Pack a Greek city falls under | `pricing-engine-gate` |
| 4 | Field test #0: which three mission types the children actually ask for | every P2 in the quest cluster |
| 5 | Walk the 16 Greek C-grade places, and Athens for the first Gold sign-off | `loc-greece-c-walk`, `gold-signoff-athens` |
| 6 | Vercel Web Analytics: switch it on and accept a code change, or drop it | `vercel-web-analytics` |

---

## 3. Suggested order

1. `session-split-ownership`, `progress-version-migration`, `i18n-machine-translated-flag`
   — three small tickets that arbitrate everything after them.
2. `i18n-countries-24` with its gate. Twenty-four countries currently show English inside
   a German, French, Spanish or Italian screen, and three of the four cities merged
   yesterday have no overlay at all. This is the largest visible defect in the product.
3. `loc-ab-quest-rule`. Six non-Greek C-grade places are quest destinations today.
4. The `loc-*` field wave, in one branch.
5. `quest-onsite-order` and the two geofence tickets.
6. Museum mode, then the passport stats page.
7. Everything P2, after the field test has said which of it matters.

---

## 4. What the engine session is building right now

Not tickets — in flight or already on the branch, listed so nobody writes them twice.

| | State |
| --- | --- |
| World stamps in Supabase (`world_stamps`, union merge, insert-only, seals re-derived) | **Done**, `aa04c16`. Migration applied. |
| Explorer quizzes stop reporting `PASS_QUIZ` | **Done**, `87c0741`. |
| «Άλλη μία;» card after a finished place | In flight |
| «Λάθος σημείο» button for parents, three fixed options | In flight |
| Kore narration for Paris, Rome, London, Amsterdam (284 clips, el+en) | In flight |

---

## P0 — blocks the pilot

Nothing below this line ships a city to a family until these are done. Six of them; four are one-file changes that unblock everything else.

### i18n-countries-gate — Test the countries overlay for completeness, the way city overlays are already tested

**P0** · owner **engine** · brief §20 (AI → DRAFT → VALIDATION → PUBLISH), decisions row §20 ('η πύλη σήμερα: 120+ invariants'); §21

The reason 24 countries sat untranslated without anyone noticing is that nothing tests the countries overlay. City overlays have a gate that fails loudly; the front door has none. Without this, ticket i18n-countries-24 can be reported done while half the facts are missing, and the same drift starts again with the next country.

**Today.** data/world/world.test.ts is 484 lines and 159 passing invariants. It tests city overlays through the real loader (:440-474 '<city> is completely translated into <lang>'). It contains NO reference to `loadCountries`, `CountriesTranslation` or `mergeCountriesTranslation` — grep returns zero hits. So countries.de.json holding two countries out of twenty-five is invisible to the suite.

**Done when**

- A new `describe('countries overlay')` block in data/world/world.test.ts iterates the four languages that have a file (derive them from the same source `AVAILABLE_LANGS` uses, do not hardcode a list that can drift).
- For each language it calls `loadCountries(lang)` — the real loader, not the JSON — and asserts that every country in `COUNTRIES` has a non-empty `name[lang]`, a non-empty `intro[lang]`, and a `facts` array where every element has a non-empty `[lang]`, with a failure message naming the country id and the missing field.
- It asserts the same for every city in `CITIES`: non-empty `name[lang]` and `intro[lang]`.
- It asserts `facts.length` is unchanged by the merge (a translator adding a fifth fact must fail, not silently vanish).
- It asserts no overlay value is byte-identical to the `en` source, the same 'Greek copied into the English slot' check as world.test.ts:181.
- The overlay completeness test at world.test.ts:449-473 is extended to walk `trails` as well as `places` — line 461 currently walks only places, so an untranslated trail name passes today (latent: all six translated cities happen to have their trails filled in).
- The new tests FAIL on the current tree (proving they observe the real gap) and PASS once i18n-countries-24 lands.

**Schema**

```ts
No schema change. `loadCountries(lang)` already returns `{ countries: Country[]; cities: City[] }` (data/world/registry.ts:202-218).
```

**Files.** `data/world/world.test.ts`

**Risk.** world.test.ts is engine-owned (docs/world/SESSION-SPLIT.md:37) and is the single most contended file in the module — no i18n or content session may open it. Land this BEFORE the four translator sessions start, or they will all be blocked on a red suite they are not allowed to fix. The test must be written so that a language with no countries file at all is skipped rather than failed, otherwise adding a nl/pt slot later turns the suite red on day one.

### i18n-machine-translated-flag — `machineTranslated` flag on every translation overlay, surfaced in the UI

**P0** · owner **engine** · brief §21 ('Μετά AI translation layer με flag human_verified / machine_translated'), decisions row §21: 'Flag machine_translated: P1'

Brief §20 forbids AI auto-publish and requires the provenance of every published string to be visible. Today a translation that came out of a machine and one a person verified are indistinguishable in the data and on screen, so the moment the AI translation layer arrives there is no way to tell a parent — or a reviewer — which is which.

**Today.** Nothing. `machine_translated`, `machineTranslated`, `human_verified` and `humanVerified` return zero hits across data/, components/, hooks/, scripts/, api/ and docs/. All 28 existing overlay files are human/agent-authored and pass the completeness gate, but nothing records that. `CityTranslation` (data/world/types.ts:407-413) and `CountriesTranslation` (:445-448) carry only `lang`, `cityId`/`countries`. `mergeCityTranslation` (mergeTranslation.ts:139-152) reads the overlay and discards everything that is not text, so the flag would be dropped even if the JSON carried it.

**Changed after review.** RESEQUENCED. The draft said land this AFTER the translation waves and sweep every existing file to `machineTranslated: false`. That would stamp the largest batch of unread machine text in the module's history as human-verified, which is the exact opposite of what §21 asks the flag for. It lands FIRST, the default for anything a translator session produces is `true`, and it flips to `false` per file only when a named adult has read it — the §20 gate.

**Done when**

- data/world/types.ts adds `machineTranslated?: boolean` to `CityTranslation` and to `CountriesTranslation` (additive — permitted by the freeze rule at types.ts:6-8), documented as: true means the text came out of a machine and no human has verified it.
- data/world/types.ts adds `machineTranslated?: boolean` to `CityModule` so the flag can travel out of the loader; `mergeCityTranslation` copies it from the overlay onto the returned module, and returns it as `false`/absent when no overlay was applied.
- `loadCountries` (registry.ts:202-218) returns the countries overlay's flag alongside `{ countries, cities }`, and `useWorldContent` (World.tsx:152-196) keeps it in state.
- One default, stated once and enforced: absent means human-verified. A test asserts every file in data/world/i18n/ declares the key explicitly (true or false) so silence is never the answer.
- The UI says so: where `TranslationNote` already sits (World.tsx:416-427), a machine-translated city shows a short badge in the child's own language — six strings in the existing `T` dictionary shape (`UiText`, worldUi.ts:96-100) — distinct from the existing 'not translated yet' note, which is a different state.
- No existing overlay is marked machine-translated: all 28 current files get `"machineTranslated": false` (they were written and gate-checked, not machine-dumped).
- `npm run typecheck` clean and `npx vitest run data/world/world.test.ts --exclude '**/.claude/**'` green.

**Schema**

```ts
data/world/types.ts:

  interface CityTranslation { lang: WorldLang; cityId: CityId; machineTranslated?: boolean; places: Record<PlaceId, PlaceTranslation>; trails?: ...; }
  interface CountriesTranslation { lang: WorldLang; machineTranslated?: boolean; countries: Record<CountryId, CountryTranslation>; }
  interface CityModule { places: Place[]; trails?: Trail[]; machineTranslated?: boolean; }

JSON: a top-level `"machineTranslated": false` sibling of `"lang"` in all 28 existing files — they were written and gate-checked before this flag existed. The 12 new files from i18n-overlays-rome-london-amsterdam and the 4 from i18n-countries-24 are born `true` and flip to `false` only when a named adult has read them; see "Changed after review" above. Per-place granularity (`PlaceTranslation.machineTranslated`) is deliberately NOT in scope — the file is the unit a translator produces and the unit the gate already checks; revisit only if a mixed file ever actually exists.
```

**Files.** `data/world/types.ts`, `data/world/mergeTranslation.ts`, `data/world/registry.ts (GENERATED — via scripts/world/build-registry.mjs if the loader signature changes)`, `components/world/World.tsx`, `components/world/worldUi.ts`, `data/world/world.test.ts`, `data/world/i18n/*.json (28 files, one added key each)`

**Risk.** Touches data/world/types.ts, which docs/world/SESSION-SPLIT.md:33 calls frozen and which ticket i18n-nl-language-slot also wants — sequence them, do not run them in parallel. It also adds a key to all 28 i18n JSON files while i18n-countries-24 and i18n-overlays-rome-london-amsterdam are rewriting some of those same files: land this AFTER both, or do the JSON pass as a scripted one-liner at the end. registry.ts is generated — if the loader's return type changes, fix scripts/world/build-registry.mjs, never registry.ts.

### loc-ab-quest-rule — Enforce «only A/B inside a quest» — there is no test for it today

**P0** · owner **engine** · brief §7 ("Μόνο A και B μέσα σε quests"), decisions row §7

A child walks to a pin we are not sure about, the GPS gate opens anyway, and the stamp lands on the wrong corner. Today confidence is graded, stored, and then never read again by anything that runs.

**Today.** Grading works and is tested for MEMBERSHIP only: data/world/world.test.ts:302 asserts `expect(['A','B','C']).toContain(loc.confidence)` — that is the only assertion about confidence in the whole suite. NO TEST enforces the A/B rule; I grepped every .ts/.tsx/.mjs under components, data, scripts, hooks, api, utils and `confidence` appears only in data/world/types.ts:128, data/world/world.test.ts:302, data/world/__fixtures__/sample.ts:82/121/160/199, scripts/world/build-registry.mjs:57 and scripts/world/resolve-coords.mjs:153-165/253/291/324. No component reads it. The quest gate itself is components/world/PlaceCard.tsx:405-420 (`locate()` → `isWithin(...)` → `setGeo('here')`), which branches on `anchor` only. So a C-grade place is fully quest-eligible right now. Live C-grade places in NEW (non-Greek) pilot cities: amsterdam-vondelpark, amsterdam-scheepvaartmuseum, amsterdam-albert-cuyp-market, amsterdam-hortus (data/world/coords/amsterdam.json), london-covent-garden, rome-palazzo-massimo. Trails get no check either — data/world/world.test.ts:374-380 validates only that a trail's placeIds exist in its own city.

**Done when**

- A new invariant in data/world/world.test.ts fails when a place in a NEW city (any city whose countryId is not `greece`) has `location.confidence === 'C'` AND is reachable as a quest destination — i.e. it is listed in any `Trail.placeIds`, or it is not excluded from the GPS gate.
- The Greek exception from the decisions row is encoded as data, not as a hand-maintained skip list in the test: a C-grade Greek place passes, a C-grade Amsterdam/London/Rome/Paris place fails. The test message names the place id and says which of the two rules it broke.
- components/world/PlaceCard.tsx does not offer «Είμαι εδώ!» (or offers it without awarding the stamp) for a place the rule excludes; the place still renders, still shows its story and its map pin, per §7 «C = μία πηγή (στον χάρτη, όχι mission destination)».
- Running `npx vitest run data/world/world.test.ts` today, before any content fix, FAILS on the six non-Greek C places listed above — the ticket is not done if the test passes on unchanged data.
- A short comment in the test states why Greece is exempt and points at the decisions row, so the next session does not "fix" the exemption.

**Schema**

```ts
No new persisted field. The rule reads `Place.location.confidence` (data/world/types.ts:128) and `City.countryId` (data/world/types.ts:306). If an explicit opt-out is preferred over deriving it: `Place.questEligible?: boolean` — but derive it first, a boolean that content can set defeats the invariant.
```

**Files.** `data/world/world.test.ts`, `components/world/PlaceCard.tsx`

**Risk.** data/world/world.test.ts is engine-owned (docs/world/SESSION-SPLIT.md:35) but is the single file every parallel session wants to append an invariant to — land this before the other location tickets add theirs. The bigger risk is the fix direction: the honest resolution for the six non-Greek C places is to re-seed them (find a second source) or drop them from trails, NOT to hand-edit the confidence letter up to B. State that in the test message.

### progress-version-migration — A version bump on wb_world_progress silently erases the whole passport

**P0** · owner **engine** · brief §12, §13; decisions row §12–13; spec docs/world/specs/02-progress-and-rewards.md ("Bumped only for a breaking shape change; the reader migrates or resets")

The passport is the one thing the brief says the child keeps forever (§4, §13). Today the next schema change quietly deletes it — every stamp, every seal, every date — and the child finds a blank book with no explanation and no way back.

**Today.** `components/world/useWorldProgress.ts:126` — `if (parsed?.v !== VERSION) return { ...EMPTY };`. The stored object is already at VERSION 2 (useWorldProgress.ts:42), so this path has fired for real at least once. Spec 02 line 61 allows the reader to "migrate or reset"; the implementation chose reset and the comment at useWorldProgress.ts:82 says so ("the reader resets rather than guesses"). There is no test file for this hook at all — `find . -name '*.test.ts*'` lists no `useWorldProgress.test.ts`. Cloud sync would rescue a wiped passport, but it is deferred (spec 02 lines 120-127) and `world_stamps` does not exist in the repo, so localStorage is the only copy a child has.

**Changed after review.** PROMOTED and moved to the front of the engine queue. Three other tickets each carry their own copy of the «do not bump VERSION» test; they cite this one instead. A version bump today silently empties every passport on every device, and stamps are now also in Supabase, so the two would disagree.

**Done when**

- `read()` migrates forward instead of discarding: for any stored `v` lower than `VERSION`, every field whose shape is unchanged is carried over and only genuinely incompatible fields are dropped, with the per-version step written as a small explicit ladder rather than a spread.
- An object with an unreadable or higher-than-current `v` (a child who used a newer build on another browser profile) is still not thrown away: the known-shaped maps (`entries`, `places`, `exhibits`, `riddles`, `museums`) are salvaged field by field with `?? {}`, as `read()` already does for a same-version object (useWorldProgress.ts:127-137).
- Nothing here re-pays XP. Migration writes progress only — the same rule spec 02 lines 155-157 states for cloud sync, for the same reason: `earnXp` on load would pay a child again on every device.
- New `components/world/useWorldProgress.test.ts` cases: a v1-shaped object keeps its stamps, a v-999 object keeps its stamps, a `{}` yields EMPTY, a non-JSON string yields EMPTY without throwing, and a successful read followed by a write round-trips unchanged.
- `npm run typecheck` clean.

**Schema**

```ts
No stored-shape change. Only the reader at components/world/useWorldProgress.ts:121-141 changes, plus `EMPTY` (96-105) staying the single source of defaults. Rule to write into the file's header comment, next to rule 3 "Ids are permanent": a new field is added optional and defaulted with `?? {}` / `?? []` and `VERSION` is NOT bumped; `VERSION` moves only when an existing field changes meaning, and then only with a migration step beside it.
```

**Files.** `components/world/useWorldProgress.ts`, `components/world/useWorldProgress.test.ts`

**Risk.** Obeys spec 02 in full — no credits, no badge, no `trackAction`, no `MISSION_POOL`, no shared economy file, no XP paid on read. The risk is the file itself: `useWorldProgress.ts` is the single authority for every award (its header comment says so at lines 1-24) and is touched by ticket `l3-museum-stamp` as well, so the two must be done by one session in sequence or they will collide. Do this one first: it is small, it is the safety net `l3-museum-stamp` relies on, and it is the only ticket in this cluster whose absence can destroy data a child already has.

### quest-onsite-order — On site, the question comes before the story (action before information)

**P0** · owner **engine** · brief §16, decisions row §16 (“Ισχύει για τη ροή επί τόπου … Εφαρμόζεται μαζί με το Quest Engine”); §9

Today a child standing in front of the Parthenon is handed 200 words to read before anything is asked of them. The brief’s core UX principle is the opposite: do something, get curious, then get told. This is the one thing in this cluster the decisions table does NOT defer, and the field test measures whatever flow is on the phone that day.

**Today.** components/world/PlaceCard.tsx renders in this fixed order: HEADER :494 → STORY :563 → FACTS :577 → FINDING THE DOOR :592 → HOW TO GET THERE :606 → MUSEUM DOOR :680 → QUESTION :705. The question is already gated on `onSite` (:406, :706, :717) but the story is never gated and always renders first. There is no at-home vs on-site mode anywhere in the component.

**Done when**

- From home (geo idle / `onSite` false) nothing changes: the story, facts and findIt are readable in full, exactly as today — the decisions row says «Από το σπίτι η ιστορία διαβάζεται ελεύθερα».
- After «Είμαι εδώ!» succeeds (geo === 'here'), the place card presents the question FIRST and the story after it; the story is reachable in one tap at any moment (never hidden behind a correct answer) so a child who wants to read is not blocked.
- A place already stamped (`stamp` present) opens in the at-home order — the walk was done once, and re-reading is not a mission.
- `location.findIt` stays above the question in the on-site order: it is the “βρες” half of the principle and it is the sentence a child uses while standing there.
- Switching language mid-place does not change which order is showing, and does not reset the shuffle (PlaceCard.tsx:417 already seeds the shuffle by place id — do not make `lang` a dependency).
- No second call to `onComplete`: the fired-once ref at PlaceCard.tsx:434-451 still holds under a double tap and under StrictMode double-invoke.
- A screenshot or short screen recording of both orders is attached to the ticket before the field test.

**Files.** `components/world/PlaceCard.tsx`

**Risk.** The brief’s literal §16 sequence is «Είμαι εδώ» → βρες/μέτρα → ιστορία → ερώτηση. The «μέτρα» step is an OBSERVE/COUNT mission kind, and those kinds are deferred until after the field test by the §10 decisions row — so §16 cannot be shipped literally today. This ticket ships the half that needs no new mission kind (question before story, findIt kept on top); the counting step arrives with quest-mission-union. If the owner reads §16 as all-or-nothing, this becomes P1 and waits. Second risk: PlaceCard.tsx is 39 KB and is engine-owned — no content session may touch it while this is open (STATUS.md §0α records CountryScreens.tsx being overwritten twice this way).

### session-split-ownership — SESSION-SPLIT.md does not know the i18n session exists, and points at a file that does not

**P0** · owner **engine** · brief Λειτουργικός κανόνας row; docs/world/SESSION-SPLIT.md

Three sessions work in parallel and the ownership document describes two. Every i18n ticket in this backlog is therefore unverifiable against the spec, and a session looking up who owns the progress hook finds a path that was never there.

**Today.** SESSION-SPLIT.md names Session A (engine) and Session B (content) only. Line 37 assigns `hooks/useWorldProgress.ts`; there is no `hooks/` directory — the file is `components/world/useWorldProgress.ts`, and nine tickets touch it. `data/world/types.ts:22` repeats the same wrong path.

**Done when**

- SESSION-SPLIT.md gains a third column for the i18n session and assigns `data/world/i18n/**` to it explicitly.
- The stale `hooks/useWorldProgress.ts` path is corrected in SESSION-SPLIT.md:37 and in the comment at data/world/types.ts:22.
- Every path that several tickets edit but the split assigns to nobody gets an owner: `data/world/mergeTranslation.ts`, `data/world/seo.ts`, `data/world/narration.ts`, `scripts/world/generate-world-seo.mjs`, `utils/geo.ts`, `utils/analytics.ts`, `utils/platform.ts`, `vite.config.ts`.
- The document states the landing order for `data/world/types.ts` and `data/world/world.test.ts` — see §0 of this file — rather than leaving four tickets each claiming the front of the queue.

**Files.** `docs/world/SESSION-SPLIT.md`, `data/world/types.ts`

**Risk.** Cheap to write and easy to skip, which is why it is P0: every other ticket in this file is arbitrated by it.

### world-stamp-onsite-flag — Record whether a stamp was earned on the pavement or on the sofa

**P0** · owner **engine** · brief §34 North Star ("Completed REAL-WORLD Missions per Family Trip"), §28

Without this the North Star cannot be computed at all: a story read at home and a place reached on foot are today the same stamp. This is the single measurement the pilot is supposed to prove.

**Today.** The on-site state exists but dies in the component. components/world/PlaceCard.tsx:402-419 holds `geo: 'idle'|'checking'|'here'|'far'|'error'` and sets `onSite` at :406; the button at :626-638 gates the question on it. But `onComplete` is called with the boolean answer only (PlaceCard.tsx:55, :450), World.tsx:527-537 passes that straight to `visitPlace`, and components/world/useWorldProgress.ts:268 writes `{ at: today(), correct }`. `PlaceStamp` (useWorldProgress.ts:74-79) has no on-site field. Note useWorldProgress.ts lives at components/world/useWorldProgress.ts, not hooks/, despite SESSION-SPLIT.md:37.

**Done when**

- `PlaceStamp` gains `onSite?: boolean` (useWorldProgress.ts:74-79). Optional, so existing stored progress keeps loading — see the risk note on VERSION.
- `PlaceCard`'s `onComplete` signature becomes `(correct: boolean, onSite: boolean)` and passes its own `geo === 'here'` (NOT the `onSite` const at PlaceCard.tsx:406, which is true for any already-stamped place and would mark re-reads as real-world).
- `visitPlace(place, correct, city, cityPlaceIds, countryCityIds, onSite)` stores it. Awarding logic, XP and the seal rules are unchanged — this ticket must not alter a single XP number.
- A test in data/world/world.test.ts (or a new useWorldProgress test) asserts: a stamp earned with onSite=false stays false after a later on-site re-open (the first stamp is the record), and that `read()` accepts stored progress written before this field existed.
- The passport UI is NOT changed in this ticket. Nothing the child sees moves.

**Schema**

```ts
components/world/useWorldProgress.ts:

  export interface PlaceStamp {
    at: string;
    correct: boolean;
    /** True when the question was unlocked by «Είμαι εδώ!» rather than read at home.
     *  Absent on stamps written before this field existed — treat absent as unknown,
     *  never as false, in any reporting. */
    onSite?: boolean;
  }

  visitPlace: (place, correct, city, cityPlaceIds, countryCityIds, onSite: boolean) => WorldAward | null
```

**Files.** `components/world/useWorldProgress.ts`, `components/world/PlaceCard.tsx`, `components/world/World.tsx`

**Risk.** Do NOT bump `VERSION` in useWorldProgress.ts — `read()` at :121-141 throws away the whole passport when the version differs, so a bump would wipe every existing child's stamps to add an optional field. Adding it optionally is backward-compatible by construction. Privacy (§28): the flag is a single boolean derived from a comparison that already happens on-device; no latitude, longitude, accuracy, distance or timestamp-of-fix is stored or passed — `PlaceCard.tsx` keeps the Fix in local state and drops it, and that must stay true. World.tsx has been overwritten by concurrent sessions before (STATUS.md:41-43) — one session on this file.

### i18n-countries-24 — Translate the 24 untranslated countries (and 3 missing city cards) at the front door

**P0** · owner **i18n** · brief §21 (P0 — Languages), decisions row §21 ('six live'); STATUS.md §0α item 3 · after `i18n-countries-gate`

The world list is the first screen in every language. A German child today lands on a list headed in German and reads GREECE… no wait — reads Italy, United Kingdom, Netherlands, Japan, Egypt and 19 more in English, with English intros and English facts. The decisions row asserts six LIVE languages; four of them are skin-deep until this lands. STATUS.md's claim is confirmed and is in fact slightly worse than stated.

**Today.** The loading and merging plumbing is complete and correct (data/world/registry.ts:184-218, data/world/mergeTranslation.ts:166-196). Only the data is missing. data/world/i18n/countries.{de,es,fr}.json each contain exactly two entries: `greece` (complete) and `france` (cities.paris ONLY — no name, no intro, no facts). countries.it.json contains `greece` (complete) and `france` (complete: name, intro, 4 facts, cities.paris). There are 25 country modules in data/world/countries/ carrying 94 facts between them, and 9 cities.

**Done when**

- Every one of the 25 ids in data/world/countries/ appears in each of data/world/i18n/countries.{de,fr,es,it}.json with a non-empty `name`, a non-empty `intro`, and a `facts` array of exactly the same length as that country's own `facts` in data/world/countries/<id>.ts (austria 4, belgium 4, canada 4, china 4, croatia 4, cyprus 4, czechia 4, denmark 4, egypt 3, france 4, germany 3, greece 3, hungary 4, italy 4, japan 3, mexico 3, netherlands 4, poland 4, portugal 4, spain 4, thailand 3, turkey 4, united-arab-emirates 4, united-kingdom 4, united-states 4 — 94 in total per language).
- `countries.france` in countries.de.json, countries.es.json and countries.fr.json gains the `name`, `intro` and 4 `facts` it is currently missing (countries.it.json already has them — do not rewrite it).
- `countries.italy.cities.rome`, `countries.united-kingdom.cities.london` and `countries.netherlands.cities.amsterdam` each gain a `name` and an `intro` in all four languages. City names and intros live in the countries overlay, not the city overlay (data/world/types.ts:438-444), so this ticket is the ONLY place they can land.
- No entry carries a `stamp` key — `CountryTranslation` (data/world/types.ts:450-456) has no such field and a country stamp is deliberately never localised.
- Facts stay in source order and stay independently checkable one by one: index i in the overlay must be the translation of index i in the .ts file, because data/world/mergeTranslation.ts:183 merges by position.
- `npx vitest run data/world/world.test.ts --exclude '**/.claude/**'` is green, including the new gate from ticket i18n-countries-gate.
- Each file still parses as JSON and declares its own `lang` matching its filename.

**Schema**

```ts
No schema change. Existing shape, data/world/types.ts:445-456:

interface CountriesTranslation { lang: WorldLang; countries: Record<CountryId, CountryTranslation>; }
interface CountryTranslation { name?: string; intro?: string; facts?: string[]; cities?: Record<CityId, { name?: string; intro?: string }>; }

Files: data/world/i18n/countries.de.json, countries.fr.json, countries.es.json, countries.it.json.
```

**Files.** `data/world/i18n/countries.de.json`, `data/world/i18n/countries.fr.json`, `data/world/i18n/countries.es.json`, `data/world/i18n/countries.it.json`

**Risk.** Four translator sessions, one file each — safe only if each stays in its own language's file. The real hazard is that ticket i18n-overlays-rome-london-amsterdam also needs Rome/London/Amsterdam city names, which live in THESE files; that work is deliberately assigned here and NOT there, so the two tickets never open the same file. Second hazard: `facts` merges by array index (mergeTranslation.ts:183), so a translator who reorders, drops or adds a fact silently pastes the wrong sentence under the wrong chip — and until i18n-countries-gate lands, no test catches it. Third: 20 of the 25 countries have no city yet and are arrival-stamp-only; their intros must still read as an invitation, not as a placeholder.


## P1 — wanted soon

Named P1 by the decisions table, or needed before the second pilot city.

### family-info-content-pilot — Fill familyInfo for the pilot cities, every value with a source

**P1** · owner **content** · brief §39 family information; decisions row §22-23 (pilot = Athens + Paris, Rome, London, Amsterdam); §19-20 sources · after `world-family-info-schema`

The schema without values ships an empty block. This is the half a parent actually reads before deciding to take the child out.

**Today.** Zero. data/world/cities/*.ts (athens.ts, paris.ts, rome.ts, london.ts, amsterdam.ts + thessaloniki, heraklion, rhodes, delphi) contain no duration, cost, hours, stroller or toilet data in any form.

**Done when**

- Athens (18 places) is complete first, because it is the daily-QA pilot city and the field test runs there.
- Then Paris (13), Rome (18), London (17), Amsterdam (16) — the four the decisions row calls ready.
- Every `openingHours`, `stroller` and `toilets` value cites the venue's own official page, or the official municipal/ministry page, as `source`. Wikipedia is not a source for opening hours (§19). Where no official page states it, the field is LEFT OUT rather than guessed — an absent field renders nothing and is correct; a wrong one sends a family to a locked door.
- `durationMin` is the author's honest estimate for a 6-12 child and needs no source, but must be 5..240.
- `el` and `en` on every LocText. `de/fr/es/it` may follow as overlays later (SESSION-SPLIT.md rule 6).
- `npx vitest run data/world/world.test.ts --exclude '**/.claude/**'` green after each city, committed per city.

**Schema**

```ts
Uses the `FamilyInfo` type from world-family-info-schema; no new schema. One `familyInfo: { … }` literal per Place in data/world/cities/<city>.ts, plus one per City where a city-level line helps (e.g. "most museums shut Mondays").
```

**Files.** `data/world/cities/athens.ts`, `data/world/cities/paris.ts`, `data/world/cities/rome.ts`, `data/world/cities/london.ts`, `data/world/cities/amsterdam.ts`

**Risk.** Opening hours go stale — this is the one field on the page that can be wrong in a way that wastes a family's morning. Mitigation: store the source URL next to the value so a later script can re-check, keep the LocText vague where the venue is ("Δευτέρα κλειστά, το καλοκαίρι ως αργά") rather than printing exact times we cannot maintain, and prefer omitting the field to shipping a precise time. Second risk: these are Session B's files and Barcelona/Istanbul are half-written in two other worktrees (STATUS.md §0α:16-24) — do not open a city file another worktree is holding.

### mm-content — Author Quick/Explorer/Master routes and §14 metadata for the 22 existing museums

**P1** · owner **content** · brief §14, decisions row §42 Phase C, §19 (provenance), §24 Gold City Standard · after `mm-schema`

The schema and the picker are inert without routes. This is the ticket that actually gives a child a 20-minute Acropolis Museum that still feels complete rather than truncated.

**Today.** 22 museums with 49 rooms, 154 exhibits and 61 riddles across data/world/cities/{amsterdam,athens,delphi,heraklion,london,paris,rhodes,rome,thessaloniki}.ts. Every one has rooms, exhibits, riddles and a doorNote; NONE has a variant, a floor, a zone, a visual clue, an accessibility line, a photography rule, an age range or a museum-level difficulty. Rome's Capitoline Museums (rome.ts:296-790) is the representative shape.

**Done when**

- All 22 museums have `variants.quick`, `variants.explorer` and `variants.master` populated.
- Quick is a genuinely standalone visit: roughly 5-7 exhibits and 1 riddle, ending on something memorable — never simply the first N exhibits in file order.
- Explorer ≈ 10-14 exhibits and 2 riddles; Master is the full building.
- Every variant's roomIds / exhibitIds / riddleIds reference ids that exist in that same museum (enforced by mm-tests).
- Each variant's `minutes` is a defensible estimate, not a copy of 20/45/90: a two-room museum may honestly be 15/30/55 and should say so.
- `meta.photography` and `meta.accessibility` come from the venue's own page with a `source` recorded per §19. Where the page does not say, `photography: 'unknown'` and no accessibility line — never inferred.
- `room.floor` and `room.zone` come from the museum's own plan or signage, or are omitted.
- `el` and `en` are present on every new LocText (SESSION-SPLIT.md rule 6 — a missing `en` renders as empty string silently).
- `npx vitest run data/world/world.test.ts` and `npm run typecheck` are green.

**Schema**

```ts
Per museum, added inside the existing `museum: { … }` block in data/world/cities/<city>.ts, using the shapes from mm-schema. No file outside data/world/cities/** is touched.
```

**Files.** `data/world/cities/amsterdam.ts`, `data/world/cities/athens.ts`, `data/world/cities/delphi.ts`, `data/world/cities/heraklion.ts`, `data/world/cities/london.ts`, `data/world/cities/paris.ts`, `data/world/cities/rhodes.ts`, `data/world/cities/rome.ts`, `data/world/cities/thessaloniki.ts`

**Risk.** HONEST SIZE: this is the largest ticket in the cluster — multi-week, not multi-day. 22 museums × (3 route curations + accessibility and photography research with a citable source + floor/zone from a real plan) is roughly 22 × half a day of careful work, and the accessibility/photography half cannot be done from Wikidata: it needs each venue's own page, which §19 demands and which research/02-museums.md shows is uneven. Split it per city, one session per city file (SESSION-SPLIT.md: one session per folder), and ship city by city rather than in one commit. Secondary risk: the temptation to make Quick = first 6 exhibits, which is cheap, passes every test, and produces a bad visit — the acceptance criterion above exists to stop exactly that.

### age-mode-presentation — Junior / Explorer age mode as a presentation mode over existing content

**P1** · owner **engine** · brief §15 (Junior 6-8, Explorer 9-12); bounded by decisions rows §10 and §11 ("μετά το πρώτο field test") · after `mm-schema`

A six-year-old and a twelve-year-old currently get identical 120-word blurbs and identical riddles. A presentation mode — audio first, image first, riddles offered rather than expected — narrows that gap using content that already exists and needs no new writing.

**Today.** Nothing. Repo-wide grep across components/world/ and data/world/types.ts for agemode|age_mode|junior|familymode returns zero product hits. There is no age setting anywhere in components/world/World.tsx (the only preference persisted is the language, components/world/worldUi.ts:36-52). Place.difficulty (types.ts:267) and Riddle.difficulty (types.ts:224) exist but nothing reads them to adapt the UI — they are documented as "drives ordering, never gating".

**Changed after review.** ONE CRITERION REMOVED: «riddles marked difficulty 3 are hidden». There are 13 difficulty-3 riddles across 8 of the 9 cities, so hiding them makes `solvedCount === riddles.length` unreachable and a Junior child could never earn the L3 museum stamp while an Explorer child could. That contradicts the ticket's own rule and §30. Junior may re-word or re-illustrate a riddle; it may not remove one.

**Done when**

- A Junior / Explorer choice is offered once, remembered via the worldUi.ts:36-52 localStorage pattern, and changeable from the World screen.
- Junior: exhibit audio autoplays where a clip exists (data/world/narration.ts:152-166), the image is shown above the text, riddles marked difficulty 3 are hidden and difficulty 1-2 are presented as optional, and the hint is offered without being asked for.
- Explorer: today's behaviour, unchanged.
- No exhibit or place text is rewritten and no new content field is required — this ticket adds zero work to data/world/cities/**.
- Age mode does not change what XP is worth or what a stamp requires. A Junior child and an Explorer child earn the same passport (§30: no luck, no tiering of rewards).
- Both modes are named in all six languages.
- Defaults to Explorer when nothing is stored, so nobody is asked a question before they have seen the product.

**Schema**

```ts
export type AgeMode = 'junior' | 'explorer' | 'family';  // defined in mm-schema
// components/world/worldUi.ts, mirroring initialWorldLang/rememberWorldLang (:36-52):
export function initialAgeMode(): AgeMode;
export function rememberAgeMode(m: AgeMode): void;
```

**Files.** `components/world/worldUi.ts`, `components/world/World.tsx`, `components/world/MuseumView.tsx`, `components/world/PlaceCard.tsx`

**Risk.** The brief's Junior spec ("εικόνες, audio first, find/count/match") is half presentation and half NEW MISSION TYPES — and the decisions row for §10 puts new mission types explicitly "μετά το πρώτο field test, όταν ξέρουμε ποια 3 ζητούν τα παιδιά". So find/count/match is OUT of this ticket by the binding table; only the presentation half is in. Say so in the PR, or the next session will build the missing half and burn a week on content the table has deferred. Second risk: four shared engine screens are touched at once — PlaceCard.tsx and MuseumView.tsx are 867 and 793 lines and mm-picker is editing MuseumView too; sequence this after mm-picker rather than beside it.

### city-gold-checklist — A machine-checkable Silver→Gold checklist that every city must pass, derived from §43

**P1** · owner **engine** · brief §43, §24, decisions row §24/§43 ("Ισχύουν ως το Gold. Οι σημερινές πόλεις είναι Silver μέχρι το field test")

Nine cities are about to exist and nobody can say which are Silver and which are Gold, because the tier is stated only in a Greek sentence in a decisions table. This makes it a field in the data that tests read, so 'is Athens done?' has one answer.

**Today.** No tier exists anywhere: grep for tier/gold/silver/quality across data/world/types.ts returns nothing (the file has `confidence: 'A' | 'B' | 'C'` at types.ts:128 and `verifiedAt` at :133, which are per-place, not per-city). No docs/world/TICKETS.md exists either, though brief line 36 says this session should produce one. About six of §43's fifteen lines are already enforced mechanically in data/world/world.test.ts — no duplicates (:330), languages (:169, :185, :450), coordinates sourced (:295), assets exist (:396), image credits (:414), museums consistent (:347), trails valid (:374). The other nine — route walked physically, Family Adventure end-to-end, rewards work, stamp works, audio complete, offline, analytics, accessibility data, family beta — have no representation in code or data at all.

**Changed after review.** Consumes `loc-ab-quest-rule` as one row rather than re-deriving the same A/B invariant in the same test file.

**Done when**

- A new data/world/quality.ts exports `CITY_QUALITY: Record<CityId, CityQuality>` with one row per city, and a test asserts every city in the generated registry has a row (so adding a city without a quality row fails CI).
- The record carries all fifteen §43 lines as explicit booleans plus the evidence needed to trust them — a claim of 'route tested physically' must carry who walked it and when, not just `true`.
- `tier` is DERIVED, never hand-set: a small function returns 'gold' only when every §43 line is true, 'silver' otherwise. Today that function must return 'silver' for all nine cities, and a test asserts that until the field test lands.
- The six lines already covered by world.test.ts are marked as machine-checked in the record and cross-referenced to the test, so nobody re-implements them by hand.
- 'Critical POIs A/B' is checked as stated in the decisions row: A/B only for quest destinations in every NEW city, while existing Greek C-grade places stay and are upgraded by the owner walking them, not removed. A test enforces the new-city rule without failing Greece.
- docs/world/GOLD-CHECKLIST.md (short) explains what each of the fifteen lines means in one sentence, so a content agent and the owner read the same definition.
- Audio completeness is computed, not asserted: compare data/world/narration.ts against the city's places and exhibits rather than trusting a boolean.
- `npm run typecheck` clean; `npx vitest run data/world/world.test.ts` green.

**Schema**

```ts
`interface CityQuality { cityId: CityId; poisVerifiedAB: boolean; noDuplicates: boolean; entrancesChecked: boolean; routeWalked: { by: string; on: string } | null; familyAdventureE2E: boolean; rewardsWork: boolean; stampWorks: boolean; languages: WorldLang[]; audioComplete: boolean; offlineReady: boolean; analyticsWired: boolean; accessibilityData: boolean; noUnsupportedClaims: boolean; noCopiedMaterial: boolean; familyBeta: { on: string; families: number } | null; }` plus `export function cityTier(q: CityQuality): 'silver' | 'gold'` returning 'gold' only when every boolean is true, `languages` contains at least 'el' and 'en', and both `routeWalked` and `familyBeta` are non-null.
```

**Files.** `data/world/quality.ts (new)`, `data/world/world.test.ts`, `docs/world/GOLD-CHECKLIST.md (new)`

**Risk.** data/world/quality.ts is a hand-written file keyed by city, which is the exact shape docs/world/SESSION-SPLIT.md:55-58 says caused merge conflicts and is why registry.ts is generated. Every new city needs a row, so a content session adding Vienna and an engine session editing the checklist will collide. Mitigate by keeping one city per line, alphabetically sorted, and by making the missing-row test the thing that reminds a content session to add it. Second risk: two of the fifteen lines (offline, analytics) are deferred elsewhere — P2 and another cluster respectively — so a strict gold gate would be unreachable by design; record them honestly as false rather than quietly dropping them from the interface.

### geo-low-accuracy-copy — When GPS accuracy is bad, say "You are close, look around for…" instead of "you are not there"

**P1** · owner **engine** · brief §8, decisions row §8 (the one change named P1)

A child standing in a narrow street or a courtyard gets a 60–150 m accuracy fix and is told "You are 180 m away, about 3 minutes on foot" while the place is in front of them. They walk away from it. The honest sentence is that the phone is unsure, not that the child is wrong.

**Today.** components/world/PlaceCard.tsx:408-420 — `locate()` reads the fix, stores ONLY the distance (`setDistance(m)` line 418) and collapses the verdict to a binary `'here' | 'far'` at line 419. `fix.accuracyM` is passed into `isWithin` and then discarded, so no render path can know the fix was poor. The 'far' branch at PlaceCard.tsx:634-636 unconditionally renders `T.tooFar` (PlaceCard.tsx:261-268, six languages).

**Done when**

- A pure verdict helper is exported from utils/geo.ts — e.g. `geoVerdict(distanceM: number, accuracyM: number, radiusM: number): 'here' | 'close' | 'far'` — so the rule can be unit-tested without a browser.
- `geoVerdict` returns 'here' exactly when the existing `isWithin` returns true. A test asserts the gate did NOT widen: nothing that was 'far' before may now open the question or the stamp.
- 'close' is returned when ALL THREE hold: the reported accuracy is worse than the 40 m tolerance (`accuracyM > 40`), the child could be standing on the place given that reported error (`distanceM - accuracyM <= radiusM`), AND the raw distance is still plausibly walkable-and-visible (`distanceM <= radiusM + 150`). Otherwise 'far'.
- The third condition is tested explicitly: a desktop browser geolocating by IP returns a fix ~5000 m away with accuracy ~20000 m. `geoVerdict(5000, 20000, 60)` MUST return 'far', not 'close'. Without the cap every desktop visitor is told they are standing at the place.
- PlaceCard keeps the accuracy alongside the distance (extend the `setDistance(m)` line, PlaceCard.tsx:418) and adds a `'close'` value to the `geo` state union at PlaceCard.tsx:402.
- Two new string keys are added to the `T` table in components/world/PlaceCard.tsx (next to `tooFar`, PlaceCard.tsx:261), each in all six languages el/en/de/fr/es/it, using the file's existing typographic apostrophes: `closeLookFor(findIt: string)` for a place that has a door note, and `closeLookAround` for one that does not.
- Proposed `closeLookFor` text — el: `Είσαι πολύ κοντά! Το σήμα του GPS εδώ δεν είναι καθαρό. Κοίτα γύρω σου για: ${f}` · en: `You are very close! The GPS signal here is not clear. Look around you for: ${f}` · de: `Du bist ganz nah! Das GPS-Signal ist hier nicht klar. Schau dich um nach: ${f}` · fr: `Tu y es presque ! Le signal GPS n’est pas clair ici. Regarde autour de toi pour trouver : ${f}` · es: `¡Estás muy cerca! Aquí la señal del GPS no es clara. Mira a tu alrededor y busca: ${f}` · it: `Sei vicinissimo! Qui il segnale GPS non è chiaro. Guardati intorno e cerca: ${f}`
- Proposed `closeLookAround` text (no door note) — el: 'Είσαι πολύ κοντά! Το σήμα του GPS εδώ δεν είναι καθαρό, οπότε κοίτα γύρω σου — το σημείο πρέπει να είναι δίπλα. Κάνε λίγα βήματα και ξαναπάτα.' · en: 'You are very close! The GPS signal here is not clear, so look around you — the place should be right next to you. Take a few steps and tap again.' · de: 'Du bist ganz nah! Das GPS-Signal ist hier nicht klar, also schau dich um — der Ort muss gleich neben dir sein. Geh ein paar Schritte und tippe noch einmal.' · fr: 'Tu y es presque ! Le signal GPS n’est pas clair ici, alors regarde autour de toi — le lieu doit être juste à côté. Fais quelques pas et appuie encore.' · es: '¡Estás muy cerca! Aquí la señal del GPS no es clara, así que mira a tu alrededor: el lugar debe de estar al lado. Da unos pasos y vuelve a pulsar.' · it: 'Sei vicinissimo! Qui il segnale GPS non è chiaro, quindi guardati intorno: il posto deve essere proprio lì. Fai qualche passo e tocca di nuovo.'
- The `closeLookFor` form is chosen only when `place.location.findIt` is present (it is optional — data/world/types.ts:156 — and absent from every place in data/world/cities/delphi.ts and paris.ts), otherwise `closeLookAround` is used. A place with no door note must never render an empty 'look around for: '.
- The 'close' message does NOT open the question or the stamp: `onSite` (PlaceCard.tsx:406) still depends on `geo === 'here'` only. The "I'm here!" button stays enabled in the 'close' state so the child can tap again after a few steps (the disabled condition at PlaceCard.tsx:626 lists only 'checking' and 'here', so no change needed — assert it in review).
- The message container at PlaceCard.tsx:632 already carries `aria-live="polite"`; the new branch renders inside it so a screen reader announces the change.
- A reviewer can reproduce it without a field trip, in the browser console, BEFORE tapping «Είμαι εδώ!»: `navigator.geolocation.getCurrentPosition = ok => ok({coords:{latitude: <place lat>, longitude: <place lng + ~0.0015>, accuracy: 150}, timestamp: Date.now()})`. Chrome DevTools → Sensors can override latitude/longitude but CANNOT set accuracy, so it is not sufficient on its own — say so in the PR description.

**Schema**

```ts
utils/geo.ts — add `export type GeoVerdict = 'here' | 'close' | 'far';` and `export function geoVerdict(distanceM: number, accuracyM: number, radiusM: number): GeoVerdict`. Keep `isWithin` exported and unchanged in signature and behaviour: components/Explore.tsx:379 and :621 both call it and the live Explorer must not shift. components/world/PlaceCard.tsx — state union at line 402 becomes `'idle' | 'checking' | 'here' | 'close' | 'far' | 'error'`; add `const [accuracy, setAccuracy] = useState<number | null>(null)`. New `T` entries: `closeLookFor: Record<'el'|'en'|'de'|'fr'|'es'|'it', (f: string) => string>` and `closeLookAround: Record<'el'|'en'|'de'|'fr'|'es'|'it', string>`.
```

**Files.** `utils/geo.ts`, `components/world/PlaceCard.tsx`, `data/world/world.test.ts`

**Risk.** utils/geo.ts is SHARED with the live Explorer (components/Explore.tsx:32 imports isWithin, formatDistance, distanceM, locateOnce, watchPosition, bearingDeg, compass, mapsLinks, walkMinutes). Adding an export is safe; changing `isWithin` is not — it would alter a feature already merged to main (PR #68) and covered by data/explore.test.ts:86-92. Second risk: the wording promises proximity while the gate stays shut, so a place with permanently bad reception (a deep courtyard, a covered arcade) can now tell a child "you are very close" forever without ever opening the stamp. The decisions row asks for copy only, so do not widen the geofence to fix it — but put it on the field-test #0 checklist (STATUS.md §6 item 6) and see whether it actually happens. Third risk: utils/geo.ts belongs to neither session in docs/world/SESSION-SPLIT.md (it predates the split, it is an Explorer file), so agree the owner before two sessions edit it.

### geo-state-reset-per-place — PlaceCard keeps the previous place's GPS verdict and distance when the place changes

**P1** · owner **engine** · brief §8, decisions row §8

A child who checked at place A and was told '800 m away' opens place B and reads '800 m away' for a place they are standing next to, before they have tapped anything. On the pavement that sends them walking the wrong way.

**Today.** components/world/World.tsx:589-599 renders `<PlaceCard …>` with NO `key` prop, at a stable position in the tree, so React reuses the instance when only the `:place` route param changes. Inside PlaceCard the author explicitly handled this for the answer — PlaceCard.tsx:386-391 tags the answer with its `placeId` precisely 'so that a reused component instance showing a different place starts clean' — but `geo`, `geoError` and `distance` (PlaceCard.tsx:402-404) carry no such tag and no reset effect.

**Done when**

- Navigating from one place URL directly to another (`/world/:country/:city/:placeA` → `…/:placeB`) shows place B's gate in the 'idle' state with `T.stampOnSite`, never place A's distance.
- Fixed either by adding `key={place.id}` at components/world/World.tsx:592 (simplest, and also resets `failedImage` at PlaceCard.tsx:392, which has the same latent problem) or by tagging the geo state with its `placeId` the way `answer` is at PlaceCard.tsx:391. Prefer the `key`.
- If `key` is chosen, confirm the remount does not cost a visible flash: PlaceCard is React.lazy (components/world/World.tsx:75) but the chunk is already loaded by then.
- A test or a manual note records the reproduction path, since it is latent today (see risk).

**Files.** `components/world/World.tsx`, `components/world/PlaceCard.tsx`

**Risk.** LATENT today, not yet reachable by tapping: PlaceCard's only exits are `onBack` → the city list and `onEnterMuseum` → the museum route, and both unmount it (World.tsx:570-586 is a different render branch). It becomes live the moment the planned «Άλλη μία;» / 'one more?' card ships (STATUS.md §0α, remaining item 5), which by definition links place → place. Fix it before that card, not after. Do not let this ticket be closed as 'cannot reproduce' — the reproduction is a deep link or a history jump between two place URLs, or any place→place link.

### i18n-nl-language-slot — Open the NL slot — Amsterdam has landed and the decisions row says NL arrives with it

**P1** · owner **engine** · brief decisions row §21: 'PT με Λισαβόνα, NL με Άμστερνταμ'

The decisions row makes NL conditional on Amsterdam, and Amsterdam is now in the repo and merged (16 places, 3 museums). The trigger has fired and the language union cannot hold a seventh member, so nobody can start Dutch even if they want to. PT stays shut — Lisbon does not exist yet.

**Today.** `WorldLang` is exactly six members (data/world/types.ts:33-35) and `LANG_LABELS` exactly six entries (components/world/worldUi.ts:71-78); grep for 'nl' or 'pt' across data/world and components/world returns nothing. Amsterdam exists and is live: data/world/cities/amsterdam.ts (16 places), data/world/coords/amsterdam.json, data/world/countries/netherlands.ts. Lisbon does NOT exist — there is no data/world/cities/lisbon.ts and no coords/lisbon.json (only porto.json and vienna.json sit in coords without a city module).

**Done when**

- `WorldLang` and `WORLD_LANGS` gain `'nl'` and nothing else. PT is explicitly NOT added: Lisbon has no city module, and an empty language slot puts an unfinished flag on screen, which the switcher's whole design exists to prevent (registry.ts:227-240).
- `LANG_LABELS` gains `nl: { flag: '🇳🇱', name: 'Nederlands', short: 'NL' }` (worldUi.ts:71-78).
- `scripts/world/build-registry.mjs` picks up `*.nl.json` overlay files and `countries.nl.json` with no further change, so a Dutch file simply appearing lights the button — verified by adding one file and re-running the script.
- Every `UiText` chrome dictionary in components/world/ either gains an `nl` entry or is confirmed to fall back to English by design (`ui()` at worldUi.ts:98-100 already falls back; the decision is which chrome strings are worth translating and which are not — record it in the file, do not leave it implicit).
- The 'not translated yet' note (World.tsx:116-127) gains its Dutch sentence, since that is the one string a Dutch child sees before anything else is translated.
- The switcher still shows only six buttons until a Dutch overlay actually exists — adding the slot must not light an empty flag. Assert this in world.test.ts.
- `npm run typecheck` clean, test suite green, and the suite does NOT go red merely because no nl overlay exists yet.

**Schema**

```ts
data/world/types.ts:33-35 →
  export type WorldLang = 'el' | 'en' | 'de' | 'fr' | 'es' | 'it' | 'nl';
  export const WORLD_LANGS: readonly WorldLang[] = ['el','en','de','fr','es','it','nl'];
The rest of the app's `'el' | 'en'` union is NOT touched (types.ts:28-33, docs/world/SESSION-SPLIT.md:9-11).
```

**Files.** `data/world/types.ts`, `components/world/worldUi.ts`, `components/world/World.tsx`, `data/world/world.test.ts`, `scripts/world/build-registry.mjs`

**Risk.** Conflicts with i18n-machine-translated-flag over data/world/types.ts — same frozen file, run them in sequence. Widening `WorldLang` widens `LocText`'s optional keys and therefore the surface every completeness test walks; if the tests are written to iterate `WORLD_LANGS` rather than a hardcoded four, they will start demanding Dutch everywhere the moment the union grows. Check world.test.ts:191 (`WORLD_LANGS.filter(...)`) before landing — it is written exactly that way, so it must keep treating a language with zero overlays as 'not translated at all: fine' (:199). Do not open PT on the same reasoning: the row ties it to Lisbon, and Lisbon does not exist.

### ios-free-only-constraint — Engineering constraint: the iOS build must show only free World content and no € price, enforced by a test

**P1** · owner **engine** · brief decisions row §36 ("iOS δείχνει μόνο δωρεάν (Apple 3.1.3b)") · after `pricing-engine-gate`

A single € sign or upgrade link inside the Capacitor build gets the app rejected, and the build is already submitted and waiting on Apple (STATUS.md:157). This makes the rule impossible to break by accident rather than a thing each developer must remember.

**Today.** The mechanism exists and is proven — utils/platform.ts:5-12 `isIosApp()`, already applied at components/CreditStore.tsx:56, components/Layout.tsx:235 and components/LandingPage.tsx:435,555. What does not exist is (a) any application of it inside components/world/**, which today has no price UI to hide, and (b) any test that fails when someone adds one. The guard is therefore convention only, and the World paywall built in pricing-engine-gate is exactly the change that would break it. Note the citation drifts: utils/platform.ts:1 and CreditStore.tsx:53 cite Apple 3.1.1; the decisions row cites 3.1.3(b). The operative behaviour is the same and should be stated once, correctly.

**Done when**

- Every World surface that can show a price, a buy button, an upgrade prompt or a link to /store is wrapped in `!isIosApp()`, reusing utils/platform.ts — no second platform detector is introduced.
- On iOS, a locked place renders as ordinary not-yet-available content with no price, no '€', no 'buy', 'upgrade', 'subscribe' or 'unlock for' wording, and no outbound link to wisebot.gr/store. Free content behaves identically to the web.
- A test in data/world/world.test.ts (or a sibling) fails if any file under components/world/** contains a currency symbol, a price-shaped literal, or the substring '/store' outside an `isIosApp()` guard — so the rule is enforced at CI time, not at review time.
- One comment block states the rule and cites the guideline correctly and once; the 3.1.1 vs 3.1.3(b) inconsistency across utils/platform.ts:1 and CreditStore.tsx:53 is reconciled in the same pass.
- The App Privacy label action from STATUS.md:172 ('Precise Location (not linked)') is linked from that comment so the next submitter sees it — the GPS feature shipped after the 31/8 submission.

**Files.** `utils/platform.ts`, `components/world/CityView.tsx`, `components/world/PlaceCard.tsx`, `data/world/world.test.ts`

**Risk.** data/world/world.test.ts is the shared invariant file both sessions run; adding a test there while a content session is adding cities is a predictable conflict — append at the end, do not reorder. A regex-based source scan will also produce false positives on city prose (data/world/amsterdam.ts:462 discusses tulip prices, rome.ts:2217 mentions uniforms) — scope the scan to components/world/**, never data/world/cities/**.

### l3-museum-stamp — L3 museum stamp: record a finished museum, seal it, show it in the passport

**P1** · owner **engine** · brief §12 (L3 Museum stamp, "Louvre Explorer"), §13, §30; decisions row §12–13 ("L3 σφραγίδα μουσείου: P1"); binding contract docs/world/specs/02-progress-and-rewards.md

A child can already walk every room of the Louvre, answer every exhibit and solve every riddle — and the passport does not know it happened. The green "museum done" line vanishes the moment they navigate away. L3 turns the museum from a side room into a third kind of page in the book, which is what makes a museum day feel like a country day.

**Today.** Everything except the record. `components/world/MuseumView.tsx:518-523` already computes completion exactly (`everythingDone` = every exhibit answered correctly AND every riddle solved) and renders it at MuseumView.tsx:634-638. Per-exhibit and per-riddle awards are already persisted and idempotent: `components/world/useWorldProgress.ts:301-330` (`answerExhibit` records only when `correct`, `solveRiddle` records on solve), stored as `exhibits` / `riddles` maps (useWorldProgress.ts:86-90). What does not exist: any `museums` record in `WorldProgress`, any `WORLD_XP.museum`, any museum entry in `WorldAward` (useWorldProgress.ts:157-167), and any museum mark in `StampBook.tsx` (no occurrence of "museum" in that file or in PassportStamp.tsx). A museum has no id of its own (`Museum` at data/world/types.ts:182-189 has rooms/riddles/doorNote only) — its identity is the `PlaceId` of the `category: 'museum'` place that carries it (data/world/types.ts:272-273), so the stamp must be keyed on PlaceId. Content scale today: 22 museums across 9 city files (`grep -c 'museum: {' data/world/cities/*.ts`).

**Changed after review.** Must state which predicate the stamp keys on, and it is the WHOLE museum, not the chosen variant. `mm-picker` recomputes «everything done» against the selected variant, and a Quick variant is 5–7 exhibits of a museum that may hold 30 — wiring the seal to the variant mints it for a fifth of the work. Land after `progress-version-migration`.

**Done when**

- "Done" for a museum is defined as: every exhibit in every room answered correctly AND every riddle solved — i.e. the existing `everythingDone` predicate in MuseumView.tsx:522-523, moved into the hook so it is computed from stored ids rather than from a render. A wrong exhibit answer stays free to retry (useWorldProgress.ts:304) and does not block the stamp; nothing about a museum is timed or gated on the first attempt.
- The weaker definition ("all exhibits seen, riddles optional") is explicitly rejected and the rejection is written in the hook's comment: riddles are the only part that makes the child look around the room a second time, and a museum stamp earned without them would make the riddles decorative.
- `WorldProgress` gains `museums: Record<PlaceId, string>` (ISO date, same shape as `exhibits`/`riddles`). `VERSION` at useWorldProgress.ts:42 is NOT bumped and the new field is defaulted with `?? {}` in `read()` alongside the existing ones (useWorldProgress.ts:127-137), so no existing passport is erased — see ticket `progress-version-migration` for why a bump is destructive today.
- A new `sealMuseum(placeId, museum)` (or an extension of `answerExhibit`/`solveRiddle` that checks completion after each award) pays `WORLD_XP.museum` exactly once ever, decided from `ref.current.museums[placeId]` and written in the same synchronous step — the same shape as every other award in the file (useWorldProgress.ts:218-230). Action string `'WORLD_MUSEUM'`.
- `WORLD_XP.museum` is added to the constant block at useWorldProgress.ts:53-70 with a comment tuning it against `data/makerLevels.ts:39` (Explorer = 300 XP). Proposed 25–50: a three-room museum already pays ~105 XP in exhibits and riddles, so anything larger makes museums outweigh a whole city (50). Owner picks the number; the comment records the reasoning.
- `WorldAward` gains `museumSealed?: PlaceId` (useWorldProgress.ts:157-167) and `MuseumView` shows a ceremony when it comes back non-null. The ceremony REUSES `CitySeal` from `components/world/SealCeremony.tsx:127-152` with `name` = the museum place's name and `ink` = the country's `stamp.ink` (data/world/types.ts:337-338). No new SVG drawing component.
- The stamp appears in the book: `StampBook.tsx` shows museums sealed per country under the country's stamp, in the same quiet-note block as the sealed-city chips (StampBook.tsx:328-363), and the cover grid gains nothing (the cover is three columns wide by design, StampBook.tsx:477-493 — the museum counter belongs on the statistics page, ticket `passport-stats-page`).
- All new chrome strings are written out whole in all six languages (el en de fr es it) in the file's local `T`/`S` dictionaries and read with `ui()`, matching StampBook.tsx:64-212. No string is assembled from fragments.
- A new `components/world/useWorldProgress.test.ts` covers: seal awarded exactly once, second call returns null and pays no XP, a museum with zero riddles still seals, a museum missing one riddle does not seal, and an old `wb_world_progress` written before this change still loads with every prior stamp intact.
- `npm run typecheck` clean and `npx vitest run data/world/world.test.ts --exclude '**/.claude/**'` still 159/159.

**Schema**

```ts
In components/world/useWorldProgress.ts:

  export interface WorldProgress {
    v: number;                              // stays 2 — do not bump
    entries: Record<CountryId, string>;
    places: Record<PlaceId, PlaceStamp>;
    exhibits: Record<ExhibitId, string>;
    riddles: Record<RiddleId, string>;
    museums: Record<PlaceId, string>;       // NEW — ISO date the museum was finished
    trailsDone: TrailId[];
    citiesDone: CityId[];
    countriesDone: CountryId[];
  }

  export const WORLD_XP = { …, museum: 40 }  // NEW, 25–50, owner picks

  export interface WorldAward { …, museumSealed?: PlaceId }  // NEW

  read(): museums: parsed.museums ?? {}      // and in EMPTY: museums: {}

Keyed on PlaceId, never on a museum-local id: `Museum` (data/world/types.ts:182-189) has no id field, and the museum's identity is the place that carries it (types.ts:272-273). No Supabase table, no migration — cloud sync of stamps is deferred (spec 02 lines 120-127).
```

**Files.** `components/world/useWorldProgress.ts`, `components/world/MuseumView.tsx`, `components/world/World.tsx`, `components/world/SealCeremony.tsx`, `components/world/StampBook.tsx`, `components/world/useWorldProgress.test.ts`

**Risk.** This ticket obeys docs/world/specs/02-progress-and-rewards.md in full: XP and a stamp only, no credits, no new badge (spec 02 lines 35-39), no `trackAction` call (lines 40-42), no `MISSION_POOL` edit (lines 43-46), and no change to any shared economy file — XP still leaves only via `earnXp(n, 'WORLD_MUSEUM')` (useWorldProgress.ts:229, context/EconomyContext.tsx:87). Two concrete dangers. (1) Bumping `VERSION` would silently erase every child's passport: `read()` returns `{...EMPTY}` on any version mismatch (useWorldProgress.ts:126). The new field must be additive and defaulted. (2) `World.tsx`, `StampBook.tsx` and `MuseumView.tsx` are the module's most-edited files and STATUS.md §0α records `CountryScreens.tsx` being overwritten twice by two sessions writing the same file — take these only while no other session holds components/world/**. `SESSION-SPLIT.md` puts all of components/world/** and the progress hook on the engine side, so no content or i18n session should be touching these; the six-language chrome here is engine-owned inline dictionaries, NOT the data/world/i18n overlay JSON, which belongs to the content and i18n sessions.

### loc-aliases — `aliases` on Place — and stop throwing away the six-language labels the resolver already fetched

**P1** · owner **engine** · brief §7 (`aliases`, alongside `official_name` and `local_name`), decisions row §7 (P1)

SESSION-SPLIT.md:86-89 says the most common way a pin lands two streets away is searching Wikidata in the wrong language. The names that prevent that are already being downloaded and then dropped on the floor.

**Today.** No `aliases` field anywhere — zero grep hits across data/world, scripts/world and components/world. `Place.name` is a `LocText` (data/world/types.ts:252), which is display text in six languages, not a search/disambiguation list. The raw material already exists and is already committed: scripts/world/resolve-coords.mjs:96-99 collects `labels` in el|en|de|fr|es|it, writes them into every record of data/world/coords/*.json (visible at data/world/coords/athens.json:28-35, e.g. 'Ακρόπολη Αθηνών' / 'Acropole d'Athènes' / 'acropoli di Atene'), and data/world/cities/*.ts then omits them entirely — data/world/cities/athens.ts:75-86 carries lat, lng, anchor, confidence, sources, verifiedAt and nothing else.

**Done when**

- `Place.aliases?: string[]` exists in data/world/types.ts, documented as a flat disambiguation/search list, explicitly NOT localised display text and explicitly not rendered as a subtitle.
- A script populates it for the 9 shipped cities from the `labels` already sitting in data/world/coords/<city>.json, de-duplicated against the place's own `name` values so an alias never just repeats the title.
- A test in data/world/world.test.ts: no alias is an empty or whitespace string, no duplicates within a place, and the array is absent rather than `[]` when there is nothing to add.
- The next city seeded proves the point: a place whose local-language name differs from its English one (e.g. Porto's Igreja do Carmo, already the worked example in SESSION-SPLIT.md:86-89) carries both.

**Schema**

```ts
// data/world/types.ts, inside Place, next to `name`
/**
 * Other names this place answers to: local spelling, old name, what the sign
 * outside says, the name a parent will type. A flat list for search and for
 * disambiguating a Wikidata seed — NOT display text, and never rendered as a
 * subtitle. `name` is the six-language display title and stays that.
 */
aliases?: string[];
```

**Files.** `data/world/types.ts`, `data/world/world.test.ts`, `scripts/world/ (new backfill script)`, `data/world/cities/*.ts (via backfill script)`

**Risk.** Touches content-owned data/world/cities/*.ts — same ownership crossing as loc-source-license, so land the two backfills in one pass over the city files rather than two. Scope risk: `aliases` must not become a second translation surface. Say so in the doc comment, and do NOT add it to PlaceTranslation (data/world/types.ts:415-430) — the i18n overlays have no business here.

### loc-entrance-pair — `entrance` as a separate lat/lng pair, so a measured door no longer erases the centre

**P1** · owner **engine** · brief §7 (`entrance_latitude`, `entrance_longitude` alongside `latitude`/`longitude`), decisions row §7 (P1)

A parent navigating with Google Maps wants the building; a child walking the last 40 m wants the gate. Today the model can hold one or the other, never both, so recording the Panathenaic Stadium's gate would throw away the stadium.

**Today.** `PlaceLocation` holds ONE point — data/world/types.ts:101-103 (`lat`, `lng`) — and `anchor` (types.ts:120) labels what that single point is. The resolver already accepts a seed `door` but OVERWRITES the centre with it: scripts/world/resolve-coords.mjs:210-214 sets `out.lat/out.lng` to the door and demotes Wikidata to a cross-check at :221-224. The brief asks for both columns. Zero doors exist yet (no `door` key in any of the 14 files in scripts/world/seeds/; zero `anchor: "entrance"` in data/world/coords/), so this can land before any data does and nothing needs migrating.

**Done when**

- `PlaceLocation.entrance?` exists in data/world/types.ts with the shape below, and the doc comment repeats the OSM/ODbL prohibition already written at types.ts:116-118 and scripts/world/resolve-coords.mjs:181-186.
- scripts/world/resolve-coords.mjs writes the seed `door` into `entrance` and LEAVES `lat`/`lng` as the Wikidata centre; `anchor` keeps describing `lat`/`lng`. Re-running the resolver on any current city produces a byte-identical coords file (no city has a door, so nothing may move).
- components/world/PlaceCard.tsx:405-420 geofences against `location.entrance ?? { lat, lng }`. The Google/Apple Maps buttons (PlaceCard.tsx:645-653) also target the entrance when one exists.
- A test in data/world/world.test.ts: `entrance` may only be present when a source of kind `official` or `manual` is present (same rule as world.test.ts:315-320, which stays in place for backward compatibility with `anchor: 'entrance'`); and `distanceM(entrance, {lat,lng})` is under 250 m, so a mistyped door cannot land in another postcode.
- docs/world/research/06-doors-worklist.md's 35 places can be filled in later without another type change — verify by adding one door to scripts/world/seeds/athens.json for athens-panathenaic-stadium in a scratch copy and confirming the pin moves 127 m while the centre stays.

**Schema**

```ts
// data/world/types.ts, inside PlaceLocation
/**
 * The measured door, when somebody actually measured one. `lat`/`lng` stay the
 * building. Never from OpenStreetMap: ODbL would make this a derivative database.
 */
entrance?: {
  lat: number;
  lng: number;
  /** Where the door came from. Only these two kinds describe a door. */
  source: { kind: 'official' | 'manual'; ref: string; retrievedAt: string };
};

// scripts/world/seeds/<city>.json, per place (already read at resolve-coords.mjs:187)
"door": { "lat": 37.96861, "lng": 23.74131, "source": "http://www.panathenaicstadium.gr/" }
```

**Files.** `data/world/types.ts`, `scripts/world/resolve-coords.mjs`, `data/world/world.test.ts`, `components/world/PlaceCard.tsx`

**Risk.** data/world/types.ts is shared by all five field tickets in this cluster — run them as ONE session in sequence, not five in parallel worktrees, or the merges will fight. Second risk: changing which point the geofence uses is a behaviour change on a live feature the owner field-tested on 12/9 (docs/world/STATUS.md:55-60); with no doors in the data it is a no-op today, which is exactly why it should land now rather than alongside the first door.

### loc-manual-verified — `manualVerified` / `by` — the field the owner's walk writes into

**P1** · owner **engine** · brief §7 (`manual_verified`, `verification_user`), §19 ("manual WiseBot verification"), decisions row §7 (P1)

The decisions row's plan for Greece is that the owner walks to the C-grade places and upgrades them. There is nowhere to record that he did, who he was, or when — so the upgrade would look identical to someone silently editing a letter from C to A.

**Today.** Nothing. Zero hits for `manualVerified` anywhere in data, scripts or components. The nearest things are `LocationSource.kind === 'manual'` (data/world/types.ts:168, meaning "a person who looked and wrote it down") and `PlaceLocation.verifiedAt` (types.ts:133), which the resolver stamps with today's date on every run (scripts/world/resolve-coords.mjs:254) — so `verifiedAt` records when a SCRIPT ran, not when a human stood there. `note` (types.ts:135) is free text and unqueryable. A field verification is the only thing that can produce a grade A entrance under the rule at world.test.ts:315-320, and there is no slot for its metadata.

**Done when**

- `PlaceLocation.manualVerified?` exists with the shape below and is documented as the ONLY thing that may raise a place's confidence above what the resolver computed.
- scripts/world/resolve-coords.mjs PRESERVES an existing `manualVerified` across a re-run instead of overwriting it — a resolver pass must never silently discard a human's field check. Confirm by re-running a city with a hand-added block and diffing.
- A test in data/world/world.test.ts: when `manualVerified` is present, `at` matches /^\d{4}-\d{2}-\d{2}$/ and `by` is non-empty; and a place whose `confidence` is `'A'` while its sources contain neither `official` nor `manual` AND which has no `manualVerified` fails — closing the loophole the Panathenaic Stadium walked through (types.ts:105-119).
- `by` is an identifier, never an email or a child's name — the doc comment says so, since these files are public in a client bundle.

**Schema**

```ts
// data/world/types.ts, inside PlaceLocation
/**
 * A person stood at this place and confirmed the pin. The only thing that may
 * raise a confidence above what the resolver computed, and the only way a C in
 * Greece becomes an A. Never an email address: these files ship to the browser.
 */
manualVerified?: {
  /** ISO date the person was actually there. Not the date the script ran. */
  at: string;
  /** Who, as a short handle. 'vs'. */
  by: string;
  /** What they saw that the sources got wrong. */
  note?: string;
};
```

**Files.** `data/world/types.ts`, `scripts/world/resolve-coords.mjs`, `data/world/world.test.ts`

**Risk.** Shares data/world/types.ts with the other four field tickets. Also: adding the A-without-a-human-source test may fail on already-shipped A places — check before landing. From the coords files the A grades all come from three agreeing machine sources, which is the intended meaning of A under types.ts:124-127, so scope the new assertion to A places that ALSO claim an entrance, rather than to every A.

### loc-source-license — `license`, `url` and `retrievedAt` on every LocationSource

**P1** · owner **engine** · brief decisions row §7 (`license`, P1); §19 ("Κάθε record: source, source_url, license, retrieved_at, verified_at. Καμία βάση χωρίς provenance.")

The whole coordinate pipeline is built around a licence argument — Wikidata CC0 is stored, OSM ODbL is only measured against — and that argument is currently in comments, not in the data. An investor or a school's DPO asking "prove this is clean" gets prose.

**Today.** `LocationSource` is `{ kind, ref, deltaM }` and nothing else — data/world/types.ts:162-173. `license` exists in this repo only on image credits (data/world/types.ts:72, rendered at components/world/PlaceCard.tsx:555-558 and MuseumView.tsx:276-278). `retrievedAt`/`source_url` do not exist anywhere: grepping `manualVerified|openingHours|retrievedAt|sourceUrl|source_url` across data, scripts and components returns zero hits. `verifiedAt` (types.ts:133) is the only §19 field present. `ref` (types.ts:169) is overloaded — a Q-number, an OSM type/id, an article title, or a URL — so it cannot serve as `source_url`.

**Done when**

- `LocationSource` carries `license`, and the resolver fills it without a human typing it: `wikidata` → 'CC0-1.0', `osm` → 'ODbL-1.0', `wikipedia` → 'CC-BY-SA-4.0', `official`/`manual` → the string the seed supplied.
- `url` and `retrievedAt` are present; `retrievedAt` is REQUIRED for kinds `official` and `manual` (the two that justify a door or a manual verification) and optional elsewhere.
- A test in data/world/world.test.ts asserts every source of every shipped place has a non-empty `license`, and that a source of kind `osm` or `wikipedia` never has `deltaM === 0` with our point taken from it — the licence story only holds because their numbers are not stored.
- The 9 existing city files are migrated by a SCRIPT that reads data/world/coords/<city>.json (which already carries every source) and rewrites the `location` literal — not by hand-editing 136 places across content-owned files.
- Re-running `node scripts/world/resolve-coords.mjs <city>` on a city produces sources carrying the new fields, and `npm run typecheck` is clean.

**Schema**

```ts
export interface LocationSource {
  kind: 'wikidata' | 'osm' | 'wikipedia' | 'official' | 'manual';
  /** Q-number, OSM type/id, article title, or a URL. */
  ref: string;
  /** Metres from the stored point. Zero for the source the point came from. */
  deltaM: number;
  /** §19 source_url. Absent for a 'manual' note with no page behind it. */
  url?: string;
  /** §19 retrieved_at, ISO date. Required for 'official' and 'manual'. */
  retrievedAt?: string;
  /** §19. SPDX id where one exists: 'CC0-1.0', 'ODbL-1.0', 'CC-BY-SA-4.0'. */
  license: string;
}
```

**Files.** `data/world/types.ts`, `scripts/world/resolve-coords.mjs`, `data/world/world.test.ts`, `data/world/cities/*.ts (via migration script)`, `scripts/world/ (new migration script)`

**Risk.** Making `license` REQUIRED touches all 9 files under data/world/cities/, which SESSION-SPLIT.md:49-53 assigns to the content session — this is the one ticket in the cluster that crosses the ownership line. Mitigate by shipping the migration script and running it in the same commit, and by coordinating with whatever content session is mid-city (docs/world/STATUS.md:16-24 lists Barcelona and Istanbul sitting unmerged in two worktrees; those two cities will need the migration re-run after their merge). If that coordination is not possible this week, land it as `license?:` plus a test that fails on absence, which gives the same gate without a compile break.

### mm-i18n — Extend the city translation overlay for the new localised museum fields

**P1** · owner **engine** · brief §14, §21 decisions row (six live languages), SESSION-SPLIT.md rule 6 · after `mm-schema`, `mm-content`

A French family opening the Louvre's Quick visit would otherwise get French exhibit text and empty strings where the visual clue and the accessibility line should be — this repo's most common content bug, by its own account.

**Today.** data/world/types.ts:424-429 defines `PlaceTranslation.museum` with doorNote / rooms{name,intro} / exhibits{name,blurb,question} / riddles{prompt,hint}; merged at data/world/mergeTranslation.ts:79-105. All 24 city overlay files under data/world/i18n/ already carry a `museum` key. Nothing in the overlay can carry a visualClue, a zone, or an accessibility line.

**Changed after review.** OWNERSHIP CORRECTED. Was assigned to i18n, but its files are `data/world/types.ts` and `data/world/mergeTranslation.ts` — both engine, one of them the frozen contract. The type and the merge code belong in `mm-schema`'s commit; the translator work is the separate `mm-i18n-files` below.

**Done when**

- `PlaceTranslation.museum` gains `meta?: { accessibility?: string }`, `rooms[roomId].zone?: string` and `exhibits[exhibitId].visualClue?: string`.
- mergeTranslation.ts merges all three, keyed by id, following the existing pattern at :85-105 — never by array position.
- A missing overlay field falls through to the source `el`/`en` via `pick` (types.ts:45-48) and never renders empty.
- The de/fr/es/it overlays for every city that already has them are refilled for the new fields once mm-content has authored the Greek and English.
- A test asserts that any overlay `visualClue` / `zone` / `accessibility` key names an id that exists in that city's source module.

**Schema**

```ts
// data/world/types.ts, inside PlaceTranslation.museum (currently :424-429)
  meta?: { accessibility?: string };
  rooms?: Record<RoomId, { name?: string; intro?: string; zone?: string }>;
  exhibits?: Record<ExhibitId, { name?: string; blurb?: string; visualClue?: string; question?: QuestionTranslation }>;
```

**Files.** `data/world/types.ts`, `data/world/mergeTranslation.ts`, `data/world/i18n/*.{de,fr,es,it}.json`

**Risk.** The type change lands in types.ts, which mm-schema also edits — do not run these two in parallel; fold the overlay type change into mm-schema's commit if both are in flight. Volume risk: 24 overlay files × up to 22 museums' worth of new strings, and STATUS.md §0α already lists an unfinished translation backlog (Rome/London/Amsterdam overlays, countries.<lang>.json for 24 countries) ahead of this one. This is a P1 that should queue BEHIND that backlog, not compete with it.

### mm-picker — Quick/Explorer/Master picker and variant-filtered MuseumView

**P1** · owner **engine** · brief §14, decisions row §42 Phase C · after `mm-schema`

A family with 20 minutes before lunch and a family with a free afternoon get the same 26-exhibit wall today. The picker is what turns one museum into three honest visits and is the entire visible half of Phase C.

**Today.** components/world/MuseumView.tsx renders every room and every exhibit of the museum unconditionally: `rooms = museum?.rooms ?? []` (:495), `allExhibits = rooms.flatMap(...)` (:498-501), and progress percentages computed over the whole building (:518-523). The entry route components/world/World.tsx:571-587 has no variant segment and no picker screen.

**Done when**

- Opening a museum shows a choose-your-visit screen first: ⚡ Quick 20 min / 🧭 Explorer 45 min / 🏆 Master 90 min, each with its minutes and exhibit count from `museum.variants`.
- The chosen variant is in the URL (e.g. `/…/:placeId/in/quick`) so a back button, a refresh and a shared link all land in the same visit.
- MuseumView walks only that variant's rooms and exhibits, in that variant's order; the riddle pool passed to RiddleGame is the variant's riddles.
- Progress bars and the "everything done" state are computed against the CHOSEN variant, not the whole museum (today: MuseumView.tsx:518-523).
- XP already earned on an exhibit under one variant is not re-paid under another — `useWorldProgress.answerExhibit` is keyed by ExhibitId and must stay that way.
- A museum with no `variants` (all 22 on day one) falls back to today's behaviour exactly, with no picker shown and no visual change.
- The chosen variant is remembered per museum, following the existing preference pattern at components/world/worldUi.ts:36-52 (try/catch localStorage, never break a screen over a failed write).
- All six languages have real strings for the three variant names and their durations — no string built from fragments (MuseumView.tsx:50-58 house rule).
- Floor and zone, where present, are shown on the room header so a child can actually find the room.

**Schema**

```ts
MuseumViewProps gains:
  variant?: MuseumVariant;   // undefined = today's whole-museum behaviour
  onPickVariant?: (v: MuseumVariant) => void;
New route segment in components/world/World.tsx: `${cityUrl}/${place.id}/in/:variant`, validated against MuseumVariant and redirected to the picker when unknown.
```

**Files.** `components/world/MuseumView.tsx`, `components/world/World.tsx`, `components/world/worldUi.ts`

**Risk.** MuseumView.tsx is 793 lines and holds the award guards (:512-513, :526-539) that this repo has double-charged on before — the file's own header names React 19 StrictMode double-invocation as the failure mode. Filtering exhibits changes the arrays those guards close over; a careless refactor re-pays XP. Second risk: World.tsx is a shared screen file — per SESSION-SPLIT.md only the engine session may touch it, and STATUS.md §0α warns that concurrent edits to shared world components have already been lost twice. Realistic size: 2-4 days, not an afternoon.

### mm-schema — Museum variant + §14 metadata schema on data/world/types.ts

**P1** · owner **engine** · brief §14, decisions row §42 ("Phase C: Quick/Explorer/Master variants in the 20 museums that already exist")

Everything else in Phase C — the picker, the content, the overlays, the tests — compiles against these types. Until they land, the content session cannot tag a single exhibit, and a child who has 20 minutes has no way to be shown a 20-minute museum.

**Today.** data/world/types.ts:182-225 defines Museum/MuseumRoom/Exhibit/Riddle with no notion of a variant, a duration, an age range, accessibility, photography, floor, zone or an alternate route. A repo-wide grep across components/world/ and data/world/types.ts for agemode|quick|master|variant|duration|accessib|photograph|floor|zone returns only Framer Motion `duration` and Tailwind class names — zero product hits.

**Done when**

- `MuseumVariant = 'quick' | 'explorer' | 'master'` and `AgeMode = 'junior' | 'explorer' | 'family'` are exported from data/world/types.ts.
- `Museum.variants` exists and carries, per variant: minutes, the ordered room ids, the ordered exhibit ids and the riddle ids that variant uses. A variant's exhibit ids must all exist inside that museum.
- `Museum.meta` exists carrying the §14 per-museum facts: minutes range, ageRange, difficulty, accessibility, photographyAllowed, plus a `source` so §19 provenance holds.
- `MuseumRoom.floor` and `MuseumRoom.zone` exist (optional).
- `Exhibit.visualClue?: LocText` and `Exhibit.difficulty?: 1|2|3` exist — the brief's "visual clue" and the per-exhibit signal a variant needs to pick its 6 objects out of 26.
- Every new field is optional, or the whole thing is `Museum.variants?`, so the 22 existing museums still typecheck with zero edits. `npm run typecheck` is clean on the unchanged content files.
- The doc comment states that `Quick/Explorer/Master` is a ROUTE through existing exhibits, not three copies of the content — no exhibit text is duplicated per variant.
- No existing field is renamed or removed (types.ts:1-24 declares the file frozen against removals).

**Schema**

```ts
export type MuseumVariant = 'quick' | 'explorer' | 'master';
export type AgeMode = 'junior' | 'explorer' | 'family';

export interface MuseumRoute {
  /** Target walk-through time in minutes. quick≈20, explorer≈45, master≈90. */
  minutes: number;
  /** Rooms in the order this variant walks them. Subset of museum.rooms ids. */
  roomIds: RoomId[];
  /** Exhibits in mission order. Subset of this museum's exhibits. */
  exhibitIds: ExhibitId[];
  /** Riddles this variant offers. Subset of this museum's riddles. */
  riddleIds: RiddleId[];
  /** Optional second ordering for when a wing is shut or crowded. */
  alternateExhibitIds?: ExhibitId[];
}

export interface MuseumMeta {
  /** Age band the museum's own content suits, e.g. [6, 12]. */
  ageRange: [number, number];
  difficulty: 1 | 2 | 3;
  /** Step-free, lift, wheelchair loan — in words, from the venue's own page. */
  accessibility?: LocText;
  /** 'allowed' | 'no-flash' | 'forbidden' | 'unknown'. Never guessed. */
  photography: 'allowed' | 'no-flash' | 'forbidden' | 'unknown';
  /** §19: where accessibility/photography/hours came from. */
  source: LocationSource;
}

// added to Museum (types.ts:182-189)
  meta?: MuseumMeta;
  variants?: Record<MuseumVariant, MuseumRoute>;

// added to MuseumRoom (types.ts:191-199)
  floor?: string;   // '0', '1', 'B', 'Mezzanine' — printed, not computed
  zone?: LocText;   // 'West wing' / 'Δυτική πτέρυγα'

// added to Exhibit (types.ts:201-209)
  difficulty?: 1 | 2 | 3;
  visualClue?: LocText;  // 'look for the tall red case by the window'
```

**Files.** `data/world/types.ts`

**Risk.** types.ts is the frozen contract between the engine and content sessions (see its header, lines 1-24) and both mm-metadata consumers and every city file compile against it. Two sessions editing types.ts at once is the exact failure STATUS.md §0α records for CountryScreens.tsx ("ξαναγράφτηκε πάνω από edits δύο φορές"). Serialise: this ticket lands ALONE, is committed, and only then do mm-picker / mm-content start. Second risk: making `variants` required would break all 22 museums and the whole test suite at once — it must be optional.

### mm-tests — Museum-variant invariants in world.test.ts

**P1** · owner **engine** · brief §14, decisions row §20 ("Η πύλη σήμερα: 120+ invariants"), §42 Phase C · after `mm-schema`

In this repo the test file is the content gate — it is what lets an agent author a city without a human reading every line. A variant that points at a deleted exhibit would ship silently otherwise.

**Today.** data/world/world.test.ts:347-370 already checks museum internal consistency (interior present, rooms non-empty, unique exhibit ids, riddles pointing inside their own museum, unique riddle ids). It knows nothing about variants, meta, floors or visual clues.

**Done when**

- Every id in `variants.<v>.roomIds` / `exhibitIds` / `riddleIds` / `alternateExhibitIds` exists inside that same museum.
- A museum that declares `variants` declares all three of quick/explorer/master — never one or two.
- quick.exhibitIds.length ≤ explorer.exhibitIds.length ≤ master.exhibitIds.length, and each list has no duplicates.
- Each variant's `minutes` is between 10 and 150 — a sanity floor and ceiling, not an assertion of 20/45/90.
- `meta.ageRange` is a valid ascending pair inside 6..12 (the product's audience, per CLAUDE.md and SESSION-SPLIT.md rule 8).
- `meta.photography` is one of the four allowed values and `meta.source` is present whenever `meta` is.
- Every new LocText added by mm-content (visualClue, zone, accessibility) has both `el` and `en`.
- Museums without `variants` are skipped, not failed — the suite must stay green on the day mm-schema lands and before mm-content starts.

**Schema**

```ts
No new exported types. New `it(...)` blocks inside the existing museum describe block at data/world/world.test.ts:347.
```

**Files.** `data/world/world.test.ts`

**Risk.** world.test.ts is engine-owned (SESSION-SPLIT.md) and is the same file the coordinate audit and the answer-length-bias test live in; it is currently 159/159 green per STATUS.md §0α. Writing the new invariants as failing-by-default (rather than skipping absent variants) would turn the gate red for every city session at once and block unrelated work. Land this ticket in the same session as mm-schema if possible, so the types and the invariants agree from the first commit.

### passport-stats-page — Passport statistics page — the §12 counters, with kilometres resolved against §28

**P1** · owner **engine** · brief §12 ("Σελίδα passport: χώρες 8/195, πόλεις 17, μουσεία 12, missions 387, χιλιόμετρα 143, artifacts 46, rare badges 7"), §13, §28; decisions row §12–13 ("Σελίδα στατιστικών: P1"), decisions row §28–29 ("Ισχύουν πλήρως… καμία αποθήκευση θέσης"), decisions row §30–31 (artifacts after the test) · after `l3-museum-stamp`

The stamp book shows a child what they collected; the statistics page shows them how far they have come, in one screen they can hand to a parent. It is also the only place the seven §12 numbers can live — the book's cover is three columns wide by deliberate design and cannot hold them.

**Today.** Three of the seven counters, on the stamp book cover: countries entered, cities sealed, places stamped (components/world/StampBook.tsx:477-493). There is no statistics route — `components/world/World.tsx:687-700` lists index, `passport`, `:countryId`, `:countryId/:cityId`, `:countryId/:cityId/:placeId`, `…/in`, and nothing else. `StampBook.tsx:9` states the screen is "a book, not a dashboard", so the statistics belong in a sibling screen, not bolted onto the cover.

Per-counter audit against the stored object (`WorldProgress`, components/world/useWorldProgress.ts:81-105):
• COUNTRIES x/195 — EXISTS. `Object.keys(entries).length` (already used at useWorldProgress.ts:391). Denominator is a decision: the registry currently holds 25 countries (data/world/registry.ts imports, austria…united-states), the brief says 195.
• CITIES — PARTIALLY EXISTS. `citiesDone.length` is cities SEALED (StampBook.tsx:485). Cities VISITED is not stored but is derivable: place ids are prefixed by their city id and that is a tested invariant (data/world/world.test.ts:160-168), so visited cities = distinct `CITY_IDS` prefix over `Object.keys(places)` (`CITY_IDS` exported from data/world/registry.ts, last line).
• MUSEUMS — DOES NOT EXIST. Nothing records a finished museum; see ticket `l3-museum-stamp`.
• MISSIONS — DERIVABLE, undefined. `Object.keys(places).length + Object.keys(exhibits).length + Object.keys(riddles).length` (+ `trailsDone.length`) all exist (useWorldProgress.ts:86-91). No definition of "mission" is written down anywhere in the module.
• KILOMETRES — DOES NOT EXIST AND CANNOT, ON PURPOSE. §28 and its decisions row forbid location history; `PlaceCard.tsx:400,408-419` takes a single fix, compares it to our own coordinate and discards it; nothing in `wb_world_progress` holds a coordinate, a time or an accuracy. See acceptance for the resolution.
• ARTIFACTS — DOES NOT EXIST. Decisions row §30–31 puts artifacts after the field test.
• RARE BADGES — DOES NOT EXIST and is blocked by contract: spec 02 lines 35-39 forbid a new badge because it means editing six shared files and the `badges` table.

**Done when**

- A new screen `components/world/PassportStats.tsx` at route `/world/passport/stats` (added to the `<Routes>` block at World.tsx:687-700), reached from a link on the stamp book cover. The stamp book itself is not turned into a dashboard.
- COUNTRIES renders as "X of 195" exactly as §12 writes it, with a quieter second line naming how many countries WiseBot World has open today (derived from `content.countries.length`, never a hard-coded 25). The blank-pages logic in StampBook.tsx:560-583 is not duplicated here.
- CITIES shows both numbers, distinctly labelled: cities sealed (`citiesDone.length`) and cities visited (distinct city prefixes over `Object.keys(places)`, using `CITY_IDS` from data/world/registry.ts and the prefix invariant tested at data/world/world.test.ts:160-168). A single ambiguous "cities" number is not acceptable — one of the two will always be wrong for the child reading it.
- MUSEUMS shows `Object.keys(museums).length` from ticket `l3-museum-stamp`. If that ticket has not landed, the museums counter is OMITTED from the page entirely — never rendered as a permanent 0, which reads as "you have visited no museums" to a child who has visited three.
- MISSIONS is defined in one place, in a comment on the page, as: places stamped + exhibits answered + riddles solved + trails finished. It is computed from `wb_world_progress` only. It MUST NOT read `stats.missionsCompleted` or anything fed by `trackAction` or `MISSION_POOL` — those are the daily Academy mission, a different thing with the same word (spec 02 lines 40-46).
- KILOMETRES: no counter that claims to measure how far the child walked ships, now or later. The page carries no distance figure sourced from the device. The §12 number and §28 are in direct conflict and §28 wins by the decisions table ("Ισχύουν πλήρως"). The resolution is written into the file as a comment so the next session does not re-litigate it.
- The substitute, for owner approval, is a privacy-safe figure computed from OUR OWN published coordinates and nothing else: the summed great-circle distance between consecutive stamped places within each city, using `distanceM` from utils/geo.ts:10 over `place.location` values. It is labelled honestly — "the distance between the places you stamped", never "kilometres you walked" — and it needs no new stored data, no fix, no timestamp. If the owner rejects the substitute, the counter is dropped and the page ships with six tiles, not seven.
- ARTIFACTS and RARE BADGES are omitted from the page, with a one-line comment naming the decisions row (§30–31, after the field test) and spec 02 lines 35-39 (no new badge). No placeholder tile, no "coming soon".
- Every counter tile is rendered from a single pure function `readWorldStats()` exported next to `readWorldSummary()` (components/world/useWorldProgress.ts:383-396) — read-only, no `useEconomy`, no effect, no write, so the statistics page can never pay a child.
- All chrome in six languages (el en de fr es it) as whole sentences in local `T`/`S` dictionaries read via `ui()`, matching StampBook.tsx:64-212; the root carries `lang={lang}` for Greek uppercase (StampBook.tsx:30-37, 441).
- Unit tests for `readWorldStats()`: an empty passport yields zeros without throwing, a corrupt `wb_world_progress` yields zeros (the `read()` catch at useWorldProgress.ts:138-140), and the cities-visited derivation counts a city with one stamped place as visited but not sealed.
- `npm run typecheck` clean; `npx vitest run data/world/world.test.ts --exclude '**/.claude/**'` unchanged at 159/159.

**Schema**

```ts
In components/world/useWorldProgress.ts, beside `readWorldSummary()`:

  export function readWorldStats(): {
    countriesEntered: number;     // Object.keys(entries).length
    countriesSealed: number;      // countriesDone.length
    citiesVisited: number;        // distinct CITY_IDS prefix over Object.keys(places)
    citiesSealed: number;         // citiesDone.length
    placesStamped: number;        // Object.keys(places).length
    museumsSealed: number;        // Object.keys(museums).length — needs l3-museum-stamp
    missions: number;             // places + exhibits + riddles + trailsDone
    trailsDone: number;
  }

No new stored field, no schema change, no migration — every number above is derived from the object already on disk. Deliberately ABSENT and never to be added: any lat/lon, any timestamp beyond the ISO date already stored per stamp, any accuracy, any step or distance total sourced from the device (§28).
```

**Files.** `components/world/PassportStats.tsx`, `components/world/World.tsx`, `components/world/StampBook.tsx`, `components/world/useWorldProgress.ts`, `components/world/useWorldProgress.test.ts`

**Risk.** Obeys docs/world/specs/02-progress-and-rewards.md: the page awards nothing, stores nothing, adds no badge, no credit, no `trackAction`, no `MISSION_POOL` entry — it is the same read-only shape as `readWorldSummary()` (useWorldProgress.ts:379-396) and the same "renders it, awards nothing" rule the stamp book already states (StampBook.tsx:16-19). Three risks. (1) The kilometres conflict is the one place a well-meaning session could ship a §28 violation; if the substitute is not approved, the honest outcome is a missing tile, not a stored track. (2) `World.tsx` and `StampBook.tsx` are shared with ticket `l3-museum-stamp` and with any other engine session — STATUS.md §0α records CountryScreens.tsx being overwritten twice this way; land the two tickets in one session, in this order, or serialise them. (3) The "/195" denominator must not be reproduced as a hard-coded country count anywhere else; `content.countries` is the only source (World.tsx:633).

### pricing-engine-gate — Entitlement model and free/paid content gate for World, flag-off until November

**P1** · owner **engine** · brief §36, decisions row §36; free tier defined in §36 prose · after `pricing-owner-stripe`

A parent who wants to pay for the Greece Pack currently cannot, and a child sees every city for free with no notion of a free tier. This builds the gate so the November switch is a config change, not a feature.

**Today.** Nothing. A grep for price/Stripe/paywall/premium/locked/isPaid/entitle across components/world/** and data/world/** returns no code at all — only unrelated prose inside city content files (e.g. data/world/cities/london.ts:1351 'locked with the same ceremony'). Every city, museum, riddle and narration clip in World is free and ungated today. The reusable pieces that DO exist: api/stripe/checkout.ts, api/stripe/webhook.ts, api/stripe/verify/, and the funnel events at utils/analytics.ts:23,26,34.

**Done when**

- An entitlement is readable by the World screens through one function, e.g. `hasEntitlement(scope)` in a new components/world/useWorldEntitlement.ts, returning a value derived from the server — never from localStorage alone, which a child can edit.
- The free tier matches §36 exactly: world map, country passport, arrival stamps, basic info, the first missions of a city, and the cities marked free. Athens stays entirely free (BUSINESS-PLAN.md:423).
- A locked place shows a parent-facing explanation, never a dead end for the child, and fires `trackGateBlock` (utils/analytics.ts:34) with a new gate value for World.
- **The gate ships behind a flag that is OFF, and the flag cannot be turned on before 1 November 2026.** A test asserts the default-off state, so an accidental enable fails CI rather than charging a family in October.
- No dark patterns, no loot boxes, no pop-up ad inside a mission, no countdown timer (§29 forbids all four explicitly).
- Purchase completion grants the entitlement server-side via the existing webhook path; a client-side grant is not accepted.
- `npm run typecheck` clean and `npx vitest run data/world/world.test.ts` still green.

**Schema**

```ts
New table `world_entitlements` (Supabase migration): `id uuid pk default gen_random_uuid()`, `user_id uuid not null references auth.users(id) on delete cascade`, `scope text not null` — one of 'city:<cityId>' | 'pack:greece' | 'pass:family' | 'pass:founding', `source text not null` ('stripe' | 'gift' | 'school'), `stripe_session_id text unique`, `granted_at timestamptz not null default now()`, `expires_at timestamptz null` (null = perpetual; set for the annual passes). Unique index on (user_id, scope). RLS: a user may SELECT only their own rows and may never INSERT/UPDATE/DELETE — writes come from the service role in the webhook only.
```

**Files.** `supabase/migrations/<new>_world_entitlements.sql`, `api/stripe/checkout.ts`, `api/stripe/webhook.ts`, `components/world/useWorldEntitlement.ts (new)`, `components/world/CityView.tsx`, `components/world/PlaceCard.tsx`, `utils/analytics.ts`

**Risk.** api/stripe/checkout.ts and webhook.ts are shared with the Academy credit economy, which is live and has taken real money — a careless edit breaks paying customers for a feature that cannot ship until November. Add a branch rather than rewriting the handler, and read .claude/skills/wisebot-credits first. components/world/PlaceCard.tsx and CityView.tsx are Session A files per docs/world/SESSION-SPLIT.md:30-40; a content session must not touch them. Biggest product risk: building the gate before the field test means gating content whose free/paid split has never been tested on a real family.

### privacy-regression-test — Turn the §28/§29 privacy guarantees into tests so they cannot be lost by accident

**P1** · owner **engine** · brief §28, §29, decisions row §28-29 ("Ισχύουν πλήρως. Ήδη: καμία αποθήκευση θέσης, καμία φωτογραφία σε server, κανένα chat"); also decisions row §10 ("Photo challenge: μόνο on-device, ποτέ upload")

Every privacy promise in this cluster is currently true and every one of them is held up by a comment. The audience is children and the claims are made to parents and to two app stores — they should fail a build, not a review.

**Today.** The guarantees hold today (see the Existing list: utils/geo.ts:1-5 and :41-50, components/world/PlaceCard.tsx:400-420, components/world/useWorldProgress.ts:74-105 and :143-149, and zero camera/upload/chat code under components/world/**). What does not exist is any enforcement: data/world/world.test.ts has 23 `it(` blocks covering content, coordinates, languages and assets, and not one covering privacy. Meanwhile the app already contains, outside World, exactly the pipelines §28-29 rules out for it — components/OnboardingOverlay.tsx:246-340 sends a child's photograph as base64 to api/ai/avatar.ts, and api/ai/chat.ts backs components/WiseBotChat.tsx. A World photo mission (§10 keeps the door open, on-device only) would find `generateCartoon` already written and reusable.

**Done when**

- A test fails if any file under components/world/** imports or references `navigator.geolocation` directly instead of going through utils/geo.ts, whose contract is that a fix is never returned to a caller that persists it.
- A test fails if any file under components/world/** references getUserMedia, FileReader, toDataURL, toBlob, an `<input type="file">`, or api/ai/avatar — the World module must not be able to acquire or upload an image without that test being deliberately edited.
- A test asserts the persisted `WorldProgress` shape (useWorldProgress.ts:74-105) contains no key named lat, lng, latitude, longitude, accuracy or coords, and that `PlaceStamp.at` is a date string of the form YYYY-MM-DD rather than a millisecond timestamp.
- A test fails if anything under components/world/** imports the chat components or calls api/ai/chat — §27 defers the AI guide entirely and §29 forbids open chat.
- Each test carries a one-line comment naming the brief section it protects, so a future developer who hits a red test learns why rather than deleting it.
- No production behaviour changes in this ticket — it adds tests only.

**Files.** `data/world/world.test.ts (or a new data/world/privacy.test.ts)`

**Risk.** The decisions table marks §28-29 as already honoured, and it is right — this ticket must not be read as a claim that privacy is broken, or someone will 'fix' working code. It adds a guard, nothing else. A separate new file avoids competing with content sessions appending cities to world.test.ts, which is the shared-file collision this repo has already had twice (STATUS.md:41-45). The app-wide items in the notes are deliberately NOT in scope here.

### seo-faq-block — FAQ block + FAQPage JSON-LD on World city and place pages

**P1** · owner **engine** · brief §39, decisions row §39 ("FAQ και «family information» blocks: P1")

A parent searching "Ακρόπολη με παιδιά πόσο κρατάει" lands on our page instead of a tour operator's, and Google can show the answer as a rich result. The child gets a page that answers the parent's question before the parent decides to open the app.

**Today.** No FAQ anywhere under /world. data/world/seo.ts:70-266 emits BreadcrumbList, WebPage, Country, City, ItemList, TouristAttraction/Museum — grep for 'FAQ' in data/world/seo.ts returns nothing. The only FAQPage in the repo is the hand-written Academy one at index.html:136-175, which is the format precedent to copy.

**Done when**

- `faqFor(city)` and `faqFor(place)` in data/world/seo.ts return 4-6 Q/A pairs in `el` and `en`, built ONLY from data already in the modules (place count, museum count, room/exhibit/riddle counts, trail count, category, `location.findIt`, age range 6-12, the six languages). No new prose is invented and no fact without a source enters the answer text (§20).
- `placeMeta()` and `cityMeta()` append one `{'@context':'https://schema.org','@type':'FAQPage','mainEntity':[...]}` object to `PageMeta.jsonLd`; the world and country pages do not get one (thin, duplicated FAQs are a rich-result penalty).
- scripts/world/generate-world-seo.mjs renders the same pairs as a visible `<h2>Συχνές ερωτήσεις</h2>` + `<dl>` inside the existing `<noscript>` body, in el and en, for cityPage and placePage.
- components/world/WorldSeo.tsx needs no change — it already serialises `meta.jsonLd` (WorldSeo.tsx:37-41). Verify by rendering a place route and confirming exactly one FAQPage script tag (prerender + hydrate must not double it; the prerendered tag lives in <head> and Helmet replaces the tags it owns — assert this in the test).
- A new invariant in data/world/world.test.ts: every city and every place produces a FAQPage whose every Question has a non-empty `el` and `en` answer (the repo's most common content bug is a silently empty `en` — SESSION-SPLIT.md rule 6).
- Google's Rich Results Test accepts a sample prerendered place page with zero errors.

**Schema**

```ts
In data/world/seo.ts:

  export interface FaqEntry { q: LocText; a: LocText }   // LocText = { el: string; en: string }
  export function faqForCity(country: Country, city: City, module: CityModule, lang: SeoLang): FaqEntry[]
  export function faqForPlace(country: Country, city: City, place: Place, lang: SeoLang): FaqEntry[]

JSON-LD shape appended to PageMeta.jsonLd:
  { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FaqEntry[] -> [{ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }] }

No change to data/world/types.ts.
```

**Files.** `data/world/seo.ts`, `scripts/world/generate-world-seo.mjs`, `data/world/world.test.ts`

**Risk.** data/world/seo.ts and scripts/world/generate-world-seo.mjs are both shared with anyone doing SEO work — one session only, per the operational rule. Content risk: an FAQ that answers "what time does it open" from invented knowledge violates §20; the acceptance criteria therefore restrict answers to counts and fields already in the modules, and opening hours are deliberately pushed to world-family-info-schema where they arrive with a source. Duplicate-content risk if the same FAQ text is emitted on 136 place pages — the generated questions must interpolate the place's own name, category and counts so no two pages share a string.

### world-analytics-minimum — The minimum GA4 event set that measures the North Star

**P1** · owner **engine** · brief §34 (North Star + event list), §35 (targets), §28 (no child location history) · after `world-stamp-onsite-flag`

Today WiseBot World fires zero analytics events — the pilot would run and produce no number. This is what turns the field test into evidence instead of an anecdote.

**Today.** Nothing in the module. grep for track|gtag|analytics across components/world/** returns only Tailwind `tracking-*` classes and a comment at components/world/useWorldProgress.ts:18 that reads "No credits, no badge, no trackAction". The transport already exists and is consent-safe: utils/analytics.ts:13-18 `track()`, loaded lazily at call sites (see App.tsx:98, context/EconomyContext.tsx:671-673 for the established pattern). GA4 property G-7834HP8GYV, index.html:16.

**Changed after review.** REWRITTEN after the privacy audit. As drafted this shipped a coarse location history: every GA4 event is timestamped server-side, so `on_site=true` plus `city_id` plus `trip_id` is «Completed Porto» **with the ώρα attached**, which §28 forbids by name and §29 lists as `child-location history`. The transmitted payload must not carry `on_site`, `trip_id`, or anything that groups stops into one outing. Measure the North Star from the §35 post-trip survey instead. If the owner wants the on-site signal on the wire, that needs the explicit §29 product approval in `owner-analytics-approval`, not a test of payload shape — a shape test cannot see the timestamp GA4 adds.

**Done when**

- A new `utils/worldAnalytics.ts` exports named helpers wrapping `track()` from utils/analytics.ts. No `gtag` call anywhere in components/world/**; the module imports the helper, lazily, like every other call site in this repo.
- Six events, no more, chosen so the North Star and the reachable §35 targets are computable: `wb_world_open`, `wb_world_mission_start`, `wb_world_mission_complete`, `wb_world_stamp`, `wb_world_passport_open`, `wb_world_city_complete`.
- `wb_world_mission_complete` carries `on_site` (from world-stamp-onsite-flag) and `trip_id`. North Star = count of `wb_world_mission_complete` with `on_site=true`, grouped by `trip_id`.
- `trip_id` is a random opaque id generated on device (`crypto.randomUUID()`), stored in localStorage with a last-touched timestamp, and ROTATED after 24h of inactivity. It is not derived from the child, the account, the city, or any coordinate, and it is never sent to Supabase.
- Every event's parameter set is asserted by a unit test against an allowlist: a test fails if any payload key or value is outside the allowlist. This is the mechanical guard for §28, not a code-review convention.
- A short table in docs/world/ (or a comment block at the top of utils/worldAnalytics.ts) maps each §35 target to the events that compute it, and states plainly which targets these six events CANNOT produce (see notes).
- `npm run typecheck` clean; the world tests still green.

**Schema**

```ts
utils/worldAnalytics.ts — the complete allowlist, nothing outside it may be sent:

  wb_world_open            { entry: 'map' | 'country' | 'city' | 'place' | 'deeplink', lang: 'el'|'en'|'de'|'fr'|'es'|'it' }
  wb_world_mission_start   { city_id: string, category: PlaceCategory, on_site: boolean, trip_id: string }
  wb_world_mission_complete{ city_id: string, category: PlaceCategory, on_site: boolean, correct: boolean, trip_id: string }
  wb_world_stamp           { kind: 'place' | 'exhibit' | 'riddle' | 'trail' | 'city' | 'country' }
  wb_world_passport_open   { stamps: number }          // count only
  wb_world_city_complete   { city_id: string }

  trip_id: localStorage key `wb_world_trip`, value { id: string /* crypto.randomUUID() */, touched: number /* epoch ms */ }
           rotate when Date.now() - touched > 24 * 3600 * 1000

FORBIDDEN in any payload, enforced by test: lat, lng, latitude, longitude, coords, accuracy,
distance, place_id, bearing, address, child name, profile id, user id, email, timestamp of a fix.
```

**Files.** `utils/worldAnalytics.ts`, `components/world/World.tsx`, `components/world/PlaceCard.tsx`, `components/world/StampBook.tsx`, `utils/worldAnalytics.test.ts`

**Risk.** PRIVACY — how each event stays §28-safe: (1) no coordinate, distance or bearing is ever a parameter; `on_site` is a single boolean derived from a comparison that already happened and was discarded on-device (PlaceCard.tsx:408-419, utils/geo.ts:41-51). (2) `place_id` is deliberately EXCLUDED and only `city_id` sent: a timestamped stream of place ids from one device IS a location history for a walk through Athens, which §29 forbids by name; city granularity cannot reconstruct a route. (3) `trip_id` is random, device-local and rotates after 24h, so it groups one outing without becoming a persistent device identifier and is never joined to an account. (4) No name, profile id, email or age is sent — the §28 line. (5) Everything runs through utils/analytics.ts:13-18, which no-ops until the parent accepts analytics cookies (index.html:10-20), so a refusing family sends nothing.

MEASUREMENT RISK the owner must know before reading the pilot number: because GA4 only loads after consent, and the pilot child may be in guest mode on the street, the North Star will UNDERCOUNT. Report it as a floor, not a rate, until the consent-acceptance share is known. Second risk: World.tsx and PlaceCard.tsx are the two files concurrent sessions have already clobbered twice (STATUS.md:41-43) — sequence this after world-stamp-onsite-flag in the same session rather than in parallel.

### world-family-info-schema — familyInfo fields on Place and City + render them on the SEO pages

**P1** · owner **engine** · brief §39 ("family information"), decisions row §39; decisions row §7 (openingHoursSource is a P1 addition)

The parent's real question before walking anywhere is: how long, how much, can the pushchair get in, is there a toilet. Today no page can answer it, so the parent goes to a tour site and the child never gets to the mission.

**Today.** Nothing. grep for openingHours|ticket|admission|family in data/world/types.ts returns nothing. The Place model carries name, tagline, emoji, category, story, facts, question, location{lat,lng,anchor,findIt,confidence,sources,verifiedAt}, museum — no visitor-practicality fields at all. data/world/seo.ts:186 already prints the phrase "family trails" but that is trail count, not family information.

**Done when**

- `FamilyInfo` is added to data/world/types.ts as an OPTIONAL field on `Place` and on `City`. Optional is load-bearing: 136 places exist today and none has it, so a required field would break every module and every test at once.
- Every FamilyInfo value that is a real-world claim carries its own `source` URL. A value without a source fails the test — same gate as `location.sources` (§19/§20).
- New invariants in data/world/world.test.ts: if `familyInfo` is present then (a) every LocText inside it has non-empty `el` and `en`, (b) every populated claim field has a non-empty `source`, (c) `durationMin` is 5..240, (d) `cost` is one of the enum values.
- scripts/world/generate-world-seo.mjs placePage() and cityPage() render a `<h2>Για οικογένειες</h2>` / `<h2>Family information</h2>` block inside the existing `<noscript>` body when `familyInfo` is present, and render nothing when it is absent (no empty headings on the other 130 pages).
- The place JSON-LD gains, only when the corresponding field is present: `openingHours` (schema.org OpeningHoursSpecification), `isAccessibleForFree` (from `cost === 'free'`), `publicAccess: true`, and `audience: { '@type': 'PeopleAudience', suggestedMinAge: 6, suggestedMaxAge: 12 }`.
- `npm run typecheck` clean and `npx vitest run data/world/world.test.ts --exclude '**/.claude/**'` green with zero cities populated — i.e. this ticket ships safely before any content lands.

**Schema**

```ts
In data/world/types.ts:

  export interface Sourced<T> { value: T; source: string }   // source = URL, official page preferred

  export interface FamilyInfo {
    /** Typical visit for a 6-12 child, minutes. */
    durationMin?: number;
    cost?: 'free' | 'paid' | 'free-for-children';
    /** Human opening-hours line, both languages, plus the page it came from. */
    openingHours?: Sourced<LocText>;
    stroller?: Sourced<boolean>;
    toilets?: Sourced<boolean>;
    /** Shade/water/indoor-in-rain — the three a parent asks in Athens in July. */
    notes?: LocText;
  }

  // additive, optional, on both:
  interface Place { /* … */ familyInfo?: FamilyInfo }
  interface City  { /* … */ familyInfo?: FamilyInfo }
```

**Files.** `data/world/types.ts`, `data/world/seo.ts`, `scripts/world/generate-world-seo.mjs`, `data/world/world.test.ts`

**Risk.** data/world/types.ts is Session A's frozen file (SESSION-SPLIT.md:33-40) — this is an additive optional field, but it must be one session and the registry regenerated afterwards (`node scripts/world/build-registry.mjs`). It also collides head-on with seo-faq-block in data/world/seo.ts and scripts/world/generate-world-seo.mjs: run the two in sequence, not in parallel. The real failure mode is an agent filling openingHours from memory — hence source-or-fail in the test rather than a review convention.

### i18n-overlays-rome-london-amsterdam — de/fr/es/it overlays for Rome, London and Amsterdam

**P1** · owner **i18n** · brief §21; §43 Definition of Done ('languages'); decisions rows §22–23 (these three are pilot cities) and §24/§43 (today's cities are 'Silver' until the field test) · after `i18n-countries-24`

Three of the five pilot cities are readable only in Greek and English. A German family in Rome gets the whole city in English. The fallback is honest and labelled, so the Athens field test is not blocked — but §43's per-city Definition of Done is not met until these land.

**Today.** Nothing. data/world/i18n/ holds 24 city overlay files covering athens, thessaloniki, heraklion, rhodes, delphi and paris in de/fr/es/it. There is no rome.*, london.* or amsterdam.* file at all — 12 files missing. The content itself is committed and complete in el+en: data/world/cities/rome.ts (18 places, 3 museums, 211 KB), london.ts (17 places, 3 museums, 196 KB), amsterdam.ts (16 places, 3 museums, 198 KB). Place counts are asserted at data/world/registry.ts:90-100. The loader map at registry.ts:113-152 must gain the 12 entries — it is generated, see risk.

**Done when**

- 12 new files exist: data/world/i18n/{rome,london,amsterdam}.{de,fr,es,it}.json.
- Each declares `lang` matching its filename and `cityId` matching its city — a mismatch is silently ignored at runtime (data/world/mergeTranslation.ts:144), which is a very hard bug to see.
- Each covers EVERY place id of its city (rome 18, london 17, amsterdam 16) and every trail id, keyed by id and never by array position.
- Per place: name, tagline, story, facts (same length and order as the source array), question (q, exactly 4 answers in source order so index 0 stays correct, explanation), `findIt` wherever the source place has `location.findIt`, and for the 3 museums per city the full `museum` block — doorNote, every room name+intro, every exhibit name+blurb+question, every riddle prompt+hint.
- `node scripts/world/build-registry.mjs` is re-run so data/world/registry.ts picks up the 12 new overlay entries in `I18N`, and the language switcher and `translationsFor()` see them.
- `npx vitest run data/world/world.test.ts --exclude '**/.claude/**'` is green — in particular the 12 new 'rome/london/amsterdam is completely translated into <lang>' cases that appear automatically once the loaders exist.
- `npm run typecheck` is clean.
- Brief §33's boring test still holds in the target language: the translated question is still answerable by a 7-year-old standing in front of the thing, and the correct answer is not the longest option (the content session had to rewrite 112 of 148 questions for exactly this bias — do not reintroduce it in translation).

**Schema**

```ts
No schema change. Existing shape, data/world/types.ts:407-430 (`CityTranslation`, `PlaceTranslation`, `QuestionTranslation`). Use data/world/i18n/paris.de.json (41 KB, 13 places, 2 museums) as the worked reference — same city pipeline, same author. Gate per file is the existing test name '<city> is completely translated into <lang>'.
```

**Files.** `data/world/i18n/rome.de.json`, `data/world/i18n/rome.fr.json`, `data/world/i18n/rome.es.json`, `data/world/i18n/rome.it.json`, `data/world/i18n/london.de.json`, `data/world/i18n/london.fr.json`, `data/world/i18n/london.es.json`, `data/world/i18n/london.it.json`, `data/world/i18n/amsterdam.de.json`, `data/world/i18n/amsterdam.fr.json`, `data/world/i18n/amsterdam.es.json`, `data/world/i18n/amsterdam.it.json`, `data/world/registry.ts (GENERATED — regenerate, never hand-edit)`

**Risk.** Twelve translator sessions can run fully in parallel (one file each, none shared) but ALL of them must regenerate data/world/registry.ts, which is the one file the whole split exists to keep unshared (docs/world/SESSION-SPLIT.md:56-58). Resolve every registry.ts conflict by re-running `node scripts/world/build-registry.mjs`, never by hand. Second risk: city NAMES and intros for these three do NOT belong here — they live in countries.<lang>.json and are assigned to i18n-countries-24; a translator who adds them here will produce a file the merge quietly ignores. Third: Rome and London are the two largest city modules in the repo; at Paris's ~41 KB per overlay this is roughly 600 KB of new translated prose and the single largest content batch in the module — size the sessions accordingly.

### mm-i18n-files — Translate the new museum fields once the schema exists

**P1** · owner **i18n** · brief §14, §21 · after `mm-schema`, `i18n-machine-translated-flag`

The museum variants add localised strings — zone names, visual clues, variant labels. Without overlays a German family reads them in English inside an otherwise German screen.

**Today.** Nothing: the fields do not exist yet. Split out of `mm-i18n`, which was assigned to i18n but listed only engine files.

**Done when**

- Only `data/world/i18n/*.json` is edited. No TypeScript file is touched by this ticket.
- Every new museum string exists in de/fr/es/it for every museum that already has an overlay in that language.
- Each file carries `machineTranslated: true` until an adult has read it, per `i18n-machine-translated-flag`.

**Files.** `data/world/i18n/*.json`

**Risk.** Must not start before `mm-schema` has landed, or twelve translator sessions write against a shape that then changes.

### fieldtest-mission-type-capture — Field test #0 observation sheet — capture WHICH three mission types the children ask for

**P1** · owner **owner (only a human can do it)** · brief §10, decisions row §10 (“Τα υπόλοιπα μετά το πρώτο field test, όταν ξέρουμε ποια 3 ζητούν τα παιδιά”)

Every other ticket in this cluster is gated on an answer that only the field test can give, and nothing in the repo defines how that answer gets captured. Without a sheet, the Saturday walk produces a feeling instead of a decision, and the deferral never lifts.

**Today.** Nothing. docs/world/STATUS.md:174 lists “Field test #0 το Σάββατο: εσύ και ένα παιδί, διαδρομή 1 Αθήνας” as an owner task with no instrument. No analytics are wired for World (brief §34’s event list is unimplemented; STATUS.md:155 notes Vercel Web Analytics is off).

**Done when**

- A one-page sheet (paper or notes app) exists before the walk, listing the ten §10 candidate kinds — FIND IT, OBSERVE, VISUAL MATCH, AUDIO STORY, TRUE/FALSE, ORDER, PHOTO, FIND THE DETAIL, CREATIVE, FINAL BOSS — with a box per stop.
- For each stop the sheet records: what the child did unprompted before reading, what they asked for («μέτρα», «βρες», «βγάλε φωτογραφία»), and where they lost interest.
- After the walk the owner writes THREE named kinds, in order, into docs/world/STATUS.md or a successor decisions row. That written list is the trigger condition every P2 ticket in this cluster names.
- The sheet also answers the one question research/07 flags as the owner’s: does a photo mission that pays no XP read as a reward or as a punishment when the next exhibit pays 5 XP (docs/world/research/07-quest-engine.md, «Μια επιφύλαξη που ανήκει στον ιδιοκτήτη»).

**Files.** `docs/world/STATUS.md`

**Risk.** Likely overlaps a field-test / pilot cluster owned by another session — check before creating, and keep one copy, not two. Second risk: a single child on a single Athens route is a sample of one; the three kinds chosen from it should be reviewed again after the second family, not treated as settled.

### gold-signoff-athens — Owner: walk Athens and sign off the first Gold city

**P1** · owner **owner (only a human can do it)** · brief §24, §43, decisions row §22-23 ("Ο πιλότος είναι η Αθήνα") and §24/§43 · after `city-gold-checklist`

Six of the fifteen Definition-of-Done lines can only be established by a person on a pavement with a child. Until one city passes, 'Gold' is an aspiration and every city stays Silver by definition.

**Today.** Athens is the most complete city — 18 places, museums, riddles, narration in el and en (data/world/cities/athens.ts, data/world/narration.ts). The field test is already scheduled: docs/world/STATUS.md:174 lists 'Field test #0 το Σάββατο: εσύ και ένα παιδί, διαδρομή 1 Αθήνας' as an owner-only item. Nothing records its result. The decisions table (brief line 24) holds every city at Silver until this happens.

**Done when**

- One Athens route is walked end to end with a child, in the app, on the street — not simulated.
- Each place on that route is confirmed to unlock at its real position, and any pin that needed more than a glance to find is written down with what was wrong (the 60 m / 120 m radii are at components/world/PlaceCard.tsx:405).
- The six human §43 lines are answered yes or no for Athens: route tested physically, Family Adventure end-to-end, rewards work, stamp works, accessibility data, family beta completed.
- The answers are recorded in the data/world/quality.ts row for Athens, including who walked it and on what date — not in a chat message.
- The §33 boring test is answered in one sentence: did the child ask for another mission without being pushed?
- If Athens passes, `cityTier` returns 'gold' for it and the tier test is updated; if it does not, the specific failing lines become the next tickets.

**Files.** `data/world/quality.ts`

**Risk.** This is the gate everything else is waiting behind — §10 mission types, §11 characters, §17 route variants, §26 'I have 2 hours' and §30-31 are all deferred in the decisions table to 'after the field test'. If it slips, five other clusters stay blocked. It is also the only ticket in this cluster that no agent can do.

### loc-greece-c-walk — Walk the 16 Greek C-grade places and record the upgrade

**P1** · owner **owner (only a human can do it)** · brief decisions row §7 ("στην Ελλάδα τα C αναβαθμίζονται με περπάτημα του ιδιοκτήτη, δεν αφαιρούνται"), §7 confidence level A = field-verified entrance · after `loc-manual-verified`, `loc-entrance-pair`

Athens is the daily-QA pilot city (decisions row §22-23) and the field test is this Saturday (docs/world/STATUS.md:174). These are the places where a child is most likely to be sent to the wrong side of a fence, and the decisions row says the fix is feet, not a delete key.

**Today.** 16 shipped Greek places carry confidence C and are, per loc-ab-quest-rule, quest-eligible today. From data/world/coords/: athens-benaki-toy-museum, athens-planetarium; delphi-site, delphi-stadium, delphi-parnassus, delphi-amfissa, delphi-hosios-loukas; heraklion-loggia, heraklion-juktas, heraklion-amnisos; rhodes-art-gallery, rhodes-kallithea, rhodes-filerimos, rhodes-kameiros, rhodes-monolithos, rhodes-tsambika. (thessaloniki has none.) The addresses and official pages for the Athens/Thessaloniki/Heraklion entries are already collected in docs/world/research/doors-worklist.json, and the reasoning for why a sentence beats a coordinate is docs/world/research/08-door-notes.md. Note that several — delphi-parnassus, delphi-hosios-loukas, rhodes-monolithos, rhodes-kameiros — are not in Delphi or Rhodes Town at all and are a day's drive apart; this is not one afternoon's work.

**Done when**

- For each place walked: a `manualVerified: { at, by, note }` block, and where a real door was measured, an `entrance` pair with `source: { kind: 'manual', ... }` — both landing through the seed + `node scripts/world/resolve-coords.mjs <city>`, never by hand-editing data/world/cities/*.ts (docs/world/SESSION-SPLIT.md:78-80).
- A `findIt` sentence for every place walked, in Greek, in the words a child standing there would use — this is the cheap half and is worth more than the coordinate (docs/world/research/08-door-notes.md).
- Athens first (2 places, both indoors, both with official pages), then Heraklion (3), then Delphi and Rhodes as travel allows. Athens done before the Saturday field test.
- After each city: `node scripts/world/resolve-coords.mjs <city>` reports no D and no new problems, `node scripts/world/build-registry.mjs`, `npm run typecheck`, `npx vitest run data/world/world.test.ts`.
- Places that turn out to be genuinely unverifiable stay C and stay on the map — they are removed from trails instead, per §7 ("C = στον χάρτη, όχι mission destination").

**Schema**

```ts
Uses the fields from loc-manual-verified and loc-entrance-pair. Per place, into scripts/world/seeds/<city>.json:
"door": { "lat": …, "lng": …, "source": "manual: walked 2026-09-…, vs" },
"manualVerified": { "at": "2026-09-…", "by": "vs", "note": "…" }
```

**Files.** `scripts/world/seeds/athens.json`, `scripts/world/seeds/heraklion.json`, `scripts/world/seeds/delphi.json`, `scripts/world/seeds/rhodes.json`, `data/world/coords/*.json (regenerated)`, `data/world/cities/*.ts (findIt text)`

**Risk.** Only a human can do this and the human is the bottleneck on eight other things (docs/world/STATUS.md:164-175). If it slips, loc-ab-quest-rule must still ship — its Greek exemption is what allows that, so these two tickets must not be bundled. Second risk: the seeds are content-owned and are being edited by whatever content session is live; check for an open worktree before editing (STATUS.md:16-24 lists two unmerged ones). Third: do not measure a door off Google/Apple/Bing imagery — their terms forbid it, per docs/world/research/06-doors-worklist.md; standing at the door with a phone is fine, and is the point.

### mm-field-test — Walk the three variants in two Athens museums and correct the durations

**P1** · owner **owner (only a human can do it)** · brief decisions rows §24/§43 ("Οι σημερινές πόλεις είναι Silver μέχρι το field test") and §42 Phase C · after `mm-content`, `mm-picker`

20 / 45 / 90 minutes is a promise made to a parent standing at a ticket desk. Only a person walking it with a child can tell whether the Quick route is 20 minutes or 38, and whether it ends on something worth ending on.

**Today.** No museum has been walked with the app. STATUS.md §6 lists field test #0 (one Athens route, owner + one child) as still outstanding and unscheduled; §0α confirms the current cities are Silver.

**Done when**

- Two Athens museums are visited with the app, one variant each per visit, with a stopwatch.
- The recorded real duration per variant is written back into `variants.<v>.minutes` where it differs from the estimate by more than 20%.
- Photography rules and step-free access are confirmed on site against what mm-content recorded from the venue's page, and corrected where the page was wrong or silent.
- Floor and zone labels are checked against the actual signage a child would read.
- One sentence per variant on whether the visit ended on something memorable — the answer that decides whether mm-content's Quick curation was honest.

**Files.** `data/world/cities/athens.ts`

**Risk.** Nobody but the owner can do this, and it gates the credibility of all 22 museums' durations — if the Athens Quick route turns out to be 35 minutes, every other museum's estimate is suspect and mm-content needs a second pass. Schedule it immediately after the first two museums are authored, not after all 22, so the correction is cheap.

### owner-analytics-approval — Owner: decide whether an on-site signal may leave the device at all

**P1** · owner **owner (only a human can do it)** · brief §28, §29, §34, §35

The North Star is «Completed Real-World Missions per Family Trip». Measuring it from telemetry means sending, per stop, the fact that this device completed an on-site mission in this city — and GA4 timestamps every event. That is a coarse location history for a child, which §29 puts on the list that needs product approval by name.

**Today.** GA4 is installed (index.html) and `utils/analytics.ts` wraps `gtag`. No World event is sent today. Vercel Web Analytics is switched off.

**Done when**

- A written decision, recorded in BUSINESS-PLAN.md, that is one of: (a) no on-site signal on the wire, North Star measured from the post-trip survey §35 already specifies; (b) explicit §29 approval for an on-site event, with the retention and the GA4 property named.
- If (b), the decision states what may NOT be sent — at minimum place-level identifiers and any field that groups stops into one outing.

**Files.** `docs/world/BUSINESS-PLAN.md`

**Risk.** Until this is answered, `world-analytics-minimum` cannot be built as drafted, and building it anyway is the single most damaging thing in this backlog.

### pricing-owner-stripe — Owner: create the four test prices in Stripe and resolve the price conflict with BUSINESS-PLAN.md

**P1** · owner **owner (only a human can do it)** · brief §36, decisions row §36

A parent cannot pay until a human has created the products in Stripe under the company account. No engineer can do this step, and the engine ticket cannot finish checkout without the resulting price ids.

**Today.** Stripe is live and has taken exactly one real payment (€4,99, 22/8 — docs/world/STATUS.md:154). But the only catalogue that exists is credit packs, hardcoded server-side at api/stripe/checkout.ts:2 `CREDIT_PACKS` and api/stripe/packs.ts:1. There is no City Adventure, no Greece Pack, no Family Pass and no Founding Families product anywhere. Separately, the numbers conflict: the binding decisions row (brief line 30) says Family Pass €39,99/year and Founding Families €24,99, while docs/world/BUSINESS-PLAN.md:164 still says €29,99/year and €19,99. The decisions table wins; the business plan has not been updated.

**Done when**

- Four products exist in Stripe in EUR under the company account: City Adventure €4,99 one-off, Greece Pack €9,99 one-off, Family Pass €39,99/year recurring, Founding Families €24,99 (first 100 only).
- The four price ids are handed to the engine session by a route that is not this repo (they are configuration, not secrets, but they do not belong in a commit message).
- docs/world/BUSINESS-PLAN.md:164 is corrected to €39,99 / €24,99 so the two documents stop disagreeing, or the owner explicitly re-decides and the brief's decisions table is amended instead.
- The owner states the Founding Families cut-off rule in one sentence: whether 'first 100' is counted by Stripe quantity, by a coupon with max redemptions, or manually — the engine gate cannot be built against an ambiguous rule.
- Confirmed with the accountant (BUSINESS-PLAN.md:418 already lists this) that Stripe is in the company's name and that VAT/OSS handling is settled before any price goes live.
- No product is set live to the public before 1 November 2026.

**Files.** `docs/world/BUSINESS-PLAN.md`

**Risk.** Two documents currently state different prices for the same product. If the engine session reads BUSINESS-PLAN.md instead of the decisions table it will ship €29,99. Whoever does this ticket must fix the document, not just the Stripe dashboard. Second risk: creating a live product in Stripe is visible to customers immediately — keep them inactive until November.


## P2 — later, and deliberately so

The decisions table defers every one of these, most of them until after the first field test. They are written down so nobody re-raises them as urgent, and so the field test knows what it is choosing between.

### age-mode-family — Family 6-99 cooperative mode

**P2** · owner **engine** · brief §15 (Family 6-99 cooperative), §31; deferred by decisions row §30-31 ("Μετά το test") · after `age-mode-presentation`

One phone, the whole family, each child named for a different task — the thing that makes a parent a player instead of a phone holder. Worth building, but not before the field test says what the family actually does with one device.

**Today.** Nothing. No multi-child concept exists anywhere in components/world/** or components/world/useWorldProgress.ts (progress is one flat localStorage object per device, useWorldProgress.ts:81-94, with no notion of who answered). There is no child-profile model in the World module at all.

**Done when**

- DO NOT START until the owner's field test #0 has happened (STATUS.md §6 item 6) and has reported how many children shared the phone.
- Then: names entered locally, never uploaded (§28 — parent account, child profiles without email).
- Missions are addressed by name ("Eleftheria, βρες…"), rotating so no child is skipped.
- Progress and stamps remain one shared passport for the device — splitting per child is a separate, larger decision about the progress model.
- No public profile, no leaderboard with names (§29).

**Schema**

```ts
Deliberately not specified. The shape depends on what the field test shows; writing the schema now is how this ticket becomes wrong work.
```

**Files.** `components/world/World.tsx`, `components/world/useWorldProgress.ts`

**Risk.** The decisions table defers this explicitly, so its only real risk is a session picking it up early because §15 reads urgent. It also touches useWorldProgress.ts, which owns every award decision and the one-shot guards — a naive per-child progress split would multiply or lose XP. Keep it P2 and keep it closed until the owner reports back.

### cms-ui — A CMS with a UI for World content

**P2** · owner **engine** · brief §9 decisions row (“CMS με UI: P2. Η «content team» σήμερα είναι agents με tests ως gate”)

Explicitly deferred. Filed so it is not silently re-scoped into P0 by §9’s “P0 — Content / Quest Engine” heading, which the decisions table overrides.

**Today.** No CMS surface exists. components/AdminDashboard.tsx contains no reference to World (`grep -ni world` returns nothing). api/ has admin endpoints for credits, users, market and health only — nothing for World content. The authoring pipeline is files plus scripts: scripts/world/seeds/*.json → resolve-coords.mjs → data/world/cities/*.ts → build-registry.mjs, with data/world/world.test.ts as the publish gate. That pipeline works and must not be replaced.

**Done when**

- TRIGGER: only after the pilot cities are done and a NON-AGENT author (a human writer, a museum partner under §37) actually needs to add content. Until then this stays closed — a CMS built for agents that already write TypeScript is pure cost.
- Whatever is built writes the same files the pipeline reads and re-runs the same gate; it never becomes a second, divergent source of truth alongside data/world/cities/.
- A save is refused, not warned about, when data/world/world.test.ts would fail — the gate does not get weaker because it grew a UI.
- data/world/registry.ts stays generated (build-registry.mjs:1-22) and is never written by the UI.
- No content path is exposed without going through api/_lib/adminAuth.ts, per the repo’s api rules.

**Files.** —

**Risk.** The real risk is building this at all, early. §6 of the brief says stop adding surface before the machine is right, and §29 forbids a creator marketplace now. A CMS that becomes a second source of truth beside the city modules would break the SESSION-SPLIT guarantee (SESSION-SPLIT.md:56-58) that nobody edits a shared list.

### geo-distance-format-4-langs — Distance in the geofence message is formatted for el/en only, so de/fr/es/it get an English decimal point

**P2** · owner **engine** · brief §8, decisions row §8

A German or French child reading the 'too far' sentence sees '1.3 km' inside an otherwise correct German or French sentence. Those four languages write 1,3.

**Today.** utils/geo.ts:20 — `formatDistance(m: number, lang: 'el' | 'en')`; the comma/point choice is hard-wired to that two-value union at utils/geo.ts:24. components/world/PlaceCard.tsx:636 works around it by coercing all six World languages down: `formatDistance(distance, lang === 'el' ? 'el' : 'en')`. Metres are unaffected ('300 m' is right in all six); only the sub-kilometre decimal separator and, for el, the 'χλμ.' suffix are wrong for de/fr/es/it.

**Done when**

- `formatDistance` accepts the six World languages and uses a comma decimal separator for el, de, fr, es and it, and a point for en.
- The unit label stays 'm' / 'km' for en/de/fr/es/it and 'μ.' / 'χλμ.' for el, as today.
- components/world/PlaceCard.tsx:636 drops the `lang === 'el' ? 'el' : 'en'` coercion and passes `lang` straight through.
- The existing Explorer behaviour is unchanged: utils/geoDirection.test.ts:43 (`formatDistance(763, 'el') === '760 μ.'`) and every call in components/Explore.tsx still pass — the union is widened, not changed.
- Rounding stays as-is (ten-metre steps under a kilometre, utils/geo.ts:21-22) — that comment explains why and it is correct.

**Schema**

```ts
utils/geo.ts:20 — widen to `formatDistance(m: number, lang: 'el' | 'en' | 'de' | 'fr' | 'es' | 'it'): string`. Reuse the World language union if one is already exported from data/world/types.ts rather than retyping it.
```

**Files.** `utils/geo.ts`, `components/world/PlaceCard.tsx`, `utils/geoDirection.test.ts`

**Risk.** Shared with the live Explorer (components/Explore.tsx:32, and Explore is el/en only), so widening the union is backward compatible but the file is one two sessions may both want — same ownership caveat as geo-low-accuracy-copy. Keep both tickets in one branch if possible; they touch adjacent lines of utils/geo.ts and components/world/PlaceCard.tsx and will conflict if split across sessions.

### offline-cache-gaps — Close the three runtime-cache gaps that stop World working offline after first use

**P2** · owner **engine** · brief §25, decisions row §25 ("P2. Tiles και ήχος ήδη cache-άρονται μετά την πρώτη χρήση")

The decisions row is right about tiles and audio but three specific assets still refetch on the street, so read-along silently stops highlighting words and city maps go blank — the parts a child notices.

**Today.** Three precise misses, all in the runtimeCaching block at vite.config.ts:70-142. (1) **Word timings are not cached.** The rule at vite.config.ts:124 is `urlPattern: /\/audio\/(ebooks|academy)\/.+\.json$/` — it does not include `world`, but World requests them from `/audio/world/...json` (data/world/narration.ts:163, fetched at components/world/StoryNarration.tsx:86). 136 such files exist. The .m4a beside them IS cached, so offline the voice plays and the read-along highlight never lights up — StoryNarration.tsx:94 swallows the failure silently by design. (2) **City map SVGs are not cached.** All 10 files under public/images/world/maps are .svg; precache excludes them twice (globIgnores `**/images/**` and `**/*.svg`, vite.config.ts:63-67) and the runtime image rule at vite.config.ts:86 matches only `(jpg|webp|png)`. (3) **The audio cache is already too small.** `maxEntries: 100` at vite.config.ts:107 against 136 world clips today and growing with every city — LRU eviction means a family that listens to Paris loses Athens. App code and city text are fine: `globPatterns: ['**/*.{js,css,html}']` at vite.config.ts:61 precaches the compiled city modules.

**Done when**

- World word timings are runtime-cached — the narration-timings rule covers `/audio/world/` as well as ebooks and academy — and read-along highlights words with the network off after one online play.
- City map SVGs are cached on first view, by extending the image rule to `svg` or adding a rule for `/images/world/`; the map renders offline.
- The audio cache's `maxEntries` is raised above the real clip count with headroom for the planned cities, or split so World narration has its own cache and cannot be evicted by ebook narration.
- Verified by hand once: load a city online, go offline in devtools, reopen it — map, text, audio and word highlighting all still work.
- Cache names are changed only where the cached bytes would otherwise be stale; the comment at vite.config.ts:103-106 explains why a rename is sometimes required and must be honoured.

**Files.** `vite.config.ts`

**Risk.** P2 by the decisions table and it does not block the pilot — do not let it pre-empt Gold work. But it is roughly a three-line change and partially contradicts the assumption the table is resting on, so it is cheap to close early. vite.config.ts is shared by every session and both the PWA and vitest configs live in it; STATUS.md:62-64 warns that `registerType: 'prompt'` means users keep the old service worker until they accept the update, so a cache change reaches the existing 16 users only after they tap Update.

### offline-download-adventure — "Download this adventure" — deliberate offline download for one city

**P2** · owner **engine** · brief §25 ("Download Porto Adventure: tiles, quests, audio, εικόνες, routes, missions"), decisions row §25 · after `offline-cache-gaps`

Cache-after-first-use only helps a family that already browsed the city on WiFi. A family landing in Rome on an expensive roaming plan needs to have pressed a button at the hotel the night before.

**Today.** Nothing. There is no download UI, no precache-on-demand call and no per-city cache anywhere in components/world/**. What exists is only the passive layer: the runtimeCaching rules at vite.config.ts:70-142, which fill as a child browses and are invisible to the parent. §36 also lists offline as a Family Pass benefit (brief line 270), so this feature and pricing-engine-gate eventually meet.

**Done when**

- A city screen offers one clear action that fetches that city's narration clips, map SVG, images and the OSM tiles for its bounding box at the zoom levels the map uses, into a named cache.
- Progress is visible and the action is cancellable; a failed download leaves no half-state that reads as complete.
- The size is stated before the download starts — a parent on a metered connection must be able to decline knowingly.
- A downloaded city is visibly marked as available offline, and can be removed again to reclaim space.
- Tile fetching stays within OpenStreetMap's tile usage policy; a bulk prefetch of a whole city at every zoom level is not acceptable and the chosen bounds/zoom range is documented in a comment.
- Works with `registerType: 'prompt'` — the download must not depend on a service-worker update the user has not accepted yet.

**Files.** `components/world/CityView.tsx`, `components/world/useWorldOffline.ts (new)`, `vite.config.ts`

**Risk.** P2 and explicitly non-blocking — this is the largest ticket in the cluster and the least urgent; do not start it before the field test. Real external risk: OSM's tile policy forbids bulk downloading, and getting this wrong can have wisebot.gr's tile access blocked, which breaks the live map for everyone. Settle the bounds and zoom range before writing the fetch loop. components/world/CityView.tsx is a Session A file (docs/world/SESSION-SPLIT.md:30-40).

### quest-authoring-invariants — The remaining automatic question-quality checks from the quest engine spec

**P2** · owner **engine** · brief §10, §20 decisions row; docs/world/research/07-quest-engine.md «Οι έλεγχοι που πρέπει να είναι test, όχι καλή πρόθεση»

These are the mistakes every question system produces, and they are all catchable by a machine. The three cheapest ones are already in place and have already paid — 112 of 148 Athens questions were rewritten because the correct answer was the longest.

**Today.** Partially exists. data/world/world.test.ts already covers check 1 (the longest answer is not the right answer, :228), four distinct answers per language (:209), el+en everywhere (:169), and no mission referencing a missing id for trails (:374). Not covered: check 2 (the correct answer does not always land in the same position after shuffling), check 3 (no word of the answer appears in the question), check 4 (the four answers are the same type — four years or four names, never three names and a number), and checks 5–6 (find/count), which only become meaningful once those kinds exist.

**Done when**

- Checks 2, 3 and 4 from research/07 land in data/world/world.test.ts and run against all 9 existing city files.
- Any existing question the new checks fail is listed for the content session to rewrite — the checks are not weakened to make the suite green.
- Checks 5 and 6 (a `find` has exactly one correct hotspot and no overlapping wrong ones; every `count` carries a tolerance) land in the same pass as the kinds they guard, not before.
- Check 9 — every wrong answer is FALSE for this specific place, not merely true of somewhere else — is written into the content authoring rules (docs/world/SESSION-SPLIT.md “Rules Session B must follow”) as a human rule, and is explicitly NOT attempted as a test: research/07 explains why no machine check catches it.

**Files.** `data/world/world.test.ts`, `docs/world/SESSION-SPLIT.md`

**Risk.** Check 3 (no answer word inside the question) will produce false positives in Greek, where inflection means the same stem legitimately appears in both — it needs stemming or a declared allowlist, or the content session will start writing around the linter instead of writing well. Overlaps the §20 auto-publish cluster if another session is ticketing the publish gate: coordinate so world.test.ts gets one set of additions, not two conflicting ones.

### quest-final-challenge — Final challenge at the end of a route and a museum

**P2** · owner **engine** · brief §10 (FINAL BOSS) and its decisions row; §12 L2 city stamp; docs/world/research/07-quest-engine.md «Ανταμοιβή» · after `quest-mission-union`

A route currently ends by simply running out of places. The five-question finale is what turns a trail into an adventure with an ending, and it is what research/07 uses to define “Mastered”, a level the passport otherwise has no way to award.

**Today.** Nothing — `grep -rni 'final challenge|finalQuiz|boss' components/world data/world/types.ts` returns no match. Trail completion today pays flat XP and a ceremony: components/world/useWorldProgress.ts:332-345, SealCeremony.tsx:362. research/07 specifies it and notes it is the one mission that CAN be assembled automatically, from questions that already exist.

**Done when**

- TRIGGER: after the field test, with the §10 deferral lifted. Cheap enough to ship in the same pass as quest-three-new-kinds.
- A final challenge composes five questions already authored for that route’s places or that museum’s exhibits — no new writing is required from the content session to stand one up.
- It is never gated on a perfect score: research/07 is explicit that Mastered means having done everything, not having got everything right. A child who needed two attempts still earns it.
- It pays once, and completing it is what distinguishes “Explored” from “Mastered” in the passport.
- No timer (research/07 «Τι δεν κάνει η μηχανή»): a child who thinks slowly is not playing worse.
- An invariant asserts every referenced question id exists and that a final challenge never reuses the same question twice.

**Schema**

```ts
// The 'final' arm of Mission in quest-mission-union:
//   { kind: 'final'; missionIds: MissionId[] }  // five, all from this route or museum
// Trail gains, additively:
//   finalMissionId?: MissionId;
```

**Files.** `data/world/types.ts`, `components/world/CityView.tsx`, `components/world/MuseumView.tsx`, `components/world/useWorldProgress.ts`, `data/world/world.test.ts`

**Risk.** “Mastered” is a new passport level and the passport is another session’s surface (§12–13, PassportStamp.tsx / StampBook.tsx) — agree the level names with whoever owns the passport cluster before adding a third tier, or two sessions will invent two vocabularies. Second risk: recycling a question a child answered ten minutes ago reads as lazy; the composer should prefer questions from earlier stops on the route.

### quest-mission-union — Mission as a discriminated union, so a new mission kind is data and not a new component

**P2** · owner **engine** · brief §9, §10, decisions rows §9 and §10; docs/world/research/07-quest-engine.md · after `fieldtest-mission-type-capture`

This is the difference between “a new city is a file” and “a new city is a software project”. Today the four shipped kinds are four hardcoded fields with four bespoke renderers, so the three kinds the children ask for on Saturday each cost a component.

**Today.** No Mission type exists anywhere — `grep -rn mission data/world components/world` returns only prose. The four kinds are hardcoded shapes: `Place.question` (types.ts:270), `Exhibit.question` (:208), `Riddle` (:216-225), and the geofence gate in PlaceCard.tsx:395-432. Each has its own renderer (PlaceCard, MuseumView, RiddleGame) and its own progress bucket (useWorldProgress.ts:92-95). The full ten-kind spec is already written and unimplemented at docs/world/research/07-quest-engine.md:25-45.

**Done when**

- TRIGGER: do not start this until fieldtest-mission-type-capture has written three named kinds into STATUS.md. Building the union before that is building for kinds nobody asked for.
- `Mission` is added to data/world/types.ts as a discriminated union on `kind`, additively — `Place.question`, `Exhibit.question` and `Riddle` keep working unchanged and all 9 city files compile with no edit (`npm run typecheck` clean, `npx vitest run data/world/world.test.ts` still green at its current count).
- No mission kind is ever verified by free text: every answer is an id, an index or a number with tolerance (types.ts:18-20 states the rule; research/07 «Ο κανόνας που κρατά τη μηχανή ζωντανή»).
- A mission refers to a place, exhibit or city BY ID and never embeds content, so the same renderer works in Athens and in Tokyo.
- XP is paid once per mission id, ever. A double tap and a StrictMode double-invoke both pay once — follow the fired-once ref pattern already at PlaceCard.tsx:434-451.
- Every kind renders in el and en at minimum, through `pick()` (types.ts:45-48), never by indexing `text[lang]`.
- One renderer per kind, registered by `kind`, so adding kind eleven touches a registry entry and a component and nothing else.

**Schema**

```ts
// data/world/types.ts — additive; the existing fields stay.
export type MissionId = string; // 'athens-acropolis-m1'

interface MissionBase { id: MissionId; prompt: LocText; xp: number; }

export type Mission =
  | (MissionBase & { kind: 'question' | 'observe'; question: Question })
  | (MissionBase & { kind: 'riddle'; hint: LocText; answerExhibitId: ExhibitId; difficulty: 1 | 2 | 3 })
  | (MissionBase & { kind: 'count'; answer: number; tolerance: number })
  | (MissionBase & { kind: 'find'; image: PlaceImage; hotspots: Hotspot[]; answerHotspotId: string })
  | (MissionBase & { kind: 'order'; items: LocText[] /* correct order as authored */ })
  | (MissionBase & { kind: 'photo'; sticker: string /* no xp: see photo ticket */ })
  | (MissionBase & { kind: 'final'; missionIds: MissionId[] });

/** Fractions of the image, 0–1, so the hotspot survives any render size. */
export interface Hotspot { id: string; x: number; y: number; r: number; }

// on Place, additive and optional:
//   missions?: Mission[];
// on Museum, additive and optional:
//   missions?: Mission[];
```

**Files.** `data/world/types.ts`, `components/world/PlaceCard.tsx`, `components/world/MuseumView.tsx`, `components/world/RiddleGame.tsx`, `components/world/useWorldProgress.ts`, `data/world/world.test.ts`

**Risk.** data/world/types.ts is declared frozen (types.ts:6-8: adding a field is fine, changing or removing one is a decision to raise) and is the contract every content session compiles against — this must be purely additive or nine city files and every in-flight worktree break at once. STATUS.md:16-24 records two live worktrees (Barcelona, Istanbul) with unmerged content; land this after they merge, not during. Third risk: implementing more than the three named kinds re-opens exactly the deferral the decisions table closed.

### quest-photo-on-device — Photo challenge — on device, no upload, sticker instead of XP

**P2** · owner **engine** · brief §10 decisions row (“Photo challenge: μόνο on-device, ποτέ upload”); §28 child privacy; §29 · after `quest-mission-union`, `fieldtest-mission-type-capture`

A photo mission is the one kind a child brings home and shows someone. It is also the one kind that can quietly become a privacy incident, which is why the owner pinned the rule to it before it was built.

**Today.** Nothing. `grep -rni 'camera|getUserMedia|capture=' components/world` returns no match. The rule exists in the decisions row and in docs/world/research/07-quest-engine.md «Τα δύο είδη που δεν επαληθεύονται».

**Changed after review.** CONFLICTS with `privacy-regression-test`, which as drafted fails any file under `components/world/**` that references `FileReader` or `<input type="file">` — precisely what library selection needs. One of the two must move first: either the guard gains a single named, reviewed module on its allowlist, or this stays closed. Also: the draft pays «a passport sticker», which is a third reward class and spec 02 allows only XP and stamps. Make it a stamp.

**Done when**

- TRIGGER: only build this if PHOTO is one of the three kinds named by the field test. Otherwise this ticket stays closed.
- No photo, thumbnail, EXIF or derived hash ever reaches the network. No api/ endpoint is added, no Supabase bucket is written, nothing is queued for later upload. Verified by reading the diff and by an offline run: airplane mode, take the photo, nothing is retried on reconnect.
- The mission pays 0 XP — an unverifiable mission that paid XP is free points for one tap — and pays a passport sticker instead, which is rendered at least as prominently as an XP award so the child does not read it as a punishment (research/07 flags this as the owner’s call).
- Library selection is offered, so the mission is completable without ever granting camera permission.
- Nothing about a photo is stored in `wb_world_progress` beyond the boolean that the mission was done (components/world/useWorldProgress.ts:81-96) — no path, no timestamp beyond the existing date, no coordinates.
- Copy in el and en states plainly, where the child and the parent can read it, that the photo stays on the phone.

**Schema**

```ts
// In WorldProgress (components/world/useWorldProgress.ts:81)
//   photos: Record<MissionId, string>;  // ISO date only. Never a path, never a blob.
// VERSION at :41 bumps 2 → 3 when this lands; read() at :121 already resets on mismatch.
```

**Files.** `data/world/types.ts`, `components/world/`, `components/world/useWorldProgress.ts`, `components/world/StampBook.tsx`

**Risk.** Bumping WorldProgress VERSION wipes every existing child’s stamps (read() at useWorldProgress.ts:117-119 resets rather than guesses). With 16 users that is survivable today and will not be later — either add a migration or land the version bump together with the cloud-sync work STATUS.md:38 already lists. Second risk: a future analytics or crash-reporting integration could pick up an image path by accident; the acceptance test must be re-run whenever Sentry config changes.

### quest-three-new-kinds — Implement the three mission kinds the field test named

**P2** · owner **engine** · brief §10, decisions row §10 (“Τα υπόλοιπα μετά το πρώτο field test, όταν ξέρουμε ποια 3 ζητούν τα παιδιά”) · after `quest-mission-union`, `fieldtest-mission-type-capture`

Four kinds is enough for one city and thin by the third. The three the children actually ask for are worth more than the ten the brief lists, which is precisely why the owner deferred the choice.

**Today.** Four kinds ship (see the EXISTS list). The remaining six of §10 — OBSERVE, VISUAL MATCH, AUDIO STORY, TRUE/FALSE, ORDER, FIND THE DETAIL — have no type, no renderer, no data and no test. research/07 pre-specifies their verification and renderers at docs/world/research/07-quest-engine.md:33-45.

**Done when**

- TRIGGER: three named kinds written into STATUS.md by fieldtest-mission-type-capture, and quest-mission-union merged. Exactly three — a fourth needs a new owner decision, not a judgement call.
- Each of the three renders from data alone: adding one to a city file requires no component edit.
- New invariants land in data/world/world.test.ts alongside them, per research/07 «Οι έλεγχοι που πρέπει να είναι test»: a `find` has exactly one correct hotspot and the wrong ones do not overlap; a `count` always carries a tolerance; no mission references an id that does not exist; every mission has el and en.
- Athens gets at least one mission of each new kind so the pilot city exercises them; no other city is required to.
- XP per kind is added to WORLD_XP (components/world/useWorldProgress.ts:52-69) and checked against the data/makerLevels.ts Explorer tier at 300 XP, per the comment at :44-50 — a tier may be made easier to reach, never harder.

**Schema**

```ts
// Values added to WORLD_XP in components/world/useWorldProgress.ts, e.g.
//   observe: 10,   // same weight as a place question: it is one
//   count: 10,
//   find: 10,
//   photo: 0,      // sticker only — see quest-photo-on-device
```

**Files.** `data/world/types.ts`, `components/world/`, `components/world/useWorldProgress.ts`, `data/world/world.test.ts`, `data/world/cities/athens.ts`

**Risk.** research/07 «Τι εξαρτάται από την ανοιχτή απόφαση» warns that OBSERVE, COUNT, PHOTO and half of FIND only mean anything if the child is standing in front of the object — if any of the three chosen kinds is one of those, the content for them must be written on-site-first, and rewriting ninety missions across three cities later is expensive. data/world/cities/athens.ts is content-owned; the engine session must not write the missions itself.

### route-variant-generation — Generate the named route variants from the three fields

**P2** · owner **engine** · brief §17, §26 and their decisions rows; docs/world/research/05-routes.md:30-46 · after `route-variant-place-fields`

Twelve named routes hand-authored for forty-five cities is five hundred curated lists. Generated from three fields it is one function, and the human effort goes back into the one route that genuinely needs a person — “first time in the city”.

**Today.** 35 hand-authored trails, wired end to end (see the EXISTS list). Three of them are rainy-day and three are two-hour, written by hand per city. There is no generator: data/world/types.ts:281-289 Trail is a literal `placeIds: PlaceId[]` and scripts/world/ contains only the coordinate, registry, narration and SEO chains — no route builder.

**Done when**

- TRIGGER: route-variant-place-fields merged AND Athens populated with all three fields.
- 60-Minute Challenge, Rainy Day and Free Adventure are derived for any city whose places carry the three fields — a city gets them by having data, not by an author writing a list.
- A generated route is never worse than the hand-authored one it replaces: for Athens, Rome, London and Amsterdam the generated rainy-day and two-hour routes are compared side by side with the existing hand-written trails and the owner picks. Hand-authored trails are kept, not deleted, wherever they win.
- A generated route respects walking distance between consecutive stops, using the existing coordinates — a 60-minute route that spends 40 of them walking is not a 60-minute route.
- Generated routes carry the same Trail shape and therefore the same UI, XP and ceremony as authored ones (CityView.tsx:317-345, useWorldProgress.ts:332-345); nothing new is needed downstream.
- A city with fewer than three qualifying places for a variant does not show that variant at all, rather than showing a one-stop route.

**Schema**

```ts
// No new content schema. A generator produces Trail values (types.ts:281-289)
// from Place.setting / Place.admission / Place.typicalMinutes plus the existing
// Place.location lat/lng. Trail ids are namespaced, e.g. 'athens-rainy-day:generated',
// so a generated route can never collide with an authored one.
```

**Files.** `data/world/types.ts`, `components/world/CityView.tsx`, `scripts/world/`, `data/world/world.test.ts`

**Risk.** HONEST GAP IN THE DECISIONS ROW: the row names four variants — 60 λεπτά, βροχή, δωρεάν, καρότσι — but the three fields cover only the first three. STROLLER FRIENDLY (and §17’s Accessible Route) needs a step-free / accessibility signal that none of the three provides, and it cannot be taken from OpenStreetMap without pulling ODbL share-alike into our data (types.ts:112-119, SESSION-SPLIT.md:14-18). Raise this with the owner rather than inventing a fourth field: either stroller waits for a manually verified accessibility field, or it drops from the named list. Second risk: a generated route is only as honest as `typicalMinutes`, which is a guess until somebody walks it.

### route-variant-place-fields — The three Place fields the named route variants need

**P2** · owner **engine** · brief §17 and its decisions row (“Οι ονομαστικές παραλλαγές (60 λεπτά, βροχή, δωρεάν, καρότσι) με 3 πεδία στο Place, μετά το test”); §26; docs/world/research/05-routes.md:63-70 · after `fieldtest-mission-type-capture`

Without these three facts no route can know whether it fits in two hours, whether it survives rain, or whether it costs a family anything. They are also what §26’s «Έχω 2 ώρες» button needs, so one small additive change unlocks two features.

**Today.** None of the three exists on Place — data/world/types.ts:249-276 has id, cityId, name, tagline, story, facts, emoji, image, category, difficulty, location, question, museum, links and nothing else. The variants exist today only as hand-authored trails, which is why the names already appear in the data: amsterdam-rainy-day, rome-rainy-day, london-rainy-day, amsterdam-two-hours, london-two-hours-by-the-river, rome-two-hours-of-hands. The research names the three fields at docs/world/research/05-routes.md:63-70.

**Changed after review.** Reduced to its one genuinely new field, `setting: indoor | outdoor`. The other two the research asks for — ticketed/free and typical minutes — are already in `world-family-info-schema`.

**Done when**

- TRIGGER: after field test #0, per the §17 decisions row. Do not add fields to the frozen types file before then.
- All three are OPTIONAL, so all 9 existing city files compile untouched: `npm run typecheck` clean and `npx vitest run data/world/world.test.ts` green with no content edit.
- An invariant in data/world/world.test.ts enforces all-or-nothing per city: once any place in a city declares one of the three, every place in that city declares all three. A half-populated city produces routes that silently omit places.
- `typicalMinutes` is validated to a sane band (5–180) and is child-paced, not adult-paced.
- A place whose `category` is 'museum' (types.ts:265) may not declare `setting: 'outdoor'`.
- 'donation' is a distinct value from 'free': a suggested donation is not a free adventure and must not land in the free route.
- Values are filled for Athens first — the pilot city with daily QA — and for the other cities as their content sessions reach them.

**Schema**

```ts
// data/world/types.ts, added to interface Place (all optional — additive only)

/** Indoor is the rainy-day route. 'mixed' = a courtyard plus halls. */
setting?: 'indoor' | 'outdoor' | 'mixed';

/** What a family pays at the door. 'donation' is deliberately not 'free'. */
admission?: 'free' | 'ticket' | 'donation';

/** Typical child-paced visit in minutes, 5–180. The time budget for a route. */
typicalMinutes?: number;
```

**Files.** `data/world/types.ts`, `data/world/world.test.ts`, `data/world/cities/athens.ts`

**Risk.** Classic two-session collision: types.ts is engine-owned and frozen (types.ts:6-8, SESSION-SPLIT.md:33), while the VALUES belong in content-owned data/world/cities/*.ts (SESSION-SPLIT.md:49-54). Land the type in one commit and let content sessions fill values in theirs — never both in one branch. Also: admission and opening facts go stale; the decisions row for §7 already lists `openingHoursSource` as P1, and `admission` needs the same provenance discipline or it becomes an unsourced claim (§20, §29).

### seo-nearby-and-related — Related missions and nearby POIs on World place pages

**P2** · owner **engine** · brief §39 ("related missions, nearby POIs")

A parent who lands on one place from search sees no way to the next one, so the page is a dead end for both the crawler and the family.

**Today.** Partially. City pages link out to every place (scripts/world/generate-world-seo.mjs:199-204) and carry an ItemList (data/world/seo.ts:210-215). Place pages have breadcrumbs upward only (generate-world-seo.mjs:242) and no sibling links at all; placeMeta's JSON-LD (seo.ts:246-253) has containedInPlace but no related items. So the graph is one-way: city -> place, never place -> place.

**Done when**

- placePage() renders a `<h2>Κοντά</h2>` / `<h2>Nearby</h2>` list of the 3-5 nearest places in the same city, computed with the existing `distanceM` from utils/geo.ts over the verified coordinates, with the walking distance shown.
- If the place is on a trail, the page lists that trail's other stops as "related missions", linked.
- The JSON-LD gains a `ItemList` of those nearby places on the place page.
- Deterministic output: the same registry produces byte-identical pages across two runs (no Math.random, no Date beyond the sitemap's lastmod), so a diff of dist/world is reviewable.
- No coordinate is exposed that is not already in the page's own GeoCoordinates block (seo.ts:251) — these are our published place coordinates, not anybody's position.

**Schema**

```ts
data/world/seo.ts:
  export function nearbyPlaces(module: CityModule, place: Place, n = 4): { place: Place; metres: number }[]
Appended to PageMeta.jsonLd on place pages:
  { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Nearby', itemListElement: [...] }
```

**Files.** `data/world/seo.ts`, `scripts/world/generate-world-seo.mjs`

**Risk.** Third session in a row to touch data/world/seo.ts and scripts/world/generate-world-seo.mjs — run it after seo-faq-block and world-family-info-schema, never beside them. Low product risk: it changes only prerendered output, not the app. Watch the page size — 136 place pages each gaining a nearby list is fine, but do not let the block repeat the neighbours' full taglines in both languages or the noscript body doubles.

### vercel-web-analytics — Decide Vercel Web Analytics: switch on and inject, or drop it

**P2** · owner **owner (only a human can do it)** · brief §34 (analytics); STATUS.md §5 and §6.3

It is listed as an owner action in two documents and nobody has resolved it. GA4 already covers everything §34 names, so this is a yes/no, not a blocker.

**Today.** Not installed. `@vercel/analytics` does not appear in package.json (only @sentry/react at :23) and there is no `inject()` or `<Analytics />` anywhere in the tree. STATUS.md:155 and :169-170 say the dashboard switch is off and the owner must approve the package. Verified: both statements are true.

**Done when**

- Owner decides: either (a) turn Web Analytics on in the Vercel dashboard for project `wisebot-claude-ok` (team itdev-gr) AND approve a one-line engine change adding `@vercel/analytics` with `inject()` — the dashboard switch alone does not count SPA route changes, which is the whole point for /world/** — or (b) record in STATUS.md §5 that GA4 is the only analytics and close this.
- If (a): the engine change is `npm i @vercel/analytics` plus `inject()` in index.tsx, gated behind the SAME cookie consent as GA4 (components/CookieConsent.tsx / window.enableAnalytics at index.html:10). Shipping it unconditionally would put a second tracker on the page before consent and break the GDPR position the app currently holds.
- If (a): confirm the Vercel plan is Pro (STATUS.md:170 asks the same question).

**Files.** `package.json`, `index.tsx`, `docs/world/STATUS.md`

**Risk.** The trap is shipping `inject()` outside the consent gate: index.html:5-20 and utils/analytics.ts:1-9 encode a careful position that nothing tracks before the parent accepts, and a second vendor loaded at boot silently voids it for every page including the children's. If the answer is (b), say so in STATUS.md so this does not get re-raised a fourth time.

---

## 5. Everything that was checked and found already built

Eighty items. A ticket was not written for any of them.

| Cluster | Already true | Evidence |
| --- | --- | --- |
| GPS and geofence | 60 m geofence radius for a normal place, 120 m for an area — the decisions row is CORRECT, no discrepancy | components/world/PlaceCard.tsx:405 — `const radiusM = place.location.anchor === 'area' ? 120 : 60;`. The anchor union is data/world/types.ts:120 (`'entrance' / 'centroid' / 'viewpoint' / 'area'`); across data/world/cities/*.ts the live distribution is 38 `area`, 93 `centroid`, 5 `viewpoint`, 0 `entrance`, so every non-area place resolves to exactly 60 m. |
| GPS and geofence | GPS accuracy forgiven up to 40 m on top of the radius — the decisions row is CORRECT, no discrepancy | utils/geo.ts:32-33 — `isWithin(here, accuracyM, spot, radiusM)` returns `distanceM(here, spot) - Math.min(Math.max(accuracyM, 0), 40) <= radiusM`. The clamp is both-sided (negative accuracy floored at 0, anything above 40 capped at 40). Documented at utils/geo.ts:28-31. Called from components/world/PlaceCard.tsx:419. |
| GPS and geofence | The 40 m tolerance is already covered by a test | data/explore.test.ts:86-92 — 'forgives up to 40 m of GPS accuracy on top of the spot radius'; asserts `isWithin(near, 5, spot, 40)` false, `isWithin(near, 30, spot, 40)` true, and `isWithin(far, 500, spot, 40)` false because forgiveness is capped. |
| GPS and geofence | GPS is never used inside a museum | By absence, and verified two ways: `grep -rn "utils/geo" components/` returns exactly two importers — components/Explore.tsx:32 and components/world/PlaceCard.tsx:38. components/world/MuseumView.tsx and components/world/RiddleGame.tsx contain no geo import, no `locate`, no `navigator.geolocation`. Museum entry is a plain route push from PlaceCard (components/world/World.tsx:596, `navigate(`${cityUrl}/${place.id}/in`)`) with no location check. |
| GPS and geofence | The stamp/question gate itself (opens only on site, stays open once stamped) | components/world/PlaceCard.tsx:406 `const onSite = Boolean(stamp) // geo === 'here';`, the gate block at 621-641, and the locate handler at 408-420. |
| GPS and geofence | The position never leaves the device | utils/geo.ts:1-5 header note; components/world/PlaceCard.tsx:394-401 comment; in `locate()` (408-420) the Fix is compared in memory and only the scalar `m` is kept in state. PlaceCard.tsx contains no fetch, no supabase call and no analytics call (grep for track/analytics/fetch/supabase returns only CSS `tracking-*` class names). |
| GPS and geofence | Six-language copy already exists for every other geofence state (idle / locating / here / far / permission denied / position unavailable) | components/world/PlaceCard.tsx:237-292 — `imHere` (237), `locating` (245), `hereOk` (253), `tooFar` (261, parameterised), `geoDenied` (269), `geoUnavailable` (277), `stampOnSite` (285), each with el/en/de/fr/es/it. Rendered at PlaceCard.tsx:630-638. |
| Passport and rewards | L1 — Country arrival stamp, awarded once per country, with a ceremony | Award: /Users/vasilisskevis/Projects/wisebot/components/world/useWorldProgress.ts:242-255 (`enterCountry`; returns null if `current.entries[country.id]` is already set, writes `entries[id] = today()`, pays `WORLD_XP.enterCountry` = 10 via action 'WORLD_ENTER_COUNTRY'). Trigger: /Users/vasilisskevis/Projects/wisebot/components/world/World.tsx:429-458 (`CountryEntry` watches the URL, not one screen, so a deep link or refresh still inks the stamp; effect is safe because the hook decides from a ref). Ceremony: /Users/vasilisskevis/Projects/wisebot/components/world/World.tsx:451-457 → `StampCeremony` at /Users/vasilisskevis/Projects/wisebot/components/world/PassportStamp.tsx:837-862, drawing `PassportStamp` (PassportStamp.tsx:422-437) in the country's own ink (data/world/types.ts:325-338). Shown in the book: components/world/StampBook.tsx:276-312, 401-418. |
| Passport and rewards | L2 — City stamp (seal), awarded when every place of the city is stamped | Award: /Users/vasilisskevis/Projects/wisebot/components/world/useWorldProgress.ts:278-285 — `cityPlaceIds.length > 0 && cityPlaceIds.every((id) => places[id])`, pushes to `citiesDone`, adds `WORLD_XP.city` = 50, sets `award.citySealed`. Place stamp itself: useWorldProgress.ts:257-299 (`visitPlace`, refuses if `current.places[place.id]`, 10 XP + 10 more if correct). Trigger: /Users/vasilisskevis/Projects/wisebot/components/world/World.tsx:529-563 (`handleComplete`), ceremony at World.tsx:601-610 → /Users/vasilisskevis/Projects/wisebot/components/world/SealCeremony.tsx:231-260 with the drawn rosette `CitySeal` (SealCeremony.tsx:127-152). Trail bonus (+30) is wired in the same handler: World.tsx:544-550, useWorldProgress.ts:332-347. |
| Passport and rewards | L4 — Country Master seal, awarded when every city of the country is sealed | /Users/vasilisskevis/Projects/wisebot/components/world/useWorldProgress.ts:286-291 — nested inside the city-complete branch, `countryCityIds.every((id) => citiesDone.includes(id))`, pushes to `countriesDone`, adds `WORLD_XP.country` = 100, sets `award.countrySealed`. City list passed in from World.tsx:514-517. Two-page ceremony (city page then country page) at SealCeremony.tsx:258-260, 313-314. Rendered as a SEALED badge on the country's passport page: StampBook.tsx:314-325, 365-369. |
| Passport and rewards | The passport screen itself (route, stamp book, blank pages, 3 totals) | Route `/world/passport` at /Users/vasilisskevis/Projects/wisebot/components/world/World.tsx:690, page component World.tsx:616-642, screen /Users/vasilisskevis/Projects/wisebot/components/world/StampBook.tsx (588 lines). Cover already shows three of brief §12's counters — countries entered (StampBook.tsx:478-482), cities sealed (483-487), places stamped (488-492) — plus un-entered countries as dotted blank pages (560-583). |
| Passport and rewards | Reward storage, idempotency and the no-credits/no-badges rule from spec 02 | One key, one versioned object: /Users/vasilisskevis/Projects/wisebot/components/world/useWorldProgress.ts:41-42 (`wb_world_progress`, VERSION 2), read/write both wrapped (121-149), award decisions read `ref.current` and write in the same synchronous step (218-230). XP leaves only through `earnXp(n, 'WORLD_…')` (useWorldProgress.ts:229); `earnXp` is a free-form `(amount, action?)` in context/EconomyContext.tsx:87,576 — no `ActionType`, no `trackAction`, no badge, no MISSION_POOL edit anywhere in components/world/**. |
| Passport and rewards | The Maker Passport row for World (spec 02's `useWorldSummary()` equivalent) | /Users/vasilisskevis/Projects/wisebot/components/world/useWorldProgress.ts:383-396 (`readWorldSummary`, read-only, deliberately not the hook) consumed at /Users/vasilisskevis/Projects/wisebot/components/MakerPassport.tsx:19,65 and labelled at MakerPassport.tsx:82,100 (Χώρες / Μέρη / Σφραγίδες). |
| Passport and rewards | A museum's "everything done" state is already COMPUTED and shown on screen | /Users/vasilisskevis/Projects/wisebot/components/world/MuseumView.tsx:518-523 — `everythingDone = allExhibits.length > 0 && seenCount === allExhibits.length && solvedCount === riddles.length`, rendered as a green line at MuseumView.tsx:634-638. It is computed per render and never persisted, never stamped, never counted — which is exactly the L3 gap, not a reason to rebuild the computation. |
| Passport and rewards | Privacy: no location history is stored anywhere, so the geofence is already §28-compliant | /Users/vasilisskevis/Projects/wisebot/components/world/PlaceCard.tsx:400 ("The fix never leaves the device"), 408-419 — `locateOnce()` once per button press, `distanceM(fix, place.location)`, only the metre number kept in component state; `utils/geo.ts:10,44,53` exposes `distanceM`/`locateOnce`/`watchPosition` but nothing in components/world/** persists a fix. Nothing writes coordinates into `wb_world_progress` (useWorldProgress.ts:81-105). |
| SEO and analytics | /world URLs are prerendered as static HTML and wired into the Vercel build (§39 "indexable URL per entity") | /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/vercel.json:4 (`buildCommand`: `npx vite build && node scripts/generate-seo-pages.mjs && node scripts/world/generate-world-seo.mjs`); generator at /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/scripts/world/generate-world-seo.mjs:283-320 builds one dir+index.html per page |
| SEO and analytics | One page per country, city and place, derived from the registry (no hand-kept list) | scripts/world/generate-world-seo.mjs:289-312 — pushes worldPage, then countryPage per country, cityPage per city, placePage per place, via `citiesOf` / `loadCity` from data/world/registry.ts |
| SEO and analytics | ACTUAL page count the generator prints today = 171 (not the 103 in the §39 decisions row) | scripts/world/generate-world-seo.mjs:336-338 prints `created` = pages.length. pages = 1 (/world) + COUNTRIES + CITIES + places. /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/data/world/registry.ts:49-76 lists 25 country modules; registry.ts:90-101 PLACE_COUNTS = amsterdam 16, athens 18, delphi 13, heraklion 12, london 17, paris 13, rhodes 12, rome 18, thessaloniki 17 = 136 places across 9 cities. 1+25+9+136 = 171. The 103 figure was the Greece-only state (1+25+5+72). I did not run the script (read-only); this is arithmetic on the committed registry. |
| SEO and analytics | title / meta description / canonical / OG / Twitter tags per page | scripts/world/generate-world-seo.mjs:104-140 `render()` substitutes all of them; the runtime equivalent is /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/components/world/WorldSeo.tsx:26-42 |
| SEO and analytics | Structured data (§39 "structured data"): TouristAttraction / Museum / City / Country / WebPage + BreadcrumbList + ItemList | /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/data/world/seo.ts:48-57 SCHEMA_TYPE map; seo.ts:70-81 breadcrumb(); seo.ts:112-117 WebPage; seo.ts:154-159 Country; seo.ts:195-215 City + ItemList; seo.ts:246-253 place TouristAttraction/Museum with GeoCoordinates and PostalAddress |
| SEO and analytics | Static and hydrated pages share one source of truth, so titles cannot drift | scripts/world/generate-world-seo.mjs:67-71 ssrLoadModule('/data/world/seo.ts') — the same worldMeta/countryMeta/cityMeta/placeMeta that WorldSeo.tsx consumes (components/world/WorldSeo.tsx:20-23) |
| SEO and analytics | §39 "σύντομο εκπαιδευτικό περιεχόμενο" — bilingual noscript body with real text (intro, places, story, facts, museum rooms, findIt) | scripts/world/generate-world-seo.mjs:150-256 — worldPage/countryPage/cityPage/placePage each emit el AND en h1/h2/h3 + <ul> bodies; render() at :132-135 injects it into the <noscript> |
| SEO and analytics | Sitemap merge that appends World URLs to public/sitemap.xml without touching public/ | scripts/world/generate-world-seo.mjs:260-271 + :322-332; /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/public/sitemap.xml has 34 <loc> entries and zero /world entries, so today's run appends all 171 |
| SEO and analytics | robots.txt allows /world and blocks the per-child passport | /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/public/robots.txt — `Allow: /world` and `Disallow: /world/passport` |
| SEO and analytics | GA4 exists and is consent-gated (STATUS.md §5 verified TRUE) | /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/index.html:5-20 — gtag stub always defined, the googletagmanager script for G-7834HP8GYV loads only inside `window.enableAnalytics`, called from components/CookieConsent.tsx:24; `anonymize_ip: true` at index.html:19 |
| SEO and analytics | A custom event helper already exists and is the right place to hang World events | /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/utils/analytics.ts:13-18 `track(event, params)` — swallows errors, no-ops without consent; named helpers at :21-37 (trackSignUp, trackPurchase, trackGateBlock, trackViewStore, trackPortalEnter) |
| SEO and analytics | Sentry is installed and initialised — §35's "crash-free 99,5%" already has a source | /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/index.tsx:4,13 `Sentry.init`; package.json:23 `@sentry/react` |
| SEO and analytics | The privacy rule §28 is already honoured in code: no fix is ever stored or sent | /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-7/utils/geo.ts:41-51 `locateOnce` resolves a Fix and returns it; components/world/PlaceCard.tsx:408-419 compares it to the place coordinate and keeps only 'here'/'far' + a distance number in component state. No localStorage or network write of lat/lng anywhere in components/world/** |
| Monetization, offline, privacy and Definition of Done | §25 — Map tiles cache after first use (decisions row: "Tiles και ήχος ήδη cache-άρονται μετά την πρώτη χρήση") | VERIFIED. vite.config.ts:70-83 — runtimeCaching entry 1: `urlPattern: /^https:\/\/tile\.openstreetmap\.org\/.*\.png$/`, `handler: 'CacheFirst'`, `options: { cacheName: 'map-tiles', expiration: { maxEntries: 600, maxAgeSeconds: 60 * 24 * 60 * 60 }, cacheableResponse: { statuses: [0, 200] } }`. The comment at vite.config.ts:72-75 states the intent exactly: "A family opens the city on hotel WiFi, then walks it without data: whatever tiles they looked at stay... 600 entries ≈ two cities at three zoom levels." The pattern matches the URL the World map actually requests: components/world/WorldMap.tsx:25 `const OSM_TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'`. Claim is true as written — no ticket. |
| Monetization, offline, privacy and Definition of Done | §25 — Narration audio caches after first use | VERIFIED for the .m4a itself. vite.config.ts:100-118 — `urlPattern: /\/audio\/.+\.(mp3/m4a)$/`, `handler: 'CacheFirst'`, `cacheName: 'audio-cache-v2'`, `expiration: { maxEntries: 100, maxAgeSeconds: 30*24*60*60 }`, `rangeRequests: true`. World narration URLs are built at data/world/narration.ts:158 as `/audio/world/${id}-${lang}.m4a`, which matches. 136 .m4a files exist under public/audio/world. The audio half of the claim is true — no ticket for it. (The word-timings half is not cached; that is ticket off-cache-gaps, not a rebuild of this rule.) |
| Monetization, offline, privacy and Definition of Done | §28 — No location is ever stored. Position is compared in memory and dropped | VERIFIED, three independent places. (1) utils/geo.ts:41-50 `locateOnce()` resolves a Fix into a Promise and never writes it anywhere; the file header at utils/geo.ts:1-5 says "The position never leaves the device — it is compared with the spot list in memory and thrown away." (2) components/world/PlaceCard.tsx:408-420 `locate()` awaits the fix, computes `distanceM(fix, place.location)` and `isWithin(...)`, stores only the derived number in React state (`setDistance(m)`) and the enum `'here' / 'far'`; the fix object itself goes out of scope. Comment at PlaceCard.tsx:400 — "The fix never leaves the device: it is compared with our coordinate and dropped." (3) The only thing persisted is components/world/useWorldProgress.ts:74-105 `WorldProgress` — `entries`, `places: Record<PlaceId, PlaceStamp>` where `PlaceStamp = { at: string; correct: boolean }` with `at` an ISO **date** (not a time) produced by `today()` at useWorldProgress.ts:115-119, plus id lists. No lat, no lng, no accuracy, no clock time. Written only to localStorage (useWorldProgress.ts:143-149); grep for supabase/insert/from( in that file returns nothing. No `world_stamps` table exists in supabase/migrations/. |
| Monetization, offline, privacy and Definition of Done | §28/§29 — No photo upload and no chat anywhere in the World module | VERIFIED by exhaustion. grep -riE "upload/FileReader/type=['\"]file/getUserMedia/toDataURL/toBlob/camera" across components/world/** returns zero hits. The app's camera/upload code is entirely outside World: components/OnboardingOverlay.tsx:246-340, components/Cinema.tsx:454-464, components/ThreeDFactory.tsx:63-66. Chat likewise: components/WiseBotChat.tsx exists but nothing under components/world/** imports or renders it. World is clean as the decisions row claims — no ticket. (Two app-wide caveats that are NOT World gaps are in notes.) |
| Monetization, offline, privacy and Definition of Done | §36 — The mechanism for hiding prices inside the iOS app already exists and works | utils/platform.ts:5-12 `isIosApp()` detects the Capacitor shell (`window.Capacitor.getPlatform() === 'ios'`); its header comment at utils/platform.ts:1-4 already names the Apple rule. It is already wired in three places: components/CreditStore.tsx:56 `const iosApp = isIosApp();` with the comment at CreditStore.tsx:53-55 "Apple 3.1.1: inside the iOS app credits are not for sale — no packs, no € prices, no pointer to the website"; components/Layout.tsx:235 strips /store from the nav; components/LandingPage.tsx:435,555 hides the Pricing link. The iOS Capacitor shell exists at store/ios. Do NOT build a new platform detector — ticket ios-free-only-constraint reuses this one. |
| Monetization, offline, privacy and Definition of Done | §36 — Checkout and purchase analytics primitives already exist | api/stripe/checkout.ts:2 (`CREDIT_PACKS` + Stripe session creation at :41 using `price_data`), api/stripe/packs.ts:1, api/stripe/webhook.ts and api/stripe/verify/ are live and have taken a real payment. Purchase funnel events already exist at utils/analytics.ts:23 `trackBeginCheckout`, :26 `trackPurchase`, :34 `trackGateBlock` (gate: 'unlock' / 'login' / 'credits' / 'verify'), :36 `trackViewStore`. A World paywall reuses all of these rather than inventing a parallel payment path. |
| Monetization, offline, privacy and Definition of Done | §43 DoD line "no duplicates" — already machine-enforced per city | data/world/world.test.ts:330 `it('no two places share a pin unless the seed says they are neighbours')`. Runs for every city in the registry. No ticket. |
| Monetization, offline, privacy and Definition of Done | §43 DoD line "languages" — already machine-enforced per city | data/world/world.test.ts:169 `it('every string a child reads exists in Greek and English')`, :185 `it('a language is either finished for a place or absent from it')`, and :450 `it('<cityId> is completely translated into <lang>')` for each overlay pair. This is exactly the "button only if the city is 100% in that language" rule. No ticket. |
| Monetization, offline, privacy and Definition of Done | §43 DoD line "no copied material" (image side) — already machine-enforced | data/world/world.test.ts:414 `it('third-party images carry a visible credit')`, plus :396 `it('every referenced local asset exists')`. Provenance of coordinates is enforced at :295 `it('every coordinate is real, sourced and inside the world')`. No ticket for these three lines. |
| Museum Mode and age modes | Museum interior data model (museum → rooms → exhibits → riddles) | data/world/types.ts:182-189 (`Museum` = rooms/riddles/doorNote), :191-199 (`MuseumRoom` = id/name/emoji/intro/exhibits), :201-209 (`Exhibit` = id/name/blurb/image/question), :216-225 (`Riddle` = id/prompt/hint/answerExhibitId/difficulty). `Place.museum?: Museum` at types.ts:272-273, gated on `category: 'museum'`. |
| Museum Mode and age modes | 22 museums actually authored (brief §42 row says "the 20 museums that already exist" — the real number is 22) | data/world/cities/*.ts: amsterdam 3, athens 3, delphi 2, heraklion 2, london 3, paris 2, rhodes 2, rome 3, thessaloniki 2. Confirmed two ways: 22 `museum: {` blocks and 22 `category: 'museum'` places. Contents: 49 rooms, 154 exhibits, 61 riddles, across 171 places. Worked example: data/world/cities/rome.ts:296-300 (Capitoline Museums, `category: 'museum'`), :387-392 (`museum: { doorNote, rooms: [` ), :733-770 (3 riddles with difficulty 1/1/2). |
| Museum Mode and age modes | Museum Mode screen — the child walks rooms, meets exhibits, answers, solves riddles | components/world/MuseumView.tsx (793 lines): props at :471-480, room/exhibit/riddle state and progress maths at :495-523, one-attempt-per-exhibit award guard at :526-539. Riddle dialog is components/world/RiddleGame.tsx (590 lines). Routed at components/world/World.tsx:571-587 via `/…/:placeId/in`. |
| Museum Mode and age modes | The §14 micro-loop "exhibit → question → answer → story → XP → next exhibit" | components/world/MuseumView.tsx:322-333 (blurb read aloud), :335-... (question, then explanation). XP paid at components/world/useWorldProgress.ts:61-63 (`exhibitCorrect: 5`, `riddle: 15`). The loop exists; only the brief's literal "+50 XP" number differs, and WORLD_XP is documented as tuned against data/makerLevels.ts — do NOT change it for cosmetic parity with the brief. |
| Museum Mode and age modes | Audio per exhibit (§14 "audio") | components/world/MuseumView.tsx:48 and :327-333 render `StoryNarration` keyed on the exhibit id; data/world/narration.ts:152-166 (`hasNarration`, `narrationAudio`, `NARRATION_COUNT = 136`). Falls back to plain text where no clip exists. |
| Museum Mode and age modes | Per-museum "what to know before you go in" text (§14 "text") | `Museum.doorNote?: LocText` at data/world/types.ts:188; present on all 22 museums (22 `doorNote` hits across data/world/cities/*.ts). Example data/world/cities/rome.ts:388-391. |
| Museum Mode and age modes | Difficulty — at riddle and place level | `Riddle.difficulty: 1 / 2 / 3` at data/world/types.ts:224 (used throughout, e.g. rome.ts:736,753,770); `Place.difficulty: 1 / 2 / 3` at types.ts:267. Only per-MUSEUM difficulty (§14) is missing — do not rebuild these two. |
| Museum Mode and age modes | Museum content is fully translatable in 6 languages | `PlaceTranslation.museum` (doorNote / rooms / exhibits / riddles, keyed by id) at data/world/types.ts:424-429; merged at data/world/mergeTranslation.ts:79-105. All 24 city overlay files under data/world/i18n/ carry a `museum` key. |
| Museum Mode and age modes | Museum invariants in the test gate | data/world/world.test.ts:347-370 — every `category: 'museum'` place has an interior, rooms non-empty, exhibit ids unique, every riddle points at an exhibit inside its own museum, riddle ids unique. Also exhibit questions swept into the answer-length bias test at :213-214 and :261-262. |
| Museum Mode and age modes | GPS is never used inside a museum (brief §8: "ήδη") | components/world/World.tsx:571-587 mounts MuseumView with no geolocation props at all; all geo lives in components/world/PlaceCard.tsx:38 (`locateOnce`, `isWithin`). Nothing to build. |
| Museum Mode and age modes | Mission order — partially. Room order and exhibit order are the array order and are already meaningful. | `MuseumRoom.exhibits: Exhibit[]` (data/world/types.ts:198) and `Museum.rooms: MuseumRoom[]` (:184) are rendered in declaration order by MuseumView.tsx:495-501. What does NOT exist is an order that differs per variant, or a named alternate route — that part is ticketed below (mm-schema, mm-content). |
| Location Integrity | `sources` — an array of provenance records on every coordinate | data/world/types.ts:130 (`sources: LocationSource[]`) and :162-173 (`LocationSource { kind: 'wikidata'/'osm'/'wikipedia'/'official'/'manual'; ref: string; deltaM: number }`). Populated in all 9 shipped cities, e.g. data/world/cities/athens.ts:80-84. Written by scripts/world/resolve-coords.mjs:215-245. Tested at data/world/world.test.ts:303-307 (non-empty AND at least one `wikidata` source, because the stored point must be CC0). |
| Location Integrity | `confidence` A/B/C/D grading | Type is `'A' / 'B' / 'C'` at data/world/types.ts:128 — D is deliberately not in the shipped type (rationale at types.ts:15-17). The resolver DOES emit D: scripts/world/resolve-coords.mjs:153-165 (`grade()`), :291 (city audit flags D), :324 (a fetch failure is graded D). D is filtered out of the registry at scripts/world/build-registry.mjs:57. Tested at data/world/world.test.ts:302. |
| Location Integrity | `anchor` — what the stored point actually is | data/world/types.ts:120 `anchor: 'entrance' / 'centroid' / 'viewpoint' / 'area'`, with the Panathenaic-Stadium rationale at :105-119. Set by scripts/world/resolve-coords.mjs:191-192 (a claimed 'entrance' with no measured door is DOWNGRADED to 'centroid' and warned at :202-206). Consumed at runtime: components/world/PlaceCard.tsx:405 widens the geofence to 120 m for `area`, 60 m otherwise. Distribution across data/world/coords/*.json: centroid 105, area 38, viewpoint 5, entrance 0. |
| Location Integrity | `door` — the mechanism by which a measured entrance may enter the data | scripts/world/resolve-coords.mjs:187-192 (a seed's own `door` with a `source`), :210-224 (when a door exists it becomes the stored point and Wikidata drops to a cross-check), plus the licence reasoning at :176-186 (a door may NOT come from OSM/ODbL). Enforced from the other side at data/world/world.test.ts:315-320: `anchor: 'entrance'` requires a source of kind `official` or `manual`. CAVEAT (see ticket loc-entrance-pair and notes): the mechanism exists, the DATA does not — zero of the 14 files in scripts/world/seeds/ contains a `door` key, and zero of the 149 records in data/world/coords/ has `anchor: "entrance"`. |
| Location Integrity | `verifiedAt` — ISO date of the last verification pass | data/world/types.ts:133. Written by scripts/world/resolve-coords.mjs:254. Present on every shipped place, e.g. data/world/cities/athens.ts:85. Format-tested at data/world/world.test.ts:308. |
| Location Integrity | `findIt` — the door in words, and its translation overlay | data/world/types.ts:156 (with the full rationale at :138-155 — it is the licence-free half of the entrance problem). Translation slot at data/world/types.ts:420 (`PlaceTranslation.findIt`), merged at data/world/mergeTranslation.ts:112-113, rendered at components/world/PlaceCard.tsx:597-601. 46 of the 136 shipped places carry one (london 16, amsterdam 8, heraklion 6, athens 5, thessaloniki 5, rome 4, rhodes 2, delphi 0, paris 0). |
| Location Integrity | `note` — free-text caveat on a coordinate | data/world/types.ts:135. In use, e.g. data/world/cities/athens.ts:279 ('Wikipedia carries no coordinate for this article, so the grade is B on two sources.'). |
| Location Integrity | The same-pin / city-centre audit and its `adjacentPairs` escape hatch | scripts/world/resolve-coords.mjs:268-294 (`auditCity`), constants at :44 (MIN_SEPARATION_M = 25) and :46 (CITY_CENTRE_M = 60). Mirrored as a shipped-data invariant at data/world/world.test.ts:366-372, reading the declared pairs from the seed. All 11 seeds declare an `adjacentPairs` key. |
| Location Integrity | Anchor-aware disagreement tolerance (a hill is legitimately wide, a door is not) | scripts/world/resolve-coords.mjs:42 `DISAGREE_M = { entrance: 100, centroid: 100, viewpoint: 400, area: 500 }`, applied in `grade()` at :154 and per-source at :246-247. |
| Location Integrity | `map` — illustrated-map placement, bounds-checked | data/world/types.ts:159; range-tested 0–1 at data/world/world.test.ts:321-326; consumed at components/world/CityView.tsx:235. |
| Quest engine, CMS and mission types | Country → City → Route(Trail) → Stop(Place) architecture as TypeScript modules + scripts (§9 decisions row) | /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-3/data/world/types.ts:343-360 (Country), :304-320 (City), :281-289 (Trail), :249-276 (Place), :379-389 (CountryModule/CityModule), :465-472 (WorldRegistry with per-city dynamic import). Generated, never hand-edited: /Users/vasilisskevis/Projects/wisebot/.claude/worktrees/wf_4b47cfe5-978-3/data/world/registry.ts + scripts/world/build-registry.mjs:1-22. |
| Quest engine, CMS and mission types | Mission type 1 of 4 — PLACE QUESTION (multiple choice, 4 answers, index 0 correct in data, shuffled at runtime, explanation after answering) | types.ts:80-86 (Question), :270 (Place.question); components/world/PlaceCard.tsx:705-783 (the question section), :417 shuffleAnswers seeded by place id, :443-451 choose() with a fired-once ref; components/world/useWorldProgress.ts:61 WORLD_XP.placeCorrect = 10. |
| Quest engine, CMS and mission types | Mission type 2 of 4 — EXHIBIT QUESTION inside a museum (one question per exhibit, paid once) | types.ts:201-209 (Exhibit.question), :182-199 (Museum/MuseumRoom); components/world/MuseumView.tsx (36 KB, the rooms/exhibits screen); components/world/useWorldProgress.ts:63 WORLD_XP.exhibitCorrect = 5, :207 answerExhibit(), :94 progress.exhibits keyed by ExhibitId. |
| Quest engine, CMS and mission types | Mission type 3 of 4 — RIDDLE, answered by tapping an exhibit, never by typing (61 riddles shipped across the 9 city files) | types.ts:211-225 (Riddle, answerExhibitId: ExhibitId), :18-20 (the no-free-text rule stated in the contract); components/world/RiddleGame.tsx (24 KB); components/world/useWorldProgress.ts:65 WORLD_XP.riddle = 15, :209 solveRiddle(). Count: 61 `answerExhibitId` occurrences across data/world/cities/*.ts. |
| Quest engine, CMS and mission types | Mission type 4 of 4 — “I AM HERE” geofence gate (60 m, 120 m for areas, accuracy-aware, fix never leaves the device) | components/world/PlaceCard.tsx:395-432 — geo state machine, `radiusM = place.location.anchor === 'area' ? 120 : 60` at :415, locate() at :421-432 calling locateOnce()/isWithin(); gate at :406 `onSite`, applied at :706 and :717 so the question (and with it the stamp) opens only on site; copy in six languages at :253-292. |
| Quest engine, CMS and mission types | Routes exist and are a shipped feature, not just data — 18 in Greece (the brief’s number) and 35 in total now that Paris/Rome/London/Amsterdam have landed | Greece 18: data/world/cities/athens.ts:3089 (4), thessaloniki.ts:2295 (4), heraklion.ts:1876 (3), rhodes.ts:1744 (4), delphi.ts:1760 (3). Plus paris.ts:1992 (4), rome.ts:3050 (5), london.ts:2881 (4), amsterdam.ts:2817 (4) = 35. UI: components/world/CityView.tsx:317-345 (TrailCard, progress + CTA in 6 languages). Reward: useWorldProgress.ts:332-345 completeTrail(), WORLD_XP.trail = 30 at :67. Celebration: components/world/SealCeremony.tsx:362. Invariant: data/world/world.test.ts:374-382. |
| Quest engine, CMS and mission types | “No developer needed per city” — the actual §9 goal. Adding a city is one seed + one content file + a regeneration, with no shared list edited | scripts/world/build-registry.mjs:1-22 (regenerates data/world/registry.ts from the countries/ and cities/ folders); scripts/world/resolve-coords.mjs; docs/world/SESSION-SPLIT.md:56-58. 9 city modules and 14 seeds exist under scripts/world/seeds/. |
| Quest engine, CMS and mission types | “The content team today is agents with tests as the gate” (§9 decisions row) — the gate is real and enforced | data/world/world.test.ts, 476+ lines of invariants: :169 el+en on every string a child reads, :185 a language is finished or absent, :209 four distinct answers, :228 the longest answer is not the right answer, :295 coordinates real and sourced, :330 no shared pins, :347 museums internally consistent, :374 trails point at their own city’s places, :476 registry counts match the real arrays. |
| Quest engine, CMS and mission types | Every answer is an id, an index or a tap — never free text (the rule that makes six languages possible) | types.ts:18-20 stated as a frozen contract rule; :223 Riddle.answerExhibitId typed as ExhibitId; :83 Question.answers as a fixed 4-tuple scored by index. |
| Languages | Six-language content union EN/EL/FR/DE/ES/IT — the exact six the decisions row calls live. No seventh language is reachable by accident. | data/world/types.ts:33-35 (`WorldLang`, `WORLD_LANGS`), types.ts:38 (`LocText` requires el+en, other four optional) |
| Languages | Chinese, Japanese, Arabic, Korean — explicitly NOT happening in 2026 (decisions row §21). Verified: zero code, zero data, zero type members anywhere. Nothing to build and nothing to remove. DO NOT RE-RAISE. | data/world/types.ts:33 `WorldLang` has no zh/ja/ar/ko; components/world/worldUi.ts:71-78 `LANG_LABELS` has six entries; grep for 'zh'/'ja'/'ar'/'ko' across data/world and components/world returns nothing |
| Languages | Device auto-detect on first visit — the decisions row says it already exists, and it does. Saved choice wins, otherwise the browser language decides. | App.tsx:618-626 (`navigator.language` seeds the app language, `wb_lang` overrides); components/world/worldUi.ts:36-44 `initialWorldLang(appLang)` seeds World from it. NOTE: it resolves only el vs en — see notes. |
| Languages | Language switcher with 🌐-style flag buttons, each language named in itself, never translated. | components/world/worldUi.ts:71-78 (`LANG_LABELS`); components/world/World.tsx:260-295 (`LangSwitcher`) |
| Languages | The 'no button without content behind it' rule (brief §6 of SESSION-SPLIT, decisions §21 spirit) — the switcher is derived from what actually has an overlay, not declared. | data/world/registry.ts:241-250 (`AVAILABLE_LANGS` derived from `I18N` + `I18N_COUNTRIES` keys); components/world/World.tsx:661-664 filters through `LANG_LABELS` |
| Languages | Remembered language choice, survives reload, safe in private browsing. | components/world/worldUi.ts:26 (`wb_world_lang`), :36-52 (`initialWorldLang` / `rememberWorldLang`, both try/catch wrapped) |
| Languages | Per-city lazy overlay loading and merging — a Greek child never downloads the German text; a missing or broken overlay never takes the city down. | data/world/registry.ts:167-182 (`loadCity`), :113-152 (`I18N` loader map); data/world/mergeTranslation.ts:139-152 (`mergeCityTranslation`) |
| Languages | Front-door (countries) overlay loading and merging — one small file per language so the world list does not fire twenty requests. The PLUMBING is complete; only the CONTENT is missing (see ticket i18n-countries-24). | data/world/registry.ts:184-218 (`I18N_COUNTRIES`, `loadCountries`); data/world/mergeTranslation.ts:166-196 (`mergeCountriesTranslation`); components/world/World.tsx:159-172 wires it |
| Languages | All-or-nothing translation gate per place, checked through the real loader (not just the module), so a half-translated city cannot ship. | data/world/world.test.ts:185-207 ('a language is either finished for a place or absent from it'); :440-474 ('<city> is completely translated into <lang>') |
| Languages | Honest English fallback plus an on-screen note in all six languages when the city on screen has no overlay — so a French child looking at English knows it is unfinished, not broken. | data/world/types.ts:45-48 (`pick`); components/world/World.tsx:116-127 (`T.notTranslated`, six languages), :416-427 (`TranslationNote`) |
| Languages | `lang` attribute set on the World module root so Greek uppercase drops accents correctly and a screen reader does not read German in a Greek voice. | components/world/World.tsx:666-676 |
| Languages | Six cities fully translated into all four overlay languages: Athens (18 places, 4 trails), Thessaloniki (17/4), Heraklion (12/3), Rhodes (12/4), Delphi (13/3), Paris (13/4) — 24 overlay files, all passing the completeness gate. | data/world/i18n/{athens,thessaloniki,heraklion,rhodes,delphi,paris}.{de,fr,es,it}.json; place/trail counts match data/world/registry.ts:90-100 `PLACE_COUNTS` |
| Languages | Greece is fully translated at the front door in all four overlay languages: name + intro + 3 facts + all 5 city names and intros. | data/world/i18n/countries.{de,es,fr,it}.json → `countries.greece` complete in every one |
| Languages | Country stamps are deliberately NOT localised (a real stamp is inked in the country's own language) — `CountryTranslation` has no `stamp` field, so no translator can accidentally translate ΕΛΛΑΣ. Matches the decisions row's 'χωρίς stamp'. | data/world/types.ts:325-339 (`CountryStamp` doc comment), :450-456 (`CountryTranslation` — name/intro/facts/cities only) |
---

## 6. Tickets that were merged away

- **loc-opening-hours-source** — `openingHoursSource` — and the opening hours it is supposed to cite, which also do not exist. Merged into `world-family-info-schema`, which already carries opening hours, ticketing and the source URL. Two tickets were sending two sessions to the same venue page to store the same fact in two shapes.
