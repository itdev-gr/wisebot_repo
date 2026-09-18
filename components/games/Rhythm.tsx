/**
 * ΡΥΘΜΟΣ (`rhythm`)
 * =================
 * Pick a song and a difficulty → the song loads (only after the tap, so the
 * audio starts from a user gesture) → notes fall in three lanes, tap them on
 * the circle → max combo, accuracy, share card.
 *
 *   picker (+ sync test) → loading → play → end
 *
 * THE CLOCK: song time = playFrom + (ctx.currentTime − startAt) − latency,
 * where latency = the browser's reported output latency + the child's offset.
 * The AudioContext clock is the ONLY time source — never Date.now(), never a
 * frame count. Pausing is `ctx.suspend()`, which freezes that clock, so the
 * notes and the music can never drift apart.
 *
 * 60 FPS: the notes are a fixed pool of DOM nodes moved by `transform` from
 * one requestAnimationFrame loop — no React render per frame, no layout
 * reads. React only re-renders on a judgement (a few times a second).
 *
 * THE DOUBLE-TAP RULE (docs/games/NOTES.md §3): nothing trusts state to guard
 * a handler.
 *   - `phaseRef`    every phase-advancing handler checks it is in its phase
 *   - `startingRef` one song load at a time
 *   - `runRef`      scoring: a note has one result, forever (rhythmLogic)
 *   - `finishedRef` the song ends once (record written once)
 *   - `grantedRef`  one XP grant per finished song
 *   - `sharingRef`  one share at a time
 *
 * PRIVACY (audience 6–12): nothing leaves the device. The share card carries
 * a combo, an accuracy and a song title — never a name.
 */
import React, { useEffect, useRef, useState } from 'react';
import { Loader2, Music, Pause, Play, Share2, Star, X } from 'lucide-react';
import GameBackButton from './GameBackButton';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
import { renderGameCard, shareGameCard } from '../../utils/gameShareCard';
import {
  CALIBRATION,
  LATENCY_OFFSET,
  RHYTHM_ACCENT,
  RHYTHM_COPY,
  RHYTHM_DIFFICULTIES,
  RHYTHM_DIFFICULTY_INFO,
  RHYTHM_GAME_KEY,
  RHYTHM_LANES,
  RHYTHM_SONGS,
  RHYTHM_STORAGE_KEY,
  type RhythmDifficulty,
  type RhythmLane,
  type RhythmNote,
  type RhythmSong,
} from '../../data/games/rhythm';
import {
  accuracyPercent,
  bestKey,
  calibrationOffset,
  clampOffset,
  isFullCombo,
  newRun,
  parseSave,
  recordBest,
  rhythmTier,
  runAccuracy,
  sweepMisses,
  tapLane,
  type Judgement,
  type RhythmRun,
  type RhythmSave,
} from './rhythmLogic';

interface RhythmProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

type Phase = 'picker' | 'loading' | 'play' | 'end';

/** Note pool size: far more than can ever be on screen at once. */
const POOL = 24;
/** Height of a note, and of the tap zone at the bottom of each lane (px). */
const NOTE_PX = 56;
const ZONE_PX = 112;
/** The audio is scheduled this far ahead so its start is sample-exact. */
const START_DELAY_SEC = 0.15;
const FADE_SEC = 0.35;
const MSG_MS = 3000;
const LANE_KEYS: Record<string, RhythmLane> = {
  a: 0, s: 1, d: 2, j: 0, k: 1, l: 2, '1': 0, '2': 1, '3': 2, arrowleft: 0, arrowdown: 1, arrowright: 2,
};
const LANE_COLORS = ['#22d3ee', '#e879f9', '#fbbf24'] as const;

type Calib = { state: 'running' } | { state: 'done'; ms: number } | { state: 'failed' } | null;

function readSave(): RhythmSave {
  try {
    return parseSave(localStorage.getItem(RHYTHM_STORAGE_KEY));
  } catch {
    return parseSave(null);
  }
}

function writeSave(s: RhythmSave): void {
  try {
    localStorage.setItem(RHYTHM_STORAGE_KEY, JSON.stringify(s));
  } catch {
    // Storage full or blocked: the record is a nicety, the game is not.
  }
}

function decodeAudio(ctx: AudioContext, data: ArrayBuffer): Promise<AudioBuffer> {
  // The callback form still matters on older Safari; the promise form everywhere else.
  return new Promise((resolve, reject) => {
    const p = ctx.decodeAudioData(data, resolve, reject) as Promise<AudioBuffer> | undefined;
    if (p && typeof p.then === 'function') p.then(resolve, reject);
  });
}

function reportedLatency(ctx: AudioContext): number {
  const base = Number.isFinite(ctx.baseLatency) ? ctx.baseLatency : 0;
  const out = Number.isFinite(ctx.outputLatency) ? ctx.outputLatency : 0;
  return (base || 0) + (out || 0);
}

