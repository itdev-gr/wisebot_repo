/**
 * EXPLORER — «Κυνήγι Θησαυρού» in a real city, for the whole family.
 * ===================================================================
 * A city is a map with 8–10 sealed spots. The child reads a riddle, walks there (GPS) or
 * solves the riddle from home, and the envelope opens: a story card, a "did you know" for
 * the parent, an on-site observation task and a 3-question quiz played through the same
 * QuizEngine as School — so stars, XP and PASS_QUIZ credits work exactly the same way.
 *
 * Screens: city picker → city map + trail → spot (riddle / unlock) → opened envelope → quiz.
 *
 * Privacy: the position is read with the browser Geolocation API, compared with the spot
 * list in memory and discarded. Nothing is stored or sent — the only persistence is which
 * spots were opened (localStorage, same device as the quiz stars).
 *
 * Map: Leaflet + OpenStreetMap tiles, loaded lazily inside this chunk; tiles are runtime-
 * cached by the service worker (vite.config.ts), so a city opened on hotel WiFi keeps
 * working on the street without data.
 */
import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { motion as m } from 'framer-motion';
import { ArrowLeft, Compass, Lock, MapPin, Navigation, Star, Award, Eye, EyeOff, Check, HelpCircle, Sparkles } from 'lucide-react';
import type * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import QuizEngine, { getQuizStars } from './QuizEngine';
import FirstTimeTip, { useChildName } from './FirstTimeTip';
import { useBackCloses } from '../utils/useBackCloses';
import { CITY_META, loadCity, flagEmoji } from '../data/explore/registry';
import type { ExploreCity, ExploreSpot, ObservationTask } from '../data/explore/types';
import { readProgress, writeProgress, spotQuizId, cityBadgeEarned, cityBadgeNeed, countryBadgeEarned, type CityProgress, type Unlock } from '../data/explore/progress';
import { distanceM, formatDistance, isWithin, locateOnce, watchPosition, type Fix, type GeoError } from '../utils/geo';
import { shuffleQuestionOptions } from '../utils/shuffleOptions';

const motion = m as any;

type Lang = 'el' | 'en';

