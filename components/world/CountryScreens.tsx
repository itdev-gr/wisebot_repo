/**
 * WiseBot World — the two screens that sit above a city.
 *
 *   CountryList  the front door: a passport cover, the stamps already collected, and
 *                every country as a card.
 *   CountryView  one country: its flag, its intro, its facts, its cities — and, once
 *                the child has been let in, the entry stamp in the corner.
 *
 * Both screens are pure navigation. They award nothing, they write nothing, and they
 * never decide that a child has entered a country: `entryDate` arrives as a prop, and
 * its absence simply means no stamp is drawn. Every reward decision in this module
 * lives in `useWorldProgress.ts`, which this file deliberately does not import.
 *
 * Content strings are read with `say()`; chrome strings live in `T` below and are read
 * with `ui()`. Nothing here ever indexes `text[lang]` — four of the six languages are
 * legitimately absent while a city is being translated.
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Building2,
  Check,
  ChevronRight,
  Globe2,
  MapPin,
  Sparkles,
  Stamp,
} from 'lucide-react';
import type { City, CityId, Country, CountryId, LocText, WorldLang } from '../../data/world/types';
import { WORLD_STYLE, say, ui, type UiText } from './worldUi';
import { PassportStamp } from './PassportStamp';

// --------------------------------------------------------------------- chrome
//
// Whole sentences, written once per language. The six disagree about word order, so
// nothing here is assembled from fragments at render time — where a number belongs
// inside a phrase, the phrase is a function and every language spells it out in full,
// singular included. Which word the count inflects differs too: English and Greek
// inflect `cityProgress` on the total, French on how many are already done.
//
// Capitalisation follows the existing el/en of each entry. Most of these render under
// a CSS `uppercase`, so the ones written in sentence case stay in sentence case and
// let the style do the shouting; the ones already written in capitals are matched.

const T = {
  // A proper name, not a string to translate: Greek does not render it 'WISEBOT ΚΟΣΜΟΣ'
  // and none of the other four should either. `ui()` falls back to `en` for all of them.
  brand: { el: 'WISEBOT WORLD', en: 'WISEBOT WORLD' },

  passportTitle: {
    el: 'ΤΟ ΔΙΑΒΑΤΗΡΙΟ ΣΟΥ',
    en: 'YOUR PASSPORT',
    de: 'DEIN REISEPASS',
    fr: 'TON PASSEPORT',
    es: 'TU PASAPORTE',
    it: 'IL TUO PASSAPORTO',
  },
  passportPromise: {
    el: 'Κάθε μέρος που επισκέπτεσαι αφήνει μια σφραγίδα εδώ μέσα. Διάλεξε χώρα και ξεκίνα το ταξίδι.',
    en: 'Every place you visit leaves a stamp inside it. Pick a country and start travelling.',
    de: 'Jeder Ort, den du besuchst, hinterlässt hier einen Stempel. Wähle ein Land und los geht die Reise.',
    fr: 'Chaque endroit que tu visites laisse un tampon à l’intérieur. Choisis un pays et pars en voyage.',
    es: 'Cada lugar que visitas deja un sello dentro. Elige un país y empieza el viaje.',
    it: 'Ogni posto che visiti lascia un timbro qui dentro. Scegli un Paese e parti per il viaggio.',
  },
  stampWord: {
    el: (n: number): string => (n === 1 ? 'ΣΦΡΑΓΙΔΑ' : 'ΣΦΡΑΓΙΔΕΣ'),
    en: (n: number): string => (n === 1 ? 'STAMP' : 'STAMPS'),
    /** Stempel is its own plural, so the count never changes the word. */
    de: (): string => 'STEMPEL',
    fr: (n: number): string => (n === 1 ? 'TAMPON' : 'TAMPONS'),
    es: (n: number): string => (n === 1 ? 'SELLO' : 'SELLOS'),
    it: (n: number): string => (n === 1 ? 'TIMBRO' : 'TIMBRI'),
  },
  openPassport: {
    el: 'ΑΝΟΙΞΕ ΤΟ ΔΙΑΒΑΤΗΡΙΟ',
    en: 'OPEN THE PASSPORT',
    de: 'ÖFFNE DEN REISEPASS',
    fr: 'OUVRE LE PASSEPORT',
    es: 'ABRE EL PASAPORTE',
    it: 'APRI IL PASSAPORTO',
  },

  countriesHeading: {
    el: 'ΟΙ ΧΩΡΕΣ',
    en: 'THE COUNTRIES',
    de: 'DIE LÄNDER',
    fr: 'LES PAYS',
    es: 'LOS PAÍSES',
    it: 'I PAESI',
  },
  citiesHeading: {
    el: 'ΟΙ ΠΟΛΕΙΣ',
    en: 'THE CITIES',
    de: 'DIE STÄDTE',
    fr: 'LES VILLES',
    es: 'LAS CIUDADES',
    it: 'LE CITTÀ',
  },
  factsHeading: {
    el: 'ΚΑΛΟ ΝΑ ΞΕΡΕΙΣ',
    en: 'GOOD TO KNOW',
    de: 'GUT ZU WISSEN',
    fr: 'BON À SAVOIR',
    es: 'BUENO SABERLO',
    it: 'BUONO A SAPERSI',
  },

  cityCount: {
    el: (n: number): string => (n === 1 ? '1 ΠΟΛΗ' : `${n} ΠΟΛΕΙΣ`),
    en: (n: number): string => (n === 1 ? '1 CITY' : `${n} CITIES`),
    de: (n: number): string => (n === 1 ? '1 STADT' : `${n} STÄDTE`),
    /** French keeps the noun singular after zero as well as after one: « 0 ville ». */
    fr: (n: number): string => (n <= 1 ? `${n} VILLE` : `${n} VILLES`),
    es: (n: number): string => (n === 1 ? '1 CIUDAD' : `${n} CIUDADES`),
    /** città is invariable. */
    it: (n: number): string => `${n} CITTÀ`,
  },
  placeCount: {
    el: (n: number): string => (n === 1 ? '1 ΜΕΡΟΣ' : `${n} ΜΕΡΗ`),
    en: (n: number): string => (n === 1 ? '1 PLACE' : `${n} PLACES`),
    de: (n: number): string => (n === 1 ? '1 ORT' : `${n} ORTE`),
    fr: (n: number): string => (n <= 1 ? `${n} ENDROIT` : `${n} ENDROITS`),
    es: (n: number): string => (n === 1 ? '1 LUGAR' : `${n} LUGARES`),
    it: (n: number): string => (n === 1 ? '1 POSTO' : `${n} POSTI`),
  },

  // Only ever drawn on a country card, so the French and Italian participles may agree
  // with « pays » / «Paese» and stay masculine.
  visited: {
    el: 'ΗΣΟΥΝ ΕΔΩ',
    en: 'BEEN HERE',
    de: 'DU WARST HIER',
    fr: 'DÉJÀ VISITÉ',
    es: 'ESTUVISTE AQUÍ',
    it: 'GIÀ VISITATO',
  },
  // This one is drawn on both a country card and a city card, so nothing here may carry
  // gender: a participle agreeing with « pays » would be wrong on « ville ».
  completed: {
    el: 'ΟΛΟΚΛΗΡΩΘΗΚΕ',
    en: 'ALL DONE',
    de: 'GESCHAFFT',
    fr: 'TOUT FINI',
    es: 'TODO HECHO',
    it: 'TUTTO FATTO',
  },
  soon: {
    el: 'ΕΡΧΕΤΑΙ ΣΥΝΤΟΜΑ',
    en: 'COMING SOON',
    de: 'KOMMT BALD',
    fr: 'ARRIVE BIENTÔT',
    es: 'MUY PRONTO',
    it: 'ARRIVA PRESTO',
  },
  // A country whose cities still live on the older Explorer engine. They are shown,
  // honestly labelled, rather than hidden — hiding them would take fourteen countries
  // off the map; showing them unlabelled would be a lie the first tap exposes.
  elsewhereTitle: {
    el: 'ΠΡΟΣΩΡΙΝΑ ΣΤΟΝ ΠΑΛΙΟ ΕΞΕΡΕΥΝΗΤΗ',
    en: 'FOR NOW ON THE OLD EXPLORER',
    de: 'VORERST IM ALTEN EXPLORER',
    fr: 'POUR L’INSTANT SUR L’ANCIEN EXPLORER',
    es: 'POR AHORA EN EL EXPLORER ANTIGUO',
    it: 'PER ORA NEL VECCHIO EXPLORER',
  },
  elsewhereBody: {
    el: 'Αυτές οι πόλεις υπάρχουν ήδη ως κυνήγι θησαυρού με GPS. Μεταφέρονται μία μία στο WiseBot World, με ελεγμένα σημεία, μουσεία και αινίγματα.',
    en: 'These cities already exist as a GPS treasure hunt. They are moving into WiseBot World one by one, with checked pins, museums and riddles.',
    de: 'Diese Städte gibt es schon als GPS-Schatzsuche. Sie ziehen eine nach der anderen in WiseBot World um, mit geprüften Orten, Museen und Rätseln.',
    fr: 'Ces villes existent déjà en chasse au trésor GPS. Elles rejoignent WiseBot World une par une, avec des lieux vérifiés, des musées et des énigmes.',
    es: 'Estas ciudades ya existen como búsqueda del tesoro con GPS. Pasan a WiseBot World una a una, con lugares comprobados, museos y acertijos.',
    it: 'Queste città esistono già come caccia al tesoro con GPS. Passano in WiseBot World una alla volta, con luoghi verificati, musei e indovinelli.',
  },

  cityProgress: {
    el: (done: number, total: number): string =>
      total === 1 ? `${done} από 1 σφραγίδα` : `${done} από ${total} σφραγίδες`,
    en: (done: number, total: number): string =>
      total === 1 ? `${done} of 1 stamp` : `${done} of ${total} stamps`,
    /** German counts in the dative: von 1 Stempel, von 5 Stempeln. */
    de: (done: number, total: number): string =>
      total === 1 ? `${done} von 1 Stempel` : `${done} von ${total} Stempeln`,
    /** French puts the noun beside `done`, not `total`: 1 tampon sur 5, 3 tampons sur 5. */
    fr: (done: number, total: number): string =>
      done <= 1 ? `${done} tampon sur ${total}` : `${done} tampons sur ${total}`,
    es: (done: number, total: number): string =>
      total === 1 ? `${done} de 1 sello` : `${done} de ${total} sellos`,
    it: (done: number, total: number): string =>
      total === 1 ? `${done} di 1 timbro` : `${done} di ${total} timbri`,
  },

  back: {
    el: 'ΠΙΣΩ ΣΤΙΣ ΧΩΡΕΣ',
    en: 'BACK TO COUNTRIES',
    de: 'ZURÜCK ZU DEN LÄNDERN',
    fr: 'RETOUR AUX PAYS',
    es: 'VOLVER A LOS PAÍSES',
    it: 'TORNA AI PAESI',
  },

  emptyCountriesTitle: {
    el: 'Ο κόσμος ετοιμάζεται',
    en: 'The world is being made',
    de: 'Die Welt entsteht gerade',
    fr: 'Le monde se construit',
    es: 'El mundo se está creando',
    it: 'Il mondo si sta creando',
  },
  emptyCountriesText: {
    el: 'Οι πρώτες χώρες γράφονται αυτή τη στιγμή, μία πόλη τη φορά. Πέρνα ξανά σε λίγες μέρες και θα σε περιμένει η πρώτη σου σφραγίδα.',
    en: 'The first countries are being written right now, one city at a time. Come back in a few days and your first stamp will be waiting for you.',
    de: 'Die ersten Länder werden gerade geschrieben, eine Stadt nach der anderen. Komm in ein paar Tagen wieder, dann wartet hier dein erster Stempel auf dich.',
    fr: 'Les premiers pays s’écrivent en ce moment, une ville après l’autre. Reviens dans quelques jours et ton premier tampon t’attendra.',
    es: 'Los primeros países se están escribiendo ahora mismo, una ciudad cada vez. Vuelve dentro de unos días y tu primer sello te estará esperando.',
    it: 'I primi Paesi si stanno scrivendo proprio ora, una città alla volta. Torna tra qualche giorno e il tuo primo timbro ti starà aspettando.',
  },
  emptyCitiesTitle: {
    el: 'Καμία πόλη ακόμα',
    en: 'No cities yet',
    de: 'Noch keine Städte',
    fr: 'Pas encore de villes',
    es: 'Todavía no hay ciudades',
    it: 'Ancora nessuna città',
  },
  emptyCitiesText: {
    el: 'Αυτή η χώρα δεν έχει ανοίξει ακόμα τις πόλεις της. Η σφραγίδα της εισόδου είναι ήδη δική σου — γύρνα πίσω και διάλεξε αλλού για σήμερα.',
    en: 'This country has not opened its cities yet. The entry stamp is already yours — go back and pick somewhere else for today.',
    de: 'Dieses Land hat seine Städte noch nicht geöffnet. Der Stempel für die Einreise gehört dir schon — geh zurück und such dir für heute ein anderes Land aus.',
    fr: 'Ce pays n’a pas encore ouvert ses villes. Le tampon d’entrée est déjà à toi — reviens en arrière et choisis un autre endroit pour aujourd’hui.',
    es: 'Este país aún no ha abierto sus ciudades. El sello de entrada ya es tuyo — vuelve atrás y elige otro sitio por hoy.',
    it: 'Questo Paese non ha ancora aperto le sue città. Il timbro d’ingresso è già tuo — torna indietro e scegli un altro posto per oggi.',
  },
} satisfies Record<string, UiText<string> | UiText<(...args: never[]) => string>>;

