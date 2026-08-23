/**
 * Hero Market — the children's first businesses.
 * ================================================
 * Until 24 Αυγούστου 2026 this page was a mock: 44 hard-coded "heroes by other
 * students" with invented names, local-only purchases that vanished on the next
 * login, a Mystery Box that promised credits the server rejected, and a "3D print,
 * we'll contact you" that recorded nothing. It was removed with the economy
 * hardening; the real market (children selling the songs and images they made,
 * with admin approval, and 3D prints of their heroes) is the next feature.
 *
 * This page says exactly that, so the menu entry is honest until it ships.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Music, Image, Box, ArrowRight } from 'lucide-react';

interface HeroMarketProps {
  lang: 'el' | 'en';
  myHeroes?: any[];
}

const HeroMarket: React.FC<HeroMarketProps> = ({ lang }) => {
  const navigate = useNavigate();
  const el = lang === 'el';
  const items = [
    { icon: <Music size={20} />, el: 'Πούλα τα τραγούδια σου', en: 'Sell your songs' },
    { icon: <Image size={20} />, el: 'Πούλα τους ήρωές σου', en: 'Sell your heroes' },
    { icon: <Box size={20} />, el: 'Τύπωσε τον ήρωά σου σε 3D', en: 'Print your hero in 3D' },
  ];
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 pb-32">
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 rounded-3xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center">
          <Store size={28} className="text-violet-300" />
        </div>
        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.35em]">{el ? 'Η Αγορά' : 'The Market'}</p>
        <h1 className="text-3xl md:text-4xl font-[1000] text-white uppercase italic tracking-tight">
          {el ? 'Η πρώτη σου επιχείρηση' : 'Your first business'}
        </h1>
        <p className="text-white/65 text-sm md:text-base font-semibold leading-relaxed max-w-xl mx-auto">
          {el
            ? 'Ανοίγει σύντομα. Εδώ θα πουλάς ό,τι φτιάχνεις — τραγούδια, ήρωες — και θα κερδίζεις credits από άλλα παιδιά. Κάθε πώληση ελέγχεται από τη WiseBot πριν βγει.'
            : 'Opening soon. This is where you will sell what you make — songs, heroes — and earn credits from other kids. Every listing is checked by WiseBot before it goes live.'}
        </p>
      </div>

      <div className="mt-10 grid gap-3">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-200">{it.icon}</div>
            <p className="text-white/80 font-bold text-sm">{el ? it.el : it.en}</p>
            <span className="ml-auto text-[10px] font-black uppercase tracking-wider text-violet-300/70">{el ? 'σύντομα' : 'soon'}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-white/50 text-xs font-semibold mb-4">
          {el ? 'Μέχρι τότε: φτιάξε πράγματα που θα αξίζουν να πουληθούν.' : 'Until then: make things worth selling.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => navigate('/music')} className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-[1000] text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all">
            <Music size={16} /> {el ? 'Φτιάξε τραγούδι' : 'Make a song'} <ArrowRight size={14} />
          </button>
          <button onClick={() => navigate('/factory')} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
            <Image size={16} /> {el ? 'Φτιάξε ήρωα' : 'Make a hero'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMarket;
