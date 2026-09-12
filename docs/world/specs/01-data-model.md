# 01 — Content data model

Specification only. Types are written as they would appear in `data/world/types.ts`,
following the repo's existing conventions: bilingual `{ el, en }` on every string a child
reads, stable string ids, static TypeScript modules rather than a table.

---

## Shared primitives

```ts
/** Every string a child sees. Both languages are mandatory — the app has no fallback. */
export interface BiText {
  el: string;
  en: string;
}

/** Stable, lowercase, hyphenated. Persisted in progress keys — NEVER rename an id. */
export type WorldId = string;   // 'europe'
export type CityId  = string;   // 'athens'
export type PlaceId = string;   // 'athens-acropolis'
export type TrailId = string;   // 'athens-ancient-day'
```

Ids are the contract with saved progress. A renamed id silently erases a child's stamps,
so the ids are prefixed by city and treated as permanent from the first commit.

---

## Place — the unit of the module

A Place is one real location a child can visit. It is the row a future coordinate audit
would grade, which is why location and provenance are modelled separately from content.

```ts
export interface Place {
  id: PlaceId;
  cityId: CityId;

  name: BiText;
  /** One line under the title on the card. */
  tagline: BiText;
  /** 120–220 words, WiseBot's voice, true and checkable. The read that earns the stamp. */
  story: BiText;
  /** 2–4 short facts shown as chips. Each must be independently verifiable. */
  facts: BiText[];

  emoji: string;                  // '🏛️' — the cheap visual, always present
  image?: PlaceImage;             // optional richer art

  category: PlaceCategory;
  /** Roughly how demanding the story and question are. Drives ordering, not gating. */
  difficulty: 1 | 2 | 3;

  location: PlaceLocation;
  question: PlaceQuestion;

  /** Optional bridges into content that already exists in the app. */
  links?: PlaceLinks;
}

export type PlaceCategory =
  | 'landmark' | 'museum' | 'nature' | 'science'
  | 'art' | 'history' | 'food' | 'sport';

export interface PlaceImage {
  /** Path under public/images/world/. Local asset — no hotlinking. */
  src: string;
  alt: BiText;
  /** Required when the image is not ours. Rendered in the UI, not just stored. */
  credit?: { text: string; license: string; url?: string };
}

export interface PlaceLinks {
  /** An Academy course id whose story touches this place. */
  academyCourseId?: string;
  /** A book id from data/bookMetadata.ts. */
  bookId?: number;
  /** A School unit id from data/units/. */
  unitId?: string;
}
```

### Location and provenance

The coordinate is content, and like any other fact in a children's app it needs a source.
This shape stores the answer *and* how much to trust it, using the A/B/C/D grading from
the audit brief.

```ts
export interface PlaceLocation {
  /** WGS84, 5 decimal places (~1 m). The point a visitor would actually walk to. */
  lat: number;
  lng: number;

  /**
   * What the point represents. 'entrance' is preferred for anything a person enters —
   * a building centroid can sit a hundred metres from the door, inside a wall.
   */
  anchor: 'entrance' | 'centroid' | 'viewpoint' | 'area';

  /**
   * A = 3+ independent sources agree within 30 m
   * B = 2 sources agree within 30 m
   * C = 1 source only
   * D = unverified, or sources disagree by more than 100 m
   */
  confidence: 'A' | 'B' | 'C' | 'D';

  /** Where the coordinate came from. At least one entry for anything above D. */
  sources: LocationSource[];

  /** ISO date of the last verification pass. Stale checks are visible, not invisible. */
  verifiedAt?: string;

  /** Free-text note for the next person: known ambiguity, moved entrance, closure. */
  note?: string;

  /** Position on the illustrated city map, 0–1 of the artwork's width/height. */
  map?: { x: number; y: number };
}

export interface LocationSource {
  kind: 'wikidata' | 'osm' | 'official' | 'manual';
  /** Q-number, OSM type/id, or a URL. Empty for 'manual'. */
  ref?: string;
  lat?: number;
  lng?: number;
}
```

Two rules that keep this honest:

- **A place with `confidence: 'D'` must not ship.** It is a content bug, not a soft
  warning, and a unit test should fail the build for it.
- **`sources` is the audit trail.** Keeping each source's own `lat`/`lng` is what makes a
  later "do the sources still agree?" pass a pure function over the data, with no
  network calls and no scraping.

### The question

