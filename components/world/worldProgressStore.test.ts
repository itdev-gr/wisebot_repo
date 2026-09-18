// @vitest-environment jsdom

/**
 * The passport survives a version change.
 *
 * The reader used to discard any stored object whose `v` did not match the current one,
 * so a schema bump was a silent wipe of every child's passport on every device. These
 * pin the replacement: an older passport is migrated, a newer or unreadable one is
 * salvaged field by field, and only garbage comes back empty.
 */

import { afterEach, describe, expect, it } from 'vitest';
import {
  EMPTY_WORLD_PROGRESS,
  WORLD_PROGRESS_KEY,
  WORLD_PROGRESS_VERSION,
  migrateWorldProgress,
  readWorldProgress,
  writeWorldProgress,
  type WorldProgress,
} from './worldProgressStore';

const store = (value: unknown) =>
  localStorage.setItem(WORLD_PROGRESS_KEY, typeof value === 'string' ? value : JSON.stringify(value));

afterEach(() => localStorage.clear());

const ROME = { 'rome-colosseum': { at: '2026-09-12', correct: true } };

describe('what a stored passport becomes', () => {
  it('keeps a v1 passport: its stamps, its trails and its cities', () => {
    // The shape spec 02 describes for v1: places, trailsDone, citiesDone, nothing else.
    store({ v: 1, places: ROME, trailsDone: ['rome-ancient'], citiesDone: ['rome'] });
    const p = readWorldProgress();
    expect(p.v).toBe(WORLD_PROGRESS_VERSION);
    expect(p.places).toEqual(ROME);
    expect(p.trailsDone).toEqual(['rome-ancient']);
    expect(p.citiesDone).toEqual(['rome']);
    // …and the fields v2 added arrive defaulted, not missing.
    expect(p.entries).toEqual({});
    expect(p.countriesDone).toEqual([]);
  });

  it('keeps a passport written by a NEWER build rather than throwing it away', () => {
    store({ v: 999, places: ROME, entries: { italy: '2026-09-12' }, somethingNew: { x: 1 } });
    const p = readWorldProgress();
    expect(p.places).toEqual(ROME);
    expect(p.entries).toEqual({ italy: '2026-09-12' });
    expect(p.v).toBe(WORLD_PROGRESS_VERSION);
  });

  it('keeps a passport whose version is not a number at all', () => {
    store({ v: 'two', places: ROME });
    expect(readWorldProgress().places).toEqual(ROME);
  });

  it('drops a malformed field without losing the rest of the passport', () => {
    store({
      v: WORLD_PROGRESS_VERSION,
      places: { ...ROME, 'rome-broken': { at: 12, correct: 'yes' } },
      entries: 'not a map',
      citiesDone: ['rome', 7, null],
    });
    const p = readWorldProgress();
    expect(p.places).toEqual(ROME);
    expect(p.entries).toEqual({});
    expect(p.citiesDone).toEqual(['rome']);
  });

  it('gives an empty passport for {}', () => {
    store({});
    expect(readWorldProgress()).toEqual(EMPTY_WORLD_PROGRESS);
  });

  it('gives an empty passport for text that is not JSON, without throwing', () => {
    store('{not json');
    expect(() => readWorldProgress()).not.toThrow();
    expect(readWorldProgress()).toEqual(EMPTY_WORLD_PROGRESS);
  });

  it('gives an empty passport for JSON that is not an object', () => {
    for (const junk of ['[]', '42', '"passport"', 'null']) {
      store(junk);
      expect(readWorldProgress(), junk).toEqual(EMPTY_WORLD_PROGRESS);
    }
  });

  it('gives an empty passport when nothing was ever stored', () => {
    expect(readWorldProgress()).toEqual(EMPTY_WORLD_PROGRESS);
  });
});

describe('reading is not a write', () => {
  it('round-trips a current passport unchanged', () => {
    const full: WorldProgress = {
      v: WORLD_PROGRESS_VERSION,
      entries: { italy: '2026-09-12', greece: '2026-09-01' },
      places: { ...ROME, 'athens-acropolis': { at: '2026-09-01', correct: false } },
      exhibits: { 'rome-capitoline-museums-she-wolf': '2026-09-12' },
      riddles: { 'rome-capitoline-museums-riddle-1': '2026-09-12' },
      trailsDone: ['rome-ancient'],
      citiesDone: ['rome'],
      countriesDone: [],
    };
    writeWorldProgress(full);
    const once = readWorldProgress();
    writeWorldProgress(once);
    expect(readWorldProgress()).toEqual(full);
  });

  it('never hands out a shared empty object', () => {
    // A shallow `{ ...EMPTY }` shares its inner objects; a write into one would put a
    // stamp into every passport read after it.
    const a = readWorldProgress();
    a.places['leak'] = { at: '2026-09-18', correct: true };
    expect(readWorldProgress().places).toEqual({});
    expect(EMPTY_WORLD_PROGRESS.places).toEqual({});
  });
});

describe('onSite on a stamp', () => {
  it('keeps true and keeps false', () => {
    store({
      v: WORLD_PROGRESS_VERSION,
      places: {
        'rome-colosseum': { at: '2026-09-18', correct: true, onSite: true },
        'rome-pantheon': { at: '2026-09-18', correct: true, onSite: false },
      },
    });
    const p = readWorldProgress();
    expect(p.places['rome-colosseum'].onSite).toBe(true);
    expect(p.places['rome-pantheon'].onSite).toBe(false);
  });

  it('leaves it ABSENT on stamps written before the field existed — unknown, not false', () => {
    store({ v: WORLD_PROGRESS_VERSION, places: ROME });
    const stamp = readWorldProgress().places['rome-colosseum'];
    expect('onSite' in stamp).toBe(false);
  });

  it('drops a non-boolean onSite but keeps the stamp itself', () => {
    store({ v: WORLD_PROGRESS_VERSION, places: { 'rome-colosseum': { at: '2026-09-18', correct: true, onSite: 'yes' } } });
    const stamp = readWorldProgress().places['rome-colosseum'];
    expect(stamp).toEqual({ at: '2026-09-18', correct: true });
  });
});

describe('the migration ladder', () => {
  it('migrates without reading storage, so the cloud sync can use it too', () => {
    expect(migrateWorldProgress({ v: 1, places: ROME }).places).toEqual(ROME);
  });

  it('a negative or huge old version does not loop or throw', () => {
    expect(() => migrateWorldProgress({ v: -1e9, places: ROME })).not.toThrow();
    expect(migrateWorldProgress({ v: -1e9, places: ROME }).places).toEqual(ROME);
  });
});
