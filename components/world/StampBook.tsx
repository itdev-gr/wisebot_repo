/**
 * WiseBot World — the stamp book.
 * ==============================
 * The passport pages. Every stamp the child has collected lives here, and every page
 * still waiting for one is here too, because the blank pages are the pull.
 *
 * Three decisions worth knowing before editing this file:
 *
 *  1. **It is a book, not a dashboard.** Stamps are not laid out in a grid. Each one is
 *     nudged across the page and overlapped onto the one above it, the way an official
 *     actually presses ink onto paper. Where a stamp lands is picked from the country's
 *     own id via a tiny FNV hash, so it is the same on every render, on every device and
 *     after a language switch — a stamp that jumps when the child taps ΕΛ is a bug. The
 *     tilt is not set here at all: `PassportStamp` already rotates its own artwork inside
 *     its own box, and a second rotation out here would double the angle.
 *  2. **It awards nothing and stores nothing.** Every reward decision lives in
 *     `useWorldProgress.ts`. This screen receives what was already earned as props and
 *     renders it. There is no effect here, no localStorage write and no callback that
 *     could pay a child twice under React 19 StrictMode.
 *  3. **Countries not yet entered are shown, never hidden.** A passport with pages left
 *     is the reason to keep travelling. They render as dotted, quiet placeholders in the
 *     same display order the world list uses.
 *
 * One more section sits between the pages and the blank ones: the stamps a family earned
 * in the old Explorer, read from its own `wb_explore_*` records by `legacyStamps.ts`.
 * Decision 2 covers it too — read once, written never, counted in no total — and it is
 * not drawn at all when there is nothing to show.
 *
 * Content strings come from the data through `say()`. Chrome strings are the local `T`
 * and `S` dictionaries below, read with `ui()`; every sentence is written out whole in
 * each of the six languages rather than assembled from fragments, because the six do not
 * agree on word order — French and Italian count "3 villes tamponnées sur 5", with the
 * noun before the number and the participle inflected after it.
 *
 * The root carries `lang={lang}` and it is load-bearing, not decoration. World picks its
 * own language out of six and remembers it under `wb_world_lang`, while `App.tsx` sets
 * `document.documentElement.lang` from the app's `'el' | 'en'` — so a child reading World
 * in Greek with the app in English has Greek text sitting under `<html lang="en">`. A
 * browser only applies Greek casing rules to `text-transform: uppercase` when the
 * ELEMENT's language is Greek; without the attribute the tonos survives and the title
 * reads ΤΟ ΒΙΒΛΊΟ, which is not a word. The attribute also gets a screen reader to
 * pronounce the page in the language it is actually written in.
 */

import React, { useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Award, BarChart3, Building2, Globe, Loader2, MapPin, Share2, Stamp } from 'lucide-react';
import { PassportStamp } from './PassportStamp';
import PassportStatsPage, { T as STATS_T } from './PassportStatsPage';
import { computePassportStats, formatIsoDate } from './passportStats';
import { legacyDay, readLegacyStamps } from './legacyStamps';
import { readWorldProgress, today } from './worldProgressStore';
import type { WorldProgress } from './worldProgressStore';
import { PLACE_COUNTS } from '../../data/world/registry';
import { WORLD_STYLE, say, ui } from './worldUi';
import type { City, CityId, Country, CountryId, WorldLang } from '../../data/world/types';
import { useAuth } from '../../context/AuthContext';
import { backendReferral } from '../../services/backendApi';
import { passportCardModel, sharePassportCard } from '../../utils/worldShareCard';
import type { GameShareResult } from '../../utils/gameShareCard';
import { trackSharePassport } from '../../utils/analytics';

export interface StampBookProps {
  lang: WorldLang;
  /** Every country, in display order. Entered ones become pages, the rest stay blank. */
  countries: Country[];
  /** countryId -> ISO entry date. Presence in this map is what "entered" means. */
  entries: Record<CountryId, string>;
  citiesDone: CityId[];
  countriesDone: CountryId[];
  /** Used to name the sealed cities under each stamp. */
  citiesOf: (countryId: CountryId) => City[];
  placesStamped: number;
  /**
   * The whole passport, for the statistics page — the per-stamp `onSite` and `correct`
   * flags are not in the props above. Optional: a caller that does not pass it gets the
   * same object read straight from storage, read-only, the moment the page is opened.
   */
  progress?: WorldProgress;
  onBack: () => void;
}

// ------------------------------------------------------------------ chrome

