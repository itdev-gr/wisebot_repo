/**
 * The two pure halves of the World passport sync: the union merge, and the derivation
 * that turns stamps back into seals.
 *
 * Neither touches Supabase, so these run without a network or a session. What they pin is
 * the pair of rules that make cross-device merging safe — a stamp can only widen, and a
 * seal is never stored twice — plus the rule the spec cares about most: merging must not
 * be able to pay a child again.
 */

import { describe, expect, it } from 'vitest';
import { deriveFromStamps, mergeWorldStamps } from './worldStampsSync';
import { EMPTY_WORLD_PROGRESS, type PlaceStamp, type WorldProgress } from '../components/world/worldProgressStore';
import { CITIES, PLACE_COUNTS } from '../data/world/registry';

const stamp = (at: string, correct = false): PlaceStamp => ({ at, correct });

const progressWith = (places: Record<string, PlaceStamp>): WorldProgress => ({
  ...EMPTY_WORLD_PROGRESS,
  places,
});

/** Every place id of a city, the way the ids are actually shaped: `<cityId>-<slug>`. */
const idsFor = (cityId: string, n: number): string[] =>
  Array.from({ length: n }, (_, i) => `${cityId}-p${i + 1}`);

describe('mergeWorldStamps', () => {
  it('keeps the local onSite flag when both sides hold the stamp', () => {
    // world_stamps has no column for it, so the cloud copy never carries one. Rebuilding
    // the merged stamp from `at` and `correct` alone erased it on every sign-in.
    const merged = mergeWorldStamps(
      { 'rome-a': { at: '2026-09-05', correct: false, onSite: true } },
      { 'rome-a': { at: '2026-09-01', correct: true } },
    );
    expect(merged['rome-a']).toEqual({ at: '2026-09-01', correct: true, onSite: true });
  });

  it('does not invent onSite for a stamp that exists only in the cloud', () => {
    const merged = mergeWorldStamps({}, { 'rome-a': { at: '2026-09-01', correct: true } });
    expect('onSite' in merged['rome-a']).toBe(false);
  });

  it('keeps a stamp that only one side has, from either side', () => {
    const merged = mergeWorldStamps(
      { 'rome-a': stamp('2026-09-01') },
      { 'paris-b': stamp('2026-09-02') },
    );
    expect(Object.keys(merged).sort()).toEqual(['paris-b', 'rome-a']);
  });

  it('keeps the earliest visit date, whichever side it came from', () => {
    expect(
      mergeWorldStamps({ 'rome-a': stamp('2026-09-05') }, { 'rome-a': stamp('2026-09-01') })['rome-a'].at,
    ).toBe('2026-09-01');
    expect(
      mergeWorldStamps({ 'rome-a': stamp('2026-09-01') }, { 'rome-a': stamp('2026-09-05') })['rome-a'].at,
    ).toBe('2026-09-01');
  });

  it('treats correct as a high-water mark that a later wrong answer cannot lower', () => {
    expect(
      mergeWorldStamps({ 'rome-a': stamp('2026-09-01', true) }, { 'rome-a': stamp('2026-09-02', false) })['rome-a'].correct,
    ).toBe(true);
    expect(
      mergeWorldStamps({ 'rome-a': stamp('2026-09-01', false) }, { 'rome-a': stamp('2026-09-02', true) })['rome-a'].correct,
    ).toBe(true);
  });

  it('never drops a stamp the local side had', () => {
    const local = { 'rome-a': stamp('2026-09-01'), 'rome-b': stamp('2026-09-02') };
    expect(Object.keys(mergeWorldStamps(local, {})).sort()).toEqual(['rome-a', 'rome-b']);
  });

  it('drops malformed entries rather than writing them to the passport', () => {
    const merged = mergeWorldStamps(
      { 'rome-a': stamp('2026-09-01'), 'rome-bad': { at: '', correct: false } },
      { 'rome-worse': { at: '2026-09-01', correct: 'yes' as unknown as boolean } },
    );
    expect(Object.keys(merged)).toEqual(['rome-a']);
  });

  it('rejects a place id longer than the column allows', () => {
    const merged = mergeWorldStamps({ ['x'.repeat(121)]: stamp('2026-09-01') }, {});
    expect(merged).toEqual({});
  });
});

describe('deriveFromStamps', () => {
  const city = CITIES[0];
  const total = PLACE_COUNTS[city.id];

  it('seals a city once every one of its places is stamped', () => {
    const places = Object.fromEntries(idsFor(city.id, total).map((id) => [id, stamp('2026-09-01')]));
    expect(deriveFromStamps(progressWith(places)).citiesDone).toContain(city.id);
  });

  it('does not seal a city one place short', () => {
    const places = Object.fromEntries(idsFor(city.id, total - 1).map((id) => [id, stamp('2026-09-01')]));
    expect(deriveFromStamps(progressWith(places)).citiesDone).not.toContain(city.id);
  });

  it('seals a country only when every one of its cities is sealed', () => {
    const cityIds = CITIES.filter((c) => c.countryId === city.countryId).map((c) => c.id);
    const partial = Object.fromEntries(idsFor(city.id, total).map((id) => [id, stamp('2026-09-01')]));
    const derivedPartial = deriveFromStamps(progressWith(partial));
    if (cityIds.length > 1) {
      expect(derivedPartial.countriesDone).not.toContain(city.countryId);
    }

    const all = Object.fromEntries(
      cityIds.flatMap((id) => idsFor(id, PLACE_COUNTS[id] ?? 0)).map((id) => [id, stamp('2026-09-01')]),
    );
    expect(deriveFromStamps(progressWith(all)).countriesDone).toContain(city.countryId);
  });

  it('gives a country an entry date when stamps are the only evidence left', () => {
    const places = { [`${city.id}-p1`]: stamp('2026-09-03'), [`${city.id}-p2`]: stamp('2026-09-01') };
    expect(deriveFromStamps(progressWith(places)).entries[city.countryId]).toBe('2026-09-01');
  });

  it('never moves an entry date the device already printed on a stamp', () => {
    const places = { [`${city.id}-p1`]: stamp('2026-09-01') };
    const before: WorldProgress = { ...progressWith(places), entries: { [city.countryId]: '2026-08-20' } };
    expect(deriveFromStamps(before).entries[city.countryId]).toBe('2026-08-20');
  });

  it('leaves a passport with no stamps completely alone', () => {
    expect(deriveFromStamps({ ...EMPTY_WORLD_PROGRESS })).toEqual({ ...EMPTY_WORLD_PROGRESS });
  });

  it('keeps seals the device already had, even for a city it cannot count', () => {
    const before: WorldProgress = { ...EMPTY_WORLD_PROGRESS, citiesDone: ['some-retired-city'] };
    expect(deriveFromStamps(before).citiesDone).toContain('some-retired-city');
  });

  it('does not invent XP or any other field — derivation only widens three of them', () => {
    const places = { [`${city.id}-p1`]: stamp('2026-09-01') };
    const before = progressWith(places);
    const after = deriveFromStamps(before);
    expect(after.places).toEqual(before.places);
    expect(after.exhibits).toEqual(before.exhibits);
    expect(after.riddles).toEqual(before.riddles);
    expect(after.trailsDone).toEqual(before.trailsDone);
    expect(after.v).toBe(before.v);
  });
});
