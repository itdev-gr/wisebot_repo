/**
 * EXPLORER PASSPORT — a real little booklet the child flips through.
 * ===================================================================
 * Cover → identity page (the child's own country, name, avatar, passport number) → one page
 * per country with an ink stamp per city and a big country stamp → index at the back.
 * Everything is read from what Explorer already saves (data/explore/passport.ts); the only
 * thing the child chooses here is the home country, once.
 *
 * Pages flip with a swipe, the arrows or the keyboard; the flag strip under the book jumps
 * straight to a country. Unearned stamps are faint outlines that link to the city in Explorer,
 * so the empty pages are the invitation.
 */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Compass, Check, Pencil, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useChildName } from './FirstTimeTip';
import { flagEmoji } from '../data/explore/registry';
import {
  HOME_COUNTRIES, buildPassport, countryName, formatStampDate, passportIssuedAt, passportNumber,
  readHomeCountry, stampInk, stampTilt, writeHomeCountry, type CityStamp, type CountryPage,
} from '../data/explore/passport';

const motion = m as any;

type Lang = 'el' | 'en';
type Page = { kind: 'cover' } | { kind: 'identity' } | { kind: 'country'; page: CountryPage } | { kind: 'index' };

const T = {
  el: {
    back: 'Explorer', title: 'ΔΙΑΒΑΤΗΡΙΟ ΕΞΕΡΕΥΝΗΤΗ', academy: 'WISEBOT ACADEMY', coverHint: 'Πάτα ή σύρε για να το ανοίξεις',
    citizen: 'Πολίτης του WiseBot', name: 'Όνομα', country: 'Χώρα', number: 'Αριθμός', issued: 'Εκδόθηκε', change: 'αλλαγή',
    pickTitle: 'Από ποια χώρα είσαι;', pickText: 'Η σελίδα της χώρας σου μπαίνει πρώτη στο διαβατήριο.', search: 'Ψάξε χώρα…',
    stampsOf: (n: string) => `Σφραγίδες: ${n}`, cityStamp: 'ΕΞΕΡΕΥΝΗΤΗΣ', countryStamp: (n: string) => `ΕΞΕΡΕΥΝΗΤΗΣ ${n.toUpperCase()}`,
    notYet: 'Δεν έχεις πάει ακόμα', go: 'Πήγαινε', progress: (a: number, b: number) => `${a}/${b} σημεία`,
    countryHint: (a: number, b: number) => `Σφράγισε και τις ${b} πόλεις για τη μεγάλη σφραγίδα (${a}/${b})`,
    countryHintOne: 'Σφράγισε την πόλη για τη μεγάλη σφραγίδα της χώρας',
    soonTitle: 'Η χώρα σου έρχεται σύντομα!', soonText: 'Η WiseBot ετοιμάζει κυνήγι θησαυρού και για εδώ. Μέχρι τότε, γέμισε τις άλλες σελίδες!',
    soonCta: 'Δες τις πόλεις', indexTitle: 'ΕΥΡΕΤΗΡΙΟ', countries: 'Χώρες', cities: 'Πόλεις', bigStamps: 'Σφραγίδες χώρας',
    page: (a: number, b: number) => `Σελίδα ${a} από ${b}`, prev: 'Προηγούμενη', next: 'Επόμενη',
    guestTitle: 'Το Διαβατήριο ζει μόνο σε αυτή τη συσκευή', guestText: 'Φτιάξε δωρεάν λογαριασμό για να κρατήσεις τις σφραγίδες για πάντα.', guestCta: 'Κράτα το Διαβατήριό μου',
    kid: 'WiseKid',
  },
  en: {
    back: 'Explorer', title: 'EXPLORER PASSPORT', academy: 'WISEBOT ACADEMY', coverHint: 'Tap or swipe to open',
    citizen: 'Citizen of WiseBot', name: 'Name', country: 'Country', number: 'Number', issued: 'Issued', change: 'change',
    pickTitle: 'Which country are you from?', pickText: 'Your country gets the first page of the passport.', search: 'Search country…',
    stampsOf: (n: string) => `Stamps: ${n}`, cityStamp: 'EXPLORER', countryStamp: (n: string) => `${n.toUpperCase()} EXPLORER`,
    notYet: 'Not visited yet', go: 'Go', progress: (a: number, b: number) => `${a}/${b} spots`,
    countryHint: (a: number, b: number) => `Stamp all ${b} cities for the big stamp (${a}/${b})`,
    countryHintOne: 'Stamp the city to earn the big country stamp',
    soonTitle: 'Your country is coming soon!', soonText: 'WiseBot is preparing a treasure hunt here too. Until then, fill the other pages!',
    soonCta: 'See the cities', indexTitle: 'INDEX', countries: 'Countries', cities: 'Cities', bigStamps: 'Country stamps',
    page: (a: number, b: number) => `Page ${a} of ${b}`, prev: 'Previous', next: 'Next',
    guestTitle: 'Your Passport lives only on this device', guestText: 'Create a free account to keep your stamps forever.', guestCta: 'Keep my Passport',
    kid: 'WiseKid',
  },
};

