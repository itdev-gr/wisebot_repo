/**
 * «Λάθος σημείο» — the quiet line under the map, and the sheet it opens.
 *
 * Aimed at the grown-up: small, plain, no colour, no emoji in the trigger, sitting under
 * the map buttons where a parent checking the route will find it and a child chasing the
 * next stamp will not. It is deliberately NOT behind the parent PIN
 * (`components/ParentPinGate.tsx`): that gate needs an account, speaks only Greek and
 * English, and asking a family to sign in and type a PIN before they can tell us a pin is
 * wrong is how you never hear about a wrong pin.
 *
 * Three options, fixed, no free text. Each maps onto a field the model already has, so
 * every report turns into a specific repair rather than an opinion — see
 * `services/pinReports.ts` and the migration.
 *
 * It sends no coordinate. The parent is standing at the place, so their position is the
 * most tempting thing in the world to attach and the one thing §28 forbids.
 */

import React, { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { WorldLang } from '../../data/world/types';
import { WORLD_STYLE, ui } from './worldUi';
import { alreadyReported, reportWrongPin, type PinReportReason } from '../../services/pinReports';

const CHROME = {
  trigger: {
    el: 'Λάθος σημείο;',
    en: 'Wrong spot?',
    de: 'Falscher Ort?',
    fr: 'Mauvais endroit ?',
    es: '¿Sitio equivocado?',
    it: 'Punto sbagliato?',
  },
  forGrownUps: {
    el: 'για γονείς',
    en: 'for grown-ups',
    de: 'für Erwachsene',
    fr: 'pour les parents',
    es: 'para adultos',
    it: 'per i grandi',
  },
  title: {
    el: 'Τι δεν βρήκατε;',
    en: 'What did you not find?',
    de: 'Was haben Sie nicht gefunden?',
    fr: 'Qu’est-ce que vous n’avez pas trouvé ?',
    es: '¿Qué no encontró?',
    it: 'Che cosa non avete trovato?',
  },
  intro: {
    el: 'Διαλέξτε ένα. Στέλνουμε μόνο αυτό και το όνομα του σημείου — ποτέ τη θέση σας.',
    en: 'Pick one. We send only that and the name of the place — never your location.',
    de: 'Wählen Sie eines. Wir senden nur das und den Namen des Ortes — niemals Ihren Standort.',
    fr: 'Choisissez-en un. Nous envoyons seulement cela et le nom du lieu — jamais votre position.',
    es: 'Elija una. Enviamos solo eso y el nombre del lugar — nunca su ubicación.',
    it: 'Scegliete una. Inviamo solo quella e il nome del luogo — mai la vostra posizione.',
  },
  entrance: {
    el: 'Το μέρος είναι σωστό, αλλά η είσοδος είναι αλλού',
    en: 'The place is right, but the entrance is somewhere else',
    de: 'Der Ort stimmt, aber der Eingang ist woanders',
    fr: 'Le lieu est le bon, mais l’entrée est ailleurs',
    es: 'El lugar es correcto, pero la entrada está en otro sitio',
    it: 'Il luogo è giusto, ma l’ingresso è altrove',
  },
  wrong: {
    el: 'Μας έστειλε σε εντελώς άλλο μέρος',
    en: 'It sent us somewhere else entirely',
    de: 'Es hat uns ganz woandershin geschickt',
    fr: 'Cela nous a envoyés complètement ailleurs',
    es: 'Nos envió a un sitio completamente distinto',
    it: 'Ci ha mandati in tutt’altro posto',
  },
  gone: {
    el: 'Έχει κλείσει ή έχει μετακομίσει',
    en: 'It has closed or moved',
    de: 'Es ist geschlossen oder umgezogen',
    fr: 'C’est fermé ou déménagé',
    es: 'Ha cerrado o se ha mudado',
    it: 'Ha chiuso o si è spostato',
  },
  cancel: {
    el: 'Άκυρο',
    en: 'Cancel',
    de: 'Abbrechen',
    fr: 'Annuler',
    es: 'Cancelar',
    it: 'Annulla',
  },
  thanks: {
    el: 'Ευχαριστούμε — το σημειώσαμε.',
    en: 'Thank you — we have noted it.',
    de: 'Danke — wir haben es notiert.',
    fr: 'Merci — c’est noté.',
    es: 'Gracias — lo hemos anotado.',
    it: 'Grazie — ce ne siamo annotati.',
  },
  alreadySent: {
    el: 'Το έχετε ήδη αναφέρει. Ευχαριστούμε.',
    en: 'You have already reported this. Thank you.',
    de: 'Sie haben das bereits gemeldet. Danke.',
    fr: 'Vous l’avez déjà signalé. Merci.',
    es: 'Ya lo ha informado. Gracias.',
    it: 'L’avete già segnalato. Grazie.',
  },
} as const;

const OPTIONS: { reason: PinReportReason; key: 'entrance' | 'wrong' | 'gone'; emoji: string }[] = [
  { reason: 'entrance', key: 'entrance', emoji: '🚪' },
  { reason: 'wrong', key: 'wrong', emoji: '🧭' },
  { reason: 'gone', key: 'gone', emoji: '🔒' },
];

export interface PinReportProps {
  lang: WorldLang;
  placeId: string;
}

export const PinReport: React.FC<PinReportProps> = ({ lang, placeId }) => {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  // Read once per place rather than on every render: the answer only changes here.
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    setSeen(alreadyReported(placeId));
    setDone(false);
    setOpen(false);
  }, [placeId]);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  const send = useCallback(
    async (reason: PinReportReason) => {
      setSending(true);
      // The thank-you does not depend on the network. A parent standing in the rain who
      // told us something true should not be shown an error because we were offline; the
      // device remembers the report either way.
      await reportWrongPin(placeId, reason);
      setSending(false);
      setSeen(true);
      setDone(true);
      setOpen(false);
    },
    [placeId],
  );

  return (
    <>
      <div className="mt-2 flex items-center justify-end gap-2">
        {done && <span className="text-[11px] font-bold text-emerald-300/80">{ui(CHROME.thanks, lang)}</span>}
        <button
          type="button"
          onClick={() => (seen ? setDone(true) : setOpen(true))}
          className="text-[11px] font-bold text-white/35 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/70"
        >
          {ui(CHROME.trigger, lang)}
          <span className="ml-1 font-normal text-white/25">· {ui(CHROME.forGrownUps, lang)}</span>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center px-4 pb-6 sm:pb-0 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={ui(CHROME.title, lang)}
          onClick={close}
        >
          <motion.div
            initial={reduce ? false : { y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className={`${WORLD_STYLE.card} w-full max-w-sm bg-[#0B0F1A] p-5`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-black text-white">{ui(CHROME.title, lang)}</h2>
            <p className={`${WORLD_STYLE.body} mt-1 text-xs`}>{ui(CHROME.intro, lang)}</p>

            <div className="mt-4 flex flex-col gap-2">
              {OPTIONS.map((o) => (
                <button
                  key={o.reason}
                  type="button"
                  disabled={sending}
                  onClick={() => void send(o.reason)}
                  className={`${WORLD_STYLE.cardTap} flex min-h-[52px] items-center gap-3 px-4 py-3 text-left text-sm font-bold text-white/85 disabled:opacity-50`}
                >
                  <span className="text-xl leading-none" aria-hidden="true">
                    {o.emoji}
                  </span>
                  <span className="flex-1">{ui(CHROME[o.key], lang)}</span>
                </button>
              ))}
            </div>

            <button type="button" onClick={close} className={`${WORLD_STYLE.ghost} mt-3 w-full`}>
              {ui(CHROME.cancel, lang)}
            </button>
          </motion.div>
        </div>
      )}

      {done && seen && !open && (
        <p className="sr-only" role="status">
          {ui(CHROME.alreadySent, lang)}
        </p>
      )}
    </>
  );
};
