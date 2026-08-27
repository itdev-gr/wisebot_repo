/**
 * MAKER LEVEL-UP — the celebration when the child crosses into a new tier.
 * ========================================================================
 * Mounted once in AppContent, watching the same `xp` state the app already keeps.
 * The last celebrated tier lives in wb_maker_level; the very first run only records
 * the current tier (an existing child must not get a fake «you levelled up!» for XP
 * they earned months ago). The record is written BEFORE the overlay shows, so a
 * StrictMode double-run or a re-render can never celebrate twice (audit shapes H1/B4).
 * Pure celebration — no credits, no unlocks, nothing spendable.
 */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { makerLevelForXp, makerLevelIndex, type MakerLevel } from '../data/makerLevels';

const STORAGE_KEY = 'wb_maker_level';

const MakerLevelUp: React.FC<{ lang: 'el' | 'en'; xp: number }> = ({ lang, xp }) => {
  const [celebrating, setCelebrating] = useState<MakerLevel | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const current = makerLevelForXp(xp);
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, current.id);
        return;
      }
      const storedIdx = makerLevelIndex(stored as MakerLevel['id']);
      // Unknown stored id (corrupt / future rename): re-baseline silently.
      if (storedIdx === -1 || makerLevelIndex(current.id) > storedIdx) {
        localStorage.setItem(STORAGE_KEY, current.id);
        if (storedIdx !== -1) setCelebrating(current);
      }
    } catch { /* storage unavailable — celebration is optional */ }
  }, [xp]);

  const t = lang === 'el'
    ? { rankUp: 'ΝΕΟ ΕΠΙΠΕΔΟ MAKER', passport: 'Δες το Διαβατήριό σου', keep: 'Συνέχισε!' }
    : { rankUp: 'NEW MAKER RANK', passport: 'See your Passport', keep: 'Keep going!' };

  return (
    <>
      {celebrating && (
        <motion.div
          // Deliberately NOT wrapped in AnimatePresence, and with no exit
          // animation. This is a fixed inset-0 overlay: while it is in the DOM
          // it swallows every click on the page. An exit animation makes its
          // removal depend on rAF finishing, and rAF is suspended whenever the
          // tab is backgrounded — a child switching apps or locking the phone
          // mid-dismiss was left with an invisible full-screen click trap and
          // no way out but a reload. Entry still animates; the close is
          // immediate and cannot get stuck. DailyRewardPopup does the same.
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          onClick={() => setCelebrating(null)}
        >
          <motion.div
            initial={{ scale: 0.7, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 18 }}
            className="relative max-w-sm w-full text-center rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-slate-900 to-black p-8 shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-br ${celebrating.gradient} opacity-30 blur-3xl pointer-events-none`} />

            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{t.rankUp}</p>

            <motion.div
              initial={{ rotate: -12, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', damping: 10 }}
              className={`w-24 h-24 mx-auto mt-5 rounded-[1.8rem] bg-gradient-to-br ${celebrating.gradient} flex items-center justify-center text-5xl border-2 border-white/25 shadow-2xl`}
            >
              <span role="img" aria-hidden>{celebrating.emoji}</span>
            </motion.div>

            <h2 className="mt-4 text-4xl font-[1000] text-white uppercase italic tracking-tighter">
              {celebrating.name}
            </h2>
            <p className="text-white/50 font-bold italic mt-1 text-sm">{celebrating.tagline[lang]}</p>

            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={() => { setCelebrating(null); navigate('/passport'); }}
                className="w-full py-3 bg-white text-black rounded-full font-[900] uppercase tracking-widest text-xs hover:scale-[1.03] transition-transform inline-flex items-center justify-center gap-1.5"
              >
                {t.passport} <ChevronRight size={14} />
              </button>
              <button
                onClick={() => setCelebrating(null)}
                className="w-full py-3 bg-white/10 text-white/70 rounded-full font-[900] uppercase tracking-widest text-xs hover:bg-white/15 transition-colors"
              >
                {t.keep}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MakerLevelUp;
