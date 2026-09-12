/**
 * «Συγχαρητήρια, πήρες τη σφραγίδα της πόλης.»
 *
 * The moment a city is finished, and the bigger one when the last city of a country
 * falls with it. The owner asked for exactly this in the original brief and the module
 * has been awarding both seals since the first day without ever saying so out loud:
 * `useWorldProgress.visitPlace` returned `citySealed` and `countrySealed`, and no screen
 * read them. The child earned a hundred and fifty XP and saw nothing.
 *
 * Two marks, deliberately different objects:
 *
 *  - The **entry stamp** is a border stamp, inked in the country's own language, and it
 *    lands on arrival. That is `PassportStamp`.
 *  - A **seal** is what goes on a finished document: a rosette, pressed rather than
 *    inked, carrying the name of what was completed and the date it was. That is here.
 *
 * A child who has just finished a country sees both pages: the city seal, then the
 * country seal with the country's own stamp beside it, because finishing Athens and
 * finishing Greece are not the same achievement and collapsing them into one screen
 * would waste the larger of the two.
 *
 * It awards nothing. Every decision was already made in the hook; this reads the award
 * it returned and puts it on screen.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';
import type { City, Country, LocText, WorldLang } from '../../data/world/types';
import { PassportStamp } from './PassportStamp';
import { WORLD_STYLE, say, ui } from './worldUi';

const CHROME = {
  cityTitle: {
    el: 'ΣΥΓΧΑΡΗΤΗΡΙΑ!',
    en: 'CONGRATULATIONS!',
    de: 'GLÜCKWUNSCH!',
    fr: 'BRAVO !',
    es: '¡ENHORABUENA!',
    it: 'CONGRATULAZIONI!',
  },
  citySealed: {
    el: (name: string) => `Πήρες τη σφραγίδα της πόλης ${name}.`,
    en: (name: string) => `You have earned the seal of ${name}.`,
    de: (name: string) => `Du hast das Siegel von ${name} bekommen.`,
    fr: (name: string) => `Tu as gagné le sceau de ${name}.`,
    es: (name: string) => `Has conseguido el sello de ${name}.`,
    it: (name: string) => `Hai conquistato il sigillo di ${name}.`,
  },
  cityBody: {
    el: 'Είδες κάθε μέρος αυτής της πόλης. Η σφραγίδα μπήκε στο διαβατήριό σου.',
    en: 'You have seen every place in this city. The seal is in your passport.',
    de: 'Du hast jeden Ort dieser Stadt gesehen. Das Siegel steht in deinem Reisepass.',
    fr: 'Tu as vu tous les lieux de cette ville. Le sceau est dans ton passeport.',
    es: 'Has visto todos los lugares de esta ciudad. El sello está en tu pasaporte.',
    it: 'Hai visto ogni luogo di questa città. Il sigillo è sul tuo passaporto.',
  },
  countryTitle: {
    el: 'ΚΑΙ ΚΑΤΙ ΑΚΟΜΑ',
    en: 'AND ONE MORE THING',
    de: 'UND NOCH ETWAS',
    fr: 'ET CE N’EST PAS TOUT',
    es: 'Y ALGO MÁS',
    it: 'E C’È DI PIÙ',
  },
  /**
   * The country name is set apart rather than inflected into the sentence, and that is
   * not a stylistic choice.
   *
   * Greek gives «τη Γαλλία» but «την Ελλάδα», because the accusative article keeps its
   * nu before a vowel — and that is the easy half. Countries also have gender: ο
   * Καναδάς, το Μεξικό, οι ΗΠΑ. Any sentence with a hardcoded article is wrong for most
   * of the world the moment we leave Greece. French has le Canada and les États-Unis,
   * Spanish and Italian agree their adjectives, German needs die Schweiz and die USA to
   * keep their article while Griechenland must not have one.
   *
   * Naming the noun we control — the country, le pays, das Land — and letting the name
   * follow a colon is correct in all six for every country there is.
   */
  countrySealed: {
    el: (name: string) => `Τελείωσες ολόκληρη τη χώρα: ${name}.`,
    en: (name: string) => `You have finished the whole country: ${name}.`,
    de: (name: string) => `Du hast das ganze Land geschafft: ${name}.`,
    fr: (name: string) => `Tu as terminé tout le pays : ${name}.`,
    es: (name: string) => `Has terminado el país entero: ${name}.`,
    it: (name: string) => `Hai finito tutto il paese: ${name}.`,
  },
  countryBody: {
    el: 'Κάθε πόλη, κάθε μέρος. Λίγοι εξερευνητές φτάνουν ως εδώ.',
    en: 'Every city, every place. Not many explorers get this far.',
    de: 'Jede Stadt, jeder Ort. So weit kommen nicht viele Entdecker.',
    fr: 'Chaque ville, chaque lieu. Peu d’explorateurs vont aussi loin.',
    es: 'Todas las ciudades, todos los lugares. Pocos exploradores llegan hasta aquí.',
    it: 'Ogni città, ogni luogo. Pochi esploratori arrivano fin qui.',
  },
  xp: {
    el: (n: number) => `+${n} XP`,
    en: (n: number) => `+${n} XP`,
    de: (n: number) => `+${n} XP`,
    fr: (n: number) => `+${n} XP`,
    es: (n: number) => `+${n} XP`,
    it: (n: number) => `+${n} XP`,
  },
  next: { el: 'Συνέχεια', en: 'Continue', de: 'Weiter', fr: 'Continuer', es: 'Seguir', it: 'Avanti' },
  done: { el: 'Τέλεια!', en: 'Wonderful!', de: 'Super!', fr: 'Génial !', es: '¡Genial!', it: 'Fantastico!' },
  trailDone: {
    el: (name: string) => `Ολοκλήρωσες τη διαδρομή «${name}».`,
    en: (name: string) => `You finished the trail “${name}”.`,
    de: (name: string) => `Du hast die Route „${name}“ geschafft.`,
    fr: (name: string) => `Tu as terminé le parcours « ${name} ».`,
    es: (name: string) => `Has completado la ruta «${name}».`,
    it: (name: string) => `Hai completato il percorso «${name}».`,
  },
};

