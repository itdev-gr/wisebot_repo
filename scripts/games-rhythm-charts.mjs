// Note charts for the rhythm game («Ρυθμός»), derived from the MEASURED beat maps.
//
//   node scripts/games-rhythm-charts.mjs
//
// Input:  docs/games/research/beatmaps.json (measured from the real audio by
//         scripts/games-beatmap.mjs — do not re-measure; this script only reads it).
// Output: data/games/rhythmCharts.ts (generated, committed; the game never needs
//         anything but the mp3 at run time).
//
// Everything here is deterministic: same beat map in, byte-identical file out.
//
// THE RULES
//   window  — the chart starts at the first beat where the music has come in
//             (16-beat rolling mean strength ≥ min(song mean, 0.15)), snapped to a
//             downbeat, and lasts at most PLAY_CAP_SEC, so a round is short. The
//             audio starts LEAD_IN_SEC before the first note so it can fall in.
//   local strength — a beat's strength divided by the loudest beat within ±8
//             beats. The measured strengths are normalised per song, so a quiet
//             verse reads as ~0 next to a loud chorus; the local ratio still
//             finds its accents. Where even the local maximum is ~0, the grid
//             (which is phase-locked to the tempo) carries the chart alone.
//   phase   — the downbeat is the beat position (mod 4) with the largest total
//             strength; its parity is the "strong" parity.
//   easy    — every downbeat, plus the other strong-parity beat when it is a
//             clear accent. Never closer than two beats (≥ 0.92 s at 130 BPM),
//             so a 6-year-old can manage it.
//   normal  — every strong-parity beat, plus off-parity beats that are clear
//             accents. Never closer than one beat.
//   hard    — every beat, plus a half-beat pickup into a strong downbeat.
//   lanes   — mulberry32 seeded from song id + difficulty; never three in a
//             row on the same lane; a note closer than 0.35 s to the previous
//             one always changes lane.
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'docs/games/research/beatmaps.json');
const OUT = path.join(ROOT, 'data/games/rhythmCharts.ts');

const SONGS = [
  'apo-idea-se-paixnidi',
  'wisebot-future-mode',
  'wisebot-hero-squad',
  'wisebot-maker-mind',
  'xypna-maker',
];

const PLAY_CAP_SEC = 90;
const LEAD_IN_SEC = 3;
const TAIL_SEC = 2;
const ENTRY_STRENGTH = 0.15;
const EASY_ACCENT = 0.5;
const NORMAL_ACCENT = 0.6;
const HARD_PICKUP = 0.5;
const QUICK_GAP_SEC = 0.35;

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const round3 = (x) => Math.round(x * 1000) / 1000;

function localStrength(s) {
  return s.map((v, i) => {
    let max = 0;
    for (let j = Math.max(0, i - 8); j <= Math.min(s.length - 1, i + 8); j++) max = Math.max(max, s[j]);
    return max < 0.02 ? 0 : v / max;
  });
}

function downbeatPhase(s) {
  const sums = [0, 0, 0, 0];
  s.forEach((v, i) => { sums[i % 4] += v; });
  let best = 0;
  for (let k = 1; k < 4; k++) if (sums[k] > sums[best]) best = k;
  return best;
}

function chartWindow(beats, s, phase, durationSec) {
  const mean = s.reduce((a, b) => a + b, 0) / s.length;
  const threshold = Math.min(mean, ENTRY_STRENGTH);
  let first = 0;
  for (let i = 0; i + 16 <= s.length; i++) {
    const m = s.slice(i, i + 16).reduce((a, b) => a + b, 0) / 16;
    if (m >= threshold) { first = i; break; }
  }
  // Snap back to a downbeat, but never so early the lead-in would start before 0.
  let start = first;
  while (start > 0 && start % 4 !== phase) start--;
  while (start % 4 !== phase || beats[start] < LEAD_IN_SEC) start++;
  const startSec = beats[start];
  const lastSec = Math.min(startSec + PLAY_CAP_SEC, durationSec - TAIL_SEC);
  let end = start;
  while (end + 1 < beats.length && beats[end + 1] <= lastSec) end++;
  return { start, end };
}

function assignLanes(times, seed, noThree) {
  const rng = mulberry32(seed);
  const lanes = [];
  for (let i = 0; i < times.length; i++) {
    const banned = new Set();
    const prev = lanes[i - 1];
    if (i >= 2 && noThree && lanes[i - 1] === lanes[i - 2]) banned.add(prev);
    if (i >= 1 && times[i] - times[i - 1] < QUICK_GAP_SEC) banned.add(prev);
    const options = [0, 1, 2].filter((l) => !banned.has(l));
    lanes.push(options[Math.floor(rng() * options.length)]);
  }
  return lanes;
}

