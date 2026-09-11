#!/usr/bin/env node
/**
 * WiseBot World — coordinate resolver and grader.
 *
 * Why this exists: a place's coordinate is content, and a wrong one is invisible.
 * Two churches that land on the same pin, or a market pinned two streets away, look
 * fine in a data file and only break on the map. So no coordinate is ever typed by
 * hand — it is resolved from a source, cross-checked against independent ones, and
 * graded.
 *
 * Licensing, which is the reason the shapes look the way they do:
 *   - Wikidata is CC0. Its coordinate is the value we STORE.
 *   - OpenStreetMap is ODbL and Wikipedia is CC BY-SA. We never store their numbers.
 *     We store only the DISTANCE in metres from our stored point, plus the reference,
 *     so the audit trail stays useful without pulling a share-alike obligation into
 *     our shipped data.
 *
 * Usage:
 *   node scripts/world/resolve-coords.mjs athens
 *   node scripts/world/resolve-coords.mjs athens --out data/world/coords/athens.json
 *
 * Input:  scripts/world/seeds/<city>.json
 * Output: data/world/coords/<city>.json
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const UA = 'WiseBotWorld/1.0 (https://wisebot.gr; info@wisebot.gr)';

/** Two independent sources must agree within this to count as agreement. */
const AGREE_M = 30;
/**
 * Beyond this, the sources are describing different things. Never ships.
 * Anchor-aware, because the tolerance is a property of the place: a museum door is
 * a point, a hill is a kilometre wide, and a park's polygon centre is legitimately
 * far from its gate. A flat threshold marks Lycabettus as broken and lets a moved
 * museum through, which is backwards.
 */
const DISAGREE_M = { entrance: 100, centroid: 100, viewpoint: 400, area: 500 };
/** Distinct places closer than this are almost always the same wrong pin. */
const MIN_SEPARATION_M = 25;
/** A place sitting on the city's own centre point is a centroid mistake. */
const CITY_CENTRE_M = 60;

// ---------------------------------------------------------------- geo helpers

/** Metres between two WGS84 points. Haversine; good to a metre at city scale. */
export function distanceM(a, b) {
  const R = 6371008.8;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const la1 = toRad(a.lat);
  const la2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

const round5 = (n) => Math.round(n * 1e5) / 1e5;

// ------------------------------------------------------------------- fetching

async function getJson(url, { accept = 'application/json' } = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: accept } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  return res.json();
}

/** Politeness delay. Wikidata and Nominatim both ask for it; Overpass enforces it. */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Wikidata: the stored coordinate, plus the labels we can reuse as a name check.
 * P625 is "coordinate location"; we take the preferred rank if there is one.
 */
async function fromWikidata(qid) {
  const url =
    `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${qid}` +
    `&props=labels|claims&languages=el|en|de|fr|es|it&format=json&origin=*`;
  const data = await getJson(url);
  const entity = data?.entities?.[qid];
  if (!entity || entity.missing !== undefined) throw new Error(`${qid}: no such item`);

  const claims = entity.claims?.P625 ?? [];
  const preferred = claims.find((c) => c.rank === 'preferred') ?? claims[0];
  const value = preferred?.mainsnak?.datavalue?.value;
  if (!value) throw new Error(`${qid}: no P625 coordinate`);
  if (value.globe && !value.globe.endsWith('Q2')) {
    throw new Error(`${qid}: coordinate is not on Earth (${value.globe})`);
  }

  const labels = Object.fromEntries(
    Object.entries(entity.labels ?? {}).map(([k, v]) => [k, v.value]),
  );
  return { lat: value.latitude, lng: value.longitude, labels };
}

/**
 * OpenStreetMap, via Overpass, matched on the wikidata tag rather than on a name —
 * name matching is what puts a pin two streets down. Cross-check only: we keep the
 * distance, never the coordinate.
 */
async function fromOsm(qid) {
  const query = `[out:json][timeout:25];nwr["wikidata"="${qid}"];out center 1;`;
  const res = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    headers: { 'User-Agent': UA, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${encodeURIComponent(query)}`,
  });
  if (!res.ok) throw new Error(`overpass ${res.status}`);
  const data = await res.json();
  const el = data?.elements?.[0];
  if (!el) return null;
  const point = el.type === 'node' ? { lat: el.lat, lng: el.lon } : { lat: el.center?.lat, lng: el.center?.lon };
  if (point.lat == null) return null;
  return { point, ref: `${el.type}/${el.id}` };
}

/**
 * Wikipedia's own coordinates for the article. Often but not always a copy of
 * Wikidata's — when it differs, that difference is the useful signal. Cross-check only.
 */
async function fromWikipedia(qid) {
  const site = await getJson(
    `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${qid}` +
      `&props=sitelinks&sitefilter=enwiki&format=json&origin=*`,
  );
  const title = site?.entities?.[qid]?.sitelinks?.enwiki?.title;
  if (!title) return null;
  const page = await getJson(
    `https://en.wikipedia.org/w/api.php?action=query&prop=coordinates` +
      `&titles=${encodeURIComponent(title)}&format=json&origin=*`,
  );
  const pages = page?.query?.pages ?? {};
  const first = Object.values(pages)[0];
  const c = first?.coordinates?.[0];
  if (!c) return null;
  return { point: { lat: c.lat, lng: c.lon }, ref: title };
}

// -------------------------------------------------------------------- grading

/**
 * A = 3 independent sources inside AGREE_M
 * B = 2 inside AGREE_M
 * C = 1 source only, or the others were silent
 * D = something disagrees by more than DISAGREE_M — a content bug, never ships
 */