/** Deterministic tilt, so a seal looks identical every time the passport is opened. */
function tiltOf(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.round((((h >>> 8) % 130) / 10 - 6.5) * 10) / 10;
}

// ----------------------------------------------------------------- the seal

export interface CitySealProps {
  /** What was completed, printed around the rosette. */
  name: string;
  /**
   * The language the name is in, so it can be capitalised by that language's rules.
   * Greek drops its accents in capitals — ΔΕΛΦΟΙ, never ΔΕΛΦΟΊ — and a bare
   * `toUpperCase()` gets that wrong in a way every Greek reader sees instantly.
   */
  lang: WorldLang;
  /** ISO date. Printed in the middle, the way a seal records when it was pressed. */
  date: string;
  /** Hex. The country's own ink, so a city seal belongs to its country by colour. */
  ink: string;
  size?: number;
  className?: string;
}

/**
 * A pressed rosette, not an inked stamp.
 *
 * Drawn rather than imaged so it takes the country's ink colour and any name length.
 * The scalloped edge is generated from the name so two cities never look identical,
 * and it is generated deterministically — `Math.random()` would give the same child a
 * different seal on every render of the same page.
 */
export const CitySeal: React.FC<CitySealProps> = ({ name, lang, date, ink, size = 180, className }) => {
  const id = useMemo(() => `seal-${name.replace(/[^a-z0-9]/gi, '')}-${size}`, [name, size]);
  const printed = useMemo(() => {
    const [y, m, d] = (date ?? '').split('-');
    return y && m && d ? `${d} · ${m} · ${y}` : date;
  }, [date]);

  // A ring of scallops. Twenty-four teeth reads as a seal at any size; fewer looks
  // like a gear and more turns to mush below 120px.
  const teeth = 24;
  const r = 42;
  const scallops = Array.from({ length: teeth }, (_, i) => {
    const a = (i / teeth) * Math.PI * 2;
    return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
  }).join(' ');

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={`${name} — ${printed}`}
    >
      <defs>
        <path
          id={`${id}-arc`}
          d="M 50,50 m -34,0 a 34,34 0 1,1 68,0"
          fill="none"
        />
      </defs>

      <polygon points={scallops} fill={ink} fillOpacity="0.14" />
      <circle cx="50" cy="50" r="38" fill="none" stroke={ink} strokeOpacity="0.75" strokeWidth="1.6" />
      <circle cx="50" cy="50" r="34" fill="none" stroke={ink} strokeOpacity="0.45" strokeWidth="0.7" />

      <text
        fill={ink}
        fillOpacity="0.9"
        fontSize="6.4"
        fontWeight="700"
        letterSpacing="0.9"
        textAnchor="middle"
      >
        <textPath href={`#${id}-arc`} startOffset="50%">
          {name.toLocaleUpperCase(lang)}
        </textPath>
      </text>

      <text
        x="50"
        y="52"
        fill={ink}
        fillOpacity="0.95"
        fontSize="9"
        fontWeight="900"
        textAnchor="middle"
      >
        ★
      </text>
      <text
        x="50"
        y="64"
        fill={ink}
        fillOpacity="0.8"
        fontSize="5.4"
        fontWeight="700"
        letterSpacing="0.6"
        textAnchor="middle"
      >
        {printed}
      </text>
    </svg>
  );
};

