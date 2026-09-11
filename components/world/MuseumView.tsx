/**
 * WiseBot World — the inside of a museum.
 * =======================================
 * A place with `category: 'museum'` has a whole building behind its card: two to five
 * rooms, three to six exhibits in each, and two to four riddles that describe one of
 * those exhibits without naming it. This screen is that building.
 *
 * What it owns: which room the child is standing in, which riddle is open, and which
 * answer they tapped this session. What it does NOT own: rewards. Every award decision
 * lives in `useWorldProgress`; this screen receives what is already earned as
 * `answeredExhibits` / `solvedRiddles` and calls `onExhibitAnswer` / `onRiddleSolved`
 * from a click handler, once, guarded by a ref that updates synchronously — React 19
 * StrictMode double-invokes effects and state updaters in development, and that is
 * precisely the shape that has double-charged in this repo before.
 *
 * One attempt per exhibit per visit. A tap locks the exhibit and shows the explanation,
 * right or wrong, because the explanation is where the learning lands. A wrong answer is
 * never recorded upstream, so the exhibit is open again next time the child walks in.
 *
 * The riddle itself is `./RiddleGame`, a full-screen dialog that receives every exhibit
 * of this museum — across all of its rooms — as the pool to tap in. It layers over this
 * screen rather than replacing it, so the room the child was in survives the visit. The
 * museum goes `inert` underneath it, because a dialog you can still tab behind is not a
 * dialog.
 *
 * Two rules borrowed verbatim from `PlaceCard`, because they are the same screen twice:
 * an answered option is `aria-disabled`, never `disabled` (a disabled button leaves the
 * tab order and drops focus to <body> exactly when the explanation appears), and the
 * explanation's live region is the wrapper, always mounted, so the text arriving inside
 * it is a mutation a screen reader actually reads.
 */

import React, { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Check, DoorOpen, Puzzle, Sparkles } from 'lucide-react';
import type {
  Exhibit,
  ExhibitId,
  Place,
  Riddle,
  RiddleId,
  RoomId,
  WorldLang,
} from '../../data/world/types';
import type { UiText } from './worldUi';
import { WORLD_STYLE, say, shuffleAnswers, ui } from './worldUi';
import RiddleGame from './RiddleGame';
import StoryNarration from './StoryNarration';

// ------------------------------------------------------------------- chrome
// Buttons, headings and empty states. Whole sentences, written twice: Greek and
// English disagree on word order, so a sentence is never built from fragments.

