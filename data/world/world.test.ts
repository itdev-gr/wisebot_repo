/**
 * WiseBot World — the content invariants.
 *
 * These are the rules that cannot be enforced by the type system and that fail
 * silently in production if nobody checks them: a missing English string renders as
 * nothing, a riddle pointing at another museum's exhibit is unsolvable, two churches
 * on the same pin look fine in a data file and only break on the map.
 *
 * Everything here is a pure function over committed data. No network, no fixtures
 * beyond the repository's own, so it runs in milliseconds and can gate a build.
 *
 * The suite runs over every real city module AND over the development fixture, so the
 * fixture cannot drift away from the rules the real content has to satisfy.
 */

import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { CITIES, CITY_IDS, COUNTRIES, PLACE_COUNTS, loadCity, translationsFor } from './registry';
import type { City, CityModule, Country, Place } from './types';
import { WORLD_LANGS } from './types';
import * as fixture from './__fixtures__/sample';

const ROOT = resolve(__dirname, '../..');
const ID = /^[a-z0-9-]+$/;

/** Two distinct places closer than this share a pin, which is always a mistake. */
const MIN_SEPARATION_M = 25;

interface Bundle {
  label: string;
  countries: Country[];
  cities: City[];
  module: CityModule;
  city: City;
}

async function bundles(): Promise<Bundle[]> {
  const out: Bundle[] = [];

  for (const cityId of CITY_IDS) {
    const city = CITIES.find((c) => c.id === cityId);
    if (!city) continue; // caught separately below
    out.push({
      label: cityId,
      countries: COUNTRIES,
      cities: CITIES,
      city,
      module: await loadCity(cityId),
    });
  }

  out.push({
    label: 'fixture:sampletown',
    countries: [fixture.country],
    cities: fixture.cities,
    city: fixture.cities[0],
    module: { places: fixture.places, trails: fixture.trails },
  });

  return out;
}

// ------------------------------------------------------------------- helpers

/** Metres between two WGS84 points. Same haversine the resolver uses. */
function distanceM(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371008.8;
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** A LocText is any object carrying string `el` and `en`. Find every one of them. */
function walkLocTexts(value: unknown, path: string, found: Array<{ path: string; node: Record<string, unknown> }>): void {
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkLocTexts(item, `${path}[${i}]`, found));
    return;
  }
  if (!value || typeof value !== 'object') return;

  const node = value as Record<string, unknown>;
  if ('el' in node && 'en' in node) {
    found.push({ path, node });
    return; // a LocText has no nested content
  }
  for (const [key, child] of Object.entries(node)) {
    walkLocTexts(child, `${path}.${key}`, found);
  }
}

const words = (s: string): number => s.trim().split(/\s+/).filter(Boolean).length;

/** Every question a city asks: one per place, plus one per museum exhibit. */
function questionsOf(places: CityModule['places']): Array<{ id: string; q: Place['question'] }> {
  return [
    ...places.map((p) => ({ id: p.id, q: p.question })),
    ...places.flatMap((p) =>
      (p.museum?.rooms ?? []).flatMap((room) => room.exhibits.map((e) => ({ id: e.id, q: e.question }))),
    ),
  ];
}

/**
 * Answers within this many characters of the extreme count as the same length. The
 * strategy being measured is a child's eye, not a ruler: nobody scanning four options
 * sees that one is three characters longer than another. Counting a one-character lead
 * as exploitable would demand answers of near-identical width, which is a different and
 * much sillier rule than the one we want.
 */
const SAME = 4;

/**
 * How often a child who never reads the question wins by always tapping the longest —
 * or the shortest — of the four options. The correct answer is always `answers[0]`.
 *
 * A tie scores a fraction, because tapping into a three-way tie is a guess among three,
 * which is the honest way to score the strategy rather than counting it as a win.
 */
function giveawayRate(
  questions: Array<{ id: string; q: Place['question'] }>,
  lang: string,
  pick: 'longest' | 'shortest',
): { rate: number; worst: string[] } {
  let score = 0;
  const worst: string[] = [];

  for (const { id, q } of questions) {
    const lengths = q.answers.map((a) => ((a as Record<string, string>)[lang] ?? '').length);
    const target = pick === 'longest' ? Math.max(...lengths) : Math.min(...lengths);
    const within = (l: number) => (pick === 'longest' ? l >= target - SAME : l <= target + SAME);

    const tied = lengths.filter(within).length;
    if (within(lengths[0])) {
      score += 1 / tied;
      if (tied === 1) {
        const rest = lengths.slice(1);
        const lead =
          pick === 'longest' ? target - Math.max(...rest) : Math.min(...rest) - target;
        worst.push(`${id} (${pick === 'longest' ? '+' : '−'}${lead})`);
      }
    }
  }

  return { rate: questions.length ? score / questions.length : 0, worst };
}

