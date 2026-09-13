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

There are **three** sessions, not two. The third arrived with the four extra languages and
was never written down here, which meant every i18n ticket was unverifiable against this
document for a week.

| | A — the engine | B — the content | C — the languages |
| --- | --- | --- | --- |
| Branch | `content/world-cities` (also the release branch) | `world/content` | `world/i18n` |
| Owns | the module's code | the module's data | the translation overlays |
| Never touches | `data/world/cities/`, `scripts/world/seeds/`, `public/images/world/`, `data/world/i18n/` | everything in A's column, and `data/world/i18n/` | everything that is not `data/world/i18n/*.json` |

**Only session A opens a pull request or merges.** B and C push their branch and send A the
hash **with the word "pushed"**. A merges from `origin/*` only, never from a local branch in
another worktree: on 13 Σεπτεμβρίου a local branch was three commits ahead of its pushed
ref, the merge silently lost two whole cities, and every test passed over the nine that
remained. A also checks the city count `build-registry.mjs` prints against what the
delivering session said it sent.

### Session A owns these paths

```
data/world/types.ts            the model — frozen first, see "Sequencing"
data/world/registry.ts         GENERATED, never hand-edited
data/world/world.test.ts       the invariants, including the coordinate audit
data/world/seo.ts              per-page metadata, shared with the prerender
data/world/narration.ts        GENERATED from what is on disk
data/world/mergeTranslation.ts how an overlay is folded into a city
components/world/**            every screen
components/world/useWorldProgress.ts   stamps, seals, one-shot awards
utils/geo.ts                   distance, geofence, the country radius
scripts/world/*.mjs            resolver, registry, SEO, narration, extraction
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

### Session C owns these paths

```
data/world/i18n/<city>.<lang>.json      one city in one language
data/world/i18n/countries.<lang>.json   country names, intros, facts, and the city cards
```

Nothing else. A translation ticket that needs a TypeScript change is two tickets: the type
belongs to A.

`registry.ts` is the one file that would otherwise be shared, so it is generated. Session
B adds a city by adding **one new file** and running `node scripts/world/build-registry.mjs`.
Nobody edits a shared list, so nobody has a merge conflict. When a wave of overlays lands,
**one** session runs the final regeneration — not twelve translators in parallel.

10. **A wrong answer must read as an ANSWER to the question, not merely be false.**
    Every check built on 13 Σεπτεμβρίου asks whether a distractor is untrue. This one asks
    whether it is even a candidate, and an option that is not one excludes itself without
    failing anything — so no gate can see it, and the question quietly becomes a
    three-option question.

    The Mona Lisa's question asks what *made* her famous, so all four options have to be
    causes. One was «the biggest painting here» — a bare noun phrase naming a different
    painting on the same wall. It was false, its explanation did not argue for it, and it
    passed every rule we had. It was simply answering a different question, and a child
    would drop it on sight without knowing anything.

    It now reads «its enormous size», a possessive phrase in all four languages, so it is
    unambiguously about the Mona Lisa, stands as the subject of "made her famous", and is
    false: the painting is 77 by 53 centimetres.

    Like rule 9, this needs a person — read the stem and all four options together and ask
    whether they all answer the same thing.

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

9. **A trimmed distractor must be read again, against its question AND its explanation.**
   This one was paid for twice in one day. Two rules govern answer length — a child who
   always taps the longest option, and a child who always taps the shortest, must each do
   no better than chance — and the only way to satisfy the second is to shorten the three
   wrong answers. But a wrong answer is very often wrong *because* of the words that make
   it long: the qualifier, the superlative, the invented detail. Cut those and a bare true
   sentence is left, and the question now has two right answers.

   It is not hypothetical. Twenty distractors across Paris, Barcelona and Istanbul became
   true this way, and 275 more were trimmed in the overlays on the same afternoon. Every
   mechanical check passed on both. «How large and bright the windows are» became «How
   many windows it has» — and the submarine has none, which the question's own explanation
   says, so the wrong answer stated the right one and the explanation argued its case.

   Re-reading against the explanation is free, needs nothing outside the file, and catches
   the worst of them on its own. **No test can do this.** The giveaway rules in
   `world.test.ts` measure a proxy: a city can satisfy both perfectly while a distractor is
   true. Treat the number as an indicator, never as the target — a city shipped honestly at
   35% is worth more than one at 25% bought with a lie.

---

## The brief to paste into the new session

It lives in [BRIEF-CONTENT-SESSION.md](BRIEF-CONTENT-SESSION.md), which also explains
what that session will produce so the owner can tell whether it is on track. Keep the
brief in that one file: two copies of it will drift.
