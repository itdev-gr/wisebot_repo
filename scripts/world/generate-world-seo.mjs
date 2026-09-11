#!/usr/bin/env node
/**
 * WiseBot World — prerendered SEO pages.
 *
 * One static HTML page per country, city and place under dist/world/**, plus the
 * /world front door, and a sitemap that lists them. Runs AFTER `vite build` and after
 * `scripts/generate-seo-pages.mjs`, as the last step of the Vercel build command.
 *
 * Why a second script rather than more entries in ROUTES: the general script is plain
 * Node and its routes are hand-written. World's pages are DERIVED from the content
 * modules — 72 places today, hundreds later — and the content is TypeScript, so this
 * script runs through `tsx` and imports the registry exactly as the app does. A page
 * cannot drift from the content it describes, and a new city gets its pages the moment
 * its module is registered, with no list to keep in sync.
 *
 *   node scripts/world/generate-world-seo.mjs                 # writes into dist/
 *   OUT_DIR=/tmp/x node scripts/world/generate-world-seo.mjs  # anywhere else
 *
 * The TypeScript content is loaded through Vite's own SSR loader rather than a second
 * runner such as tsx or vite-node: Vite is already a declared dependency and is what
 * the build has just run, so nothing new has to be installed on Vercel and the modules
 * resolve exactly as the app resolves them.
 *
 * What each page carries, for a crawler that does or does not run JS:
 *   - <title>, meta description, canonical, Open Graph and Twitter tags in Greek, the
 *     app's primary audience, with the English name kept in the title where it differs.
 *   - a <noscript> body with the real text: intro, the list of places with links, the
 *     story, the facts — in Greek AND English, because "things to do in Athens with kids"
 *     is searched in both.
 *   - JSON-LD: TouristAttraction / Museum with the verified coordinate for a place,
 *     City for a city, Country for a country, and a BreadcrumbList on every page.
 *
 * Nothing in here edits the content modules or the public/ folder; it reads them and
 * writes into the build output only.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const DIST = process.env.OUT_DIR ? path.resolve(process.env.OUT_DIR) : path.join(ROOT, 'dist');
const BASE_URL = 'https://wisebot.gr';
const BRAND = 'WiseBot World';

/**
 * The Vite server stays open until the last page is written: `loadCity` imports each
 * city module lazily, and a closed server answers those late imports with "request is
 * outdated". Dependency discovery is switched off — it would crawl every index.html
 * under the repo, including the iOS and Android build folders, for nothing.
 */
const { createServer } = await import('vite');
const vite = await createServer({
  root: ROOT,
  configFile: false,
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
  resolve: { alias: { '@': ROOT } },
});

const { COUNTRIES, CITIES, PLACE_COUNTS, loadCity, citiesOf } = await vite.ssrLoadModule(
  '/data/world/registry.ts',
);

