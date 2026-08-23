#!/usr/bin/env node
/**
 * School unit tooling — audit + print.
 *
 *   node scripts/school-units.mjs audit            # structural + arithmetic checks on every unit file
 *   node scripts/school-units.mjs print 3/math     # readable dump of a grade/subject (or 3 for a grade)
 *   node scripts/school-units.mjs registry         # (re)write grade index files + UNIT_COUNTS in registry.ts
 *
 * Loads each unit file through esbuild (already a Vite dependency), so what is checked is
 * exactly what the app will import.
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const UNITS_DIR = path.join(ROOT, 'data', 'units');

function listUnitFiles() {
  const out = [];
  for (const d of fs.readdirSync(UNITS_DIR)) {
    const m = /^grade(\d)$/.exec(d);
    if (!m) continue;
    for (const f of fs.readdirSync(path.join(UNITS_DIR, d))) {
      const fm = /^([a-z]+)-(.+)\.ts$/.exec(f);
      if (!fm) continue;
      out.push({ grade: Number(m[1]), subject: fm[1], unit: fm[2], file: path.join(UNITS_DIR, d, f), key: `${m[1]}/${fm[1]}/${fm[2]}` });
    }
  }
  return out.sort((a, b) => a.key.localeCompare(b.key));
}

/** Load a unit file for real: esbuild strips the types, then we import the bundle. */
async function loadUnit(file) {
  const esbuild = await import('esbuild');
  const r = await esbuild.build({ entryPoints: [file], bundle: true, format: 'esm', write: false, platform: 'neutral', logLevel: 'silent' });
  const mod = await import('data:text/javascript;base64,' + Buffer.from(r.outputFiles[0].text).toString('base64'));
  const name = Object.keys(mod).find(k => Array.isArray(mod[k]));
  return { name, qs: (mod[name] || []).map(q => ({ el: q.q.el, en: q.q.en, oel: q.options.el, oen: q.options.en, correct: q.correct, xel: q.explanation?.el || '', xen: q.explanation?.en || '' })) };
}


async function audit() {
  let problems = 0;
  for (const u of listUnitFiles()) {
    const issues = [];
    let qs = [], name;
    try { ({ qs, name } = await loadUnit(u.file)); } catch (e) { issues.push(`does not load: ${e.message.split('\n')[0]}`); }
    if (qs.length < 15 || qs.length > 20) issues.push(`${qs.length} questions (want 15–20)`);
    const seen = new Set();
    const dist = [0, 0, 0, 0];
    qs.forEach((q, i) => {
      const n = i + 1;
      if (q.oel.length !== 4 || q.oen.length !== 4) issues.push(`#${n}: ${q.oel.length}/${q.oen.length} options (want 4)`);
      if (q.correct < 0 || q.correct >= q.oel.length) issues.push(`#${n}: correct=${q.correct} out of range`);
      else dist[q.correct]++;
      if (new Set(q.oel).size !== q.oel.length) issues.push(`#${n}: duplicate Greek options`);
      if (new Set(q.oen).size !== q.oen.length) issues.push(`#${n}: duplicate English options`);
      const dupKey = q.el + '|' + q.oel.join('|'); // spelling drills reuse one stem with different options
      if (seen.has(dupKey)) issues.push(`#${n}: duplicate question`);
      seen.add(dupKey);
      if (!q.xel || !q.xen) issues.push(`#${n}: missing explanation`);
      if (/[\u{1F300}-\u{1FAFF}]/u.test(q.el + q.en)) issues.push(`#${n}: emoji in question text`);
      // arithmetic check: a stem that is exactly "Πόσο κάνει <expr>;" with + − × ÷ and a numeric correct option
      const am = /^Πόσο κάνει ([\d.\s+−×÷]+);$/.exec(q.el);
      if (u.subject === 'math' && am && /^[\d.,]+$/.test(q.oel[q.correct] || '')) {
        const expr = am[1].replace(/(\d)\.(\d{3})/g, '$1$2').replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/');
        let exp; try { exp = Function(`return (${expr})`)(); } catch { exp = NaN; }
        const got = Number(q.oel[q.correct].replace(/(\d)\.(\d{3})/g, '$1$2').replace(',', '.'));
        if (Number.isFinite(exp) && Math.abs(got - exp) > 1e-9) issues.push(`#${n}: "${q.el}" marks ${q.oel[q.correct]} but ${exp} is right`);
      }
    });
    // Advisory only: the app shuffles options (utils/shuffleOptions.ts), so a skewed index is not a bug.
    if (qs.length && Math.max(...dist) > qs.length * 0.6) console.log(`  note ${u.key}: correct index skewed ${dist.join('/')} (harmless — options are shuffled in the app)`);
    if (!name) issues.push('no exported array found');
    if (issues.length) { problems += issues.length; console.log(`✗ ${u.key}\n   ${issues.join('\n   ')}`); }
    else console.log(`✓ ${u.key} (${qs.length})`);
  }
  console.log(problems ? `\n${problems} problem(s)` : '\nall clean');
  process.exit(problems ? 1 : 0);
}

async function print(filter) {
  for (const u of listUnitFiles()) {
    if (filter && !u.key.startsWith(filter)) continue;
    const { qs } = await loadUnit(u.file);
    console.log(`\n══ ${u.key} (${qs.length}) ══`);
    qs.forEach((q, i) => {
      console.log(`${i + 1}. ${q.el}`);
      console.log('   ' + q.oel.map((o, k) => (k === q.correct ? `[${o}]` : o)).join(' · '));
      console.log(`   → ${q.xel}`);
    });
  }
}

/** Write data/units/grade<N>/index.ts for every grade and the UNIT_COUNTS block of registry.ts. */
async function registry() {
  const rows = [];
  for (const u of listUnitFiles()) { const { name, qs } = await loadUnit(u.file); rows.push({ ...u, name, n: qs.length }); }
  const grades = [...new Set(rows.map(r => r.grade))].sort();
  for (const g of grades) {
    const mine = rows.filter(r => r.grade === g);
    const body = `/** Generated by \`node scripts/school-units.mjs registry\` — every written unit of this grade. */\n` +
      `import type { QuizQuestion } from '../../../types';\n` +
      mine.map(r => `import { ${r.name} } from './${r.subject}-${r.unit}';`).join('\n') +
      `\n\nexport const QUESTIONS: Record<string, QuizQuestion[]> = {\n` +
      mine.map(r => `  '${r.key}': ${r.name},`).join('\n') + `\n};\n`;
    fs.writeFileSync(path.join(UNITS_DIR, `grade${g}`, 'index.ts'), body);
  }
  const reg = path.join(UNITS_DIR, 'registry.ts');
  let src = fs.readFileSync(reg, 'utf8');
  src = src.replace(/export const UNIT_COUNTS[^]*?\n};/, `export const UNIT_COUNTS: Record<string, number> = {\n` + rows.map(r => `  '${r.key}': ${r.n},`).join('\n') + `\n};`);
  src = src.replace(/const loaders[^]*?\n};/, `const loaders: Record<number, () => Promise<{ QUESTIONS: Record<string, QuizQuestion[]> }>> = {\n` + grades.map(g => `  ${g}: () => import('./grade${g}/index'),`).join('\n') + `\n};`);
  fs.writeFileSync(reg, src);
  console.log(`wrote ${grades.length} grade index files and ${rows.length} UNIT_COUNTS entries`);
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === 'audit') await audit();
else if (cmd === 'print') await print(arg);
else if (cmd === 'registry') await registry();
else { console.log('usage: school-units.mjs audit | print <grade[/subject]> | registry'); process.exit(2); }
