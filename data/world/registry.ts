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

import type {
  City,
  CityId,
  CityModule,
  CityTranslation,
  CountriesTranslation,
  Country,
  CountryModule,
} from './types';
import { mergeCityTranslation, mergeCountriesTranslation } from './mergeTranslation';

import { country as austria_country, cities as austria_cities } from './countries/austria';
import { country as belgium_country, cities as belgium_cities } from './countries/belgium';
import { country as canada_country, cities as canada_cities } from './countries/canada';
import { country as china_country, cities as china_cities } from './countries/china';
import { country as croatia_country, cities as croatia_cities } from './countries/croatia';
import { country as cyprus_country, cities as cyprus_cities } from './countries/cyprus';
import { country as czechia_country, cities as czechia_cities } from './countries/czechia';
import { country as denmark_country, cities as denmark_cities } from './countries/denmark';
import { country as egypt_country, cities as egypt_cities } from './countries/egypt';
import { country as france_country, cities as france_cities } from './countries/france';
import { country as germany_country, cities as germany_cities } from './countries/germany';
import { country as greece_country, cities as greece_cities } from './countries/greece';
import { country as hungary_country, cities as hungary_cities } from './countries/hungary';
import { country as italy_country, cities as italy_cities } from './countries/italy';
import { country as japan_country, cities as japan_cities } from './countries/japan';
import { country as mexico_country, cities as mexico_cities } from './countries/mexico';
import { country as netherlands_country, cities as netherlands_cities } from './countries/netherlands';
import { country as poland_country, cities as poland_cities } from './countries/poland';
import { country as portugal_country, cities as portugal_cities } from './countries/portugal';
import { country as spain_country, cities as spain_cities } from './countries/spain';
import { country as thailand_country, cities as thailand_cities } from './countries/thailand';
import { country as turkey_country, cities as turkey_cities } from './countries/turkey';
import { country as united_arab_emirates_country, cities as united_arab_emirates_cities } from './countries/united-arab-emirates';
import { country as united_kingdom_country, cities as united_kingdom_cities } from './countries/united-kingdom';
import { country as united_states_country, cities as united_states_cities } from './countries/united-states';

const COUNTRY_MODULES: CountryModule[] = [
  { country: austria_country, cities: austria_cities },
  { country: belgium_country, cities: belgium_cities },
  { country: canada_country, cities: canada_cities },
  { country: china_country, cities: china_cities },
  { country: croatia_country, cities: croatia_cities },
  { country: cyprus_country, cities: cyprus_cities },
  { country: czechia_country, cities: czechia_cities },
  { country: denmark_country, cities: denmark_cities },
  { country: egypt_country, cities: egypt_cities },
  { country: france_country, cities: france_cities },
  { country: germany_country, cities: germany_cities },
  { country: greece_country, cities: greece_cities },
  { country: hungary_country, cities: hungary_cities },
  { country: italy_country, cities: italy_cities },
  { country: japan_country, cities: japan_cities },
  { country: mexico_country, cities: mexico_cities },
  { country: netherlands_country, cities: netherlands_cities },
  { country: poland_country, cities: poland_cities },
  { country: portugal_country, cities: portugal_cities },
  { country: spain_country, cities: spain_cities },
  { country: thailand_country, cities: thailand_cities },
  { country: turkey_country, cities: turkey_cities },
  { country: united_arab_emirates_country, cities: united_arab_emirates_cities },
  { country: united_kingdom_country, cities: united_kingdom_cities },
  { country: united_states_country, cities: united_states_cities },
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
  'amsterdam': 16,
  'athens': 18,
  'barcelona': 16,
  'berlin': 16,
  'budapest': 16,
  'delphi': 13,
  'dubrovnik': 17,
  'heraklion': 12,
  'istanbul': 17,
  'lisbon': 16,
  'london': 17,
  'nicosia': 15,
  'paris': 13,
  'porto': 13,
  'prague': 17,
  'rhodes': 12,
  'rome': 18,
  'thessaloniki': 17,
  'vienna': 13,
};

