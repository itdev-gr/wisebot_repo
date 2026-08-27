#!/usr/bin/env node
/**
 * Import exported hero cards into the Hero Market.
 * =================================================
 * The Hero Factory only ever downloads a full CARD (1080×1350: character art on
 * top, then the name, the two stat boxes and the WiseBot footer). A market
 * thumbnail needs just the character, so this crops the card's art region back
 * out and writes a web-sized WebP.
 *
 * The crop matches utils/heroCardCanvas.ts exactly — imgX 60, imgY 40,
 * imgW W-120, imgH H*0.62. If that layout changes, change these together.
 *
 *   node scripts/import-hero-cards.mjs "<folder of WiseBot_Hero_*.png>"
 *
 * Writes public/images/market/<slug>.webp and prints the SQL to insert the
 * listings. It does not touch the database — review the images first, then run
 * the SQL.
 */
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, basename, extname } from 'node:path';
import sharp from 'sharp';

const srcDir = process.argv[2];
if (!srcDir) {
  console.error('Usage: node scripts/import-hero-cards.mjs "<folder>"');
  process.exit(1);
}

// Card geometry — keep in sync with utils/heroCardCanvas.ts
const CARD_W = 1080;
const CARD_H = 1350;
const ART = {
  left: 60,
  top: 40,
  width: CARD_W - 120,
  height: Math.round(CARD_H * 0.62),
};
// The card paints a dark gradient over the bottom of the art so the title reads
// against it. Trim it so the market thumbnail is not half fade.
const FADE_TRIM = 150;

const OUT_DIR = 'public/images/market';
mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(srcDir)
  .filter(f => /^WiseBot_Hero_.*\.(png|jpg|jpeg|webp)$/i.test(f))
  .sort();

if (!files.length) {
  console.error(`No WiseBot_Hero_* images found in ${srcDir}`);
  process.exit(1);
}

const rows = [];
for (const file of files) {
  const slug = basename(file, extname(file))
    .replace(/^WiseBot_Hero_/, '')
    .replace(/[^a-zA-Z0-9Ͱ-Ͽ_-]/g, '')
    .toLowerCase() || 'hero';

  const meta = await sharp(join(srcDir, file)).metadata();
  if (meta.width !== CARD_W || meta.height !== CARD_H) {
    console.warn(`! ${file}: ${meta.width}×${meta.height}, expected ${CARD_W}×${CARD_H} — skipped`);
    continue;
  }

  const outName = `${slug}.webp`;
  await sharp(join(srcDir, file))
    .extract({ ...ART, height: ART.height - FADE_TRIM })
    .resize(640, 640, { fit: 'cover', position: 'top' })
    .webp({ quality: 82 })
    .toFile(join(OUT_DIR, outName));

  rows.push({ slug, url: `https://wisebot.gr/images/market/${outName}` });
  console.log(`✓ ${file} → ${OUT_DIR}/${outName}`);
}

const sql = `-- Review the images in ${OUT_DIR}/ before running this.
-- Set seller_name per row to whoever actually made each hero.
insert into public.market_listings (seller_id, seller_name, type, title, image_url, price, status, reviewed_at)
select p.id, v.seller_name, 'image', v.title, v.image_url, 3, 'approved', now()
from public.profiles p
cross join (values
${rows.map(r => `  ('WiseBot Studio', '${r.slug.toUpperCase()}', '${r.url}')`).join(',\n')}
) as v(seller_name, title, image_url)
where p.parent_email = 'vskevis@itdev.gr'
  and not exists (select 1 from public.market_listings ml where ml.image_url = v.image_url);
`;

writeFileSync(join(OUT_DIR, '_listings.sql'), sql);
console.log(`\n${rows.length} imported. SQL written to ${OUT_DIR}/_listings.sql`);