function grade(checks, anchor) {
  const limit = DISAGREE_M[anchor] ?? DISAGREE_M.entrance;
  const outliers = checks.filter((c) => c.deltaM > limit);
  const agreeing = 1 + checks.filter((c) => c.deltaM <= AGREE_M).length;

  // A lone outlier next to two sources that agree tightly is a polygon centre, not a
  // wrong pin — it is recorded as a warning and the grade stands. An outlier with
  // nothing agreeing behind it means nobody knows where this place is: that is a D.
  if (outliers.length && agreeing < 2) return 'D';
  if (agreeing >= 3) return 'A';
  if (agreeing === 2) return 'B';
  return 'C';
}

// ------------------------------------------------------------------ resolving

async function resolvePlace(seed) {
  const out = {
    id: seed.id,
    name: seed.name,
    anchor: seed.anchor ?? 'entrance',
    sources: [],
    warnings: [],
  };

  const wd = await fromWikidata(seed.wikidata);
  out.lat = round5(wd.lat);
  out.lng = round5(wd.lng);
  out.labels = wd.labels;
  out.sources.push({ kind: 'wikidata', ref: seed.wikidata, deltaM: 0 });

  const point = { lat: wd.lat, lng: wd.lng };
  const checks = [];

  for (const [kind, fn] of [['osm', fromOsm], ['wikipedia', fromWikipedia]]) {
    try {
      await sleep(1100);
      const hit = await fn(seed.wikidata);
      if (!hit) {
        out.warnings.push(`${kind}: no match`);
        continue;
      }
      const deltaM = Math.round(distanceM(point, hit.point));
      checks.push({ kind, deltaM });
      out.sources.push({ kind, ref: hit.ref, deltaM });
      const limit = DISAGREE_M[out.anchor] ?? DISAGREE_M.entrance;
      if (deltaM > limit) out.warnings.push(`${kind} is ${deltaM} m away — outlier, check by eye`);
    } catch (err) {
      out.warnings.push(`${kind}: ${err.message}`);
    }
  }

  out.confidence = grade(checks, out.anchor);
  out.verifiedAt = new Date().toISOString().slice(0, 10);

  // The failure the owner actually reported: a landmark pinned at the centre of the
  // thing that contains it. Wikidata does this for markets and for church complexes.
  if (seed.expectAnchor === 'entrance' && out.anchor !== 'entrance') {
    out.warnings.push('anchor is not the entrance — check the door, not the building');
  }
  return out;
}

// ------------------------------------------------------------- whole-city pass

/**
 * Two distinct places on the same pin, and pins sitting on the city centre.
 *
 * Some places really are neighbours — Agios Eleftherios stands against the wall of
 * the Metropolitan Cathedral. Those pairs are declared in the seed's `adjacentPairs`,
 * so a real adjacency is a decision on the record and everything else is a bug.
 */
function auditCity(places, centre, adjacentPairs = []) {
  const problems = [];
  const allowed = new Set(adjacentPairs.map((p) => [...p].sort().join('|')));
  for (let i = 0; i < places.length; i++) {
    for (let j = i + 1; j < places.length; j++) {
      const d = Math.round(distanceM(places[i], places[j]));
      const key = [places[i].id, places[j].id].sort().join('|');
      if (d < MIN_SEPARATION_M && !allowed.has(key)) {
        problems.push(
          `${places[i].id} and ${places[j].id} are ${d} m apart — same pin, two places`,
        );
      }
    }
  }
  if (centre) {
    for (const p of places) {
      const d = Math.round(distanceM(p, centre));
      if (d < CITY_CENTRE_M) {
        problems.push(`${p.id} sits ${d} m from the city centre point — centroid mistake`);
      }
    }
  }
  for (const p of places) {
    if (p.confidence === 'D') problems.push(`${p.id} graded D — sources disagree`);
  }
  return problems;
}

// ------------------------------------------------------------------------ cli

async function main() {
  const [city, ...rest] = process.argv.slice(2);
  if (!city) {
    console.error('usage: node scripts/world/resolve-coords.mjs <city> [--out <path>]');
    process.exit(1);
  }
  const outFlag = rest.indexOf('--out');
  const outPath =
    outFlag >= 0 ? resolve(ROOT, rest[outFlag + 1]) : resolve(ROOT, `data/world/coords/${city}.json`);

  const seedPath = resolve(ROOT, `scripts/world/seeds/${city}.json`);
  const seed = JSON.parse(await readFile(seedPath, 'utf8'));

  const places = [];
  for (const p of seed.places) {
    process.stderr.write(`  ${p.id} … `);
    try {
      const resolved = await resolvePlace(p);
      places.push(resolved);
      process.stderr.write(
        `${resolved.confidence}  ${resolved.lat},${resolved.lng}` +
          (resolved.warnings.length ? `  (${resolved.warnings.join('; ')})` : '') +
          '\n',
      );
    } catch (err) {
      process.stderr.write(`FAILED — ${err.message}\n`);
      places.push({ id: p.id, name: p.name, error: err.message, confidence: 'D' });
    }
    await sleep(300);
  }

  const problems = auditCity(
    places.filter((p) => p.lat != null),
    seed.centre,
    seed.adjacentPairs,
  );
  const report = {
    city,
    resolvedAt: new Date().toISOString(),
    centre: seed.centre ?? null,
    places,
    problems,
  };

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  console.error(`\nwrote ${outPath}`);
  if (problems.length) {
    console.error(`\n${problems.length} problem(s):`);
    for (const p of problems) console.error(`  ✗ ${p}`);
    process.exitCode = 2;
  } else {
    console.error('\nno problems: every pin is its own place and nothing sits on the centre');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
