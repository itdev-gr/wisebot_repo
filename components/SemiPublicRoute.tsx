import React, { useState, createContext, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Lock, LogIn, UserPlus, X, Sparkles } from 'lucide-react';

const motion = m as any;

// ─── AUTH GATE CONTEXT ───
// Content components call `requireAuth()` before doing protected actions.
// If the user isn't logged in, a login modal appears instead of crashing.
interface AuthGateContextType {
  requireAuth: () => boolean; // returns true if user IS authenticated
  isGuest: boolean;
}

const AuthGateContext = createContext<AuthGateContextType>({
  requireAuth: () => false,
  isGuest: true,
});

export const useAuthGate = () => useContext(AuthGateContext);

// ─── LOGIN PROMPT MODAL ───
const LoginPromptModal: React.FC<{ show: boolean; onClose: () => void; lang: 'el' | 'en' }> = ({ show, onClose, lang }) => {
  const navigate = useNavigate();

  const t = {
    el: {
      title: 'Δημιούργησε Δωρεάν Λογαριασμό!',
      subtitle: 'Για να χρησιμοποιήσεις αυτή τη λειτουργία, χρειάζεσαι λογαριασμό WiseBot.',
      features: [
        'Φτιάξε τραγούδια, εικόνες & video με AI',
        'Κέρδισε credits παίζοντας & μαθαίνοντας',
        'Αποθήκευσε τις δημιουργίες σου',
      ],
      login: 'Σύνδεση',
      register: 'Δωρεάν Εγγραφή',
      close: 'Συνέχισε ως επισκέπτης',
    },
    en: {
      title: 'Create a Free Account!',
      subtitle: 'To use this feature, you need a WiseBot account.',
      features: [
        'Create songs, images & videos with AI',
        'Earn credits by playing & learning',
        'Save your creations',
      ],
      login: 'Sign In',
      register: 'Free Sign Up',
      close: 'Continue as guest',
    },
  };

  const text = t[lang];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-md bg-[#0F1629] border-2 border-amber-500/20 rounded-3xl p-8 shadow-[0_0_60px_rgba(245,158,11,0.15)]"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X size={16} className="text-white/40" />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20">
              <Lock size={28} className="text-amber-400" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-[1000] text-white text-center uppercase italic tracking-tight mb-2">
              {text.title}
            </h3>
            <p className="text-white/40 text-sm text-center font-bold mb-6">
              {text.subtitle}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {text.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60 text-sm font-bold">
                  <Sparkles size={14} className="text-amber-400 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => navigate('/login?mode=register')}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white font-[1000] text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2"
              >
                <UserPlus size={18} />
                {text.register}
              </button>
              <button
                onClick={() => navigate('/login')}
                className="w-full py-3 bg-white/5 border border-white/10 rounded-2xl text-white/60 font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <LogIn size={16} />
                {text.login}
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-white/20 text-xs font-bold hover:text-white/40 transition-colors"
              >
                {text.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── GUEST BANNER (shown at top for unauthenticated users) ───
const GuestTopBanner: React.FC<{ lang: 'el' | 'en' }> = ({ lang }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-b border-amber-500/20 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <p className="text-white/60 text-xs font-bold flex items-center gap-2">
          <Sparkles size={14} className="text-amber-400" />
          {lang === 'el'
            ? 'Δημιούργησε δωρεάν λογαριασμό για να ξεκλειδώσεις όλες τις λειτουργίες!'
            : 'Create a free account to unlock all features!'}
        </p>
        <button
          onClick={() => navigate('/login?mode=register')}
          className="flex-shrink-0 px-4 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 text-xs font-[1000] uppercase tracking-wider hover:bg-amber-500/30 transition-colors"
        >
          {lang === 'el' ? 'Εγγραφή' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
};

// ─── SEMI-PUBLIC ROUTE WRAPPER ───
// Shows content to everyone. If not logged in, shows a guest banner
// and a login modal when they try to use protected features.
interface SemiPublicRouteProps {
  children: React.ReactNode;
  lang: 'el' | 'en';
}

const SemiPublicRoute: React.FC<SemiPublicRouteProps> = ({ children, lang }) => {
  const { user, loading } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isGuest = !user;

  const requireAuth = useCallback((): boolean => {
    if (user) return true;
    setShowLoginModal(true);
    return false;
  }, [user]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[50vh] space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <AuthGateContext.Provider value={{ requireAuth, isGuest }}>
      {isGuest && <GuestTopBanner lang={lang} />}
      {children}
      <LoginPromptModal show={showLoginModal} onClose={() => setShowLoginModal(false)} lang={lang} />
    </AuthGateContext.Provider>
  );
};

export default SemiPublicRoute;