// ---------------------------------------------------------------------- bits

/**
 * A state badge. A `<span>` rather than a `<div>` because every one of these sits inside
 * a `<button>`, which may only contain phrasing content. Both tones are written out as
 * whole literal class strings, because Tailwind's scanner only sees literals.
 */
const StateChip: React.FC<{ tone: 'earned' | 'visited'; icon: React.ReactNode; text: string }> = ({
  tone,
  icon,
  text,
}) => (
  <span
    className={
      tone === 'earned'
        ? 'inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-300'
        : 'inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-amber-300'
    }
  >
    {icon}
    {text}
  </span>
);

/**
 * The three states a tappable card can be in, each a whole literal class string.
 *
 * Deliberately NOT `${WORLD_STYLE.cardTap} ${WORLD_STYLE.earned}`. Both tokens set
 * `background-color` and `border-color`, the two classes have equal specificity, and
 * Tailwind emits `bg-white/[0.04]` AFTER `bg-emerald-400/[0.08]` — an arbitrary opacity
 * modifier sorts behind a named one — so the white wins and the earned colour never
 * appears at all. `cardTap`'s `hover:bg-white/[0.07]` would then paint over it a second
 * time. Everywhere else in the module (`StampBook`, `PlaceCard`) `WORLD_STYLE.earned`
 * is paired with a bare `border` and no competing background, which is what happens
 * here: the base carries the shape, the tone carries every colour it needs including
 * its own hover.
 */
