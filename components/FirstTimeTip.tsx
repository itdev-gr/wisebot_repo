/**
 * FirstTimeTip — WiseBot explains a room the first time a child enters it.
 * ========================================================================
 * One card, bottom of the screen, the owl speaking in the first person, a single
 * "Κατάλαβα" button. Shown once per `id` (localStorage `wb_tip_<id>`), never again.
 *
 * Rules it enforces (see ONBOARDING-PLAN.md):
 * - never a modal, never a dark overlay — the room stays visible and usable
 * - sits above the rocket FAB and the mute button, on phones and desktops
 * - one message; callers pass two short lines at most
 *
 * Usage:
 *   const name = useChildName(lang);
 *   <FirstTimeTip id="library" lang={lang}
 *     text={lang === 'el' ? `Γεια σου, ${name}! …` : `Hi ${name}! …`} />
 */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const motion = m as any;

const STORAGE_PREFIX = 'wb_tip_';

export const hasSeenTip = (id: string): boolean => {
  try { return localStorage.getItem(STORAGE_PREFIX + id) === '1'; } catch { return true; }
};

export const markTipSeen = (id: string) => {
  try { localStorage.setItem(STORAGE_PREFIX + id, '1'); } catch { /* private mode — tip simply shows again */ }
};

/** The child's name for copy, or a warm fallback for guests. */
export const useChildName = (lang: 'el' | 'en'): string => {
  const { profile, isGuest } = useAuth();
  const name = profile?.childName?.trim();
  if (!isGuest && name) return name;
  return lang === 'el' ? 'φίλε μου' : 'friend';
};

interface FirstTimeTipProps {
  id: string;
  lang: 'el' | 'en';
  /** What WiseBot says. Keep it to two lines; bold with <strong> is fine. */
  text: React.ReactNode;
  /** Delay before the card slides in, so the room renders first. */
  delayMs?: number;
}

export default function FirstTimeTip({ id, lang, text, delayMs = 700 }: FirstTimeTipProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hasSeenTip(id)) return;
    const t = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(t);
  }, [id, delayMs]);

  const dismiss = () => {
    markTipSeen(id);
    setOpen(false);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key={`tip-${id}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          role="status"
          aria-live="polite"
          // bottom-24 clears the rocket FAB (bottom 24px, 64px tall) and the mute button;
          // z-index stays below the FAB's 9999 so the menu is always reachable.
          className="fixed bottom-24 left-3 right-3 sm:left-auto sm:right-6 sm:w-[380px] z-[9990] pointer-events-none"
        >
          <div className="pointer-events-auto flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-[#141a33] to-[#0f1528] border border-purple-400/30 shadow-[0_10px_50px_rgba(124,58,237,0.25)] backdrop-blur-xl">
            <img
              src="/images/wisebot.jpg"
              alt="WiseBot"
              className="w-12 h-12 rounded-xl object-cover border border-white/15 shrink-0"
              loading="lazy"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white/90 text-[13px] leading-snug font-semibold">{text}</p>
              <button
                onClick={dismiss}
                className="mt-3 px-4 py-1.5 rounded-lg bg-purple-500/25 border border-purple-400/40 text-purple-100 text-[11px] font-black uppercase tracking-wider hover:bg-purple-500/40 active:scale-95 transition-all"
              >
                {lang === 'el' ? 'Κατάλαβα' : 'Got it'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
