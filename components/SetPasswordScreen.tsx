/**
 * SetPasswordScreen — Shown to Google OAuth users who don't have a password yet.
 * Required before they can access protected routes (dashboard, parent controls, purchases).
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, Shield, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SetPasswordScreenProps {
  lang: 'el' | 'en';
}

const t = {
  el: {
    title: 'ΔΗΜΙΟΥΡΓΗΣΕ ΚΩΔΙΚΟ',
    subtitle: 'Ο γονέας σου χρειάζεται κωδικό για να ελέγχει τις αγορές και τις ρυθμίσεις.',
    passwordLabel: 'Κωδικός πρόσβασης',
    confirmLabel: 'Επιβεβαίωση κωδικού',
    placeholder: 'Τουλάχιστον 8 χαρακτήρες',
    confirmPlaceholder: 'Ξαναγράψε τον κωδικό',
    submit: 'ΑΠΟΘΗΚΕΥΣΗ ΚΩΔΙΚΟΥ',
    mismatch: 'Οι κωδικοί δεν ταιριάζουν',
    tooShort: 'Ο κωδικός πρέπει να είναι τουλάχιστον 8 χαρακτήρες',
    success: 'Κωδικός αποθηκεύτηκε!',
    parentNote: '🔒 Αυτός ο κωδικός χρειάζεται για τον Γονεϊκό Έλεγχο και τις αγορές.',
  },
  en: {
    title: 'CREATE A PASSWORD',
    subtitle: 'Your parent needs a password to control purchases and settings.',
    passwordLabel: 'Password',
    confirmLabel: 'Confirm password',
    placeholder: 'At least 8 characters',
    confirmPlaceholder: 'Re-enter password',
    submit: 'SAVE PASSWORD',
    mismatch: 'Passwords do not match',
    tooShort: 'Password must be at least 8 characters',
    success: 'Password saved!',
    parentNote: '🔒 This password is needed for Parental Controls and purchases.',
  },
};

const SetPasswordScreen: React.FC<SetPasswordScreenProps> = ({ lang }) => {
  const { setUserPassword } = useAuth();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  const txt = t[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError(txt.tooShort);
      return;
    }
    if (password !== confirm) {
      setError(txt.mismatch);
      return;
    }

    setSaving(true);
    const result = await setUserPassword(password);
    setSaving(false);

    if (result.error) {
      setError(result.error);
    } else {
      setDone(true);
    }
  };

  if (done) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center space-y-4"
        >
          <CheckCircle size={64} className="text-green-400 mx-auto" />
          <h2 className="text-2xl font-[900] text-white uppercase italic">{txt.success}</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter">
            {txt.title}
          </h1>
          <p className="text-white/50 text-sm max-w-xs mx-auto">
            {txt.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5">
              {txt.passwordLabel}
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={txt.placeholder}
                className="w-full pl-10 pr-10 py-3 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 text-sm"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
              >
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5">
              {txt.confirmLabel}
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type={showPw ? 'text' : 'password'}
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                placeholder={txt.confirmPlaceholder}
                className="w-full pl-10 pr-4 py-3 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 text-sm"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-xs font-bold text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={saving || !password || !confirm}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-[900] uppercase tracking-wider text-sm rounded-xl disabled:opacity-40 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-amber-500/30"
          >
            {saving ? '...' : txt.submit}
          </button>

          <p className="text-center text-white/30 text-xs">
            {txt.parentNote}
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default SetPasswordScreen;