const CARD_BASE =
  'flex w-full flex-col gap-3 rounded-2xl border p-4 text-left transition-all active:scale-[0.99]';
const CARD_PLAIN =
  'border-white/[0.08] bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]';
const CARD_EARNED = `${WORLD_STYLE.earned} hover:border-emerald-400/60 hover:bg-emerald-400/[0.12]`;

/** Warm, not blank: content still being written is a real state, not an error. */
const EmptyState: React.FC<{ emoji: string; title: string; text: string }> = ({
  emoji,
  title,
  text,
}) => (
  <div className={`${WORLD_STYLE.card} p-6 text-center`}>
    <div className="text-4xl" role="img" aria-hidden>
      {emoji}
    </div>
    <h3 className="mt-3 text-base font-[1000] italic tracking-tight text-white">{title}</h3>
    <p className={`${WORLD_STYLE.body} mx-auto mt-2 max-w-md text-sm`}>{text}</p>
  </div>
);

// ----------------------------------------------------------------- the world

export interface CountryListItem {
  country: Country;
  cityCount: number;
  placeCount: number;
  entered: boolean;
  done: boolean;
}

interface CountryListProps {
  lang: WorldLang;
  items: CountryListItem[];
  stampsCollected: number;
  onOpenCountry: (id: CountryId) => void;
  onOpenPassport: () => void;
}