const STYLE = `
.rh-note{position:absolute;top:0;left:0;width:33.3333%;height:${NOTE_PX}px;display:flex;align-items:center;justify-content:center;pointer-events:none;will-change:transform;visibility:hidden}
.rh-note>span{width:${NOTE_PX - 8}px;height:${NOTE_PX - 8}px;border-radius:9999px;border:3px solid rgba(255,255,255,.85)}
.rh-note[data-lane="0"]>span{background:radial-gradient(circle at 35% 30%,#a5f3fc,${LANE_COLORS[0]} 55%,#0e7490);box-shadow:0 0 18px ${LANE_COLORS[0]}aa}
.rh-note[data-lane="1"]>span{background:radial-gradient(circle at 35% 30%,#f5d0fe,${LANE_COLORS[1]} 55%,#a21caf);box-shadow:0 0 18px ${LANE_COLORS[1]}aa}
.rh-note[data-lane="2"]>span{background:radial-gradient(circle at 35% 30%,#fef3c7,${LANE_COLORS[2]} 55%,#b45309);box-shadow:0 0 18px ${LANE_COLORS[2]}aa}
@keyframes rh-pop{0%{transform:scale(.6);opacity:0}20%{transform:scale(1.15);opacity:1}70%{transform:scale(1);opacity:1}100%{transform:translateY(-16px);opacity:0}}
.rh-pop{animation:rh-pop .5s ease-out forwards}
@keyframes rh-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.rh-in{animation:rh-in .18s ease-out}
@keyframes rh-ready{0%,70%{opacity:1}100%{opacity:0}}
.rh-ready{animation:rh-ready 2.4s ease-out forwards}
`;

/* ═════════════════════════════════ the game ═══════════════════════════════ */

