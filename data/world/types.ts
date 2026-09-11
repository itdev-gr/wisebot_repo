/**
 * WiseBot World — the content model.
 *
 * This file is the contract between the two sessions building World. The engine
 * session owns every screen and never writes content; the content session writes
 * `data/world/cities/<city>.ts` and never opens a component. Both compile against
 * these types, so the types are frozen: adding a field is fine, changing or removing
 * one is a decision to raise, not a change to make.
 *
 * Three rules are encoded in the types themselves rather than left to review:
 *
 *  1. `LocText` requires `el` and `en`. The app has no fallback chain, so a missing
 *     string renders as nothing at all. The other four languages are optional and may
 *     land city by city.
 *  2. `PlaceLocation.confidence` has no `'D'` member. A D means the sources disagree
 *     about where the place is; the resolver may emit one, the shipped data cannot
 *     hold one.
 *  3. A riddle is answered by tapping an exhibit, never by typing. An answer that is
 *     a piece of text would need translating into six languages and would then need
 *     six spellings, six accent rules and six ways of being nearly right.
 *
 * Progress and stamps are NOT here. They live in `hooks/useWorldProgress.ts`, which
 * the engine session owns, so that the content session's contract stays this file.
 */

// ---------------------------------------------------------------- languages

/**
 * World content ships in six languages. The rest of the app stays `'el' | 'en'` and
 * is not touched: widening that union would mean editing every component in the tree,
 * all 22 games and all 34 books.
 */
export type WorldLang = 'el' | 'en' | 'de' | 'fr' | 'es' | 'it';

export const WORLD_LANGS: readonly WorldLang[] = ['el', 'en', 'de', 'fr', 'es', 'it'];

/** Greek and English are mandatory. The other four are optional, per string. */
export type LocText = { el: string; en: string } & Partial<Record<WorldLang, string>>;

/**
 * Read a localised string. Always use this rather than `text[lang]` — the four
 * optional languages are genuinely absent while a city is being translated, and an
 * index straight into the object returns `undefined`, which React renders as nothing.
 */
export function pick(text: LocText, lang: string): string {
  const value = (text as Record<string, string | undefined>)[lang];
  return value ?? text.en ?? text.el;
}

// ------------------------------------------------------------------ ids

/**
 * Stable, lowercase, hyphenated, prefixed by their parent. Ids are the contract with
 * a child's saved passport: renaming one silently erases their stamps, so treat every
 * id as permanent from the commit that introduces it.
 */
export type CountryId = string; // 'greece'
export type CityId = string; // 'athens'
export type PlaceId = string; // 'athens-acropolis'
export type RoomId = string; // 'athens-acropolis-museum-parthenon-gallery'
export type ExhibitId = string; // 'athens-acropolis-museum-caryatids'
export type RiddleId = string; // 'athens-acropolis-museum-riddle-1'
export type TrailId = string; // 'athens-ancient-day'

// ------------------------------------------------------------- shared bits

export interface PlaceImage {
  /** Path under `public/images/world/`. Local asset — never a hotlink. */
  src: string;
  alt: LocText;
  /** Required when the image is not ours. Rendered in the UI, not merely stored. */
  credit?: { text: string; license: string; url?: string };
}

/**
 * One question, four options, index 0 correct in the data and shuffled at runtime.
 * Deliberately not the full quiz engine — this is the same shape `GeoExplorer` uses,
 * so the shuffle helper already exists.
 */
export interface Question {
  q: LocText;
  /** Exactly four, all distinct within each language. */
  answers: [LocText, LocText, LocText, LocText];
  /** Shown after answering, right or wrong. This is where the learning lands. */
  explanation: LocText;
}

// --------------------------------------------------------------- location

/**
 * Where the place is, and how much to trust it.
 *
 * The stored `lat`/`lng` always comes from Wikidata, which is CC0 and therefore free
 * to ship. OpenStreetMap (ODbL) and Wikipedia (CC BY-SA) are used to check it, and
 * only the DISTANCE from our point is recorded, never their coordinates — that keeps
 * the audit trail honest without pulling a share-alike obligation into our data.
 *
 * Produced by `scripts/world/resolve-coords.mjs`. Never typed by hand.
 */
