/**
 * WiseBot World — the museum riddle.
 * ==================================
 * An object in the museum speaks in the first person and asks the child to find it. The
 * answer is an `ExhibitId`, tapped, never typed: typed answers would need six spellings,
 * six sets of accents and six notions of "nearly right", and tapping makes the child look
 * at the objects, which is the whole point of standing in a museum.
 *
 * Rules this file keeps, all of them failure modes this repository has produced before:
 *
 *  1. **`onSolved()` fires exactly once, from the tap.** It is guarded by a ref that flips
 *     synchronously inside the handler, and by a second ref holding the `solved` prop as
 *     it was when THIS riddle was opened. React 19 StrictMode double-invokes state
 *     updaters in development, and a riddle opened in its solved state must never pay
 *     again. Both guards, and every piece of play state, are keyed to `riddle.id` and
 *     re-armed when it changes: nothing here is trapped, so the riddle list behind the
 *     overlay stays keyboard-reachable and the mounted dialog can be handed a second
 *     riddle without unmounting. A guard armed at mount would then either reveal the new
 *     riddle for free or swallow its award.
 *  2. **Nothing is awarded here and nothing is written to storage.** Every reward decision
 *     lives in `useWorldProgress`; this screen is told what is earned and calls back.
 *  3. **No penalty, ever.** A wrong tap shakes that one card and says a kind sentence.
 *     There are no lives, no score and no scolding — the audience is six to twelve.
 *  4. **The hint is free and says so before it is pressed.** A child who is afraid of a
 *     hint stops playing.
 *  5. **Nothing is trapped.** Focus is not captured and the close control is visible at
 *     every scroll position, because a stuck child must be able to leave.
 *
 * Optional fields are all guarded: `exhibit.image`, `image.credit`, and a riddle whose
 * answer is not in the pool it was handed (bad data, but a shake-forever loop is a worse
 * answer than an honest empty state).
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Check, Lightbulb, Search, Sparkles, X } from 'lucide-react';
import type { Exhibit, ExhibitId, Riddle, WorldLang } from '../../data/world/types';
import type { UiText } from './worldUi';
import { WORLD_STYLE, say, shuffleAnswers, ui } from './worldUi';

// ------------------------------------------------------------------- chrome

/**
 * Buttons, headings and the two sentences the game says out loud. Written whole in each
 * language rather than assembled from pieces: Greek and English disagree about word order,
 * so a sentence built from fragments is right in one language and wrong in the other.
 */
const T = {
  eyebrow: { el: 'ΓΡΙΦΟΣ', en: 'RIDDLE' },
  speaks: { el: 'ΚΑΤΙ ΕΔΩ ΜΕΣΑ ΣΟΥ ΜΙΛΑΕΙ', en: 'SOMETHING IN HERE IS TALKING TO YOU' },
  close: { el: 'Κλείσε τον γρίφο', en: 'Close the riddle' },
  find: {
    el: 'Βρες ποιο έκθεμα μιλάει και πάτησέ το.',
    en: 'Work out which exhibit is talking, and tap it.',
  },
  hintAsk: { el: 'Δώσε μου μια βοήθεια', en: 'Give me a hint' },
  hintFree: {
    el: 'Η βοήθεια είναι δωρεάν και δεν χάνεις τίποτα αν την πάρεις.',
    en: 'The hint is free, and you lose nothing by taking it.',
  },
  hintTitle: { el: 'Η ΒΟΗΘΕΙΑ', en: 'THE HINT' },
  wrong: {
    el: 'Όχι αυτό. Δοκίμασε ξανά — δεν χάνεις τίποτα.',
    en: 'Not that one. Try again — you lose nothing.',
  },
  solvedNow: { el: 'Το βρήκες!', en: 'You found it!' },
  solvedBefore: { el: 'Αυτόν τον γρίφο τον είχες λύσει.', en: 'You had already solved this riddle.' },
  solvedBadge: { el: 'ΛΥΜΕΝΟΣ', en: 'SOLVED' },
  answerTitle: { el: 'Η ΑΠΑΝΤΗΣΗ', en: 'THE ANSWER' },
  whyTitle: { el: 'ΓΙΑΤΙ ΕΙΝΑΙ ΑΥΤΟ', en: 'WHY IT IS THIS ONE' },
  back: { el: 'Πίσω στο μουσείο', en: 'Back to the museum' },
  broken: {
    el: 'Αυτός ο γρίφος δεν έχει ακόμα εκθέματα για να διαλέξεις. Δοκίμασε έναν άλλον.',
    en: 'This riddle has no exhibits to choose from yet. Try another one.',
  },
} satisfies Record<string, UiText<string>>;