// ------------------------------------------------------------------- helpers

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** One line, no double spaces, cut on a word boundary with an ellipsis. */
function clip(text, max = 155) {
  const one = String(text ?? '').replace(/\s+/g, ' ').trim();
  if (one.length <= max) return one;
  const cut = one.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), 60))}…`;
}

const words = (t) => String(t ?? '').trim().split(/\s+/).filter(Boolean).length;

/** «Αθήνα (Athens)» when the two names differ, «Delphi» stays «Δελφοί (Delphi)». */
const bi = (name) => (name.el === name.en ? name.el : `${name.el} (${name.en})`);

const CATEGORY_EL = {
  landmark: 'Αξιοθέατο',
  museum: 'Μουσείο',
  nature: 'Φύση',
  science: 'Επιστήμη',
  art: 'Τέχνη',
  history: 'Ιστορία',
  food: 'Γεύση',
  sport: 'Αθλητισμός',
};

const SCHEMA_TYPE = {
  museum: 'Museum',
  nature: 'Park',
  landmark: 'TouristAttraction',
  science: 'TouristAttraction',
  art: 'TouristAttraction',
  history: 'LandmarksOrHistoricalBuildings',
  food: 'TouristAttraction',
  sport: 'StadiumOrArena',
};

function ld(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
}

function breadcrumb(items) {
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

const footer = () =>
  `<p><a href="${BASE_URL}/world">🌍 ${BRAND}</a> | <a href="${BASE_URL}/world/passport">🛂 Διαβατήριο</a> | <a href="${BASE_URL}/school">🎓 Σχολείο</a> | <a href="${BASE_URL}/">🏠 Αρχική</a></p>`;

/**
 * Same substitutions as scripts/generate-seo-pages.mjs, so the two kinds of page are
 * indistinguishable to a crawler — plus JSON-LD injected before </head>.
 */
function render(baseHtml, page) {
  let html = baseHtml;
  const url = `${BASE_URL}${page.path}`;

  html = html.replace(/<!-- WB-SHELL-START[\s\S]*?<!-- WB-SHELL-END -->/, '');
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${esc(page.description)}">`,
  );
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${esc(page.ogTitle)}">`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${esc(page.description)}">`,
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${esc(page.ogTitle)}">`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${esc(page.description)}">`,
  );
  html = html.replace(
    /<!-- SEO: Rich noscript content for crawlers that don't run JS -->[\s\S]*?<\/noscript>/,
    `<!-- SEO: WiseBot World prerendered content -->\n  <noscript>\n    <div style="max-width:900px;margin:40px auto;padding:20px;font-family:system-ui,sans-serif;color:#333;line-height:1.8;">${page.noscript}\n      ${footer()}\n      <p>© 2026 WiseBot Academy — <a href="${BASE_URL}">wisebot.gr</a></p>\n    </div>\n  </noscript>`,
  );
  if (page.jsonLd?.length) {
    html = html.replace('</head>', `  ${page.jsonLd.map(ld).join('\n  ')}\n</head>`);
  }
  return html;
}

// --------------------------------------------------------------------- pages

function worldPage(countries, cities) {
  const totalPlaces = Object.values(PLACE_COUNTS).reduce((a, b) => a + b, 0);
  const museums = cities.length; // refined below when city modules are loaded
  const list = countries
    .map((c) => {
      const cs = citiesOf(c.id)
        .map((city) => `<a href="${BASE_URL}/world/${c.id}/${city.id}">${esc(city.name.el)}</a>`)
        .join(', ');
      return `<li>${c.flag} <a href="${BASE_URL}/world/${c.id}"><strong>${esc(c.name.el)}</strong></a> — ${cs}</li>`;
    })
    .join('\n');
  return {
    path: '/world',
    title: `${BRAND} — Ταξίδι σε χώρες, πόλεις και μουσεία για παιδιά | WiseBot Academy`,
    ogTitle: `${BRAND} — Χώρες, πόλεις και μουσεία για παιδιά`,
    description: clip(
      `Ταξίδεψε σε αληθινές πόλεις, μπες σε μουσεία, λύσε αινίγματα και γέμισε το διαβατήριό σου με σφραγίδες. ${countries.length} ${countries.length === 1 ? 'χώρα' : 'χώρες'}, ${cities.length} πόλεις, ${totalPlaces} αξιοθέατα για παιδιά 6–12.`,
    ),
    noscript: `
      <h1>${BRAND} — Ταξίδι σε χώρες, πόλεις και μουσεία για παιδιά</h1>
      <p>Ταξίδεψε σε αληθινές χώρες και πόλεις, μπες σε μουσεία, λύσε αινίγματα και γέμισε το διαβατήριό σου με σφραγίδες. Κάθε μέρος έχει μια αληθινή ιστορία, μια ερώτηση και μια σφραγίδα. Για παιδιά 6–12 και τους γονείς τους.</p>
      <ul>${list}</ul>
      <h2>${BRAND} — countries, cities and museums for kids</h2>
      <p>Travel to real countries and cities, step inside museums, solve riddles and fill your passport with stamps. ${countries.length} ${countries.length === 1 ? 'country' : 'countries'}, ${cities.length} cities, ${totalPlaces} places for children aged 6–12 and their parents.</p>
    `,
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
    _museums: museums,
  };
}

