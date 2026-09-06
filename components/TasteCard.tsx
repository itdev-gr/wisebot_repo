/**
 * TASTE THE CITY — «Γεύσεις της πόλης», the food card on the Explorer trail screen.
 * ==================================================================================
 * The idea came from a host's flyer in Porto: "Savor Porto's traditional cuisine". For a
 * family it becomes a game: every dish is a card (what it is, a tip for the kids, one fact
 * for the parents, the kind of place that serves it) with a "Το δοκίμασα!" button. Three
 * tastes earn the taste stamp ("Γευσιγνώστης Πόρτο") — a second stamp for the passport.
 *
 * Adults-only items (wine…) are shown as a note for the parents, never with a button.
 */
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Utensils, Award } from 'lucide-react';
import type { TasteItem } from '../data/explore/types';
import { TASTE_BADGE_AT } from '../data/explore/progress';

const motion = m as any;

type Lang = 'el' | 'en';

const T = {
  el: {
    title: (city: string) => `Γεύσεις: ${city}`, subtitle: 'Φάε σαν ντόπιος — και κέρδισε τη σφραγίδα γεύσης',
    tried: 'Το δοκίμασα!', triedDone: 'Το δοκίμασες', untry: 'Τελικά όχι', kidTip: 'Για τα παιδιά', funFact: 'Ήξερες ότι…', where: 'Πού θα το βρεις',
    brave: ['', 'Για όλους', 'Λίγο διαφορετικό', 'Για τολμηρούς'], kinds: { dish: 'Πιάτο', sweet: 'Γλυκό', snack: 'Σνακ', drink: 'Ποτό' },
    adults: 'Για τους γονείς', progress: (a: number, b: number) => `${a}/${b} για τη σφραγίδα γεύσης`, badge: (city: string) => `Γευσιγνώστης ${city}!`,
    earned: 'Σφραγίδα γεύσης στο διαβατήριο!', more: 'Δες τις γεύσεις', less: 'Κρύψε',
  },
  en: {
    title: (city: string) => `Tastes of ${city}`, subtitle: 'Eat like a local — and earn the taste stamp',
    tried: 'I tried it!', triedDone: 'Tried it', untry: 'Not really', kidTip: 'For the kids', funFact: 'Did you know…', where: 'Where to find it',
    brave: ['', 'For everyone', 'A bit different', 'For brave tasters'], kinds: { dish: 'Dish', sweet: 'Sweet', snack: 'Snack', drink: 'Drink' },
    adults: 'For the parents', progress: (a: number, b: number) => `${a}/${b} for the taste stamp`, badge: (city: string) => `${city} Taster!`,
    earned: 'A taste stamp in your passport!', more: 'See the tastes', less: 'Hide',
  },
};

