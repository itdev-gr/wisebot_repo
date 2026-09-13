/**
 * WiseBot World — one place.
 *
 * The story, the facts, and the question that earns the stamp. This is the screen the
 * child came for: everything above the question exists to make the question answerable
 * from having read, not from having guessed.
 *
 * Three rules this file lives by:
 *
 *  1. **It awards nothing.** Every reward decision lives in `useWorldProgress`. This
 *     component receives what is already earned (`stamp`) and calls `onComplete` once.
 *     It never reads or writes storage and never touches XP.
 *  2. **`onComplete` fires exactly once, from the click.** Never from an effect, never
 *     from a render. React 19 StrictMode double-invokes effects and state updaters in
 *     development, and that is precisely how this codebase has double-charged before,
 *     so the guard is a ref checked and set synchronously inside the handler.
 *  3. **The answer the child just gave outranks the stamp.** `onComplete` makes the
 *     stamp land in the same commit, so `stamp` is already present on the very next
 *     render. Branching the result panel on `stamp` therefore replaces "CORRECT!" with
 *     "you have already stamped this" before the child has read either.
 *  4. **Answer order is seeded, not random.** Index 0 is correct in the data, so
 *     `shuffleAnswers` is seeded by `place.id`: the order survives a re-render and a
 *     language switch, because an answer that jumps while a child is reading it is a
 *     bug.
 *
 * Content strings are read with `say()`. Chrome strings live in the local `T` below and
 * are read with `ui()`; each sentence is written whole in every language, because the
 * six disagree about word order and a concatenated sentence is wrong in most of them.
 */

import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, X, Sparkles, DoorOpen, MapPin, Stamp, Info } from 'lucide-react';
import type { LocText, Place, PlaceId, WorldLang } from '../../data/world/types';
import type { PlaceStamp } from './useWorldProgress';
import StoryNarration from './StoryNarration';
import { PinReport } from './PinReport';
import { WorldMap } from './WorldMap';
import { distanceM, formatDistance, geoPermissionState, isWithin, locateOnce, walkMinutes, type GeoError } from '../../utils/geo';
import { afterReloadNote, blockedNote, consumeRetryReload, deniedKind, reloadForRetry, retryNeedsReload } from './geoNotes';
import { Breadcrumb } from './Breadcrumb';

/** The lines for «the phone will not ask» — the same words the country page's card uses. */
function BlockedLines({ lang }: { lang: WorldLang }) {
  const blocked = blockedNote(lang);
  return (
    <>
      {blocked.note}
      <span className="mt-1.5 block text-[13px] leading-relaxed text-amber-200/80">
        <Breadcrumb text={blocked.path} />
      </span>
      {blocked.more && (
        <span className="mt-1 block text-[13px] leading-relaxed text-amber-200/80">
          <Breadcrumb text={blocked.more} />
        </span>
      )}
    </>
  );
}
import {
  CATEGORY_LABEL,
  CATEGORY_STYLE,
  WORLD_STYLE,
  say,
  shuffleAnswers,
  ui,
} from './worldUi';

export interface PlaceCardProps {
  lang: WorldLang;
  place: Place;
  /** The city's name, so a maps search can say «Acropolis Museum, Athens» and land on the right pin. */
  cityName?: LocText;
  /** From `useWorldProgress`. Present means this place is already visited and paid. */
  stamp?: PlaceStamp;
  onComplete: (correct: boolean) => void;
  /** Present only when `place.museum` exists. */
  onEnterMuseum?: () => void;
  onBack: () => void;
}

/**
 * Links that open the place in the phone's own maps app, on the pin those apps
 * themselves hold for it. Google is asked by name and city, which is how a person
 * types it and what returns Google's own place page rather than a bare coordinate;
 * Apple takes the name plus our coordinate to search near. Neither URL carries a
 * child's position — there is none to carry.
 */
export function mapsLinksFor(place: Place, cityName?: LocText): { google: string; apple: string } {
  const label = cityName ? `${place.name.en}, ${cityName.en}` : place.name.en;
  const { lat, lng } = place.location;
  return {
    google: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(label)}`,
    apple: `https://maps.apple.com/?q=${encodeURIComponent(place.name.en)}&ll=${lat.toFixed(6)},${lng.toFixed(6)}&z=16`,
  };
}

// ------------------------------------------------------------------- chrome

/**
 * All six World languages, because this screen is the one the child reads: a German
 * story under an English heading, with an English button under it, reads as broken
 * rather than as unfinished.
 *
 * Two things to keep when editing. The uppercase headings are styled `uppercase` by
 * `WORLD_STYLE.label`, so the capitals here are only there to match the Greek and the
 * English that were written that way. And a sentence taking an argument is written
 * whole, once per language — `collectedOn` puts the date in a different place, and
 * behind a different preposition, in every one of the six.
 */
