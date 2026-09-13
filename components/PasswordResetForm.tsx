/**
 * The screen behind the "reset password" email.
 *
 * Supabase's recovery link signs the browser in and then lands wherever `redirectTo`
 * points. Before this file, that was /login, which saw a signed-in user and bounced to
 * the dashboard: the parent clicked "reset", ended up inside the app, and never got to
 * choose a new password. Now the link lands on /login?mode=reset, the auth context
 * raises `passwordRecovery` on the PASSWORD_RECOVERY event, and AuthScreen renders this
 * instead of the login card.
 *
 * Two states: a recovery session exists (ask for the new password twice), or it does not
 * (the link expired or was opened in another browser: offer a fresh email).
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, KeyRound, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const MIN_LENGTH = 8;

const T = {
  el: {
    title: 'ΝΕΟΣ ΚΩΔΙΚΟΣ',
    intro: 'Διάλεξε τον νέο κωδικό του λογαριασμού σου.',
    password: 'Νέος κωδικός',
    confirm: 'Ξανά ο νέος κωδικός',
    tooShort: `Τουλάχιστον ${MIN_LENGTH} χαρακτήρες.`,
    mismatch: 'Οι δύο κωδικοί δεν είναι ίδιοι.',
    save: 'ΑΠΟΘΗΚΕΥΣΗ',
    saving: 'Αποθήκευση…',
    done: 'Ο κωδικός άλλαξε. Σε πάμε μέσα.',
    expiredTitle: 'Ο ΣΥΝΔΕΣΜΟΣ ΕΛΗΞΕ',
    expiredIntro: 'Ο σύνδεσμος αλλαγής κωδικού ισχύει για λίγο και μόνο στον browser που τον άνοιξες. Γράψε το email σου και θα σου στείλουμε καινούργιο.',
    email: 'Email γονέα',
    send: 'ΣΤΕΙΛΕ ΝΕΟ ΣΥΝΔΕΣΜΟ',
    sent: 'Στείλαμε νέο email. Τσέκαρε και τα ανεπιθύμητα.',
    back: 'Πίσω στη σύνδεση',
  },
  en: {
    title: 'NEW PASSWORD',
    intro: 'Choose the new password for your account.',
    password: 'New password',
    confirm: 'New password again',
    tooShort: `At least ${MIN_LENGTH} characters.`,
    mismatch: 'The two passwords do not match.',
    save: 'SAVE',
    saving: 'Saving…',
    done: 'Password changed. Taking you in.',
    expiredTitle: 'THE LINK HAS EXPIRED',
    expiredIntro: 'A reset link works for a short while and only in the browser that opened it. Enter your email and we will send a fresh one.',
    email: 'Parent email',
    send: 'SEND A NEW LINK',
    sent: 'A new email is on its way. Check your spam folder too.',
    back: 'Back to sign in',
  },
} as const;

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all text-base';
const buttonClass =
  'w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-[1000] uppercase tracking-wider py-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed';

export const PasswordResetForm: React.FC<{ lang: 'el' | 'en' }> = ({ lang }) => {
  const t = T[lang];
  const navigate = useNavigate();
  const { user, setUserPassword, clearPasswordRecovery, resetPassword } = useAuth();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < MIN_LENGTH) return setError(t.tooShort);
    if (password !== confirm) return setError(t.mismatch);
    setBusy(true);
    const result = await setUserPassword(password);
    setBusy(false);
    if (result.error) return setError(result.error);
    setNotice(t.done);
    clearPasswordRecovery();
    // The URL still says ?mode=reset; replace it so a refresh does not reopen this form.
    window.setTimeout(() => navigate('/dashboard', { replace: true }), 900);
  };

  const sendAgain = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) return;
    setBusy(true);
    const result = await resetPassword(email.trim());
    setBusy(false);
    if (result.error) return setError(result.error);
    setNotice(t.sent);
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center p-4 font-['Nunito']">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center border border-white/10 shadow-xl">
            <KeyRound size={36} className="text-blue-400" />
          </div>
          <h1 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter">
            {user ? t.title : t.expiredTitle}
          </h1>
          <p className="text-white/50 text-sm font-bold mt-2 max-w-sm mx-auto">{user ? t.intro : t.expiredIntro}</p>
        </div>

        <div className="bg-[#0f1014] border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl">
          {user ? (
            <form onSubmit={save} noValidate className="space-y-4">
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.password}
                  autoComplete="new-password"
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
                  aria-label={show ? 'Hide password' : 'Show password'}
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <input
                type={show ? 'text' : 'password'}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder={t.confirm}
                autoComplete="new-password"
                className={inputClass}
              />
              {error && <p className="text-red-400 text-sm font-bold text-center">{error}</p>}
              {notice && <p className="text-emerald-400 text-sm font-bold text-center">{notice}</p>}
              <button type="submit" disabled={busy || !!notice} className={buttonClass}>
                {busy ? t.saving : t.save}
              </button>
            </form>
          ) : (
            <form onSubmit={sendAgain} noValidate className="space-y-4">
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.email}
                  autoComplete="email"
                  className={`${inputClass} pl-12`}
                />
              </div>
              {error && <p className="text-red-400 text-sm font-bold text-center">{error}</p>}
              {notice && <p className="text-emerald-400 text-sm font-bold text-center">{notice}</p>}
              <button type="submit" disabled={busy || !email.trim()} className={buttonClass}>
                {t.send}
              </button>
              <button
                type="button"
                onClick={() => navigate('/login', { replace: true })}
                className="w-full text-white/40 text-xs font-bold hover:text-white/70 transition-colors pt-2"
              >
                {t.back}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordResetForm;
