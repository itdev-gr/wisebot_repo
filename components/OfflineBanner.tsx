import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';
import { UI_TEXT } from '../constants';

/**
 * Shown while the device is offline. Lives in the page flow above the header — never a
 * fixed overlay, so the back button and the header stay reachable (a fixed top bar used to
 * cover them on phones). One short sentence, a child's words.
 */
const OfflineBanner: React.FC<{ lang: 'el' | 'en' }> = ({ lang }) => {
  const [isOffline, setIsOffline] = useState(() => typeof navigator !== 'undefined' && !navigator.onLine);
  useEffect(() => {
    const goOffline = () => setIsOffline(true);
    const goOnline = () => setIsOffline(false);
    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);
    return () => { window.removeEventListener('offline', goOffline); window.removeEventListener('online', goOnline); };
  }, []);
  if (!isOffline) return null;
  return (
    <div
      role="status"
      className="shrink-0 mx-2 md:mx-4 mt-2 md:mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white text-center text-xs md:text-sm font-black tracking-wide flex items-center justify-center gap-2 shadow-lg"
    >
      <WifiOff size={14} className="shrink-0" /> {UI_TEXT[lang].offline}
    </div>
  );
};

export default OfflineBanner;
