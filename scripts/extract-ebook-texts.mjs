#!/usr/bin/env node
/**
 * Extract all ebook page texts for TTS audio generation.
 *
 * Reads all 26 bookData_*.ts files (NEW pages[] structure),
 * extracts the text.el from each page, and saves as JSON.
 *
 * Output: scripts/ebooks-for-tts.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');
const OUTPUT_FILE = path.join(__dirname, 'ebooks-for-tts.json');

// ─── Extract text.el from each page in the pages[] array ─────
function extractPagesFromTs(fileContent) {
  const pages = [];

  // Strategy: find each `text: {` block, then extract the el template literal
  // The structure is:
  //   text: {
  //     el: `...multiline text...`,
  //     en: `...`
  //   }

  // Split by 'text: {' to find each text block
  const parts = fileContent.split(/\btext:\s*\{/);

  // Skip the first part (before first text: {)
  for (let i = 1; i < parts.length; i++) {
    const block = parts[i];

    // Find el: `...` template literal (before the en: )
    const elMatch = block.match(/^\s*(?:\/\/[^\n]*)?\s*el:\s*`([\s\S]*?)`\s*,?\s*en:/);

    if (elMatch) {
      const raw = elMatch[1];
      // Clean up the extracted text
      const cleaned = raw
        .replace(/\n[ \t]+/g, '\n')   // remove leading whitespace from lines
        .replace(/\n{3,}/g, '\n\n')    // max 2 newlines
        .trim();

      if (cleaned.length > 20) {
        pages.push(cleaned);
      }
    }
  }

  return pages;
}

// ─── Main ────────────────────────────────────────────────────
async function main() {
  console.log('\n📚 WiseBot Ebook Text Extractor (pages[] structure)');
  console.log('─'.repeat(54));

  const allItems = [];
  let booksFound = 0;

  for (let bookNum = 1; bookNum <= 34; bookNum++) {
    const filePath = path.join(DATA_DIR, `bookData_${bookNum}.ts`);

    if (!fs.existsSync(filePath)) {
      console.log(`   ⚠️  Book ${bookNum}: file not found`);
      continue;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Extract title for display
    const titleMatch = fileContent.match(/title:\s*\{[^}]*el:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : `Book ${bookNum}`;

    // Verify it has the pages[] structure
    if (!fileContent.includes('pages: [') && !fileContent.includes('pages:[')) {
      console.log(`   ⚠️  Book ${bookNum} (${title}): no pages[] structure`);
      continue;
    }

    // Extract the pages section only (everything after 'pages: [')
    const pagesStart = fileContent.indexOf('pages: [');
    if (pagesStart === -1) {
      console.log(`   ⚠️  Book ${bookNum}: pages section not found`);
      continue;
    }

    const pagesSection = fileContent.substring(pagesStart);
    const pageTexts = extractPagesFromTs(pagesSection);

    if (pageTexts.length === 0) {
      console.log(`   ⚠️  Book ${bookNum} (${title}): no pages extracted`);
      continue;
    }

    for (let p = 0; p < pageTexts.length; p++) {
      allItems.push({
        bookId: bookNum,
        page: p + 1,
        lang: 'el',
        text: pageTexts[p],
        charCount: pageTexts[p].length,
      });
    }

    booksFound++;
    console.log(`   ✅ Book ${bookNum}: "${title}" → ${pageTexts.length} pages`);
  }

  console.log('─'.repeat(54));
  console.log(`\n📊 Total: ${allItems.length} pages from ${booksFound} books`);
  console.log(`   Total characters: ${allItems.reduce((s, i) => s + i.charCount, 0).toLocaleString()}`);
  console.log(`   Avg per page: ${Math.round(allItems.reduce((s, i) => s + i.charCount, 0) / allItems.length)} chars`);

  // Save
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allItems, null, 2));
  console.log(`\n💾 Saved → ${OUTPUT_FILE}\n`);
}

main().catch(err => {
  console.error('\n❌ Error:', err.message);
  console.error(err.stack);
  process.exit(1);
});