Deliberately not the full quiz engine. One question, four options, index 0 correct in the
source and shuffled at runtime — the same shape `GeoExplorer` uses, so it is familiar and
the shuffle helper is already written.

```ts
export interface PlaceQuestion {
  q: BiText;
  /** Exactly 4. Index 0 is the correct answer in the data; the UI shuffles. */
  answers: [BiText, BiText, BiText, BiText];
  /** Shown after answering, right or wrong. This is where the learning lands. */
  explanation: BiText;
}
```

---

## City

```ts
export interface City {
  id: CityId;
  worldId: WorldId;

  name: BiText;
  country: BiText;
  /** ISO 3166-1 alpha-2, uppercase — 'GR', 'PT'. Drives the flag emoji. */
  countryCode: string;
  flag: string;

  /** 60–100 words: why this city is worth a child's afternoon. */
  intro: BiText;

  /** The illustrated map this city's places are pinned on. */
  map: CityMap;

  /** Display order in the city list. Lower first. */
  order: number;

  /** Places live in their own module and are joined by cityId — see "Files" below. */
}

export interface CityMap {
  /** SVG under public/images/world/maps/. */
  src: string;
  alt: BiText;
  /** The artwork's aspect ratio, so the container reserves space and nothing shifts. */
  width: number;
  height: number;
  /**
   * Geographic bounds the artwork covers, so a lat/lng can be projected onto it.
   * Only needed if pins are computed rather than hand-placed via Place.location.map.
   */
  bounds?: { north: number; south: number; east: number; west: number };
}
```

## World

A grouping above cities. One world, `europe`, is enough for v1; the level exists so a
second one does not require reshaping the data.

```ts
export interface World {
  id: WorldId;
  name: BiText;
  intro: BiText;
  emoji: string;
  order: number;
}
```

## Trail — optional, and the reason the module has a spine

A curated ordered subset of a city's places, themed. This is what turns a list of pins
into a session with a beginning and an end, and it is the natural home for a reward.

```ts
export interface Trail {
  id: TrailId;
  cityId: CityId;
  name: BiText;
  /** One line: what the child will have seen by the end. */
  promise: BiText;
  emoji: string;
  /** Ordered. 3–6 places is one sitting. */
  placeIds: PlaceId[];
}
```

Trails are additive: a city works with zero trails, and pins can always be visited freely.

---

## Files

Modelled on `data/units/registry.ts`, which is this repository's own answer to "a lot of
content, loaded lazily". Copy that shape rather than inventing one.

```
data/world/
  types.ts              the interfaces above
  registry.ts           WORLDS, CITIES, TRAILS, PLACE_COUNTS + loadCityPlaces(cityId)
  cities/
    athens.ts           Place[] — one module per city, dynamically imported
    lisbon.ts
    porto.ts
  world.test.ts         the invariants below
```

`registry.ts` holds only what the city list needs to render — names, flags, intros, and a
static count per city — plus a `loadCityPlaces(cityId)` that `import()`s a city's places
on demand. That split is not decoration: the School registry exists because chunks are
kept under the 1 MB PWA precache limit, and a city's worth of stories, facts and
questions is comfortably big enough to matter. A phone that opens Athens must not
download Lisbon and Porto.

Counts live in the registry as literals so the city list can say "12 places" before any
content module loads, exactly as `UNIT_COUNTS` does for School. A test asserts each
literal against the real array length, so the two cannot drift.

## Invariants the test file must enforce

These are cheap to check and they are exactly the failures this codebase produces.

1. Every `id` is unique within its type, and matches `/^[a-z0-9-]+$/`.
2. Every `Place.cityId` resolves to a `City`; every `City.worldId` resolves to a `World`;
   every `Trail.placeIds` entry resolves to a `Place` in the same city.
3. Every `BiText` has non-empty `el` **and** `en` — no placeholder, no copied-across
   Greek sitting in the `en` slot.
4. Every `PlaceQuestion.answers` has exactly 4 entries, all distinct within a language.
5. `lat` is within −90…90, `lng` within −180…180, and both are inside the city's `bounds`
   when bounds are declared.
6. No place ships with `confidence: 'D'`; anything above `'D'` has at least one `source`.
7. `Place.location.map.x` and `.y`, when present, are within 0…1.
8. Every `image.src` and `map.src` points at a file that exists under `public/`.

Rule 3 is not pedantry — a missing `en` is the single most common content bug in this
repo, and it ships silently because nothing type-checks an empty string.
