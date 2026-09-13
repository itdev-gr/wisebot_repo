/**
 * UpdatePrompt — a new version is ready; the child decides when.
 * ===============================================================
 * The PWA used `registerType: 'autoUpdate'`, which reloads the page on its own a few
 * seconds after a deploy is detected — in the middle of a book, a quiz, a hero being
 * generated. Now the new service worker waits, and this small card offers the reload.
 * Dismissing it keeps the current version: a waiting service worker only activates via
 * the update button, or after the browser fully restarts once every tab has closed.
 */
import React, { useEffect, useRef, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X } from 'lucide-react';

/** How long «Αργότερα» keeps the card away before it may come back. */
const SNOOZE_MS = 15 * 60 * 1000;

export default function UpdatePrompt({ lang }: { lang: 'el' | 'en' }) {
  const regRef = useRef<ServiceWorkerRegistration | null>(null);
  const [snoozedUntil, setSnoozedUntil] = useState(0);
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      if (registration) regRef.current = registration;
    },
  });

  // Check for a new version every minute while the app is open, whenever it comes
  // back into view, and once shortly after launch. Two iOS failures this fixes: a
  // worker that was already waiting when the page loaded never fires `updatefound`
  // again, so the card was never offered for it — `registration.waiting` is now
  // enough on its own; and «Αργότερα» used to hide the card for the life of the tab,
  // which on an installed PWA is days — now it snoozes for fifteen minutes.
  useEffect(() => {
    const check = () => {
      const reg = regRef.current;
      if (!reg) return;
      reg.update().catch(() => {});
      if (reg.waiting && Date.now() > snoozedUntil) setNeedRefresh(true);
    };
    const first = window.setTimeout(check, 3000);
    const every = window.setInterval(check, 60 * 1000);
    const onVisible = () => {
      if (document.visibilityState === 'visible') check();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(every);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [snoozedUntil, setNeedRefresh]);

  if (!needRefresh) return null;

  return (
    <div
      role="status"
      className="fixed top-3 left-3 right-3 sm:left-auto sm:right-6 sm:w-[360px] z-[9995] flex items-center gap-3 p-3.5 rounded-2xl bg-[#141a33]/95 border border-blue-400/30 shadow-[0_10px_40px_rgba(59,130,246,0.25)] backdrop-blur-xl"
    >
      <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
        <RefreshCw size={16} className="text-blue-300" />
      </div>
      <p className="flex-1 text-white/85 text-[12px] font-semibold leading-snug">
        {lang === 'el' ? 'Υπάρχει νέα έκδοση της WiseBot.' : 'A new version of WiseBot is ready.'}
      </p>
      <button
        onClick={() => updateServiceWorker(true)}
        className="px-3 py-1.5 rounded-lg bg-blue-500/30 border border-blue-400/40 text-blue-100 text-[11px] font-black uppercase tracking-wider hover:bg-blue-500/45 active:scale-95 transition-all"
      >
        {lang === 'el' ? 'Ανανέωση' : 'Update'}
      </button>
      <button
        onClick={() => {
          setNeedRefresh(false);
          setSnoozedUntil(Date.now() + SNOOZE_MS);
        }}
        aria-label={lang === 'el' ? 'Αργότερα' : 'Later'}
        className="p-1.5 rounded-lg text-white/40 hover:text-white/80 hover:bg-white/10 transition-all"
      >
        <X size={14} />
      </button>
    </div>
  );
}
