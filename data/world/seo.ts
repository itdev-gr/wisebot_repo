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

// --------------------------------------------------------------------- FAQ

/**
 * One question a parent types into a search box, answered from the module's own data.
 *
 * The rule (§20): no new fact enters an answer. Every number is a count of what the
 * module holds, every sentence about the place is the place's own tagline, story, door
 * note or room list, and the rest describes how WiseBot World works. Opening hours,
 * prices and durations are deliberately absent — they arrive with a source, later.
 * Every question and answer carries the page's own name, so no two pages share a string
 * (a duplicated FAQ across 260 pages is a rich-result penalty, not a rich result).
 */
export interface FaqEntry {
  q: { el: string; en: string };
  a: { el: string; en: string };
}

const AGES = '6–12';

/** «Α, Β, Γ και 4 ακόμη» — a list a search snippet can carry. */
function few(names: string[], lang: SeoLang, max = 5): string {
  const head = names.slice(0, max).join(', ');
  const rest = names.length - max;
  if (rest <= 0) return head;
  return lang === 'el' ? `${head} και ${rest} ακόμη` : `${head} and ${rest} more`;
}

export function faqForCity(
  country: Country,
  city: City,
  module: Pick<CityModule, 'places' | 'trails'>,
): FaqEntry[] {
  const { places, trails = [] } = module;
  const museums = places.filter((p) => p.category === 'museum');
  const rooms = museums.reduce((n, p) => n + (p.museum?.rooms.length ?? 0), 0);
  const exhibits = museums.reduce(
    (n, p) => n + (p.museum?.rooms.reduce((m, r) => m + r.exhibits.length, 0) ?? 0),
    0,
  );
  const riddles = museums.reduce((n, p) => n + (p.museum?.riddles.length ?? 0), 0);
  const el = city.name.el;
  const en = city.name.en;

  const out: FaqEntry[] = [
    {
      q: { el: `Τι μπορούν να δουν τα παιδιά στην πόλη ${el};`, en: `What can children see in ${en}?` },
      a: {
        el: `Στο ${BRAND} η ${el} έχει ${places.length} ${plural(places.length, 'μέρος', 'μέρη')} για παιδιά ${AGES}: ${few(places.map((p) => p.name.el), 'el')}. Κάθε μέρος έχει μια μικρή ιστορία, μια ερώτηση και μια σφραγίδα.`,
        en: `In ${BRAND}, ${en} has ${places.length} ${plural(places.length, 'place', 'places')} for children aged ${AGES}: ${few(places.map((p) => p.name.en), 'en')}. Each one has a short story, a question and a stamp.`,
      },
    },
  ];

  if (museums.length > 0) {
    out.push({
      q: { el: `Ποια μουσεία της πόλης ${el} έχουν αποστολές μέσα;`, en: `Which museums in ${en} have missions inside?` },
      a: {
        el: `${museums.length} ${plural(museums.length, 'μουσείο', 'μουσεία')}: ${few(museums.map((p) => p.name.el), 'el')}. Συνολικά ${rooms} ${plural(rooms, 'αίθουσα', 'αίθουσες')}, ${exhibits} εκθέματα και ${riddles} ${plural(riddles, 'αίνιγμα', 'αινίγματα')} που λύνονται μπροστά στο έκθεμα.`,
        en: `${museums.length} ${plural(museums.length, 'museum', 'museums')}: ${few(museums.map((p) => p.name.en), 'en')}. In total ${rooms} ${plural(rooms, 'room', 'rooms')}, ${exhibits} exhibits and ${riddles} ${plural(riddles, 'riddle', 'riddles')} solved in front of the exhibit.`,
      },
    });
  }

  if (trails.length > 0) {
    out.push({
      q: { el: `Υπάρχουν έτοιμες διαδρομές για οικογένειες στην πόλη ${el};`, en: `Are there ready-made family trails in ${en}?` },
      a: {
        el: `${trails.length} ${plural(trails.length, 'διαδρομή', 'διαδρομές')}: ${trails.map((t) => `${t.name.el} (${t.placeIds.length} ${plural(t.placeIds.length, 'στάση', 'στάσεις')})`).join(', ')}.`,
        en: `${trails.length} ${plural(trails.length, 'trail', 'trails')}: ${trails.map((t) => `${t.name.en} (${t.placeIds.length} ${plural(t.placeIds.length, 'stop', 'stops')})`).join(', ')}.`,
      },
    });
  }

  out.push(
    {
      q: { el: `Για ποιες ηλικίες είναι η ${el} στο ${BRAND};`, en: `What ages is ${en} in ${BRAND} for?` },
      a: {
        el: `Για παιδιά ${AGES} μαζί με τους γονείς τους. Στην ${el} κάθε ιστορία είναι σύντομη, κάθε ερώτηση έχει μία σωστή απάντηση, και η σφραγίδα μπαίνει στη σελίδα της χώρας: ${country.name.el}.`,
        en: `For children aged ${AGES} together with their parents. In ${en} every story is short, every question has one right answer, and the stamp goes on the country's page: ${country.name.en}.`,
      },
    },
    {
      q: { el: `Πώς παίρνει ένα παιδί σφραγίδα στην πόλη ${el};`, en: `How does a child earn a stamp in ${en}?` },
      a: {
        el: `Πηγαίνει στο μέρος, πατά «Είμαι εδώ!», απαντά στην ερώτηση, και η σφραγίδα μπαίνει στο διαβατήριο. Όταν σφραγιστούν και τα ${places.length} μέρη της ${el}, η πόλη σφραγίζεται ολόκληρη. Η τοποθεσία ελέγχεται στο κινητό και δεν αποθηκεύεται ποτέ.`,
        en: `Go to the place, tap “I’m here!”, answer the question, and the stamp goes into the passport. When all ${places.length} places of ${en} are stamped, the whole city is sealed. Location is checked on the phone and never stored.`,
      },
    },
  );
  return out;
}