/* ── paper & ink ─────────────────────────────────────────────────────────────────────── */

const PAPER = 'bg-[#f5efdc] text-[#2b2a24]';
const PAPER_TEXTURE: React.CSSProperties = {
  backgroundImage: 'radial-gradient(rgba(60,50,20,0.06) 0.6px, transparent 0.6px), radial-gradient(rgba(60,50,20,0.04) 0.6px, transparent 0.6px)',
  backgroundSize: '9px 9px, 13px 13px',
  backgroundPosition: '0 0, 4px 6px',
};

/** A round ink stamp for a city — earned: solid ink; not yet: a faint dashed outline that links to the city. */
const CityInk: React.FC<{ s: CityStamp; i: number; lang: Lang }> = ({ s, i, lang }) => {
  const t = T[lang];
  const ink = stampInk(i);
  const tilt = stampTilt(i);
  const earned = s.earnedAt !== null;
  const body = (
    <div
      className="w-[7.25rem] h-[7.25rem] rounded-full flex flex-col items-center justify-center text-center select-none"
      style={{
        transform: `rotate(${tilt}deg)`,
        color: ink,
        border: earned ? `3px double ${ink}` : `2px dashed ${ink}`,
        opacity: earned ? 0.92 : 0.35,
        mixBlendMode: 'multiply',
        boxShadow: earned ? `inset 0 0 0 4px #f5efdc, inset 0 0 0 5px ${ink}` : undefined,
      }}
    >
      <span className="text-[8px] font-black tracking-[0.2em] leading-none">{t.cityStamp}</span>
      <span className="text-2xl leading-none my-1" role="img" aria-hidden>{earned ? s.meta.emoji : '?'}</span>
      <span className="text-[10px] font-[1000] uppercase tracking-wider leading-tight px-2 line-clamp-2">{s.meta.name[lang]}</span>
      <span className="text-[8px] font-bold tracking-widest mt-1 leading-none">{earned ? formatStampDate(s.earnedAt!, lang) : t.progress(s.done, s.need)}</span>
    </div>
  );
  if (earned) {
    return (
      <motion.div initial={{ scale: 1.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 420, damping: 22, delay: 0.15 + i * 0.08 }}>
        {body}
      </motion.div>
    );
  }
  return (
    <Link to={`/explore?city=${s.meta.id}`} className="group flex flex-col items-center gap-1.5" aria-label={`${s.meta.name[lang]} — ${t.notYet}`}>
      {body}
      <span className="text-[9px] font-black uppercase tracking-widest text-[#2b2a24]/50 group-hover:text-[#2b2a24] inline-flex items-center gap-1">
        {t.go} <ChevronRight size={10} />
      </span>
    </Link>
  );
};

