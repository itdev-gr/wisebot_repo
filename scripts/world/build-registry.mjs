#!/usr/bin/env node
/**
 * WiseBot World — registry generator.
 *
 * `data/world/registry.ts` is the one file both sessions would otherwise have to edit:
 * the engine reads it, the content session adds to it. So nobody edits it. It is
 * regenerated from the folders instead, which means adding a country or a city is one
 * new file and never a merge conflict.
 *
 *   node scripts/world/build-registry.mjs
 *
 * Inputs
 *   data/world/countries/<country>.ts   exports `country` and `cities` (CountryModule)
 *   data/world/cities/<city>.ts         exports `places` and `trails` (CityModule)
 *   data/world/coords/<city>.json       the resolver's output, used for the counts
 *
 * The place counts come from the coords files rather than from the city modules,
 * because the count has to be a literal the city list can render before any content
 * chunk loads — the same reason `data/units/registry.ts` keeps `UNIT_COUNTS`. Places
 * graded 'D' are excluded, since those never ship. `data/world/world.test.ts` asserts
 * each literal against the real array length, so the two cannot drift.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const OUT = resolve(ROOT, 'data/world/registry.ts');

/** Filenames are ids. Reject anything that would not survive being an id. */
const ID = /^[a-z0-9-]+$/;

async function idsIn(dir, ext) {
  let entries;
  try {
    entries = await readdir(resolve(ROOT, dir));
  } catch {
    return [];
  }
  return entries
    .filter((f) => f.endsWith(ext) && !f.startsWith('_') && !f.includes('.test.'))
    .map((f) => f.slice(0, -ext.length))
    .filter((id) => {
      if (ID.test(id)) return true;
      console.error(`skipping ${dir}/${id}${ext}: filename is not a valid id`);
      return false;
    })
    .sort();
}

/** Non-D places in a resolved coords file. Missing file means the city is not counted. */
async function placeCount(cityId) {
  try {
    const raw = await readFile(resolve(ROOT, `data/world/coords/${cityId}.json`), 'utf8');
    const report = JSON.parse(raw);
    return report.places.filter((p) => p.confidence !== 'D' && p.lat != null).length;
  } catch {
    return null;
  }
}

/** `greece` → `greece_` prefixed local names, so two countries never collide. */
const alias = (id) => id.replace(/-/g, '_');

/**
 * Translation overlays, as `<city>.<lang>.json`. Greek and English live in the city
 * module itself and are never overlaid, so a file claiming either is a mistake worth
 * refusing rather than silently loading.
 */
async function overlaysIn() {
  let entries = [];
  try {
    entries = await readdir(resolve(ROOT, 'data/world/i18n'));
  } catch {
    return [];
  }
  return entries
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const [city, lang] = f.slice(0, -5).split('.');
      return { file: f, city, lang };
    })
    .filter((o) => {
      if (!o.city || !o.lang || !ID.test(o.city)) {
        console.error(`skipping data/world/i18n/${o.file}: expected <city>.<lang>.json`);
        return false;
      }
      if (o.lang === 'el' || o.lang === 'en') {
        console.error(`skipping data/world/i18n/${o.file}: el and en live in the city module`);
        return false;
      }
      return true;
    })
    .sort((a, b) => a.file.localeCompare(b.file));
}

