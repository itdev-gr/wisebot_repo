import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

declare global {
  interface Window {
    enableAnalytics?: () => void;
  }
}

interface CookieConsentProps {
  lang: 'el' | 'en';
}

export default function CookieConsent({ lang }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('wb_cookie_consent');
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
    // If user previously accepted, enable analytics
    if (consent === 'accepted') {
      window.enableAnalytics?.();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('wb_cookie_consent', 'accepted');
    window.enableAnalytics?.();
    setVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem('wb_cookie_consent', 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99999] p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto bg-[#0B0F1A]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/50">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 shrink-0 mt-0.5">
            <Shield size={20} className="text-blue-400" />
          </div>
          <div className="flex-1 space-y-3">
            <p className="text-white/70 text-sm font-bold leading-relaxed">
              {lang === 'el'
                ? 'Χρησιμοποιούμε cookies για τη λειτουργία της πλατφόρμας. Τα analytics cookies φορτώνονται μόνο με τη συγκατάθεσή σας.'
                : 'We use cookies for platform operation. Analytics cookies are loaded only with your consent.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 border border-blue-500 rounded-xl text-white font-black text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
              >
                {lang === 'el' ? 'Αποδοχή' : 'Accept'}
              </button>
              <button
                onClick={handleNecessaryOnly}
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white/60 font-black text-xs uppercase tracking-wider transition-all hover:text-white/80"
              >
                {lang === 'el' ? 'Μόνο απαραίτητα' : 'Necessary only'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