export const CountryList: React.FC<CountryListProps> = ({
  lang,
  items,
  stampsCollected,
  onOpenCountry,
  onOpenPassport,
}) => {
  const list = items ?? [];
  const stamps = Math.max(0, stampsCollected || 0);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-28 pt-6">
      {/* ── THE COVER ─────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 text-center sm:p-9"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-3xl" />

        {/* Written out rather than `${WORLD_STYLE.label} tracking-[0.3em]`: the token
            already carries `tracking-widest`, which Tailwind emits after the arbitrary
            value, so the wider passport-cover tracking would silently lose. */}
        <p className="relative text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
          {ui(T.brand, lang)}
        </p>

        <div className="relative mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border-2 border-white/20 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
          <Globe2 size={40} className="text-white" aria-hidden />
        </div>

        <h1 className={`${WORLD_STYLE.display} relative mt-4 text-3xl uppercase sm:text-4xl`}>
          {ui(T.passportTitle, lang)}
        </h1>
        <p className={`${WORLD_STYLE.body} relative mx-auto mt-3 max-w-md text-sm font-bold`}>
          {ui(T.passportPromise, lang)}
        </p>

        <div className="relative mt-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Stamp size={28} className="text-amber-300" aria-hidden />
            <div className="text-left">
              <div className={`${WORLD_STYLE.display} text-4xl`}>{stamps}</div>
              <div className={`${WORLD_STYLE.label} mt-1`}>{ui(T.stampWord, lang)(stamps)}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenPassport}
            className={`${WORLD_STYLE.cta} inline-flex min-h-[48px] items-center gap-2 text-sm`}
          >
            <Sparkles size={16} aria-hidden />
            {ui(T.openPassport, lang)}
            <ChevronRight size={16} aria-hidden />
          </button>
        </div>
      </motion.header>

      {/* ── THE COUNTRIES ─────────────────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-white/50">
          {ui(T.countriesHeading, lang)}
        </h2>

        {list.length === 0 ? (
          <EmptyState
            emoji="🧭"
            title={ui(T.emptyCountriesTitle, lang)}
            text={ui(T.emptyCountriesText, lang)}
          />
        ) : (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((item, index) => {
              const country = item.country;
              const cities = Math.max(0, item.cityCount || 0);
              const places = Math.max(0, item.placeCount || 0);

              return (
                <motion.li
                  key={country.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.04, 0.32) }}
                >
                  <button
                    type="button"
                    onClick={() => onOpenCountry(country.id)}
                    className={
                      item.done
                        ? `${CARD_BASE} ${CARD_EARNED}`
                        : item.entered
                          ? `${CARD_BASE} ${CARD_PLAIN} ring-1 ring-amber-400/25`
                          : `${CARD_BASE} ${CARD_PLAIN}`
                    }
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-2xl"
                        role="img"
                        aria-hidden
                      >
                        {country.flag}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-base font-[1000] italic tracking-tight text-white">
                          {say(country.name, lang)}
                        </span>
                      </span>
                      <ChevronRight size={20} className="shrink-0 text-white/30" aria-hidden />
                    </span>

                    <span className="flex flex-wrap items-center gap-2">
                      {cities === 0 ? (
                        /* An open country whose cities have not arrived: the flag, the
                           intro and the entry stamp are real, «0 ΠΟΛΕΙΣ» would read as broken. */
                        <span className={WORLD_STYLE.chip}>
                          <Sparkles size={12} className="text-amber-300" aria-hidden />
                          {ui(T.soon, lang)}
                        </span>
                      ) : (
                        <>
                          <span className={WORLD_STYLE.chip}>
                            <Building2 size={12} aria-hidden />
                            {ui(T.cityCount, lang)(cities)}
                          </span>
                          <span className={WORLD_STYLE.chip}>
                            <MapPin size={12} aria-hidden />
                            {ui(T.placeCount, lang)(places)}
                          </span>
                        </>
                      )}
                      {item.done ? (
                        <StateChip
                          tone="earned"
                          icon={<Check size={12} aria-hidden />}
                          text={ui(T.completed, lang)}
                        />
                      ) : item.entered ? (
                        <StateChip
                          tone="visited"
                          icon={<Stamp size={12} aria-hidden />}
                          text={ui(T.visited, lang)}
                        />
                      ) : null}
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};