function countryPage(country, cities) {
  const places = cities.reduce((n, c) => n + (PLACE_COUNTS[c.id] ?? 0), 0);
  const list = cities
    .map(
      (c) =>
        `<li>${c.emoji} <a href="${BASE_URL}/world/${country.id}/${c.id}"><strong>${esc(bi(c.name))}</strong></a> — ${PLACE_COUNTS[c.id] ?? 0} μέρη. ${esc(clip(c.intro.el, 160))}</li>`,
    )
    .join('\n');
  return {
    path: `/world/${country.id}`,
    title: `${country.name.el} για παιδιά — ${cities.length} πόλεις, ${places} αξιοθέατα και μουσεία | ${BRAND}`,
    ogTitle: `${country.flag} ${country.name.el} — ${BRAND}`,
    description: clip(`${country.intro.el} ${cities.map((c) => c.name.el).join(', ')}.`),
    noscript: `
      <h1>${country.flag} ${esc(bi(country.name))} — ${BRAND}</h1>
      <p>${esc(country.intro.el)}</p>
      <ul>${country.facts.map((f) => `<li>${esc(f.el)}</li>`).join('')}</ul>
      <h2>Πόλεις</h2>
      <ul>${list}</ul>
      <h2>${esc(country.name.en)} for kids</h2>
      <p>${esc(country.intro.en)}</p>
      <ul>${country.facts.map((f) => `<li>${esc(f.en)}</li>`).join('')}</ul>
    `,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Country',
        name: country.name.en,
        alternateName: country.name.el,
        url: `${BASE_URL}/world/${country.id}`,
        description: clip(country.intro.en, 300),
        containsPlace: cities.map((c) => ({ '@type': 'City', name: c.name.en, url: `${BASE_URL}/world/${country.id}/${c.id}` })),
      },
      breadcrumb([
        { name: 'WiseBot Academy', path: '/' },
        { name: BRAND, path: '/world' },
        { name: country.name.el, path: `/world/${country.id}` },
      ]),
    ],
  };
}

function cityPage(country, city, module) {
  const { places, trails = [] } = module;
  const museums = places.filter((p) => p.category === 'museum');
  const base = `/world/${country.id}/${city.id}`;
  const list = places
    .map(
      (p) =>
        `<li>${p.emoji} <a href="${BASE_URL}${base}/${p.id}"><strong>${esc(bi(p.name))}</strong></a> — ${esc(p.tagline.el)}</li>`,
    )
    .join('\n');
  const trailList = trails
    .map((t) => `<li>${t.emoji} <strong>${esc(t.name.el)}</strong> — ${esc(t.promise.el)} (${t.placeIds.length} στάσεις)</li>`)
    .join('\n');
  return {
    path: base,
    title: `${city.name.el} με παιδιά — ${places.length} αξιοθέατα και ${museums.length} μουσεία, αποστολές και σφραγίδες | ${BRAND}`,
    ogTitle: `${city.emoji} ${bi(city.name)} — ${BRAND}`,
    description: clip(`${city.intro.el} ${places.length} μέρη, ${museums.length} μουσεία, ${trails.length} διαδρομές για οικογένειες.`),
    noscript: `
      <h1>${city.emoji} ${esc(bi(city.name))}, ${esc(country.name.el)} — τι να δείτε με παιδιά</h1>
      <p>${esc(city.intro.el)}</p>
      <h2>${places.length} μέρη για παιδιά στην πόλη ${esc(city.name.el)}</h2>
      <ul>${list}</ul>
      ${trails.length ? `<h2>Διαδρομές για οικογένειες</h2><ul>${trailList}</ul>` : ''}
      <h2>${esc(city.name.en)} with kids — ${places.length} places and ${museums.length} museums</h2>
      <p>${esc(city.intro.en)}</p>
      <ul>${places.map((p) => `<li><a href="${BASE_URL}${base}/${p.id}">${esc(p.name.en)}</a> — ${esc(p.tagline.en)}</li>`).join('')}</ul>
      <p><a href="${BASE_URL}/world/${country.id}">${country.flag} ${esc(country.name.el)}</a></p>
    `,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'City',
        name: city.name.en,
        alternateName: city.name.el,
        url: `${BASE_URL}${base}`,
        description: clip(city.intro.en, 300),
        geo: { '@type': 'GeoCoordinates', latitude: city.centre.lat, longitude: city.centre.lng },
        containedInPlace: { '@type': 'Country', name: country.name.en },
        containsPlace: places.map((p) => ({
          '@type': SCHEMA_TYPE[p.category] ?? 'TouristAttraction',
          name: p.name.en,
          url: `${BASE_URL}${base}/${p.id}`,
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
          url: `${BASE_URL}${base}/${p.id}`,
        })),
      },
      breadcrumb([
        { name: 'WiseBot Academy', path: '/' },
        { name: BRAND, path: '/world' },
        { name: country.name.el, path: `/world/${country.id}` },
        { name: city.name.el, path: base },
      ]),
    ],
  };
}