const T = {
  museum: { el: 'ΜΟΥΣΕΙΟ', en: 'MUSEUM' },
  back: { el: 'Πίσω', en: 'Back' },
  rooms: { el: 'ΑΙΘΟΥΣΕΣ', en: 'ROOMS' },
  exhibits: { el: 'ΕΚΘΕΜΑΤΑ', en: 'EXHIBITS' },
  riddles: { el: 'ΓΡΙΦΟΙ', en: 'RIDDLES' },
  riddle: { el: 'ΓΡΙΦΟΣ', en: 'RIDDLE' },
  collected: { el: 'ΤΟ ΒΡΗΚΕΣ', en: 'COLLECTED' },
  solved: { el: 'ΛΥΘΗΚΕ', en: 'SOLVED' },
  credit: { el: 'ΠΗΓΗ', en: 'CREDIT' },
  why: { el: 'ΓΙΑΤΙ', en: 'WHY' },
  right: { el: 'Σωστά! Το είδες καλά.', en: 'Correct! You looked carefully.' },
  wrong: { el: 'Όχι αυτό. Δες παρακάτω γιατί.', en: 'Not that one. Here is why.' },
  alreadyRight: { el: 'Αυτό το έκθεμα το έχεις ήδη μαζέψει.', en: 'You have already collected this exhibit.' },
  openRiddle: { el: 'Λύσε τον γρίφο', en: 'Solve the riddle' },
  openRiddleAgain: { el: 'Διάβασέ τον ξανά', en: 'Read it again' },
  roomDone: { el: 'Τέλεια! Είδες όλη την αίθουσα.', en: 'Well done! You have seen the whole room.' },
  museumDone: { el: 'Είδες κάθε έκθεμα και έλυσες κάθε γρίφο.', en: 'You have seen every exhibit and solved every riddle.' },
  noMuseum: { el: 'Αυτό το μέρος δεν έχει αίθουσες για να μπεις.', en: 'This place has no rooms to walk into.' },
  noRooms: { el: 'Το μουσείο ετοιμάζει ακόμα τις αίθουσές του.', en: 'This museum is still getting its rooms ready.' },
  noExhibits: { el: 'Αυτή η αίθουσα είναι ακόμα άδεια.', en: 'This room is still empty.' },
  noRiddles: { el: 'Δεν υπάρχουν γρίφοι σε αυτό το μουσείο.', en: 'There are no riddles in this museum.' },
  exhibitsProgress: {
    el: (done: number, total: number) => `Έχεις δει ${done} από ${total} εκθέματα.`,
    en: (done: number, total: number) => `You have seen ${done} of ${total} exhibits.`,
  },
  riddlesProgress: {
    el: (done: number, total: number) => `Έχεις λύσει ${done} από ${total} γρίφους.`,
    en: (done: number, total: number) => `You have solved ${done} of ${total} riddles.`,
  },
  roomAria: {
    // The visible chip carries `done/total`; an aria-label REPLACES the button's text,
    // so the count has to be said here too or a screen-reader child never hears it.
    el: (name: string, done: number, total: number) =>
      `Αίθουσα: ${name}. Έχεις δει ${done} από ${total} εκθέματα.`,
    en: (name: string, done: number, total: number) =>
      `Room: ${name}. You have seen ${done} of ${total} exhibits.`,
  },
  difficultyAria: {
    el: (n: number) => `Δυσκολία ${n} στα 3`,
    en: (n: number) => `Difficulty ${n} out of 3`,
  },
  riddleAnswerWas: {
    el: (name: string) => `Η απάντηση ήταν το έκθεμα «${name}».`,
    en: (name: string) => `The answer was the exhibit “${name}”.`,
  },
} satisfies Record<string, UiText<string> | UiText<(...args: never[]) => string>>;

// ------------------------------------------------------------------ pieces

const BackBar: React.FC<{ label: string; caption: string; onBack: () => void }> = ({
  label,
  caption,
  onBack,
}) => (
  <div className="sticky top-0 z-30 -mx-4 px-4 py-3 bg-[#0B0F1A]/85 backdrop-blur-md flex items-center gap-3">
    <button
      type="button"
      onClick={onBack}
      className="inline-flex items-center gap-2 min-h-[44px] bg-white/[0.06] border border-white/10 text-white/80 font-black uppercase tracking-widest text-[11px] rounded-xl px-4 py-2.5 hover:bg-white/[0.12] active:scale-[0.98] transition-all"
    >
      <ArrowLeft size={16} aria-hidden /> {label}
    </button>
    <span className={WORLD_STYLE.label}>{caption}</span>
  </div>
);

