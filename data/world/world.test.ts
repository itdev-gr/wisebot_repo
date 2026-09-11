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
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { CITIES, CITY_IDS, COUNTRIES, PLACE_COUNTS, loadCity, translationsFor } from './registry';
import type { City, CityModule, Country } from './types';
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
    }
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