const LOADERS: Record<CityId, () => Promise<CityModule>> = {
  'amsterdam': () => import('./cities/amsterdam'),
  'athens': () => import('./cities/athens'),
  'barcelona': () => import('./cities/barcelona'),
  'berlin': () => import('./cities/berlin'),
  'budapest': () => import('./cities/budapest'),
  'delphi': () => import('./cities/delphi'),
  'dubrovnik': () => import('./cities/dubrovnik'),
  'heraklion': () => import('./cities/heraklion'),
  'istanbul': () => import('./cities/istanbul'),
  'lisbon': () => import('./cities/lisbon'),
  'london': () => import('./cities/london'),
  'nicosia': () => import('./cities/nicosia'),
  'paris': () => import('./cities/paris'),
  'porto': () => import('./cities/porto'),
  'prague': () => import('./cities/prague'),
  'rhodes': () => import('./cities/rhodes'),
  'rome': () => import('./cities/rome'),
  'thessaloniki': () => import('./cities/thessaloniki'),
  'vienna': () => import('./cities/vienna'),
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
  'amsterdam.de': () => import('./i18n/amsterdam.de.json'),
  'amsterdam.es': () => import('./i18n/amsterdam.es.json'),
  'amsterdam.fr': () => import('./i18n/amsterdam.fr.json'),
  'amsterdam.it': () => import('./i18n/amsterdam.it.json'),
  'athens.de': () => import('./i18n/athens.de.json'),
  'athens.es': () => import('./i18n/athens.es.json'),
  'athens.fr': () => import('./i18n/athens.fr.json'),
  'athens.it': () => import('./i18n/athens.it.json'),
  'barcelona.de': () => import('./i18n/barcelona.de.json'),
  'barcelona.es': () => import('./i18n/barcelona.es.json'),
  'barcelona.fr': () => import('./i18n/barcelona.fr.json'),
  'barcelona.it': () => import('./i18n/barcelona.it.json'),
  'berlin.de': () => import('./i18n/berlin.de.json'),
  'berlin.es': () => import('./i18n/berlin.es.json'),
  'berlin.fr': () => import('./i18n/berlin.fr.json'),
  'berlin.it': () => import('./i18n/berlin.it.json'),
  'delphi.de': () => import('./i18n/delphi.de.json'),
  'delphi.es': () => import('./i18n/delphi.es.json'),
  'delphi.fr': () => import('./i18n/delphi.fr.json'),
  'delphi.it': () => import('./i18n/delphi.it.json'),
  'heraklion.de': () => import('./i18n/heraklion.de.json'),
  'heraklion.es': () => import('./i18n/heraklion.es.json'),
  'heraklion.fr': () => import('./i18n/heraklion.fr.json'),
  'heraklion.it': () => import('./i18n/heraklion.it.json'),
  'istanbul.de': () => import('./i18n/istanbul.de.json'),
  'istanbul.es': () => import('./i18n/istanbul.es.json'),
  'istanbul.fr': () => import('./i18n/istanbul.fr.json'),
  'istanbul.it': () => import('./i18n/istanbul.it.json'),
  'london.de': () => import('./i18n/london.de.json'),
  'london.es': () => import('./i18n/london.es.json'),
  'london.fr': () => import('./i18n/london.fr.json'),
  'london.it': () => import('./i18n/london.it.json'),
  'paris.de': () => import('./i18n/paris.de.json'),
  'paris.es': () => import('./i18n/paris.es.json'),
  'paris.fr': () => import('./i18n/paris.fr.json'),
  'paris.it': () => import('./i18n/paris.it.json'),
  'prague.de': () => import('./i18n/prague.de.json'),
  'prague.es': () => import('./i18n/prague.es.json'),
  'prague.fr': () => import('./i18n/prague.fr.json'),
  'prague.it': () => import('./i18n/prague.it.json'),
  'rhodes.de': () => import('./i18n/rhodes.de.json'),
  'rhodes.es': () => import('./i18n/rhodes.es.json'),
  'rhodes.fr': () => import('./i18n/rhodes.fr.json'),
  'rhodes.it': () => import('./i18n/rhodes.it.json'),
  'rome.de': () => import('./i18n/rome.de.json'),
  'rome.es': () => import('./i18n/rome.es.json'),
  'rome.fr': () => import('./i18n/rome.fr.json'),
  'rome.it': () => import('./i18n/rome.it.json'),
  'thessaloniki.de': () => import('./i18n/thessaloniki.de.json'),
  'thessaloniki.es': () => import('./i18n/thessaloniki.es.json'),
  'thessaloniki.fr': () => import('./i18n/thessaloniki.fr.json'),
  'thessaloniki.it': () => import('./i18n/thessaloniki.it.json'),
  'vienna.de': () => import('./i18n/vienna.de.json'),
  'vienna.es': () => import('./i18n/vienna.es.json'),
  'vienna.fr': () => import('./i18n/vienna.fr.json'),
  'vienna.it': () => import('./i18n/vienna.it.json'),
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

const I18N_COUNTRIES: Record<string, () => Promise<{ default: unknown }>> = {
  'de': () => import('./i18n/countries.de.json'),
  'es': () => import('./i18n/countries.es.json'),
  'fr': () => import('./i18n/countries.fr.json'),
  'it': () => import('./i18n/countries.it.json'),
};

/**
 * Countries and city cards in the language asked for.
 *
 * One small file covers the whole front door, because that screen draws every flag and
 * every city card at once: twenty separate requests to render one list would be a
 * visible stagger. City places stay lazy and per-city, which is the opposite trade and
 * the right one for them.
 *
 * A missing file means that language has no front door yet and the list falls back to
 * English, which `pick()` already does everywhere else.
 */
export async function loadCountries(
  lang?: string,
): Promise<{ countries: Country[]; cities: City[] }> {
  if (!lang || lang === 'el' || lang === 'en') return { countries: COUNTRIES, cities: CITIES };
  const loader = I18N_COUNTRIES[lang];
  if (!loader) return { countries: COUNTRIES, cities: CITIES };
  try {
    const overlay = await loader();
    return mergeCountriesTranslation(
      COUNTRIES,
      CITIES,
      (overlay.default ?? overlay) as CountriesTranslation,
    );
  } catch {
    return { countries: COUNTRIES, cities: CITIES };
  }
}

/** Languages that have an overlay for this city, beyond the built-in Greek and English. */
export function translationsFor(cityId: CityId): string[] {
  return Object.keys(I18N)
    .filter((key) => key.startsWith(`${cityId}.`))
    .map((key) => key.slice(cityId.length + 1));
}

/**
 * Every language World can actually be read in: Greek and English, which every city
 * carries, plus any language that has at least one overlay.
 *
 * This is what the language switcher offers, and it is deliberately derived rather
 * than declared. A button for a language with nothing behind it sends a child to a
 * page that is entirely in English with a German flag lit up, which reads as broken
 * rather than as unfinished.
 *
 * It can be trusted as a completeness signal because an overlay that is missing even
 * one string fails `data/world/world.test.ts`. A language present here is finished for
 * the cities it covers; a city it does not cover falls back to English, which is a
 * different and honest state.
 */
export const AVAILABLE_LANGS: string[] = [
  'el',
  'en',
  ...[
    ...new Set([
      ...Object.keys(I18N).map((key) => key.slice(key.lastIndexOf('.') + 1)),
      ...Object.keys(I18N_COUNTRIES),
    ]),
  ].sort(),
];

/** City ids that have a content module, whether or not they have been resolved. */
export const CITY_IDS: CityId[] = Object.keys(LOADERS);