function placePage(country, city, place) {
  const base = `/world/${country.id}/${city.id}`;
  const url = `${base}/${place.id}`;
  const kind = CATEGORY_EL[place.category] ?? 'Αξιοθέατο';
  const museum = place.museum;
  const rooms = museum?.rooms ?? [];
  const exhibits = rooms.reduce((n, r) => n + r.exhibits.length, 0);
  const museumBlock = museum
    ? `
      <h2>Μέσα στο μουσείο: ${rooms.length} αίθουσες, ${exhibits} εκθέματα, ${museum.riddles.length} αινίγματα</h2>
      <ul>${rooms.map((r) => `<li>${r.emoji} <strong>${esc(r.name.el)}</strong> — ${esc(clip(r.intro.el, 140))}<br>${r.exhibits.map((e) => esc(e.name.el)).join(' · ')}</li>`).join('')}</ul>`
    : '';
  const findIt = place.location.findIt
    ? `<p><strong>Πού είναι η είσοδος:</strong> ${esc(place.location.findIt.el)}</p>`
    : '';
  const schemaType = SCHEMA_TYPE[place.category] ?? 'TouristAttraction';

  return {
    path: url,
    title: `${place.name.el} — ${place.tagline.el} | ${city.name.el} για παιδιά | ${BRAND}`,
    ogTitle: `${place.emoji} ${bi(place.name)} — ${city.name.el} — ${BRAND}`,
    description: clip(place.story.el),
    noscript: `
      <p><a href="${BASE_URL}/world">${BRAND}</a> › <a href="${BASE_URL}/world/${country.id}">${esc(country.name.el)}</a> › <a href="${BASE_URL}${base}">${esc(city.name.el)}</a></p>
      <h1>${place.emoji} ${esc(bi(place.name))} — ${esc(place.tagline.el)}</h1>
      <p><em>${kind} · ${esc(city.name.el)}, ${esc(country.name.el)}</em></p>
      <p>${esc(place.story.el)}</p>
      <ul>${place.facts.map((f) => `<li>${esc(f.el)}</li>`).join('')}</ul>
      ${findIt}
      ${museumBlock}
      <h2>${esc(place.name.en)} — ${esc(place.tagline.en)}</h2>
      <p>${esc(place.story.en)}</p>
      <ul>${place.facts.map((f) => `<li>${esc(f.en)}</li>`).join('')}</ul>
      ${place.location.findIt ? `<p><strong>Finding the entrance:</strong> ${esc(place.location.findIt.en)}</p>` : ''}
      <p>Απάντησε στην ερώτηση και πάρε τη σφραγίδα σου στο ${BRAND}.</p>
    `,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': schemaType,
        name: place.name.en,
        alternateName: place.name.el,
        url: `${BASE_URL}${url}`,
        description: clip(place.story.en, 300),
        geo: { '@type': 'GeoCoordinates', latitude: place.location.lat, longitude: place.location.lng },
        containedInPlace: { '@type': 'City', name: city.name.en, url: `${BASE_URL}${base}` },
        address: { '@type': 'PostalAddress', addressLocality: city.name.en, addressCountry: country.code },
        touristType: ['Families', 'Children'],
        isAccessibleForFree: undefined,
        ...(place.location.sources?.some((s) => s.kind === 'wikidata')
          ? { sameAs: `https://www.wikidata.org/wiki/${place.location.sources.find((s) => s.kind === 'wikidata').ref}` }
          : {}),
      },
      breadcrumb([
        { name: 'WiseBot Academy', path: '/' },
        { name: BRAND, path: '/world' },
        { name: country.name.el, path: `/world/${country.id}` },
        { name: city.name.el, path: base },
        { name: place.name.el, path: url },
      ]),
    ],
  };
}

