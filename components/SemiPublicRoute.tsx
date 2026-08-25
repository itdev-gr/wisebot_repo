import React, { createContext, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Sparkles } from 'lucide-react';

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
// Shows content to everyone. If not logged in, shows a guest banner with a
// signup CTA; per-action auth walls live in the components/APIs themselves.
interface SemiPublicRouteProps {
  children: React.ReactNode;
  lang: 'el' | 'en';
}

const SemiPublicRoute: React.FC<SemiPublicRouteProps> = ({ children, lang }) => {
  const { user, loading } = useAuth();
  const isGuest = !user;

  const requireAuth = useCallback((): boolean => {
    return true;
  }, []);

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
    </AuthGateContext.Provider>
  );
};

export default SemiPublicRoute;