/**
 * Forty per cent leaves room for the questions where the true answer is honestly the
 * longest or honestly the shortest; it does not leave room for a habit. Chance is 25%.
 */
const GIVEAWAY_LIMIT = 0.4;

/**
 * The sentence a failing giveaway test prints.
 *
 * Each direction has exactly one safe repair and they are not the same one, so the
 * message says which. Getting this backwards costs real work: lengthening the wrong
 * answers does nothing for a correct answer that is already the shortest of the four.
 *
 * The shortest case carries a warning the longest case does not need, and it was learnt
 * the expensive way. The only way to fix «the right answer is the shortest» is to bring
 * the three wrong ones DOWN towards it — padding the right one just trades this tell for
 * the other. But a distractor is very often padded WITH the very thing that makes it
 * false: the qualifier, the superlative, the invented detail. Trim that away and you are
 * left with a bare sentence that is simply true, and the question now has two right
 * answers. It has already happened — twenty distractors across three cities became true
 * statements, every mechanical check passed, and both strategies sat at chance. No test
 * can see this. A person has to read every distractor that lost a qualifier.
 */
const giveawayMessage = (
  label: string,
  lang: string,
  pick: 'longest' | 'shortest',
  rate: number,
  total: number,
  worst: string[],
): string =>
  `${label}/${lang}: tapping the ${pick} answer scores ${Math.round(rate * 100)}% of ${total} ` +
  `questions. ${
    pick === 'longest'
      ? 'Shorten the RIGHT answer and move its reason into the explanation; the knowledge is not lost, only the tell.'
      : 'Shorten the three WRONG answers towards the right one — never pad the right one. ' +
        'Then read every wrong answer you trimmed: the padding is often what made it false, ' +
        'and a trimmed distractor that has become true is a second right answer no test can see.'
  } Worst: ${worst.slice(0, 6).join(', ')}`;

/** Real neighbours declared in a city's seed file, so a true adjacency is on record. */
async function declaredAdjacent(cityId: string): Promise<Set<string>> {
  const path = resolve(ROOT, `scripts/world/seeds/${cityId}.json`);
  if (!existsSync(path)) return new Set();
  try {
    const seed = JSON.parse(await readFile(path, 'utf8')) as {
      adjacentPairs?: string[][];
    };
    return new Set((seed.adjacentPairs ?? []).map((pair) => [...pair].sort().join('|')));
  } catch {
    return new Set();
  }
}

// --------------------------------------------------------------------- suite

describe('world registry', () => {
  it('every city belongs to a country that exists', () => {
    for (const city of CITIES) {
      expect(COUNTRIES.some((c) => c.id === city.countryId), `${city.id} → ${city.countryId}`).toBe(true);
    }
  });

  it('every city with a content module is declared in a country file', () => {
    for (const id of CITY_IDS) {
      expect(CITIES.some((c) => c.id === id), `data/world/cities/${id}.ts has no City entry`).toBe(true);
    }
  });

  it('ids are unique and well formed', () => {
    const countryIds = COUNTRIES.map((c) => c.id);
    const cityIds = CITIES.map((c) => c.id);
    expect(new Set(countryIds).size).toBe(countryIds.length);
    expect(new Set(cityIds).size).toBe(cityIds.length);
    for (const id of [...countryIds, ...cityIds]) expect(id, id).toMatch(ID);
  });

  it('every country stamp is filled in', () => {
    for (const country of [...COUNTRIES, fixture.country]) {
      expect(country.stamp.legend.trim().length, country.id).toBeGreaterThan(0);
      expect(country.stamp.port.trim().length, country.id).toBeGreaterThan(0);
      expect(country.stamp.ink, country.id).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(country.code, country.id).toMatch(/^[A-Z]{2}$/);
    }
  });
});