/** Short, already-uppercase captions. Safe to render through `WORLD_STYLE.label`. */
const T = {
  back: { el: 'ΠΙΣΩ', en: 'BACK', de: 'ZURÜCK', fr: 'RETOUR', es: 'ATRÁS', it: 'INDIETRO' },
  // The passport belongs to a named product, so it carries that name the way a real
  // one carries the issuing country's.
  kicker: {
    el: 'ΔΙΑΒΑΤΗΡΙΟ WISEBOT WORLD',
    en: 'WISEBOT WORLD PASSPORT',
    de: 'WISEBOT WORLD REISEPASS',
    fr: 'PASSEPORT WISEBOT WORLD',
    es: 'PASAPORTE WISEBOT WORLD',
    it: 'PASSAPORTO WISEBOT WORLD',
  },
  // The three totals sit in a three-column grid and are truncated, so these stay short
  // enough to survive a 375px screen — a longer synonym would render as an ellipsis.
  countries: { el: 'ΧΩΡΕΣ', en: 'COUNTRIES', de: 'LÄNDER', fr: 'PAYS', es: 'PAÍSES', it: 'PAESI' },
  cities: { el: 'ΠΟΛΕΙΣ', en: 'CITIES', de: 'STÄDTE', fr: 'VILLES', es: 'CIUDADES', it: 'CITTÀ' },
  places: { el: 'ΜΕΡΗ', en: 'PLACES', de: 'ORTE', fr: 'LIEUX', es: 'LUGARES', it: 'LUOGHI' },
  pages: {
    el: 'ΟΙ ΣΕΛΙΔΕΣ ΣΟΥ',
    en: 'YOUR PAGES',
    de: 'DEINE SEITEN',
    fr: 'TES PAGES',
    es: 'TUS PÁGINAS',
    it: 'LE TUE PAGINE',
  },
  blank: {
    el: 'ΛΕΥΚΕΣ ΣΕΛΙΔΕΣ',
    en: 'BLANK PAGES',
    de: 'LEERE SEITEN',
    fr: 'PAGES BLANCHES',
    es: 'PÁGINAS EN BLANCO',
    it: 'PAGINE BIANCHE',
  },
  // The badge on a country finished end to end. Each language keeps its own ink word —
  // Stempel, tampon, sello, timbro — so the badge and the ceremony say the same thing.
  sealed: {
    el: 'ΣΦΡΑΓΙΣΜΕΝΗ',
    en: 'SEALED',
    de: 'GESTEMPELT',
    fr: 'TAMPONNÉ',
    es: 'SELLADO',
    it: 'TIMBRATO',
  },
  // The distribution button: the card a parent forwards to other parents.
  share: {
    el: 'ΜΟΙΡΑΣΟΥ ΤΟ ΔΙΑΒΑΤΗΡΙΟ',
    en: 'SHARE MY PASSPORT',
    de: 'REISEPASS TEILEN',
    fr: 'PARTAGER MON PASSEPORT',
    es: 'COMPARTIR MI PASAPORTE',
    it: 'CONDIVIDI IL PASSAPORTO',
  },
  sharing: {
    el: 'ΦΤΙΑΧΝΩ ΤΗΝ ΚΑΡΤΑ…',
    en: 'MAKING THE CARD…',
    de: 'KARTE WIRD ERSTELLT…',
    fr: 'JE PRÉPARE LA CARTE…',
    es: 'PREPARANDO LA TARJETA…',
    it: 'PREPARO LA CARTA…',
  },
};

