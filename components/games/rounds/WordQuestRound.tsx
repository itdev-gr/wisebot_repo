/**
 * WORD QUEST — the 30-second round for Η Πρόκληση της Ημέρας
 * ===========================================================
 * The Word Quest mechanic, sliced to fit the daily challenge: tap the scrambled
 * letters to rebuild the word, four words, one clock. Same amber tiles and same
 * feel as the full game (`components/games/WordQuest.tsx`) so a child who plays
 * Word Quest recognises this instantly.
 *
 * What the round contract (`../playRound.ts`) demands and how it is met here:
 *   - everything comes from `seed` via `buildWordQuestRound` — no `Math.random()`,
 *     so every child gets the same four words in the same order;
 *   - `onDone` fires exactly once, guarded by `doneRef`: the clock hitting zero
 *     and the fourth word being answered race each other, and only one wins;
 *   - no back button, no score screen, no `grantGameReward` — the daily shell
 *     owns the frame, the total and the single XP grant.
 *
 * Two differences from the full game, both forced by the 30 seconds: the hint is
 * shown from the start (there is no time to go looking for it) and the right/
 * wrong flashes are shorter, because half a second of animation is 1.7% of the
 * round.
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion as m } from 'framer-motion';
import { BookA, Delete, Timer } from 'lucide-react';
import type { PlayRoundProps } from '../playRound';
import { buildWordQuestRound } from '../../../data/games/rounds/wordQuestWords';

const motion = m as any;

/** Countdown refresh. The bar animates in CSS, so this is not a frame rate. */
const TICK_MS = 200;
const RIGHT_FLASH_MS = 350;
const WRONG_FLASH_MS = 400;
/** Seconds left at which the clock turns red. */
const URGENT_S = 5;

interface PoolLetter {
  letter: string;
  used: boolean;
}

const makePool = (letters: string[]): PoolLetter[] =>
  letters.map(letter => ({ letter, used: false }));