describe('world content', async () => {
  const all = await bundles();

  for (const bundle of all) {
    const { label, module, city } = bundle;
    const places = module.places;

    describe(label, () => {
      it('has places, and each one belongs to this city', () => {
        expect(places.length).toBeGreaterThan(0);
        for (const place of places) expect(place.cityId, place.id).toBe(city.id);
      });

      it('place ids are unique, well formed and prefixed by the city', () => {
        const ids = places.map((p) => p.id);
        expect(new Set(ids).size).toBe(ids.length);
        for (const id of ids) {
          expect(id, id).toMatch(ID);
          expect(id.startsWith(`${city.id}-`), `${id} should start with ${city.id}-`).toBe(true);
        }
      });

      it('every string a child reads exists in Greek and English', () => {
        const found: Array<{ path: string; node: Record<string, unknown> }> = [];
        walkLocTexts({ places, trails: module.trails ?? [] }, label, found);
        expect(found.length).toBeGreaterThan(0);

        for (const { path, node } of found) {
          for (const lang of ['el', 'en'] as const) {
            const value = node[lang];
            expect(typeof value, `${path}.${lang}`).toBe('string');
            expect((value as string).trim().length, `${path}.${lang} is empty`).toBeGreaterThan(0);
          }
          // The classic silent bug: Greek copied into the English slot.
          expect(node.en, `${path}.en is identical to .el`).not.toBe(node.el);
        }
      });

      it('a language is either finished for a place or absent from it', () => {
        // Half a translation is worse than none. A child who picks German and reads a
        // German title over an English story, with a Greek fact underneath, is being
        // shown a broken app rather than an untranslated one. So an extra language is
        // all-or-nothing per place: the moment one string in a place carries `de`,
        // every string in that place must.
        const extra = WORLD_LANGS.filter((l) => l !== 'el' && l !== 'en');

        for (const place of places) {
          const found: Array<{ path: string; node: Record<string, unknown> }> = [];
          walkLocTexts(place, place.id, found);

          for (const lang of extra) {
            const have = found.filter((f) => typeof f.node[lang] === 'string' && (f.node[lang] as string).trim());
            if (have.length === 0) continue; // not translated at all: fine
            const missing = found.filter((f) => !have.includes(f));
            expect(
              missing.map((m) => m.path),
              `${place.id} is half-translated into ${lang}`,
            ).toEqual([]);
          }
        }
      });

      it('every question has four distinct answers', () => {
        const questions = [
          ...places.map((p) => ({ id: p.id, q: p.question })),
          ...places.flatMap((p) =>
            (p.museum?.rooms ?? []).flatMap((room) =>
              room.exhibits.map((e) => ({ id: e.id, q: e.question })),
            ),
          ),
        ];
        for (const { id, q } of questions) {
          expect(q.answers.length, id).toBe(4);
          for (const lang of ['el', 'en'] as const) {
            const texts = q.answers.map((a) => a[lang]);
            expect(new Set(texts).size, `${id}: duplicate ${lang} answers`).toBe(4);
          }
          expect(q.explanation.el.trim().length, id).toBeGreaterThan(0);
        }
      });

      it('the longest answer is not the right answer', () => {
        /**
         * A child who always taps the longest option, without reading the question,
         * should do no better than a child who guesses. Measured across the first four
         * cities, they scored 75% against a 25% chance baseline — and it was getting
         * worse, not better: 65% in Athens, the first city written, and 90% in Rhodes,
         * the fourth.
         *
         * The cause is structural rather than careless. A correct answer has to be both
         * true and understandable, so it carries its own reason: "Because it was easy to
         * defend and had a spring of its own." The three wrong ones have nothing to
         * explain and stay short. The right answer is visible before it is read.
         *
         * The fix is already in the schema. `explanation` shows after answering, and the
         * reason belongs there — shorten the answer, keep the knowledge. Nothing is lost
         * except the giveaway.
         */
        const questions = questionsOf(places);
        if (!questions.length) return;

        for (const lang of ['el', 'en'] as const) {
          const { rate, worst } = giveawayRate(questions, lang, 'longest');
          expect(
            Math.round(rate * 100),
            giveawayMessage(label, lang, 'longest', rate, questions.length, worst),
          ).toBeLessThanOrEqual(GIVEAWAY_LIMIT * 100);
        }
      });

      it('the shortest answer is not the right answer either', () => {
        /**
         * The mirror of the rule above, and it exists because fixing that one created
         * this one. Vienna was written after the authors were told to keep the correct
         * answer short, and overcorrected: the right answer was the shortest of the four
         * 88% of the time in Greek. It passed the longest-answer test at 0%, because the
         * suite was only ever looking one way. A child learns "tap the short one" exactly
         * as fast as they learn "tap the long one".
         *
         * The fix is never to pad the correct answer — that just trades one tell for the
         * other — but to give the three wrong answers the same weight as the right one.
         */
        const questions = questionsOf(places);
        if (!questions.length) return;

        for (const lang of ['el', 'en'] as const) {
          const { rate, worst } = giveawayRate(questions, lang, 'shortest');
          expect(
            Math.round(rate * 100),
            giveawayMessage(label, lang, 'shortest', rate, questions.length, worst),
          ).toBeLessThanOrEqual(GIVEAWAY_LIMIT * 100);
        }
      });

      it('every coordinate is real, sourced and inside the world', () => {
        for (const place of places) {
          const loc = place.location;
          expect(loc.lat, place.id).toBeGreaterThanOrEqual(-90);
          expect(loc.lat, place.id).toBeLessThanOrEqual(90);
          expect(loc.lng, place.id).toBeGreaterThanOrEqual(-180);
          expect(loc.lng, place.id).toBeLessThanOrEqual(180);
          expect(['A', 'B', 'C'], place.id).toContain(loc.confidence);
          expect(loc.sources.length, `${place.id} has no source`).toBeGreaterThan(0);
          expect(
            loc.sources.some((s) => s.kind === 'wikidata'),
            `${place.id}: the stored point must come from Wikidata, which is CC0`,
          ).toBe(true);
          expect(loc.verifiedAt, place.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);

          // An entrance has to have been measured, not wished for. Wikidata's P625 is
          // the centre of a building or a plot: the Panathenaic Stadium's centre sits
          // 127 m from its gate, and three sources agreeing on that centre graded it A
          // while sending a visitor to the wrong side of the fence. So 'entrance' is
          // only honest when a person looked the door up and recorded where from.
          if (loc.anchor === 'entrance') {
            expect(
              loc.sources.some((s) => s.kind === 'official' || s.kind === 'manual'),
              `${place.id} claims an entrance with no door measured — it is a centroid`,
            ).toBe(true);
          }
          if (loc.map) {
            expect(loc.map.x, place.id).toBeGreaterThanOrEqual(0);
            expect(loc.map.x, place.id).toBeLessThanOrEqual(1);
            expect(loc.map.y, place.id).toBeGreaterThanOrEqual(0);
            expect(loc.map.y, place.id).toBeLessThanOrEqual(1);
          }
        }
      });

      it('no two places share a pin unless the seed says they are neighbours', async () => {
        const allowed = await declaredAdjacent(city.id);
        for (let i = 0; i < places.length; i++) {
          for (let j = i + 1; j < places.length; j++) {
            const a = places[i];
            const b = places[j];
            const key = [a.id, b.id].sort().join('|');
            if (allowed.has(key)) continue;
            const d = distanceM(a.location, b.location);
            expect(
              d,
              `${a.id} and ${b.id} are ${Math.round(d)} m apart — same pin, two places`,
            ).toBeGreaterThanOrEqual(MIN_SEPARATION_M);
          }
        }
      });

      it('museums are internally consistent', () => {
        for (const place of places) {
          if (place.category === 'museum') {
            expect(place.museum, `${place.id} is a museum with no interior`).toBeDefined();
          }
          const museum = place.museum;
          if (!museum) continue;

          const exhibitIds = museum.rooms.flatMap((r) => r.exhibits.map((e) => e.id));
          expect(museum.rooms.length, place.id).toBeGreaterThan(0);
          expect(new Set(exhibitIds).size, `${place.id}: duplicate exhibit ids`).toBe(exhibitIds.length);

          for (const room of museum.rooms) {
            expect(room.id, room.id).toMatch(ID);
            expect(room.exhibits.length, `${room.id} has no exhibits`).toBeGreaterThan(0);
          }
          for (const riddle of museum.riddles) {
            expect(
              exhibitIds.includes(riddle.answerExhibitId),
              `${riddle.id} points at ${riddle.answerExhibitId}, which is not in this museum`,
            ).toBe(true);
          }
          const riddleIds = museum.riddles.map((r) => r.id);
          expect(new Set(riddleIds).size, `${place.id}: duplicate riddle ids`).toBe(riddleIds.length);
        }
      });

      it('every trail points at places of its own city', () => {
        for (const trail of module.trails ?? []) {
          expect(trail.cityId, trail.id).toBe(city.id);
          expect(trail.placeIds.length, trail.id).toBeGreaterThan(0);
          for (const id of trail.placeIds) {
            expect(places.some((p) => p.id === id), `${trail.id} → ${id}`).toBe(true);
          }
        }
      });

      it('stories and blurbs are written, not stubbed', () => {
        for (const place of places) {
          for (const lang of ['el', 'en'] as const) {
            const n = words(place.story[lang]);
            expect(n, `${place.id} story (${lang}) is ${n} words`).toBeGreaterThanOrEqual(60);
            expect(n, `${place.id} story (${lang}) is ${n} words`).toBeLessThanOrEqual(400);
          }
          expect(place.facts.length, place.id).toBeGreaterThanOrEqual(2);
          expect(place.facts.length, place.id).toBeLessThanOrEqual(4);
        }
      });

      it('every referenced local asset exists', () => {
        const srcs = [
          city.map.src,
          ...places.flatMap((p) => [
            p.image?.src,
            ...(p.museum?.rooms ?? []).flatMap((r) => r.exhibits.map((e) => e.image?.src)),
          ]),
        ].filter((s): s is string => Boolean(s));

        for (const src of srcs) {
          expect(src.startsWith('/'), `${src} must be an absolute path under public/`).toBe(true);
          // The city map artwork is allowed to be missing while a city is being built;
          // a place image that is referenced but absent is a broken image on screen.
          if (src === city.map.src) continue;
          expect(existsSync(resolve(ROOT, 'public', src.slice(1))), `missing asset: ${src}`).toBe(true);
        }
      });

      it('third-party images carry a visible credit', () => {
        const images = [
          ...places.map((p) => p.image),
          ...places.flatMap((p) =>
            (p.museum?.rooms ?? []).flatMap((r) => r.exhibits.map((e) => e.image)),
          ),
        ].filter(Boolean);

        for (const image of images) {
          if (!image?.credit) continue;
          expect(image.credit.text.trim().length).toBeGreaterThan(0);
          expect(image.credit.license.trim().length).toBeGreaterThan(0);
        }
      });
    });
  }

  /**
   * The overlays, checked through the loader that actually serves them.
   *
   * The per-place completeness rule above runs over the city module, which carries only
   * Greek and English — so it can never see a translation overlay and passed happily
   * while `athens.fr` held eight places out of eighteen. A rule that cannot observe the
   * thing it governs is decoration. This loads each city in each language that has an
   * overlay, exactly as the app does, and applies the rule to what comes out.
   */
  describe('translation overlays', async () => {
    const pairs = CITY_IDS.flatMap((cityId) =>
      translationsFor(cityId).map((lang) => ({ cityId, lang })),
    );

    if (pairs.length === 0) {
      it('none yet', () => expect(pairs).toEqual([]));
    }

    for (const { cityId, lang } of pairs) {
      it(`${cityId} is completely translated into ${lang}`, async () => {
        const base = await loadCity(cityId);
        const translated = await loadCity(cityId, lang);

        expect(translated.places.length, `${cityId}.${lang} lost or gained places`).toBe(
          base.places.length,
        );

        const untranslated: string[] = [];
        for (const place of translated.places) {
          const found: Array<{ path: string; node: Record<string, unknown> }> = [];
          walkLocTexts(place, place.id, found);
          for (const entry of found) {
            const value = entry.node[lang];
            if (typeof value !== 'string' || !value.trim()) untranslated.push(entry.path);
          }
        }

        expect(
          untranslated.slice(0, 12),
          `${cityId}.${lang}: ${untranslated.length} string(s) still untranslated`,
        ).toEqual([]);
      });

      /**
       * The same two giveaway rules, in the language the child actually reads.
       *
       * They used to run over the city module only, which carries Greek and English, so
       * an overlay could make every correct answer visibly the longest and still go
       * green. It was not hypothetical: Athens scored 63/57/56/56% and Rhodes 68/76/73/76%
       * across fr/de/es/it while the suite reported them clean, because a translator
       * naturally reproduces the reason inside the answer even when the Greek no longer
       * does. A rule that cannot observe the thing it governs is decoration.
       */
      it(`${cityId} does not give the answer away in ${lang}`, async () => {
        const translated = await loadCity(cityId, lang);
        const questions = questionsOf(translated.places);
        if (!questions.length) return;

        for (const pick of ['longest', 'shortest'] as const) {
          const { rate, worst } = giveawayRate(questions, lang, pick);
          expect(
            Math.round(rate * 100),
            giveawayMessage(cityId, lang, pick, rate, questions.length, worst),
          ).toBeLessThanOrEqual(GIVEAWAY_LIMIT * 100);
        }
      });

      it(`${cityId} has four distinct answers in ${lang}`, async () => {
        const translated = await loadCity(cityId, lang);
        for (const { id, q } of questionsOf(translated.places)) {
          const texts = q.answers.map((a) => (a as Record<string, string>)[lang]);
          expect(new Set(texts).size, `${id}: duplicate ${lang} answers`).toBe(4);
        }
      });
    }
  });

  /**
   * The city folder, the generated registry and the country files say the same thing.
   *
   * On 13 Σεπτεμβρίου a merge landed the seeds, the coordinates and the artwork for two
   * cities but not their modules, and `spain.ts` and `turkey.ts` kept their empty city
   * arrays. Every test passed: the suite iterates whatever the registry lists, so two
   * cities that had quietly stopped existing produced a green run over the nine that
   * remained. What noticed was `build-registry.mjs` printing «9 cities» where twelve were
   * expected.
   *
   * Be clear about what this catches and what it cannot. It catches a PARTIAL arrival —
   * a module without a country entry, a country naming a city with no module, a loader
   * key with no file — which is the likely shape when two sessions edit adjacent files.
   * It cannot catch a city that is wholly absent, because absence is internally
   * consistent. Only a number someone is expecting catches that, which is why the
   * delivering session states the city count and the merging session checks it.
   */
  it('every city module, registry entry and country declaration agree', async () => {
    const dir = resolve(ROOT, 'data/world/cities');
    const onDisk = (await readdir(dir))
      .filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts'))
      .map((f) => f.replace(/\.ts$/, ''))
      .sort();

    const registered = [...CITY_IDS].sort();
    const declared = [...new Set(CITIES.map((c) => c.id))].sort();

    // The two directions the older tests above do not cover: a module on disk that the
    // generated loaders never picked up, and a City a country declares with no loader
    // behind it. Together with them, all four directions are now closed.
    expect(registered, 'data/world/cities/*.ts and the registry loaders disagree').toEqual(onDisk);
    expect(declared, 'the registry loaders and the countries’ city arrays disagree').toEqual(
      registered,
    );
  });

  /**
   * A place's location says exactly what the resolver said.
   *
   * `data/world/coords/<city>.json` is the resolver's output and the audit trail: which
   * sources agreed, how far apart they were, what grade that earned, when it was checked.
   * The city file copies that block. Nothing in this suite has ever read the coords folder,
   * so the two could disagree for as long as nobody looked — and they did. Eight London
   * places claim an `osm` source and an A grade that the committed json does not have,
   * because the json was regenerated during an Overpass outage after the city file was
   * written and nobody re-synced. It survived two merges.
   *
   * No child is sent anywhere wrong by that: every latitude and longitude matches. What
   * breaks is the provenance — the file claims a confidence it cannot show its working
   * for, which is the one thing brief §19 says a record may never do.
   *
   * Only the resolver's own fields are compared. `map`, `findIt` and `note` are authored
   * by hand in the city file and have no business in the json.
   */
  it('every place location matches its coords file, field for field', async () => {
    const drift: string[] = [];

    for (const bundle of all) {
      if (bundle.label.startsWith('fixture:')) continue;
      const path = resolve(ROOT, `data/world/coords/${bundle.city.id}.json`);
      if (!existsSync(path)) continue; // a city may ship before its audit trail is committed

      const resolved = JSON.parse(await readFile(path, 'utf8')) as {
        places: Array<{
          id: string;
          lat: number;
          lng: number;
          anchor?: string;
          confidence?: string;
          verifiedAt?: string;
          sources?: Array<{ kind: string; ref: string; deltaM?: number }>;
        }>;
      };
      const byId = new Map(resolved.places.map((p) => [p.id, p]));

      for (const place of bundle.module.places) {
        const r = byId.get(place.id);
        if (!r) {
          drift.push(`${place.id}: no entry in coords/${bundle.city.id}.json`);
          continue;
        }
        const loc = place.location as unknown as Record<string, unknown>;
        const say = (field: string, a: unknown, b: unknown) =>
          drift.push(`${place.id}.${field}: file ${JSON.stringify(a)} vs coords ${JSON.stringify(b)}`);

        if (loc.lat !== r.lat) say('lat', loc.lat, r.lat);
        if (loc.lng !== r.lng) say('lng', loc.lng, r.lng);
        if (loc.anchor !== r.anchor) say('anchor', loc.anchor, r.anchor);
        if (loc.confidence !== r.confidence) say('confidence', loc.confidence, r.confidence);
        if (loc.verifiedAt !== r.verifiedAt) say('verifiedAt', loc.verifiedAt, r.verifiedAt);

        // Sources are the working behind the grade, so order and deltas count too.
        const fmt = (s: Array<{ kind: string; ref: string; deltaM?: number }> = []) =>
          s.map((x) => `${x.kind}:${x.ref}:${x.deltaM ?? 0}`).join(' | ');
        const mine = fmt(loc.sources as Array<{ kind: string; ref: string; deltaM?: number }>);
        const theirs = fmt(r.sources);
        if (mine !== theirs) say('sources', mine, theirs);
      }
    }

    /**
     * Two drifts exist today, both found by this test the first time it ran, neither
     * fixable by the session that can see them. They are named here rather than left to
     * make the gate unmergeable, because a gate that waits for an outage protects nothing
     * in the meantime — and this one exists precisely because London drifted through two
     * merges while nothing was watching.
     *
     * The list is EXACT. An entry that stops drifting fails this test just as loudly as
     * new drift does, so fixing London forces its eight lines out of here rather than
     * leaving a stale licence behind.
     *
     *   london ×8   the city file carries an `osm` source and an A grade that the
     *               committed json does not. The json is the degraded run: it was
     *               regenerated during an Overpass outage after the city file was
     *               written. The FILE is right and the json is poorer. Fix is one
     *               resolver run once Overpass is properly back, then sync — never by
     *               hand-editing the grade down to match a worse run.
     * Rome's three curly apostrophes were fixed on 14/9 and are gone from this list,
     * which is the list working as intended: the entries had to be deleted before the
     * suite would pass again.
     *
     * London was attempted the same day and could not be fixed. Overpass answers a single
     * query but fails roughly half of a seventeen-query batch: three runs returned 8, 9
     * and 8 places with an OSM cross-check, never all seventeen, and each run moved the
     * drift to a different set of places rather than shrinking it. Committing any of them
     * would have traded a known inconsistency for a churning one, so the committed json
     * stands. This needs a genuinely stable Overpass, not another attempt.
     *
     * Every latitude and longitude in both agrees. No child is sent anywhere wrong; what
     * is wrong is the provenance, which brief §19 says a record may never overstate.
     */
    const KNOWN = [
      'london-westminster-abbey', 'london-st-pauls-cathedral', 'london-tower-of-london',
      'london-tower-bridge', 'london-science-museum', 'london-monument',
      'london-borough-market', 'london-cutty-sark',
    ];

    const drifted = [...new Set(drift.map((d) => d.split('.')[0]))].sort();
    const unexpected = drifted.filter((id) => !KNOWN.includes(id));
    const fixed = KNOWN.filter((id) => !drifted.includes(id)).sort();

    expect(
      unexpected,
      `${unexpected.length} place(s) newly disagree with their coords file. The json is the ` +
        `resolver's output and the city file copies it — re-run the resolver and sync, never ` +
        `hand-edit either to match the other. Detail:\n${drift
          .filter((d) => unexpected.includes(d.split('.')[0]))
          .slice(0, 20)
          .join('\n')}`,
    ).toEqual([]);

    expect(
      fixed,
      `these places no longer drift — delete them from KNOWN in this test, the licence is stale`,
    ).toEqual([]);
  });

  it('the registry place counts match the real arrays', async () => {
    for (const bundle of all) {
      if (bundle.label.startsWith('fixture:')) continue;
      expect(PLACE_COUNTS[bundle.city.id], `PLACE_COUNTS.${bundle.city.id}`).toBe(
        bundle.module.places.length,
      );
    }
  });
});