const T = {
  el: {
    title: 'EXPLORER', subtitle: 'ΚΥΝΗΓΙ ΘΗΣΑΥΡΟΥ ΣΤΗΝ ΠΟΛΗ', pick: 'Διάλεξε πόλη', spots: 'σημεία', back: 'ΠΙΣΩ',
    how: 'Πώς παίζεται', howText: 'Κάθε σημείο κρύβει έναν φάκελο. Διάβασε το αίνιγμα, βρες το μέρος και πάτα «Είμαι εδώ!». Δεν είσαι στην πόλη; Λύσε το αίνιγμα από το σπίτι. Μέσα σε κάθε φάκελο: μια ιστορία, μια αποστολή παρατήρησης και ένα quiz με αστέρια.',
    trail: 'Η διαδρομή', locked: 'Κλειδωμένο', open: 'Ανοιχτό', whereAmI: 'Πού είμαι;', stopGps: 'Κλείσε GPS',
    imHere: 'Είμαι εδώ!', solve: 'Λύσε το αίνιγμα', riddle: 'Το αίνιγμα', tooFar: (d: string) => `Είσαι ${d} μακριά. Πλησίασε κι άλλο!`,
    nearest: (d: string) => `Ο πιο κοντινός θησαυρός είναι ${d} μακριά.`, gpsDenied: 'Δεν έχουμε άδεια για την τοποθεσία. Άνοιξέ τη στις ρυθμίσεις ή λύσε το αίνιγμα.',
    gpsUnavailable: 'Δεν βρίσκω σήμα GPS εδώ. Δοκίμασε ξανά σε ανοιχτό χώρο ή λύσε το αίνιγμα.', gpsUnsupported: 'Η συσκευή δεν δίνει τοποθεσία. Λύσε το αίνιγμα για να ανοίξεις τον φάκελο.',
    locating: 'Ψάχνω πού είσαι…', parents: 'Για γονείς', parentsHide: 'Κρύψε', parentConfirm: 'Μόνο για τον γονιό: να δείξω τη λύση;', yes: 'Ναι, είμαι ο γονιός', no: 'Όχι',
    unlockedGps: 'Το βρήκες! Ο φάκελος άνοιξε.', unlockedRiddle: 'Σωστά! Ο φάκελος άνοιξε.', wrong: 'Όχι ακριβώς. Ξαναδιάβασε το αίνιγμα.',
    story: 'Η ιστορία', didYouKnow: 'Ήξερες ότι… (για τους γονείς)', onSite: 'Αποστολή παρατήρησης', onSiteHint: 'Κοίτα γύρω σου — η απάντηση είναι μπροστά σου.', onSiteDone: 'Αποστολή παρατήρησης: έγινε',
    quiz: 'Παίξε το quiz', quizAgain: 'Ξαναπαίξε το quiz', check: 'Έλεγχος', next: 'Συνέχεια', stamp: 'Σφραγίδα στο διαβατήριο!',
    badge: (city: string) => `Εξερευνητής ${city}!`, badgeHint: (n: number) => `Άνοιξε και παίξε ${n} σημεία για το σήμα της πόλης`,
    progress: (a: number, b: number) => `${a}/${b} φάκελοι ανοιχτοί`, loading: 'ΦΟΡΤΩΣΗ…', mapFallback: 'Ο χάρτης δεν φόρτωσε (χωρίς σύνδεση;). Η διαδρομή από κάτω δουλεύει κανονικά.',
    stars: 'αστέρια', comingSoon: '13 πόλεις σε 12 χώρες — κι άλλες έρχονται.', attribution: 'Χάρτης: OpenStreetMap',
  },
  en: {
    title: 'EXPLORER', subtitle: 'A TREASURE HUNT IN THE CITY', pick: 'Pick a city', spots: 'spots', back: 'BACK',
    how: 'How to play', howText: 'Every spot hides an envelope. Read the riddle, find the place and tap "I\'m here!". Not in the city? Solve the riddle from home. Inside each envelope: a story, an observation mission and a quiz with stars.',
    trail: 'The trail', locked: 'Locked', open: 'Open', whereAmI: 'Where am I?', stopGps: 'Stop GPS',
    imHere: 'I\'m here!', solve: 'Solve the riddle', riddle: 'The riddle', tooFar: (d: string) => `You are ${d} away. Get closer!`,
    nearest: (d: string) => `The nearest treasure is ${d} away.`, gpsDenied: 'No permission for location. Enable it in settings, or solve the riddle.',
    gpsUnavailable: 'No GPS signal here. Try again in the open, or solve the riddle.', gpsUnsupported: 'This device gives no location. Solve the riddle to open the envelope.',
    locating: 'Finding you…', parents: 'For parents', parentsHide: 'Hide', parentConfirm: 'Parents only: show the answer?', yes: 'Yes, I\'m the parent', no: 'No',
    unlockedGps: 'You found it! The envelope is open.', unlockedRiddle: 'Correct! The envelope is open.', wrong: 'Not quite. Read the riddle again.',
    story: 'The story', didYouKnow: 'Did you know… (for parents)', onSite: 'Observation mission', onSiteHint: 'Look around — the answer is right in front of you.', onSiteDone: 'Observation mission: done',
    quiz: 'Play the quiz', quizAgain: 'Play the quiz again', check: 'Check', next: 'Continue', stamp: 'A stamp in your passport!',
    badge: (city: string) => `${city} Explorer!`, badgeHint: (n: number) => `Open and play ${n} spots for the city badge`,
    progress: (a: number, b: number) => `${a}/${b} envelopes open`, loading: 'LOADING…', mapFallback: 'The map did not load (offline?). The trail below works as usual.',
    stars: 'stars', comingSoon: '13 cities in 12 countries — more on the way.', attribution: 'Map: OpenStreetMap',
  },
};

