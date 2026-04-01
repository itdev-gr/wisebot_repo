import React, { useState, useEffect } from 'react';
import { Sparkles, UserPlus, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface GuestBannerProps {
  lang: 'el' | 'en';
}

export default function GuestBanner({ lang }: GuestBannerProps) {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if user already entered the portal or dismissed the banner this session
    const portalVisited = localStorage.getItem('wb_onboarding_done');
    const bannerDismissed = sessionStorage.getItem('wb_guest_banner_dismissed');
    if (!portalVisited && !bannerDismissed) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('wb_guest_banner_dismissed', 'true');
    setDismissed(true);
  };

  const handleEnterPortal = () => {
    navigate('/portal');
  };

  // Never show to authenticated users
  if (loading || user) return null;

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 sm:px-6 sm:pb-6"
      style={{ animation: 'guestBannerSlideUp 0.5s ease-out forwards' }}
    >
      <style>{`
        @keyframes guestBannerSlideUp {
          from { opacity: 0; transform: translateY(100%) }
          to { opacity: 1; transform: translateY(0) }
        }
      `}</style>
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#0F1B2D] to-[#1A1040] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_-4px_40px_rgba(124,58,237,0.15)] backdrop-blur-xl">
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Icon */}
          <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center">
            <Sparkles size={20} className="text-purple-400" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-[900] text-sm sm:text-base leading-tight">
              {lang === 'el'
                ? 'Δοκίμασε ΔΩΡΕΑΝ! Κάνε εγγραφή για να αποθηκεύσεις τις δημιουργίες σου.'
                : 'Try for FREE! Register to save your creations.'}
            </p>
            <p className="text-white/40 text-[11px] sm:text-xs font-bold mt-1">
              {lang === 'el'
                ? '10 Credits δώρο + πρόσβαση σε AI εργαλεία'
                : '10 free Credits + access to AI tools'}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={handleEnterPortal}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-[900] text-xs uppercase tracking-wider hover:brightness-110 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 shadow-lg shadow-purple-500/20"
              >
                <UserPlus size={14} />
                {lang === 'el' ? 'Εγγραφή' : 'Register'}
              </button>
              <button
                onClick={handleEnterPortal}
                className="px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white/60 font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:text-white/80 transition-all flex items-center gap-1.5"
              >
                {lang === 'el' ? 'Συνέχεια ως επισκέπτης' : 'Continue as guest'}
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="shrink-0 p-1.5 rounded-lg hover:bg-white/10 text-white/20 hover:text-white/50 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
