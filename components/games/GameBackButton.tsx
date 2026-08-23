import React from 'react';
import { ArrowLeft } from 'lucide-react';

/**
 * The one "back" button every game shows in its header.
 * Before this, each of the 22 games drew its own — mostly a faint 12px label or a bare
 * 36px icon a child on a phone could barely find. This is a proper pill: ≥44px tall,
 * visible border, arrow + word, same place in every game.
 *
 * Positioning is left to the caller via `className` (a few games pin it top-right).
 */
const GameBackButton: React.FC<{
  onClick: () => void;
  lang: 'el' | 'en';
  className?: string;
}> = ({ onClick, lang, className = '' }) => (
  <button
    type="button"
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    aria-label={lang === 'el' ? 'Πίσω στα παιχνίδια' : 'Back to games'}
    className={`inline-flex items-center gap-1.5 h-11 pl-3 pr-4 rounded-full bg-white/10 border border-white/15 text-white font-black text-xs uppercase tracking-widest shadow-lg backdrop-blur-md hover:bg-white/20 active:scale-95 transition-all shrink-0 ${className}`}
  >
    <ArrowLeft size={18} /> {lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}
  </button>
);

export default GameBackButton;
