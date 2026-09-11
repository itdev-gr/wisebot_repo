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

import type { City, CityId, CityModule, Country, CountryModule } from './types';

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
  'thessaloniki': 17,
};

const LOADERS: Record<CityId, () => Promise<CityModule>> = {
  'athens': () => import('./cities/athens'),
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

/**
 * Load a city's places and trails. Rejects rather than resolving empty for an unknown
 * id: a typo in a route should surface, not render a city with nothing in it.
 */
export function loadCity(cityId: CityId): Promise<CityModule> {
  const loader = LOADERS[cityId];
  if (!loader) return Promise.reject(new Error(`unknown city: ${cityId}`));
  return loader();
}

/** City ids that have a content module, whether or not they have been resolved. */
export const CITY_IDS: CityId[] = Object.keys(LOADERS);
