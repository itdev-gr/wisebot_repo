/**
 * WiseBot World — one city.
 * =========================
 * The illustrated map, the trails, and the full list of places. Three rules shape this
 * screen and are worth stating before the code:
 *
 *  1. **The list is the navigation; the map is the delight.** Artwork arrives city by
 *     city and a place may have no `location.map` at all. Every place therefore appears
 *     in the list below, whether or not it can be pinned — an unpinned place that only
 *     lived on the map would be unreachable.
 *  2. **A missing asset never breaks the screen.** The map's aspect ratio is reserved
 *     from `city.map.width/height` so nothing shifts as the SVG lands, and a failed load
 *     falls back to a plain panel with the pins still on top of it.
 *  3. **Nothing here awards anything.** `onOpenPlace` is navigation, fired from a tap.
 *     Every reward decision lives in `useWorldProgress`, which this file does not import.
 *
 * `location.lat`/`lng` are never rendered: a child is shown a picture of their city, not
 * a coordinate pair.
 */

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ChevronRight, Compass, DoorOpen, Footprints, MapPin } from 'lucide-react';
import type { City, Country, Place, PlaceId, Trail, WorldLang } from '../../data/world/types';
import type { UiText } from './worldUi';
import { CATEGORY_LABEL, CATEGORY_STYLE, WORLD_STYLE, say, ui } from './worldUi';

export interface CityViewProps {
  lang: WorldLang;
  city: City;
  country: Country;
  places: Place[];
  trails: Trail[];
  isStamped: (placeId: PlaceId) => boolean;
  onOpenPlace: (placeId: PlaceId) => void;
  onBack: () => void;
}

// ------------------------------------------------------------------- chrome

/**
 * Buttons, headings and empty states. Content is read with `say()`; this is the other
 * half — written out as whole sentences twice, never assembled from fragments, because
 * Greek and English disagree about where the pieces go.
 */
interface Chrome {
  back: string;
  stamps: string;
  progress: (done: number, total: number) => string;
  allDone: string;
  mapTitle: string;
  mapHint: string;
  mapPending: string;
  mapAlt: string;
  offMap: string;
  trailsTitle: string;
  trailsNote: string;
  ratio: (done: number, total: number) => string;
  trailStart: string;
  trailContinue: string;
  trailDone: string;
  placesTitle: string;
  stamped: string;
  inside: string;
  goTo: (name: string) => string;
  goToDone: (name: string) => string;
  empty: string;
}

const T: UiText<Chrome> = {
  el: {
    back: 'ΠΙΣΩ ΣΤΗ ΧΩΡΑ',
    stamps: 'ΣΦΡΑΓΙΔΕΣ',
    progress: (done, total) => `Μάζεψες ${done} από ${total} σφραγίδες σε αυτή την πόλη.`,
    allDone: 'Τις μάζεψες όλες! Αυτή η πόλη είναι δική σου.',
    mapTitle: 'Ο ΧΑΡΤΗΣ',
    mapHint: 'Πάτα ένα σημάδι για να πας σε εκείνο το μέρος.',
    mapPending: 'Ο ζωγραφιστός χάρτης δεν είναι έτοιμος ακόμα, αλλά τα σημάδια δουλεύουν.',
    mapAlt: 'Ζωγραφιστός χάρτης της πόλης.',
    offMap: 'Κάποια μέρη δεν έχουν μπει ακόμα στον χάρτη. Θα τα βρεις όλα στη λίστα πιο κάτω.',
    trailsTitle: 'ΔΙΑΔΡΟΜΕΣ',
    trailsNote: 'Οι διαδρομές είναι ιδέες, όχι κανόνες. Πήγαινε όπου θέλεις.',
    ratio: (done, total) => `${done} από ${total}`,
    trailStart: 'ΞΕΚΙΝΑ ΤΗ ΔΙΑΔΡΟΜΗ',
    trailContinue: 'ΣΥΝΕΧΙΣΕ ΤΗ ΔΙΑΔΡΟΜΗ',
    trailDone: 'ΤΗΝ ΕΚΑΝΕΣ ΟΛΗ',
    placesTitle: 'ΤΑ ΜΕΡΗ',
    stamped: 'ΣΦΡΑΓΙΣΜΕΝΟ',
    inside: 'ΜΠΑΙΝΕΙΣ ΜΕΣΑ',
    goTo: (name) => `Πήγαινε: ${name}`,
    goToDone: (name) => `Πήγαινε: ${name}. Έχεις ήδη τη σφραγίδα.`,
    empty: 'Αυτή η πόλη γράφεται ακόμα. Γύρνα σε λίγες μέρες και θα σε περιμένει!',
  },
  en: {
    back: 'BACK TO THE COUNTRY',
    stamps: 'STAMPS',
    progress: (done, total) => `You collected ${done} of ${total} stamps in this city.`,
    allDone: 'You collected them all! This city is yours.',
    mapTitle: 'THE MAP',
    mapHint: 'Tap a marker to go to that place.',
    mapPending: 'The drawn map is not ready yet, but the markers still work.',
    mapAlt: 'A drawn map of the city.',
    offMap: 'Some places are not on the map yet. You will find all of them in the list below.',
    trailsTitle: 'TRAILS',
    trailsNote: 'Trails are ideas, not rules. Go wherever you like.',
    ratio: (done, total) => `${done} of ${total}`,
    trailStart: 'START THE TRAIL',
    trailContinue: 'CONTINUE THE TRAIL',
    trailDone: 'YOU FINISHED IT',
    placesTitle: 'THE PLACES',
    stamped: 'STAMPED',
    inside: 'GO INSIDE',
    goTo: (name) => `Go to: ${name}`,
    goToDone: (name) => `Go to: ${name}. You already have the stamp.`,
    empty: 'This city is still being written. Come back in a few days and it will be waiting!',
  },
};