// -------------------------------------------------------------------- sitemap

function sitemap(baseXml, urls, today) {
  const entries = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${BASE_URL}${u.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join('\n');
  if (baseXml.includes('</urlset>')) {
    return baseXml.replace('</urlset>', `${entries}\n</urlset>`);
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

// ----------------------------------------------------------------------- main

const indexPath = path.join(DIST, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error(`❌ ${indexPath} not found — run vite build first.`);
  process.exit(1);
}
const baseHtml = fs.readFileSync(indexPath, 'utf-8');
const today = new Date().toISOString().slice(0, 10);

const pages = [];
const urls = [];
let museumCount = 0;
let placeCount = 0;

pages.push(worldPage(COUNTRIES, CITIES));
urls.push({ path: '/world', changefreq: 'weekly', priority: '0.9' });
urls.push({ path: '/world/passport', changefreq: 'monthly', priority: '0.5' });

for (const country of COUNTRIES) {
  const cities = citiesOf(country.id);
  pages.push(countryPage(country, cities));
  urls.push({ path: `/world/${country.id}`, changefreq: 'weekly', priority: '0.8' });

  for (const city of cities) {
    const module = await loadCity(city.id);
    pages.push(cityPage(country, city, module));
    urls.push({ path: `/world/${country.id}/${city.id}`, changefreq: 'weekly', priority: '0.8' });
    for (const place of module.places) {
      placeCount += 1;
      if (place.category === 'museum') museumCount += 1;
      pages.push(placePage(country, city, place));
      urls.push({
        path: `/world/${country.id}/${city.id}/${place.id}`,
        changefreq: 'monthly',
        priority: place.category === 'museum' ? '0.7' : '0.6',
      });
    }
  }
}

let created = 0;
for (const page of pages) {
  const dir = path.join(DIST, page.path.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), render(baseHtml, page), 'utf-8');
  created += 1;
}

// The sitemap in dist/ is public/sitemap.xml plus World. public/ itself is untouched.
const publicSitemap = path.join(ROOT, 'public', 'sitemap.xml');
const distSitemap = path.join(DIST, 'sitemap.xml');
const existing = fs.existsSync(distSitemap)
  ? fs.readFileSync(distSitemap, 'utf-8')
  : fs.existsSync(publicSitemap)
    ? fs.readFileSync(publicSitemap, 'utf-8')
    : '';
const already = new Set([...existing.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
const fresh = urls.filter((u) => !already.has(`${BASE_URL}${u.path}`));
fs.writeFileSync(distSitemap, sitemap(existing, fresh, today), 'utf-8');

await vite.close();

console.log(
  `🌍 ${BRAND}: ${created} pages (${COUNTRIES.length} countries, ${CITIES.length} cities, ${placeCount} places incl. ${museumCount} museums) → ${path.relative(ROOT, DIST)}/world/, sitemap +${fresh.length} URLs`,
);