export default function WordQuestRound({ seed, ms, lang, onDone }: PlayRoundProps) {
  const questions = useMemo(() => buildWordQuestRound(seed, lang), [seed, lang]);
  const totalWords = questions.length;

  const [idx, setIdx] = useState(0);
  const [solved, setSolved] = useState(0);
  const [pool, setPool] = useState<PoolLetter[]>([]);
  const [built, setBuilt] = useState<number[]>([]); // indexes into pool
  const [flash, setFlash] = useState<'right' | 'wrong' | null>(null);
  const [msLeft, setMsLeft] = useState(ms);

  // Refs mirror the state the timer and the answer check read *now*, so neither
  // depends on a fresh closure to be correct.
  const idxRef = useRef(0);
  const solvedRef = useRef(0);
  const doneRef = useRef(false);
  const judgingRef = useRef(false); // a right/wrong flash is playing
  const flashTimerRef = useRef<number | null>(null);
  const onDoneRef = useRef(onDone);

  useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  const clearFlashTimer = useCallback(() => {
    if (flashTimerRef.current !== null) {
      window.clearTimeout(flashTimerRef.current);
      flashTimerRef.current = null;
    }
  }, []);

  /** The single exit. Anything after the first call is ignored. */
  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    clearFlashTimer();
    onDoneRef.current({ correct: solvedRef.current, total: totalWords });
  }, [clearFlashTimer, totalWords]);

  const showWord = useCallback((next: number) => {
    idxRef.current = next;
    setIdx(next);
    setPool(makePool(questions[next].letters));
    setBuilt([]);
  }, [questions]);

  /** Next word, or the end of the round. Used by both a solve and a skip. */
  const advance = useCallback(() => {
    judgingRef.current = false;
    const next = idxRef.current + 1;
    if (next >= totalWords) { finish(); return; }
    showWord(next);
  }, [finish, showWord, totalWords]);

  // Round start — and a full reset if the shell ever reuses the component with
  // a different seed instead of remounting it.
  useEffect(() => {
    doneRef.current = false;
    judgingRef.current = false;
    solvedRef.current = 0;
    clearFlashTimer();
    setSolved(0);
    setFlash(null);
    if (totalWords === 0) { finish(); return; }
    showWord(0);

    const deadline = Date.now() + ms;
    setMsLeft(ms);
    const id = window.setInterval(() => {
      const left = deadline - Date.now();
      if (left > 0) { setMsLeft(left); return; }
      window.clearInterval(id);
      setMsLeft(0);
      finish();
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [clearFlashTimer, finish, ms, showWord, totalWords]);

  // Clear the flash timer on unmount so nothing fires into a dead component.
  useEffect(() => clearFlashTimer, [clearFlashTimer]);

  const current = questions[idx];

  // All slots filled → judge the attempt. `judgingRef` makes this idempotent:
  // the effect can re-run on the same filled word without scoring it twice.
  useEffect(() => {
    if (doneRef.current || judgingRef.current || !current) return;
    if (built.length !== current.word.length) return;
    judgingRef.current = true;
    const guess = built.map(i => pool[i].letter).join('');
    if (guess === current.word) {
      solvedRef.current += 1;
      setSolved(solvedRef.current);
      setFlash('right');
      flashTimerRef.current = window.setTimeout(() => {
        flashTimerRef.current = null;
        setFlash(null);
        advance();
      }, RIGHT_FLASH_MS);
    } else {
      setFlash('wrong');
      flashTimerRef.current = window.setTimeout(() => {
        flashTimerRef.current = null;
        judgingRef.current = false;
        setFlash(null);
        setBuilt([]);
        setPool(p => p.map(x => ({ ...x, used: false })));
      }, WRONG_FLASH_MS);
    }
  }, [advance, built, current, pool]);

  const tapLetter = useCallback((i: number) => {
    if (doneRef.current || judgingRef.current || !pool[i] || pool[i].used) return;
    setPool(p => p.map((x, k) => (k === i ? { ...x, used: true } : x)));
    setBuilt(b => [...b, i]);
  }, [pool]);

  const backspace = useCallback(() => {
    if (doneRef.current || judgingRef.current || built.length === 0) return;
    const last = built[built.length - 1];
    setBuilt(b => b.slice(0, -1));
    setPool(p => p.map((x, k) => (k === last ? { ...x, used: false } : x)));
  }, [built]);

  const skip = useCallback(() => {
    if (doneRef.current || judgingRef.current) return;
    clearFlashTimer();
    advance();
  }, [advance, clearFlashTimer]);

  const t = {
    words: lang === 'el' ? 'ΛΕΞΕΙΣ' : 'WORDS',
    skip: lang === 'el' ? 'ΠΑΡΑΛΕΙΨΗ' : 'SKIP',
    erase: lang === 'el' ? 'Σβήσε το τελευταίο γράμμα' : 'Delete the last letter',
    letter: (l: string) => (lang === 'el' ? `Γράμμα ${l}` : `Letter ${l}`),
    empty: lang === 'el' ? 'Δεν υπάρχουν λέξεις.' : 'No words available.',
  };

  if (!current) {
    return (
      <div className="w-full max-w-md mx-auto py-10 text-center text-white/40 font-bold text-sm">
        {t.empty}
      </div>
    );
  }

  const seconds = Math.ceil(msLeft / 1000);
  const urgent = seconds <= URGENT_S;
  const pct = ms > 0 ? Math.max(0, Math.min(100, (msLeft / ms) * 100)) : 0;
  // Seven slots at 40px plus the 44px erase key overflow a 375px screen and push
  // the key onto its own line; narrower slots keep the whole word on one row.
  const slotWidth = current.word.length >= 7 ? 'w-9' : 'w-10';

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-3.5 px-1 select-none overflow-hidden">
      {/* Clock + words solved */}
      <div className="flex items-center justify-between">
        <div className={`flex items-center gap-1.5 font-mono font-[1000] text-lg ${urgent ? 'text-red-400 animate-pulse' : 'text-white/70'}`}>
          <Timer size={16} /> {seconds}s
        </div>
        <div className="text-right">
          <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">{t.words}</p>
          <p className="text-lg font-[1000] text-white leading-none font-mono">{solved}/{totalWords}</p>
        </div>
      </div>

      {/* Time bar */}
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-[width] duration-200 ease-linear ${urgent ? 'bg-red-500' : 'bg-gradient-to-r from-amber-400 to-rose-400'}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Progress dots — one per word, same language as the full game */}
      <div className="flex items-center justify-center gap-1.5">
        {questions.map((q, i) => (
          <div
            key={q.word}
            className={`h-1.5 rounded-full transition-all ${i < idx ? 'w-4 bg-emerald-400' : i === idx ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/15'}`}
          />
        ))}
      </div>

      <motion.div key={current.word} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-3.5">
        {/* Hint — always visible: 30 seconds is no time to go hunting for it */}
        <p className="flex items-center justify-center gap-1.5 text-center text-amber-300/90 font-bold text-sm min-h-[36px] px-2">
          <BookA size={14} className="text-amber-400 shrink-0" />
          {current.hint}
        </p>

        {/* The word being built */}
        <div className={`flex items-center justify-center gap-1.5 flex-wrap min-h-[64px] py-3 px-2 rounded-2xl border-2 transition-colors duration-200 ${
          flash === 'right' ? 'bg-emerald-500/20 border-emerald-400/60'
          : flash === 'wrong' ? 'bg-red-500/20 border-red-400/60'
          : 'bg-white/5 border-white/10'
        }`}>
          {current.word.split('').map((_, i) => (
            <div key={i} className={`${slotWidth} h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center`}>
              <span className="text-2xl font-[1000] text-white">{built[i] !== undefined ? pool[built[i]].letter : ''}</span>
            </div>
          ))}
          {built.length > 0 && !flash && (
            <button
              type="button"
              onClick={backspace}
              aria-label={t.erase}
              className="w-11 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/20 active:scale-95 transition-all"
            >
              <Delete size={18} />
            </button>
          )}
        </div>

        {/* Scrambled letters */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {pool.map((x, i) => (
            <button
              key={i}
              type="button"
              onClick={() => tapLetter(i)}
              disabled={x.used}
              aria-label={t.letter(x.letter)}
              className={`w-12 h-14 rounded-2xl border-2 text-2xl font-[1000] transition-all active:scale-90 ${
                x.used
                  ? 'bg-white/[0.02] border-white/5 text-white/10'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-200 hover:bg-amber-500/25 hover:border-amber-400/60'
              }`}
            >
              {x.letter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Skip — 44px tall, a stuck word should not eat the whole round */}
      <button
        type="button"
        onClick={skip}
        className="mx-auto min-h-[44px] px-5 text-white/30 hover:text-white/60 font-black uppercase tracking-widest text-[10px] transition-colors"
      >
        {t.skip} →
      </button>
    </div>
  );
}
