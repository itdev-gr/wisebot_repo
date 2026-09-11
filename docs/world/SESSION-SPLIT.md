# WiseBot World — who builds what

Written 11 Σεπτεμβρίου 2026, after the owner's brief. Two sessions work in parallel and
must never open the same file. This document is the boundary.

Decisions taken in that brief, all binding:

- **Scope**: the top-20 tourist countries worldwide, roughly 45 cities.
- **Languages**: six in World content (`el en de fr es it`), two everywhere else in the
  app. The `'el' | 'en'` union in the rest of the tree is not touched.
- **Museums** get an interior: rooms, exhibits, and riddles.
- **Passport**: an official entry stamp the moment a child first opens a country, a city
  seal when a city is finished, a country seal when its cities are.
- **Hop-on hop-off operator data is out.** Not a single stop, route, name or line is
  copied from any operator, in any city. Their route lists are compiled databases and
  copying a substantial part of one is an infringement in the EU independently of
  whether each stop is a public fact. Everything we ship is resolved from Wikidata
  (CC0) and written by us.

---

## The split

| | Session A — the engine | Session B — the content |
| --- | --- | --- |
| Branch | `feature/world-engine` | `content/world-cities` |
| Owns | the module's code | the module's data |
| Never touches | `data/world/cities/`, `scripts/world/seeds/`, `public/images/world/` | everything in the left column |

### Session A owns these paths

```
data/world/types.ts            the model — frozen first, see "Sequencing"
data/world/registry.ts         GENERATED, never hand-edited
data/world/world.test.ts       the invariants, including the coordinate audit
components/world/**            every screen
hooks/useWorldProgress.ts      stamps, seals, one-shot awards
scripts/world/resolve-coords.mjs   the coordinate resolver (already written)
scripts/world/build-registry.mjs   regenerates registry.ts from the cities folder
```

Plus four additive one-liners in shared files, listed in
[specs/03-module-contract.md](specs/03-module-contract.md): the route in `App.tsx`, the
menu label in `constants.tsx`, the nav entry in `components/Layout.tsx`, the portfolio
row in `components/MakerPassport.tsx`. Session B never edits any of those four.

### Session B owns these paths

```
scripts/world/seeds/<city>.json     Wikidata q-ids for that city's places
data/world/coords/<city>.json       the resolver's output — generated, committed
data/world/cities/<city>.ts         the content: stories, facts, questions, museums, riddles
public/images/world/**              artwork
```

`registry.ts` is the one file that would otherwise be shared, so it is generated. Session
B adds a city by adding **one new file** and running `node scripts/world/build-registry.mjs`.
Nobody edits a shared list, so nobody has a merge conflict.

---

## Sequencing — the only hard dependency

Session B cannot author against a schema that does not exist yet. So:

1. **Session A ships `data/world/types.ts` first and freezes it.** Until then it is the
   only thing Session A does.
2. **Session B starts with seeds and coordinates**, which need no types at all: pick the
   places, find their Wikidata ids, run the resolver, fix what comes back graded D.
3. Once types land, Session B writes the city content files against them.

That ordering means both sessions are productive from minute one.

---

## Rules Session B must follow

1. **No coordinate is ever typed by hand.** Every place is resolved by
   `node scripts/world/resolve-coords.mjs <city>` and its output committed.
2. **Nothing graded `D` ships.** A D means the sources disagree about where the place is.
   Fix the seed — usually the wrong Wikidata item — or drop the place.
3. **Pick the building, never the institution.** `Hellenic Parliament` is a legislature
   and its coordinate is not a door; the building it sits in is a different item. This is
   the single most common way a pin lands two streets away.
4. **Search Wikidata in the local language and read the description.** An English search
   for the Carmo church in Porto returns nothing; a Portuguese one returns eight churches
   in eight different towns. The description has to say the right city.
5. **Real neighbours are declared, not silently allowed.** Two places closer than 25 m
   fail the audit unless the pair is listed in the seed's `adjacentPairs`. Porto's two
   Carmo churches share a wall and are a legitimate entry; anything else is a bug.
6. **`el` and `en` are mandatory on every string; `de fr es it` may follow later.** A
   missing `en` renders as an empty string, silently — that is this repo's most common
   content bug.
7. **No operator data.** See the hop-on hop-off decision above.
8. **Age 6–12.** Real places carry real history. True, plainly told, no violence for its
   own sake. When a place's honest story cannot be told well to a seven-year-old, leave
   the place out rather than sanitise it.

---

## The brief to paste into the new session

It lives in [BRIEF-CONTENT-SESSION.md](BRIEF-CONTENT-SESSION.md), which also explains
what that session will produce so the owner can tell whether it is on track. Keep the
brief in that one file: two copies of it will drift.
