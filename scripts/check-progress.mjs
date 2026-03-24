import fs from 'fs';
const pages = JSON.parse(fs.readFileSync('scripts/ebooks-for-tts.json','utf8'));
const existing = fs.readdirSync('public/audio/ebooks/');
const done = pages.filter(p => existing.includes(`book-${p.bookId}-page-${p.page}-el.wav`));
const missing = pages.filter(p => !existing.includes(`book-${p.bookId}-page-${p.page}-el.wav`));
const byBook = {};
missing.forEach(p => { byBook[p.bookId] = (byBook[p.bookId]||0)+1; });

console.log(`\n✅ Done: ${done.length}/${pages.length}  |  ❌ Missing: ${missing.length}`);
console.log(`💾 Size: ${(existing.reduce((s,f) => s + fs.statSync('public/audio/ebooks/'+f).size, 0)/1024/1024).toFixed(0)} MB\n`);
console.log('Missing per book:');
Object.keys(byBook).sort((a,b)=>a-b).forEach(b => console.log(`  Book ${b}: ${byBook[b]} pages`));
console.log('');
