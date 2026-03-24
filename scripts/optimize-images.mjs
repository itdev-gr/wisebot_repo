#!/usr/bin/env node
/**
 * 🖼️ Optimize all PNG images → WebP with fallback JPEG
 * Reduces ~69MB → ~7-10MB
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.join(__dirname, '..', 'public', 'images');

const files = fs.readdirSync(IMG_DIR).filter(f => f.endsWith('.png'));
console.log(`\n🖼️  Optimizing ${files.length} PNG images to WebP...\n`);

let done = 0, totalSaved = 0;

for (const file of files) {
  const inputPath = path.join(IMG_DIR, file);
  const outputPath = path.join(IMG_DIR, file.replace('.png', '.webp'));

  if (fs.existsSync(outputPath)) {
    done++;
    continue;
  }

  try {
    const inputSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .webp({ quality: 82, effort: 4 })
      .toFile(outputPath);

    const outputSize = fs.statSync(outputPath).size;
    const saved = ((1 - outputSize / inputSize) * 100).toFixed(0);
    totalSaved += (inputSize - outputSize);
    done++;

    console.log(`  ✅ [${done}/${files.length}] ${file} → .webp (${(inputSize/1024).toFixed(0)}KB → ${(outputSize/1024).toFixed(0)}KB, -${saved}%)`);
  } catch (err) {
    console.log(`  ❌ ${file}: ${err.message}`);
  }
}

console.log(`\n✅ Done! ${done}/${files.length} images optimized`);
console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)}MB\n`);
