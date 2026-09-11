#!/usr/bin/env node
/**
 * Extract every World text that gets narrated, for TTS.
 *
 * Output: scripts/world/world-for-tts.json → [{ tag, cityId, lang, kind, text }]
 *
 * Run through vite-node so the TypeScript content modules resolve, exactly as
 * `scripts/extract-academy-texts.mjs` does:
 *
 *   npx vite-node scripts/world/extract-texts.mjs
 *
 * It imports the modules rather than scraping them with a regex. The Academy
 * extractor used to scrape, silently skipped fifteen stories, and those fifteen
 * never got narration — the comment at the top of that file is the tombstone. This
 * one cannot drift from the source.
 *
 * `tag` is the audio filename stem, so it must stay stable for the life of a place:
 * renaming it orphans a generated file and its word timings.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const OUT = path.join(HERE, 'world-for-tts.json');

const { CITY_IDS, loadCity, CITIES } = await import(path.join(ROOT, 'data', 'world', 'registry.ts'));
const { WORLD_LANGS } = await import(path.join(ROOT, 'data', 'world', 'types.ts'));

const rows = [];

for (const cityId of CITY_IDS) {
  const city = CITIES.find((c) => c.id === cityId);
  const { places } = await loadCity(cityId);

  for (const place of places) {
    for (const lang of WORLD_LANGS) {
      const story = place.story?.[lang]?.trim();
      // A language is present only once it has actually been translated. Generating
      // narration from an English fallback would ship a German child an English voice
      // with German subtitles, which is worse than no audio at all.
      if (!story) continue;
      rows.push({
        tag: `${place.id}-${lang}`,
        cityId: city?.id ?? place.cityId,
        placeId: place.id,
        lang,
        kind: 'story',
        text: story,
      });
    }

    for (const room of place.museum?.rooms ?? []) {
      for (const exhibit of room.exhibits) {
        for (const lang of WORLD_LANGS) {
          const blurb = exhibit.blurb?.[lang]?.trim();
          if (!blurb) continue;
          rows.push({
            tag: `${exhibit.id}-${lang}`,
            cityId: city?.id ?? place.cityId,
            placeId: place.id,
            exhibitId: exhibit.id,
            lang,
            kind: 'exhibit',
            text: blurb,
          });
        }
      }
    }
  }
}

const tags = rows.map((r) => r.tag);
const dupes = tags.filter((t, i) => tags.indexOf(t) !== i);
if (dupes.length) {
  console.error(`! duplicate audio tags, which would overwrite each other: ${[...new Set(dupes)].join(', ')}`);
  process.exit(1);
}

fs.writeFileSync(OUT, JSON.stringify(rows, null, 2));

const byLang = rows.reduce((acc, r) => ({ ...acc, [r.lang]: (acc[r.lang] ?? 0) + 1 }), {});
const chars = rows.reduce((sum, r) => sum + r.text.length, 0);
console.log(`wrote ${path.relative(ROOT, OUT)} — ${rows.length} clips`);
console.log(`  by language: ${Object.entries(byLang).map(([l, n]) => `${l} ${n}`).join(', ')}`);
console.log(`  stories ${rows.filter((r) => r.kind === 'story').length}, exhibits ${rows.filter((r) => r.kind === 'exhibit').length}`);
console.log(`  ${Math.round(chars / 1000)}k characters, roughly ${Math.round(chars / 900)} minutes of speech`);
