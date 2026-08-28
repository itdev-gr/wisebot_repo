/**
 * UpdatePrompt — a new version is ready; the child decides when.
 * ===============================================================
 * The PWA used `registerType: 'autoUpdate'`, which reloads the page on its own a few
 * seconds after a deploy is detected — in the middle of a book, a quiz, a hero being
 * generated. Now the new service worker waits, and this small card offers the reload.
 * Dismissing it keeps the current version: a waiting service worker only activates via
 * the update button, or after the browser fully restarts once every tab has closed.
 */
import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X } from 'lucide-react';

export default function UpdatePrompt({ lang }: { lang: 'el' | 'en' }) {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    // Check for a new version every 30 minutes while the app is open, and whenever the
    // app comes back into view — installed PWAs and Android TV stay alive for days, so
    // the interval alone can leave them pinned to a stale build. onRegisteredSW fires
    // once for the page's lifetime and offers no teardown hook, so (like the interval)
    // the listener lives until the page is gone.
    onRegisteredSW(_url, registration) {
      if (!registration) return;
      setInterval(() => registration.update(), 30 * 60 * 1000);
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') registration.update();
      });
    },
  });

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
        onClick={() => setNeedRefresh(false)}
        aria-label={lang === 'el' ? 'Αργότερα' : 'Later'}
        className="p-1.5 rounded-lg text-white/40 hover:text-white/80 hover:bg-white/10 transition-all"
      >
        <X size={14} />
      </button>
    </div>
  );
}
