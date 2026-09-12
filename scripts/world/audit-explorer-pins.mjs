#!/usr/bin/env node
/**
 * Audit every live Explorer pin against Wikidata.
 *
 * The Explorer on `origin/main` ships 18 cities × 10 spots with coordinates typed by
 * hand, no source and no grade. The owner walked Porto and found the Bolhão market pin
 * a street away and the two Carmo churches under one pin. This script asks the same
 * question of all 180 spots at once: how far is the pin we ship from the point Wikidata
 * (CC0) holds for the same place?
 *
 * Read-only. It reads the city files straight out of `origin/main` with `git show`, so
 * it works from any branch and never touches the working tree except to write its two
 * reports under docs/world/research/. Nothing here is copied into data/: Wikidata's
 * coordinate is recorded as a DISTANCE, exactly as `resolve-coords.mjs` does, and the
 * Q-id is kept only so the content session can seed the city when it migrates.
 *
 * Matching is by name search (Greek and English labels), keeping the candidate whose
 * coordinate is nearest to the shipped pin. That is deliberately lenient — a square, a
 * neighbourhood or a viewpoint has no single "right" point — so the verdicts are:
 *
 *   ok          ≤ 60 m   the pin and Wikidata agree; a family standing there sees the thing
 *   check       61–150 m one of the two is the centre of something large; a person must look
 *   wrong       > 150 m  or the nearest candidate is implausible; fix before migrating
 *   unmatched            no Wikidata item found by name; seed it by hand
 *
 * Usage:  node scripts/world/audit-explorer-pins.mjs [city ...]
 * Output: docs/world/research/explorer-pins.json and 10-explorer-pin-audit.md
 */

import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT_JSON = resolve(ROOT, 'docs/world/research/explorer-pins.json');
const OUT_MD = resolve(ROOT, 'docs/world/research/10-explorer-pin-audit.md');
const REF = process.env.EXPLORER_REF ?? 'origin/main';
const UA = 'WiseBotWorldAudit/1.0 (info@wisebot.gr)';
const PAUSE_MS = 120;
const OK_M = 60;
const CHECK_M = 150;
const MAX_CANDIDATE_M = 3000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function haversineM(a, b) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(s)));
}

// ------------------------------------------------------------- read origin/main

function gitShow(path) {
  return execFileSync('git', ['show', `${REF}:${path}`], { cwd: ROOT, encoding: 'utf8' });
}

