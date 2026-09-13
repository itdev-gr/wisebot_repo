// Tempo + onset detection for the rhythm game's beat maps.
// Decodes an mp3 to mono PCM via ffmpeg, computes a spectral-flux onset envelope,
// estimates BPM by autocorrelation, then phase-locks a beat grid to the envelope.
import { spawnSync } from 'child_process';

const ffmpegPath = process.env.FFMPEG_BIN
  || '/Users/vasilisskevis/Projects/wisebot-games/node_modules/ffmpeg-static/ffmpeg';

const SR = 22050;
const HOP = 512;            // ~23.2ms per frame
const FFT = 1024;

export function decode(file) {
  const r = spawnSync(ffmpegPath, [
    '-v', 'quiet', '-i', file, '-f', 'f32le', '-acodec', 'pcm_f32le',
    '-ac', '1', '-ar', String(SR), 'pipe:1',
  ], { maxBuffer: 1 << 30 });
  if (r.status !== 0) throw new Error(`ffmpeg failed on ${file}`);
  return new Float32Array(r.stdout.buffer, r.stdout.byteOffset, Math.floor(r.stdout.length / 4));
}

// Real FFT magnitude via a simple iterative radix-2 complex FFT.
function fftMag(re, im) {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; }
  }
  for (let len = 2; len <= n; len <<= 1) {
    const ang = -2 * Math.PI / len;
    const wr = Math.cos(ang), wi = Math.sin(ang);
    for (let i = 0; i < n; i += len) {
      let cr = 1, ci = 0;
      for (let k = 0; k < len / 2; k++) {
        const ur = re[i + k], ui = im[i + k];
        const vr = re[i + k + len / 2] * cr - im[i + k + len / 2] * ci;
        const vi = re[i + k + len / 2] * ci + im[i + k + len / 2] * cr;
        re[i + k] = ur + vr; im[i + k] = ui + vi;
        re[i + k + len / 2] = ur - vr; im[i + k + len / 2] = ui - vi;
        const ncr = cr * wr - ci * wi; ci = cr * wi + ci * wr; cr = ncr;
      }
    }
  }
  const mag = new Float32Array(n / 2);
  for (let i = 0; i < n / 2; i++) mag[i] = Math.hypot(re[i], im[i]);
  return mag;
}

export function onsetEnvelope(pcm) {
  const win = new Float32Array(FFT);
  for (let i = 0; i < FFT; i++) win[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / (FFT - 1));
  const frames = Math.floor((pcm.length - FFT) / HOP);
  const env = new Float32Array(Math.max(0, frames));
  let prev = null;
  for (let f = 0; f < frames; f++) {
    const re = new Float64Array(FFT), im = new Float64Array(FFT);
    for (let i = 0; i < FFT; i++) re[i] = pcm[f * HOP + i] * win[i];
    const mag = fftMag(re, im);
    if (prev) {
      let flux = 0;
      for (let i = 0; i < mag.length; i++) {
        const d = mag[i] - prev[i];
        if (d > 0) flux += d;                  // half-wave rectified: energy rises only
      }
      env[f] = flux;
    }
    prev = mag;
  }
  // Normalise and subtract a local mean so quiet and loud sections weigh the same.
  const W = 20;
  const out = new Float32Array(env.length);
  for (let i = 0; i < env.length; i++) {
    let s = 0, n = 0;
    for (let j = Math.max(0, i - W); j < Math.min(env.length, i + W); j++) { s += env[j]; n++; }
    out[i] = Math.max(0, env[i] - s / n);
  }
  const max = out.reduce((a, b) => Math.max(a, b), 0) || 1;
  for (let i = 0; i < out.length; i++) out[i] /= max;
  return out;
}

const FPS = SR / HOP;

export function estimateBpm(env, min = 70, max = 180) {
  let best = { bpm: 0, score: -1 };
  for (let bpm = min; bpm <= max; bpm += 0.25) {
    const lag = (60 / bpm) * FPS;
    let score = 0;
    // Sum the envelope's autocorrelation at this lag and its first two multiples.
    for (const mult of [1, 2, 4]) {
      const l = Math.round(lag * mult);
      if (l >= env.length) continue;
      let s = 0;
      for (let i = 0; i + l < env.length; i++) s += env[i] * env[i + l];
      score += s / (env.length - l);
    }
    if (score > best.score) best = { bpm, score };
  }
  return best;
}

// Phase-lock a grid of beats at `bpm` to the envelope, then return beat times in seconds.
export function beatGrid(env, bpm, durationSec) {
  const period = (60 / bpm) * FPS;
  let bestOff = 0, bestScore = -1;
  for (let off = 0; off < period; off += 0.5) {
    let s = 0;
    for (let b = 0; off + b * period < env.length; b++) s += env[Math.round(off + b * period)] || 0;
    if (s > bestScore) { bestScore = s; bestOff = off; }
  }
  const beats = [];
  for (let b = 0; bestOff + b * period < env.length; b++) {
    const t = (bestOff + b * period) / FPS;
    if (t <= durationSec) beats.push(+t.toFixed(3));
  }
  return { beats, offsetSec: +(bestOff / FPS).toFixed(3) };
}

export function strengthAt(env, tSec) {
  const i = Math.round(tSec * FPS);
  return env[i] ?? 0;
}

if (process.argv[2]) {
  const file = process.argv[2];
  const pcm = decode(file);
  const dur = pcm.length / SR;
  const env = onsetEnvelope(pcm);
  const { bpm, score } = estimateBpm(env);
  const { beats, offsetSec } = beatGrid(env, bpm, dur);
  console.log(JSON.stringify({
    file: file.split('/').pop(),
    durationSec: +dur.toFixed(2),
    bpm: +bpm.toFixed(2),
    confidence: +score.toFixed(5),
    offsetSec,
    beatCount: beats.length,
    firstBeats: beats.slice(0, 8),
  }, null, 2));
}