export function faqForPlace(country: Country, city: City, place: Place): FaqEntry[] {
  const el = place.name.el;
  const en = place.name.en;
  const kind = CATEGORY_LABEL[place.category] ?? CATEGORY_LABEL.landmark;
  const out: FaqEntry[] = [
    {
      q: { el: `Τι είναι το «${el}» για ένα παιδί;`, en: `What is ${en} for a child?` },
      a: {
        el: `${place.tagline.el}. ${clip(place.story.el, 220)}`,
        en: `${place.tagline.en}. ${clip(place.story.en, 220)}`,
      },
    },
    {
      q: { el: `Σε ποια πόλη είναι το «${el}»;`, en: `Which city is ${en} in?` },
      a: {
        el: `Στην πόλη ${city.name.el}, ${country.name.el}. ${clip(city.intro.el, 160)}`,
        en: `In ${city.name.en}, ${country.name.en}. ${clip(city.intro.en, 160)}`,
      },
    },
  ];

  if (place.location.findIt) {
    out.push({
      q: { el: `Πού είναι η είσοδος για το «${el}»;`, en: `Where is the entrance to ${en}?` },
      a: { el: place.location.findIt.el, en: place.location.findIt.en },
    });
  }

  if (place.museum) {
    const rooms = place.museum.rooms;
    const exhibits = rooms.reduce((n, r) => n + r.exhibits.length, 0);
    const riddles = place.museum.riddles.length;
    out.push({
      q: { el: `Τι θα βρει ένα παιδί μέσα στο «${el}»;`, en: `What will a child find inside ${en}?` },
      a: {
        el: `${rooms.length} ${plural(rooms.length, 'αίθουσα', 'αίθουσες')} (${rooms.map((r) => r.name.el).join(', ')}), ${exhibits} εκθέματα με τη δική τους ιστορία και ${riddles} ${plural(riddles, 'αίνιγμα', 'αινίγματα')} που λύνονται μπροστά στο έκθεμα.`,
        en: `${rooms.length} ${plural(rooms.length, 'room', 'rooms')} (${rooms.map((r) => r.name.en).join(', ')}), ${exhibits} exhibits with their own story and ${riddles} ${plural(riddles, 'riddle', 'riddles')} solved in front of the exhibit.`,
      },
    });
  }

  out.push(
    {
      q: { el: `Τι είδους μέρος είναι το «${el}»;`, en: `What kind of place is ${en}?` },
      a: {
        el: `${kind.el} στην πόλη ${city.name.el}. Στο ${BRAND} το «${el}» έχει τη δική του ιστορία, μια ερώτηση σφραγίδας και τη θέση του στον χάρτη, με οδηγίες Google Maps και Apple Maps.`,
        en: `${kind.en} in ${city.name.en}. In ${BRAND}, ${en} has its own story, a stamp question and its spot on the map, with Google Maps and Apple Maps directions.`,
      },
    },
    {
      q: { el: `Πώς παίρνω τη σφραγίδα στο «${el}»;`, en: `How do I get the stamp at ${en}?` },
      a: {
        // The city is named here on purpose: two cities can share a place name
        // («Ολυμπιακό Στάδιο» in Amsterdam and Berlin), and no two pages may share a string.
        el: `Επί τόπου, στην πόλη ${city.name.el}: μπροστά στο «${el}» πατάς «Είμαι εδώ!», απαντάς σε μία ερώτηση, και η σφραγίδα μπαίνει στο διαβατήριο. Για παιδιά ${AGES}. Η τοποθεσία ελέγχεται στο κινητό και δεν αποθηκεύεται ποτέ.`,
        en: `On site, in ${city.name.en}: in front of ${en} you tap “I’m here!”, answer one question, and the stamp goes into the passport. For children aged ${AGES}. Location is checked on the phone and never stored.`,
      },
    },
  );
  return out;
}

/** The schema.org FAQPage object for one language, appended to a page's JSON-LD. */
export function faqJsonLd(entries: FaqEntry[], lang: SeoLang): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.q[lang],
      acceptedAnswer: { '@type': 'Answer', text: e.a[lang] },
    })),
  };
}

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
  // A country that is open — intro, facts, entry stamp — but whose cities have not
  // arrived yet: «0 πόλεις» in a search result reads as broken; say what is true.
  const title =
    cities.length === 0
      ? lang === 'el'
        ? `${country.name.el} για παιδιά — σφραγίδα εισόδου, οι πόλεις έρχονται | ${BRAND}`
        : `${country.name.en} for kids — entry stamp, cities coming soon | ${BRAND}`
      : lang === 'el'
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
      faqJsonLd(faqForCity(country, city, module), lang),
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
      faqJsonLd(faqForPlace(country, city, place), lang),
    ],
  };
}
