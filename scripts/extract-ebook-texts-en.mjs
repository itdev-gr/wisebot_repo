#!/usr/bin/env node
/**
 * 📚 Extract English ebook page texts for TTS audio generation.
 *
 * Reads all 26 bookData_*.ts files, extracts the `text.en` field
 * from each structured page (the NEW pages[] format), and saves
 * as JSON for generate-ebook-voices-openai.mjs
 *
 * Output: scripts/ebooks-en-for-tts.json
 * Format: [{ bookId, page, text, charCount }]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');
const OUTPUT_FILE = path.join(__dirname, 'ebooks-en-for-tts.json');

/**
 * Extract English page texts from a bookData TypeScript file.
 * Looks for `text: { el: \`...\`, en: \`...\` }` blocks in the pages array.
 * Filters to only long en values (>80 chars) — those are the page texts.
 */
function extractEnPageTexts(fileContent) {
  const results = [];

  // Find the pages array section
  const pagesIdx = fileContent.indexOf('pages:');
  if (pagesIdx === -1) return results;

  const pagesSection = fileContent.slice(pagesIdx);

  // Scan for each `text:` keyword, then find the `en:` template literal within it
  let i = 0;
  while (i < pagesSection.length) {
    // Find next 'text:' block
    const textKeyIdx = pagesSection.indexOf('\n        text:', i);
    if (textKeyIdx === -1) break;

    // Find 'en:' after this 'text:' (but before the next 'text:')
    const blockStart = textKeyIdx;
    const nextTextKeyIdx = pagesSection.indexOf('\n        text:', blockStart + 1);
    const blockEnd = nextTextKeyIdx === -1 ? pagesSection.length : nextTextKeyIdx;
    const textBlock = pagesSection.slice(blockStart, blockEnd);

    // Within this block, find 'en:' then extract the template literal
    const enIdx = textBlock.indexOf('en:');
    if (enIdx !== -1) {
      // Find opening backtick
      const btOpenIdx = textBlock.indexOf('`', enIdx);
      if (btOpenIdx !== -1) {
        // Find closing backtick — scan forward, skip escaped backticks
        let btCloseIdx = -1;
        for (let j = btOpenIdx + 1; j < textBlock.length; j++) {
          if (textBlock[j] === '`' && textBlock[j - 1] !== '\\') {
            btCloseIdx = j;
            break;
          }
        }

        if (btCloseIdx !== -1) {
          const text = textBlock.slice(btOpenIdx + 1, btCloseIdx).trim();
          // Only include actual page content (not short captions/titles)
          if (text.length > 80) {
            results.push(text);
          }
        }
      }
    }

    i = blockStart + 1;
  }

  return results;
}

// ─── Main ─────────────────────────────────────────────────────
async function main() {
  console.log('\n📚 WiseBot English Ebook Text Extractor');
  console.log('─'.repeat(50));

  const allItems = [];
  let totalChars = 0;

  for (let bookNum = 1; bookNum <= 26; bookNum++) {
    const filePath = path.join(DATA_DIR, `bookData_${bookNum}.ts`);

    if (!fs.existsSync(filePath)) {
      console.log(`   ⚠️  Book ${bookNum}: file not found`);
      continue;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Extract book id from file
    const idMatch = fileContent.match(/id:\s*(\d+)/);
    const bookId = idMatch ? parseInt(idMatch[1]) : bookNum;

    // Extract title (English)
    const titleMatch = fileContent.match(/title:\s*\{[^}]*en:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : `Book ${bookNum}`;

    // Extract English page texts
    const enTexts = extractEnPageTexts(fileContent);

    if (enTexts.length === 0) {
      console.log(`   ⚠️  Book ${bookNum} (${title}): no English page texts found`);
      continue;
    }

    for (let p = 0; p < enTexts.length; p++) {
      // Clean up extra whitespace
      const cleaned = enTexts[p]
        .replace(/\r\n/g, '\n')
        .replace(/\n\s+\n/g, '\n\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

      allItems.push({
        bookId,
        page: p + 1,
        text: cleaned,
        charCount: cleaned.length,
      });
      totalChars += cleaned.length;
    }

    console.log(`   ✅ Book ${bookNum}: "${title}" → ${enTexts.length} pages`);
  }

  console.log('─'.repeat(50));
  console.log(`\n📊 Total: ${allItems.length} pages from ${new Set(allItems.map(i => i.bookId)).size} books`);
  console.log(`   Total characters: ${totalChars.toLocaleString()}`);
  console.log(`   Avg page: ${Math.round(totalChars / allItems.length)} chars`);
  console.log(`   Est. OpenAI cost: ~$${((totalChars / 1000) * 0.030).toFixed(2)} (tts-1-hd)`);

  // Save
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allItems, null, 2));
  console.log(`\n💾 Saved to: ${OUTPUT_FILE}`);
  console.log('   Run: node scripts/generate-ebook-voices-openai.mjs\n');
}

main().catch(err => {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
});
