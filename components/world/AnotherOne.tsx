/**
 * «Άλλη μία;»
 *
 * The card that comes up the moment a place is finished. Two answers, and the child has
 * already been paid before it appears: the stamp and the XP land inside
 * `useWorldProgress.visitPlace`, and this only decides where the child goes next.
 *
 * That ordering is the whole point. A card that sat between a finished mission and its
 * reward would be a card the child has to get past to be paid, and «Αρκετά για σήμερα»
 * would quietly cost them the stamp they just earned. The brief is explicit that both
 * answers pay the same, so the safest way to build it is for neither answer to be able to
 * pay anything at all.
 *
 * «Αρκετά για σήμερα» means it. It writes today's date to its own small key and the card
 * stays away for the rest of the day — a child who said enough should not be asked again
 * four stops later. That key is deliberately NOT a field on `wb_world_progress`: adding
 * one there means bumping `WORLD_PROGRESS_VERSION`, and a bump empties every passport on
 * every device.
 *
 * What it never does is nag. There is no third button, no timer, no «are you sure», and
 * the card closes on Escape and on a tap outside it.
 */

import React, { useCallback, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { WorldLang } from '../../data/world/types';
import { WORLD_STYLE, ui } from './worldUi';
import { today } from './worldProgressStore';

/** Its own key, so the passport's version never has to move for it. */
const ENOUGH_KEY = 'wb_world_enough_for_today';

/** Has the child already said they have had enough today? */
export function saidEnoughToday(): boolean {
  try {
    return localStorage.getItem(ENOUGH_KEY) === today();
  } catch {
    return false;
  }
}

function rememberEnoughForToday(): void {
  try {
    localStorage.setItem(ENOUGH_KEY, today());
  } catch {
    /* full, or blocked in a private window — the card simply asks again */
  }
}

const CHROME = {
  title: {
    el: 'Άλλη μία;',
    en: 'Another one?',
    de: 'Noch eine?',
    fr: 'Encore une ?',
    es: '¿Otra más?',
    it: 'Un’altra?',
  },
  /** Said once the child has finished everything in this city. */
  titleCityDone: {
    el: 'Τελείωσες την πόλη!',
    en: 'You finished the city!',
    de: 'Du hast die Stadt geschafft!',
    fr: 'Tu as fini la ville !',
    es: '¡Has terminado la ciudad!',
    it: 'Hai finito la città!',
  },
  subtitle: {
    el: (n: number) => (n === 1 ? 'Μένει ακόμα ένα σημείο εδώ.' : `Μένουν ακόμα ${n} σημεία εδώ.`),
    en: (n: number) => (n === 1 ? 'One more place to find here.' : `${n} more places to find here.`),
    de: (n: number) => (n === 1 ? 'Noch ein Ort wartet hier.' : `Noch ${n} Orte warten hier.`),
    fr: (n: number) => (n === 1 ? 'Il reste un lieu à trouver ici.' : `Il reste ${n} lieux à trouver ici.`),
    es: (n: number) => (n === 1 ? 'Queda un lugar por descubrir aquí.' : `Quedan ${n} lugares por descubrir aquí.`),
    it: (n: number) => (n === 1 ? 'Resta un altro luogo da trovare qui.' : `Restano ${n} luoghi da trovare qui.`),
  },
  subtitleCityDone: {
    el: 'Κάθε σημείο αυτής της πόλης έχει τη σφραγίδα σου.',
    en: 'Every place in this city carries your stamp.',
    de: 'Jeder Ort dieser Stadt trägt deinen Stempel.',
    fr: 'Chaque lieu de cette ville porte ton tampon.',
    es: 'Cada lugar de esta ciudad lleva tu sello.',
    it: 'Ogni luogo di questa città porta il tuo timbro.',
  },
  yes: {
    el: 'Ναι!',
    en: 'Yes!',
    de: 'Ja!',
    fr: 'Oui !',
    es: '¡Sí!',
    it: 'Sì!',
  },
  enough: {
    el: 'Αρκετά για σήμερα',
    en: 'That’s enough for today',
    de: 'Genug für heute',
    fr: 'Ça suffit pour aujourd’hui',
    es: 'Suficiente por hoy',
    it: 'Basta per oggi',
  },
  /** Says out loud that stopping costs nothing. */
  reassurance: {
    el: 'Ό,τι κέρδισες μένει δικό σου.',
    en: 'Everything you earned is yours to keep.',
    de: 'Alles, was du verdient hast, bleibt dir.',
    fr: 'Tout ce que tu as gagné reste à toi.',
    es: 'Todo lo que has ganado es tuyo.',
    it: 'Tutto ciò che hai guadagnato resta tuo.',
  },
  /** The label on the "yes" button when the city is finished and the next stop is a new city. */
  yesNewCity: {
    el: 'Πάμε αλλού!',
    en: 'Somewhere else!',
    de: 'Woanders hin!',
    fr: 'Ailleurs !',
    es: '¡A otro sitio!',
    it: 'Andiamo altrove!',
  },
} as const;

export interface AnotherOneProps {
  lang: WorldLang;
  /** How many places of this city are still unstamped. Zero means the city is finished. */
  remaining: number;
  /** Take me to the next one. */
  onYes: () => void;
  /** Enough for today — go back, and do not ask again until tomorrow. */
  onEnough: () => void;
}

export const AnotherOne: React.FC<AnotherOneProps> = ({ lang, remaining, onYes, onEnough }) => {
  const reduce = useReducedMotion();
  const cityDone = remaining <= 0;

  // The buttons are what this card is for, so the first one takes focus rather than the
  // dialog: a child using a keyboard or a switch answers with one press.
  const yesRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    yesRef.current?.focus();
  }, []);

  const enough = useCallback(() => {
    rememberEnoughForToday();
    onEnough();
  }, [onEnough]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') enough();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [enough]);

  const title = ui(cityDone ? CHROME.titleCityDone : CHROME.title, lang);
  const subtitle = cityDone
    ? ui(CHROME.subtitleCityDone, lang)
    : ui(CHROME.subtitle, lang)(remaining);

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center px-4 pb-6 sm:pb-0 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={enough}
    >
      <motion.div
        initial={reduce ? false : { y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        className={`${WORLD_STYLE.card} w-full max-w-sm p-6 text-center bg-[#0B0F1A]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl leading-none mb-3" aria-hidden="true">
          {cityDone ? '🏅' : '🧭'}
        </div>

        <h2 className={`${WORLD_STYLE.display} text-3xl mb-2`}>{title}</h2>
        <p className={`${WORLD_STYLE.body} text-sm mb-5`}>{subtitle}</p>

        <div className="flex flex-col gap-2.5">
          <button ref={yesRef} onClick={onYes} className={`${WORLD_STYLE.cta} w-full text-base`}>
            {ui(cityDone ? CHROME.yesNewCity : CHROME.yes, lang)}
          </button>
          <button onClick={enough} className={`${WORLD_STYLE.ghost} w-full`}>
            {ui(CHROME.enough, lang)}
          </button>
        </div>

        <p className={`${WORLD_STYLE.label} mt-4 normal-case tracking-normal text-white/35`}>
          {ui(CHROME.reassurance, lang)}
        </p>
      </motion.div>
    </div>
  );
};