const ExhibitImage: React.FC<{ lang: WorldLang; exhibit: Exhibit; creditLabel: string }> = ({
  lang,
  exhibit,
  creditLabel,
}) => {
  const [failed, setFailed] = useState(false);
  const image = exhibit.image;
  if (!image || !image.src || failed) return null;

  const credit = image.credit;
  return (
    <figure className="mt-3">
      <img
        src={image.src}
        alt={image.alt ? say(image.alt, lang) : ''}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="w-full aspect-[4/3] object-cover rounded-xl border border-white/10 bg-white/[0.03]"
      />
      {/* Either half is enough to owe an attribution: a licence with no attribution line
          still has to be shown, so this must not hinge on `credit.text` alone. */}
      {credit && (credit.text || credit.license) && (
        <figcaption className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[10px] font-bold text-white/40">
          <span className={WORLD_STYLE.label}>{creditLabel}</span>
          {credit.text &&
            (credit.url ? (
              <a
                href={credit.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-white/70"
              >
                {credit.text}
              </a>
            ) : (
              <span>{credit.text}</span>
            ))}
          {credit.license && (
            <span className="text-white/30">
              {credit.text ? `· ${credit.license}` : credit.license}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

interface ExhibitCardProps {
  lang: WorldLang;
  exhibit: Exhibit;
  collected: boolean;
  picked?: number;
  onPick: (index: number, correct: boolean) => void;
}

const ExhibitCard: React.FC<ExhibitCardProps> = ({ lang, exhibit, collected, picked, onPick }) => {
  const question = exhibit.question;
  const shuffled = useMemo(
    () => shuffleAnswers(question ? question.answers : [], exhibit.id),
    [question, exhibit.id],
  );
  const options = shuffled.items;
  const correctIndex = shuffled.correctIndex;

  const answered = collected || picked !== undefined;
  const gotItRight = collected || (picked !== undefined && picked === correctIndex);

  return (
    <li className={collected ? 'bg-white/[0.04] border rounded-2xl p-4 border-emerald-400/40' : 'bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4'}>
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-white font-black text-base leading-snug min-w-0 break-words">
          {say(exhibit.name, lang)}
        </h4>
        {collected && (
          <span className="inline-flex items-center gap-1 shrink-0 rounded-full border border-emerald-400/40 bg-emerald-400/[0.12] px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-300">
            <Check size={12} aria-hidden /> {ui(T.collected, lang)}
          </span>
        )}
      </div>

      <ExhibitImage lang={lang} exhibit={exhibit} creditLabel={ui(T.credit, lang)} />

      {exhibit.blurb && (
        // Read aloud in the app's one voice where narration exists for this exhibit,
        // plain text where it does not. An exhibit is often the first thing a child
        // meets that is written above their reading age, so the voice matters more
        // here than on the place card.
        <StoryNarration
          id={exhibit.id}
          lang={lang}
          text={say(exhibit.blurb, lang)}
          className="text-sm mt-3"
        />
      )}

      {question && options.length > 0 && (
        <div className="mt-4">
          <p className="text-white font-black text-sm leading-snug">{say(question.q, lang)}</p>
          <div className="mt-3 grid grid-cols-1 gap-2">
            {options.map((option, index) => {
              const isCorrect = answered && index === correctIndex;
              const isWrongPick = picked === index && index !== correctIndex;
              const state = isCorrect
                ? 'bg-emerald-500/20 border-emerald-400/60 text-white'
                : isWrongPick
                  ? 'bg-red-500/20 border-red-400/60 text-white'
                  : answered
                    ? 'bg-white/[0.03] border-white/10 text-white/40'
                    : 'bg-white/[0.06] border-white/10 text-white/80 hover:bg-white/[0.12] hover:border-white/25 active:scale-[0.99]';
              return (
                <button
                  key={`${exhibit.id}-${index}`}
                  type="button"
                  /* `aria-disabled`, never `disabled`: a disabled button leaves the tab
                     order and throws focus to <body> at the exact moment the explanation
                     appears, so a keyboard or screen-reader child loses their place and
                     never hears the answer. `PlaceCard` follows the same rule for the same
                     reason. `handleExhibitPick` refuses a second call anyway, so leaving
                     the button focusable cannot award anything twice. */
                  aria-disabled={answered}
                  onClick={() => {
                    if (answered) return;
                    onPick(index, index === correctIndex);
                  }}
                  className={`w-full min-h-[44px] text-left rounded-xl border px-4 py-3 text-sm font-bold transition-all ${answered ? 'cursor-default' : ''} ${state}`}
                >
                  {say(option, lang)}
                </button>
              );
            })}
          </div>

          {/* The live region is the wrapper and is always in the DOM, so the panel
              arriving inside it is a mutation a screen reader announces; a region that
              mounts with its text already inside it is often not read at all. Same rule,
              and same reason, as the result panel in `PlaceCard`. */}
          <div role="status" aria-live="polite">
            {answered && (
              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className={gotItRight ? 'text-emerald-300 font-black text-xs uppercase tracking-widest' : 'text-amber-300 font-black text-xs uppercase tracking-widest'}>
                  {collected && picked === undefined
                    ? ui(T.alreadyRight, lang)
                    : gotItRight
                      ? ui(T.right, lang)
                      : ui(T.wrong, lang)}
                </p>
                {question.explanation && (
                  <>
                    <p className={`${WORLD_STYLE.label} mt-2`}>{ui(T.why, lang)}</p>
                    <p className={`${WORLD_STYLE.body} text-sm mt-1`}>
                      {say(question.explanation, lang)}
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

interface RiddleCardProps {
  lang: WorldLang;
  riddle: Riddle;
  solved: boolean;
  answerName?: string;
  onOpen: () => void;
}

const RiddleCard: React.FC<RiddleCardProps> = ({ lang, riddle, solved, answerName, onOpen }) => {
  // Clamped, so bad data cannot announce "Difficulty 7 out of 3" or draw no dots at all.
  const raw = riddle.difficulty;
  const difficulty = raw >= 3 ? 3 : raw <= 1 ? 1 : 2;
  return (
    <li className={solved ? 'rounded-2xl border p-4 border-emerald-400/40 bg-emerald-400/[0.08]' : 'rounded-2xl border p-4 border-amber-400/25 bg-amber-400/[0.06]'}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={WORLD_STYLE.label}>{ui(T.riddle, lang)}</span>
          {/* `role="img"` is load-bearing: a bare <span> is `role=generic`, which forbids
              an accessible name, so the aria-label would be dropped and the three dots —
              all of them aria-hidden — would say nothing at all. */}
          <span
            className="flex items-center gap-1"
            role="img"
            aria-label={ui(T.difficultyAria, lang)(difficulty)}
          >
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                aria-hidden
                className={n <= difficulty ? 'w-1.5 h-1.5 rounded-full bg-amber-300' : 'w-1.5 h-1.5 rounded-full bg-white/15'}
              />
            ))}
          </span>
        </div>
        {solved && (
          <span className="inline-flex items-center gap-1 shrink-0 rounded-full border border-emerald-400/40 bg-emerald-400/[0.12] px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-300">
            <Check size={12} aria-hidden /> {ui(T.solved, lang)}
          </span>
        )}
      </div>

      {riddle.prompt && (
        <p className="text-white/80 font-bold italic text-sm leading-relaxed mt-2 line-clamp-3">
          {say(riddle.prompt, lang)}
        </p>
      )}

      {solved && answerName && (
        <p className="text-emerald-300/80 font-bold text-xs mt-2">
          {ui(T.riddleAnswerWas, lang)(answerName)}
        </p>
      )}

      <button
        type="button"
        onClick={onOpen}
        className={solved
          ? 'mt-3 w-full min-h-[44px] bg-white/[0.06] border border-white/10 text-white/70 font-black uppercase tracking-widest text-[11px] rounded-xl px-4 py-3 hover:bg-white/[0.12] active:scale-[0.99] transition-all'
          : 'mt-3 w-full min-h-[44px] bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black uppercase tracking-widest text-[11px] rounded-xl px-4 py-3 shadow-[0_0_20px_rgba(245,158,11,0.35)] active:scale-[0.98] transition-transform'}
      >
        {solved ? ui(T.openRiddleAgain, lang) : ui(T.openRiddle, lang)}
      </button>
    </li>
  );
};

// -------------------------------------------------------------------- view

export interface MuseumViewProps {
  lang: WorldLang;
  /** `place.museum` is guaranteed by the caller, and treated as optional anyway. */
  place: Place;
  answeredExhibits: Record<ExhibitId, string>;
  solvedRiddles: Record<RiddleId, string>;
  onExhibitAnswer: (exhibitId: ExhibitId, correct: boolean) => void;
  onRiddleSolved: (riddleId: RiddleId) => void;
  onBack: () => void;
}

const MuseumView: React.FC<MuseumViewProps> = ({
  lang,
  place,
  answeredExhibits,
  solvedRiddles,
  onExhibitAnswer,
  onRiddleSolved,
  onBack,
}) => {
  // House rule for this module (`RiddleGame`, `PassportStamp`): motion is opt-out.
  const reduced = useReducedMotion();
  const museum = place.museum;

  const rooms = useMemo(() => museum?.rooms ?? [], [museum]);
  const riddles = useMemo(() => museum?.riddles ?? [], [museum]);
  /** Every exhibit of the whole museum: the pool a riddle is answered from. */
  const allExhibits = useMemo(
    () => rooms.flatMap((room) => room.exhibits ?? []),
    [rooms],
  );

  const [roomId, setRoomId] = useState<RoomId | null>(null);
  const [openRiddleId, setOpenRiddleId] = useState<RiddleId | null>(null);
  /** What the child tapped this session, per exhibit. Never persisted here. */
  const [picked, setPicked] = useState<Record<ExhibitId, number>>({});

  /**
   * The award guards. Refs, not state: they update synchronously, so a double-invoked
   * updater or a double-clicked button cannot fire the same callback twice.
   */
  const firedExhibits = useRef<Set<ExhibitId>>(new Set());
  const firedRiddles = useRef<Set<RiddleId>>(new Set());

  const activeRoom = rooms.find((room) => room.id === roomId) ?? rooms[0];
  const openRiddle = riddles.find((riddle) => riddle.id === openRiddleId);

  const seenCount = allExhibits.filter((exhibit) => Boolean(answeredExhibits[exhibit.id])).length;
  const solvedCount = riddles.filter((riddle) => Boolean(solvedRiddles[riddle.id])).length;
  const exhibitPct = allExhibits.length > 0 ? Math.round((seenCount / allExhibits.length) * 100) : 0;
  const riddlePct = riddles.length > 0 ? Math.round((solvedCount / riddles.length) * 100) : 0;
  const everythingDone =
    allExhibits.length > 0 && seenCount === allExhibits.length && solvedCount === riddles.length;

  // Awards, from a click handler, once each. Never from an effect, never from a render.
  const handleExhibitPick = (exhibit: Exhibit, correct: boolean, index: number) => {
    if (answeredExhibits[exhibit.id]) return;
    if (firedExhibits.current.has(exhibit.id)) return;
    firedExhibits.current.add(exhibit.id);
    setPicked((prev) => ({ ...prev, [exhibit.id]: index }));
    onExhibitAnswer(exhibit.id, correct);
  };

  const handleRiddleSolved = (riddleId: RiddleId) => {
    if (solvedRiddles[riddleId]) return;
    if (firedRiddles.current.has(riddleId)) return;
    firedRiddles.current.add(riddleId);
    onRiddleSolved(riddleId);
  };

  // ---- a place with nothing inside it. Typed optional, so treated as optional.
  if (!museum) {
    return (
      <div className="max-w-3xl mx-auto px-4 pb-24">
        <BackBar label={ui(T.back, lang)} caption={ui(T.museum, lang)} onBack={onBack} />
        <div className={`${WORLD_STYLE.card} p-6 text-center mt-2`}>
          <div className="text-4xl" aria-hidden>🚪</div>
          <p className={`${WORLD_STYLE.body} text-sm mt-3`}>{ui(T.noMuseum, lang)}</p>
          <button type="button" onClick={onBack} className={`${WORLD_STYLE.cta} mt-5 min-h-[44px]`}>
            {ui(T.back, lang)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pb-24">
      {/* `RiddleGame` is a dialog laid over this screen rather than in place of it, which
          keeps the room the child was in — but it also leaves every control below still
          tabbable and still read by a screen reader through the overlay. `inert` is what
          makes the layering honest: the museum is unreachable while the riddle is open,
          and reachable again the moment it closes. A plain wrapper, no classes, so the
          sticky bar and its negative margins land exactly where they did. */}
      <div inert={Boolean(openRiddle)}>
        <BackBar label={ui(T.back, lang)} caption={ui(T.museum, lang)} onBack={onBack} />

        {/* ── THE DOOR ── */}
        <motion.section
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${WORLD_STYLE.card} p-5 mt-2`}
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-3xl">
              <span aria-hidden>{place.emoji || '🏛️'}</span>
            </div>
            <div className="min-w-0">
              <p className={WORLD_STYLE.label}>{ui(T.museum, lang)}</p>
              <h2 className={`${WORLD_STYLE.display} text-2xl sm:text-3xl mt-1 break-words`}>
                {say(place.name, lang)}
              </h2>
              {museum.doorNote && (
                <p className="flex items-start gap-2 text-white/60 font-bold italic text-sm mt-2">
                  <DoorOpen size={15} className="shrink-0 mt-0.5 text-violet-300" aria-hidden />
                  {say(museum.doorNote, lang)}
                </p>
              )}
            </div>
          </div>

          {/* ── PROGRESS AT A GLANCE ── */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-3">
              <div className={`${WORLD_STYLE.display} text-2xl`}>
                {seenCount}/{allExhibits.length}
              </div>
              <div className={`${WORLD_STYLE.label} mt-1`}>{ui(T.exhibits, lang)}</div>
              <div
                className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={exhibitPct}
                aria-label={ui(T.exhibitsProgress, lang)(seenCount, allExhibits.length)}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                  style={{ width: `${exhibitPct}%` }}
                />
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-3">
              <div className={`${WORLD_STYLE.display} text-2xl`}>
                {solvedCount}/{riddles.length}
              </div>
              <div className={`${WORLD_STYLE.label} mt-1`}>{ui(T.riddles, lang)}</div>
              <div
                className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={riddlePct}
                aria-label={ui(T.riddlesProgress, lang)(solvedCount, riddles.length)}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                  style={{ width: `${riddlePct}%` }}
                />
              </div>
            </div>
          </div>

          {everythingDone && (
            <p className="flex items-center gap-2 mt-4 text-emerald-300 font-black uppercase tracking-widest text-[11px]">
              <Sparkles size={14} aria-hidden /> {ui(T.museumDone, lang)}
            </p>
          )}
        </motion.section>

        {/* ── ROOMS ── */}
        {rooms.length === 0 ? (
          <div className={`${WORLD_STYLE.card} p-6 text-center mt-6`}>
            <p className={`${WORLD_STYLE.body} text-sm`}>{ui(T.noRooms, lang)}</p>
          </div>
        ) : (
          <section className="mt-6">
            <p className={WORLD_STYLE.label}>{ui(T.rooms, lang)}</p>

            {/* The strip scrolls inside itself; the page never scrolls sideways. */}
            <div className="mt-2 overflow-x-auto pb-1">
              <div className="flex gap-2 w-max">
                {rooms.map((room) => {
                  const roomExhibits = room.exhibits ?? [];
                  const roomDone = roomExhibits.filter((e) => Boolean(answeredExhibits[e.id])).length;
                  const isActive = activeRoom ? room.id === activeRoom.id : false;
                  return (
                    <button
                      key={room.id}
                      type="button"
                      aria-pressed={isActive}
                      aria-label={ui(T.roomAria, lang)(
                        say(room.name, lang),
                        roomDone,
                        roomExhibits.length,
                      )}
                      onClick={() => setRoomId(room.id)}
                      className={isActive
                        ? 'inline-flex items-center gap-2 min-h-[44px] rounded-xl px-4 py-2.5 border bg-white/[0.12] border-white/30 text-white font-black text-sm transition-all'
                        : 'inline-flex items-center gap-2 min-h-[44px] rounded-xl px-4 py-2.5 border bg-white/[0.04] border-white/[0.08] text-white/60 font-black text-sm hover:bg-white/[0.09] hover:border-white/20 active:scale-[0.99] transition-all'}
                    >
                      <span className="text-lg" aria-hidden>{room.emoji || '🚪'}</span>
                      <span className="whitespace-nowrap">{say(room.name, lang)}</span>
                      <span className="text-[10px] font-black text-white/40 tracking-widest">
                        {roomDone}/{roomExhibits.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── THE ROOM ── */}
            <AnimatePresence mode="wait">
              {activeRoom && (
                <motion.div
                  key={activeRoom.id}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.18 }}
                  className="mt-4"
                >
                  <div className={`${WORLD_STYLE.card} p-5`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" aria-hidden>{activeRoom.emoji || '🚪'}</span>
                      <h3 className={`${WORLD_STYLE.display} text-xl sm:text-2xl break-words`}>
                        {say(activeRoom.name, lang)}
                      </h3>
                    </div>
                    {activeRoom.intro && (
                      <p className={`${WORLD_STYLE.body} text-sm mt-3`}>
                        {say(activeRoom.intro, lang)}
                      </p>
                    )}
                  </div>

                  {(activeRoom.exhibits ?? []).length === 0 ? (
                    <div className={`${WORLD_STYLE.card} p-6 text-center mt-3`}>
                      <p className={`${WORLD_STYLE.body} text-sm`}>{ui(T.noExhibits, lang)}</p>
                    </div>
                  ) : (
                    <ul className="mt-3 space-y-3 list-none p-0">
                      {(activeRoom.exhibits ?? []).map((exhibit) => (
                        <ExhibitCard
                          key={exhibit.id}
                          lang={lang}
                          exhibit={exhibit}
                          collected={Boolean(answeredExhibits[exhibit.id])}
                          picked={picked[exhibit.id]}
                          onPick={(index, correct) => handleExhibitPick(exhibit, correct, index)}
                        />
                      ))}
                    </ul>
                  )}

                  {(activeRoom.exhibits ?? []).length > 0 &&
                    (activeRoom.exhibits ?? []).every((e) => Boolean(answeredExhibits[e.id])) && (
                      <p className="flex items-center gap-2 mt-3 text-emerald-300 font-black uppercase tracking-widest text-[11px]">
                        <Check size={14} aria-hidden /> {ui(T.roomDone, lang)}
                      </p>
                    )}
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* ── RIDDLES ── */}
        <section className="mt-8">
          <div className="flex items-center gap-2">
            <Puzzle size={16} className="text-amber-300" aria-hidden />
            <p className={WORLD_STYLE.label}>{ui(T.riddles, lang)}</p>
            <span className="text-[10px] font-black text-white/40 tracking-widest">
              {solvedCount}/{riddles.length}
            </span>
          </div>

          {riddles.length === 0 ? (
            <div className={`${WORLD_STYLE.card} p-6 text-center mt-2`}>
              <p className={`${WORLD_STYLE.body} text-sm`}>{ui(T.noRiddles, lang)}</p>
            </div>
          ) : (
            <ul className="mt-3 space-y-3 list-none p-0">
              {riddles.map((riddle) => {
                const answerExhibit = allExhibits.find((e) => e.id === riddle.answerExhibitId);
                return (
                  <RiddleCard
                    key={riddle.id}
                    lang={lang}
                    riddle={riddle}
                    solved={Boolean(solvedRiddles[riddle.id])}
                    answerName={answerExhibit ? say(answerExhibit.name, lang) : undefined}
                    onOpen={() => setOpenRiddleId(riddle.id)}
                  />
                );
              })}
            </ul>
          )}
        </section>
      </div>

      {/* ── ONE RIDDLE, OPEN ──
          RiddleGame is its own full-screen dialog, so it layers over the museum rather
          than replacing it: the room the child was standing in and the answer they
          tapped are both still there behind it, and still there when it closes. It is a
          SIBLING of the inert block above, never a child of it, or it would disable
          itself the moment it opened. */}
      {openRiddle && (
        <RiddleGame
          lang={lang}
          riddle={openRiddle}
          exhibits={allExhibits}
          solved={Boolean(solvedRiddles[openRiddle.id])}
          onSolved={() => handleRiddleSolved(openRiddle.id)}
          onClose={() => setOpenRiddleId(null)}
        />
      )}
    </div>
  );
};

export default MuseumView;