function buildSong(entry, id) {
  const { beats, strengths: s, bpm, offsetSec, durationSec } = entry;
  const ls = localStrength(s);
  const phase = downbeatPhase(s);
  const parity = phase % 2;
  const { start, end } = chartWindow(beats, s, phase, durationSec);
  const easy = [];
  const normal = [];
  const hard = [];
  for (let i = start; i <= end; i++) {
    const t = beats[i];
    const onDown = i % 4 === phase;
    const onStrong = i % 2 === parity;
    if (onDown || (onStrong && ls[i] >= EASY_ACCENT)) easy.push(t);
    if (onStrong || ls[i] >= NORMAL_ACCENT) normal.push(t);
    // hard: a half-beat pickup into a strong downbeat, then the beat itself
    if (onDown && i > start && ls[i] >= HARD_PICKUP) hard.push(round3((beats[i - 1] + t) / 2));
    hard.push(t);
  }
  const lastNote = hard[hard.length - 1];
  const playFromSec = round3(beats[start] - LEAD_IN_SEC);
  const playToSec = round3(Math.min(durationSec, lastNote + TAIL_SEC));
  const chart = (times, diff) => {
    const lanes = assignLanes(times, hash(`${id}:${diff}`), true);
    return { ms: times.map((t) => Math.round(t * 1000)), lanes: lanes.join('') };
  };
  return {
    id,
    bpm,
    offsetSec,
    durationSec,
    playFromSec,
    playToSec,
    charts: { easy: chart(easy, 'easy'), normal: chart(normal, 'normal'), hard: chart(hard, 'hard') },
  };
}

const all = JSON.parse(readFileSync(SRC, 'utf8'));
const songs = SONGS.map((id) => {
  const entry = all.find((e) => e.file === `${id}.mp3`);
  if (!entry) throw new Error(`no beat map for ${id}`);
  return buildSong(entry, id);
});

const wrap = (arr, per = 16) => {
  const rows = [];
  for (let i = 0; i < arr.length; i += per) rows.push(`        ${arr.slice(i, i + per).join(', ')},`);
  return rows.join('\n');
};

let out = `/**
 * GENERATED by scripts/games-rhythm-charts.mjs from docs/games/research/beatmaps.json.
 * Do not edit by hand: change the rules in the script and re-run it
 *   node scripts/games-rhythm-charts.mjs
 * \`data/games/rhythm.test.ts\` checks the result (sorted, inside the song,
 * lanes 0–2, easy spacing, hard ≥ normal ≥ easy).
 *
 * Per chart: \`ms\` = note times in ms of song time (from the start of the mp3),
 * \`lanes\` = one digit 0–2 per note. NO REACT IN THIS FILE.
 */

export interface RhythmChartData {
  ms: readonly number[];
  lanes: string;
}

export interface RhythmSongData {
  bpm: number;
  offsetSec: number;
  durationSec: number;
  /** Where the audio starts (s): ${LEAD_IN_SEC} s before the first note. */
  playFromSec: number;
  /** Where the round ends (s): ${TAIL_SEC} s after the last note. */
  playToSec: number;
  charts: { easy: RhythmChartData; normal: RhythmChartData; hard: RhythmChartData };
}

export const RHYTHM_CHART_DATA: Readonly<Record<string, RhythmSongData>> = {
`;
for (const s of songs) {
  out += `  '${s.id}': {\n    bpm: ${s.bpm},\n    offsetSec: ${s.offsetSec},\n    durationSec: ${s.durationSec},\n    playFromSec: ${s.playFromSec},\n    playToSec: ${s.playToSec},\n    charts: {\n`;
  for (const d of ['easy', 'normal', 'hard']) {
    const c = s.charts[d];
    out += `      ${d}: {\n        ms: [\n${wrap(c.ms)}\n        ],\n        lanes: '${c.lanes}',\n      },\n`;
  }
  out += '    },\n  },\n';
}
out += '};\n';
writeFileSync(OUT, out);

for (const s of songs) {
  const c = s.charts;
  const gap = (ms) => Math.min(...ms.slice(1).map((t, i) => t - ms[i]));
  console.log(
    `${s.id.padEnd(22)} ${String(s.bpm).padStart(6)} BPM  play ${s.playFromSec}–${s.playToSec}s  ` +
      `easy ${c.easy.ms.length} (min gap ${gap(c.easy.ms)}ms)  normal ${c.normal.ms.length}  hard ${c.hard.ms.length}`,
  );
}