/** The big rectangular country stamp. */
const CountryInk: React.FC<{ page: CountryPage; lang: Lang }> = ({ page, lang }) => {
  const t = T[lang];
  const ink = '#b3261e';
  return (
    <motion.div
      initial={{ scale: 1.8, opacity: 0, rotate: -12 }} animate={{ scale: 1, opacity: 0.9, rotate: -6 }}
      transition={{ type: 'spring', stiffness: 380, damping: 20, delay: 0.5 }}
      className="inline-flex flex-col items-center px-5 py-2.5 select-none"
      style={{ color: ink, border: `3px double ${ink}`, mixBlendMode: 'multiply', boxShadow: `inset 0 0 0 3px #f5efdc, inset 0 0 0 4px ${ink}` }}
    >
      <span className="text-[13px] md:text-sm font-[1000] tracking-[0.25em] leading-none whitespace-nowrap">{t.countryStamp(page.name[lang])}</span>
      <span className="text-[9px] font-black tracking-[0.3em] mt-1.5">{flagEmoji(page.code)} · {formatStampDate(page.earnedAt!, lang)} · {flagEmoji(page.code)}</span>
    </motion.div>
  );
};

/* ── pages ───────────────────────────────────────────────────────────────────────────── */

const Cover: React.FC<{ lang: Lang; home: string | null }> = ({ lang, home }) => {
  const t = T[lang];
  return (
    <div className="h-full w-full rounded-[1.25rem] bg-[#15254a] text-[#d9b65c] flex flex-col items-center justify-between p-8 border-[6px] border-[#0f1b38] shadow-inner">
      <p className="text-[10px] font-black tracking-[0.35em]">{t.academy}</p>
      <div className="flex flex-col items-center gap-4">
        <div className="w-28 h-28 rounded-full border-4 border-[#d9b65c]/70 flex items-center justify-center text-6xl" role="img" aria-hidden>🦉</div>
        <h1 className="text-xl md:text-2xl font-[1000] tracking-[0.2em] text-center leading-snug">{t.title}</h1>
        {home && <span className="text-3xl" role="img" aria-label={countryName(home, lang)}>{flagEmoji(home)}</span>}
      </div>
      <p className="text-[10px] font-bold tracking-widest text-[#d9b65c]/60 uppercase">{t.coverHint}</p>
    </div>
  );
};

