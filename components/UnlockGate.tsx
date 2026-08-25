/**
 * UnlockGate — the friendly door in front of a room that is not open yet.
 * ======================================================================
 * Wraps a route. If the room's rule (utils/unlocks.ts) is met, renders the room.
 * Otherwise WiseBot explains the one thing that opens it and offers to take the child
 * there. Never a dead end, never a plain "locked".
 */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';
import { isUnlocked, unlockHint, UNLOCK_RULES, type UnlockKey } from '../utils/unlocks';
import { useChildName } from './FirstTimeTip';
import { trackGateBlock } from '../utils/analytics';

interface Props {
  feature: UnlockKey;
  lang: 'el' | 'en';
  children: React.ReactNode;
}

export default function UnlockGate({ feature, lang, children }: Props) {
  const { stats } = useEconomy();
  const navigate = useNavigate();
  const name = useChildName(lang);

  const blocked = !isUnlocked(feature, stats);
  // Gate impressions were invisible in GA4 (CRO-AUDIT P0-5). Effect must sit above
  // the early return — hooks can't be conditional.
  useEffect(() => {
    if (blocked) trackGateBlock('unlock', feature);
  }, [blocked, feature]);

  if (!blocked) return <>{children}</>;

  const rule = UNLOCK_RULES[feature];
  const hint = unlockHint(feature, stats, lang);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 font-['Nunito']">
      <div className="w-full max-w-md text-center space-y-6">
        <div className="relative mx-auto w-24 h-24">
          <img
            src="/images/wisebot.jpg"
            alt="WiseBot"
            className="w-24 h-24 rounded-3xl object-cover border-2 border-purple-400/40 shadow-[0_0_40px_rgba(168,85,247,0.35)]"
          />
          <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#0B0F1A] border border-white/15 flex items-center justify-center">
            <Lock size={16} className="text-amber-300" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.35em]">{rule.room[lang]}</p>
          <h2 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tight leading-tight">
            {lang === 'el' ? `Όχι ακόμα, ${name}!` : `Not yet, ${name}!`}
          </h2>
          <p className="text-white/70 text-sm md:text-base font-semibold leading-relaxed">
            🦉 {hint}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(rule.goTo)}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-[1000] text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-purple-500/25"
          >
            {lang === 'el' ? 'Πάμε!' : "Let's go!"} <ArrowRight size={16} />
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white/60 font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all"
          >
            {lang === 'el' ? 'Πίσω' : 'Back'}
          </button>
        </div>
      </div>
    </div>
  );
}