// --------------------------------------------------------------- one country

export interface CountryCityItem {
  city: City;
  placeCount: number;
  stamped: number;
}

/** A city of this country that still lives on the older Explorer engine. */
export interface LegacyCity {
  id: string;
  name: LocText;
  emoji: string;
  spotCount: number;
}

interface CountryViewProps {
  lang: WorldLang;
  country: Country;
  entryDate?: string;
  /**
   * The entry stamp is earned by being in the country, not by opening its page. When it
   * has not been earned yet, this is the button that asks the phone. Every string and
   * every decision arrives ready-made: this file has never been allowed to decide that a
   * child has entered a country and still is not.
   */
  entry?: {
    label: string;
    askingLabel: string;
    note: string;
    /**
     * A second, smaller line under the note, for the grown-up: where the location
     * switch is on this phone, when the phone will not even ask. Absent otherwise.
     */
    hint?: string;
    asking: boolean;
    onAsk: () => void;
  };
  cities: CountryCityItem[];
  /**
   * Shown only while the country has no World city yet: the Explorer's cities for it,
   * honestly labelled, so «France» opens Paris today instead of an empty page.
   */
  legacyCities?: LegacyCity[];
  onOpenCity: (id: CityId) => void;
  /** Opens a city on the old engine, e.g. `/explore?city=paris`. */
  onOpenLegacy?: (cityId: string) => void;
  onBack: () => void;
}