const HomePicker: React.FC<{ lang: Lang; onPick: (code: string) => void }> = ({ lang, onPick }) => {
  const t = T[lang];
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return HOME_COUNTRIES.filter(c => !needle || c.name[lang].toLowerCase().includes(needle) || c.name.en.toLowerCase().includes(needle));
  }, [q, lang]);
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-[1000] uppercase tracking-tight">{t.pickTitle}</h2>
      <p className="text-xs font-semibold text-[#2b2a24]/60 mt-1">{t.pickText}</p>
      <input
        value={q} onChange={e => setQ(e.target.value)} placeholder={t.search} aria-label={t.search}
        className="mt-3 w-full px-3 py-2 rounded-lg bg-white/70 border border-[#2b2a24]/15 text-sm font-bold outline-none focus:border-[#2b2a24]/40"
      />
      <div className="mt-3 grid grid-cols-2 gap-1.5 overflow-y-auto pr-1 flex-1 min-h-0">
        {list.map(c => (
          <button key={c.code} onClick={() => onPick(c.code)}
            className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/50 hover:bg-white border border-[#2b2a24]/10 hover:border-[#2b2a24]/30 text-left transition-colors">
            <span className="text-xl leading-none" role="img" aria-hidden>{flagEmoji(c.code)}</span>
            <span className="text-[11px] font-black uppercase tracking-wide leading-tight">{c.name[lang]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const Identity: React.FC<{ lang: Lang; home: string | null; onPick: (code: string) => void }> = ({ lang, home, onPick }) => {
  const t = T[lang];
  const { profile } = useAuth();
  const childName = useChildName(lang);
  const [editing, setEditing] = useState(false);
  const avatar = profile?.avatarUrl || (() => { try { return localStorage.getItem('wb_avatar'); } catch { return null; } })();
  const number = useMemo(passportNumber, []);
  const issued = useMemo(passportIssuedAt, []);

  if (!home || editing) return <HomePicker lang={lang} onPick={code => { onPick(code); setEditing(false); }} />;

  const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="border-b border-[#2b2a24]/10 pb-1.5">
      <div className="text-[8px] font-black tracking-[0.25em] uppercase text-[#2b2a24]/45">{label}</div>
      <div className="text-sm font-[1000] uppercase tracking-wide leading-tight mt-0.5">{value}</div>
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      <p className="text-[9px] font-black tracking-[0.3em] text-[#2b2a24]/50">{t.academy} · {t.title}</p>
      <div className="mt-4 flex gap-4 items-start">
        <div className="w-24 h-28 rounded-md overflow-hidden border-2 border-[#2b2a24]/20 bg-white/60 shrink-0 flex items-center justify-center">
          {avatar ? <img src={avatar} alt="" className="w-full h-full object-cover" /> : <span className="text-5xl" role="img" aria-hidden>🧒</span>}
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-2.5">
          <Row label={t.name} value={childName || t.kid} />
          <Row label={t.country} value={<span className="inline-flex items-center gap-2">{flagEmoji(home)} {countryName(home, lang)}
            <button onClick={() => setEditing(true)} className="inline-flex items-center gap-0.5 text-[9px] font-bold tracking-widest text-[#2b2a24]/45 hover:text-[#2b2a24] normal-case" aria-label={t.change}><Pencil size={9} /> {t.change}</button>
          </span>} />
          <Row label={t.number} value={<span className="font-mono tracking-[0.2em]">{number}</span>} />
          <Row label={t.issued} value={formatStampDate(issued, lang)} />
        </div>
      </div>
      <div className="mt-auto pt-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-[1000] uppercase tracking-[0.3em]">{t.citizen}</p>
          <p className="text-[8px] font-mono tracking-[0.35em] text-[#2b2a24]/50 mt-1">P&lt;WB&lt;{(childName || t.kid).toUpperCase().replace(/[^A-ZͰ-Ͽ]/g, '<').slice(0, 14).padEnd(14, '<')}&lt;{home}</p>
        </div>
        <span className="text-4xl" role="img" aria-hidden>🦉</span>
      </div>
    </div>
  );
};

const Country: React.FC<{ page: CountryPage; lang: Lang }> = ({ page, lang }) => {
  const t = T[lang];
  const stamped = page.stamps.filter(s => s.earnedAt !== null).length;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 border-b-2 border-[#2b2a24]/15 pb-3">
        <span className="text-4xl leading-none" role="img" aria-label={page.name[lang]}>{flagEmoji(page.code)}</span>
        <div className="min-w-0">
          <h2 className="text-xl md:text-2xl font-[1000] uppercase tracking-tight leading-none truncate">{page.name[lang]}</h2>
          {page.stamps.length > 0 && <p className="text-[9px] font-black tracking-[0.25em] uppercase text-[#2b2a24]/50 mt-1">{t.stampsOf(`${stamped}/${page.stamps.length}`)}</p>}
        </div>
      </div>

      {page.stamps.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 px-2">
          <span className="text-5xl" role="img" aria-hidden>🦉</span>
          <h3 className="text-base font-[1000] uppercase tracking-tight">{t.soonTitle}</h3>
          <p className="text-xs font-semibold text-[#2b2a24]/65 leading-relaxed">{t.soonText}</p>
          <Link to="/explore" className="inline-flex items-center gap-1.5 mt-1 px-4 py-2 rounded-full bg-[#15254a] text-[#f5efdc] text-[10px] font-black uppercase tracking-widest"><Compass size={12} /> {t.soonCta}</Link>
        </div>
      ) : (
        <>
          {/* watermark — the country's flag pressed into the paper, like the guilloche on a real page */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[11rem] leading-none pointer-events-none select-none" style={{ opacity: 0.05, filter: 'grayscale(1)' }} aria-hidden>{flagEmoji(page.code)}</div>
          <div className="relative flex-1 flex flex-wrap content-start justify-around gap-x-3 gap-y-5 pt-5">
            {page.stamps.map((s, i) => <CityInk key={s.meta.id} s={s} i={i} lang={lang} />)}
          </div>
          <div className="relative pt-3 min-h-[4.5rem] flex items-center justify-center">
            {page.earnedAt !== null
              ? <CountryInk page={page} lang={lang} />
              : <p className="text-[9px] font-bold tracking-widest uppercase text-[#2b2a24]/40 text-center">{page.stamps.length === 1 ? t.countryHintOne : t.countryHint(stamped, page.stamps.length)}</p>}
          </div>
        </>
      )}
    </div>
  );
};

const Index: React.FC<{ lang: Lang; countries: CountryPage[]; visited: number; cityStamps: number; countryStamps: number; onJump: (code: string) => void }> = ({ lang, countries, visited, cityStamps, countryStamps, onJump }) => {
  const t = T[lang];
  const withCities = countries.filter(c => c.stamps.length > 0);
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-[1000] tracking-[0.2em] border-b-2 border-[#2b2a24]/15 pb-2">{t.indexTitle}</h2>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[[visited, withCities.length, t.countries], [cityStamps, withCities.reduce((n, c) => n + c.stamps.length, 0), t.cities], [countryStamps, withCities.length, t.bigStamps]].map(([a, b, label], i) => (
          <div key={i} className="rounded-lg bg-white/50 border border-[#2b2a24]/10 p-2 text-center">
            <div className="text-lg font-[1000] leading-none">{a}<span className="text-[#2b2a24]/40 text-xs">/{b}</span></div>
            <div className="text-[8px] font-black uppercase tracking-widest text-[#2b2a24]/50 mt-1">{label}</div>
          </div>
        ))}
      </div>
      <ul className="mt-3 flex-1 min-h-0 overflow-y-auto pr-1 divide-y divide-[#2b2a24]/10">
        {countries.map(c => {
          const stamped = c.stamps.filter(s => s.earnedAt !== null).length;
          return (
            <li key={c.code}>
              <button onClick={() => onJump(c.code)} className="w-full flex items-center gap-2.5 py-1.5 text-left hover:bg-white/40 rounded px-1">
                <span className="text-lg leading-none" role="img" aria-hidden>{flagEmoji(c.code)}</span>
                <span className="flex-1 text-[11px] font-black uppercase tracking-wide truncate">{c.name[lang]}{c.home && ' ⌂'}</span>
                <span className="text-[9px] font-bold tracking-widest text-[#2b2a24]/50">{c.stamps.length ? `${stamped}/${c.stamps.length}` : '—'}</span>
                {c.earnedAt !== null && <Check size={12} className="text-[#166534]" />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/* ── the booklet ─────────────────────────────────────────────────────────────────────── */

const TravelPassport: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = T[lang];
  const { isGuest } = useAuth();
  const [home, setHome] = useState<string | null>(readHomeCountry);
  const book = useMemo(() => buildPassport(lang, home), [lang, home]);
  const pages = useMemo<Page[]>(() => [
    { kind: 'cover' }, { kind: 'identity' },
    ...book.countries.map(page => ({ kind: 'country' as const, page })),
    { kind: 'index' },
  ], [book]);
  const [[idx, dir], setIdx] = useState<[number, number]>([0, 1]);
  const go = useCallback((next: number) => setIdx(([cur]) => {
    const clamped = Math.max(0, Math.min(pages.length - 1, next));
    return [clamped, clamped >= cur ? 1 : -1];
  }), [pages.length]);
  const jump = useCallback((code: string) => { const i = pages.findIndex(p => p.kind === 'country' && p.page.code === code); if (i >= 0) go(i); }, [pages, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') go(idx + 1); if (e.key === 'ArrowLeft') go(idx - 1); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [idx, go]);

  const pick = (code: string) => { writeHomeCountry(code); setHome(code); };
  const current = pages[idx];
  const isCover = current.kind === 'cover';

  return (
    <div className="max-w-2xl mx-auto px-4 pt-6 pb-32">
      <div className="flex items-center justify-between mb-4">
        <Link to="/explore" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-[11px] font-black uppercase tracking-widest"><ArrowLeft size={14} /> {t.back}</Link>
        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{t.title}</span>
      </div>

      {/* the book */}
      <div className="relative mx-auto w-full max-w-[26rem]" style={{ perspective: '1400px' }}>
        <div className="relative w-full aspect-[3/4.15]">
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.div
              key={idx}
              custom={dir}
              initial={{ rotateY: dir > 0 ? 75 : -75, opacity: 0, x: dir > 0 ? 40 : -40 }}
              animate={{ rotateY: 0, opacity: 1, x: 0 }}
              exit={{ rotateY: dir > 0 ? -75 : 75, opacity: 0, x: dir > 0 ? -40 : 40 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: dir > 0 ? 'left center' : 'right center', transformStyle: 'preserve-3d' }}
              drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.18}
              onDragEnd={(_: unknown, info: { offset: { x: number } }) => { if (info.offset.x < -60) go(idx + 1); else if (info.offset.x > 60) go(idx - 1); }}
              onTap={isCover ? () => go(1) : undefined}
              className={`absolute inset-0 rounded-[1.25rem] shadow-2xl overflow-hidden ${isCover ? 'cursor-pointer' : PAPER}`}
            >
              {isCover ? <Cover lang={lang} home={home} /> : (
                <div className="h-full p-5 md:p-6 relative" style={PAPER_TEXTURE}>
                  {/* the spine shadow on the inner edge */}
                  <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
                  {current.kind === 'identity' && <Identity lang={lang} home={home} onPick={pick} />}
                  {current.kind === 'country' && <Country page={current.page} lang={lang} />}
                  {current.kind === 'index' && <Index lang={lang} countries={book.countries} visited={book.visited} cityStamps={book.cityStamps} countryStamps={book.countryStamps} onJump={jump} />}
                  <span className="absolute bottom-2 right-4 text-[8px] font-bold tracking-widest text-[#2b2a24]/35">{idx}</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* controls */}
        <div className="mt-4 flex items-center justify-between">
          <button onClick={() => go(idx - 1)} disabled={idx === 0} aria-label={t.prev}
            className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 text-white flex items-center justify-center disabled:opacity-30 hover:bg-white/10 active:scale-95 transition"><ChevronLeft size={20} /></button>
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em]">{t.page(idx + 1, pages.length)}</span>
          <button onClick={() => go(idx + 1)} disabled={idx === pages.length - 1} aria-label={t.next}
            className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 text-white flex items-center justify-center disabled:opacity-30 hover:bg-white/10 active:scale-95 transition"><ChevronRight size={20} /></button>
        </div>

        {/* flag tabs — jump straight to a country */}
        <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none]">
          {book.countries.map(c => {
            const active = current.kind === 'country' && current.page.code === c.code;
            const stamped = c.stamps.some(s => s.earnedAt !== null);
            return (
              <button key={c.code} onClick={() => jump(c.code)} aria-label={c.name[lang]} title={c.name[lang]}
                className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-lg border transition ${active ? 'bg-amber-400/20 border-amber-400/60' : stamped ? 'bg-white/[0.06] border-white/15' : 'bg-white/[0.02] border-white/[0.06] opacity-50'}`}>
                <span role="img" aria-hidden>{flagEmoji(c.code)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {isGuest && (
        <div className="mt-8 rounded-2xl border border-amber-500/25 bg-amber-500/[0.07] p-5 text-center">
          <h3 className="text-white font-black uppercase tracking-wider text-sm">{t.guestTitle}</h3>
          <p className="text-white/50 text-sm font-bold mt-1">{t.guestText}</p>
          <Link to="/login" className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 bg-amber-400 text-black rounded-full font-[900] uppercase tracking-widest text-xs hover:scale-105 transition-transform">
            <Sparkles size={14} /> {t.guestCta} <ChevronRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default TravelPassport;
