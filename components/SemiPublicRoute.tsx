import { loginPath } from '../utils/authReturn';
import React, { createContext, useContext, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Sparkles, X } from 'lucide-react';

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
/** Dismissed for this tab only. Closing the tab brings it back; nothing persists. */
const DISMISSED_KEY = 'wb_guest_banner_dismissed';

const GuestTopBanner: React.FC<{ lang: 'el' | 'en' }> = ({ lang }) => {
  const navigate = useNavigate();

  // One line, and it stays one line.
  // The sentence wrapped to four rows on a 375-point phone and took 90 of the 812 points
  // above the fold — on WiseBot World that was most of what a child could see before the
  // city they had opened. `truncate` needs `min-w-0` on the flex child to do anything at
  // all, and the icon must not shrink with it.
  //
  // And it can be closed. A banner that cannot be dismissed is not a prompt, it is a
  // tax on every screen; the signup call to action also lives inside the passport, which
  // is where a child who wants to keep their stamps actually meets it. `sessionStorage`
  // rather than `localStorage` on purpose: closing it is a "not now", not a "never", so
  // the next visit asks again. Wrapped, because storage throws in a private window.
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(DISMISSED_KEY) === '1';
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISSED_KEY, '1');
    } catch {
      /* private window — it stays closed for this render, which is enough */
    }
  };

  return (
    <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-b border-amber-500/20 px-4 py-2">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        <p className="text-white/60 text-xs font-bold flex items-center gap-2 min-w-0">
          <Sparkles size={14} className="text-amber-400 flex-shrink-0" />
          <span className="truncate">
            {lang === 'el'
              ? 'Δημιούργησε δωρεάν λογαριασμό και ξεκλείδωσε τα πάντα!'
              : 'Create a free account to unlock everything!'}
          </span>
        </p>
        <div className="flex flex-shrink-0 items-center gap-1">
          <button
            onClick={() => navigate(loginPath({ register: true }))}
            className="px-4 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 text-xs font-[1000] uppercase tracking-wider hover:bg-amber-500/30 transition-colors"
          >
            {lang === 'el' ? 'Εγγραφή' : 'Sign Up'}
          </button>
          <button
            onClick={dismiss}
            aria-label={lang === 'el' ? 'Κλείσιμο' : 'Dismiss'}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/[0.08] hover:text-white/70"
          >
            <X size={15} aria-hidden="true" />
          </button>
        </div>
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
