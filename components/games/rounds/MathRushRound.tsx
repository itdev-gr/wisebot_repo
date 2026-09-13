/**
 * MATH RUSH — 30" round for «Η Πρόκληση της Ημέρας»
 * =================================================
 * A deterministic slice of Math Rush, built against the round contract in
 * `components/games/playRound.ts`:
 *
 *   - every question comes from `seed` (see `./mathRushQuestions`), never from
 *     `Math.random()`, so the phone in Θεσσαλονίκη and the tablet in Λονδίνο
 *     get the identical round on the same day;
 *   - it runs for `ms`, shows the countdown, and calls `onDone` exactly once;
 *   - it draws only the round: no back button, no score card, no XP. The daily
 *     shell owns the frame and the single `grantGameReward` call.
 *
 * The look is Math Rush's on purpose — same emerald/cyan question card, same
 * 2×2 answer grid, same combo flame — so the child recognises the game inside
 * the daily challenge instead of meeting a fourth unfamiliar screen.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion as m } from 'framer-motion';
import { Timer, Flame, Check } from 'lucide-react';
import type { PlayRoundProps, RoundResult } from '../playRound';
import { buildMathRushQuestions } from '../../../data/games/rounds/mathRushQuestions';

const motion = m as any;

/** Milliseconds the right/wrong tint stays on the question card. */
const FLASH_MS = 250;
/** Countdown refresh. The bar is animated by CSS, so this only drives digits. */
const TICK_MS = 250;
/** Combo threshold at which the flame appears, as in Math Rush. */
const COMBO_SHOW = 3;

export default function MathRushRound({ seed, ms, lang, onDone }: PlayRoundProps) {
  const questions = useMemo(() => buildMathRushQuestions(seed), [seed]);

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [combo, setCombo] = useState(0);
  const [flash, setFlash] = useState<'right' | 'wrong' | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(() => Math.max(0, Math.ceil(ms / 1000)));
  const [barRunning, setBarRunning] = useState(false);

  // The result is kept in a ref as well as in state: the timer fires from a
  // closure that must report the score as it is *now*, not as it was when the
  // effect was set up.
  const resultRef = useRef<RoundResult>({ correct: 0, total: 0 });
  // One-shot guard. A late timer, a double render in StrictMode or a last tap
  // landing on the same tick as the deadline must not report the round twice.
  const doneRef = useRef(false);
  const flashTimerRef = useRef<number | null>(null);
  // onDone is read through a ref so that a parent re-rendering with a new
  // callback identity cannot restart the countdown mid-round.
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  const t = {
    correct: lang === 'el' ? 'ΣΩΣΤΑ' : 'CORRECT',
    combo: 'COMBO',
    sec: lang === 'el' ? '"' : 's',
    equals: lang === 'el' ? 'ισούται με' : 'equals',
  };

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDoneRef.current({ ...resultRef.current });
  }, []);

  // Countdown + hard deadline. Both timers are cleared on unmount, so a round
  // the shell drops never calls back.
  useEffect(() => {
    if (ms <= 0) {
      setSecondsLeft(0);
      finish();
      return;
    }
    const deadline = Date.now() + ms;
    const tick = window.setInterval(() => {
      setSecondsLeft(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    }, TICK_MS);
    const end = window.setTimeout(() => {
      setSecondsLeft(0);
      finish();
    }, ms);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(end);
    };
  }, [ms, finish]);

  // Start the time bar one frame after mount: the transition only runs if the
  // element is painted at scaleX(1) first.
  useEffect(() => {
    const id = window.setTimeout(() => setBarRunning(true), 30);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => () => {
    if (flashTimerRef.current !== null) window.clearTimeout(flashTimerRef.current);
  }, []);

  const question = questions[index];

  const answer = useCallback((value: number) => {
    if (doneRef.current || !question) return;
    const right = value === question.answer;

    resultRef.current = {
      correct: resultRef.current.correct + (right ? 1 : 0),
      total: resultRef.current.total + 1,
    };
    setCorrect(c => c + (right ? 1 : 0));
    setCombo(c => (right ? c + 1 : 0));
    setFlash(right ? 'right' : 'wrong');

    if (flashTimerRef.current !== null) window.clearTimeout(flashTimerRef.current);
    flashTimerRef.current = window.setTimeout(() => setFlash(null), FLASH_MS);

    // Unreachable in a 30" round (the ladder is 40 questions long), but a round
    // that runs out of questions ends rather than showing a blank card.
    if (index + 1 >= questions.length) finish();
    else setIndex(i => i + 1);
  }, [question, index, questions.length, finish]);

  const low = secondsLeft <= 10;

  return (
    <div className="h-full w-full max-w-md mx-auto px-3 flex flex-col justify-center gap-4 select-none">
      {/* Countdown, combo, running score */}
      <div className="flex items-center justify-between gap-2">
        <div
          className={`flex items-center gap-1.5 font-mono font-[1000] text-lg ${low ? 'text-red-400 animate-pulse' : 'text-white/70'}`}
          aria-live="off"
        >
          <Timer size={16} /> {secondsLeft}{t.sec}
        </div>

        {combo >= COMBO_SHOW && (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg border font-[1000] text-xs uppercase tracking-widest bg-amber-500/20 text-amber-300 border-amber-500/30">
            <Flame size={12} /> {t.combo} ×{combo}
          </div>
        )}

        <div className="flex items-center gap-1.5 text-emerald-300 font-[1000] font-mono text-lg">
          <Check size={16} />
          <span className="sr-only">{t.correct}</span>
          {correct}
        </div>
      </div>

      {/* Time bar — scaleX, not width: it is composited, so a 30" transition
          costs no layout and leaves the frame budget to the answers. */}
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full w-full origin-left rounded-full ${low ? 'bg-red-500' : 'bg-gradient-to-r from-emerald-400 to-cyan-400'}`}
          style={{
            transform: `scaleX(${barRunning ? 0 : 1})`,
            transition: `transform ${Math.max(0, ms)}ms linear`,
          }}
        />
      </div>

      {question && (
        <>
          {/* Question */}
          <motion.div
            key={`q-${index}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center py-8 rounded-3xl border-2 transition-colors duration-200 ${
              flash === 'right' ? 'bg-emerald-500/20 border-emerald-400/60'
              : flash === 'wrong' ? 'bg-red-500/20 border-red-400/60'
              : 'bg-white/5 border-white/10'
            }`}
          >
            <p className="text-5xl font-[1000] text-white font-mono tracking-tight">{question.text} = ?</p>
          </motion.div>

          {/* Answers — py-5 keeps every target well over 44px */}
          <div className="grid grid-cols-2 gap-3">
            {question.options.map((opt, i) => (
              <button
                key={`${index}-${i}`}
                type="button"
                onClick={() => answer(opt)}
                aria-label={`${question.text} ${t.equals} ${opt}`}
                className="py-5 bg-white/5 border-2 border-white/10 rounded-2xl text-white text-2xl font-[1000] font-mono hover:bg-cyan-500/20 hover:border-cyan-400/50 active:scale-95 transition-all"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
