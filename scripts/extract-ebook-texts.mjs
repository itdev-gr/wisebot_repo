#!/usr/bin/env node
/**
 * Extract all ebook page texts for TTS audio generation.
 *
 * Reads all 26 bookData_*.ts files, splits into pages (same logic as Ebooks.tsx),
 * strips HTML to plain text, and saves as JSON for generate-ebook-voices.mjs
 *
 * Output: scripts/ebooks-for-tts.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');
const OUTPUT_FILE = path.join(__dirname, 'ebooks-for-tts.json');

// ─── splitIntoPages — same logic as Ebooks.tsx ────────────────
function splitIntoPages(html) {
  if (!html) return [''];
  try {
    const dom = new JSDOM(`<div>${html.trim()}</div>`);
    const doc = dom.window.document;
    const root = doc.querySelector('div').firstElementChild || doc.querySelector('div');
    const children = Array.from(root.children);
    if (children.length <= 1) return [html];

    const MIN_PAGE = 200;
    const MAX_PAGE = 1200;

    const pages = [[]];
    let len = 0;

    for (const child of children) {
      const textLen = (child.textContent || '').trim().length;
      if (len > MIN_PAGE && len + textLen > MAX_PAGE && pages[pages.length - 1].length > 0) {
        pages.push([]);
        len = 0;
      }
      pages[pages.length - 1].push(child.outerHTML);
      len += textLen;
      if (child.tagName === 'SECTION' && len > MIN_PAGE) {
        pages.push([]);
        len = 0;
      }
    }

    if (pages[pages.length - 1].length === 0) pages.pop();

    while (pages.length > 1) {
      const last = pages[pages.length - 1];
      const lastLen = last.join('').replace(/<[^>]*>/g, '').length;
      if (lastLen < MIN_PAGE) {
        pages.pop();
        pages[pages.length - 1].push(...last);
      } else break;
    }

    return pages.map(p => p.join('\n'));
  } catch {
    return [html];
  }
}

// ─── htmlToPlainText — same logic as ttsVoice.ts ────────────
function htmlToPlainText(html) {
  const dom = new JSDOM(`<div>${html}</div>`);
  const doc = dom.window.document;
  const div = doc.querySelector('div');
  div.querySelectorAll('script, style, img, svg').forEach(el => el.remove());
  return (div.textContent || '').trim();
}

// ─── Extract content from TypeScript book data files ────────
function extractContent(fileContent) {
  // Find all content blocks: content: { el: `...`, en: `...` }
  const books = [];

  // Match book id
  const idMatches = [...fileContent.matchAll(/id:\s*(\d+)/g)];

  // Match el content (template literal)
  const elMatches = [...fileContent.matchAll(/content:\s*\{[\s\S]*?el:\s*`([\s\S]*?)`,?\s*(?:en:|$)/g)];

  if (elMatches.length === 0) {
    // Try alternative format
    const altMatches = [...fileContent.matchAll(/el:\s*`([\s\S]*?)`/g)];
    // Filter to only content.el (not title.el, description.el etc)
    // Content el is usually very long (>500 chars)
    for (const match of altMatches) {
      if (match[1].length > 500) {
        return [{ content: match[1] }];
      }
    }
  }

  return elMatches.map(m => ({ content: m[1] }));
}

// ─── Main ─────────────────────────────────────────────────────
async function main() {
  console.log('\n📚 WiseBot Ebook Text Extractor');
  console.log('─'.repeat(50));

  const allItems = [];
  let totalPages = 0;

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

    // Extract title
    const titleMatch = fileContent.match(/title:\s*\{[^}]*el:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : `Book ${bookNum}`;

    // Find the content.el template literal
    // Strategy: find 'content:' then find the el template literal after it
    const contentBlockMatch = fileContent.match(/content:\s*\{\s*(?:\/\/[^\n]*)?\s*el:\s*`([\s\S]*?)`\s*,\s*en:/);

    if (!contentBlockMatch) {
      console.log(`   ⚠️  Book ${bookNum} (${title}): no content.el found`);
      continue;
    }

    const htmlContent = contentBlockMatch[1];

    // Resolve template literal variables (${IMG_...}) - they become empty since we strip images anyway
    const resolvedHtml = htmlContent.replace(/\$\{[^}]+\}/g, '');

    // Split into pages
    const pages = splitIntoPages(resolvedHtml);

    // Extract plain text for each page
    let pageCount = 0;
    for (let p = 0; p < pages.length; p++) {
      const text = htmlToPlainText(pages[p]).trim();

      // Clean up whitespace
      const cleaned = text
        .replace(/\n\s+/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

      if (cleaned.length > 10) {
        allItems.push({
          bookId,
          page: p + 1,
          lang: 'el',
          text: cleaned,
          charCount: cleaned.length
        });
        pageCount++;
      }
    }

    totalPages += pageCount;
    console.log(`   ✅ Book ${bookNum}: "${title}" → ${pageCount} pages`);
  }

  console.log('─'.repeat(50));
  console.log(`\n📊 Total: ${allItems.length} pages from ${new Set(allItems.map(i => i.bookId)).size} books`);
  console.log(`   Total characters: ${allItems.reduce((s, i) => s + i.charCount, 0).toLocaleString()}`);
  console.log(`   Avg page: ${Math.round(allItems.reduce((s, i) => s + i.charCount, 0) / allItems.length)} chars`);

  // Save
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allItems, null, 2));
  console.log(`\n💾 Saved to: ${OUTPUT_FILE}`);
  console.log('');
}

main().catch(err => {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
});