// -------------------------------------------------------------------- bits

/**
 * Half the pin (`w-11` = 44px) plus the 4px its "stamped" badge sticks out past the
 * corner. Positions are inset by this much in CSS, so an edge pin is never half-eaten
 * by the container's `overflow-hidden` at ANY width — a percentage clamp cannot do
 * that, because 5% of a 343px phone is 17px and the pin needs 26.
 */
const PIN_INSET = '26px';

/** Only sanity: a usable 0–1 fraction. The pixel edge is handled in CSS, below. */
const clampPin = (n: number): number => (Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 0.5);

/** `left`/`top` for a pin: its fraction of the artwork, held clear of both edges. */
const pinOffset = (fraction: number): string =>
  `clamp(${PIN_INSET}, ${(fraction * 100).toFixed(3)}%, calc(100% - ${PIN_INSET}))`;

/** A place is pinned only when it carries a usable `location.map`. Both fields optional. */
const pinOf = (place: Place): { x: number; y: number } | null => {
  const spot = place.location?.map;
  if (!spot || !Number.isFinite(spot.x) || !Number.isFinite(spot.y)) return null;
  return { x: clampPin(spot.x), y: clampPin(spot.y) };
};

const percent = (done: number, total: number): number =>
  total > 0 ? Math.min(100, Math.max(0, Math.round((done / total) * 100))) : 0;

const Bar: React.FC<{ pct: number; tone: 'emerald' | 'blue' }> = ({ pct, tone }) => (
  <div className="h-2 rounded-full bg-white/10 border border-white/10 overflow-hidden" aria-hidden="true">
    <div
      className={
        tone === 'emerald'
          ? 'h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-700'
          : 'h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700'
      }
      style={{ width: `${pct}%` }}
    />
  </div>
);

const SectionTitle: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <h2 className="flex items-center gap-2 text-xs font-black text-white/50 uppercase tracking-[0.25em] mb-3">
    {icon}
    {children}
  </h2>
);

// --------------------------------------------------------------------- pin