/** Whole sentences and titles. Written twice, never concatenated from pieces. */
const S = {
  // After the share button: which of the three paths actually ran, so the child is told
  // «it went» when a sheet appeared, and «I copied it» when none ever could.
  shared: {
    el: 'Έφυγε! Η κάρτα είναι στο μενού κοινοποίησης.',
    en: 'Off it goes! The card is in the share sheet.',
    de: 'Los geht’s! Die Karte ist im Teilen-Menü.',
    fr: 'C’est parti ! La carte est dans le menu de partage.',
    es: '¡Ya está! La tarjeta está en el menú de compartir.',
    it: 'Fatto! La carta è nel menu di condivisione.',
  },
  copied: {
    el: 'Την αντέγραψα! Κάνε επικόλληση σε ένα μήνυμα.',
    en: 'Copied! Paste it into a message.',
    de: 'Kopiert! Füge sie in eine Nachricht ein.',
    fr: 'Copiée ! Colle-la dans un message.',
    es: '¡Copiada! Pégala en un mensaje.',
    it: 'Copiata! Incollala in un messaggio.',
  },
  downloaded: {
    el: 'Την κατέβασα! Είναι στις λήψεις σου.',
    en: 'Downloaded! It is in your downloads.',
    de: 'Heruntergeladen! Sie ist in deinen Downloads.',
    fr: 'Téléchargée ! Elle est dans tes téléchargements.',
    es: '¡Descargada! Está en tus descargas.',
    it: 'Scaricata! È nei tuoi download.',
  },
  failed: {
    el: 'Δεν βγήκε η κάρτα αυτή τη φορά. Δοκίμασε ξανά.',
    en: 'The card did not come out this time. Try again.',
    de: 'Die Karte hat diesmal nicht geklappt. Versuch es noch einmal.',
    fr: 'La carte n’est pas sortie cette fois. Réessaie.',
    es: 'La tarjeta no salió esta vez. Inténtalo otra vez.',
    it: 'La carta non è uscita stavolta. Riprova.',
  },
  title: {
    el: 'Το βιβλίο των σφραγίδων',
    en: 'The stamp book',
    de: 'Das Stempelbuch',
    fr: 'Le livre des tampons',
    es: 'El libro de los sellos',
    it: 'Il libro dei timbri',
  },
  subtitle: {
    el: 'Κάθε χώρα που πάτησες άφησε το μελάνι της εδώ.',
    en: 'Every country you set foot in left its ink here.',
    de: 'Jedes Land, in dem du warst, hat hier seine Tinte gelassen.',
    fr: 'Chaque pays où tu as posé le pied a laissé son encre ici.',
    es: 'Cada país que pisaste dejó aquí su tinta.',
    it: 'Ogni Paese in cui hai messo piede ha lasciato qui il suo inchiostro.',
  },
  totals: {
    el: 'Χώρες που μπήκες, πόλεις που σφράγισες, μέρη που είδες.',
    en: 'Countries you entered, cities you sealed, places you visited.',
    de: 'Länder, in denen du warst, Städte mit Stempel, Orte, die du gesehen hast.',
    fr: 'Les pays où tu es entré, les villes que tu as tamponnées, les lieux que tu as vus.',
    es: 'Los países en los que entraste, las ciudades que sellaste, los lugares que viste.',
    it: 'I Paesi in cui sei entrato, le città che hai timbrato, i luoghi che hai visto.',
  },
  empty: {
    el: 'Το διαβατήριό σου είναι ακόμα λευκό. Άνοιξε την πρώτη σου χώρα και πάρε την πρώτη σφραγίδα.',
    en: 'Your passport is still blank. Open your first country and take your first stamp.',
    de: 'Dein Reisepass ist noch leer. Öffne dein erstes Land und hol dir deinen ersten Stempel.',
    fr: 'Ton passeport est encore vide. Ouvre ton premier pays et prends ton premier tampon.',
    es: 'Tu pasaporte todavía está en blanco. Abre tu primer país y consigue tu primer sello.',
    it: 'Il tuo passaporto è ancora vuoto. Apri il tuo primo Paese e prendi il tuo primo timbro.',
  },
  blankNote: {
    el: 'Αυτές οι σελίδες περιμένουν ακόμα τη σφραγίδα τους.',
    en: 'These pages are still waiting for their stamp.',
    de: 'Diese Seiten warten noch auf ihren Stempel.',
    fr: 'Ces pages attendent encore leur tampon.',
    es: 'Estas páginas todavía esperan su sello.',
    it: 'Queste pagine aspettano ancora il loro timbro.',
  },
  noCityYet: {
    el: 'Καμία πόλη σφραγισμένη ακόμα.',
    en: 'No city sealed yet.',
    de: 'Noch keine Stadt gestempelt.',
    fr: 'Pas encore de ville tamponnée.',
    es: 'Todavía ninguna ciudad sellada.',
    it: 'Ancora nessuna città timbrata.',
  },
  wholeCountry: {
    el: 'Ολοκλήρωσες ολόκληρη τη χώρα.',
    en: 'You completed this whole country.',
    de: 'Du hast dieses ganze Land geschafft.',
    fr: 'Tu as fini ce pays en entier.',
    es: 'Has completado todo este país.',
    it: 'Hai completato tutto questo Paese.',
  },
  page: {
    el: (n: number) => `ΣΕΛΙΔΑ ${n}`,
    en: (n: number) => `PAGE ${n}`,
    de: (n: number) => `SEITE ${n}`,
    fr: (n: number) => `PAGE ${n}`,
    es: (n: number) => `PÁGINA ${n}`,
    it: (n: number) => `PAGINA ${n}`,
  },
  // Word order is not the English one: French and Italian put the noun before the count
  // and then inflect the participle after it, so each language is written out whole
  // rather than assembled — and each branch is a finished sentence, not a fragment.
  sealedCities: {
    el: (n: number, total: number) => `${n} από ${total} πόλεις σφραγισμένες`,
    en: (n: number, total: number) => `${n} of ${total} cities sealed`,
    de: (n: number, total: number) => `${n} von ${total} Städten gestempelt`,
    fr: (n: number, total: number) =>
      n === 1 ? `1 ville tamponnée sur ${total}` : `${n} villes tamponnées sur ${total}`,
    es: (n: number, total: number) => `${n} de ${total} ciudades selladas`,
    it: (n: number, total: number) =>
      n === 1 ? `1 città timbrata su ${total}` : `${n} città timbrate su ${total}`,
  },
  countriesSealed: {
    el: (n: number) =>
      n === 1
        ? 'Μία χώρα ολοκληρωμένη από την αρχή ως το τέλος.'
        : `${n} χώρες ολοκληρωμένες από την αρχή ως το τέλος.`,
    en: (n: number) =>
      n === 1
        ? 'One country completed from start to finish.'
        : `${n} countries completed from start to finish.`,
    de: (n: number) =>
      n === 1
        ? 'Ein Land von Anfang bis Ende geschafft.'
        : `${n} Länder von Anfang bis Ende geschafft.`,
    fr: (n: number) =>
      n === 1 ? 'Un pays fini du début à la fin.' : `${n} pays finis du début à la fin.`,
    es: (n: number) =>
      n === 1
        ? 'Un país completado de principio a fin.'
        : `${n} países completados de principio a fin.`,
    it: (n: number) =>
      n === 1
        ? 'Un Paese completato dall’inizio alla fine.'
        : `${n} Paesi completati dall’inizio alla fine.`,
  },
  // The old Explorer's stamps (`legacyStamps.ts`). Explorer counted "envelopes", so the
  // section keeps that word: it is the word the family learned. Read-only, and the note
  // says so in every language — these do not move the three totals on the cover.
  legacyTitle: {
    el: 'Σφραγίδες από τον παλιό Εξερευνητή',
    en: 'Stamps from the old Explorer',
    de: 'Stempel aus dem alten Explorer',
    fr: 'Tampons de l’ancien Explorateur',
    es: 'Sellos del antiguo Explorador',
    it: 'Timbri del vecchio Esploratore',
  },
  legacyNote: {
    el: 'Η οικογένειά σου τις κέρδισε πριν ανοίξει το WiseBot World. Μένουν εδώ όπως είναι και δεν μετρούν στο νέο διαβατήριο.',
    en: 'Your family earned these before WiseBot World opened. They stay here as they are and do not count towards the new passport.',
    de: 'Deine Familie hat sie gesammelt, bevor WiseBot World eröffnet wurde. Sie bleiben hier, wie sie sind, und zählen nicht zum neuen Reisepass.',
    fr: 'Ta famille les a gagnés avant l’ouverture de WiseBot World. Ils restent ici tels quels et ne comptent pas dans le nouveau passeport.',
    es: 'Tu familia los consiguió antes de que abriera WiseBot World. Se quedan aquí tal como están y no cuentan para el nuevo pasaporte.',
    it: 'La tua famiglia li ha guadagnati prima che aprisse WiseBot World. Restano qui così come sono e non contano per il nuovo passaporto.',
  },
  legacyEnvelopes: {
    el: (n: number, total: number) => `Άνοιξες ${n} από τους ${total} φακέλους.`,
    en: (n: number, total: number) =>
      n === 1 ? `You opened 1 of ${total} envelopes.` : `You opened ${n} of ${total} envelopes.`,
    de: (n: number, total: number) => `Du hast ${n} von ${total} Umschlägen geöffnet.`,
    fr: (n: number, total: number) =>
      n === 1 ? `Tu as ouvert 1 enveloppe sur ${total}.` : `Tu as ouvert ${n} enveloppes sur ${total}.`,
    es: (n: number, total: number) => `Abriste ${n} de ${total} sobres.`,
    it: (n: number, total: number) =>
      n === 1 ? `Hai aperto 1 busta su ${total}.` : `Hai aperto ${n} buste su ${total}.`,
  },
  legacyStampedOn: {
    el: (date: string) => `Σφραγίδα πόλης στις ${date}.`,
    en: (date: string) => `City stamp on ${date}.`,
    de: (date: string) => `Stadtstempel am ${date}.`,
    fr: (date: string) => `Tampon de la ville le ${date}.`,
    es: (date: string) => `Sello de la ciudad el ${date}.`,
    it: (date: string) => `Timbro della città il ${date}.`,
  },
  // Earned, but one of the old envelopes carries a date that cannot be read. Said
  // plainly rather than printed as today's date.
  legacyStampedUndated: {
    el: 'Σφραγίδα πόλης, χωρίς ημερομηνία.',
    en: 'City stamp, date unknown.',
    de: 'Stadtstempel, Datum unbekannt.',
    fr: 'Tampon de la ville, date inconnue.',
    es: 'Sello de la ciudad, fecha desconocida.',
    it: 'Timbro della città, data sconosciuta.',
  },
  legacyNoStamp: {
    el: 'Χωρίς σφραγίδα πόλης.',
    en: 'No city stamp.',
    de: 'Kein Stadtstempel.',
    fr: 'Pas de tampon de la ville.',
    es: 'Sin sello de la ciudad.',
    it: 'Nessun timbro della città.',
  },
};