const T = {
  back: {
    el: 'Πίσω στην πόλη',
    en: 'Back to the city',
    de: 'Zurück zur Stadt',
    fr: 'Retour à la ville',
    es: 'Volver a la ciudad',
    it: 'Torna alla città',
  },
  story: {
    el: 'Η ΙΣΤΟΡΙΑ',
    en: 'THE STORY',
    de: 'DIE GESCHICHTE',
    fr: 'L’HISTOIRE',
    es: 'LA HISTORIA',
    it: 'LA STORIA',
  },
  facts: {
    el: 'ΚΑΛΟ ΝΑ ΞΕΡΕΙΣ',
    en: 'GOOD TO KNOW',
    de: 'GUT ZU WISSEN',
    fr: 'BON À SAVOIR',
    es: 'BUENO SABERLO',
    it: 'BUONO A SAPERSI',
  },
  photo: {
    el: 'ΦΩΤΟΓΡΑΦΙΑ',
    en: 'PHOTO',
    de: 'FOTO',
    fr: 'PHOTO',
    es: 'FOTO',
    it: 'FOTO',
  },
  question: {
    el: 'Η ΕΡΩΤΗΣΗ ΤΗΣ ΣΦΡΑΓΙΔΑΣ',
    en: 'THE STAMP QUESTION',
    de: 'DIE STEMPELFRAGE',
    fr: 'LA QUESTION DU TAMPON',
    es: 'LA PREGUNTA DEL SELLO',
    it: 'LA DOMANDA DEL TIMBRO',
  },
  questionHint: {
    el: 'Διάλεξε μία απάντηση. Έχεις μία ευκαιρία, οπότε σκέψου το λίγο.',
    en: 'Pick one answer. You get one go, so give it a thought.',
    de: 'Wähl eine Antwort. Du hast nur einen Versuch, also denk kurz nach.',
    fr: 'Choisis une réponse. Tu n’as qu’un seul essai, alors réfléchis bien.',
    es: 'Elige una respuesta. Solo tienes un intento, así que piénsalo bien.',
    it: 'Scegli una risposta. Hai un solo tentativo, quindi pensaci bene.',
  },
  correctTitle: {
    el: 'ΣΩΣΤΑ!',
    en: 'CORRECT!',
    de: 'RICHTIG!',
    fr: 'BRAVO !',
    es: '¡CORRECTO!',
    it: 'GIUSTO!',
  },
  correctBody: {
    el: 'Το βρήκες. Η σφραγίδα αυτού του μέρους είναι δική σου.',
    en: 'You got it. The stamp for this place is yours.',
    de: 'Du hast es gewusst. Der Stempel für diesen Ort gehört dir.',
    fr: 'Tu as trouvé. Le tampon de ce lieu est à toi.',
    es: 'Lo has acertado. El sello de este lugar es tuyo.',
    it: 'L’hai indovinata. Il timbro di questo posto è tuo.',
  },
  wrongTitle: {
    el: 'ΔΕΝ ΠΕΙΡΑΖΕΙ',
    en: 'NOT QUITE',
    de: 'NICHT GANZ',
    fr: 'PRESQUE',
    es: 'CASI',
    it: 'QUASI',
  },
  wrongBody: {
    el: 'Η σωστή απάντηση είναι σημειωμένη με πράσινο. Τη σφραγίδα την πήρες κι έτσι, γιατί διάβασες την ιστορία μέχρι το τέλος.',
    en: 'The right answer is marked in green. You got the stamp anyway, because you read the story to the end.',
    de: 'Die richtige Antwort ist grün markiert. Den Stempel bekommst du trotzdem, weil du die Geschichte bis zum Ende gelesen hast.',
    fr: 'La bonne réponse est en vert. Tu gagnes le tampon quand même, parce que tu as lu l’histoire jusqu’au bout.',
    es: 'La respuesta correcta está marcada en verde. El sello es tuyo igualmente, porque has leído la historia hasta el final.',
    it: 'La risposta giusta è segnata in verde. Il timbro è tuo lo stesso, perché hai letto la storia fino alla fine.',
  },
  why: {
    el: 'ΓΙΑΤΙ',
    en: 'WHY',
    de: 'WARUM',
    fr: 'POURQUOI',
    es: 'POR QUÉ',
    it: 'PERCHÉ',
  },
  collected: {
    el: 'ΣΦΡΑΓΙΣΜΕΝΟ',
    en: 'COLLECTED',
    de: 'GESTEMPELT',
    fr: 'TAMPONNÉ',
    es: 'SELLADO',
    it: 'TIMBRATO',
  },
  collectedOn: {
    el: (date: string) => `Σφράγισες αυτό το μέρος στις ${date}.`,
    en: (date: string) => `You stamped this place on ${date}.`,
    de: (date: string) => `Du hast diesen Ort am ${date} gestempelt.`,
    fr: (date: string) => `Tu as tamponné ce lieu le ${date}.`,
    es: (date: string) => `Sellaste este lugar el ${date}.`,
    /* `il giorno`, not a bare `il`: the date arrives already formatted, and every
       Italian day that starts with 1 or 8 would want `l'` instead. */
    it: (date: string) => `Hai timbrato questo posto il giorno ${date}.`,
  },
  collectedNoDate: {
    el: 'Έχεις ήδη σφραγίσει αυτό το μέρος.',
    en: 'You have already stamped this place.',
    de: 'Du hast diesen Ort schon gestempelt.',
    fr: 'Tu as déjà tamponné ce lieu.',
    es: 'Ya has sellado este lugar.',
    it: 'Hai già timbrato questo posto.',
  },
  paysNothingAgain: {
    el: 'Δεν δίνει ξανά πόντους, αλλά η ιστορία σε περιμένει όποτε θες να την ξαναδιαβάσεις.',
    en: 'It does not pay again, but the story is here whenever you want to read it once more.',
    de: 'Punkte gibt es kein zweites Mal, aber die Geschichte bleibt hier, wann immer du sie noch einmal lesen willst.',
    fr: 'Il ne rapporte plus de points, mais l’histoire reste là dès que tu veux la relire.',
    es: 'Ya no da puntos, pero la historia sigue aquí siempre que quieras volver a leerla.',
    it: 'Non dà più punti, ma la storia resta qui ogni volta che vuoi rileggerla.',
  },
  answeredRight: {
    el: 'Την είχες βρει σωστά.',
    en: 'You answered it correctly.',
    de: 'Du hattest richtig geantwortet.',
    fr: 'Tu avais trouvé la bonne réponse.',
    es: 'Acertaste la respuesta.',
    it: 'Avevi risposto giusto.',
  },
  answeredWrong: {
    el: 'Τότε δεν την είχες βρει. Τώρα την ξέρεις.',
    en: 'You did not get it that time. Now you know it.',
    de: 'Damals hast du sie nicht gewusst. Jetzt weißt du sie.',
    fr: 'Ce jour-là, tu n’avais pas trouvé. Maintenant tu sais.',
    es: 'Aquella vez no acertaste. Ahora ya lo sabes.',
    it: 'Quella volta non l’avevi indovinata. Ora la sai.',
  },
  rightAnswer: {
    el: 'ΜΕ ΠΡΑΣΙΝΟ Η ΣΩΣΤΗ ΑΠΑΝΤΗΣΗ',
    en: 'GREEN MARKS THE RIGHT ANSWER',
    de: 'GRÜN IST DIE RICHTIGE ANTWORT',
    fr: 'EN VERT, LA BONNE RÉPONSE',
    es: 'EN VERDE, LA RESPUESTA CORRECTA',
    it: 'IN VERDE LA RISPOSTA GIUSTA',
  },
  imHere: {
    el: 'ΕΙΜΑΙ ΕΔΩ!',
    en: 'I’M HERE!',
    de: 'ICH BIN DA!',
    fr: 'JE SUIS LÀ !',
    es: '¡ESTOY AQUÍ!',
    it: 'SONO QUI!',
  },
  locating: {
    el: 'Ψάχνω πού είσαι…',
    en: 'Finding where you are…',
    de: 'Ich suche, wo du bist…',
    fr: 'Je cherche où tu es…',
    es: 'Buscando dónde estás…',
    it: 'Cerco dove sei…',
  },
  hereOk: {
    el: 'Είσαι εδώ! Η ερώτηση και η σφραγίδα άνοιξαν.',
    en: 'You are here! The question and the stamp are open.',
    de: 'Du bist da! Frage und Stempel sind frei.',
    fr: 'Tu y es ! La question et le tampon sont débloqués.',
    es: '¡Estás aquí! La pregunta y el sello están abiertos.',
    it: 'Sei qui! Domanda e timbro sono sbloccati.',
  },
  tooFar: {
    el: (d: string, min: number): string => `Είσαι ${d} μακριά, περίπου ${min} λεπτά με τα πόδια. Περπάτα προς το σημείο και ξαναπάτα.`,
    en: (d: string, min: number): string => `You are ${d} away, about ${min} minutes on foot. Walk towards it and tap again.`,
    de: (d: string, min: number): string => `Du bist ${d} entfernt, etwa ${min} Minuten zu Fuß. Geh hin und tippe noch einmal.`,
    fr: (d: string, min: number): string => `Tu es à ${d}, environ ${min} minutes à pied. Approche-toi et appuie encore.`,
    es: (d: string, min: number): string => `Estás a ${d}, unos ${min} minutos a pie. Camina hacia allí y vuelve a pulsar.`,
    it: (d: string, min: number): string => `Sei a ${d}, circa ${min} minuti a piedi. Avvicinati e tocca di nuovo.`,
  },
  geoDenied: {
    el: 'Χωρίς άδεια τοποθεσίας η σφραγίδα δεν μπορεί να μπει. Δώσε άδεια στο τηλέφωνο και ξαναπάτα.',
    en: 'Without location permission the stamp cannot be earned. Allow location on your phone and tap again.',
    de: 'Ohne Standortfreigabe gibt es keinen Stempel. Erlaube den Standort und tippe noch einmal.',
    fr: 'Sans l’autorisation de position, pas de tampon. Autorise la position et appuie encore.',
    es: 'Sin permiso de ubicación no se puede poner el sello. Permite la ubicación y vuelve a pulsar.',
    it: 'Senza il permesso di posizione il timbro non si può mettere. Consenti la posizione e tocca di nuovo.',
  },
  geoUnavailable: {
    el: 'Δεν βρέθηκε η θέση σου. Δοκίμασε έξω, με ανοιχτό τον ουρανό, ή λίγο αργότερα.',
    en: 'Your position could not be found. Try outdoors, under open sky, or a little later.',
    de: 'Dein Standort wurde nicht gefunden. Versuch es draußen unter freiem Himmel oder etwas später.',
    fr: 'Ta position n’a pas été trouvée. Essaie dehors, à ciel ouvert, ou un peu plus tard.',
    es: 'No se encontró tu posición. Prueba al aire libre, a cielo abierto, o un poco más tarde.',
    it: 'La tua posizione non è stata trovata. Prova all’aperto, sotto il cielo, o un po’ più tardi.',
  },
  stampOnSite: {
    el: 'Η σφραγίδα μπαίνει μόνο όταν είσαι εκεί. Διάβασε την ιστορία, περπάτα ως το σημείο και πάτα «Είμαι εδώ!».',
    en: 'The stamp is earned only on the spot. Read the story, walk to the place and tap “I’m here!”.',
    de: 'Den Stempel gibt es nur vor Ort. Lies die Geschichte, geh hin und tippe auf „Ich bin da!“.',
    fr: 'Le tampon ne s’obtient que sur place. Lis l’histoire, va jusqu’au lieu et appuie sur « Je suis là ! ».',
    es: 'El sello solo se consigue en el lugar. Lee la historia, camina hasta allí y pulsa «¡Estoy aquí!».',
    it: 'Il timbro si ottiene solo sul posto. Leggi la storia, cammina fin lì e tocca «Sono qui!».',
  },
  howToGet: {
    el: 'ΠΩΣ ΘΑ ΠΑΩ',
    en: 'HOW TO GET THERE',
    de: 'SO KOMMST DU HIN',
    fr: 'COMMENT Y ALLER',
    es: 'CÓMO LLEGAR',
    it: 'COME ARRIVARE',
  },
  opensMaps: {
    el: 'Ανοίγει τον χάρτη του τηλεφώνου σου, με το σημείο ήδη πάνω του.',
    en: 'Opens your phone’s own map, with the pin already on it.',
    de: 'Öffnet die Karte deines Handys, mit dem Ort schon markiert.',
    fr: 'Ouvre la carte de ton téléphone, avec le lieu déjà marqué.',
    es: 'Abre el mapa de tu móvil, con el lugar ya marcado.',
    it: 'Apre la mappa del telefono, con il posto già segnato.',
  },
  museumTitle: {
    el: 'Η πόρτα είναι ανοιχτή',
    en: 'The door is open',
    de: 'Die Tür ist offen',
    fr: 'La porte est ouverte',
    es: 'La puerta está abierta',
    it: 'La porta è aperta',
  },
  museumBody: {
    el: 'Μέσα σε περιμένουν αίθουσες, εκθέματα και γρίφοι.',
    en: 'Rooms, exhibits and riddles are waiting inside.',
    de: 'Drinnen warten Säle, Ausstellungsstücke und Rätsel auf dich.',
    fr: 'Des salles, des objets et des énigmes t’attendent à l’intérieur.',
    es: 'Dentro te esperan salas, objetos y enigmas.',
    it: 'Dentro ti aspettano sale, oggetti e indovinelli.',
  },
  museumCta: {
    el: 'ΜΠΕΣ ΜΕΣΑ',
    en: 'GO INSIDE',
    de: 'GEH HINEIN',
    fr: 'ENTRE',
    es: 'ENTRA',
    it: 'ENTRA',
  },
};

