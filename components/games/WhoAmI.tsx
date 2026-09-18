/**
 * ΠΟΙΟΣ ΕΙΜΑΙ; (`whoami`)
 * =======================
 * Two ways to play with the Academy's 95 great people:
 *
 *   A. «ΣΚΕΨΟΥ ΚΑΠΟΙΟΝ» — the child thinks of someone, WiseBot asks up to 20
 *      ΝΑΙ / ΟΧΙ / ΔΕΝ ΞΕΡΩ questions and guesses; a wrong guess buys one more.
 *        menu → think → ask ⇄ (thinking → guess) → found | stumped
 *   B. «ΜΑΝΤΕΨΕ ΕΣΥ» — five clues per person, hardest first, four names to pick
 *      from; fewer clues used, more points. Five people per round.
 *        menu → clues ⇄ reveal → reverseEnd
 *
 * What lives here is only the frame. Every rule (which question, when to
 * guess, the one-slip tolerance, the points) lives in `./whoamiLogic` and is
 * tested there over all 95 people; every string, number and person lives in
 * `data/games/whoami.ts`.
 *
 * THE DOUBLE-TAP RULE (docs/games/NOTES.md §3): `AnimatePresence mode="wait"`
 * keeps the outgoing screen mounted and clickable for its exit tween, with the
 * state from *before* the change in its closures. So nothing here trusts
 * state to guard a handler. The phase, the game, the pending question and the
 * guess each live in a ref that is updated synchronously, and every handler
 * that advances a phase, scores or grants XP checks the ref first:
 *   - `phaseRef`    every phase-advancing handler checks it is in its phase
 *   - `answerToken` an answer only lands on the question it was tapped for
 *   - `revRef`      a pick / «άλλο στοιχείο» only lands on the current clue
 *   - `grantedRef`  one XP grant per finished round
 *
 * PRIVACY (audience 6–12): no text input exists in this game, nothing the
 * child answers leaves the device, and the share card carries a score only —
 * never a name, and never who the child was thinking of.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { BookOpen, Brain, Check, HelpCircle, Lightbulb, Loader2, RefreshCw, Share2, Trophy, X } from 'lucide-react';
import GameBackButton from './GameBackButton';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
import { renderGameCard, shareGameCard } from '../../utils/gameShareCard';
import {
  CLUES_PER_PERSON,
  MAX_QUESTIONS,
  REVERSE_MAX_POINTS,
  THINK_TIER,
  THINKING_MS,
  WHOAMI_ACCENT,
  WHOAMI_COPY,
  WHOAMI_GAME_KEY,
  WHOAMI_PEOPLE,
  WHOAMI_QUESTIONS,
  WHOAMI_STORAGE_KEY,
  type WhoAmIAnswer,
  type WhoAmIAttr,
  type WhoAmIPerson,
} from '../../data/games/whoami';
import {
  applyAnswer,
  createReverse,
  createThinkState,
  currentTarget,
  leaderCount,
  nextQuestion,
  nextReverse,
  outOfGuesses,
  pickReverse,
  pointsFor,
  questionsAsked,
  rejectGuess,
  revealClue,
  reverseFound,
  reverseScore,
  reverseTier,
  suggestPeople,
  topCandidates,
  type NextQuestion,
  type ReverseState,
  type ThinkState,
} from './whoamiLogic';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

/** How long a flash message («Χμ! Άσε με να ρωτήσω…») stays up. */
const MSG_MS = 3000;
/** Suggestions on the «σκέψου» screen. */
const IDEAS = 3;
/** The route the Academy lives on. It has no per-story URL (App.tsx: one `/academy` route). */
const ACADEMY_PATH = '/academy';
const WISEBOT_AVATAR = '/images/wisebot.jpg';

interface WhoAmIProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

type Phase = 'menu' | 'think' | 'ask' | 'thinking' | 'guess' | 'found' | 'stumped' | 'clues' | 'reveal' | 'reverseEnd';

