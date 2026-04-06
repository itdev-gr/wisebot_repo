import fs from 'fs';
const pages = JSON.parse(fs.readFileSync('scripts/ebooks-for-tts.json', 'utf8'));
const missing = pages.filter(p => !fs.existsSync(`public/audio/ebooks/book-${p.bookId}-page-${p.page}-el.wav`));
console.log(`Missing: ${missing.length} / ${pages.length}`);
missing.forEach(p => console.log(`  book-${p.bookId}-page-${p.page}`));