// -------------------------------------------------------------------- helpers

/**
 * A stamp's date, in the child's language. Falls back to the raw ISO string.
 *
 * `PlaceStamp.at` is date-only (`'2026-09-11'`), which `new Date` reads as UTC midnight.
 * Printed in any timezone behind UTC that is the day before, so the parts are read out
 * and a local date is built from them rather than trusting the parse.
 */
function formatStampDate(iso: string, lang: WorldLang): string | null {
  if (!iso) return null;
  try {
    const parts = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
    const date = parts
      ? new Date(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3]))
      : new Date(iso);
    if (Number.isNaN(date.getTime())) return iso;
    return date.toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return iso;
  }
}

const FALLBACK_CATEGORY_STYLE = 'bg-white/10 text-white/70 border-white/20';

// ------------------------------------------------------------------ component

const PlaceCard: React.FC<PlaceCardProps> = ({
  lang,
  place,
  cityName,
  stamp,
  onComplete,
  onEnterMuseum,
  onBack,
}) => {
  /**
   * Content is written by a different session against these types, with `strict` off.
   * A place that arrives without a question must leave the story readable rather than
   * throw during render, so the question is read defensively and its section is simply
   * not drawn when it is not there.
   */
  const question = place.question;
  const answers = question?.answers;

  /**
   * Seeded by the place's own id, so the four options keep their order across every
   * re-render and across a language switch. `lang` is deliberately not a dependency.
   */
  const shuffled = useMemo(() => shuffleAnswers(answers ?? [], place.id), [place.id, answers]);

  /**
   * The answer the child gave in this session, tagged with the place it belongs to, so
   * that a reused component instance showing a different place starts clean without an
   * effect resetting state after paint.
   */
  const [answer, setAnswer] = useState<{ placeId: PlaceId; index: number } | null>(null);
  const [failedImage, setFailedImage] = useState<string | null>(null);

  /**
   * The stamp is earned on the pavement, not on the sofa. «Είμαι εδώ!» asks the phone
   * where it is — the browser shows its own permission prompt every time it must — and
   * the question, and with it the stamp, opens only within reach of the place. A place
   * already stamped stays open: the walk was done once.
   *
   * The fix never leaves the device: it is compared with our coordinate and dropped.
   */
  // `ready` is the note after a retry reload: «Ready! Tap once more.» The card is keyed
  // by place in PlacePage, so this initialiser runs once per place.
  const [geo, setGeo] = useState<'idle' | 'ready' | 'checking' | 'here' | 'far' | 'error'>(() =>
    consumeRetryReload(place.id) ? 'ready' : 'idle',
  );
  const [geoError, setGeoError] = useState<GeoError | null>(null);
  /** A «denied» that came with no prompt: the site is blocked and a setting must change. */
  const [geoBlocked, setGeoBlocked] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);
  const radiusM = place.location.anchor === 'area' ? 120 : 60;
  const onSite = Boolean(stamp) || geo === 'here';

  const locate = async () => {
    // WebKit answers every request after a denial from memory until the page reloads,
    // so a tap after a «no» reloads first; the tap after that is the one that asks.
    if (geoError === 'denied' && retryNeedsReload()) return reloadForRetry(place.id);
    setGeo('checking');
    setGeoError(null);
    setGeoBlocked(false);
    // The permission state is read before asking and the clock runs from the tap: see
    // geoNotes.ts for why neither alone can tell a refused sheet from a remembered «no».
    const stateBefore = await geoPermissionState();
    const started = performance.now();
    const fix = await locateOnce();
    if (typeof fix === 'string') {
      // Decide the sentence before showing anything, so the note never flips from
      // «tap again» to «change a setting» in front of the child.
      const blocked = fix === 'denied' && deniedKind(performance.now() - started, stateBefore) === 'blocked';
      setGeoBlocked(blocked);
      setGeo('error');
      setGeoError(fix);
      return;
    }
    const m = distanceM(fix, place.location);
    setDistance(m);
    setGeo(isWithin(fix, fix.accuracyM, place.location, radiusM) ? 'here' : 'far');
  };

  /**
   * The authority for "has this place already paid out from this screen?". A ref, read
   * and written synchronously inside the click handler, so neither a double click nor a
   * StrictMode double-invoke can call `onComplete` twice.
   */
  const firedRef = useRef<Set<PlaceId>>(new Set<PlaceId>());

  const alreadyStamped = Boolean(stamp);
  const picked = answer && answer.placeId === place.id ? answer.index : null;
  /**
   * The answer given on this screen, right now. It OUTRANKS `alreadyStamped` in the
   * result panel: `onComplete` makes the stamp land during the same commit, so by the
   * next render `stamp` is present, and branching on `alreadyStamped` would swap the
   * child's "CORRECT!" for "you have already stamped this, it does not pay again"
   * before they had read a word of it.
   */
  const justAnswered = picked !== null;
  const revealed = alreadyStamped || justAnswered;
  const gotItRight = justAnswered && picked === shuffled.correctIndex;
  const hasQuestion = Boolean(question) && shuffled.items.length > 0;

  /** The one and only place `onComplete` is called from: a user gesture. */
  const choose = (index: number): void => {
    if (alreadyStamped) return;
    if (picked !== null) return;
    if (firedRef.current.has(place.id)) return;
    firedRef.current.add(place.id);
    setAnswer({ placeId: place.id, index });
    onComplete(index === shuffled.correctIndex);
  };

  const categoryStyle = CATEGORY_STYLE[place.category] ?? FALLBACK_CATEGORY_STYLE;
  const categoryLabel = CATEGORY_LABEL[place.category];
  const image = place.image && failedImage !== place.image.src ? place.image : undefined;
  /** Tied to the image that actually renders: nothing shown, nothing to credit. */
  const credit = image?.credit;
  const facts = place.facts ?? [];
  const doorNote = place.museum?.doorNote;
  /** Always something to look at, even when a place ships without its one emoji. */
  const emoji = place.emoji || '📍';
  const stampedOn = stamp?.at ? formatStampDate(stamp.at, lang) : null;
  const headingId = `world-place-${place.id}`;
  const questionId = `world-question-${place.id}`;

  return (
    <div className="pb-32">
      {/* ── BACK BAR — always visible, never scrolls away ── */}
      <div className="sticky top-0 z-20 bg-black/70 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            aria-label={ui(T.back, lang)}
            className="w-11 h-11 shrink-0 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center hover:bg-white/[0.1] active:scale-95 transition-all"
          >
            <ArrowLeft size={20} className="text-white/80" aria-hidden />
          </button>
          <span className="min-w-0 flex-1 truncate text-sm font-black text-white/70 uppercase tracking-wider">
            {say(place.name, lang)}
          </span>
          {alreadyStamped && (
            <span
              className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-black text-emerald-300 uppercase tracking-widest ${WORLD_STYLE.earned}`}
            >
              <Stamp size={12} aria-hidden />
              {ui(T.collected, lang)}
            </span>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-5">
        {/* ── HEADER ── */}
        <motion.section
          aria-labelledby={headingId}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent"
        >
          {image ? (
            <div className="relative w-full aspect-[16/10] bg-white/[0.03]">
              <img
                src={image.src}
                /* An image with no `alt` is a content bug, not a reason to crash `say`.
                   Empty alt marks it decorative, which is the honest thing to say when
                   we have no description for it. */
                alt={image.alt ? say(image.alt, lang) : ''}
                loading="lazy"
                onError={() => setFailedImage(image.src)}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-3 left-3 w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl"
                aria-hidden
              >
                {emoji}
              </div>
            </div>
          ) : (
            <div className="w-full h-40 flex items-center justify-center text-7xl" aria-hidden>
              {emoji}
            </div>
          )}

          <div className="p-5">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest ${categoryStyle}`}
            >
              {categoryLabel ? ui(categoryLabel, lang) : place.category}
            </span>
            <h1
              id={headingId}
              className="mt-3 text-3xl md:text-4xl font-[1000] italic tracking-tighter leading-none text-white"
            >
              {say(place.name, lang)}
            </h1>
            <p className="mt-2 text-white/50 font-bold italic">{say(place.tagline, lang)}</p>
          </div>
        </motion.section>

        {/* ── PHOTO CREDIT — a licence obligation, rendered where it can be read ── */}
        {credit && (
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-bold text-white/40">
            <span className={WORLD_STYLE.label}>{ui(T.photo, lang)}</span>
            <span>{credit.text}</span>
            <span aria-hidden>·</span>
            {credit.url ? (
              <a
                href={credit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/20 underline-offset-2 hover:text-white/70 transition-colors"
              >
                {credit.license}
              </a>
            ) : (
              <span>{credit.license}</span>
            )}
          </p>
        )}

        {/* ── STORY ──
            Read aloud in the app's one voice when narration exists for this place and
            language, with the words following the voice; plain text when it does not.
            StoryNarration decides which, so this screen never has to know. */}
        <section className="mt-8">
          <h2 className={`${WORLD_STYLE.label} mb-3`}>{ui(T.story, lang)}</h2>
          <StoryNarration
            id={place.id}
            lang={lang}
            text={say(place.story, lang)}
            className="text-[17px] md:text-lg"
          />
        </section>

        {/* ── FACTS ── */}
        {facts.length > 0 && (
          <section className="mt-8">
            <h2 className={`${WORLD_STYLE.label} mb-3`}>{ui(T.facts, lang)}</h2>
            <div className="flex flex-wrap gap-2">
              {facts.map((fact, i) => (
                <span key={i} className={WORLD_STYLE.chip}>
                  <Sparkles size={12} className="text-white/30 shrink-0" aria-hidden />
                  {say(fact, lang)}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ── FINDING THE DOOR ──
            A landmark, not a coordinate. The Panathenaic Stadium's own site gives its
            address as "opposite the statue of the Discobolus", and that is the form a
            child can actually use: they do not read latitude, they look around for a
            man throwing a discus. Absent on most places, and silent when absent. */}
        {place.location.findIt && (
          <section className="mt-8">
            <p className={`${WORLD_STYLE.chip} !rounded-2xl !py-2.5 items-start text-left`}>
              <MapPin size={14} className="text-white/40 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{say(place.location.findIt, lang)}</span>
            </p>
          </section>
        )}

        {/* ── HOW TO GET THERE ──
            The real map with the one pin, and the two buttons a parent actually taps:
            Google Maps and Apple Maps open the place on their own pin, in the app the
            phone already navigates with. No position of the child is involved. */}
        <section className="mt-8" aria-labelledby={`${headingId}-directions`}>
          <h2
            id={`${headingId}-directions`}
            className="flex items-center gap-2 text-xs font-black text-white/50 uppercase tracking-[0.25em] mb-3"
          >
            <MapPin size={14} aria-hidden="true" />
            {ui(T.howToGet, lang)}
          </h2>

          {/* The gate. Already stamped: nothing to prove. Otherwise the one button that
              asks the phone where it is, and an honest sentence about what it found. */}
          {!stamp && (
            <div className="mb-3 rounded-2xl border border-amber-500/30 bg-amber-500/[0.08] p-4">
              <button
                type="button"
                onClick={locate}
                disabled={geo === 'checking' || geo === 'here'}
                className={`inline-flex w-full min-h-[52px] items-center justify-center gap-2 ${WORLD_STYLE.cta} disabled:opacity-70`}
              >
                <MapPin size={18} aria-hidden />
                {geo === 'checking' ? ui(T.locating, lang) : geo === 'here' ? ui(T.hereOk, lang) : ui(T.imHere, lang)}
              </button>
              <p className="mt-2 text-sm font-bold text-white/60" aria-live="polite">
                {geo === 'idle' && ui(T.stampOnSite, lang)}
                {geo === 'ready' && afterReloadNote(lang)}
                {geo === 'far' &&
                  distance !== null &&
                  ui(T.tooFar, lang)(formatDistance(distance, lang === 'el' ? 'el' : 'en'), walkMinutes(distance))}
                {geo === 'error' && geoError === 'denied' && !geoBlocked && ui(T.geoDenied, lang)}
                {geo === 'error' && geoError === 'denied' && geoBlocked && <BlockedLines lang={lang} />}
                {geo === 'error' && geoError !== 'denied' && ui(T.geoUnavailable, lang)}
              </p>
            </div>
          )}

          <WorldMap
            lang={lang}
            centre={{ lat: place.location.lat, lng: place.location.lng }}
            zoom={16}
            pins={[
              {
                id: place.id,
                name: place.name,
                emoji: place.emoji,
                lat: place.location.lat,
                lng: place.location.lng,
                stamped: Boolean(stamp),
              },
            ]}
            className="h-[48vw] max-h-[300px] min-h-[200px]"
          />
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href={mapsLinksFor(place, cityName).google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-white transition-colors hover:bg-white/[0.12]"
            >
              <span aria-hidden="true">🗺️</span> Google Maps
            </a>
            <a
              href={mapsLinksFor(place, cityName).apple}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-white transition-colors hover:bg-white/[0.12]"
            >
              <span aria-hidden="true"></span> Apple Maps
            </a>
          </div>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-white/40">{ui(T.opensMaps, lang)}</p>
          {/* The grown-up's line. Everything it needs lives in PinReport.tsx, so this
              file gains one element and no new prop, string or state. */}
          <PinReport lang={lang} placeId={place.id} />
        </section>

        {/* ── THE DOOR — for a museum, going inside is the point of the place ── */}
        {onEnterMuseum && (
          <section className="mt-8">
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/[0.08] p-5 text-center">
              <div className="text-4xl" aria-hidden>
                🚪
              </div>
              <h2 className="mt-2 text-white font-black uppercase tracking-wider text-sm">
                {ui(T.museumTitle, lang)}
              </h2>
              <p className="mt-1 text-white/60 text-sm font-bold">
                {doorNote ? say(doorNote, lang) : ui(T.museumBody, lang)}
              </p>
              <button
                type="button"
                onClick={onEnterMuseum}
                className={`mt-4 inline-flex items-center justify-center gap-2 min-h-[48px] ${WORLD_STYLE.cta}`}
              >
                <DoorOpen size={18} aria-hidden />
                {ui(T.museumCta, lang)}
              </button>
            </div>
          </section>
        )}

        {/* ── THE QUESTION — opens on the spot, or once the stamp is already there ── */}
        {hasQuestion && !onSite && (
          <section className="mt-8" aria-labelledby={questionId}>
            <h2 id={questionId} className={`${WORLD_STYLE.label} mb-3`}>
              {ui(T.question, lang)}
            </h2>
            <div className={`${WORLD_STYLE.card} p-5 text-center`}>
              <div className="text-3xl" aria-hidden>🔒</div>
              <p className="mt-2 text-sm font-bold text-white/60">{ui(T.stampOnSite, lang)}</p>
            </div>
          </section>
        )}
        {hasQuestion && onSite && (
          <section className="mt-8" aria-labelledby={questionId}>
            <h2 id={questionId} className={`${WORLD_STYLE.label} mb-3`}>
              {ui(T.question, lang)}
            </h2>

            <div className={`${WORLD_STYLE.card} p-5`}>
              <p className="text-white font-black text-lg leading-snug">{say(question.q, lang)}</p>

              {!revealed && (
                <p className="mt-2 text-white/40 text-sm font-bold">{ui(T.questionHint, lang)}</p>
              )}

              <div className="mt-4 flex flex-col gap-2.5">
                {shuffled.items.map((option, i) => {
                  const isCorrect = i === shuffled.correctIndex;
                  const isPicked = picked === i;

                  let optionStyle =
                    'border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20';
                  if (revealed) {
                    if (isCorrect) {
                      optionStyle = 'border-emerald-400/50 bg-emerald-400/[0.12]';
                    } else if (isPicked) {
                      optionStyle = 'border-rose-400/50 bg-rose-400/[0.12]';
                    } else {
                      optionStyle = 'border-white/[0.06] bg-white/[0.02]';
                    }
                  }

                  return (
                    <button
                      key={i}
                      type="button"
                      /* `aria-disabled` rather than `disabled`: a disabled button drops
                         out of the tab order and throws focus to <body> at the exact
                         moment the result appears, so a keyboard or screen-reader child
                         loses their place and misses the answer. `choose` already refuses
                         a second call, so leaving it focusable is safe. */
                      aria-disabled={revealed}
                      onClick={() => choose(i)}
                      className={`w-full min-h-[56px] flex items-center gap-3 text-left rounded-2xl border px-4 py-3 transition-all ${
                        revealed ? 'cursor-default' : 'active:scale-[0.99]'
                      } ${optionStyle}`}
                    >
                      <span className="w-8 h-8 shrink-0 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-xs font-black text-white/60">
                        {i + 1}
                      </span>
                      <span className="flex-1 text-[15px] font-bold text-white/90 leading-snug">
                        {say(option, lang)}
                      </span>
                      {revealed && isCorrect && (
                        <Check size={20} className="shrink-0 text-emerald-300" aria-hidden />
                      )}
                      {revealed && isPicked && !isCorrect && (
                        <X size={20} className="shrink-0 text-rose-300" aria-hidden />
                      )}
                    </button>
                  );
                })}
              </div>

              {revealed && (
                <p className={`${WORLD_STYLE.label} mt-3`}>{ui(T.rightAnswer, lang)}</p>
              )}
            </div>

            {/* ── THE RESULT ──
                The live region is the wrapper and is always in the DOM, so the panel
                arriving inside it is a mutation a screen reader announces; a region
                that mounts with its text already in it often is not read at all. */}
            <div role="status" aria-live="polite">
              <AnimatePresence initial={false}>
                {revealed && (
                  <motion.div
                    key={justAnswered ? 'answered' : 'collected'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 rounded-2xl border p-5 ${
                      !justAnswered || gotItRight
                        ? WORLD_STYLE.earned
                        : 'border-amber-400/40 bg-amber-400/[0.08]'
                    }`}
                  >
                    {justAnswered ? (
                      <>
                        <h3 className="flex items-center gap-2 text-white font-black uppercase tracking-wider text-sm">
                          {gotItRight ? (
                            <Check size={16} className="text-emerald-300" aria-hidden />
                          ) : (
                            <Info size={16} className="text-amber-300" aria-hidden />
                          )}
                          {gotItRight ? ui(T.correctTitle, lang) : ui(T.wrongTitle, lang)}
                        </h3>
                        <p className="mt-2 text-white/70 text-sm font-bold leading-relaxed">
                          {gotItRight ? ui(T.correctBody, lang) : ui(T.wrongBody, lang)}
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="flex items-center gap-2 text-white font-black uppercase tracking-wider text-sm">
                          <Stamp size={16} className="text-emerald-300" aria-hidden />
                          {ui(T.collected, lang)}
                        </h3>
                        <p className="mt-2 text-white/70 text-sm font-bold leading-relaxed">
                          {stampedOn
                            ? ui(T.collectedOn, lang)(stampedOn)
                            : ui(T.collectedNoDate, lang)}
                        </p>
                        <p className="mt-1 text-white/70 text-sm font-bold leading-relaxed">
                          {stamp?.correct ? ui(T.answeredRight, lang) : ui(T.answeredWrong, lang)}
                        </p>
                        <p className="mt-2 text-white/45 text-sm font-bold leading-relaxed">
                          {ui(T.paysNothingAgain, lang)}
                        </p>
                      </>
                    )}

                    {question.explanation && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className={`${WORLD_STYLE.label} mb-1.5`}>{ui(T.why, lang)}</p>
                        <p className={`${WORLD_STYLE.body} text-[15px]`}>
                          {say(question.explanation, lang)}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* ── BACK, again, at the end of a long read ── */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onBack}
            className={`inline-flex items-center gap-2 min-h-[44px] ${WORLD_STYLE.ghost}`}
          >
            <ArrowLeft size={16} aria-hidden />
            {ui(T.back, lang)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