/** Phases a new round may start from. */
const START_PHASES: readonly Phase[] = ['menu', 'think', 'found', 'stumped', 'reverseEnd'];

const byId = (id: number | null): WhoAmIPerson | undefined =>
  id === null ? undefined : WHOAMI_PEOPLE.find((p) => p.id === id);

function readBest(): number {
  try {
    const n = Number(localStorage.getItem(WHOAMI_STORAGE_KEY));
    return Number.isFinite(n) && n > 0 ? Math.min(n, REVERSE_MAX_POINTS) : 0;
  } catch {
    return 0;
  }
}

function writeBest(n: number): void {
  try {
    localStorage.setItem(WHOAMI_STORAGE_KEY, String(n));
  } catch {
    // Storage full or blocked: the record is a nicety, the round is not.
  }
}

export default function WhoAmI({ lang, onBack }: WhoAmIProps) {
  const { earnXp, showNotification } = useEconomy();
  const navigate = useNavigate();
  const t = WHOAMI_COPY[lang];

  /* ── state for rendering, each mirrored by a ref the handlers trust ── */
  const [phase, setPhase] = useState<Phase>('menu');
  const [game, setGame] = useState<ThinkState>(() => createThinkState());
  const [question, setQuestion] = useState<NextQuestion | null>(null);
  const [guessId, setGuessId] = useState<number | null>(null);
  const [rev, setRev] = useState<ReverseState>(() => createReverse());
  const [ideas, setIdeas] = useState<WhoAmIPerson[]>(() => suggestPeople(IDEAS));

  const [earnedXp, setEarnedXp] = useState(0);
  const [xpTried, setXpTried] = useState(false);
  const [best, setBest] = useState<number>(() => readBest());
  const [newBest, setNewBest] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const phaseRef = useRef<Phase>('menu');
  const gameRef = useRef<ThinkState>(game);
  const questionRef = useRef<NextQuestion | null>(null);
  const guessRef = useRef<number | null>(null);
  const revRef = useRef<ReverseState>(rev);
  const grantedRef = useRef(false);
  const sharingRef = useRef(false);
  const thinkTimerRef = useRef<number | null>(null);
  const msgTimerRef = useRef<number | null>(null);

  /* ── every timer this component owns is cleared here ── */
  useEffect(() => () => {
    if (thinkTimerRef.current !== null) window.clearTimeout(thinkTimerRef.current);
    if (msgTimerRef.current !== null) window.clearTimeout(msgTimerRef.current);
  }, []);

  const go = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  const putGame = useCallback((g: ThinkState) => {
    gameRef.current = g;
    setGame(g);
  }, []);

  const putQuestion = useCallback((q: NextQuestion | null) => {
    questionRef.current = q;
    setQuestion(q);
  }, []);

  const putRev = useCallback((r: ReverseState) => {
    revRef.current = r;
    setRev(r);
  }, []);

  const flash = useCallback((text: string | null) => {
    setMsg(text);
    if (msgTimerRef.current !== null) window.clearTimeout(msgTimerRef.current);
    msgTimerRef.current = text === null ? null : window.setTimeout(() => setMsg(null), MSG_MS);
  }, []);

  const clearThinkTimer = () => {
    if (thinkTimerRef.current !== null) {
      window.clearTimeout(thinkTimerRef.current);
      thinkTimerRef.current = null;
    }
  };

  /** The one XP grant of a round. `grantedRef` blocks re-entry. */
  const grant = (tier: number) => {
    if (grantedRef.current) return;
    grantedRef.current = true;
    if (tier <= 0) return;
    setXpTried(true);
    try {
      setEarnedXp(grantGameReward(WHOAMI_GAME_KEY, tier, earnXp, showNotification, lang));
    } catch {
      // The reward helper writes its daily-cap record to localStorage, which
      // throws when storage is full or blocked. Losing the XP is survivable;
      // losing the end screen is not.
    }
  };

  const resetRound = () => {
    clearThinkTimer();
    grantedRef.current = false;
    setEarnedXp(0);
    setXpTried(false);
    setNewBest(false);
    flash(null);
  };

  /* ════════════════════ MODE A — WiseBot guesses ════════════════════ */

  const openThink = () => {
    if (!START_PHASES.includes(phaseRef.current)) return;
    resetRound();
    setIdeas(suggestPeople(IDEAS));
    go('think');
  };

  /** Show «Χμμ… σκέφτομαι…», then the guess. */
  const startGuess = (g: ThinkState) => {
    const top = topCandidates(g, 1)[0];
    if (!top) return;
    guessRef.current = top.id;
    setGuessId(top.id);
    go('thinking');
    clearThinkTimer();
    thinkTimerRef.current = window.setTimeout(() => {
      thinkTimerRef.current = null;
      if (phaseRef.current === 'thinking') go('guess');
    }, THINKING_MS);
  };

  const beginAsking = () => {
    if (phaseRef.current !== 'think') return;
    const g = createThinkState();
    putGame(g);
    guessRef.current = null;
    setGuessId(null);
    const q = nextQuestion(g);
    putQuestion(q);
    if (!q) {
      startGuess(g);
      return;
    }
    go('ask');
  };

  /**
   * One answer. `token` is the question number the button was rendered for:
   * a second tap from the exiting screen carries the old number and is
   * dropped, even when the next question re-checks the same attribute.
   */
  const answer = (attr: WhoAmIAttr, token: number, a: WhoAmIAnswer) => {
    if (phaseRef.current !== 'ask') return;
    const current = gameRef.current;
    if (questionsAsked(current) !== token || questionRef.current?.attr !== attr) return;
    const next = applyAnswer(current, attr, a);
    putGame(next);
    const q = nextQuestion(next);
    putQuestion(q);
    if (!q) startGuess(next);
  };

  const finishThink = (outcome: 'found' | 'stumped') => {
    clearThinkTimer();
    grant(THINK_TIER);
    go(outcome);
  };

  const answerGuess = (right: boolean) => {
    if (phaseRef.current !== 'guess') return;
    const id = guessRef.current;
    if (id === null) return;
    if (right) {
      finishThink('found');
      return;
    }
    const next = rejectGuess(gameRef.current, id);
    putGame(next);
    if (outOfGuesses(next)) {
      finishThink('stumped');
      return;
    }
    flash(t.wrongFirst);
    const q = nextQuestion(next);
    putQuestion(q);
    if (!q) {
      startGuess(next);
      return;
    }
    go('ask');
  };

  /* ════════════════════ MODE B — the child guesses ════════════════════ */

  const openReverse = () => {
    if (!START_PHASES.includes(phaseRef.current)) return;
    resetRound();
    putRev(createReverse());
    go('clues');
  };

  const moreClue = (index: number, clues: number) => {
    if (phaseRef.current !== 'clues') return;
    const r = revRef.current;
    if (r.index !== index || r.clues !== clues) return;
    putRev(revealClue(r));
  };

  const pick = (id: number, index: number) => {
    if (phaseRef.current !== 'clues') return;
    const r = revRef.current;
    if (r.index !== index) return;
    const next = pickReverse(r, id);
    if (next === r) return;
    putRev(next);
    if (next.resolved) {
      flash(null);
      go('reveal');
    } else {
      flash(t.notThisOne);
    }
  };

  const finishReverse = (r: ReverseState) => {
    const points = reverseScore(r);
    grant(reverseTier(points));
    const previous = readBest();
    if (points > previous) {
      writeBest(points);
      setBest(points);
      setNewBest(true);
    }
    go('reverseEnd');
  };

  const nextPerson = () => {
    if (phaseRef.current !== 'reveal') return;
    const next = nextReverse(revRef.current);
    putRev(next);
    if (next.finished) finishReverse(next);
    else go('clues');
  };

  /* ════════════════════ sharing (score only) ════════════════════ */

  const share = async () => {
    if (sharingRef.current) return;
    sharingRef.current = true;
    setSharing(true);
    flash(null);
    const p = phaseRef.current;
    try {
      let headline: string;
      let stat: string;
      let text: string;
      if (p === 'reverseEnd') {
        const r = revRef.current;
        headline = t.cardHeadlineReverse(reverseFound(r), r.order.length);
        stat = `${reverseScore(r)}/${REVERSE_MAX_POINTS}`;
        text = t.shareTextReverse(reverseScore(r), REVERSE_MAX_POINTS);
      } else if (p === 'stumped') {
        headline = t.cardHeadlineStumped;
        stat = t.cardStatStumped;
        text = t.shareTextStumped;
      } else {
        const q = questionsAsked(gameRef.current);
        headline = t.cardHeadlineFound;
        stat = t.cardStatFound(q);
        text = t.shareTextFound(q);
      }
      const url = await renderGameCard({
        gameTitle: t.cardTitle,
        headline,
        stat,
        substat: t.cardSubstat,
        lang,
        accent: WHOAMI_ACCENT,
      });
      const how = await shareGameCard(url, { title: t.shareTitle, text });
      flash(t.shareDone[how]);
    } catch {
      flash(t.shareFailed);
    } finally {
      sharingRef.current = false;
      setSharing(false);
    }
  };

  /* ════════════════════ derived ════════════════════ */

  const asked = questionsAsked(game);
  const guessPerson = byId(guessId);
  const target = byId(currentTarget(rev) ?? null);
  const lastResult = rev.results[rev.results.length - 1];
  const nameOf = (p: WhoAmIPerson | undefined) => (p ? (lang === 'el' ? p.nameEl : p.nameEn) : '');

  let status: string | null = null;
  if (phase === 'ask' || phase === 'thinking' || phase === 'guess') status = t.questionOf(Math.min(asked + (phase === 'ask' ? 1 : 0), MAX_QUESTIONS), MAX_QUESTIONS);
  if (phase === 'clues' || phase === 'reveal') status = `${t.personOf(rev.index + 1, rev.order.length)} · ${reverseScore(rev)}`;

  const primaryBtn = 'px-7 py-4 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm bg-gradient-to-r from-cyan-500 to-sky-600 shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:hover:scale-100';
  const ghostBtn = 'px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/70 font-[1000] uppercase tracking-widest text-[11px] hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-30';
  const fade = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, transition: { duration: 0.18 } };

  const xpLine = earnedXp > 0 ? t.xpNote : xpTried ? t.noXpNote : null;

  const endButtons = (
    <>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <button type="button" onClick={share} disabled={sharing} className={primaryBtn}>
          {sharing ? <Loader2 size={14} className="animate-spin" /> : <Share2 size={14} />}
          {sharing ? t.sharing : t.share}
        </button>
      </div>
      {msg && <p className="text-white/60 text-[11px] font-bold" role="status">{msg}</p>}
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        <button type="button" onClick={phase === 'reverseEnd' ? openReverse : openThink} className={ghostBtn}>
          <RefreshCw size={13} /> {t.playAgain}
        </button>
        <button type="button" onClick={phase === 'reverseEnd' ? openThink : openReverse} className={ghostBtn}>
          {t.switchMode}
        </button>
        <button type="button" onClick={onBack} className={ghostBtn}>{t.exit}</button>
      </div>
      {xpLine && <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest px-2">{xpLine}</p>}
    </>
  );

  const avatar = (size: string) => (
    <img src={WISEBOT_AVATAR} alt="" className={`${size} rounded-full object-cover border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20 shrink-0`} />
  );

  return (
    <div className="h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER — one row */}
      <div className="flex justify-between items-center gap-2 w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <GameBackButton onClick={onBack} lang={lang} />
        <h2 className="text-sm font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 italic tracking-tighter leading-none text-center truncate">
          {t.title}
        </h2>
        {status ? (
          <p className="text-[10px] font-[1000] text-cyan-300 uppercase tracking-widest text-right max-w-[38%] truncate">{status}</p>
        ) : (
          <div className="w-11 shrink-0" />
        )}
      </div>

      <div className="flex-1 w-full max-w-md min-h-0 flex flex-col">
        <AnimatePresenceAny mode="wait">

          {/* ───────────────────────────── MENU ────────────────────────────── */}
          {phase === 'menu' && (
            <motion.div key="menu" {...fade} className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 text-center px-1">
              {avatar('w-20 h-20')}
              <div className="space-y-1">
                <h1 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-none">{t.title}</h1>
                <p className="text-white/60 font-bold text-[12px] px-3">{t.tagline}</p>
              </div>
              <button
                type="button"
                onClick={openThink}
                className="w-full text-left p-4 rounded-3xl bg-gradient-to-br from-cyan-950/90 to-sky-950/90 border-2 border-cyan-500/30 hover:border-cyan-400/60 active:scale-[0.98] transition-all flex items-center gap-3"
              >
                <span className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Brain size={24} className="text-cyan-300" />
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-[1000] text-white uppercase tracking-tight">{t.thinkModeTitle}</span>
                  <span className="block text-[12px] font-bold text-white/60 leading-snug">{t.thinkModeBody}</span>
                </span>
              </button>
              <button
                type="button"
                onClick={openReverse}
                className="w-full text-left p-4 rounded-3xl bg-gradient-to-br from-violet-950/90 to-fuchsia-950/90 border-2 border-violet-500/30 hover:border-violet-400/60 active:scale-[0.98] transition-all flex items-center gap-3"
              >
                <span className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                  <Lightbulb size={24} className="text-violet-300" />
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-[1000] text-white uppercase tracking-tight">{t.guessModeTitle}</span>
                  <span className="block text-[12px] font-bold text-white/60 leading-snug">{t.guessModeBody}</span>
                  {best > 0 && (
                    <span className="block text-[10px] font-[1000] text-violet-300 uppercase tracking-widest mt-1">{t.best(best, REVERSE_MAX_POINTS)}</span>
                  )}
                </span>
              </button>
            </motion.div>
          )}

          {/* ───────────────────────────── THINK ───────────────────────────── */}
          {phase === 'think' && (
            <motion.div key="think" {...fade} className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 text-center px-1">
              {avatar('w-20 h-20')}
              <h1 className="text-xl font-[1000] text-white uppercase italic tracking-tighter leading-tight px-2">{t.thinkTitle}</h1>
              <p className="text-white/65 font-bold text-[13px] px-2 leading-snug">{t.thinkBody}</p>

              <div className="w-full">
                <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/35 mb-1.5">{t.ideasTitle}</p>
                <div className="space-y-1.5">
                  {ideas.map((p) => (
                    <div key={p.id} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-left">
                      <span className="text-2xl leading-none" aria-hidden="true">{p.emoji}</span>
                      <span className="text-white/80 font-[1000] text-[13px] truncate">{nameOf(p)}</span>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={() => setIdeas(suggestPeople(IDEAS))} className={`${ghostBtn} mx-auto mt-2`}>
                  <RefreshCw size={13} /> {t.moreIdeas}
                </button>
              </div>

              <p className="text-white/40 text-[11px] font-bold px-3">{t.knowPeople(WHOAMI_PEOPLE.length)}</p>
              <button type="button" onClick={beginAsking} className={`${primaryBtn} text-base px-10 py-5`}>
                <Check size={18} /> {t.ready}
              </button>
            </motion.div>
          )}

          {/* ────────────────────────────── ASK ────────────────────────────── */}
          {phase === 'ask' && question && (
            <motion.div key={`ask-${asked}`} {...fade} className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 text-center px-1">
              <div className="w-full">
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-sky-500 transition-all" style={{ width: `${(asked / MAX_QUESTIONS) * 100}%` }} />
                </div>
                <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/40 mt-1.5">{t.inMyHead(leaderCount(game))}</p>
              </div>

              {avatar('w-16 h-16')}
              <div className="relative w-full rounded-3xl bg-white/10 border border-white/15 px-4 py-5">
                {question.recheck && (
                  <p className="text-[11px] font-[1000] uppercase tracking-widest text-amber-300 mb-1">{t.recheck}</p>
                )}
                <p className="text-xl font-[1000] text-white leading-snug">{WHOAMI_QUESTIONS[question.attr][lang]}</p>
              </div>
              {msg && <p className="text-amber-200 text-[12px] font-bold" role="status">{msg}</p>}

              <div className="w-full grid grid-cols-1 gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => answer(question.attr, asked, 'yes')}
                  className="h-16 rounded-2xl bg-emerald-500/25 border-2 border-emerald-400/60 text-white text-lg font-[1000] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Check size={22} /> {t.yes}
                </button>
                <button
                  type="button"
                  onClick={() => answer(question.attr, asked, 'no')}
                  className="h-16 rounded-2xl bg-rose-500/25 border-2 border-rose-400/60 text-white text-lg font-[1000] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <X size={22} /> {t.no}
                </button>
                <button
                  type="button"
                  onClick={() => answer(question.attr, asked, 'dontknow')}
                  className="h-14 rounded-2xl bg-white/5 border-2 border-white/15 text-white/75 text-base font-[1000] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <HelpCircle size={20} /> {t.dontKnow}
                </button>
              </div>
            </motion.div>
          )}

          {/* ─────────────────────────── THINKING ──────────────────────────── */}
          {phase === 'thinking' && (
            <motion.div key="thinking" {...fade} className="flex-1 min-h-0 flex flex-col items-center justify-center gap-5 text-center px-2">
              <motion.div animate={{ rotate: [0, -8, 8, -8, 0], scale: [1, 1.06, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>
                {avatar('w-28 h-28')}
              </motion.div>
              <p className="text-2xl font-[1000] text-white italic tracking-tight">{t.thinking}</p>
              {msg && <p className="text-amber-200 text-[12px] font-bold" role="status">{msg}</p>}
            </motion.div>
          )}

          {/* ───────────────────────────── GUESS ───────────────────────────── */}
          {phase === 'guess' && guessPerson && (
            <motion.div key={`guess-${guessPerson.id}`} {...fade} className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 text-center px-2">
              <p className="text-[12px] font-[1000] uppercase tracking-widest text-white/50">{t.guessIntro}</p>
              <p className="text-7xl leading-none" aria-hidden="true">{guessPerson.emoji}</p>
              <p className="text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-sky-300 italic tracking-tight leading-tight break-words px-2">
                {nameOf(guessPerson)}
              </p>
              <p className="text-white/70 font-bold text-base">{t.guessAsk}</p>
              <div className="w-full grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => answerGuess(true)}
                  className="h-16 rounded-2xl bg-emerald-500/25 border-2 border-emerald-400/60 text-white text-base font-[1000] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Check size={20} /> {t.guessYes}
                </button>
                <button
                  type="button"
                  onClick={() => answerGuess(false)}
                  className="h-16 rounded-2xl bg-rose-500/25 border-2 border-rose-400/60 text-white text-base font-[1000] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <X size={20} /> {t.guessNo}
                </button>
              </div>
            </motion.div>
          )}

          {/* ───────────────────────────── FOUND ───────────────────────────── */}
          {phase === 'found' && guessPerson && (
            <motion.div key="found" {...fade} className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 text-center px-1">
              <p className="text-6xl leading-none" aria-hidden="true">{guessPerson.emoji}</p>
              <p className="text-2xl font-[1000] text-emerald-300 uppercase italic tracking-tighter">{t.foundTitle}</p>
              <p className="text-2xl font-[1000] text-white italic tracking-tight leading-tight break-words px-2">{nameOf(guessPerson)}</p>
              <p className="text-white/55 text-[12px] font-bold">{t.foundIn(asked)}</p>
              <div className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-left">
                <p className="text-[10px] font-[1000] uppercase tracking-widest text-cyan-300 mb-1">{t.didYouKnow}</p>
                <p className="text-white/80 text-[13px] font-bold leading-snug">{guessPerson.clues[lang][CLUES_PER_PERSON - 1]}</p>
              </div>
              <button type="button" onClick={() => navigate(ACADEMY_PATH)} className={ghostBtn}>
                <BookOpen size={14} /> {t.readStory}
              </button>
              {endButtons}
            </motion.div>
          )}

          {/* ──────────────────────────── STUMPED ──────────────────────────── */}
          {phase === 'stumped' && (
            <motion.div key="stumped" {...fade} className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 text-center px-1">
              <Trophy size={52} className="text-amber-300 shrink-0" />
              <p className="text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-300 uppercase italic tracking-tighter">{t.stumpedTitle}</p>
              {avatar('w-16 h-16')}
              <p className="text-white/70 font-bold text-sm px-3">{t.stumpedBody}</p>
              <button type="button" onClick={() => navigate(ACADEMY_PATH)} className={ghostBtn}>
                <BookOpen size={14} /> {t.readStory}
              </button>
              {endButtons}
            </motion.div>
          )}

          {/* ───────────────────────────── CLUES ───────────────────────────── */}
          {phase === 'clues' && target && (
            <motion.div key={`clues-${rev.index}`} {...fade} className="flex-1 min-h-0 flex flex-col gap-2">
              <div className="flex items-center justify-between px-1 shrink-0">
                <p className="text-[11px] font-[1000] uppercase tracking-widest text-white/60">{t.clueOf(rev.clues, CLUES_PER_PERSON)}</p>
                <p className="text-[11px] font-[1000] uppercase tracking-widest text-violet-300">{t.worth(pointsFor(rev.clues))}</p>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto space-y-1.5 pr-0.5">
                {target.clues[lang].slice(0, rev.clues).map((clue, i) => ({ clue, i })).reverse().map(({ clue, i }) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-2xl px-3 py-2.5 border ${
                      i === rev.clues - 1
                        ? 'bg-violet-500/15 border-violet-400/40 text-white text-[15px]'
                        : 'bg-white/5 border-white/10 text-white/55 text-[12px]'
                    } font-bold leading-snug`}
                  >
                    <span className="text-[10px] font-[1000] uppercase tracking-widest text-violet-300/80 mr-1.5">{i + 1}.</span>
                    {clue}
                  </motion.div>
                ))}
              </div>

              {msg && <p className="text-amber-200 text-[12px] font-bold text-center shrink-0" role="status">{msg}</p>}
              <p className="text-center text-[11px] font-[1000] uppercase tracking-widest text-white/40 shrink-0">{t.whoIsIt}</p>
              <div className="grid grid-cols-2 gap-1.5 shrink-0">
                {rev.options.map((id) => {
                  const p = byId(id);
                  const out = rev.wrong.includes(id);
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => pick(id, rev.index)}
                      disabled={out}
                      className={`min-h-[3.5rem] px-2 py-2 rounded-2xl border-2 font-[1000] text-[13px] leading-tight break-words transition-all active:scale-95 ${
                        out ? 'bg-white/5 border-white/5 text-white/25 line-through' : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                      }`}
                    >
                      {nameOf(p)}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => moreClue(rev.index, rev.clues)}
                disabled={rev.clues >= CLUES_PER_PERSON}
                className={`${ghostBtn} shrink-0`}
              >
                <Lightbulb size={14} /> {t.moreClue}
              </button>
            </motion.div>
          )}

          {/* ───────────────────────────── REVEAL ──────────────────────────── */}
          {phase === 'reveal' && lastResult && (
            <motion.div key={`reveal-${rev.index}`} {...fade} className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 text-center px-1">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 ${
                lastResult.found ? 'bg-emerald-500/20 border-emerald-400/50' : 'bg-amber-500/20 border-amber-400/50'
              }`}>
                {lastResult.found ? <Check size={28} className="text-emerald-300" /> : <Lightbulb size={26} className="text-amber-300" />}
              </div>
              <p className={`text-2xl font-[1000] uppercase italic tracking-tighter ${lastResult.found ? 'text-emerald-300' : 'text-amber-300'}`}>
                {lastResult.found ? t.correct : t.missed}
              </p>
              {!lastResult.found && <p className="text-white/50 text-[12px] font-bold">{t.itWas}</p>}
              <p className="text-6xl leading-none" aria-hidden="true">{byId(lastResult.id)?.emoji}</p>
              <p className="text-2xl font-[1000] text-white italic tracking-tight leading-tight break-words px-2">{nameOf(byId(lastResult.id))}</p>
              {lastResult.found && (
                <p className="text-violet-300 text-sm font-[1000] uppercase tracking-widest">{t.gained(lastResult.points)}</p>
              )}
              <div className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-left">
                <p className="text-[10px] font-[1000] uppercase tracking-widest text-cyan-300 mb-1">{t.didYouKnow}</p>
                <p className="text-white/80 text-[13px] font-bold leading-snug">{byId(lastResult.id)?.clues[lang][CLUES_PER_PERSON - 1]}</p>
              </div>
              <button type="button" onClick={nextPerson} className={primaryBtn}>
                {rev.index + 1 >= rev.order.length ? <><Trophy size={16} /> {t.seeScore}</> : t.next}
              </button>
            </motion.div>
          )}

          {/* ────────────────────────── REVERSE END ────────────────────────── */}
          {phase === 'reverseEnd' && (
            <motion.div key="reverseEnd" {...fade} className="flex-1 min-h-0 flex flex-col items-center justify-center gap-2.5 text-center px-1">
              <Trophy size={34} className="text-amber-300 shrink-0" />
              <p className="text-[11px] font-[1000] uppercase tracking-widest text-white/40">{t.finalTitle}</p>
              <p className="text-5xl font-[1000] text-white font-mono leading-none">
                {reverseScore(rev)}<span className="text-white/35 text-2xl">/{REVERSE_MAX_POINTS}</span>
              </p>
              <p className="text-white/70 text-sm font-bold">{t.foundOf(reverseFound(rev), rev.order.length)}</p>
              {newBest ? (
                <p className="text-amber-300 text-[12px] font-[1000] uppercase tracking-widest">{t.newBest}</p>
              ) : best > 0 ? (
                <p className="text-white/35 text-[11px] font-[1000] uppercase tracking-widest">{t.best(best, REVERSE_MAX_POINTS)}</p>
              ) : null}
              <div className="w-full space-y-1">
                {rev.results.map((r) => {
                  const p = byId(r.id);
                  return (
                    <div key={r.id} className={`flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl border ${
                      r.found ? 'bg-emerald-500/10 border-emerald-400/20' : 'bg-white/5 border-white/10'
                    }`}>
                      <span className="flex items-center gap-2 min-w-0">
                        <span className="text-lg leading-none" aria-hidden="true">{p?.emoji}</span>
                        <span className="text-[12px] font-[1000] text-white/80 truncate">{nameOf(p)}</span>
                      </span>
                      <span className="text-[12px] font-[1000] text-white font-mono shrink-0">{t.points(r.points)}</span>
                    </div>
                  );
                })}
              </div>
              {endButtons}
            </motion.div>
          )}

        </AnimatePresenceAny>
      </div>
    </div>
  );
}