const StarRow = ({ stars, size = 13 }: { stars: number; size?: number }) => (
  <span className="inline-flex items-center gap-0.5">
    {[0, 1, 2].map(i => <Star key={i} size={size} className={i < stars ? 'text-amber-400' : 'text-white/15'} fill={i < stars ? 'currentColor' : 'none'} />)}
  </span>
);

/** A 4-option task with instant feedback. Options are shuffled like every other quiz. */
function TaskCard({ task, lang, onResult, cta }: { task: ObservationTask; lang: Lang; onResult: (ok: boolean) => void; cta: string }) {
  const shuffled = useMemo(() => shuffleQuestionOptions({ q: task.question, options: task.options, correct: task.correct, explanation: task.explanation }), [task]);
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const ok = checked && picked === shuffled.correct;
  return (
    <div className="space-y-3">
      <p className="text-white font-black text-base leading-snug">{shuffled.q[lang]}</p>
      <div className="grid grid-cols-1 gap-2">
        {shuffled.options[lang].map((o, i) => {
          const state = !checked ? (picked === i ? 'ring-2 ring-amber-400 bg-amber-500/15' : 'bg-white/[0.04] hover:bg-white/[0.08]')
            : i === shuffled.correct ? 'bg-emerald-500/20 border-emerald-500/40' : picked === i ? 'bg-rose-500/20 border-rose-500/40' : 'bg-white/[0.03] opacity-60';
          return (
            <button key={i} disabled={checked} onClick={() => setPicked(i)}
              className={`text-left px-4 py-3 rounded-2xl border border-white/10 text-sm font-bold text-white transition-all ${state}`}>
              {o}
            </button>
          );
        })}
      </div>
      {!checked ? (
        <button disabled={picked === null} onClick={() => { setChecked(true); onResult(picked === shuffled.correct); }}
          className="w-full py-3 rounded-2xl bg-amber-500 text-black font-black uppercase tracking-widest text-xs disabled:opacity-40">
          {cta}
        </button>
      ) : (
        <div className={`p-3 rounded-2xl text-sm font-bold ${ok ? 'bg-emerald-500/15 text-emerald-200' : 'bg-rose-500/15 text-rose-200'}`}>
          {shuffled.explanation?.[lang]}
        </div>
      )}
    </div>
  );
}