export default function Rhythm({ lang, onBack }: RhythmProps) {
  const { earnXp, showNotification } = useEconomy();
  const t = RHYTHM_COPY[lang];

  const [phase, setPhase] = useState<Phase>('picker');
  const [songIdx, setSongIdx] = useState(0);
  const [difficulty, setDifficulty] = useState<RhythmDifficulty>('easy');
  const [save, setSave] = useState<RhythmSave>(() => readSave());
  const [loadError, setLoadError] = useState(false);
  const [hud, setHud] = useState({ score: 0, combo: 0 });
  const [feedback, setFeedback] = useState<{ id: number; lane: RhythmLane; j: Judgement } | null>(null);
  const [paused, setPaused] = useState(false);
  const [endRun, setEndRun] = useState<RhythmRun | null>(null);
  const [newBest, setNewBest] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);
  const [xpTried, setXpTried] = useState(false);
  const [calibOpen, setCalibOpen] = useState(false);
  const [calib, setCalib] = useState<Calib>(null);
  const [calibTaps, setCalibTaps] = useState(0);
  const [sharing, setSharing] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const phaseRef = useRef<Phase>('picker');
  const startingRef = useRef(false);
  const finishedRef = useRef(false);
  const grantedRef = useRef(false);
  const sharingRef = useRef(false);
  const pausedRef = useRef(false);
  const saveRef = useRef<RhythmSave>(save);

  const ctxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef(new Map<string, AudioBuffer>());
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const startAtRef = useRef(0);
  const latencyRef = useRef(0);
  const loadTokenRef = useRef(0);

  const songRef = useRef<RhythmSong>(RHYTHM_SONGS[0]);
  const diffRef = useRef<RhythmDifficulty>('easy');
  const notesRef = useRef<readonly RhythmNote[]>([]);
  const runRef = useRef<RhythmRun>(newRun(0));
  const lowRef = useRef(0);
  const fbIdRef = useRef(0);

  const rafRef = useRef<number | null>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const fieldHRef = useRef(0);
  const poolRef = useRef<(HTMLDivElement | null)[]>([]);
  const zoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  const calibClicksRef = useRef<number[]>([]);
  const calibDeltasRef = useRef<number[]>([]);
  const calibTimerRef = useRef<number | null>(null);
  const msgTimerRef = useRef<number | null>(null);

  const go = (p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  };

  const flash = (text: string | null) => {
    setMsg(text);
    if (msgTimerRef.current !== null) window.clearTimeout(msgTimerRef.current);
    msgTimerRef.current = text === null ? null : window.setTimeout(() => setMsg(null), MSG_MS);
  };

  const persist = (s: RhythmSave) => {
    saveRef.current = s;
    setSave(s);
    writeSave(s);
  };

  /* ════════════════════ audio ════════════════════ */

  /** Create / wake the AudioContext. Must run inside a tap (user gesture). */
  const ensureCtx = (): AudioContext | null => {
    let ctx = ctxRef.current;
    if (!ctx || ctx.state === 'closed') {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      ctxRef.current = ctx;
    }
    if (ctx.state === 'suspended') void ctx.resume().catch(() => undefined);
    return ctx;
  };

  const stopAudio = (fade = false) => {
    const src = sourceRef.current;
    const gain = gainRef.current;
    const ctx = ctxRef.current;
    sourceRef.current = null;
    gainRef.current = null;
    if (!src) return;
    try {
      if (fade && ctx && gain) {
        const now = ctx.currentTime;
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(gain.gain.value, now);
        gain.gain.linearRampToValueAtTime(0, now + FADE_SEC);
        src.stop(now + FADE_SEC + 0.05);
      } else {
        src.stop();
      }
    } catch {
      // already stopped
    }
  };

  /** Song time in seconds, from the AudioContext clock only. */
  const songNowSec = (): number => {
    const ctx = ctxRef.current;
    if (!ctx) return -Infinity;
    return songRef.current.playFromSec + (ctx.currentTime - startAtRef.current) - latencyRef.current;
  };

  const stopLoop = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const stopCalibration = () => {
    if (calibTimerRef.current !== null) window.clearTimeout(calibTimerRef.current);
    calibTimerRef.current = null;
  };

  /** Everything this component runs is stopped here: music, loop, pending load. */
  const stopAll = () => {
    loadTokenRef.current += 1;
    startingRef.current = false;
    stopLoop();
    stopAudio();
    stopCalibration();
    pausedRef.current = false;
    setPaused(false);
    const ctx = ctxRef.current;
    if (ctx && ctx.state === 'suspended') void ctx.resume().catch(() => undefined);
  };

  /* ════════════════════ picker → loading → play ════════════════════ */

  const start = async () => {
    if (startingRef.current) return;
    if (phaseRef.current !== 'picker' && phaseRef.current !== 'end' && phaseRef.current !== 'loading') return;
    startingRef.current = true;
    const ctx = ensureCtx(); // inside the tap: this is what unlocks audio on phones
    const song = RHYTHM_SONGS[songIdx] ?? RHYTHM_SONGS[0];
    const diff = difficulty;
    const token = ++loadTokenRef.current;
    setLoadError(false);
    flash(null);
    go('loading');
    try {
      if (!ctx) throw new Error('no Web Audio');
      let buf = buffersRef.current.get(song.src);
      if (!buf) {
        const res = await fetch(song.src);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        buf = await decodeAudio(ctx, await res.arrayBuffer());
        buffersRef.current.set(song.src, buf);
      }
      if (token !== loadTokenRef.current || phaseRef.current !== 'loading') return;
      beginPlay(ctx, song, diff, buf);
    } catch {
      if (token === loadTokenRef.current) setLoadError(true);
    } finally {
      if (token === loadTokenRef.current) startingRef.current = false;
    }
  };

  const beginPlay = (ctx: AudioContext, song: RhythmSong, diff: RhythmDifficulty, buf: AudioBuffer) => {
    stopAudio();
    const gain = ctx.createGain();
    gain.connect(ctx.destination);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(gain);
    const at = ctx.currentTime + START_DELAY_SEC;
    gain.gain.setValueAtTime(0, at);
    gain.gain.linearRampToValueAtTime(1, at + 0.4);
    src.start(at, song.playFromSec);
    sourceRef.current = src;
    gainRef.current = gain;
    startAtRef.current = at;
    latencyRef.current = reportedLatency(ctx) + saveRef.current.offsetMs / 1000;

    songRef.current = song;
    diffRef.current = diff;
    notesRef.current = song.charts[diff];
    runRef.current = newRun(song.charts[diff].length);
    lowRef.current = 0;
    finishedRef.current = false;
    grantedRef.current = false;
    pausedRef.current = false;
    setPaused(false);
    setHud({ score: 0, combo: 0 });
    setFeedback(null);
    setEndRun(null);
    setNewBest(false);
    setEarnedXp(0);
    setXpTried(false);
    go('play');
  };

  const toPicker = () => {
    if (phaseRef.current === 'picker') return;
    stopAll();
    setSave(readSave());
    go('picker');
  };

  const leave = () => {
    stopAll();
    onBack();
  };

  /* ════════════════════ playing ════════════════════ */

  const judged = (lane: RhythmLane, j: Judgement) => {
    const run = runRef.current;
    setHud({ score: run.score, combo: run.combo });
    fbIdRef.current += 1;
    setFeedback({ id: fbIdRef.current, lane, j });
  };

  const pressLane = (lane: RhythmLane) => {
    zoneRefs.current[lane]?.animate?.([{ opacity: 0.9 }, { opacity: 0 }], { duration: 180, easing: 'ease-out' });
    if (phaseRef.current !== 'play' || pausedRef.current || finishedRef.current) return;
    const r = tapLane(notesRef.current, runRef.current, lane, songNowSec() * 1000, diffRef.current);
    if (r.judgement === null) return; // empty tap: nothing changes, the combo stays
    runRef.current = r.run;
    judged(lane, r.judgement);
  };

  /** The one XP grant of a finished song. `grantedRef` blocks re-entry. */
  const grant = (tier: number) => {
    if (grantedRef.current) return;
    grantedRef.current = true;
    setXpTried(true);
    if (tier <= 0) return;
    try {
      setEarnedXp(grantGameReward(RHYTHM_GAME_KEY, tier, earnXp, showNotification, lang));
    } catch {
      // The reward helper writes to localStorage, which throws when storage is
      // full or blocked. Losing the XP is survivable; losing the end screen is not.
    }
  };

  const finish = () => {
    if (finishedRef.current || phaseRef.current !== 'play') return;
    finishedRef.current = true;
    stopLoop();
    stopAudio(true);
    const song = songRef.current;
    const diff = diffRef.current;
    const final = sweepMisses(notesRef.current, runRef.current, Infinity, diff).run;
    runRef.current = final;
    const acc = runAccuracy(final);
    const rec = recordBest(saveRef.current, song.id, diff, final.maxCombo, acc);
    persist(rec.save);
    setNewBest(rec.newBest);
    setEndRun(final);
    go('end');
    grant(rhythmTier(acc));
  };

  const pause = () => {
    if (phaseRef.current !== 'play' || pausedRef.current || finishedRef.current) return;
    pausedRef.current = true;
    setPaused(true);
    // Suspending freezes ctx.currentTime: the song clock stops with the music.
    void ctxRef.current?.suspend().catch(() => undefined);
  };

  const resume = () => {
    if (phaseRef.current !== 'play' || !pausedRef.current) return;
    const ctx = ctxRef.current;
    if (!ctx) return;
    void ctx.resume().then(
      () => {
        pausedRef.current = false;
        setPaused(false);
      },
      () => undefined,
    );
  };

  /** One frame: sweep passed notes, move the pool, end the song. Refs only. */
  const tick = () => {
    if (phaseRef.current !== 'play' || pausedRef.current || finishedRef.current) return;
    const now = songNowSec();
    const notes = notesRef.current;
    const diff = diffRef.current;
    const sw = sweepMisses(notes, runRef.current, now * 1000, diff);
    if (sw.missed.length > 0) {
      runRef.current = sw.run;
      judged(notes[sw.missed[sw.missed.length - 1]].lane, 'miss');
    }

    const H = fieldHRef.current;
    if (H > 0) {
      const hitY = H - ZONE_PX / 2;
      const fall = RHYTHM_DIFFICULTY_INFO[diff].fallSec;
      const pxPerSec = (hitY + NOTE_PX) / fall;
      const goneBefore = now - (H - hitY + NOTE_PX) / pxPerSec;
      let lo = lowRef.current;
      while (lo < notes.length && notes[lo].t < goneBefore) lo++;
      lowRef.current = lo;
      const results = runRef.current.results;
      const pool = poolRef.current;
      let slot = 0;
      for (let i = lo; i < notes.length && slot < POOL; i++) {
        const n = notes[i];
        if (n.t > now + fall + 0.1) break;
        const r = results[i];
        if (r === 'perfect' || r === 'good') continue;
        const el = pool[slot++];
        if (!el) continue;
        const y = hitY - (n.t - now) * pxPerSec - NOTE_PX / 2;
        const lane = String(n.lane);
        if (el.dataset.lane !== lane) el.dataset.lane = lane;
        el.style.transform = `translate3d(${n.lane * 100}%,${y.toFixed(1)}px,0)`;
        el.style.opacity = r === 'miss' ? '0.25' : '1';
        el.style.visibility = 'visible';
      }
      for (; slot < POOL; slot++) {
        const el = pool[slot];
        if (el && el.style.visibility !== 'hidden') el.style.visibility = 'hidden';
      }
    }

    const song = songRef.current;
    const bar = progressRef.current;
    if (bar) {
      const p = Math.min(1, Math.max(0, (now - song.playFromSec) / (song.playToSec - song.playFromSec)));
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
    }
    if (now >= song.playToSec) finish();
  };

  /* ════════════════════ sync test (tap in time) ════════════════════ */

  const setOffset = (ms: number) => {
    persist({ ...saveRef.current, offsetMs: clampOffset(ms) });
  };

  const startCalibration = () => {
    if (phaseRef.current !== 'picker' || calibTimerRef.current !== null) return;
    const ctx = ensureCtx();
    if (!ctx) {
      setCalib({ state: 'failed' });
      return;
    }
    const t0 = ctx.currentTime + 0.6;
    const clicks: number[] = [];
    for (let k = 0; k < CALIBRATION.clicks; k++) {
      const at = t0 + k * CALIBRATION.intervalSec;
      clicks.push(at);
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.frequency.value = k % 4 === 0 ? 1320 : 880;
      g.gain.setValueAtTime(0, at);
      g.gain.linearRampToValueAtTime(0.5, at + 0.005);
      g.gain.exponentialRampToValueAtTime(0.001, at + 0.08);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(at);
      osc.stop(at + 0.1);
    }
    calibClicksRef.current = clicks;
    calibDeltasRef.current = [];
    setCalibTaps(0);
    setCalib({ state: 'running' });
    const totalMs = (0.6 + CALIBRATION.clicks * CALIBRATION.intervalSec + 0.4) * 1000;
    // A UI timer only decides WHEN to read the result; every tap is timed on ctx.currentTime.
    calibTimerRef.current = window.setTimeout(() => {
      calibTimerRef.current = null;
      const ms = calibrationOffset(calibDeltasRef.current);
      if (ms === null) {
        setCalib({ state: 'failed' });
        return;
      }
      setOffset(ms);
      setCalib({ state: 'done', ms });
    }, totalMs);
  };

  const calibTap = () => {
    const ctx = ctxRef.current;
    if (!ctx || calibTimerRef.current === null) return;
    const tap = ctx.currentTime - reportedLatency(ctx);
    let best = Infinity;
    for (const c of calibClicksRef.current) if (Math.abs(tap - c) < Math.abs(best)) best = tap - c;
    if (Math.abs(best) > CALIBRATION.intervalSec / 2) return;
    calibDeltasRef.current.push(best * 1000);
    setCalibTaps(calibDeltasRef.current.length);
  };

  const closeCalibration = () => {
    stopCalibration();
    setCalib(null);
    setCalibOpen(false);
  };

  /* ════════════════════ sharing (combo + accuracy + song title) ════════════════════ */

  const share = async () => {
    if (sharingRef.current || phaseRef.current !== 'end' || !endRun) return;
    sharingRef.current = true;
    setSharing(true);
    flash(null);
    try {
      const song = songRef.current;
      const title = lang === 'el' ? song.titleEl : song.titleEn;
      const url = await renderGameCard({
        gameTitle: t.cardTitle,
        headline: t.cardHeadline(endRun.maxCombo, title),
        stat: String(endRun.maxCombo),
        substat: t.cardSubstat(accuracyPercent(endRun), t.difficultyName[diffRef.current]),
        lang,
        accent: RHYTHM_ACCENT,
      });
      const how = await shareGameCard(url, { title: t.shareTitle, text: t.shareText(endRun.maxCombo, title) });
      flash(t.shareDone[how]);
    } catch {
      flash(t.shareFailed);
    } finally {
      sharingRef.current = false;
      setSharing(false);
    }
  };

  /* ════════════════════ effects (refs only) ════════════════════ */

  // The frame loop, the keys and the visibility handler call the LATEST
  // handlers through this ref, so the effects below depend on nothing stale.
  const handlersRef = useRef({ tick, pressLane, pause });
  useEffect(() => {
    handlersRef.current = { tick, pressLane, pause };
  });

  useEffect(() => {
    if (phase !== 'play') return;
    const field = fieldRef.current;
    const measure = () => {
      fieldHRef.current = fieldRef.current?.clientHeight ?? 0;
    };
    measure();
    let ro: ResizeObserver | null = null;
    if (field && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(measure);
      ro.observe(field);
    }
    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      handlersRef.current.tick();
    };
    rafRef.current = requestAnimationFrame(loop);
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const lane = LANE_KEYS[e.key.toLowerCase()];
      if (lane === undefined) return;
      e.preventDefault();
      handlersRef.current.pressLane(lane);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      ro?.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [phase]);

  useEffect(() => {
    const onVis = () => {
      if (document.hidden) handlersRef.current.pause();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Unmount: stop the music, the loop, every timer, and close the context.
  useEffect(() => () => {
    loadTokenRef.current += 1;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    try {
      sourceRef.current?.stop();
    } catch {
      // already stopped
    }
    sourceRef.current = null;
    if (calibTimerRef.current !== null) window.clearTimeout(calibTimerRef.current);
    if (msgTimerRef.current !== null) window.clearTimeout(msgTimerRef.current);
    const ctx = ctxRef.current;
    ctxRef.current = null;
    if (ctx && ctx.state !== 'closed') void ctx.close().catch(() => undefined);
  }, []);

  /* ════════════════════ render ════════════════════ */

  const song = RHYTHM_SONGS[songIdx] ?? RHYTHM_SONGS[0];
  const playing = songRef.current;
  const titleOf = (s: RhythmSong) => (lang === 'el' ? s.titleEl : s.titleEn);
  const offsetMs = save.offsetMs;

  const primaryBtn = 'px-7 py-4 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm bg-gradient-to-r from-fuchsia-500 to-violet-600 shadow-lg shadow-fuchsia-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-40';
  const ghostBtn = 'px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/70 font-[1000] uppercase tracking-widest text-[11px] hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-30';

  return (
    <div className="relative h-full flex flex-col items-center p-3 select-none overflow-hidden">
      <style>{STYLE}</style>

      {/* HEADER — one row */}
      <div className="flex justify-between items-center gap-2 w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <GameBackButton onClick={leave} lang={lang} />
        <h2 className="text-sm font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-fuchsia-300 to-amber-200 italic tracking-tighter leading-none text-center truncate">
          {phase === 'play' || phase === 'end' ? titleOf(playing) : t.title}
        </h2>
        {phase === 'play' ? (
          <button
            type="button"
            onClick={paused ? resume : pause}
            aria-label={paused ? t.resume : t.paused}
            className="w-9 h-9 shrink-0 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white"
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        ) : (
          <div className="w-9 shrink-0" />
        )}
      </div>

      <div className="flex-1 w-full max-w-md min-h-0 flex flex-col">
        {/* ───────────────────────────── PICKER ──────────────────────────── */}
        {phase === 'picker' && (
          <div key="picker" className="rh-in flex-1 min-h-0 flex flex-col gap-2">
            <div className="text-center shrink-0">
              <h1 className="flex items-center justify-center gap-2 text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                <Music size={24} className="text-fuchsia-300" /> {t.title}
              </h1>
              <p className="text-white/60 font-bold text-[12px] px-3 mt-1">{t.tagline}</p>
            </div>

            <p className="shrink-0 text-[10px] font-[1000] uppercase tracking-widest text-fuchsia-300/80 px-1">{t.pickSong}</p>
            <div className="flex-1 min-h-0 overflow-y-auto space-y-1.5 pr-0.5">
              {RHYTHM_SONGS.map((s, i) => {
                const on = i === songIdx;
                const best = save.best[bestKey(s.id, difficulty)];
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSongIdx(i)}
                    aria-pressed={on}
                    className={`w-full text-left px-3 py-2 rounded-2xl border-2 flex items-center gap-3 transition-all active:scale-[0.98] ${
                      on ? 'bg-fuchsia-500/20 border-fuchsia-400/70' : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <span className="text-2xl shrink-0" aria-hidden="true">{s.emoji}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[14px] font-[1000] text-white leading-tight truncate">{titleOf(s)}</span>
                      <span className="block text-[10px] font-bold text-white/50">
                        {t.bpm(s.bpm)} · {t.notesCount(s.charts[difficulty].length)}
                        {best ? ` · ${t.bestCombo(best.combo)}` : ''}
                      </span>
                    </span>
                    {on && <Play size={16} className="text-fuchsia-300 shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="shrink-0">
              <p className="text-[10px] font-[1000] uppercase tracking-widest text-fuchsia-300/80 px-1 mb-1">{t.difficulty}</p>
              <div className="grid grid-cols-3 gap-1.5">
                {RHYTHM_DIFFICULTIES.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDifficulty(d)}
                    aria-pressed={d === difficulty}
                    className={`h-11 rounded-2xl border-2 text-[12px] font-[1000] uppercase tracking-wider transition-all active:scale-95 ${
                      d === difficulty ? 'bg-violet-500/30 border-violet-300/70 text-white' : 'bg-white/5 border-white/10 text-white/60'
                    }`}
                  >
                    {t.difficultyName[d]}
                  </button>
                ))}
              </div>
              <p className="text-white/50 text-[11px] font-bold text-center mt-1">{t.difficultyHint[difficulty]}</p>
            </div>

            {/* latency offset — persisted */}
            <div className="shrink-0 rounded-2xl bg-white/5 border border-white/10 px-3 py-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/60">{t.sync}</p>
                <p className="text-[12px] font-[1000] text-white font-mono">{t.syncValue(offsetMs)}</p>
                <button
                  type="button"
                  onClick={() => {
                    setCalib(null);
                    setCalibOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white text-[10px] font-[1000] uppercase tracking-widest active:scale-95"
                >
                  {t.calibrate}
                </button>
              </div>
              <input
                type="range"
                min={LATENCY_OFFSET.min}
                max={LATENCY_OFFSET.max}
                step={LATENCY_OFFSET.step}
                value={offsetMs}
                onChange={(e) => setOffset(Number(e.target.value))}
                aria-label={t.sync}
                aria-valuetext={t.syncValue(offsetMs)}
                className="w-full accent-fuchsia-400 mt-1"
              />
              <div className="flex justify-between text-[9px] font-bold text-white/35">
                <span>{t.syncEarlier}</span>
                <span>{t.syncLater}</span>
              </div>
            </div>

            <button type="button" onClick={() => void start()} className={`${primaryBtn} shrink-0 text-base py-4`}>
              <Play size={18} /> {t.start}
            </button>
          </div>
        )}

        {/* ───────────────────────────── LOADING ─────────────────────────── */}
        {phase === 'loading' && (
          <div key="loading" className="rh-in flex-1 min-h-0 flex flex-col items-center justify-center gap-4 text-center px-2">
            <span className="text-5xl" aria-hidden="true">{song.emoji}</span>
            <p className="text-xl font-[1000] text-white">{titleOf(song)}</p>
            {!loadError ? (
              <p className="flex items-center gap-2 text-white/60 text-[12px] font-[1000] uppercase tracking-widest" role="status">
                <Loader2 size={16} className="animate-spin" /> {t.loading}
              </p>
            ) : (
              <>
                <p className="text-rose-200 text-[13px] font-bold" role="alert">{t.loadFailed}</p>
                <button type="button" onClick={() => void start()} className={primaryBtn}>{t.retry}</button>
              </>
            )}
            <button type="button" onClick={toPicker} className={ghostBtn}>{t.otherSong}</button>
          </div>
        )}

        {/* ───────────────────────────── PLAY ────────────────────────────── */}
        {phase === 'play' && (
          <div key="play" className="flex-1 min-h-0 flex flex-col gap-1.5">
            <div className="shrink-0 flex items-center gap-2 px-0.5">
              <button type="button" onClick={toPicker} aria-label={t.quit} className="w-8 h-8 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white/70">
                <X size={16} />
              </button>
              <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div ref={progressRef} className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300" style={{ transform: 'scaleX(0)' }} />
              </div>
              <p className="shrink-0 text-[11px] font-[1000] text-white/70 font-mono" aria-label={t.score}>{hud.score}</p>
            </div>

            <div
              ref={fieldRef}
              className="relative flex-1 min-h-0 rounded-3xl overflow-hidden border border-white/10 bg-black/40"
              style={{ touchAction: 'none' }}
            >
              {/* lanes: each whole column is a tap target */}
              <div className="absolute inset-0 grid grid-cols-3">
                {RHYTHM_LANES.map((lane) => (
                  <div
                    key={lane}
                    role="button"
                    aria-label={t.laneLabel(lane + 1)}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      pressLane(lane);
                    }}
                    className="relative h-full border-x border-white/5"
                    style={{ touchAction: 'none' }}
                  >
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-center" style={{ height: ZONE_PX }}>
                      <div
                        ref={(el) => {
                          zoneRefs.current[lane] = el;
                        }}
                        className="absolute inset-1 rounded-2xl opacity-0 pointer-events-none"
                        style={{ background: `${LANE_COLORS[lane]}55` }}
                      />
                      <div className="absolute inset-1 rounded-2xl bg-white/5 border border-white/10 pointer-events-none" />
                      <div
                        className="relative rounded-full border-4 pointer-events-none"
                        style={{ width: NOTE_PX, height: NOTE_PX, borderColor: `${LANE_COLORS[lane]}cc`, boxShadow: `0 0 14px ${LANE_COLORS[lane]}66` }}
                      />
                    </div>
                    {feedback && feedback.lane === lane && (
                      <p
                        key={feedback.id}
                        className={`rh-pop absolute inset-x-0 text-center text-[15px] font-[1000] italic tracking-tight pointer-events-none ${
                          feedback.j === 'perfect' ? 'text-amber-200' : feedback.j === 'good' ? 'text-cyan-200' : 'text-rose-300'
                        }`}
                        style={{ bottom: ZONE_PX + 6 }}
                      >
                        {t.judgement[feedback.j]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* the note pool, moved by the frame loop */}
              {Array.from({ length: POOL }, (_, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    poolRef.current[i] = el;
                  }}
                  className="rh-note"
                  data-lane="0"
                >
                  <span />
                </div>
              ))}

              {/* combo */}
              <div className="absolute inset-x-0 top-3 text-center pointer-events-none">
                {hud.combo >= 2 && (
                  <>
                    <p key={hud.combo} className="rh-in text-4xl font-[1000] text-white leading-none drop-shadow">{hud.combo}</p>
                    <p className="text-[10px] font-[1000] uppercase tracking-[0.3em] text-fuchsia-200/80">{t.combo}</p>
                  </>
                )}
              </div>

              <p className="rh-ready absolute inset-x-0 top-1/3 text-center text-2xl font-[1000] text-white/90 italic pointer-events-none">{t.getReady}</p>

              {paused && (
                <div className="absolute inset-0 z-20 bg-black/80 flex flex-col items-center justify-center gap-4">
                  <p className="text-3xl font-[1000] text-white italic">{t.paused}</p>
                  <button type="button" onClick={resume} className={primaryBtn}>
                    <Play size={18} /> {t.resume}
                  </button>
                  <button type="button" onClick={toPicker} className={ghostBtn}>{t.quit}</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ───────────────────────────── END ─────────────────────────────── */}
        {phase === 'end' && endRun && (
          <div key="end" className="rh-in flex-1 min-h-0 flex flex-col items-center gap-2.5 text-center px-1 overflow-y-auto">
            <p className="shrink-0 text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-fuchsia-300 to-amber-200 uppercase italic tracking-tighter pt-2">{t.endTitle}</p>
            <p className="shrink-0 text-white/60 text-[12px] font-bold">
              {titleOf(playing)} · {t.difficultyName[diffRef.current]}
            </p>
            <div className="shrink-0 flex gap-1" aria-label={`${rhythmTier(runAccuracy(endRun))}/3`}>
              {[1, 2, 3].map((n) => (
                <Star key={n} size={30} className={n <= rhythmTier(runAccuracy(endRun)) ? 'text-amber-300 fill-amber-300' : 'text-white/20'} />
              ))}
            </div>
            <div className="shrink-0">
              <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/40">{t.maxCombo}</p>
              <p className="text-6xl font-[1000] text-white leading-none">{endRun.maxCombo}</p>
            </div>
            {isFullCombo(endRun) && <p className="shrink-0 text-amber-300 text-[12px] font-[1000] uppercase tracking-widest">{t.fullCombo}</p>}
            {newBest && <p className="shrink-0 text-fuchsia-300 text-[12px] font-[1000] uppercase tracking-widest">{t.newBest}</p>}
            <div className="shrink-0 w-full grid grid-cols-4 gap-1.5">
              <div className="rounded-2xl bg-white/5 border border-white/10 py-2">
                <p className="text-[9px] font-[1000] uppercase tracking-widest text-white/40">{t.accuracy}</p>
                <p className="text-lg font-[1000] text-white">{accuracyPercent(endRun)}%</p>
              </div>
              {(['perfect', 'good', 'miss'] as const).map((j) => (
                <div key={j} className="rounded-2xl bg-white/5 border border-white/10 py-2">
                  <p className={`text-[9px] font-[1000] uppercase tracking-widest ${j === 'perfect' ? 'text-amber-200/80' : j === 'good' ? 'text-cyan-200/80' : 'text-rose-300/80'}`}>{t.judgement[j]}</p>
                  <p className="text-lg font-[1000] text-white">{endRun[j]}</p>
                </div>
              ))}
            </div>
            <p className="shrink-0 text-white/50 text-[11px] font-bold">{t.score}: {endRun.score}</p>
            <button type="button" onClick={share} disabled={sharing} className={`${primaryBtn} shrink-0`}>
              {sharing ? <Loader2 size={14} className="animate-spin" /> : <Share2 size={14} />}
              {sharing ? t.sharing : t.share}
            </button>
            {msg && <p className="shrink-0 text-white/60 text-[11px] font-bold" role="status">{msg}</p>}
            <div className="shrink-0 flex items-center justify-center gap-1.5 flex-wrap">
              <button type="button" onClick={() => void start()} className={ghostBtn}>{t.playAgain}</button>
              <button type="button" onClick={toPicker} className={ghostBtn}>{t.otherSong}</button>
              <button type="button" onClick={leave} className={ghostBtn}>{t.exit}</button>
            </div>
            {(earnedXp > 0 || xpTried) && (
              <p className="shrink-0 text-white/30 text-[10px] font-bold uppercase tracking-widest px-2">{earnedXp > 0 ? t.xpNote : t.noXpNote}</p>
            )}
          </div>
        )}
      </div>

      {/* SYNC TEST — tap along with the beeps */}
      {calibOpen && phase === 'picker' && (
        <div className="absolute inset-0 z-30 bg-black/90 flex flex-col items-center justify-center gap-4 p-5 text-center" role="dialog" aria-label={t.calibrateTitle}>
          <p className="text-xl font-[1000] text-white uppercase italic">{t.calibrateTitle}</p>
          <p className="text-white/70 text-[13px] font-bold max-w-xs">{t.calibrateHelp}</p>
          {calib?.state === 'running' ? (
            <button
              type="button"
              onPointerDown={(e) => {
                e.preventDefault();
                calibTap();
              }}
              className="w-44 h-44 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 border-4 border-white/70 text-white text-lg font-[1000] uppercase active:scale-95 transition-transform"
              style={{ touchAction: 'none' }}
            >
              {t.calibrateTap}
              <span className="block text-[12px] text-white/70 font-mono mt-1">
                {calibTaps}/{CALIBRATION.clicks}
              </span>
            </button>
          ) : (
            <>
              {calib?.state === 'done' && <p className="text-emerald-300 text-[14px] font-[1000]" role="status">{t.calibrateDone(calib.ms)}</p>}
              {calib?.state === 'failed' && <p className="text-rose-200 text-[13px] font-bold" role="status">{t.calibrateFailed}</p>}
              <button type="button" onClick={startCalibration} className={primaryBtn}>
                <Play size={16} /> {calib ? t.retry : t.calibrate}
              </button>
            </>
          )}
          <p className="text-[12px] font-[1000] text-white/60 font-mono">{t.syncValue(offsetMs)}</p>
          <button type="button" onClick={closeCalibration} className={ghostBtn}>
            <X size={14} /> {t.close}
          </button>
        </div>
      )}
    </div>
  );
}