export const CountryView: React.FC<CountryViewProps> = ({
  lang,
  country,
  entryDate,
  entry,
  cities,
  legacyCities = [],
  onOpenCity,
  onOpenLegacy,
  onBack,
}) => {
  const list = cities ?? [];
  const facts = country.facts ?? [];

  return (
    <div className="mx-auto max-w-4xl px-4 pb-28 pt-4">
      {/* The way out is the first thing on the screen and never scrolls away behind
          anything: a real button, 44px tall, with a word next to the arrow. */}
      <button
        type="button"
        onClick={onBack}
        className={`${WORLD_STYLE.ghost} mb-4 inline-flex min-h-[44px] items-center gap-2 text-xs uppercase tracking-widest`}
      >
        <ArrowLeft size={16} aria-hidden />
        {ui(T.back, lang)}
      </button>

      {/* ── THE COUNTRY ───────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-3xl sm:h-16 sm:w-16 sm:text-4xl"
              role="img"
              aria-hidden
            >
              {country.flag}
            </span>
            {/* `break-words` as in `CityView`: at 360px the 96px stamp leaves this about
                a hundred pixels, and a long unbroken country name would otherwise run
                under the stamp and be cut off by the header's `overflow-hidden`. */}
            <h1
              className={`${WORLD_STYLE.display} min-w-0 break-words text-2xl uppercase sm:text-4xl`}
            >
              {say(country.name, lang)}
            </h1>
          </div>

          {/* No entry date means the child has not been let in yet. Nothing is drawn and
              nothing is awarded — entering is the caller's decision, never this screen's. */}
          {/* The tilt is NOT set here, exactly as in `StampBook`: `PassportStamp` rotates
              its own artwork inside a padded viewBox and keeps its layout box square, and
              the angle is seeded from `country.id` so the same country is always inked at
              the same angle. An outer `rotate-[-6deg]` would tilt it a second time and
              swing the corners out of a box that was only padded for the inner rotation —
              straight into this header's `overflow-hidden`. */}
          {entryDate ? (
            <PassportStamp country={country} date={entryDate} size={96} />
          ) : null}
        </div>

        {/* No stamp yet: offer the one thing that earns it. This component still decides
            nothing — it calls back and prints whatever sentence it is handed. */}
        {!entryDate && entry && (
          <div className="mt-5 rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] p-4">
            <button
              type="button"
              onClick={entry.onAsk}
              disabled={entry.asking}
              className={`${WORLD_STYLE.cta} inline-flex min-h-[48px] w-full items-center justify-center gap-2 text-sm disabled:opacity-70`}
            >
              <MapPin size={16} aria-hidden />
              {entry.asking ? entry.askingLabel : entry.label}
            </button>
            <p className="mt-2 text-sm font-bold text-white/60" aria-live="polite">
              {entry.note}
            </p>
            {entry.hint && (
              <p className="mt-1.5 break-words text-xs font-bold leading-relaxed text-amber-200/70">{entry.hint}</p>
            )}
          </div>
        )}

        <p className={`${WORLD_STYLE.body} mt-5 text-sm sm:text-base`}>{say(country.intro, lang)}</p>

        {facts.length > 0 && (
          <div className="mt-5">
            <p className={WORLD_STYLE.label}>{ui(T.factsHeading, lang)}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {facts.map((fact, index) => (
                <span key={index} className={WORLD_STYLE.chip}>
                  <Sparkles size={12} className="text-amber-300" aria-hidden />
                  {say(fact, lang)}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.header>

      {/* ── THE CITIES ────────────────────────────────────────────────────── */}
      <section className="mt-10">
        <h2 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-white/50">
          {ui(T.citiesHeading, lang)}
        </h2>

        {list.length === 0 && legacyCities.length > 0 ? (
          <div className={`${WORLD_STYLE.card} p-5`}>
            <h3 className={`${WORLD_STYLE.label} mb-2`}>{ui(T.elsewhereTitle, lang)}</h3>
            <p className={`${WORLD_STYLE.body} mb-4 max-w-2xl text-sm`}>{ui(T.elsewhereBody, lang)}</p>
            <ul className="flex flex-wrap gap-2">
              {legacyCities.map((city) => (
                <li key={city.id}>
                  <button
                    type="button"
                    onClick={() => onOpenLegacy?.(city.id)}
                    className={`${WORLD_STYLE.chip} min-h-[44px] transition-colors hover:bg-white/[0.12]`}
                  >
                    <span role="img" aria-hidden="true">{city.emoji}</span>
                    {say(city.name, lang)}
                    <span className="text-white/35">{city.spotCount}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : list.length === 0 ? (
          <EmptyState
            emoji="🗺️"
            title={ui(T.emptyCitiesTitle, lang)}
            text={ui(T.emptyCitiesText, lang)}
          />
        ) : (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {list.map((entry, index) => {
              const city = entry.city;
              const total = Math.max(0, entry.placeCount || 0);
              const done = Math.min(Math.max(0, entry.stamped || 0), total);
              const complete = total > 0 && done >= total;
              const pct = total > 0 ? Math.round((done / total) * 100) : 0;

              return (
                <motion.li
                  key={city.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.04, 0.32) }}
                >
                  <button
                    type="button"
                    onClick={() => onOpenCity(city.id)}
                    className={complete ? `${CARD_BASE} ${CARD_EARNED}` : `${CARD_BASE} ${CARD_PLAIN}`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-2xl"
                        role="img"
                        aria-hidden
                      >
                        {city.emoji}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-base font-[1000] italic tracking-tight text-white">
                          {say(city.name, lang)}
                        </span>
                        {/* No `block` here: `line-clamp-2` sets `display:-webkit-box`,
                            Tailwind emits `.block` after it, and a plain `display:block`
                            makes `-webkit-line-clamp` inert — which would drop the city's
                            whole 60–100 word intro into the card. */}
                        <span className={`${WORLD_STYLE.body} mt-0.5 line-clamp-2 text-xs`}>
                          {say(city.intro, lang)}
                        </span>
                      </span>
                      <ChevronRight size={20} className="shrink-0 text-white/30" aria-hidden />
                    </span>

                    {total === 0 ? (
                      <span className={WORLD_STYLE.chip}>
                        <Sparkles size={12} className="text-amber-300" aria-hidden />
                        {ui(T.soon, lang)}
                      </span>
                    ) : (
                      <span className="block">
                        <span className="block h-2 overflow-hidden rounded-full border border-white/10 bg-white/10">
                          <span
                            className="block h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </span>
                        <span className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                            {ui(T.cityProgress, lang)(done, total)}
                          </span>
                          {complete && (
                            <StateChip
                              tone="earned"
                              icon={<Check size={12} aria-hidden />}
                              text={ui(T.completed, lang)}
                            />
                          )}
                        </span>
                      </span>
                    )}
                  </button>
                </motion.li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};