// ------------------------------------------------------------------- ink

/**
 * FNV-1a over the country id. The stamps have to look thrown onto the page, but they
 * also have to land in the same spot every single time — so the randomness is seeded by
 * something permanent rather than by `Math.random()` or by a render count.
 */
function hash(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/**
 * How far across the page each stamp lands, as a PERCENTAGE of the page width rather
 * than a pixel count. A percentage scatters the same way at 375px and at 768px, and it
 * cannot push a stamp off the edge and start a horizontal scroll the way a fixed pixel
 * offset can once the page gets narrow.
 *
 * Every term of the offset is read out of the country's OWN hash — never out of its
 * position in the book. A position-derived term looks harmless and is not: entering a
 * country that sorts early shifts every later country's index by one, and every stamp
 * already in the passport slides across the page. A stamp that moves is a stamp the
 * child no longer trusts. Low bits pick the base offset, a higher bit adds the extra
 * step, so the two are drawn from uncorrelated parts of the hash.
 */
const OFFSETS = [0, 7, 3, 12, 5, 10, 1, 6];

/** The second, coarser step, in the same page-width percentage. */
const STEP = 8;

/** Three stamps to a page, which is roughly what fits before a real page looks full. */
const PER_PAGE = 3;

// ------------------------------------------------------------------ pieces

const Total: React.FC<{ icon: React.ReactNode; value: number; label: string }> = ({
  icon,
  value,
  label,
}) => (
  <div className={`${WORLD_STYLE.card} px-2 py-3 text-center sm:px-3 sm:py-4`}>
    <div className="flex justify-center text-white/40">{icon}</div>
    <div className={`${WORLD_STYLE.display} mt-2 text-3xl sm:text-4xl`}>{value}</div>
    <div className={`${WORLD_STYLE.label} mt-1.5 block truncate`}>{label}</div>
  </div>
);

interface EntryProps {
  lang: WorldLang;
  country: Country;
  date: string;
  sealed: boolean;
  cities: City[];
  sealedCityIds: Set<CityId>;
  /** Position inside this page — the first stamp of a page never overlaps upward. */
  slot: number;
}

const StampEntry: React.FC<EntryProps> = ({
  lang,
  country,
  date,
  sealed,
  cities,
  sealedCityIds,
  slot,
}) => {
  const reduced = useReducedMotion();
  const seed = hash(country.id);
  // Both terms come out of the country's own hash, so this stamp sits in the same spot
  // for the life of the passport no matter what else the child collects around it.
  const offset = OFFSETS[seed % OFFSETS.length] + ((seed >>> 5) % 2 === 1 ? STEP : 0);
  const sealedCities = cities.filter((city) => sealedCityIds.has(city.id));

  return (
    <motion.li
      initial={{ opacity: 0, y: reduced ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 0.35,
        delay: reduced ? 0 : Math.min(slot * 0.07, 0.3),
      }}
      className="relative w-full"
      style={{
        // Each stamp is pressed a little over the one above it. The z-index keeps the
        // newer ink on top, which is the way a real page fills up.
        marginTop: slot === 0 ? 0 : -12,
        zIndex: slot + 1,
      }}
    >
      {/* The ink itself. The tilt is NOT set here: `PassportStamp` already rotates its
          own artwork inside its own box, seeded from the country id, and doing it again
          out here would double the angle and swing the corners out of the page. */}
      <div className="relative inline-block max-w-full" style={{ marginLeft: `${offset}%` }}>
        <PassportStamp country={country} date={date} />

        {sealed && (
          <div className="absolute -bottom-1 -right-1 rounded-full bg-black/70 backdrop-blur-sm">
            <div
              className={`flex items-center gap-1 rounded-full border px-2.5 py-1 ${WORLD_STYLE.earned}`}
            >
              <Award size={12} className="text-emerald-300" aria-hidden />
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-200">
                {ui(T.sealed, lang)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* The quiet note under the stamp: which cities of this country are sealed. */}
      <div
        className={
          sealed
            ? `mt-3 max-w-[26rem] rounded-xl border px-3 py-2.5 ${WORLD_STYLE.earned}`
            : 'mt-3 max-w-[26rem] rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5'
        }
      >
        <div className="flex items-center gap-2">
          <span className="text-base leading-none" aria-hidden>
            {country.flag}
          </span>
          <span className="min-w-0 truncate text-sm font-black text-white/80">
            {say(country.name, lang)}
          </span>
        </div>

        <p className="mt-1.5 text-[11px] font-bold leading-relaxed text-white/45">
          {sealedCities.length > 0
            ? ui(S.sealedCities, lang)(sealedCities.length, cities.length)
            : ui(S.noCityYet, lang)}
        </p>

        {sealedCities.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {sealedCities.map((city) => (
              <li
                key={city.id}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-2 py-1 text-[11px] font-bold text-white/60"
              >
                <span aria-hidden>{city.emoji}</span>
                <span className="max-w-[9rem] truncate">{say(city.name, lang)}</span>
              </li>
            ))}
          </ul>
        )}

        {sealed && (
          <p className="mt-2 text-[11px] font-bold leading-relaxed text-emerald-300/80">
            {ui(S.wholeCountry, lang)}
          </p>
        )}
      </div>
    </motion.li>
  );
};

// ------------------------------------------------------------------- book

const StampBook: React.FC<StampBookProps> = ({
  lang,
  countries,
  entries,
  citiesDone,
  countriesDone,
  citiesOf,
  placesStamped,
  progress,
  onBack,
}) => {
  // Every list arriving as a prop is guarded: World loads content dynamically, and a
  // country whose module has not landed yet is a real state, not a hypothetical one.
  const all = useMemo(() => (Array.isArray(countries) ? countries : []), [countries]);
  const reduced = useReducedMotion();

  /**
   * The book, or its statistics page. The page is a sibling screen inside this route
   * rather than a route of its own, so `World.tsx` — another session's file — is not
   * touched; BACK in the sticky bar returns to the book first and to World second.
   */
  const [view, setView] = useState<'book' | 'stats'>('book');

  const cities = useMemo(
    () =>
      all.flatMap((country) => {
        const list = typeof citiesOf === 'function' ? citiesOf(country.id) : [];
        return Array.isArray(list) ? list : [];
      }),
    [all, citiesOf],
  );

  /**
   * The statistics are counted only when the page is open, from the passport the caller
   * handed in or — when it did not — from storage, read once and read only. Decision 2
   * at the top of this file holds: nothing is written, nothing is awarded, and the read
   * happens in render rather than in an effect, so StrictMode cannot run it twice with
   * different results.
   */
  const stats = useMemo(() => {
    if (view !== 'stats') return null;
    const passport = progress ?? readWorldProgress();
    return computePassportStats(passport, cities, PLACE_COUNTS, today());
  }, [view, progress, cities]);

  /**
   * The old Explorer's stamps, read once when the book opens — `wb_explore_*` and the
   * quiz best runs, never `wb_world_progress`. Same rule as the statistics above: a
   * read in render, nothing written, nothing awarded, and the three totals on the cover
   * do not see these. Nothing on this screen can change the old records, so there is
   * nothing to re-read; an empty list means the section is not drawn at all.
   */
  const legacy = useMemo(() => readLegacyStamps(), []);

  /**
   * Switching page starts the reader at the top of it. The Layout scrolls its own
   * `overflow-y-auto` pane, not the window, so this asks the book's root to come into
   * view and lets the browser find whichever ancestor actually scrolls. Done in the
   * click handler, never in an effect.
   */
  const rootRef = useRef<HTMLDivElement>(null);
  const toTop = () => {
    try {
      rootRef.current?.scrollIntoView({ block: 'start' });
    } catch {
      /* a scroller that is not there — a test, a prerender — is not worth a crash */
    }
  };
  const openStats = () => {
    setView('stats');
    toTop();
  };
  const closeStats = () => {
    setView('book');
    toTop();
  };

  const sealedCityIds = useMemo(
    () => new Set<CityId>(Array.isArray(citiesDone) ? citiesDone : []),
    [citiesDone],
  );
  const sealedCountryIds = useMemo(
    () => new Set<CountryId>(Array.isArray(countriesDone) ? countriesDone : []),
    [countriesDone],
  );

  const stamped = useMemo(
    () =>
      all
        .filter((country) => Boolean(entries?.[country.id]))
        .map((country) => {
          // The lookup is a prop like any other: guarded, not trusted. A caller that
          // renders the passport before its content hook has settled must get a page
          // that says "no city sealed yet", never a TypeError that blanks the screen.
          const cities = typeof citiesOf === 'function' ? citiesOf(country.id) : [];
          return {
            country,
            date: entries?.[country.id] ?? '',
            sealed: sealedCountryIds.has(country.id),
            cities: Array.isArray(cities) ? cities : [],
          };
        }),
    [all, entries, citiesOf, sealedCountryIds],
  );

  const upcoming = useMemo(
    () => all.filter((country) => !entries?.[country.id]),
    [all, entries],
  );

  /** Chunked into pages, because a passport is pages and a scroll of stamps is not. */
  const pages = useMemo(() => {
    const out: (typeof stamped)[] = [];
    for (let i = 0; i < stamped.length; i += PER_PAGE) {
      out.push(stamped.slice(i, i + PER_PAGE));
    }
    return out;
  }, [stamped]);

  const placesCount = Number.isFinite(placesStamped) ? placesStamped : 0;
  const sealedCountryCount = stamped.filter((entry) => entry.sealed).length;

  /**
   * The distribution moment. A tap renders the card on the device and hands it to the OS
   * share sheet. The parent's invite code is fetched only now, only when signed in, and
   * only to print the same `?ref=` link the Account screen already gives out. Decision 2
   * at the top of this file still holds: nothing here awards or stores anything — one
   * PNG, one analytics event carrying three totals and nothing else.
   */
  const { user } = useAuth();
  const [share, setShare] = useState<'idle' | 'busy' | GameShareResult | 'failed'>('idle');
  const onShare = async () => {
    if (share === 'busy') return;
    setShare('busy');
    try {
      let referralCode: string | null = null;
      if (user) {
        try {
          referralCode = (await backendReferral.get()).code;
        } catch {
          referralCode = null; // the card still ships, just without the invite link
        }
      }
      const model = passportCardModel({
        lang,
        flags: stamped.map((entry) => entry.country.flag),
        countries: stamped.length,
        cities: sealedCityIds.size,
        places: placesCount,
        referralCode,
      });
      const how = await sharePassportCard(model);
      trackSharePassport(how, stamped.length, placesCount);
      setShare(how);
    } catch {
      setShare('failed');
    }
  };

  return (
    // `lang` is not decoration: World's language is chosen independently of the app's,
    // so without it Greek text can sit under `<html lang="en">` and CSS uppercasing
    // keeps the tonos. See the note at the top of this file.
    <div ref={rootRef} lang={lang} className="mx-auto w-full max-w-3xl px-4 pb-32 pt-3">
      {/* ── BACK, always visible ── */}
      <div className="sticky top-0 z-30 -mx-4 mb-5 border-b border-white/[0.08] bg-black/60 px-4 py-3 backdrop-blur-xl">
        <button
          type="button"
          onClick={view === 'stats' ? closeStats : onBack}
          className={`inline-flex min-h-[44px] items-center gap-2 ${WORLD_STYLE.ghost}`}
        >
          <ArrowLeft size={18} aria-hidden />
          <span className="text-xs font-black uppercase tracking-widest">{ui(T.back, lang)}</span>
        </button>
      </div>

      {/* ── STATISTICS ── the sibling page. The book below is simply not drawn while
          it is open; nothing is unmounted that holds state worth keeping. */}
      {view === 'stats' && stats && (
        <PassportStatsPage lang={lang} stats={stats} countries={all} cities={cities} />
      )}

      {view === 'book' && (
        <>
          {/* ── COVER ── */}
          <motion.section
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.4 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-5 text-center sm:p-8"
          >
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl"
              aria-hidden
            />

            <p className={WORLD_STYLE.label}>{ui(T.kicker, lang)}</p>

            <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border-2 border-white/20 bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl">
              <Globe size={38} className="text-white" aria-hidden />
            </div>

            <h1 className={`${WORLD_STYLE.display} mt-4 text-3xl uppercase sm:text-4xl`}>
              {ui(S.title, lang)}
            </h1>
            <p className="mt-2 text-sm font-bold italic text-white/50">{ui(S.subtitle, lang)}</p>

            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              <Total
                icon={<Globe size={16} aria-hidden />}
                value={stamped.length}
                label={ui(T.countries, lang)}
              />
              <Total
                icon={<Building2 size={16} aria-hidden />}
                value={sealedCityIds.size}
                label={ui(T.cities, lang)}
              />
              <Total
                icon={<MapPin size={16} aria-hidden />}
                value={placesCount}
                label={ui(T.places, lang)}
              />
            </div>

            <p className="mt-3 text-[11px] font-bold leading-relaxed text-white/40">
              {ui(S.totals, lang)}
            </p>

            {sealedCountryCount > 0 && (
              <p className="mt-2 text-[11px] font-bold leading-relaxed text-emerald-300/80">
                {ui(S.countriesSealed, lang)(sealedCountryCount)}
              </p>
            )}

            {/* ── SHARE ── the card that travels to the parents' group chat. */}
            <div className="mt-6">
              <button
                type="button"
                onClick={onShare}
                disabled={share === 'busy'}
                className={`${WORLD_STYLE.cta} inline-flex min-h-[48px] items-center justify-center gap-2 px-6 text-sm disabled:opacity-70`}
              >
                {share === 'busy' ? (
                  <Loader2 size={16} className="animate-spin" aria-hidden />
                ) : (
                  <Share2 size={16} aria-hidden />
                )}
                {ui(share === 'busy' ? T.sharing : T.share, lang)}
              </button>
              {share !== 'idle' && share !== 'busy' && (
                <p className="mt-2 text-[12px] font-bold leading-relaxed text-white/60" aria-live="polite">
                  {ui(S[share], lang)}
                </p>
              )}
            </div>

            {/* ── STATISTICS ── the quiet second action: how far the child has come. */}
            <div className="mt-3">
              <button
                type="button"
                onClick={openStats}
                className={`inline-flex min-h-[44px] items-center justify-center gap-2 ${WORLD_STYLE.ghost}`}
              >
                <BarChart3 size={16} aria-hidden />
                <span className="text-xs font-black uppercase tracking-widest">
                  {ui(STATS_T.open, lang)}
                </span>
              </button>
            </div>
          </motion.section>

          {/* ── THE PAGES ── */}
          <section className="mt-8">
            <h2 className={`${WORLD_STYLE.label} mb-3 block`}>{ui(T.pages, lang)}</h2>

            {pages.length === 0 ? (
              <div className={`${WORLD_STYLE.card} px-5 py-10 text-center`}>
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-white/15"
                  aria-hidden
                >
                  <Globe size={26} className="text-white/20" />
                </div>
                <p className="mx-auto max-w-sm text-sm font-bold italic leading-relaxed text-white/50">
                  {ui(S.empty, lang)}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {pages.map((page, pageIndex) => (
                  <div
                    key={`page-${pageIndex}`}
                    className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-4 py-6 sm:px-6"
                  >
                    {/* The binding edge: a passport page is perforated, not cut. */}
                    <div
                      className="pointer-events-none absolute inset-y-5 left-2.5 border-l border-dashed border-white/[0.12]"
                      aria-hidden
                    />

                    <div className={`${WORLD_STYLE.label} mb-4 pl-4 block`}>
                      {ui(S.page, lang)(pageIndex + 1)}
                    </div>

                    <ul className="pl-4">
                      {page.map((entry, slot) => (
                        <StampEntry
                          key={entry.country.id}
                          lang={lang}
                          country={entry.country}
                          date={entry.date}
                          sealed={entry.sealed}
                          cities={entry.cities}
                          sealedCityIds={sealedCityIds}
                          slot={slot}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ── THE OLD EXPLORER ── stamps a family earned before World existed. Printed
              as they were written, in date order, and drawn only when there is one. */}
          {legacy.length > 0 && (
            <section className="mt-8">
              <h2 className="flex items-center gap-2 text-sm font-black text-white/80">
                <Stamp size={16} className="shrink-0 text-white/40" aria-hidden />
                <span className="min-w-0">{ui(S.legacyTitle, lang)}</span>
              </h2>
              <p className="mb-3 mt-1 text-[11px] font-bold leading-relaxed text-white/40">
                {ui(S.legacyNote, lang)}
              </p>

              <ul className="space-y-2">
                {legacy.map((stamp) => (
                  <li
                    key={stamp.cityId}
                    className={
                      stamp.stamped
                        ? `flex items-start gap-3 rounded-2xl border px-3 py-3 ${WORLD_STYLE.earned}`
                        : `${WORLD_STYLE.card} flex items-start gap-3 px-3 py-3`
                    }
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xl"
                      aria-hidden
                    >
                      {stamp.emoji}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="min-w-0 truncate text-sm font-black text-white/80">
                          {say(stamp.name, lang)}
                        </span>
                        <span className="shrink-0 text-base leading-none" aria-hidden>
                          {stamp.flag}
                        </span>
                        {stamp.stamped && (
                          <Stamp size={14} className="ml-auto shrink-0 text-emerald-300" aria-hidden />
                        )}
                      </div>

                      <p className="mt-1 text-[11px] font-bold leading-relaxed text-white/45">
                        {ui(S.legacyEnvelopes, lang)(stamp.spotsOpened, stamp.spotCount)}
                      </p>

                      <p
                        className={
                          stamp.stamped
                            ? 'mt-0.5 text-[11px] font-bold leading-relaxed text-emerald-300/80'
                            : 'mt-0.5 text-[11px] font-bold leading-relaxed text-white/40'
                        }
                      >
                        {stamp.stamped
                          ? stamp.stampedAt !== null
                            ? ui(S.legacyStampedOn, lang)(formatIsoDate(legacyDay(stamp.stampedAt), lang))
                            : ui(S.legacyStampedUndated, lang)
                          : ui(S.legacyNoStamp, lang)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── WHAT IS STILL TO COME ── */}
          {upcoming.length > 0 && (
            <section className="mt-8">
              <h2 className={`${WORLD_STYLE.label} mb-1 block`}>{ui(T.blank, lang)}</h2>
              <p className="mb-3 text-[11px] font-bold leading-relaxed text-white/40">
                {ui(S.blankNote, lang)}
              </p>

              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {upcoming.map((country) => (
                  <li
                    key={country.id}
                    className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-3 text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-white/15 text-2xl opacity-40">
                      <span aria-hidden>{country.flag}</span>
                    </div>
                    <div className="mt-2 truncate text-[11px] font-black text-white/40">
                      {say(country.name, lang)}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default StampBook;