export interface PlaceLocation {
  /** WGS84, five decimal places, about a metre. */
  lat: number;
  lng: number;

  /**
   * What the point actually IS — not what we wish it were, and not what the seed hoped.
   *
   * `entrance` may only be claimed when somebody measured the door and recorded where
   * they got it from, which means a `source` of kind `'official'` or `'manual'`. The
   * test file enforces that, because the first forty places in this module declared
   * twenty-seven entrances and had measured exactly zero doors: every one of them was
   * a Wikidata P625, the centre of a building or a plot. The Panathenaic Stadium's
   * centre is 127 m from its gate, and three sources agreed on it perfectly, so it
   * graded A while sending a visitor to the wrong side of the fence.
   *
   * A door cannot be taken from OpenStreetMap. OSM is ODbL, and copying its entrance
   * nodes into these files would make this a derivative database and pull share-alike
   * along with it. OSM is how we DETECT a wrong pin; it is not how we fix one.
   */
  anchor: 'entrance' | 'centroid' | 'viewpoint' | 'area';

  /**
   * A = three independent sources within 30 m
   * B = two within 30 m
   * C = one source only
   * There is no D. A D means the sources disagree and the place does not ship.
   */
  confidence: 'A' | 'B' | 'C';

  sources: LocationSource[];

  /** ISO date of the last verification pass, so a stale check is visible. */
  verifiedAt: string;

  /** For the next person: a moved entrance, a known ambiguity, a closure. */
  note?: string;

  /**
   * How to find the door, in words a child can use while standing there.
   *
   * «Η είσοδος είναι απέναντι από το άγαλμα του Δισκοβόλου.» That is how the
   * Panathenaic Stadium's own site gives its address, and it is better than a
   * coordinate rather than a substitute for one: an eight-year-old does not read
   * latitude, they look around for a statue of a man throwing a discus.
   *
   * It sits beside the coordinate rather than inside `Museum` because it belongs to
   * the location, not to the building's opening hours — `Museum.doorNote` is for what
   * a visitor should know before going in, which is a different sentence. A hill or a
   * park can have one of these; neither has a museum.
   *
   * It is also the one part of the entrance problem with no licence attached. A
   * sentence in our own words, from the venue's own page, is not a coordinate, not a
   * database and not anyone's imagery — so it can land today, while the coordinate
   * waits for a source we are allowed to use.
   */
  findIt?: LocText;

  /** Position on the illustrated city map, 0–1 of the artwork's width and height. */
  map?: { x: number; y: number };
}

export interface LocationSource {
  /**
   * `official` is the venue's own page; `manual` is a person who looked and wrote it
   * down. Those two are the only kinds that can justify an `entrance` anchor, because
   * they are the only two that describe a door rather than a building.
   */
  kind: 'wikidata' | 'osm' | 'wikipedia' | 'official' | 'manual';
  /** Q-number, OSM type/id, article title, or a URL. */
  ref: string;
  /** Metres from the stored point. Zero for the source the point came from. */
  deltaM: number;
}

// ----------------------------------------------------------------- museums

/**
 * A museum's interior. This is what makes a museum different from a viewpoint: the
 * child goes in, walks a few rooms, meets specific objects, and then has to find one
 * of them again from a riddle.
 */
export interface Museum {
  /** Two to five. A room is one sitting. */
  rooms: MuseumRoom[];
  /** Two to four, answered by tapping an exhibit in any of this museum's rooms. */
  riddles: Riddle[];
  /** One line on the museum's door card: what a visitor should know before going in. */
  doorNote?: LocText;
}

export interface MuseumRoom {
  id: RoomId;
  name: LocText;
  emoji: string;
  /** 40–80 words. What this room is for, in WiseBot's voice. */
  intro: LocText;
  /** Three to six. More than six and a room stops being one sitting. */
  exhibits: Exhibit[];
}

export interface Exhibit {
  id: ExhibitId;
  name: LocText;
  /** 60–120 words about this object. True, checkable, and about the object itself. */
  blurb: LocText;
  image?: PlaceImage;
  /** One question per exhibit, worth XP once. */
  question: Question;
}

/**
 * A riddle describes one exhibit without naming it; the child finds it and taps it.
 * No typing, so no spelling, no accents and no six-way translation of what counts as
 * a correct answer.
 */