// ------------------------------------------------------------- the ceremony

export interface SealCeremonyProps {
  lang: WorldLang;
  city: City;
  /** Present only when this visit also finished the country. */
  country?: Country;
  /** ISO date the seals were earned. */
  date: string;
  /** What the visit paid, so the child sees the number and not just the mark. */
  xp: number;
  /** The trail this visit finished, if it finished one. */
  trailName?: LocText;
  onDone: () => void;
}

const SealCeremony: React.FC<SealCeremonyProps> = ({
  lang,
  city,
  country,
  date,
  xp,
  trailName,
  onDone,
}) => {
  const reduced = useReducedMotion();
  const controls = useAnimationControls();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Two pages when a country fell with the city, because finishing Athens and finishing
  // Greece are different achievements and one screen would swallow the larger.
  const [page, setPage] = useState<'city' | 'country'>('city');
  const hasCountryPage = Boolean(country);

  const ink = country?.stamp?.ink ?? '#f59e0b';
  const tilt = useMemo(() => tiltOf(city.id), [city.id]);

  // The one guard that matters. A ref, not state: it survives StrictMode's double
  // invocation and is read synchronously, so a fast double tap cannot get past it.
  const firedRef = useRef(false);
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  });

  const finish = useCallback(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    onDoneRef.current();
  }, []);

  const advance = useCallback(() => {
    if (page === 'city' && hasCountryPage) setPage('country');
    else finish();
  }, [page, hasCountryPage, finish]);

  useEffect(() => {
    buttonRef.current?.focus();
  }, [page]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') finish();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [finish]);

  // Press, settle. A seal is pressed into paper rather than dropped onto it, so it
  // arrives large and slightly turned and sinks to rest instead of bouncing.
  useEffect(() => {
    if (reduced) return;
    controls.set({ scale: 1.6, opacity: 0, rotate: tilt - 10 });
    controls.start({
      scale: 1,
      opacity: 1,
      rotate: tilt,
      transition: { type: 'spring', stiffness: 260, damping: 20, mass: 1 },
    });
  }, [controls, reduced, tilt, page]);

  const isCountryPage = page === 'country' && country;
  const title = ui(isCountryPage ? CHROME.countryTitle : CHROME.cityTitle, lang);
  const line = isCountryPage
    ? ui(CHROME.countrySealed, lang)(say(country.name, lang))
    : ui(CHROME.citySealed, lang)(say(city.name, lang));
  const body = ui(isCountryPage ? CHROME.countryBody : CHROME.cityBody, lang);

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center px-6"
      role="dialog"
      aria-modal="true"
      aria-label={line}
    >
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.25 }}
      />

      <div className="pointer-events-none relative flex w-full max-w-sm flex-col items-center text-center">
        <p className={WORLD_STYLE.label}>{title}</p>

        <div className="relative mt-6 flex h-[200px] items-center justify-center">
          <motion.div animate={reduced ? undefined : controls} style={{ lineHeight: 0 }}>
            {isCountryPage ? (
              <PassportStamp country={country} date={date} size={190} />
            ) : (
              <CitySeal name={say(city.name, lang)} lang={lang} date={date} ink={ink} size={190} />
            )}
          </motion.div>
        </div>

        <motion.div
          key={page}
          className="mt-5 flex flex-col items-center"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduced ? { duration: 0 } : { delay: 0.25, type: 'spring', stiffness: 220, damping: 22 }}
        >
          <h2 className={`${WORLD_STYLE.display} text-2xl`}>{line}</h2>
          <p className={`${WORLD_STYLE.body} mt-3 text-sm`}>{body}</p>

          {xp > 0 && page === 'city' && (
            <span className="mt-5 rounded-full bg-amber-400/15 border border-amber-400/40 px-4 py-1.5 text-amber-200 text-sm font-black tracking-wider">
              {ui(CHROME.xp, lang)(xp)}
            </span>
          )}

          {trailName && page === 'city' && (
            <p className={`${WORLD_STYLE.label} mt-4 max-w-xs`}>
              {ui(CHROME.trailDone, lang)(say(trailName, lang))}
            </p>
          )}
        </motion.div>

        <button
          ref={buttonRef}
          type="button"
          onClick={advance}
          className={`${WORLD_STYLE.cta} pointer-events-auto mt-8 min-h-[44px]`}
        >
          {ui(page === 'city' && hasCountryPage ? CHROME.next : CHROME.done, lang)}
        </button>
      </div>
    </div>
  );
};

export default SealCeremony;
