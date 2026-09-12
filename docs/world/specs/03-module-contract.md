# 03 — Module contract

Specification only. Defines the boundary of the World module: what it owns, what it is
allowed to touch, how it renders, and what "done" means.

---

## Files the module owns

```
components/world/
  World.tsx             route entry. The only file App.tsx imports.
  CityList.tsx          the world view — cities as cards
  CityView.tsx          one city: the illustrated map, its pins, its trails
  PlaceCard.tsx         story, facts, image, credit
  PlaceQuestion.tsx     the four-option question and its explanation
  StampBook.tsx         the passport page: stamps collected, seals earned
  useWorldProgress.ts   read/write wb_world_progress, award once, never twice

data/world/             see spec 01
public/images/world/    maps/<city>.svg and place art
docs/world/             this documentation
```

## Files the module is allowed to change

Exactly four, all additive, all one-liners:

| File | Change |
| --- | --- |
| `App.tsx` | One `React.lazy` import and one `<Route path="/world">` |
| `constants.tsx` | Two strings in `UI_TEXT.menu` — `el` and `en` |
| `components/Layout.tsx` | One entry in `navItems`, `locked: false` |
| `components/MakerPassport.tsx` | One portfolio row (spec 02) |

Everything else is off limits: `context/EconomyContext.tsx`, `services/syncService.ts`,
`components/GameCenter.tsx`, `components/games/*`, `utils/unlocks.ts`, `data/units/*`,
`api/*`, `vercel.json`, and anything to do with auth, payments or migrations. If the
module appears to need one of them, that is a decision to raise, not a change to make.

## Route

```tsx
const World = React.lazy(() => import('./components/world/World'));

<Route path="/world" element={
  <SemiPublicRoute lang={lang}>
    <SEO lang={lang} page="world" />
    <World lang={lang} />
  </SemiPublicRoute>
} />
```

`SemiPublicRoute`, not `ProtectedRoute`: guests read and collect like everywhere else.
Inner navigation is `/world`, `/world/:cityId`, `/world/:cityId/:placeId` as nested
routes rather than query parameters, because these are real destinations worth a shared
link and a browser-back press. That differs from `GameCenter`'s `?g=` on purpose — a
game is a mode, a place is a page.

A new `SEO` page key means one entry in `components/SEO.tsx`. Treat that as a fifth
allowed one-liner if the owner wants World indexed; skip it otherwise.

## Component contract

Every component takes `lang: 'el' | 'en'` as its first prop, matching the whole codebase.
Beyond that:

```ts
interface CityViewProps   { lang: Lang; cityId: CityId }
interface PlaceCardProps  { lang: Lang; place: Place; stamp?: PlaceStamp;
                            onComplete: (correct: boolean) => void }
```

`onComplete` fires **once**, from the child component, and the parent's
`useWorldProgress` decides whether anything is awarded. Rewards are never decided inside a
render or an effect that could run twice.

## i18n

- Both languages, always. There is no fallback chain in this app: a missing `en` renders
  as an empty string, silently.
- Content strings live in the data as `{ el, en }`. UI chrome strings live in a local `t`
  object at the top of the component, which is what `GameCenter` and `MakerPassport`
  already do; only the menu label goes into `UI_TEXT`.
- Never build a sentence by concatenating fragments — Greek and English disagree on word
  order. Write the whole sentence twice.
- Read `lang` from props. Do not add `lang` to a `useCallback` dependency list that
  guards an award; `EconomyContext` documents at line 482 why that pattern bit before.

## Maps

Two options. The recommendation is the first.

### Recommended — illustrated SVG maps

One hand-drawn SVG per city under `public/images/world/maps/`, with places pinned via
`Place.location.map` as fractions of the artwork. No library, no third-party request,
works offline in the PWA, and it looks like WiseBot rather than like a route planner.
Real coordinates stay in the data as the source of truth for the content; the artwork
position is a separate, hand-checked field.

The closest existing precedent to read first is `components/SchoolUnitMap.tsx`, which
already renders "a winding trail of stops, each showing its stars" and states the rule
this module should inherit: the trail shows where the child is, it never bars the way.

### Alternative — a real slippy map

Leaflet or MapLibre plus a tile provider. Costs a dependency, a per-pan network call from
every child's browser to a third party, a blank map when offline, and a privacy question
in a product for six-year-olds. Only worth it if the owner specifically wants real
cartography, and it needs its own approval.

Either way, `Place.location.lat/lng` is stored and never displayed as a number to a child.

## Privacy and safety

- **No Geolocation API.** `vercel.json:38` already sends
  `Permissions-Policy: … geolocation=()`, and that header stays as it is.
- **No external requests at runtime.** Images, maps and content are local assets. No
  Wikidata, OpenStreetMap or Wikipedia call from the browser. If those sources are used
  to research a coordinate, the result is written into the data file by a person, with
  the reference recorded in `LocationSource` — that is what the field is for.
- **No AI generation in v1.** Content is authored. If that ever changes, `CLAUDE.md`'s
  rule applies in full: Greek and English blocklists plus Gemini safety settings at
  `BLOCK_LOW_AND_ABOVE`, and the call goes through `api/ai/*`, never the browser.
- **Third-party images need visible credit.** `PlaceImage.credit` is rendered, not just
  stored.
- **Age-appropriate content.** These are real places with real histories. Wars, deaths and
  colonial history will come up in Athens, Lisbon and Porto alike. The rule is the one the
  Academy stories already follow: true, plainly told, no violence for its own sake, and a
  lesson a child can carry. When a place's honest story cannot be told well to a
  seven-year-old, leave the place out rather than sanitising the history.

## Performance

- One chunk for the module, one dynamic `import()` per city (spec 01). Chunks stay under
  the 1 MB PWA precache budget — that budget is the stated reason `data/units/registry.ts`
  exists.
- SVG maps compressed, place art in WebP, `loading="lazy"` on everything below the fold,
  and explicit `width`/`height` so nothing shifts as art arrives.

## Definition of done for the first slice

1. `npm run typecheck` passes.
2. `npm run test` passes, including `data/world/world.test.ts` with the eight invariants
   from spec 01.
3. `npm run build` succeeds and no chunk crosses 1 MB.
4. One city ships complete, in both languages, every place graded `A`, `B` or `C`.
5. A guest can walk the city, collect stamps, and see XP arrive.
6. Not one line changed in `EconomyContext`, `syncService`, `GameCenter` or `games/`.

`npm run lint` is not a gate: it carries a ~655-error baseline that predates this work.
New files should still be lint-clean on their own.