export interface Riddle {
  id: RiddleId;
  /** 20–45 words, first person, from the object's point of view. */
  prompt: LocText;
  /** One nudge, shown on request. Costs nothing. */
  hint: LocText;
  /** Must be an exhibit inside this same museum. */
  answerExhibitId: ExhibitId;
  difficulty: 1 | 2 | 3;
}

// ------------------------------------------------------------------ place

export type PlaceCategory =
  | 'landmark'
  | 'museum'
  | 'nature'
  | 'science'
  | 'art'
  | 'history'
  | 'food'
  | 'sport';

export interface PlaceLinks {
  /** An Academy course id whose story touches this place. */
  academyCourseId?: string;
  /** A book id from `data/bookMetadata.ts`. */
  bookId?: number;
  /** A School unit id from `data/units/`. */
  unitId?: string;
}

/** One real place a child can visit. The unit of the whole module. */
export interface Place {
  id: PlaceId;
  cityId: CityId;

  name: LocText;
  /** One line under the title on the card. Up to 12 words. */
  tagline: LocText;
  /** 120–220 words in WiseBot's voice, true and checkable. This earns the stamp. */
  story: LocText;
  /** Two to four short chips. Each independently verifiable on its own. */
  facts: LocText[];

  /** The cheap visual, always present, even when there is no artwork yet. */
  emoji: string;
  image?: PlaceImage;

  category: PlaceCategory;
  /** How demanding the story and question are. Drives ordering, never gating. */
  difficulty: 1 | 2 | 3;

  location: PlaceLocation;
  question: Question;

  /** Present only when `category` is `'museum'`. This is the inside of the building. */
  museum?: Museum;

  links?: PlaceLinks;
}

// ------------------------------------------------------------------ trail

/** A curated, ordered, themed subset of a city. Three to six places is one sitting. */
export interface Trail {
  id: TrailId;
  cityId: CityId;
  name: LocText;
  /** One line: what the child will have seen by the end. */
  promise: LocText;
  emoji: string;
  placeIds: PlaceId[];
}

// ------------------------------------------------------------------- city

export interface CityMap {
  /** SVG under `public/images/world/maps/`. */
  src: string;
  alt: LocText;
  /** The artwork's aspect ratio, so the container reserves space and nothing shifts. */
  width: number;
  height: number;
  /** Geographic bounds the artwork covers, when pins are projected rather than placed. */
  bounds?: { north: number; south: number; east: number; west: number };
}

export interface City {
  id: CityId;
  countryId: CountryId;

  name: LocText;
  /** 60–100 words: why this city is worth a child's afternoon. */
  intro: LocText;
  emoji: string;

  map: CityMap;

  /** The city's own centre point, used by the coordinate audit. */
  centre: { lat: number; lng: number };

  /** Display order within the country. Lower first. */
  order: number;
}

// ---------------------------------------------------------------- country

/**
 * The passport stamp a child gets for entering the country.
 *
 * Deliberately not localised. A real stamp is inked in the country's own language,
 * and that is exactly what makes a passport feel like a passport — a Greek child
 * seeing ΕΛΛΑΣ, then РОССИЯ, then مصر is the point of the object.
 */
export interface CountryStamp {
  /** The country as it appears on its own stamps, e.g. 'ΕΛΛΑΣ · HELLAS'. */
  legend: string;
  /** The second line, normally the port of entry, e.g. 'ΑΘΗΝΑΙ ATHINAI'. */
  port: string;
  shape: 'circle' | 'rectangle' | 'oval' | 'triangle';
  /** Ink colour as a hex string. Real stamps are rarely black. */
  ink: string;
}

export type Continent = 'europe' | 'asia' | 'africa' | 'americas' | 'oceania';

export interface Country {
  id: CountryId;
  /** ISO 3166-1 alpha-2, uppercase. 'GR', 'PT', 'JP'. */
  code: string;
  flag: string;
  continent: Continent;

  name: LocText;
  /** 60–100 words: why a child would want to go there. */
  intro: LocText;
  /** Two to four chips about the country itself, not about any one city. */
  facts: LocText[];

  stamp: CountryStamp;