/** How hard the riddle is. Shown as a word, never as a number a child has to decode. */
const DIFFICULTY: Record<number, UiText<string>> = {
  1: { el: 'ΕΥΚΟΛΟΣ', en: 'EASY' },
  2: { el: 'ΜΕΤΡΙΟΣ', en: 'MEDIUM' },
  3: { el: 'ΔΥΣΚΟΛΟΣ', en: 'HARD' },
};

/**
 * `Exhibit` has no emoji of its own — only `Place` and `MuseumRoom` do — so a picture-less
 * exhibit gets one neutral frame rather than a guessed object. A moai or an amphora here
 * would quietly tell the child what kind of thing they are looking at.
 */
const NO_IMAGE = '🖼️';

/** Two mirrored shakes, so tapping the same wrong card twice in a row still moves it. */
const SHAKE: number[][] = [
  [0, -9, 9, -6, 6, 0],
  [0, 9, -9, 6, -6, 0],
];

// -------------------------------------------------------------------- props

export interface RiddleGameProps {
  lang: WorldLang;
  riddle: Riddle;
  /** Every exhibit in this museum — the answer pool the child chooses from. */
  exhibits: Exhibit[];
  /** Already earned. The riddle then opens revealed and never calls `onSolved`. */
  solved: boolean;
  onSolved: () => void;
  onClose: () => void;
}

// ---------------------------------------------------------------- component