async function main() {
  const countries = await idsIn('data/world/countries', '.ts');
  const cities = await idsIn('data/world/cities', '.ts');
  const overlays = await overlaysIn();

  const counts = {};
  const missing = [];
  for (const city of cities) {
    const n = await placeCount(city);
    if (n === null) missing.push(city);
    else counts[city] = n;
  }

  const imports = countries
    .map(
      (id) =>
        `import { country as ${alias(id)}_country, cities as ${alias(id)}_cities } from './countries/${id}';`,
    )
    .join('\n');

  const modules = countries
    .map((id) => `  { country: ${alias(id)}_country, cities: ${alias(id)}_cities },`)
    .join('\n');

  const countEntries = Object.entries(counts)
    .map(([id, n]) => `  '${id}': ${n},`)
    .join('\n');

  const loaders = cities
    .map((id) => `  '${id}': () => import('./cities/${id}'),`)
    .join('\n');

  const overlayLoaders = overlays
    .map((o) => `  '${o.city}.${o.lang}': () => import('./i18n/${o.file}'),`)
    .join('\n');

  const body = `/**
 * GENERATED FILE — do not edit.
 *
 * Regenerate with:  node scripts/world/build-registry.mjs
 *
 * Countries are bundled eagerly: the world list draws every flag and city card before
 * the child picks anything, and country modules are metadata only. Cities are imported
 * on demand, so opening one city never downloads another. That split is what keeps the
 * module inside the 1 MB PWA precache budget, the same reason data/units/registry.ts
 * exists.
 */

import type { City, CityId, CityModule, CityTranslation, Country, CountryModule } from './types';
import { mergeCityTranslation } from './mergeTranslation';

${imports || '// no country modules yet'}

const COUNTRY_MODULES: CountryModule[] = [
${modules || '  // no country modules yet'}
];

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

/** Every country, in display order. */
export const COUNTRIES: Country[] = COUNTRY_MODULES.map((m) => m.country).sort(byOrder);

/** Every city of every country, in display order within its country. */
export const CITIES: City[] = COUNTRY_MODULES.flatMap((m) => m.cities).sort(byOrder);

/**
 * How many places each city has, as a literal, so a city card can say "18 σημεία"
 * without loading that city's content. Asserted against the real arrays in the tests.
 */
export const PLACE_COUNTS: Record<CityId, number> = {
${countEntries || '  // no resolved cities yet'}
};

const LOADERS: Record<CityId, () => Promise<CityModule>> = {
${loaders || '  // no city modules yet'}
};

/** Cities of one country, in order. */
export function citiesOf(countryId: string): City[] {
  return CITIES.filter((c) => c.countryId === countryId);
}

export function findCountry(id: string): Country | undefined {
  return COUNTRIES.find((c) => c.id === id);
}

export function findCity(id: string): City | undefined {
  return CITIES.find((c) => c.id === id);
}

const I18N: Record<string, () => Promise<{ default: unknown }>> = {
${overlayLoaders || '  // no translation overlays yet'}
};

/**
 * Load a city's places and trails, in the language asked for.
 *
 * Greek and English come out of the city module itself. Any other language pulls a
 * separate overlay chunk and folds it in, so a Greek child never downloads the German
 * text and four translators can work on one city without opening the same file.
 *
 * A missing overlay is not an error. It means that language has not been translated
 * yet, and the module falls back to English exactly as \`pick()\` does everywhere else.
 *
 * Rejects rather than resolving empty for an unknown city id: a typo in a route should
 * surface, not render a city with nothing in it.
 */
export async function loadCity(cityId: CityId, lang?: string): Promise<CityModule> {
  const loader = LOADERS[cityId];
  if (!loader) throw new Error(\`unknown city: \${cityId}\`);
  const module = await loader();
  if (!lang || lang === 'el' || lang === 'en') return module;

  const overlayLoader = I18N[\`\${cityId}.\${lang}\`];
  if (!overlayLoader) return module;
  try {
    const overlay = await overlayLoader();
    return mergeCityTranslation(module, (overlay.default ?? overlay) as CityTranslation, cityId);
  } catch {
    // A broken or missing overlay must never take the city down with it.
    return module;
  }
}

/** Languages that have an overlay for this city, beyond the built-in Greek and English. */
export function translationsFor(cityId: CityId): string[] {
  return Object.keys(I18N)
    .filter((key) => key.startsWith(\`\${cityId}.\`))
    .map((key) => key.slice(cityId.length + 1));
}

/** City ids that have a content module, whether or not they have been resolved. */
export const CITY_IDS: CityId[] = Object.keys(LOADERS);
`;

  await writeFile(OUT, body, 'utf8');

  console.error(
    `wrote data/world/registry.ts — ${countries.length} countries, ${cities.length} cities, ` +
      `${overlays.length} translation overlay(s)`,
  );
  if (missing.length) {
    console.error(
      `\n${missing.length} city module(s) with no resolved coordinates, so no count:\n` +
        missing.map((c) => `  ! ${c} — run: node scripts/world/resolve-coords.mjs ${c}`).join('\n'),
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