  /** Display order in the world list. Lower first. */
  order: number;
}

// --------------------------------------------------------------- registry

/**
 * Content is split across two kinds of module, and the split is about weight rather
 * than tidiness.
 *
 * A country module is small and is bundled eagerly, because the world list has to draw
 * twenty flags and forty-five city cards before the child has chosen anything. So the
 * CITY METADATA LIVES IN THE COUNTRY FILE, not in the city's own file: names, intros,
 * map artwork and centre points are what the list needs, and they are a few kilobytes.
 *
 * A city module is heavy — fifteen stories, two museum interiors, six languages — and
 * is imported only when that city is opened. Opening Athens must not download Tokyo.
 *
 * `scripts/world/build-registry.mjs` reads both folders and regenerates `registry.ts`,
 * so no shared list is ever hand-edited and the two sessions never touch one file.
 */
export interface CountryModule {
  country: Country;
  /** Every city of this country. Metadata only; their places live in city modules. */
  cities: City[];
}

/** `data/world/cities/<city>.ts` exports exactly these two names and nothing else. */
export interface CityModule {
  places: Place[];
  trails?: Trail[];
}

/**
 * One extra language for one city, as `data/world/i18n/<city>.<lang>.json`.
 *
 * A city module carries Greek and English. Every other language lives in its own file
 * and is merged in at load time, for three reasons that all point the same way:
 *
 *  - **Weight.** A Greek child never downloads the German text. Six languages in one
 *    module would multiply every city chunk by three.
 *  - **Parallel work.** Four translators can work on one city at once without ever
 *    opening the same file, and neither of them opens the file the author is writing.
 *  - **Honesty.** A missing overlay is obviously missing. A half-filled `LocText`
 *    buried in a thousand-line module is not.
 *
 * Keyed by id all the way down, never by array position, so inserting a place into a
 * city cannot silently shift its translation onto its neighbour.
 */
export interface CityTranslation {
  /** The language this file supplies. Must match the filename. */
  lang: WorldLang;
  cityId: CityId;
  places: Record<PlaceId, PlaceTranslation>;
  trails?: Record<TrailId, { name?: string; promise?: string }>;
}

export interface PlaceTranslation {
  name?: string;
  tagline?: string;
  story?: string;
  /** `location.findIt` — how to find the door, in this language. */
  findIt?: string;
  /** Same order and length as the place's own `facts`. */
  facts?: string[];
  question?: QuestionTranslation;
  museum?: {
    doorNote?: string;
    rooms?: Record<RoomId, { name?: string; intro?: string }>;
    exhibits?: Record<ExhibitId, { name?: string; blurb?: string; question?: QuestionTranslation }>;
    riddles?: Record<RiddleId, { prompt?: string; hint?: string }>;
  };
}

/**
 * Every country's own words in one language, as `data/world/i18n/countries.<lang>.json`.
 *
 * Separate from the city overlays, and shaped differently on purpose. A city overlay is
 * heavy and is fetched only when that city is opened; this is the front door — twenty
 * flags, twenty intros and forty-five city cards, all on screen before the child has
 * chosen anything. Splitting it per country would mean twenty requests to draw one
 * list, so it is one small file per language instead.
 *
 * City NAMES and INTROS live here rather than in the city overlay for the same reason:
 * the country page lists its cities and must be able to say «Αθήνα» in the child's
 * language without downloading Athens.
 */
export interface CountriesTranslation {
  lang: WorldLang;
  countries: Record<CountryId, CountryTranslation>;
}

export interface CountryTranslation {
  name?: string;
  intro?: string;
  /** Same order and length as the country's own `facts`. */
  facts?: string[];
  cities?: Record<CityId, { name?: string; intro?: string }>;
}

export interface QuestionTranslation {
  q?: string;
  /** Exactly four, in the same order as the source, so index 0 stays the correct one. */
  answers?: [string, string, string, string];
  explanation?: string;
}

export interface WorldRegistry {
  countries: Country[];
  cities: City[];
  /** Place count per city, as a literal, so the city list renders before content loads. */
  placeCounts: Record<CityId, number>;
  /** Dynamic import per city, so opening Athens does not download Tokyo. */
  loadCity(cityId: CityId): Promise<CityModule>;
}