const RiddleGame: React.FC<RiddleGameProps> = ({
  lang,
  riddle,
  exhibits,
  solved,
  onSolved,
  onClose,
}) => {
  const reduced = useReducedMotion();

  /**
   * The award guards. `openedSolved` is the `solved` prop as it was when this riddle was
   * opened, so a riddle opened in its solved state can never pay; `paid` flips
   * synchronously inside the tap handler, before any state update, so a double-invoked
   * updater cannot pay twice either.
   */
  const openedSolved = useRef(solved);
  const paid = useRef(false);

  const [done, setDone] = useState<boolean>(solved);
  const [hintOpen, setHintOpen] = useState(false);
  const [wrong, setWrong] = useState<{ id: ExhibitId; tick: number } | null>(null);

  const tick = useRef(0);
  const wrongTimer = useRef<number | null>(null);
  const panel = useRef<HTMLDivElement | null>(null);

  /**
   * A new riddle in the same mounted dialog is a new game.
   *
   * Focus is deliberately not trapped, so the riddle buttons behind the overlay are still
   * reachable by keyboard and the parent can swap `riddle` under a live instance. Every
   * piece of play state below is initialised from props, which happens once per mount, so
   * without this the second riddle would open showing the first one's outcome — revealed
   * for free if the first was solved, and, worse, permanently unpayable if the first was
   * opened already-solved, because `openedSolved` would still say so.
   *
   * Adjusted during render rather than in an effect: React re-renders synchronously before
   * committing, so there is no moment in which a tap could be handled against the previous
   * riddle's guards. Both assignments are idempotent, which is what StrictMode's second
   * render pass requires.
   */
  const [shownRiddleId, setShownRiddleId] = useState(riddle.id);
  if (shownRiddleId !== riddle.id) {
    setShownRiddleId(riddle.id);
    setDone(solved);
    setHintOpen(false);
    setWrong(null);
    openedSolved.current = solved;
    paid.current = false;
  }

  /** Deduplicated and defensive: bad data must not crash the screen a child is on. */
  const pool = useMemo(() => {
    const seen = new Set<string>();
    const list: Exhibit[] = [];
    for (const exhibit of Array.isArray(exhibits) ? exhibits : []) {
      if (!exhibit || !exhibit.id || seen.has(exhibit.id)) continue;
      seen.add(exhibit.id);
      list.push(exhibit);
    }
    return list;
  }, [exhibits]);

  const answer = useMemo(
    () => pool.find((exhibit) => exhibit.id === riddle.answerExhibitId) ?? null,
    [pool, riddle.answerExhibitId],
  );

  /**
   * The order the cards are laid out in, which is deliberately NOT museum order.
   *
   * Content is authored room by room and riddles tend to follow it, so the answer lands
   * where the author left it: in the sample museum the first riddle's answer is the first
   * exhibit of the first room — the top-left card, the one a child taps first. The pool is
   * permuted by the riddle's own id instead, so the position is uncorrelated with the data
   * yet stable across every re-render and across a language switch; a card that moves while
   * a child is reading it is a bug. `correctIndex` is meaningless here and ignored — the
   * answer is matched by id, never by position.
   */
  const cards = useMemo(() => shuffleAnswers(pool, riddle.id).items, [pool, riddle.id]);

  /** No answer in the pool means no winning tap exists. Say so rather than shake forever. */
  const playable = pool.length > 0 && answer !== null;

  /** Keyed to the riddle: a pending shake from the previous one must not clear this one's. */
  useEffect(() => () => {
    if (wrongTimer.current !== null) {
      window.clearTimeout(wrongTimer.current);
      wrongTimer.current = null;
    }
  }, [riddle.id]);

  /**
   * Put focus inside the dialog when it opens, and again when it is handed a new riddle.
   * Placing focus is not trapping it: Tab still walks out, Escape and the X still leave.
   * Without this, focus stays on a button that is now underneath a full-screen overlay.
   */
  useEffect(() => {
    panel.current?.focus({ preventScroll: true });
  }, [riddle.id]);

  // Escape leaves. It is a second way out, never the only one — the X is always on screen.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  /**
   * The only place an award is decided, and it is a user gesture: a tap, never an effect
   * and never a render.
   */
  const handleTap = (exhibit: Exhibit) => {
    if (done) return;

    if (exhibit.id === riddle.answerExhibitId) {
      if (wrongTimer.current !== null) {
        window.clearTimeout(wrongTimer.current);
        wrongTimer.current = null;
      }
      setWrong(null);
      setDone(true);
      if (!openedSolved.current && !paid.current) {
        paid.current = true;
        onSolved();
      }
      return;
    }

    tick.current += 1;
    setWrong({ id: exhibit.id, tick: tick.current });
    if (wrongTimer.current !== null) window.clearTimeout(wrongTimer.current);
    wrongTimer.current = window.setTimeout(() => {
      wrongTimer.current = null;
      setWrong(null);
    }, 2200);
  };

  const difficulty = DIFFICULTY[riddle.difficulty] ?? DIFFICULTY[1];

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[1500] flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-xl p-0 sm:p-4 xl:pl-80"
    >
      <motion.div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={ui(T.eyebrow, lang)}
        tabIndex={-1}
        initial={reduced ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[86vh] overflow-y-auto overscroll-contain bg-[#0B0F1A] border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl focus:outline-none"
      >
        {/* ── HEADER — the way out is here at every scroll position ── */}
        <div className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 bg-[#0B0F1A]/95 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="min-w-0">
            <div className={WORLD_STYLE.label}>{ui(T.eyebrow, lang)}</div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1" aria-hidden>
                {[1, 2, 3].map((step) => (
                  <span
                    key={step}
                    className={
                      step <= riddle.difficulty
                        ? 'w-1.5 h-1.5 rounded-full bg-amber-300'
                        : 'w-1.5 h-1.5 rounded-full bg-white/20'
                    }
                  />
                ))}
              </div>
              <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">
                {ui(difficulty, lang)}
              </span>
              {done ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-400/[0.08] px-2 py-0.5 text-[10px] font-black text-emerald-300 uppercase tracking-widest">
                  <Check size={10} /> {ui(T.solvedBadge, lang)}
                </span>
              ) : null}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={ui(T.close, lang)}
            className="ml-auto shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/10 text-white/70 hover:bg-white/[0.12] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          {/* ── THE OBJECT SPEAKS ── */}
          <div className={`${WORLD_STYLE.card} p-4 sm:p-5 border-l-4 border-l-amber-400/60`}>
            <div className={WORLD_STYLE.label}>{ui(T.speaks, lang)}</div>
            <p className="mt-2 text-lg sm:text-xl font-bold italic text-white leading-relaxed">
              {say(riddle.prompt, lang)}
            </p>
          </div>

          {done ? (
            /* ── SOLVED — which one it was, and why ── */
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={20} className="text-amber-300 shrink-0" />
                <p className="text-xl font-[1000] italic tracking-tighter leading-none text-white">
                  {openedSolved.current ? ui(T.solvedBefore, lang) : ui(T.solvedNow, lang)}
                </p>
              </div>

              {answer ? (
                <div className={`${WORLD_STYLE.earned} border rounded-2xl p-4`}>
                  <div className="text-[10px] font-black text-emerald-300/70 uppercase tracking-widest">
                    {ui(T.answerTitle, lang)}
                  </div>

                  {answer.image ? (
                    <>
                      <img
                        src={answer.image.src}
                        alt={say(answer.image.alt, lang)}
                        loading="lazy"
                        className="mt-2 w-full h-40 sm:h-56 object-cover rounded-xl border border-white/10"
                      />
                      {answer.image.credit ? (
                        /* Third-party art is credited where it is shown, as the spec asks.
                           Rendered as text, not a link: this is a six-year-old's screen and
                           an outbound tap does not belong on it. */
                        <p className="mt-1.5 text-[10px] text-white/35">
                          {answer.image.credit.text} · {answer.image.credit.license}
                        </p>
                      ) : null}
                    </>
                  ) : (
                    <div className="mt-2 w-full h-28 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                      <span className="text-5xl" role="img" aria-hidden>
                        {NO_IMAGE}
                      </span>
                    </div>
                  )}

                  <h2 className="mt-3 text-2xl font-[1000] italic tracking-tighter leading-none text-white">
                    {say(answer.name, lang)}
                  </h2>

                  <div className="mt-4 text-[10px] font-black text-white/40 uppercase tracking-widest">
                    {ui(T.whyTitle, lang)}
                  </div>
                  <p className={`${WORLD_STYLE.body} mt-1.5 text-sm`}>{say(answer.blurb, lang)}</p>
                </div>
              ) : (
                <div className={`${WORLD_STYLE.card} p-4`}>
                  <p className={`${WORLD_STYLE.body} text-sm`}>{say(riddle.hint, lang)}</p>
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className={`${WORLD_STYLE.cta} w-full min-h-[52px] inline-flex items-center justify-center gap-2`}
              >
                <ArrowLeft size={18} /> {ui(T.back, lang)}
              </button>
            </motion.div>
          ) : playable ? (
            <>
              {/* ── WHAT TO DO ── */}
              <div className="flex items-center gap-2">
                <Search size={16} className="text-white/40 shrink-0" />
                <p className="text-sm font-bold text-white/70">{ui(T.find, lang)}</p>
              </div>

              {/* ── HINT — free, and it says so before it is pressed ── */}
              {hintOpen ? (
                <div className={`${WORLD_STYLE.card} p-4`}>
                  <div className="flex items-center gap-2">
                    <Lightbulb size={14} className="text-amber-300 shrink-0" />
                    <span className={WORLD_STYLE.label}>{ui(T.hintTitle, lang)}</span>
                  </div>
                  <p className={`${WORLD_STYLE.body} mt-2 text-sm`}>{say(riddle.hint, lang)}</p>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => setHintOpen(true)}
                    className={`${WORLD_STYLE.ghost} w-full min-h-[48px] inline-flex items-center justify-center gap-2`}
                  >
                    <Lightbulb size={18} className="text-amber-300" /> {ui(T.hintAsk, lang)}
                  </button>
                  <p className="mt-2 text-center text-[11px] font-bold text-white/40">
                    {ui(T.hintFree, lang)}
                  </p>
                </div>
              )}

              {/* Kept in the layout at all times so nothing jumps when it speaks. */}
              <p
                aria-live="polite"
                className="min-h-[1.25rem] text-center text-sm font-bold text-amber-200/90"
              >
                {wrong ? ui(T.wrong, lang) : ''}
              </p>

              {/* ── THE POOL ── */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cards.map((exhibit) => {
                  const isWrong = wrong !== null && wrong.id === exhibit.id;
                  const shake: number | number[] =
                    isWrong && !reduced ? SHAKE[wrong.tick % 2] : 0;

                  return (
                    <motion.div
                      key={exhibit.id}
                      animate={{ x: shake }}
                      transition={{ duration: 0.45, ease: 'easeInOut' }}
                    >
                      <button
                        type="button"
                        onClick={() => handleTap(exhibit)}
                        className={
                          isWrong
                            ? 'w-full h-full p-2.5 text-left rounded-2xl border border-amber-400/50 bg-amber-400/[0.08] transition-colors'
                            : `w-full h-full p-2.5 text-left ${WORLD_STYLE.cardTap}`
                        }
                      >
                        <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/[0.06] border border-white/10 flex items-center justify-center">
                          {exhibit.image ? (
                            <img
                              src={exhibit.image.src}
                              alt={say(exhibit.image.alt, lang)}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-4xl" role="img" aria-hidden>
                              {NO_IMAGE}
                            </span>
                          )}
                        </div>
                        <div className="mt-2 min-h-[2.5rem] text-sm font-bold text-white/90 leading-snug">
                          {say(exhibit.name, lang)}
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </>
          ) : (
            /* ── BAD DATA — an honest wall, not a game that cannot be won ── */
            <div className={`${WORLD_STYLE.card} p-6 text-center`}>
              <p className="text-white/50 font-bold italic">{ui(T.broken, lang)}</p>
              <button
                type="button"
                onClick={onClose}
                className={`${WORLD_STYLE.ghost} mt-4 min-h-[48px] inline-flex items-center justify-center gap-2`}
              >
                <ArrowLeft size={18} /> {ui(T.back, lang)}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RiddleGame;
