/**
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

import { country as greece_country, cities as greece_cities } from './countries/greece';

const COUNTRY_MODULES: CountryModule[] = [
  { country: greece_country, cities: greece_cities },
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
  'athens': 18,
  'heraklion': 12,
  'rhodes': 12,
  'thessaloniki': 17,
};

const LOADERS: Record<CityId, () => Promise<CityModule>> = {
  'athens': () => import('./cities/athens'),
  'heraklion': () => import('./cities/heraklion'),
  'rhodes': () => import('./cities/rhodes'),
  'thessaloniki': () => import('./cities/thessaloniki'),
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
  'athens.de': () => import('./i18n/athens.de.json'),
  'athens.es': () => import('./i18n/athens.es.json'),
  'athens.fr': () => import('./i18n/athens.fr.json'),
  'athens.it': () => import('./i18n/athens.it.json'),
  'heraklion.de': () => import('./i18n/heraklion.de.json'),
  'heraklion.es': () => import('./i18n/heraklion.es.json'),
  'heraklion.fr': () => import('./i18n/heraklion.fr.json'),
  'heraklion.it': () => import('./i18n/heraklion.it.json'),
  'thessaloniki.de': () => import('./i18n/thessaloniki.de.json'),
  'thessaloniki.es': () => import('./i18n/thessaloniki.es.json'),
  'thessaloniki.fr': () => import('./i18n/thessaloniki.fr.json'),
  'thessaloniki.it': () => import('./i18n/thessaloniki.it.json'),
};

/**
 * Load a city's places and trails, in the language asked for.
 *
 * Greek and English come out of the city module itself. Any other language pulls a
 * separate overlay chunk and folds it in, so a Greek child never downloads the German
 * text and four translators can work on one city without opening the same file.
 *
 * A missing overlay is not an error. It means that language has not been translated
 * yet, and the module falls back to English exactly as `pick()` does everywhere else.
 *
 * Rejects rather than resolving empty for an unknown city id: a typo in a route should
 * surface, not render a city with nothing in it.
 */
export async function loadCity(cityId: CityId, lang?: string): Promise<CityModule> {
  const loader = LOADERS[cityId];
  if (!loader) throw new Error(`unknown city: ${cityId}`);
  const module = await loader();
  if (!lang || lang === 'el' || lang === 'en') return module;

  const overlayLoader = I18N[`${cityId}.${lang}`];
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
    .filter((key) => key.startsWith(`${cityId}.`))
    .map((key) => key.slice(cityId.length + 1));
}

/** City ids that have a content module, whether or not they have been resolved. */
export const CITY_IDS: CityId[] = Object.keys(LOADERS);
