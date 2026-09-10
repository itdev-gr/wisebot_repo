# WiseBot World — specs index (Session 2)

Written 10 Σεπτεμβρίου 2026 on `feature/opus-prep`. These are **specifications only**.
No application code exists yet and none was written to produce them. Session 1's survey
of the codebase is in [../CURRENT_STATE.md](../CURRENT_STATE.md).

| Spec | What it settles |
| --- | --- |
| [01-data-model.md](01-data-model.md) | The content entities — worlds, cities, places, stops, trails — as TypeScript, plus how coordinates and their provenance are stored |
| [02-progress-and-rewards.md](02-progress-and-rewards.md) | What a child earns, where progress is stored, the Passport stamp model, and the cloud-sync design |
| [03-module-contract.md](03-module-contract.md) | File layout, routes, component props, i18n, privacy and the rules the module must not break |

---

## What I assumed, because there is no brief yet

The task was "write the schemas". A schema encodes a product, so these are the product
assumptions behind it. **Every one is cheap to change now and expensive to change after
content exists** — please correct the wrong ones before Session 3.

1. **World is virtual travel, not a game.** A child opens a map, picks a city, visits real
   places in it, learns something true about each, answers a short question, and collects
   a stamp. Athens, Lisbon and Porto are the first three cities, because those are the
   ones you named.
2. **Places are real and have real coordinates.** The schema carries latitude, longitude,
   the source they came from, and a confidence grade — the same A/B/C/D vocabulary from
   the audit you described. That is why the coordinate fields look heavier than a quiz
   would need.
3. **It pays in XP, never in credits.** Same rule the mini-games follow since
   24 Αυγούστου 2026. No new badge is proposed, because a badge touches the shared
   paid-economy files.
4. **Content is static TypeScript**, like every other content area in this repo, so the
   first cities ship with no backend and no migration.
5. **No device location, ever.** The audience is children aged 6–12. The module never
   calls the Geolocation API and never asks where the child is. Travel is imaginary.
   This is already enforced at the edge: `vercel.json:38` sends
   `Permissions-Policy: … geolocation=()`. Designing around the device's position would
   mean changing a deployment header, which is outside a content module.
6. **No map tiles from a third party** in v1 — see the recommendation below.

## The one technical recommendation worth reading now

There is no map library in `package.json` and no tile provider anywhere in the app. A real
slippy map means a new dependency (Leaflet or MapLibre), plus every viewer's browser
calling a tile server on every pan. For a children's PWA that is a privacy surface, an
offline hole, and a bundle cost, all at once.

**Recommend: hand-drawn SVG city maps, shipped as static assets.** Coordinates still live
in the data — they are what makes the content true, and they are what a future audit
checks — but they are projected into the illustrated map's own coordinate space at build
time. The result works offline in the PWA, matches the app's art direction, adds no
dependency, and leaks nothing. A real map can be added later for a "grown-up view"
without touching the content schema.

Both options are specified in [03-module-contract.md](03-module-contract.md#maps).

## Open questions for the owner

1. Does World appear in the sidebar as its own room, or is it a path through the existing
   rooms, as `PRODUCT-VISION.md` line 46 says? The data model is the same either way; the
   navigation is not.
2. Three cities, or Greece first? Athens, Lisbon and Porto is an odd trio for a Greek
   audience unless Portugal is deliberate.
3. Roughly how many places per city — 8, 15, 30? It changes whether a city is one sitting
   or a month.
4. Should World progress sync to Supabase in v1, or is `localStorage` acceptable at first,
   like the mini-games?
