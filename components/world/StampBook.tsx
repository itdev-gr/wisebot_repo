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
 * Content strings come from the data through `say()`. Chrome strings are the local `T`
 * and `S` dictionaries below, read with `ui()`; every sentence is written out whole in
 * both languages rather than assembled from fragments, because Greek and English do not
 * agree on word order.
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

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Award, Building2, Globe, MapPin } from 'lucide-react';
import { PassportStamp } from './PassportStamp';
import { WORLD_STYLE, say, ui } from './worldUi';
import type { City, CityId, Country, CountryId, WorldLang } from '../../data/world/types';

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
  onBack: () => void;
}

// ------------------------------------------------------------------ chrome

/** Short, already-uppercase captions. Safe to render through `WORLD_STYLE.label`. */
const T = {
  back: { el: 'ΠΙΣΩ', en: 'BACK' },
  kicker: { el: 'ΔΙΑΒΑΤΗΡΙΟ ΕΞΕΡΕΥΝΗΤΗ', en: 'EXPLORER PASSPORT' },
  countries: { el: 'ΧΩΡΕΣ', en: 'COUNTRIES' },
  cities: { el: 'ΠΟΛΕΙΣ', en: 'CITIES' },
  places: { el: 'ΜΕΡΗ', en: 'PLACES' },
  pages: { el: 'ΟΙ ΣΕΛΙΔΕΣ ΣΟΥ', en: 'YOUR PAGES' },
  blank: { el: 'ΛΕΥΚΕΣ ΣΕΛΙΔΕΣ', en: 'BLANK PAGES' },
  sealed: { el: 'ΣΦΡΑΓΙΣΜΕΝΗ', en: 'SEALED' },
};

/** Whole sentences and titles. Written twice, never concatenated from pieces. */
const S = {
  title: { el: 'Το βιβλίο των σφραγίδων', en: 'The stamp book' },
  subtitle: {
    el: 'Κάθε χώρα που πάτησες άφησε το μελάνι της εδώ.',
    en: 'Every country you set foot in left its ink here.',
  },
  totals: {
    el: 'Χώρες που μπήκες, πόλεις που σφράγισες, μέρη που είδες.',
    en: 'Countries you entered, cities you sealed, places you visited.',
  },
  empty: {
    el: 'Το διαβατήριό σου είναι ακόμα λευκό. Άνοιξε την πρώτη σου χώρα και πάρε την πρώτη σφραγίδα.',
    en: 'Your passport is still blank. Open your first country and take your first stamp.',
  },
  blankNote: {
    el: 'Αυτές οι σελίδες περιμένουν ακόμα τη σφραγίδα τους.',
    en: 'These pages are still waiting for their stamp.',
  },
  noCityYet: {
    el: 'Καμία πόλη σφραγισμένη ακόμα.',
    en: 'No city sealed yet.',
  },
  wholeCountry: {
    el: 'Ολοκλήρωσες ολόκληρη τη χώρα.',
    en: 'You completed this whole country.',
  },
  page: {
    el: (n: number) => `ΣΕΛΙΔΑ ${n}`,
    en: (n: number) => `PAGE ${n}`,
  },
  sealedCities: {
    el: (n: number, total: number) => `${n} από ${total} πόλεις σφραγισμένες`,
    en: (n: number, total: number) => `${n} of ${total} cities sealed`,
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
  onBack,
}) => {
  // Every list arriving as a prop is guarded: World loads content dynamically, and a
  // country whose module has not landed yet is a real state, not a hypothetical one.
  const all = useMemo(() => (Array.isArray(countries) ? countries : []), [countries]);
  const reduced = useReducedMotion();

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

  return (
    // `lang` is not decoration: World's language is chosen independently of the app's,
    // so without it Greek text can sit under `<html lang="en">` and CSS uppercasing
    // keeps the tonos. See the note at the top of this file.
    <div lang={lang} className="mx-auto w-full max-w-3xl px-4 pb-32 pt-3">
      {/* ── BACK, always visible ── */}
      <div className="sticky top-0 z-30 -mx-4 mb-5 border-b border-white/[0.08] bg-black/60 px-4 py-3 backdrop-blur-xl">
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex min-h-[44px] items-center gap-2 ${WORLD_STYLE.ghost}`}
        >
          <ArrowLeft size={18} aria-hidden />
          <span className="text-xs font-black uppercase tracking-widest">{ui(T.back, lang)}</span>
        </button>
      </div>

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
    </div>
  );
};

export default StampBook;
