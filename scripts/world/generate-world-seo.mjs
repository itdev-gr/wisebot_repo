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
// The titles, descriptions and JSON-LD come from the same module the runtime <WorldSeo>
// uses, so the static page and the hydrated page never disagree about a page's name.
const { worldMeta, countryMeta, cityMeta, placeMeta, CATEGORY_LABEL, faqForCity, faqForPlace } =
  await vite.ssrLoadModule('/data/world/seo.ts');

/**
 * The same Q/A pairs the JSON-LD carries, as visible text for a crawler that does not
 * run JS: a real <h2> and a <dl>, once in Greek and once in English.
 */
function faqHtml(entries, lang) {
  const heading = lang === 'el' ? 'Συχνές ερωτήσεις' : 'Frequently asked questions';
  const rows = entries.map((e) => `<dt>${esc(e.q[lang])}</dt><dd>${esc(e.a[lang])}</dd>`).join('');
  return `<h2>${heading}</h2><dl>${rows}</dl>`;
}

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

/** «Αθήνα (Athens)» when the two names differ, «Delphi» stays «Δελφοί (Delphi)». */
const bi = (name) => (name.el === name.en ? name.el : `${name.el} (${name.en})`);

function ld(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
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

/**
 * Each page is the shared meta (title, description, JSON-LD) plus a <noscript> body with
 * the real text in Greek and English: intro, the list of places with links, the story,
 * the facts. Headings are real h1/h2/h3 so a crawler that does not run JS still sees the
 * page's structure.
 */
function worldPage(countries, cities) {
  const totalPlaces = Object.values(PLACE_COUNTS).reduce((a, b) => a + b, 0);
  const list = countries
    .map((c) => {
      const cs = citiesOf(c.id)
        .map((city) => `<a href="${BASE_URL}/world/${c.id}/${city.id}">${esc(city.name.el)}</a>`)
        .join(', ');
      return `<li>${c.flag} <a href="${BASE_URL}/world/${c.id}"><strong>${esc(c.name.el)}</strong></a>${cs ? ` — ${cs}` : ''}</li>`;
    })
    .join('\n');
  return {
    ...worldMeta(countries, cities, PLACE_COUNTS, 'el'),
    noscript: `
      <h1>${BRAND} — Ταξίδι σε χώρες, πόλεις και μουσεία για παιδιά</h1>
      <p>Ταξίδεψε σε αληθινές χώρες και πόλεις, μπες σε μουσεία, λύσε αινίγματα και γέμισε το διαβατήριό σου με σφραγίδες. Κάθε μέρος έχει μια αληθινή ιστορία, μια ερώτηση και μια σφραγίδα. Για παιδιά 6–12 και τους γονείς τους.</p>
      <h2>Χώρες</h2>
      <ul>${list}</ul>
      <h2>${BRAND} — countries, cities and museums for kids</h2>
      <p>Travel to real countries and cities, step inside museums, solve riddles and fill your passport with stamps. ${countries.length} ${countries.length === 1 ? 'country' : 'countries'}, ${cities.length} cities, ${totalPlaces} places for children aged 6–12 and their parents.</p>
    `,
  };
}

function countryPage(country, cities) {
  const list = cities
    .map(
      (c) =>
        `<li><h3>${c.emoji} <a href="${BASE_URL}/world/${country.id}/${c.id}">${esc(bi(c.name))}</a></h3><p>${PLACE_COUNTS[c.id] ?? 0} μέρη. ${esc(clip(c.intro.el, 160))}</p></li>`,
    )
    .join('\n');
  return {
    ...countryMeta(country, cities, PLACE_COUNTS, 'el'),
    noscript: `
      <h1>${country.flag} ${esc(bi(country.name))} — ${BRAND}</h1>
      <p>${esc(country.intro.el)}</p>
      <ul>${country.facts.map((f) => `<li>${esc(f.el)}</li>`).join('')}</ul>
      <h2>Πόλεις</h2>
      ${cities.length ? `<ul>${list}</ul>` : '<p>Οι πόλεις έρχονται. Η σφραγίδα εισόδου σε περιμένει ήδη στο διαβατήριο.</p>'}
      <h2>${esc(country.name.en)} for kids</h2>
      <p>${esc(country.intro.en)}</p>
      <ul>${country.facts.map((f) => `<li>${esc(f.en)}</li>`).join('')}</ul>
    `,
  };
}

function cityPage(country, city, module) {
  const { places, trails = [] } = module;
  const museums = places.filter((p) => p.category === 'museum');
  const base = `/world/${country.id}/${city.id}`;
  const list = places
    .map(
      (p) =>
        `<li><h3>${p.emoji} <a href="${BASE_URL}${base}/${p.id}">${esc(bi(p.name))}</a></h3><p>${esc(p.tagline.el)}</p></li>`,
    )
    .join('\n');
  const trailList = trails
    .map((t) => `<li><h3>${t.emoji} ${esc(t.name.el)}</h3><p>${esc(t.promise.el)} (${t.placeIds.length} στάσεις)</p></li>`)
    .join('\n');
  const faq = faqForCity(country, city, module);
  return {
    ...cityMeta(country, city, module, 'el'),
    noscript: `
      <h1>${city.emoji} ${esc(bi(city.name))}, ${esc(country.name.el)} — τι να δείτε με παιδιά</h1>
      <p>${esc(city.intro.el)}</p>
      <h2>${places.length} μέρη για παιδιά στην πόλη ${esc(city.name.el)}</h2>
      <ul>${list}</ul>
      ${trails.length ? `<h2>Διαδρομές για οικογένειες</h2><ul>${trailList}</ul>` : ''}
      ${faqHtml(faq, 'el')}
      <h2>${esc(city.name.en)} with kids — ${places.length} places and ${museums.length} museums</h2>
      <p>${esc(city.intro.en)}</p>
      <ul>${places.map((p) => `<li><a href="${BASE_URL}${base}/${p.id}">${esc(p.name.en)}</a> — ${esc(p.tagline.en)}</li>`).join('')}</ul>
      ${faqHtml(faq, 'en')}
      <p><a href="${BASE_URL}/world/${country.id}">${country.flag} ${esc(country.name.el)}</a></p>
    `,
  };
}

function placePage(country, city, place) {
  const base = `/world/${country.id}/${city.id}`;
  const kind = CATEGORY_LABEL[place.category]?.el ?? 'Αξιοθέατο';
  const museum = place.museum;
  const rooms = museum?.rooms ?? [];
  const exhibits = rooms.reduce((n, r) => n + r.exhibits.length, 0);
  const museumBlock = museum
    ? `
      <h2>Μέσα στο μουσείο: ${rooms.length} αίθουσες, ${exhibits} εκθέματα, ${museum.riddles.length} αινίγματα</h2>
      <ul>${rooms.map((r) => `<li><h3>${r.emoji} ${esc(r.name.el)}</h3><p>${esc(clip(r.intro.el, 140))}</p><p>${r.exhibits.map((e) => esc(e.name.el)).join(' · ')}</p></li>`).join('')}</ul>`
    : '';
  const findIt = place.location.findIt
    ? `<p><strong>Πού είναι η είσοδος:</strong> ${esc(place.location.findIt.el)}</p>`
    : '';
  const faq = faqForPlace(country, city, place);

  return {
    ...placeMeta(country, city, place, 'el'),
    noscript: `
      <p><a href="${BASE_URL}/world">${BRAND}</a> › <a href="${BASE_URL}/world/${country.id}">${esc(country.name.el)}</a> › <a href="${BASE_URL}${base}">${esc(city.name.el)}</a></p>
      <h1>${place.emoji} ${esc(bi(place.name))} — ${esc(place.tagline.el)}</h1>
      <p><em>${kind} · ${esc(city.name.el)}, ${esc(country.name.el)}</em></p>
      <p>${esc(place.story.el)}</p>
      <ul>${place.facts.map((f) => `<li>${esc(f.el)}</li>`).join('')}</ul>
      ${findIt}
      ${museumBlock}
      ${faqHtml(faq, 'el')}
      <h2>${esc(place.name.en)} — ${esc(place.tagline.en)}</h2>
      <p>${esc(place.story.en)}</p>
      <ul>${place.facts.map((f) => `<li>${esc(f.en)}</li>`).join('')}</ul>
      ${place.location.findIt ? `<p><strong>Finding the entrance:</strong> ${esc(place.location.findIt.en)}</p>` : ''}
      ${faqHtml(faq, 'en')}
      <p>Απάντησε στην ερώτηση και πάρε τη σφραγίδα σου στο ${BRAND}.</p>
    `,
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

// The passport is per child and robots.txt disallows it; it is not a page to index.
pages.push(worldPage(COUNTRIES, CITIES));
urls.push({ path: '/world', changefreq: 'weekly', priority: '0.9' });

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

// ----------------------------------------------------------------- llms.txt
/**
 * A plain-text map of the site for language models (the llms.txt convention: Markdown,
 * one H1, short sections, absolute links). AI search engines and assistants read this
 * before they read HTML, and it is the one place the whole product is described in a
 * form they can quote: what WiseBot Academy is, who it is for, and every World page
 * with its one-line tagline. Derived from the same modules as the pages, so it cannot
 * drift. Nothing personal is in here — it lists content, never users.
 */
function llmsTxt() {
  const lines = [];
  lines.push('# WiseBot Academy');
  lines.push('');
  lines.push(
    '> Greek/English digital academy for children aged 6–12 and their parents: a School track (curriculum missions for grades 1–6), 34 narrated ebooks with read-along, an Academy of short stories about great people, educational mini-games, creative studios (heroes, music, 3D), and WiseBot World — a family passport game where children explore real cities, read short stories about landmarks and museums, answer a question on site and collect stamps. Ελληνικά και Αγγλικά· το WiseBot World και σε Γαλλικά, Γερμανικά, Ισπανικά, Ιταλικά.',
  );
  lines.push('');
  lines.push('Site: https://wisebot.gr · Sitemap: https://wisebot.gr/sitemap.xml · Contact: info@wisebot.gr');
  lines.push('');
  lines.push('## Sections');
  lines.push('');
  for (const [p, t] of [
    ['/school', 'Σχολείο — curriculum missions for grades 1–6 (Greek primary school), one per lesson'],
    ['/ebooks', 'Βιβλία — 34 narrated ebooks, Greek and English, with read-along highlighting'],
    ['/academy', 'Ακαδημία — short stories about great people, for children'],
    ['/game', 'Παιχνίδια — educational mini-games, daily challenge, pass-the-phone party games'],
    ['/quiz', 'Κουίζ — quizzes on the school material'],
    ['/music', 'Μουσική — the WiseBot songs and the music studio'],
    ['/world', `WiseBot World — ${COUNTRIES.length} countries, ${CITIES.length} cities, ${placeCount} places incl. ${museumCount} museums, with a passport of stamps`],
    ['/paidika-paixnidia', 'Παιδικά παιχνίδια — overview page'],
    ['/ekpaideutiko-ai', 'Εκπαιδευτικό AI για παιδιά — overview page'],
  ]) {
    lines.push(`- [${t}](${BASE_URL}${p})`);
  }
  lines.push('');
  lines.push('## WiseBot World — countries, cities and places');
  lines.push('');
  lines.push(
    'Every place page has: a short story for a child, three facts, a question whose stamp is earned only on site («Είμαι εδώ!» checks the phone position on the device; nothing is stored), a map pin with Google Maps / Apple Maps directions, and a FAQ. Museums have rooms, exhibits and riddles.',
  );
  for (const page of pages) {
    if (!page.path.startsWith('/world/')) continue;
    const depth = page.path.split('/').length - 2; // country=1, city=2, place=3
    if (depth === 1) {
      lines.push('');
      lines.push(`### ${page.ogTitle.replace(/ — WiseBot World$/, '')}`);
      lines.push(`- [${page.title.replace(/ \| WiseBot World$/, '')}](${BASE_URL}${page.path})`);
    } else if (depth === 2) {
      lines.push(`- [${page.title.replace(/ \| WiseBot World$/, '')}](${BASE_URL}${page.path}): ${page.description}`);
    } else if (depth === 3) {
      lines.push(`  - [${page.ogTitle.replace(/ — WiseBot World$/, '')}](${BASE_URL}${page.path})`);
    }
  }
  lines.push('');
  lines.push('## Optional');
  lines.push('');
  lines.push(`- [Privacy](${BASE_URL}/privacy)`);
  lines.push(`- [Terms](${BASE_URL}/terms)`);
  lines.push('');
  return lines.join('\n');
}
fs.writeFileSync(path.join(DIST, 'llms.txt'), llmsTxt(), 'utf-8');

await vite.close();

console.log(
  `🌍 ${BRAND}: ${created} pages (${COUNTRIES.length} countries, ${CITIES.length} cities, ${placeCount} places incl. ${museumCount} museums) → ${path.relative(ROOT, DIST)}/world/, sitemap +${fresh.length} URLs`,
);
