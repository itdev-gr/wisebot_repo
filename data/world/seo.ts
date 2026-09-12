/**
 * WiseBot World — what a page is called, in one place.
 *
 * Two consumers must agree on every title: the build-time prerender
 * (`scripts/world/generate-world-seo.mjs`), which writes static HTML for crawlers that
 * do not run JavaScript, and the runtime `<WorldSeo>` in `components/world/`, which sets
 * the same title through Helmet once React has taken over. Googlebot renders JavaScript,
 * so it sees the runtime one; a link preview or a plain fetch sees the static one. If the
 * two ever differed, the page would tell two names to two visitors. So both call these
 * functions, and neither carries a template of its own.
 *
 * Pure functions, no React, no DOM: the prerender loads this file through Vite's SSR
 * loader, in Node, with no window.
 */

import type { City, CityModule, Country, Place, PlaceCategory } from './types';

export const BASE_URL = 'https://wisebot.gr';
export const BRAND = 'WiseBot World';

/** The languages a page is titled in. The four overlay languages fall back to English. */
export type SeoLang = 'el' | 'en';

export interface PageMeta {
  /** Route path, e.g. `/world/greece/athens`. */
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  /** schema.org objects, serialised by the caller. */
  jsonLd: Record<string, unknown>[];
}

export const seoLang = (lang: string): SeoLang => (lang === 'el' ? 'el' : 'en');

/** One line, no double spaces, cut on a word boundary with an ellipsis. */
export function clip(text: string | undefined, max = 155): string {
  const one = String(text ?? '').replace(/\s+/g, ' ').trim();
  if (one.length <= max) return one;
  const cut = one.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), 60))}…`;
}

/** «Αθήνα (Athens)» when the two names differ; a name the same in both stays as is. */
export const bi = (name: { el: string; en: string }): string =>
  name.el === name.en ? name.el : `${name.el} (${name.en})`;

const SCHEMA_TYPE: Record<PlaceCategory, string> = {
  museum: 'Museum',
  nature: 'Park',
  landmark: 'TouristAttraction',
  science: 'TouristAttraction',
  art: 'TouristAttraction',
  history: 'LandmarksOrHistoricalBuildings',
  food: 'TouristAttraction',
  sport: 'StadiumOrArena',
};

export const CATEGORY_LABEL: Record<PlaceCategory, { el: string; en: string }> = {
  landmark: { el: 'Αξιοθέατο', en: 'Landmark' },
  museum: { el: 'Μουσείο', en: 'Museum' },
  nature: { el: 'Φύση', en: 'Nature' },
  science: { el: 'Επιστήμη', en: 'Science' },
  art: { el: 'Τέχνη', en: 'Art' },
  history: { el: 'Ιστορία', en: 'History' },
  food: { el: 'Γεύση', en: 'Food' },
  sport: { el: 'Αθλητισμός', en: 'Sport' },
};

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${BASE_URL}${it.path}`,
    })),
  };
}

const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);

// ------------------------------------------------------------------- pages

export function worldMeta(
  countries: Country[],
  cities: City[],
  placeCounts: Record<string, number>,
  lang: SeoLang = 'el',
): PageMeta {
  const total = Object.values(placeCounts).reduce((a, b) => a + b, 0);
  const nC = countries.length;
  const nCity = cities.length;
  const title =
    lang === 'el'
      ? `${BRAND} — Ταξίδι σε χώρες, πόλεις και μουσεία για παιδιά | WiseBot Academy`
      : `${BRAND} — Countries, cities and museums for kids | WiseBot Academy`;
  const description =
    lang === 'el'
      ? `Ταξίδεψε σε αληθινές πόλεις, μπες σε μουσεία, λύσε αινίγματα και γέμισε το διαβατήριό σου με σφραγίδες. ${nC} ${plural(nC, 'χώρα', 'χώρες')}, ${nCity} ${plural(nCity, 'πόλη', 'πόλεις')}, ${total} αξιοθέατα για παιδιά 6–12.`
      : `Travel to real cities, step inside museums, solve riddles and fill your passport with stamps. ${nC} ${plural(nC, 'country', 'countries')}, ${nCity} ${plural(nCity, 'city', 'cities')}, ${total} places for children aged 6–12.`;
  return {
    path: '/world',
    title,
    ogTitle: lang === 'el' ? `${BRAND} — Χώρες, πόλεις και μουσεία για παιδιά` : `${BRAND} — Countries, cities and museums for kids`,
    description: clip(description),
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: BRAND,
        url: `${BASE_URL}/world`,
        inLanguage: ['el', 'en'],
        isPartOf: { '@type': 'WebSite', name: 'WiseBot Academy', url: BASE_URL },
        about: countries.map((c) => ({ '@type': 'Country', name: c.name.en })),
      },
      breadcrumb([
        { name: 'WiseBot Academy', path: '/' },
        { name: BRAND, path: '/world' },
      ]),
    ],
  };
}

