import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt({ lang }: { lang: 'el' | 'en' }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || (navigator as any).standalone === true;
    if (isStandalone) return;

    // Check if user dismissed before (don't show for 7 days)
    const dismissed = localStorage.getItem('pwa_dismissed');
    if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) return;

    // Only ask someone to install what they have already come back to. On a first visit
    // this was the third overlay in under a minute (audit P1-5); count visits per day so
    // a single long session does not inflate the number.
    const today = new Date().toISOString().slice(0, 10);
    const lastDay = localStorage.getItem('wb_visit_day');
    const visits = parseInt(localStorage.getItem('wb_visits') || '0', 10) + (lastDay === today ? 0 : 1);
    localStorage.setItem('wb_visit_day', today);
    localStorage.setItem('wb_visits', String(visits));
    if (visits < 3) return;

    // Detect iOS
    const ua = navigator.userAgent;
    const isiOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(isiOS);

    if (isiOS) {
      // Show iOS manual install guide after 30 seconds
      const timer = setTimeout(() => setShowBanner(true), 30000);
      return () => clearTimeout(timer);
    }

    // Android/Desktop — listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show after 20 seconds of usage
      setTimeout(() => setShowBanner(true), 20000);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('pwa_dismissed', Date.now().toString());
  };

  if (!showBanner) return null;

  const t = lang === 'el' ? {
    title: 'Κατέβασε την Ακαδημία!',
    desc: 'Πρόσθεσε στην αρχική οθόνη για γρήγορη πρόσβαση, ακόμα και offline!',
    install: 'ΕΓΚΑΤΑΣΤΑΣΗ',
    iosTitle: 'Πρόσθεσε στην Αρχική',
    iosStep1: '1. Πάτα το κουμπί',
    iosStep2: '(Κοινοποίηση) στο κάτω μέρος',
    iosStep3: '2. Επέλεξε "Προσθήκη στην αρχική οθόνη"',
    ok: 'ΚΑΤΑΛΑΒΑ!',
  } : {
    title: 'Get the Academy App!',
    desc: 'Add to home screen for quick access, even offline!',
    install: 'INSTALL',
    iosTitle: 'Add to Home Screen',
    iosStep1: '1. Tap the',
    iosStep2: '(Share) button at the bottom',
    iosStep3: '2. Select "Add to Home Screen"',
    ok: 'GOT IT!',
  };

  // iOS Guide
  if (isIOS) {
    return (
      <div className="fixed bottom-20 left-4 right-4 z-[9999] animate-in slide-in-from-bottom duration-500">
        <div className="bg-[#1a1b20] border border-purple-500/30 rounded-2xl p-4 shadow-[0_0_40px_rgba(168,85,247,0.2)] relative">
          <button onClick={handleDismiss} className="absolute top-3 right-3 p-1 text-white/30 hover:text-white">
            <X size={18} />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0 shadow-lg">
              <Smartphone size={24} className="text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-[900] text-sm">{t.iosTitle}</h3>
              <p className="text-white/50 text-xs font-bold leading-relaxed">
                {t.iosStep1} <span className="inline-block w-5 h-5 bg-blue-500 rounded text-white text-[10px] text-center leading-5">↑</span> {t.iosStep2}
              </p>
              <p className="text-white/50 text-xs font-bold">{t.iosStep3}</p>
              <button onClick={handleDismiss} className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-xs font-black uppercase tracking-wider">
                {t.ok}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Android/Desktop install banner
  return (
    <div className="fixed bottom-20 left-4 right-4 z-[9999] animate-in slide-in-from-bottom duration-500">
      <div className="bg-[#1a1b20] border border-purple-500/30 rounded-2xl p-4 shadow-[0_0_40px_rgba(168,85,247,0.2)] relative">
        <button onClick={handleDismiss} className="absolute top-3 right-3 p-1 text-white/30 hover:text-white">
          <X size={18} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10">
            <img src="/pwa-192x192.png" alt="WiseBot" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-[900] text-sm">{t.title}</h3>
            <p className="text-white/40 text-[11px] font-bold truncate">{t.desc}</p>
          </div>
          <button
            onClick={handleInstall}
            className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
          >
            <Download size={14} /> {t.install}
          </button>
        </div>
      </div>
    </div>
  );
}