const Pin: React.FC<{
  place: Place;
  spot: { x: number; y: number };
  index: number;
  stamped: boolean;
  label: string;
  onOpen: () => void;
}> = ({ place, spot, index, stamped, label, onOpen }) => (
  /*
   * Two elements on purpose. Placement (`left`/`top`) and centring (`-translate-*`)
   * live on this PLAIN div; only the entry spring and the tap live on the button
   * inside it.
   *
   * They cannot share an element: Tailwind's `-translate-x-1/2` is a `transform`
   * declaration in a class, Framer Motion writes `style.transform` for `scale`, and
   * an inline transform beats a class every time. Put both on one node and the
   * centring is silently dropped the moment the spring runs — every pin then hangs
   * from its top-left corner, 22px down and right of the place it marks.
   */
  <div
    className="absolute w-11 h-11 -translate-x-1/2 -translate-y-1/2"
    style={{ left: pinOffset(spot.x), top: pinOffset(spot.y) }}
  >
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={label}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: Math.min(index * 0.05, 0.5), type: 'spring', stiffness: 320, damping: 22 }}
      whileTap={{ scale: 0.9 }}
      className={
        stamped
          ? 'relative w-full h-full rounded-full flex items-center justify-center text-xl bg-emerald-500/30 border-2 border-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.55)] backdrop-blur-sm'
          : 'relative w-full h-full rounded-full flex items-center justify-center text-xl bg-[#0B0F1A]/80 border-2 border-white/50 shadow-lg backdrop-blur-sm hover:border-white'
      }
    >
      <span aria-hidden="true">{place.emoji || '📍'}</span>
      {stamped && (
        <span
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center"
          aria-hidden="true"
        >
          <Check size={12} strokeWidth={4} className="text-[#0B0F1A]" />
        </span>
      )}
    </motion.button>
  </div>
);

// ------------------------------------------------------------------- trail

const TrailCard: React.FC<{
  trail: Trail;
  lang: WorldLang;
  t: Chrome;
  /** The ids this city actually ships. A trail is content and can name a typo. */
  knownIds: ReadonlySet<PlaceId>;
  isStamped: (placeId: PlaceId) => boolean;
  onOpenPlace: (placeId: PlaceId) => void;
}> = ({ trail, lang, t, knownIds, isStamped, onOpenPlace }) => {
  /*
   * A trail's `placeIds` are hand-written in a different file from the places they
   * name, so one of them can be a typo or a place that was cut. Left unchecked that
   * costs twice: the denominator counts a stop that can never be stamped, so the
   * trail reads "2 of 3" forever, and a tap navigates to a route with no place
   * behind it. Trust only ids this city really has.
   */
  const ids = (trail.placeIds ?? []).filter((id) => knownIds.has(id));
  const done = ids.filter((id) => isStamped(id)).length;
  const total = ids.length;
  const complete = total > 0 && done === total;
  // Where a tap goes: the first stop still missing its stamp, else back to the start.
  const target = ids.find((id) => !isStamped(id)) ?? ids[0];
  const cta = complete ? t.trailDone : done > 0 ? t.trailContinue : t.trailStart;

  const inner = (
    <>
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-2xl shrink-0">
          <span aria-hidden="true">{trail.emoji || '🧭'}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-white font-black text-base leading-tight break-words">{say(trail.name, lang)}</div>
          <p className="text-white/50 text-sm font-bold italic mt-1 break-words">{say(trail.promise, lang)}</p>
        </div>
      </div>

      {total > 0 && (
        <div className="mt-3">
          <Bar pct={percent(done, total)} tone="blue" />
          <div className="flex items-center justify-between gap-2 mt-2">
            <span className={WORLD_STYLE.label}>{t.ratio(done, total)}</span>
            <span
              className={
                complete
                  ? 'inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-emerald-300'
                  : 'inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-blue-300'
              }
            >
              {cta}
              <ChevronRight size={12} aria-hidden="true" />
            </span>
          </div>
        </div>
      )}
    </>
  );

  if (!target) {
    return <div className={`${WORLD_STYLE.card} p-4`}>{inner}</div>;
  }

  return (
    <button
      type="button"
      onClick={() => onOpenPlace(target)}
      className={
        complete
          ? 'w-full text-left p-4 bg-emerald-400/[0.08] border border-emerald-400/40 rounded-2xl hover:bg-emerald-400/[0.12] active:scale-[0.99] transition-all'
          : `w-full text-left p-4 ${WORLD_STYLE.cardTap}`
      }
    >
      {inner}
    </button>
  );
};

// -------------------------------------------------------------------- place