const BRAVE_STYLE = ['', 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', 'bg-amber-500/15 text-amber-300 border-amber-500/30', 'bg-rose-500/15 text-rose-300 border-rose-500/30'];

export default function TasteCard({ items, lang, cityName, tasted, onToggle }: {
  items: TasteItem[]; lang: Lang; cityName: string; tasted: Record<string, number>; onToggle: (id: string, on: boolean) => void;
}) {
  const t = T[lang];
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  if (!items.length) return null;

  const kids = items.filter(i => !i.adultsOnly);
  const adults = items.filter(i => i.adultsOnly);
  const count = kids.filter(i => tasted[i.id]).length;
  const earned = count >= TASTE_BADGE_AT;

  const toggle = (item: TasteItem) => {
    const on = !tasted[item.id];
    onToggle(item.id, on);
    if (on) {
      const next = count + 1;
      setFlash(next === TASTE_BADGE_AT ? t.earned : `${item.emoji} ${t.triedDone}!`);
      setTimeout(() => setFlash(null), 2200);
    }
  };

  return (
    <section className="mt-5 rounded-[1.75rem] border border-orange-500/20 bg-white/[0.03] overflow-hidden">
      <button onClick={() => setOpen(v => !v)} aria-expanded={open} className="w-full text-left p-5 flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-xl shrink-0"><Utensils size={18} className="text-orange-300" /></div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-black uppercase tracking-widest text-xs">{t.title(cityName)}</h3>
          <p className="text-white/45 text-xs font-semibold truncate">{t.subtitle}</p>
          <p className={`text-[10px] font-black uppercase tracking-widest mt-1 ${earned ? 'text-amber-300' : 'text-white/35'}`}>
            {earned ? <span className="inline-flex items-center gap-1"><Award size={11} /> {t.badge(cityName)}</span> : t.progress(count, TASTE_BADGE_AT)}
          </p>
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40 inline-flex items-center gap-1 shrink-0">{open ? t.less : t.more} <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} /></span>
      </button>

      <AnimatePresence>
        {flash && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mx-5 mb-3 p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm font-black text-center">
            {flash}
          </motion.div>
        )}
      </AnimatePresence>

      {open && (
        <div className="px-3 pb-4 space-y-2">
          {kids.map(item => {
            const on = !!tasted[item.id];
            const isX = expanded === item.id;
            return (
              <div key={item.id} className={`rounded-2xl border transition-colors ${on ? 'border-emerald-500/30 bg-emerald-500/[0.06]' : 'border-white/[0.08] bg-white/[0.03]'}`}>
                <button onClick={() => setExpanded(isX ? null : item.id)} className="w-full text-left p-3.5 flex items-center gap-3">
                  <span className="text-3xl leading-none w-10 text-center shrink-0" role="img" aria-hidden>{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-black text-sm leading-snug">{item.name[lang]}</p>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/40">{t.kinds[item.kind]}</span>
                      <span className={`px-1.5 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-widest ${BRAVE_STYLE[item.brave]}`}>{t.brave[item.brave]}</span>
                    </div>
                  </div>
                  {on ? <span className="w-7 h-7 rounded-full bg-emerald-500 text-black flex items-center justify-center shrink-0"><Check size={16} /></span> : <ChevronDown size={16} className={`text-white/30 shrink-0 transition-transform ${isX ? 'rotate-180' : ''}`} />}
                </button>
                {isX && (
                  <div className="px-4 pb-4 space-y-3">
                    <p className="text-white/85 text-sm font-semibold leading-relaxed">{item.what[lang]}</p>
                    <div className="rounded-xl bg-white/[0.04] p-3">
                      <p className="text-[9px] font-black uppercase tracking-widest text-cyan-300 mb-0.5">{t.kidTip}</p>
                      <p className="text-white/75 text-sm font-semibold leading-relaxed">{item.kidTip[lang]}</p>
                    </div>
                    <details className="group">
                      <summary className="cursor-pointer list-none text-[9px] font-black uppercase tracking-widest text-white/45 hover:text-white/80">{t.funFact}</summary>
                      <p className="mt-1 text-white/70 text-sm font-semibold leading-relaxed">{item.funFact[lang]}</p>
                    </details>
                    <p className="text-white/45 text-xs font-semibold"><span className="font-black uppercase tracking-widest text-[9px] text-white/35">{t.where}:</span> {item.where[lang]}</p>
                    <button onClick={() => toggle(item)}
                      className={`w-full py-3 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 ${on ? 'bg-white/[0.06] border border-white/10 text-white/60' : 'bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-lg'}`}>
                      {on ? <>{t.untry}</> : <><Check size={14} /> {t.tried}</>}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          {adults.length > 0 && (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5">
              <p className="text-[9px] font-black uppercase tracking-widest text-white/35 mb-1.5">{t.adults}</p>
              {adults.map(item => (
                <div key={item.id} className="flex items-start gap-2.5 py-1">
                  <span className="text-xl leading-none" role="img" aria-hidden>{item.emoji}</span>
                  <p className="text-white/60 text-xs font-semibold leading-relaxed"><span className="text-white/85 font-black">{item.name[lang]}</span> — {item.what[lang]} {item.kidTip[lang]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