function listCities() {
  const tree = execFileSync('git', ['ls-tree', '-r', '--name-only', REF, 'data/explore/cities'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  return tree
    .split('\n')
    .filter((l) => l.endsWith('.ts'))
    .map((l) => l.replace(/^data\/explore\/cities\//, '').replace(/\.ts$/, ''));
}

/**
 * The city files are TypeScript literals with a fixed shape. A regex walk is enough and
 * avoids compiling `origin/main` into this checkout. Each spot block starts at `id:` and
 * carries `name: { el, en }`, `lat`, `lng`, `radiusM` before its first `riddle:`.
 */
function parseCity(id) {
  const src = gitShow(`data/explore/cities/${id}.ts`);
  const unq = (s) => s.replace(/\\'/g, "'");
  const centre = src.match(/center:\s*\{\s*lat:\s*([-\d.]+),\s*lng:\s*([-\d.]+)/);
  const cityName = src.match(/^\s{2}name:\s*\{\s*el:\s*'((?:[^'\\]|\\.)*)',\s*en:\s*'((?:[^'\\]|\\.)*)'/m);
  const country = src.match(/countryCode:\s*'([A-Z]{2})'/);

  const spots = [];
  const re =
    /\{\s*id:\s*'([^']+)',\s*name:\s*\{\s*el:\s*'((?:[^'\\]|\\.)*)',\s*en:\s*'((?:[^'\\]|\\.)*)'\s*\},\s*emoji:\s*'[^']*',\s*lat:\s*([-\d.]+),\s*lng:\s*([-\d.]+),\s*radiusM:\s*(\d+)/g;
  let m;
  while ((m = re.exec(src))) {
    spots.push({
      id: m[1],
      el: unq(m[2]),
      en: unq(m[3]),
      lat: Number(m[4]),
      lng: Number(m[5]),
      radiusM: Number(m[6]),
    });
  }
  return {
    id,
    name: cityName ? { el: unq(cityName[1]), en: unq(cityName[2]) } : { el: id, en: id },
    countryCode: country?.[1] ?? '??',
    centre: centre ? { lat: Number(centre[1]), lng: Number(centre[2]) } : null,
    spots,
  };
}

// ------------------------------------------------------------------ wikidata

async function wd(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json' } });
      if (res.status === 429 || res.status >= 500) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      if (attempt === 2) throw err;
      await sleep(800 * (attempt + 1));
    }
  }
}

async function search(term, language) {
  const u = new URL('https://www.wikidata.org/w/api.php');
  u.searchParams.set('action', 'wbsearchentities');
  u.searchParams.set('search', term);
  u.searchParams.set('language', language);
  u.searchParams.set('uselang', language);
  u.searchParams.set('type', 'item');
  u.searchParams.set('limit', '7');
  u.searchParams.set('format', 'json');
  const json = await wd(u.toString());
  return (json.search ?? []).map((s) => ({ q: s.id, label: s.label, description: s.description ?? '' }));
}

const entityCache = new Map();
async function coordinateOf(q) {
  if (entityCache.has(q)) return entityCache.get(q);
  const json = await wd(`https://www.wikidata.org/wiki/Special:EntityData/${q}.json`);
  const claims = json.entities?.[q]?.claims?.P625 ?? [];
  const v = claims[0]?.mainsnak?.datavalue?.value;
  const out = v ? { lat: v.latitude, lng: v.longitude } : null;
  entityCache.set(q, out);
  return out;
}

/** Strip the "& National Garden" halves and parentheses so a search has a chance. */
function searchTerms(spot) {
  const clean = (s) =>
    s
      .replace(/\s*\([^)]*\)/g, '')
      .split(/\s*[&·/]\s*|\s+and\s+|\s+και\s+/i)[0]
      .trim();
  const terms = new Set([spot.en, spot.el, clean(spot.en), clean(spot.el)]);
  return [...terms].filter(Boolean);
}

async function auditSpot(spot, city) {
  const candidates = new Map();
  for (const term of searchTerms(spot)) {
    const lang = /[Ͱ-Ͽ]/.test(term) ? 'el' : 'en';
    for (const c of await search(term, lang)) {
      if (!candidates.has(c.q)) candidates.set(c.q, c);
    }
    await sleep(PAUSE_MS);
  }

  let best = null;
  for (const c of candidates.values()) {
    const coord = await coordinateOf(c.q);
    await sleep(PAUSE_MS);
    if (!coord) continue;
    const d = haversineM(spot, coord);
    if (d > MAX_CANDIDATE_M) continue;
    if (!best || d < best.deltaM) best = { ...c, deltaM: d };
  }

  const verdict = !best ? 'unmatched' : best.deltaM <= OK_M ? 'ok' : best.deltaM <= CHECK_M ? 'check' : 'wrong';
  return {
    city: city.id,
    countryCode: city.countryCode,
    id: spot.id,
    name: { el: spot.el, en: spot.en },
    pin: { lat: spot.lat, lng: spot.lng, radiusM: spot.radiusM },
    fromCentreM: city.centre ? haversineM(spot, city.centre) : null,
    wikidata: best ? { q: best.q, label: best.label, description: best.description, deltaM: best.deltaM } : null,
    verdict,
  };
}

// --------------------------------------------------------------------- report

function markdown(results, cities, startedAt) {
  const by = (v) => results.filter((r) => r.verdict === v);
  const lines = [];
  lines.push('# 10 — Έλεγχος των 180 ζωντανών pins του Explorer');
  lines.push('');
  lines.push(
    `Παράχθηκε από \`scripts/world/audit-explorer-pins.mjs\` στις ${startedAt.slice(0, 10)}, πάνω στο ` +
      `\`${REF}\`. Κάθε pin που στέλνει σήμερα το wisebot.gr συγκρίθηκε με το σημείο της Wikidata ` +
      `για το ίδιο μέρος. Τα ακατέργαστα: [explorer-pins.json](explorer-pins.json).`,
  );
  lines.push('');
  lines.push('| Ετυμηγορία | Τι σημαίνει | Pins |');
  lines.push('| --- | --- | ---: |');
  lines.push(`| **ok** | ≤ ${OK_M} m, το pin και η Wikidata συμφωνούν | ${by('ok').length} |`);
  lines.push(`| **check** | ${OK_M + 1}–${CHECK_M} m, το ένα από τα δύο είναι κέντρο μεγάλου χώρου, θέλει μάτι | ${by('check').length} |`);
  lines.push(`| **wrong** | > ${CHECK_M} m, διορθώνεται πριν τη μετάπτωση | ${by('wrong').length} |`);
  lines.push(`| **unmatched** | δεν βρέθηκε αντικείμενο Wikidata με το όνομα, θέλει seed με το χέρι | ${by('unmatched').length} |`);
  lines.push('');
  lines.push(
    'Η ετυμηγορία μετρά τη συμφωνία με τη Wikidata, όχι την ορθότητα της πόρτας: ένα pin «ok» ' +
      'μπορεί να είναι κέντρο κτιρίου όπως τα 27 της Αθήνας στο [01](01-coordinate-audit.md). ' +
      'Ένα «wrong» όμως είναι σχεδόν πάντα λάθος μέρος ή λάθος πλευρά, και αυτά είναι που ' +
      'βγάζουν το παιδί δύο στενά πιο κάτω.',
  );
  lines.push('');

  lines.push('## Τα χειρότερα πρώτα');
  lines.push('');
  lines.push('| Πόλη | Μέρος | Απόκλιση | Wikidata | Περιγραφή |');
  lines.push('| --- | --- | ---: | --- | --- |');
  const worst = results
    .filter((r) => r.wikidata && r.verdict !== 'ok')
    .sort((a, b) => b.wikidata.deltaM - a.wikidata.deltaM);
  for (const r of worst) {
    lines.push(
      `| ${r.city} | ${r.name.el} | ${r.wikidata.deltaM} m | [${r.wikidata.q}](https://www.wikidata.org/wiki/${r.wikidata.q}) | ${r.wikidata.description.replace(/\|/g, '/')} |`,
    );
  }
  lines.push('');

  const un = by('unmatched');
  if (un.length) {
    lines.push('## Χωρίς αντιστοιχία στη Wikidata');
    lines.push('');
    lines.push(un.map((r) => `- **${r.city}** — ${r.name.el} / ${r.name.en}`).join('\n'));
    lines.push('');
  }

  lines.push('## Ανά πόλη');
  lines.push('');
  lines.push('| Πόλη | Χώρα | Spots | ok | check | wrong | unmatched | Μέγιστη απόκλιση |');
  lines.push('| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |');
  for (const c of cities) {
    const rs = results.filter((r) => r.city === c.id);
    const n = (v) => rs.filter((r) => r.verdict === v).length;
    const max = Math.max(0, ...rs.map((r) => r.wikidata?.deltaM ?? 0));
    lines.push(
      `| ${c.name.el} | ${c.countryCode} | ${rs.length} | ${n('ok')} | ${n('check')} | ${n('wrong')} | ${n('unmatched')} | ${max} m |`,
    );
  }
  lines.push('');
  lines.push('## Όλα τα pins');
  lines.push('');
  for (const c of cities) {
    lines.push(`### ${c.name.el} (${c.id})`);
    lines.push('');
    lines.push('| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |');
    lines.push('| --- | --- | --- | ---: | --- |');
    for (const r of results.filter((x) => x.city === c.id)) {
      const w = r.wikidata ? `[${r.wikidata.q}](https://www.wikidata.org/wiki/${r.wikidata.q}) ${r.wikidata.label}` : '—';
      lines.push(
        `| ${r.name.el} | ${r.pin.lat}, ${r.pin.lng} (r ${r.pin.radiusM} m) | ${w} | ${r.wikidata ? r.wikidata.deltaM + ' m' : '—'} | ${r.verdict} |`,
      );
    }
    lines.push('');
  }
  return lines.join('\n');
}

// ----------------------------------------------------------------------- main

const only = process.argv.slice(2);
const startedAt = new Date().toISOString();
const cityIds = (only.length ? only : listCities()).sort();
const cities = cityIds.map(parseCity);
const total = cities.reduce((n, c) => n + c.spots.length, 0);
console.error(`${cities.length} cities, ${total} spots, ref ${REF}`);

const results = [];
let done = 0;
for (const city of cities) {
  if (city.spots.length !== 10) console.error(`  ! ${city.id}: parsed ${city.spots.length} spots`);
  for (const spot of city.spots) {
    const r = await auditSpot(spot, city);
    results.push(r);
    done += 1;
    const d = r.wikidata ? `${r.wikidata.deltaM} m` : '—';
    console.error(`  [${String(done).padStart(3)}/${total}] ${city.id}/${spot.id}: ${r.verdict} ${d}`);
  }
}

mkdirSync(dirname(OUT_JSON), { recursive: true });
writeFileSync(OUT_JSON, JSON.stringify({ ref: REF, startedAt, thresholds: { OK_M, CHECK_M }, results }, null, 2) + '\n');
writeFileSync(OUT_MD, markdown(results, cities, startedAt) + '\n');

const count = (v) => results.filter((r) => r.verdict === v).length;
console.error(
  `done: ok ${count('ok')} · check ${count('check')} · wrong ${count('wrong')} · unmatched ${count('unmatched')} → ${OUT_MD}`,
);