/** Leaflet map with emoji markers. Mounted once per city; markers re-styled when progress changes. */
function CityMap({ city, lang, opened, fix, selectedId, onSelect }: {
  city: ExploreCity; lang: Lang; opened: Record<string, unknown>; fix: Fix | null; selectedId: string | null; onSelect: (id: string) => void;
}) {
  const el = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Leaflet.Map | null>(null);
  const LRef = useRef<typeof Leaflet | null>(null);
  const markers = useRef<Record<string, Leaflet.Marker>>({});
  const meRef = useRef<Leaflet.CircleMarker | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const L = (await import('leaflet')).default ?? (await import('leaflet'));
        if (!alive || !el.current) return;
        LRef.current = L as typeof Leaflet;
        const map = L.map(el.current, { zoomControl: false, attributionControl: true }).setView([city.center.lat, city.center.lng], city.zoom);
        L.control.zoom({ position: 'bottomright' }).addTo(map);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap</a>',
        }).addTo(map);
        mapRef.current = map;
        for (const s of city.spots) {
          const mk = L.marker([s.lat, s.lng], { icon: L.divIcon({ className: '', html: '', iconSize: [40, 40], iconAnchor: [20, 20] }) })
            .addTo(map).on('click', () => onSelect(s.id));
          markers.current[s.id] = mk;
        }
        // Fit all spots on first paint, but never zoom out further than the city default.
        const b = L.latLngBounds(city.spots.map(s => [s.lat, s.lng] as [number, number]));
        map.fitBounds(b.pad(0.15), { maxZoom: city.zoom + 1 });
        styleMarkers();
      } catch { if (alive) setFailed(true); }
    })();
    return () => { alive = false; mapRef.current?.remove(); mapRef.current = null; markers.current = {}; };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- one map per city
  }, [city.id]);

  const styleMarkers = useCallback(() => {
    const L = LRef.current; if (!L) return;
    for (const s of city.spots) {
      const mk = markers.current[s.id]; if (!mk) continue;
      const isOpen = !!opened[s.id];
      const stars = getQuizStars(spotQuizId(city.id, s.id));
      const sel = selectedId === s.id;
      const html = `<div style="width:40px;height:40px;border-radius:9999px;display:flex;align-items:center;justify-content:center;font-size:${isOpen ? 20 : 16}px;background:${isOpen ? (stars >= 2 ? '#f59e0b' : '#10b981') : 'rgba(15,23,42,0.92)'};border:3px solid ${sel ? '#fff' : isOpen ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)'};box-shadow:0 4px 14px rgba(0,0,0,0.45);transform:${sel ? 'scale(1.15)' : 'none'};transition:transform .15s">${isOpen ? s.emoji : '🔒'}</div>`;
      mk.setIcon(L.divIcon({ className: '', html, iconSize: [40, 40], iconAnchor: [20, 20] }));
      mk.setZIndexOffset(sel ? 1000 : isOpen ? 100 : 0);
    }
  }, [city, opened, selectedId]);
  useEffect(() => { styleMarkers(); }, [styleMarkers]);

  useEffect(() => {
    const L = LRef.current, map = mapRef.current; if (!L || !map) return;
    if (!fix) { meRef.current?.remove(); meRef.current = null; return; }
    if (!meRef.current) {
      meRef.current = L.circleMarker([fix.lat, fix.lng], { radius: 8, color: '#fff', weight: 3, fillColor: '#3b82f6', fillOpacity: 1 }).addTo(map);
      map.panTo([fix.lat, fix.lng]);
    } else meRef.current.setLatLng([fix.lat, fix.lng]);
  }, [fix]);

  useEffect(() => {
    const map = mapRef.current; if (!map || !selectedId) return;
    const s = city.spots.find(x => x.id === selectedId); if (s) map.panTo([s.lat, s.lng]);
  }, [selectedId, city]);

  const t = T[lang];
  return (
    <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 bg-[#0B0F1A]" style={{ height: 'min(52vh, 460px)' }}>
      <div ref={el} className="absolute inset-0" />
      {failed && <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white/60 text-sm font-bold">{t.mapFallback}</div>}
    </div>
  );
}

export default function Explore({ lang }: { lang: Lang }) {
  const t = T[lang];
  const childName = useChildName(lang);
  const [cityId, setCityId] = useState<string | null>(null);
  const [city, setCity] = useState<ExploreCity | null>(null);
  const [progress, setProgress] = useState<CityProgress>({ opened: {}, onSite: {} });
  const [selected, setSelected] = useState<string | null>(null);
  const [phase, setPhase] = useState<'trail' | 'spot' | 'quiz'>('trail');
  const [fix, setFix] = useState<Fix | null>(null);
  const [watching, setWatching] = useState(false);
  const [geoMsg, setGeoMsg] = useState<string | null>(null);
  const [locating, setLocating] = useState(false);
  const [parentAsk, setParentAsk] = useState(false);
  const [parentShown, setParentShown] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);
  const [, setTick] = useState(0);
  const stopWatch = useRef<() => void>(() => {});

  useEffect(() => {
    if (!cityId) { setCity(null); return; }
    let alive = true;
    loadCity(cityId).then(c => { if (alive) { setCity(c); setProgress(readProgress(cityId)); } });
    return () => { alive = false; };
  }, [cityId]);

  // Stop the GPS watch whenever the map screen goes away — never keep the sensor on in the background.
  useEffect(() => () => stopWatch.current(), []);
  useEffect(() => { if (phase !== 'trail' || !cityId) { stopWatch.current(); setWatching(false); } }, [phase, cityId]);

  const backToCities = useBackCloses(cityId !== null && phase === 'trail' && selected === null, () => { setCityId(null); setSelected(null); });
  const backToTrail = useBackCloses(selected !== null && phase !== 'quiz', () => { setSelected(null); setPhase('trail'); setParentShown(false); setParentAsk(false); setGeoMsg(null); });
  const backFromQuiz = useBackCloses(phase === 'quiz', () => { setPhase('spot'); setTick(x => x + 1); });

  const geoError = (e: GeoError) => e === 'denied' ? t.gpsDenied : e === 'unsupported' ? t.gpsUnsupported : t.gpsUnavailable;

  const toggleWatch = () => {
    if (watching) { stopWatch.current(); setWatching(false); setFix(null); return; }
    setGeoMsg(null); setWatching(true);
    stopWatch.current = watchPosition(f => setFix(f), e => { setGeoMsg(geoError(e)); setWatching(false); });
  };

  const openSpot = (spot: ExploreSpot, via: Unlock) => {
    if (!city) return;
    const next: CityProgress = { ...progress, opened: { ...progress.opened, [spot.id]: { via, at: Date.now() } } };
    setProgress(next); writeProgress(city.id, next);
    setFlash(via === 'gps' ? t.unlockedGps : t.unlockedRiddle);
    setTimeout(() => setFlash(null), 2500);
  };

  const tryHere = async (spot: ExploreSpot) => {
    setLocating(true); setGeoMsg(null);
    const r = fix && Date.now() - fix.at < 15000 ? fix : await locateOnce();
    setLocating(false);
    if (typeof r === 'string') { setGeoMsg(geoError(r)); return; }
    setFix(r);
    if (isWithin(r, r.accuracyM, spot, spot.radiusM)) openSpot(spot, 'gps');
    else setGeoMsg(t.tooFar(formatDistance(distanceM(r, spot), lang)));
  };

  const markOnSite = (spot: ExploreSpot, ok: boolean) => {
    if (!city || !ok) return;
    const next: CityProgress = { ...progress, onSite: { ...progress.onSite, [spot.id]: true } };
    setProgress(next); writeProgress(city.id, next);
  };

  // ─── SCREEN 1: CITY PICKER ─────────────────────────────────────────────
  if (!cityId) {
    return (
      <div className="max-w-5xl mx-auto px-4 min-h-full py-8 pb-32">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3 bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg">
            <Compass size={16} className="text-white" />
            <span className="text-[11px] font-[1000] uppercase tracking-widest text-white">{t.subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
            EXPL<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">ORER</span>
          </h1>
          <p className="mt-3 text-white/50 font-bold text-sm">{t.pick}</p>
        </div>
        {(() => {
          const countries = [...new Set(CITY_META.map(c => c.countryCode))].filter(countryBadgeEarned);
          return countries.length ? (
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {countries.map(cc => {
                const name = CITY_META.find(c => c.countryCode === cc)!.country[lang];
                return <span key={cc} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-300 text-[11px] font-black uppercase tracking-widest"><Award size={12} /> {t.badge(name)} {flagEmoji(cc)}</span>;
              })}
            </div>
          ) : null;
        })()}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CITY_META.map((c, i) => {
            const p = readProgress(c.id);
            const openCount = Object.keys(p.opened).length;
            const hasBadge = cityBadgeEarned(c);
            return (
              <motion.button key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                onClick={() => setCityId(c.id)}
                className="group relative h-40 rounded-[2rem] overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl hover:border-amber-400/40 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 text-left p-7">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-[0.07] group-hover:opacity-[0.14] transition-opacity pointer-events-none" />
                <div className="absolute top-0 right-0 p-5 text-6xl opacity-25 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">{c.emoji}</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <span className="text-xs font-black uppercase tracking-widest text-white/50">{flagEmoji(c.countryCode)} {c.country[lang]}</span>
                  <h3 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter">{c.name[lang]}</h3>
                  <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mt-1">
                    {c.spotCount} {t.spots}{openCount > 0 && ` · ${t.progress(openCount, c.spotCount)}`}
                  </p>
                  {hasBadge && <p className="mt-1 inline-flex items-center gap-1 text-amber-300 text-[10px] font-black uppercase tracking-widest"><Award size={11} /> {t.badge(c.name[lang])}</p>}
                </div>
              </motion.button>
            );
          })}
        </div>
        <p className="text-center text-white/30 text-xs font-bold mt-6">{t.comingSoon}</p>
        <div className="mt-8 p-5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.08]">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2"><HelpCircle size={14} /> {t.how}</h4>
          <p className="text-white/60 text-sm font-semibold leading-relaxed">{t.howText}</p>
        </div>
        <FirstTimeTip id="explore" lang={lang} text={lang === 'el'
          ? `${childName}, εδώ η πόλη γίνεται χάρτης θησαυρού. Πάρε τους γονείς σου και ξεκινήστε!`
          : `${childName}, here the city becomes a treasure map. Grab your parents and go!`} />
      </div>
    );
  }

  if (!city) {
    return <div className="flex items-center justify-center min-h-[60vh]"><p className="text-white/40 font-black text-xs uppercase tracking-widest animate-pulse">{t.loading}</p></div>;
  }

  const spotOf = (id: string | null) => (id ? city.spots.find(s => s.id === id) ?? null : null);
  const spot = spotOf(selected);
  const orderedSpots = city.route.map(id => spotOf(id)).filter((s): s is ExploreSpot => !!s);
  const openCount = orderedSpots.filter(s => progress.opened[s.id]).length;
  const badge = cityBadgeEarned({ id: city.id, spotCount: city.spots.length }, city.badgeAt);
  const badgeNeed = cityBadgeNeed(city.spots.length, city.badgeAt);

  // ─── SCREEN 4: QUIZ ────────────────────────────────────────────────────
  if (spot && phase === 'quiz') {
    return (
      <div className="max-w-6xl mx-auto px-4 min-h-full py-2 pb-4">
        <button onClick={backFromQuiz} className="flex items-center gap-2 text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs mb-3 transition-colors">
          <ArrowLeft size={16} /> {t.back}
        </button>
        <QuizEngine
          topic={`${spot.emoji} ${spot.name[lang]}`}
          questions={spot.quiz}
          onRestart={() => { setPhase('spot'); setTick(x => x + 1); }}
          lang={lang}
          categoryId={spotQuizId(city.id, spot.id)}
          restartLabel={t.next}
          finishSlot={(score, total) => (
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left flex items-start gap-3">
              <span className="text-3xl leading-none">🦉</span>
              <div className="flex-1">
                <StarRow stars={score === total ? 3 : score / total >= 0.75 ? 2 : score / total >= 0.5 ? 1 : 0} size={22} />
                <p className="text-white/80 text-sm font-bold mt-1.5 leading-snug">
                  {score > 0 ? `${t.stamp} ${spot.name[lang]} ✔` : (lang === 'el' ? 'Ξαναδιάβασε την ιστορία και δοκίμασε ξανά!' : 'Read the story again and try once more!')}
                </p>
              </div>
            </div>
          )}
        />
      </div>
    );
  }

  // ─── SCREEN 3: ONE SPOT (sealed or open) ───────────────────────────────
  if (spot && phase === 'spot') {
    const isOpen = !!progress.opened[spot.id];
    const stars = getQuizStars(spotQuizId(city.id, spot.id));
    return (
      <div className="max-w-3xl mx-auto px-4 min-h-full py-6 pb-32">
        <button onClick={backToTrail} className="flex items-center gap-2 text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs mb-4 transition-colors">
          <ArrowLeft size={16} /> {t.trail}
        </button>
        {flash && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm font-black text-center">{flash}</motion.div>}

        {!isOpen ? (
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#0B0F1A] border-2 border-white/20 flex items-center justify-center text-2xl">🔒</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-300">{t.riddle}</p>
                <p className="text-white/40 text-xs font-bold">{city.name[lang]} · {orderedSpots.indexOf(spot) + 1}/{orderedSpots.length}</p>
              </div>
            </div>
            <p className="text-white text-lg font-black leading-snug">{spot.riddle[lang]}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onClick={() => tryHere(spot)} disabled={locating}
                className="py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-60">
                <MapPin size={16} /> {locating ? t.locating : t.imHere}
              </button>
              <div className="py-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white/70 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                <Sparkles size={16} /> {t.solve} ↓
              </div>
            </div>
            {geoMsg && <p className="text-amber-200/90 text-sm font-bold bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3">{geoMsg}</p>}

            <div className="pt-2 border-t border-white/10">
              <TaskCard key={`unlock-${spot.id}`} task={spot.unlockQuestion} lang={lang} cta={t.check}
                onResult={ok => { if (ok) openSpot(spot, 'riddle'); else { setFlash(t.wrong); setTimeout(() => setFlash(null), 2500); } }} />
            </div>

            <div className="pt-2 border-t border-white/10">
              {!parentShown ? (
                !parentAsk ? (
                  <button onClick={() => setParentAsk(true)} className="text-white/35 hover:text-white/70 text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5"><Eye size={13} /> {t.parents}</button>
                ) : (
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/60">
                    <span>{t.parentConfirm}</span>
                    <button onClick={() => { setParentShown(true); setParentAsk(false); }} className="px-3 py-1.5 rounded-xl bg-white/10 text-white">{t.yes}</button>
                    <button onClick={() => setParentAsk(false)} className="px-3 py-1.5 rounded-xl bg-white/5">{t.no}</button>
                  </div>
                )
              ) : (
                <div className="text-sm text-white/70 font-semibold bg-white/[0.04] rounded-2xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{t.parents}</span>
                    <button onClick={() => setParentShown(false)} className="text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-1"><EyeOff size={12} /> {t.parentsHide}</button>
                  </div>
                  <p className="text-white font-black">{spot.name[lang]}</p>
                  <p>{spot.parentHint[lang]}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-[2rem] border border-emerald-500/20 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400/60 flex items-center justify-center text-3xl">{spot.emoji}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-none">{spot.name[lang]}</h2>
                  <div className="flex items-center gap-2 mt-1"><StarRow stars={stars} /><span className="text-white/40 text-[10px] font-black uppercase tracking-widest">{stars}/3 {t.stars}</span></div>
                </div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-amber-300 mb-2">{t.story}</p>
              <p className="text-white/85 text-base font-semibold leading-relaxed">{spot.story[lang]}</p>
              <details className="mt-4 group">
                <summary className="cursor-pointer text-[11px] font-black uppercase tracking-widest text-white/45 hover:text-white/80 list-none flex items-center gap-1.5"><Eye size={13} /> {t.didYouKnow}</summary>
                <p className="mt-2 text-white/70 text-sm font-semibold leading-relaxed">{spot.didYouKnow[lang]}</p>
              </details>
            </div>

            <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-300 mb-1 flex items-center gap-1.5"><Navigation size={12} /> {progress.onSite[spot.id] ? t.onSiteDone : t.onSite}</p>
              {progress.onSite[spot.id] ? (
                <p className="text-emerald-300 text-sm font-bold flex items-center gap-1.5"><Check size={14} /> {spot.onSite.question[lang]}</p>
              ) : (
                <>
                  <p className="text-white/40 text-xs font-bold mb-3">{t.onSiteHint}</p>
                  <TaskCard key={`onsite-${spot.id}`} task={spot.onSite} lang={lang} cta={t.check} onResult={ok => markOnSite(spot, ok)} />
                </>
              )}
            </div>

            <button onClick={() => setPhase('quiz')}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg">
              <Star size={16} fill="currentColor" /> {stars > 0 ? t.quizAgain : t.quiz}
            </button>
          </div>
        )}
      </div>
    );
  }

  // ─── SCREEN 2: CITY MAP + TRAIL ────────────────────────────────────────
  const nearest = fix ? orderedSpots.filter(s => !progress.opened[s.id]).map(s => distanceM(fix, s)).sort((a, b) => a - b)[0] : undefined;
  return (
    <div className="max-w-5xl mx-auto px-4 min-h-full py-6 pb-32">
      <button onClick={backToCities} className="flex items-center gap-2 text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs mb-4 transition-colors">
        <ArrowLeft size={16} /> {t.back}
      </button>
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-white/50">{flagEmoji(city.countryCode)} {city.country[lang]}</span>
          <h1 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-none">{city.name[lang]}</h1>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-[10px] font-black uppercase tracking-widest">{t.progress(openCount, orderedSpots.length)}</p>
          {badge
            ? <p className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-300 text-[11px] font-black uppercase tracking-widest"><Award size={12} /> {t.badge(city.name[lang])}</p>
            : <p className="text-white/30 text-[10px] font-bold mt-1">{t.badgeHint(badgeNeed)}</p>}
        </div>
      </div>

      <CityMap city={city} lang={lang} opened={progress.opened} fix={fix} selectedId={selected} onSelect={id => { setSelected(id); setPhase('spot'); setParentShown(false); setParentAsk(false); setGeoMsg(null); }} />

      <div className="flex flex-wrap items-center gap-2 mt-3">
        <button onClick={toggleWatch} className={`px-4 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 ${watching ? 'bg-blue-500 text-white' : 'bg-white/[0.06] text-white/80 border border-white/10'}`}>
          <Navigation size={14} /> {watching ? t.stopGps : t.whereAmI}
        </button>
        {fix && nearest !== undefined && <span className="text-white/60 text-xs font-bold">{t.nearest(formatDistance(nearest, lang))}</span>}
        {geoMsg && <span className="text-amber-200/90 text-xs font-bold">{geoMsg}</span>}
      </div>

      <p className="text-white/70 text-sm font-semibold leading-relaxed mt-5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex gap-3"><span className="text-2xl leading-none">🦉</span><span>{city.intro[lang]}</span></p>

      <h3 className="text-white font-black uppercase tracking-widest text-xs mt-6 mb-3">{t.trail}</h3>
      <div className="space-y-2">
        {orderedSpots.map((s, i) => {
          const isOpen = !!progress.opened[s.id];
          const stars = getQuizStars(spotQuizId(city.id, s.id));
          const d = fix ? distanceM(fix, s) : null;
          return (
            <button key={s.id} onClick={() => { setSelected(s.id); setPhase('spot'); setParentShown(false); setParentAsk(false); setGeoMsg(null); }}
              className={`w-full text-left flex items-center gap-3 p-3.5 rounded-2xl border transition-all hover:-translate-y-0.5 ${isOpen ? 'border-emerald-500/25 bg-emerald-500/[0.06]' : 'border-white/[0.08] bg-white/[0.03]'}`}>
              <div className={`w-11 h-11 rounded-full flex items-center justify-center text-xl border-2 ${isOpen ? 'bg-emerald-500/20 border-emerald-400/60' : 'bg-[#0B0F1A] border-white/15'}`}>{isOpen ? s.emoji : <Lock size={16} className="text-white/40" />}</div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-black text-sm truncate">{isOpen ? s.name[lang] : `${lang === 'el' ? 'Σημείο' : 'Spot'} ${i + 1}`}</p>
                <p className="text-white/45 text-xs font-semibold truncate">{isOpen ? (progress.onSite[s.id] ? t.onSiteDone : s.didYouKnow[lang].slice(0, 70) + '…') : s.riddle[lang]}</p>
              </div>
              <div className="text-right shrink-0">
                {isOpen ? <StarRow stars={stars} /> : <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{t.locked}</span>}
                {d !== null && <p className="text-white/40 text-[10px] font-bold mt-0.5">{formatDistance(d, lang)}</p>}
              </div>
            </button>
          );
        })}
      </div>
      <p className="text-white/25 text-[10px] font-bold mt-4">{t.attribution}</p>
    </div>
  );
}
