/**
 * AUTH SCREEN — Password-based Login & Register
 * ================================================
 * Clean, kid-friendly auth UI.
 * Register: childName + email + password + parentEmail
 * Login: email + password
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, User, Mail, Lock, Sparkles, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const motion = m as any;

interface AuthScreenProps {
  lang: 'el' | 'en';
}

const TEXT = {
  el: {
    loginTab: 'Σύνδεση',
    registerTab: 'Εγγραφή',
    email: 'Email',
    password: 'Κωδικός',
    childName: 'Το όνομά σου',
    parentEmail: 'Email γονέα',
    loginBtn: 'ΜΠΕΣ ΜΕΣΑ',
    registerBtn: 'ΔΗΜΙΟΥΡΓΗΣΕ ΛΟΓΑΡΙΑΣΜΟ',
    title: 'WISEBOT ACADEMY',
    subtitle: 'Η περιπέτεια αρχίζει εδώ!',
    registerNote: 'Χρειάζεται το email ενός γονέα',
    namePlaceholder: 'π.χ. Γιώργος',
    emailPlaceholder: 'to-email-sou@example.com',
    parentEmailPlaceholder: 'email-gonea@example.com',
    passwordPlaceholder: 'Τουλάχιστον 6 χαρακτήρες',
    errorRequired: 'Συμπλήρωσε όλα τα πεδία',
    errorPassword: 'Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες',
    successRegister: 'Εγγραφή επιτυχής! Μπαίνεις...',
    successLogin: 'Συνδέθηκες! Πάμε...',
    alreadyExists: 'Αυτό το email υπάρχει ήδη. Δοκίμασε σύνδεση.',
    invalidLogin: 'Λάθος email ή κωδικός',
    guestBtn: 'Συνέχεια χωρίς λογαριασμό',
    back: '← Πίσω στην αρχική',
  },
  en: {
    loginTab: 'Login',
    registerTab: 'Register',
    email: 'Email',
    password: 'Password',
    childName: 'Your name',
    parentEmail: 'Parent email',
    loginBtn: 'LOG IN',
    registerBtn: 'CREATE ACCOUNT',
    title: 'WISEBOT ACADEMY',
    subtitle: 'The adventure starts here!',
    registerNote: 'A parent email is required',
    namePlaceholder: 'e.g. George',
    emailPlaceholder: 'your-email@example.com',
    parentEmailPlaceholder: 'parent-email@example.com',
    passwordPlaceholder: 'At least 6 characters',
    errorRequired: 'Please fill in all fields',
    errorPassword: 'Password must be at least 6 characters',
    successRegister: 'Registered! Entering...',
    successLogin: 'Logged in! Let\'s go...',
    alreadyExists: 'This email already exists. Try logging in.',
    invalidLogin: 'Wrong email or password',
    guestBtn: 'Continue without account',
    back: '← Back to home',
  },
};

const AuthScreen: React.FC<AuthScreenProps> = ({ lang }) => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signUp, signIn } = useAuth();
  const t = TEXT[lang];

  // If already logged in, redirect
  useEffect(() => {
    if (!authLoading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, authLoading, navigate]);

  const [tab, setTab] = useState<'login' | 'register'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [childName, setChildName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!email || !password) {
      setError(t.errorRequired);
      return;
    }
    if (tab === 'register' && (!childName || !parentEmail)) {
      setError(t.errorRequired);
      return;
    }
    if (password.length < 6) {
      setError(t.errorPassword);
      return;
    }

    setSubmitting(true);

    if (tab === 'register') {
      const result = await signUp(email, password, childName, parentEmail);

      if (result.error) {
        if (result.error.includes('already exists') || result.error.includes('already been registered')) {
          setError(t.alreadyExists);
        } else {
          setError(result.error);
        }
        setSubmitting(false);
        return;
      }

      setSuccess(t.successRegister);
      setTimeout(() => navigate('/portal', { replace: true }), 1000);
    } else {
      const result = await signIn(email, password);

      if (result.error) {
        if (result.error.includes('Invalid login') || result.error.includes('invalid')) {
          setError(t.invalidLogin);
        } else {
          setError(result.error);
        }
        setSubmitting(false);
        return;
      }

      setSuccess(t.successLogin);
      setTimeout(() => navigate('/dashboard', { replace: true }), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center p-4 relative overflow-hidden font-['Nunito']">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#0B0F1A] to-[#0B0F1A]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-900/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center border border-white/10 shadow-xl"
          >
            <Shield size={36} className="text-blue-400" />
          </motion.div>
          <h1 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter">
            {t.title}
          </h1>
          <p className="text-white/40 text-sm font-bold mt-1">{t.subtitle}</p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-white/5 rounded-2xl p-1 mb-6 border border-white/5">
          {(['login', 'register'] as const).map((tabId) => (
            <button
              key={tabId}
              onClick={() => { setTab(tabId); setError(''); setSuccess(''); }}
              className={`flex-1 py-3 rounded-xl font-[900] text-sm uppercase tracking-wider transition-all ${
                tab === tabId
                  ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white border border-white/10 shadow-lg'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              {tabId === 'login' ? t.loginTab : t.registerTab}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence mode="wait">
            {tab === 'register' && (
              <motion.div
                key="register-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <InputField
                  icon={<User size={18} />}
                  label={t.childName}
                  placeholder={t.namePlaceholder}
                  value={childName}
                  onChange={setChildName}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <InputField
            icon={<Mail size={18} />}
            label={t.email}
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={setEmail}
            type="email"
          />

          {/* Password with toggle */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.passwordPlaceholder}
              aria-label={t.password}
              className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.07] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {tab === 'register' && (
              <motion.div
                key="parent-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <InputField
                  icon={<Mail size={18} />}
                  label={t.parentEmail}
                  placeholder={t.parentEmailPlaceholder}
                  value={parentEmail}
                  onChange={setParentEmail}
                  type="email"
                />
                <p className="text-white/20 text-xs font-bold px-2">
                  <Sparkles size={12} className="inline mr-1" />
                  {t.registerNote}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {error && <ErrorMsg message={error} />}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 text-emerald-400 text-sm font-bold"
            >
              <Sparkles size={16} />
              {success}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={submitting || !!success}
            className="w-full py-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 border-2 border-blue-500/30 rounded-2xl text-white font-[1000] uppercase italic tracking-wider text-sm flex items-center justify-center gap-3 hover:border-blue-400/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {submitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Shield size={18} />
                {tab === 'register' ? t.registerBtn : t.loginBtn}
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Guest mode + back */}
        <div className="mt-6 text-center space-y-3">
          <button
            onClick={() => navigate('/portal')}
            className="text-white/30 text-xs font-bold hover:text-white/50 transition-colors uppercase tracking-wider"
          >
            {t.guestBtn}
          </button>
          <br />
          <button
            onClick={() => navigate('/')}
            className="text-white/20 text-xs font-bold hover:text-white/40 transition-colors"
          >
            {t.back}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// --- Reusable components ---
const InputField: React.FC<{
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}> = ({ icon, label, placeholder, value, onChange, type = 'text' }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
      {icon}
    </div>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label={label}
      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.07] transition-all"
    />
  </div>
);

const ErrorMsg: React.FC<{ message: string }> = ({ message }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm font-bold"
  >
    <AlertCircle size={16} />
    {message}
  </motion.div>
);

export default AuthScreen;
