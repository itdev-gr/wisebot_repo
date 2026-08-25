/**
 * VerifyEmailLanding — the /auth route the signup verification email points to.
 *
 * Until now the link's redirectTo (api/auth/signup.ts) landed on a route that did
 * not exist, so the router's catch-all dropped freshly-verified parents on the
 * marketing homepage with no acknowledgement (CRO-AUDIT P0-3). Supabase-js
 * consumes the tokens in the URL hash itself (detectSessionInUrl); this screen
 * just has to wait for the session to materialize and route the outcome.
 */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, MailQuestion, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface VerifyEmailLandingProps {
  lang: 'el' | 'en';
}

const TEXT = {
  el: {
    checking: 'Επιβεβαιώνουμε το email σου...',
    successTitle: 'ΤΟ EMAIL ΕΠΙΒΕΒΑΙΩΘΗΚΕ!',
    successBody: 'Ο λογαριασμός είναι έτοιμος. Πάμε μέσα — το πρώτο βήμα το κάνει το παιδί.',
    successBtn: 'ΞΕΚΙΝΑΜΕ',
    errorTitle: 'ΚΑΤΙ ΠΗΓΕ ΣΤΡΑΒΑ',
    errorBody: 'Ο σύνδεσμος έχει λήξει ή χρησιμοποιήθηκε ήδη. Συνδέσου για να στείλουμε καινούριο.',
    fallbackTitle: 'ΕΠΙΒΕΒΑΙΩΣΕΣ ΤΟ EMAIL;',
    fallbackBody: 'Αν πάτησες τον σύνδεσμο από το email, ο λογαριασμός είναι έτοιμος — συνδέσου με το email και τον κωδικό σου.',
    loginBtn: 'ΣΥΝΔΕΣΗ',
  },
  en: {
    checking: 'Confirming your email...',
    successTitle: 'EMAIL CONFIRMED!',
    successBody: 'The account is ready. Let\'s go — the first step is the child\'s.',
    successBtn: 'LET\'S GO',
    errorTitle: 'SOMETHING WENT WRONG',
    errorBody: 'The link has expired or was already used. Log in and we\'ll send a fresh one.',
    fallbackTitle: 'CONFIRMED YOUR EMAIL?',
    fallbackBody: 'If you clicked the link in the email, the account is ready — log in with your email and password.',
    loginBtn: 'LOG IN',
  },
};

const VerifyEmailLanding: React.FC<VerifyEmailLandingProps> = ({ lang }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const t = TEXT[lang];

  // Supabase appends errors to the redirect as hash or query params.
  const [linkError] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const query = new URLSearchParams(window.location.search);
    return !!(hash.get('error') || hash.get('error_description') || query.get('error') || query.get('error_description'));
  });

  // Give detectSessionInUrl + AuthContext a few seconds before falling back to login.
  const [timedOut, setTimedOut] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setTimedOut(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Verified and signed in → celebrate briefly, then straight to the dashboard.
  useEffect(() => {
    if (!user) return;
    const timer = setTimeout(() => navigate('/dashboard', { replace: true }), 2500);
    return () => clearTimeout(timer);
  }, [user, navigate]);

  const state = user ? 'success' : linkError ? 'error' : (loading || !timedOut) ? 'checking' : 'fallback';

  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center px-6 font-['Nunito']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center space-y-6 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-2xl"
      >
        {state === 'checking' && (
          <>
            <Loader2 size={48} className="text-blue-400 mx-auto animate-spin" />
            <p className="text-white/60 font-bold">{t.checking}</p>
          </>
        )}

        {state === 'success' && (
          <>
            <CheckCircle size={56} className="text-emerald-400 mx-auto" />
            <h1 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter">{t.successTitle}</h1>
            <p className="text-white/60 text-sm font-bold leading-relaxed">{t.successBody}</p>
            <button
              onClick={() => navigate('/dashboard', { replace: true })}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-[900] uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all"
            >
              {t.successBtn}
            </button>
          </>
        )}

        {state === 'error' && (
          <>
            <ShieldAlert size={56} className="text-amber-400 mx-auto" />
            <h1 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter">{t.errorTitle}</h1>
            <p className="text-white/60 text-sm font-bold leading-relaxed">{t.errorBody}</p>
            <button
              onClick={() => navigate('/login', { replace: true })}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-[900] uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all"
            >
              {t.loginBtn}
            </button>
          </>
        )}

        {state === 'fallback' && (
          <>
            <MailQuestion size={56} className="text-blue-400 mx-auto" />
            <h1 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter">{t.fallbackTitle}</h1>
            <p className="text-white/60 text-sm font-bold leading-relaxed">{t.fallbackBody}</p>
            <button
              onClick={() => navigate('/login', { replace: true })}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-[900] uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all"
            >
              {t.loginBtn}
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyEmailLanding;