export function countryMeta(
  country: Country,
  cities: City[],
  placeCounts: Record<string, number>,
  lang: SeoLang = 'el',
): PageMeta {
  const path = `/world/${country.id}`;
  const places = cities.reduce((n, c) => n + (placeCounts[c.id] ?? 0), 0);
  const cityNames = cities.map((c) => c.name[lang]).join(', ');
  const title =
    lang === 'el'
      ? `${country.name.el} για παιδιά — ${cities.length} πόλεις, ${places} αξιοθέατα και μουσεία | ${BRAND}`
      : `${country.name.en} for kids — ${cities.length} cities, ${places} places and museums | ${BRAND}`;
  return {
    path,
    title,
    ogTitle: `${country.flag} ${country.name[lang]} — ${BRAND}`,
    description: clip(`${country.intro[lang]} ${cityNames ? `${cityNames}.` : ''}`),
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Country',
        name: country.name.en,
        alternateName: country.name.el,
        url: `${BASE_URL}${path}`,
        description: clip(country.intro.en, 300),
        containsPlace: cities.map((c) => ({ '@type': 'City', name: c.name.en, url: `${BASE_URL}${path}/${c.id}` })),
      },
      breadcrumb([
        { name: 'WiseBot Academy', path: '/' },
        { name: BRAND, path: '/world' },
        { name: country.name[lang], path },
      ]),
    ],
  };
}

export function cityMeta(
  country: Country,
  city: City,
  module: Pick<CityModule, 'places' | 'trails'>,
  lang: SeoLang = 'el',
): PageMeta {
  const path = `/world/${country.id}/${city.id}`;
  const { places, trails = [] } = module;
  const museums = places.filter((p) => p.category === 'museum').length;
  const title =
    lang === 'el'
      ? `${city.name.el} με παιδιά — ${places.length} αξιοθέατα και ${museums} μουσεία, αποστολές και σφραγίδες | ${BRAND}`
      : `${city.name.en} with kids — ${places.length} places and ${museums} museums, missions and stamps | ${BRAND}`;
  const description =
    lang === 'el'
      ? `${city.intro.el} ${places.length} μέρη, ${museums} μουσεία, ${trails.length} διαδρομές για οικογένειες.`
      : `${city.intro.en} ${places.length} places, ${museums} museums, ${trails.length} family trails.`;
  return {
    path,
    title,
    ogTitle: `${city.emoji} ${bi(city.name)} — ${BRAND}`,
    description: clip(description),
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'City',
        name: city.name.en,
        alternateName: city.name.el,
        url: `${BASE_URL}${path}`,
        description: clip(city.intro.en, 300),
        geo: { '@type': 'GeoCoordinates', latitude: city.centre.lat, longitude: city.centre.lng },
        containedInPlace: { '@type': 'Country', name: country.name.en },
        containsPlace: places.map((p) => ({
          '@type': SCHEMA_TYPE[p.category] ?? 'TouristAttraction',
          name: p.name.en,
          url: `${BASE_URL}${path}/${p.id}`,
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `${city.name.en} for kids — ${BRAND}`,
        numberOfItems: places.length,
        itemListElement: places.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.name.en,
          url: `${BASE_URL}${path}/${p.id}`,
        })),
      },
      breadcrumb([
        { name: 'WiseBot Academy', path: '/' },
        { name: BRAND, path: '/world' },
        { name: country.name[lang], path: `/world/${country.id}` },
        { name: city.name[lang], path },
      ]),
    ],
  };
}

export function placeMeta(country: Country, city: City, place: Place, lang: SeoLang = 'el'): PageMeta {
  const cityPath = `/world/${country.id}/${city.id}`;
  const path = `${cityPath}/${place.id}`;
  const title =
    lang === 'el'
      ? `${place.name.el} — ${place.tagline.el} | ${city.name.el} για παιδιά | ${BRAND}`
      : `${place.name.en} — ${place.tagline.en} | ${city.name.en} for kids | ${BRAND}`;
  const wikidata = place.location.sources?.find((s) => s.kind === 'wikidata');
  return {
    path,
    title,
    ogTitle: `${place.emoji} ${bi(place.name)} — ${city.name[lang]} — ${BRAND}`,
    description: clip(place.story[lang]),
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': SCHEMA_TYPE[place.category] ?? 'TouristAttraction',
        name: place.name.en,
        alternateName: place.name.el,
        url: `${BASE_URL}${path}`,
        description: clip(place.story.en, 300),
        geo: { '@type': 'GeoCoordinates', latitude: place.location.lat, longitude: place.location.lng },
        containedInPlace: { '@type': 'City', name: city.name.en, url: `${BASE_URL}${cityPath}` },
        address: { '@type': 'PostalAddress', addressLocality: city.name.en, addressCountry: country.code },
        touristType: ['Families', 'Children'],
        ...(wikidata ? { sameAs: `https://www.wikidata.org/wiki/${wikidata.ref}` } : {}),
      },
      breadcrumb([
        { name: 'WiseBot Academy', path: '/' },
        { name: BRAND, path: '/world' },
        { name: country.name[lang], path: `/world/${country.id}` },
        { name: city.name[lang], path: cityPath },
        { name: place.name[lang], path },
      ]),
    ],
  };
}
