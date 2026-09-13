/**
 * The country entry stamp costs a border.
 *
 * It used to be inked by arriving at a country's URL, so a child on a sofa in Athens
 * could collect twenty-five countries in a minute and the passport meant nothing. It now
 * asks the phone, exactly as «Είμαι εδώ!» does for a place.
 *
 * Two things are pinned here. The geometry — 150 km around a city we have content for,
 * generous because a country is not a circle, but nowhere near generous enough to reach
 * the next country. And the wiring: `enterCountry` must not be reachable from a route
 * effect, which is the shape the old bug had and the shape it would come back as.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { COUNTRY_RADIUS_M, isNearAny } from '../../utils/geo';
import { CITIES } from '../../data/world/registry';

const centresOf = (countryId: string) =>
  CITIES.filter((c) => c.countryId === countryId).map((c) => c.centre);

/** A good urban fix: about 12 metres, which is what a phone reports outdoors. */
const FIX = 12;

describe('how near counts as being in the country', () => {
  it('stamps a child standing in the city itself', () => {
    const rome = centresOf('italy')[0];
    expect(isNearAny(rome, FIX, centresOf('italy'), COUNTRY_RADIUS_M)).toBe(true);
  });

  it('stamps a child in the same country but not in the city', () => {
    // Fiesole, about 260 km from Rome but 6 km from Florence — and in Italy either way.
    // With only Rome written, the 150 km radius is what decides, so use a town near Rome:
    // Tivoli, 30 km east of the centre.
    const tivoli = { lat: 41.9634, lng: 12.7985 };
    expect(isNearAny(tivoli, FIX, centresOf('italy'), COUNTRY_RADIUS_M)).toBe(true);
  });

  it('does not stamp a child on a sofa in another country', () => {
    const athens = { lat: 37.9838, lng: 23.7275 };
    expect(isNearAny(athens, FIX, centresOf('italy'), COUNTRY_RADIUS_M)).toBe(false);
    expect(isNearAny(athens, FIX, centresOf('france'), COUNTRY_RADIUS_M)).toBe(false);
    expect(isNearAny(athens, FIX, centresOf('united-kingdom'), COUNTRY_RADIUS_M)).toBe(false);
  });

  it('stamps Greece for that same child, because that is where they are', () => {
    const athens = { lat: 37.9838, lng: 23.7275 };
    expect(isNearAny(athens, FIX, centresOf('greece'), COUNTRY_RADIUS_M)).toBe(true);
  });

  it('has nothing to be near in a country with no city written yet', () => {
    const empty = CITIES.length ? centresOf('japan') : [];
    expect(empty).toEqual([]);
    expect(isNearAny({ lat: 35.68, lng: 139.69 }, FIX, empty, COUNTRY_RADIUS_M)).toBe(false);
  });

  it('a wildly inaccurate fix cannot buy a stamp from across Europe', () => {
    // A desktop geolocating by IP reports kilometres of error. The accuracy forgiveness
    // is capped at 40 m for exactly this reason, so the answer stays no.
    const athens = { lat: 37.9838, lng: 23.7275 };
    expect(isNearAny(athens, 500_000, centresOf('italy'), COUNTRY_RADIUS_M)).toBe(false);
  });
});

describe('the stamp is not reachable from a route effect', () => {
  const world = readFileSync(join(__dirname, 'World.tsx'), 'utf8');

  it('awards the entry stamp in exactly one place', () => {
    expect(world.match(/enterCountry\(/g) ?? []).toHaveLength(1);
  });

  it('only awards it after a position has been checked', () => {
    // The award must sit below the distance test inside the same function. If somebody
    // re-adds an effect that stamps on arrival, this ordering breaks.
    const check = world.indexOf('isNearAny(');
    const award = world.indexOf('enterCountry(country)');
    expect(check, 'isNearAny is gone — did the location check get removed?').toBeGreaterThan(0);
    expect(award, 'enterCountry is gone').toBeGreaterThan(0);
    expect(award).toBeGreaterThan(check);
  });

  it('still says so at the top of the file', () => {
    expect(world.slice(0, 2000)).toMatch(/asks the phone where it is/);
  });

  it('never asks the phone without a tap', () => {
    // The city page may CHECK on arrival, but only when the family has already said
    // yes: a system sheet that pops up unasked in front of a child is how «Don't Allow»
    // gets tapped, and Safari then remembers it for the whole site. If this effect ever
    // calls attempt() unconditionally again, this is the test that says so.
    const start = world.indexOf('const countryIdForEntry');
    const end = world.indexOf('if (!city || !country || failed)');
    expect(start, 'the city-page entry effect is gone').toBeGreaterThan(0);
    expect(end).toBeGreaterThan(start);
    const effect = world.slice(start, end);
    expect(effect).toMatch(/state === 'granted'\) void attempt\(/);
    expect(effect).toMatch(/geoPermissionState\(\)/);
  });

  it('asks the phone in exactly one place', () => {
    // Everything that wants a position goes through attempt(); a second locateOnce()
    // would be a second prompt, or an answer thrown away.
    expect(world.match(/locateOnce\(/g) ?? []).toHaveLength(1);
  });

  it('gives each place its own card, so «you are here» cannot carry over to the next place', () => {
    // The route element is reused when only :placeId changes. Without the key, the
    // card's «here» survived into a place 2 km away with its question open — a stamp
    // with no position behind it, the same shape as the old entry-stamp bug.
    expect(world).toMatch(/<PlaceCard\s[^>]*key=\{place\.id\}/);
  });
});