const PlaceRow: React.FC<{
  place: Place;
  lang: WorldLang;
  t: Chrome;
  stamped: boolean;
  onOpen: () => void;
}> = ({ place, lang, t, stamped, onOpen }) => {
  const name = say(place.name, lang);
  const category = place.category ?? '';
  const categoryStyle = CATEGORY_STYLE[category];
  const categoryLabel = CATEGORY_LABEL[category];
  const hasMuseum = Boolean(place.museum?.rooms?.length);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={stamped ? t.goToDone(name) : t.goTo(name)}
      className={
        stamped
          ? 'w-full text-left p-3.5 flex items-start gap-3 bg-emerald-400/[0.08] border border-emerald-400/40 rounded-2xl hover:bg-emerald-400/[0.12] active:scale-[0.99] transition-all'
          : `w-full text-left p-3.5 flex items-start gap-3 ${WORLD_STYLE.cardTap}`
      }
    >
      <div
        className={
          stamped
            ? 'w-14 h-14 rounded-2xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-3xl shrink-0'
            : 'w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-3xl shrink-0'
        }
      >
        <span aria-hidden="true">{place.emoji || '📍'}</span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-white font-black text-base leading-tight break-words">{name}</div>
        <p className="text-white/50 text-sm font-bold italic mt-0.5 break-words">{say(place.tagline, lang)}</p>

        <div className="flex items-center gap-1.5 flex-wrap mt-2">
          {categoryLabel && (
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-widest ${
                categoryStyle ?? 'bg-white/[0.06] text-white/60 border-white/15'
              }`}
            >
              {ui(categoryLabel, lang)}
            </span>
          )}
          {hasMuseum && (
            <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-violet-300">
              <DoorOpen size={11} aria-hidden="true" />
              {t.inside}
            </span>
          )}
          {stamped && (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-400/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-300">
              <Check size={11} strokeWidth={3.5} aria-hidden="true" />
              {t.stamped}
            </span>
          )}
        </div>
      </div>

      <ChevronRight size={18} className="text-white/25 shrink-0 mt-4" aria-hidden="true" />
    </button>
  );
};

// --------------------------------------------------------------------- view

const CityView: React.FC<CityViewProps> = ({
  lang,
  city,
  country,
  places,
  trails,
  isStamped,
  onOpenPlace,
  onBack,
}) => {
  const t = ui(T, lang);

  /** Tracked by src, so a city change cannot leave a stale "broken" flag behind. */
  const [brokenSrc, setBrokenSrc] = useState<string | null>(null);

  const mapSrc = city.map?.src ?? '';
  const mapBroken = mapSrc !== '' && brokenSrc === mapSrc;
  const showArtwork = mapSrc !== '' && !mapBroken;

  /** Reserve the artwork's box before it loads, so nothing under it jumps. */
  const ratioPct = useMemo(() => {
    const w = city.map?.width;
    const h = city.map?.height;
    if (typeof w === 'number' && typeof h === 'number' && w > 0 && h > 0) {
      return Math.min(140, Math.max(40, (h / w) * 100));
    }
    return 66;
  }, [city.map?.width, city.map?.height]);

  /** Difficulty orders the list; it never gates it. A stable sort keeps ties as authored. */
  const ordered = useMemo(
    () => [...places].sort((a, b) => (a.difficulty ?? 0) - (b.difficulty ?? 0)),
    [places],
  );

  const pinned = useMemo(
    () => places.map((place) => ({ place, spot: pinOf(place) })).filter((entry) => entry.spot !== null),
    [places],
  );

  /** What a trail is allowed to point at. See `TrailCard`. */
  const knownIds = useMemo(() => new Set(places.map((place) => place.id)), [places]);

  const total = places.length;
  const done = places.filter((place) => isStamped(place.id)).length;
  const complete = total > 0 && done === total;
  const someoneOffMap = total > 0 && pinned.length < total;

  return (
    <div className="max-w-3xl mx-auto">
      {/* ── BACK — sticky, so the way out is never scrolled off a long city ── */}
      <div className="sticky top-0 z-20 py-3 bg-[#0B0F1A]/90 backdrop-blur-xl">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 min-h-[44px] px-3 -ml-3 rounded-xl text-white/60 hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          <span aria-hidden="true">{country.flag}</span>
          {t.back}
        </button>
      </div>

      {/* ── HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 sm:p-7"
      >
        <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl pointer-events-none" />

        <div className="relative">
          <p className={`${WORLD_STYLE.label} flex items-center gap-2`}>
            <span aria-hidden="true" className="text-base not-italic">
              {country.flag}
            </span>
            {say(country.name, lang)}
          </p>

          <h1 className={`${WORLD_STYLE.display} text-3xl sm:text-4xl mt-3 flex items-center gap-3 break-words`}>
            <span aria-hidden="true" className="not-italic">
              {city.emoji || '🏙️'}
            </span>
            {say(city.name, lang)}
          </h1>

          <p className={`${WORLD_STYLE.body} text-sm sm:text-base mt-3`}>{say(city.intro, lang)}</p>

          {/*
            Progress — only once there is something to count. A city whose places have
            not been written yet would otherwise open on "0 / 0", an empty bar and
            "You collected 0 of 0 stamps in this city.", directly above the empty state
            that already explains, kindly, that the city is still being written.
          */}
          {total > 0 && (
            <div className="mt-5">
              <div className="flex items-end justify-between gap-3">
                <div className="flex items-end gap-1.5">
                  <span className={`${WORLD_STYLE.display} text-4xl`}>{done}</span>
                  <span className="text-2xl font-[1000] italic tracking-tighter leading-none text-white/30">
                    /{total}
                  </span>
                </div>
                <span className={WORLD_STYLE.label}>{t.stamps}</span>
              </div>
              <div className="mt-2">
                <Bar pct={percent(done, total)} tone="emerald" />
              </div>
              <p
                className={
                  complete
                    ? 'text-[11px] font-bold text-emerald-300 mt-2 uppercase tracking-wider'
                    : 'text-[11px] font-bold text-white/40 mt-2 uppercase tracking-wider'
                }
              >
                {complete ? t.allDone : t.progress(done, total)}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* ── MAP ── */}
      {(pinned.length > 0 || showArtwork) && (
        <section className="mt-8">
          <SectionTitle icon={<MapPin size={14} aria-hidden="true" />}>{t.mapTitle}</SectionTitle>

          <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04]">
            {/* Spacer: holds the artwork's exact box from first paint. */}
            <div style={{ paddingTop: `${ratioPct}%` }} aria-hidden="true" />

            {showArtwork ? (
              <img
                key={mapSrc}
                src={mapSrc}
                alt={city.map?.alt ? say(city.map.alt, lang) : t.mapAlt}
                width={city.map?.width}
                height={city.map?.height}
                decoding="async"
                onError={() => setBrokenSrc(mapSrc)}
                className="absolute inset-0 w-full h-full object-contain"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
            )}

            {pinned.map((entry, index) =>
              entry.spot ? (
                <Pin
                  key={entry.place.id}
                  place={entry.place}
                  spot={entry.spot}
                  index={index}
                  stamped={isStamped(entry.place.id)}
                  label={
                    isStamped(entry.place.id)
                      ? t.goToDone(say(entry.place.name, lang))
                      : t.goTo(say(entry.place.name, lang))
                  }
                  onOpen={() => onOpenPlace(entry.place.id)}
                />
              ) : null,
            )}
          </div>

          {!showArtwork && (
            <p className="text-[11px] font-bold text-white/40 mt-2.5 uppercase tracking-wider">{t.mapPending}</p>
          )}
          {showArtwork && pinned.length > 0 && (
            <p className="text-[11px] font-bold text-white/40 mt-2.5 uppercase tracking-wider">{t.mapHint}</p>
          )}
          {someoneOffMap && <p className="text-[11px] font-bold text-white/30 mt-1">{t.offMap}</p>}
        </section>
      )}

      {/* ── TRAILS — suggestions, never gates ── */}
      {trails.length > 0 && (
        <section className="mt-8">
          <SectionTitle icon={<Footprints size={14} aria-hidden="true" />}>{t.trailsTitle}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trails.map((trail) => (
              <TrailCard
                key={trail.id}
                trail={trail}
                lang={lang}
                t={t}
                knownIds={knownIds}
                isStamped={isStamped}
                onOpenPlace={onOpenPlace}
              />
            ))}
          </div>
          <p className="text-[11px] font-bold text-white/30 mt-2.5">{t.trailsNote}</p>
        </section>
      )}

      {/* ── PLACES — the real navigation ── */}
      <section className="mt-8">
        <SectionTitle icon={<Compass size={14} aria-hidden="true" />}>{t.placesTitle}</SectionTitle>

        {ordered.length === 0 ? (
          <div className={`${WORLD_STYLE.card} p-6 text-center`}>
            <div className="text-4xl mb-3" aria-hidden="true">
              🗺️
            </div>
            <p className="text-white/50 font-bold italic">{t.empty}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {ordered.map((place) => (
              <PlaceRow
                key={place.id}
                place={place}
                lang={lang}
                t={t}
                stamped={isStamped(place.id)}
                onOpen={() => onOpenPlace(place.id)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CityView;
