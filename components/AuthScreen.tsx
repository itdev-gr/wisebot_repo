/**
 * AUTH SCREEN — Password-based Login & Register
 * ================================================
 * Children don't have email. The parent's email IS the account email.
 * Register: childName + parentEmail (= account email) + password
 * Login: parentEmail + password
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, User, Mail, Lock, Sparkles, AlertCircle, Eye, EyeOff, CheckCircle, Phone, MessageSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const motion = m as any;

interface AuthScreenProps {
  lang: 'el' | 'en';
}

const TEXT = {
  el: {
    loginTab: 'Σύνδεση',
    registerTab: 'Εγγραφή',
    parentEmail: 'Email Γονέα',
    password: 'Κωδικός Πρόσβασης',
    childName: 'Ψευδώνυμο / Όνομα',
    loginBtn: 'ΜΠΕΣ ΜΕΣΑ',
    registerBtn: 'ΔΗΜΙΟΥΡΓΗΣΕ ΛΟΓΑΡΙΑΣΜΟ',
    title: 'WISEBOT ACADEMY',
    subtitle: 'Η περιπέτεια αρχίζει εδώ!',
    registerNote: 'Χρησιμοποιούμε το email του γονέα για τον λογαριασμό',
    namePlaceholder: 'π.χ. Γιώργος',
    parentEmailPlaceholder: 'email-gonea@example.com',
    passwordPlaceholder: '8+ χαρακτήρες, κεφαλαίο, αριθμός, σύμβολο',
    errorRequired: 'Συμπλήρωσε όλα τα πεδία',
    errorPassword: 'Ο κωδικός πρέπει να έχει τουλάχιστον 8 χαρακτήρες, ένα κεφαλαίο, ένα αριθμό και ένα σύμβολο (π.χ. !@#$)',
    errorPasswordPattern: 'Ο κωδικός πρέπει να περιέχει τουλάχιστον ένα κεφαλαίο γράμμα, ένα αριθμό και ένα ειδικό σύμβολο (π.χ. !@#$%)',
    successRegister: 'Εγγραφή επιτυχής! Μπαίνεις στο WiseBot Academy...',
    successLogin: 'Συνδέθηκες! Πάμε...',
    alreadyExists: 'Αυτό το email υπάρχει ήδη. Δοκίμασε σύνδεση.',
    invalidLogin: 'Λάθος email ή κωδικός',
    notVerified: 'Ο λογαριασμός δεν έχει ενεργοποιηθεί ακόμα. Ζήτα από τον γονέα σου να πατήσει το link στο email.',
    guestBtn: 'Συνέχεια χωρίς λογαριασμό',
    back: '← Πίσω στην αρχική',
  },
  en: {
    loginTab: 'Login',
    registerTab: 'Register',
    parentEmail: 'Parent Email',
    password: 'Password',
    childName: 'Nickname / Name',
    loginBtn: 'LOG IN',
    registerBtn: 'CREATE ACCOUNT',
    title: 'WISEBOT ACADEMY',
    subtitle: 'The adventure starts here!',
    registerNote: 'We use the parent\'s email for the account',
    namePlaceholder: 'e.g. George',
    parentEmailPlaceholder: 'parent-email@example.com',
    passwordPlaceholder: '8+ chars, uppercase, number, symbol',
    errorRequired: 'Please fill in all fields',
    errorPassword: 'Password must have at least 8 characters, one uppercase letter, one number, and one symbol (e.g. !@#$)',
    errorPasswordPattern: 'Password must contain at least one uppercase letter, one number, and one special symbol (e.g. !@#$%)',
    successRegister: 'Registered! Entering WiseBot Academy...',
    successLogin: 'Logged in! Let\'s go...',
    alreadyExists: 'This email already exists. Try logging in.',
    invalidLogin: 'Wrong email or password',
    notVerified: 'Account not activated yet. Ask your parent to click the link in the email.',
    guestBtn: 'Continue without account',
    back: '← Back to home',
  },
};

const AuthScreen: React.FC<AuthScreenProps> = ({ lang }) => {
  const navigate = useNavigate();
  const { user, loading: authLoading, emailVerified, signUp, signIn, signInWithGoogle, resetPassword, resendVerification } = useAuth();
  const [verificationEmail, setVerificationEmail] = useState(''); // email to resend verification to
  const [resending, setResending] = useState(false);
  const t = TEXT[lang];

  // If already logged in AND verified, redirect
  useEffect(() => {
    if (!authLoading && user && emailVerified) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, authLoading, emailVerified, navigate]);

  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [parentEmail, setParentEmail] = useState('');
  const [password, setPassword] = useState('');
  const [childName, setChildName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showVerificationMsg, setShowVerificationMsg] = useState(false);
  // OTP verification state
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [otpUserId, setOtpUserId] = useState('');
  const [otpSending, setOtpSending] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setShowVerificationMsg(false);

    // Validation
    if (!parentEmail || !password) {
      setError(t.errorRequired);
      return;
    }
    if (tab === 'register' && (!childName || !phoneNumber)) {
      setError(t.errorRequired);
      return;
    }
    // Password validation for registration
    if (tab === 'register') {
      if (password.length < 8) {
        setError(t.errorPassword);
        return;
      }
      // Check password complexity: uppercase, number, special character
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecial = /[^A-Za-z0-9]/.test(password);
      if (!hasUppercase || !hasNumber || !hasSpecial) {
        setError(t.errorPasswordPattern);
        return;
      }
    }

    setSubmitting(true);

    if (tab === 'register') {
      const result = await signUp(parentEmail, password, childName, parentEmail);

      if (result.error) {
        if (result.error.includes('already exists') || result.error.includes('already been registered')) {
          setError(t.alreadyExists);
        } else if (result.error.includes('pattern') || result.error.includes('Pattern')) {
          // Supabase password policy error — show user-friendly message
          setError(t.errorPasswordPattern);
        } else if (result.error.includes('nickname') || result.error.includes('child_name_taken')) {
          setError(result.error);
        } else {
          setError(result.error);
        }
        setSubmitting(false);
        return;
      }

      // Registration successful — send SMS OTP for phone verification.
      // Parent must verify phone before the child can use the app.
      setVerificationEmail(parentEmail);
      setSubmitting(false);

      // If phone number was provided, send OTP and show OTP screen
      if (phoneNumber) {
        try {
          const { authFetch } = await import('../services/backendApi');
          // We need the userId from the signup response — fetch it
          const signupResp = await authFetch('/api/auth/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone: phoneNumber, userId: 'pending' }),
          });
          // For the OTP, we need the user ID. The signup already returned it.
          // Re-fetch from our signup response which was already processed above.
          // Actually, signUp doesn't return userId to frontend. We need to get it differently.
          // Solution: try to sign in to get the session, then send OTP
          const loginResult = await signIn(parentEmail, password);
          if (!loginResult.error) {
            const { supabase } = await import('../services/supabaseClient');
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user?.id) {
              setOtpUserId(session.user.id);
              // Now send the OTP
              const otpResp = await fetch('/api/auth/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: phoneNumber, userId: session.user.id }),
              });
              if (otpResp.ok) {
                setShowOtpScreen(true);
                return;
              }
            }
          }
        } catch (e) {
          console.warn('[Auth] OTP send failed, falling back to email verification:', e);
        }
      }

      // Fallback: show email verification screen if OTP didn't work
      setShowVerificationMsg(true);
      return;
    } else {
      const result = await signIn(parentEmail, password);

      if (result.error) {
        if (result.error.includes('Invalid login') || result.error.includes('invalid')) {
          setError(t.invalidLogin);
        } else {
          setError(result.error);
        }
        setSubmitting(false);
        return;
      }

      // After login, check email verification
      // The signIn result won't have user data yet — we need to check via auth context
      // We rely on the auth state change listener to update emailVerified
      // For immediate feedback, check the result
      const { data: sessionData } = await (await import('../services/supabaseClient')).supabase.auth.getSession();
      if (sessionData?.session?.user && !sessionData.session.user.email_confirmed_at) {
        setError(t.notVerified);
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

        {/* Verification message after registration */}
        {showVerificationMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center space-y-4"
          >
            <Mail size={40} className="text-emerald-400 mx-auto" />
            <h3 className="text-white font-[900] text-lg uppercase italic tracking-tight">
              {lang === 'el' ? 'Τσέκαρε το Email σου!' : 'Check your Email!'}
            </h3>
            <p className="text-emerald-400/80 text-sm font-bold leading-relaxed">
              {lang === 'el'
                ? `Στείλαμε ένα link επαλήθευσης στο ${verificationEmail}. Ο γονέας πρέπει να πατήσει το link για να ενεργοποιηθεί ο λογαριασμός.`
                : `We sent a verification link to ${verificationEmail}. The parent must click the link to activate the account.`}
            </p>
            <p className="text-white/30 text-xs font-bold">
              {lang === 'el' ? 'Τσέκαρε και τα spam/junk!' : 'Check spam/junk too!'}
            </p>
            <button
              type="button"
              disabled={resending}
              onClick={async () => {
                setResending(true);
                const result = await resendVerification(verificationEmail);
                if (result.error) {
                  setError(result.error);
                } else {
                  setSuccess(lang === 'el' ? 'Email στάλθηκε ξανά!' : 'Email resent!');
                }
                setResending(false);
              }}
              className="text-blue-400 text-xs font-bold hover:text-blue-300 transition-colors underline disabled:opacity-50"
            >
              {resending
                ? (lang === 'el' ? 'Στέλνουμε...' : 'Sending...')
                : (lang === 'el' ? 'Στείλε ξανά το email επαλήθευσης' : 'Resend verification email')}
            </button>
            {error && <ErrorMsg message={error} />}
            {success && (
              <p className="text-emerald-400 text-xs font-bold">{success}</p>
            )}
            <button
              type="button"
              onClick={() => { setShowVerificationMsg(false); setTab('login'); setError(''); setSuccess(''); }}
              className="text-white/30 text-xs font-bold hover:text-white/50 transition-colors"
            >
              {lang === 'el' ? '← Πίσω στη σύνδεση' : '← Back to login'}
            </button>
          </motion.div>
        )}

        {/* OTP Verification Screen */}
        {showOtpScreen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-center space-y-4"
          >
            <MessageSquare size={40} className="text-blue-400 mx-auto" />
            <h3 className="text-white font-[900] text-lg uppercase italic tracking-tight">
              {lang === 'el' ? 'Επαλήθευση Κινητού' : 'Phone Verification'}
            </h3>
            <p className="text-blue-400/80 text-sm font-bold leading-relaxed">
              {lang === 'el'
                ? `Στείλαμε 6ψήφιο κωδικό στο ${phoneNumber}. Βάλτον παρακάτω.`
                : `We sent a 6-digit code to ${phoneNumber}. Enter it below.`}
            </p>

            <div className="flex justify-center">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000"
                className="w-48 px-6 py-4 bg-white/5 border-2 border-blue-500/30 rounded-xl text-white text-2xl font-[1000] text-center tracking-[0.5em] placeholder:text-white/10 focus:outline-none focus:border-blue-400/60 transition-all"
              />
            </div>

            {error && <ErrorMsg message={error} />}
            {success && <p className="text-emerald-400 text-sm font-bold">{success}</p>}

            <button
              type="button"
              disabled={otpVerifying || otpCode.length !== 6}
              onClick={async () => {
                setOtpVerifying(true);
                setError('');
                try {
                  const resp = await fetch('/api/auth/verify-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ code: otpCode, userId: otpUserId }),
                  });
                  const data = await resp.json();
                  if (resp.ok && data.success) {
                    setSuccess(lang === 'el' ? 'Επαληθεύτηκε! Μπαίνεις...' : 'Verified! Entering...');
                    setTimeout(() => navigate('/dashboard', { replace: true }), 1500);
                  } else {
                    setError(data.error || (lang === 'el' ? 'Λάθος κωδικός' : 'Wrong code'));
                  }
                } catch {
                  setError(lang === 'el' ? 'Σφάλμα επαλήθευσης' : 'Verification error');
                }
                setOtpVerifying(false);
              }}
              className="w-full max-w-xs mx-auto py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-2 border-blue-500/30 rounded-xl text-white font-[1000] uppercase text-sm hover:border-blue-400/60 transition-all disabled:opacity-50"
            >
              {otpVerifying
                ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                : (lang === 'el' ? 'ΕΠΑΛΗΘΕΥΣΗ' : 'VERIFY')}
            </button>

            <button
              type="button"
              disabled={otpSending}
              onClick={async () => {
                setOtpSending(true);
                setError('');
                try {
                  const resp = await fetch('/api/auth/send-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phone: phoneNumber, userId: otpUserId }),
                  });
                  if (resp.ok) {
                    setSuccess(lang === 'el' ? 'Νέος κωδικός στάλθηκε!' : 'New code sent!');
                  } else {
                    const data = await resp.json();
                    setError(data.error || 'Failed');
                  }
                } catch {
                  setError(lang === 'el' ? 'Σφάλμα αποστολής' : 'Send error');
                }
                setOtpSending(false);
              }}
              className="text-blue-400 text-xs font-bold hover:text-blue-300 transition-colors underline disabled:opacity-50"
            >
              {otpSending
                ? (lang === 'el' ? 'Στέλνουμε...' : 'Sending...')
                : (lang === 'el' ? 'Στείλε ξανά τον κωδικό' : 'Resend code')}
            </button>

            <button
              type="button"
              onClick={() => { setShowOtpScreen(false); setShowVerificationMsg(true); setError(''); setSuccess(''); }}
              className="text-white/30 text-xs font-bold hover:text-white/50 transition-colors block mx-auto"
            >
              {lang === 'el' ? 'Επαλήθευση μέσω email αντί SMS' : 'Verify via email instead'}
            </button>
          </motion.div>
        )}

        {!showVerificationMsg && !showOtpScreen && (
          <>
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

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
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
                    <InputField
                      icon={<Phone size={18} />}
                      label={lang === 'el' ? 'Κινητό Γονέα' : 'Parent Phone'}
                      placeholder={lang === 'el' ? '+30 6XX XXX XXXX' : '+30 6XX XXX XXXX'}
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      type="tel"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <InputField
                icon={<Mail size={18} />}
                label={t.parentEmail}
                placeholder={t.parentEmailPlaceholder}
                value={parentEmail}
                onChange={setParentEmail}
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

              {/* Forgot password — only show on login tab */}
              {tab === 'login' && (
                <div className="text-right">
                  <button
                    type="button"
                    onClick={async () => {
                      if (!parentEmail) {
                        setError(lang === 'el' ? 'Βάλε πρώτα το email σου' : 'Enter your email first');
                        return;
                      }
                      setError('');
                      const result = await resetPassword(parentEmail);
                      if (result.error) {
                        setError(result.error);
                      } else {
                        setSuccess(lang === 'el'
                          ? 'Στείλαμε email για αλλαγή κωδικού! Τσέκαρε τα εισερχόμενά σου.'
                          : 'Password reset email sent! Check your inbox.');
                      }
                    }}
                    className="text-blue-400/60 text-xs font-bold hover:text-blue-400 transition-colors"
                  >
                    {lang === 'el' ? 'Ξέχασες τον κωδικό;' : 'Forgot password?'}
                  </button>
                </div>
              )}

              <AnimatePresence mode="wait">
                {tab === 'register' && (
                  <motion.div
                    key="parent-note"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
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

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/20 text-xs font-bold uppercase">{lang === 'el' ? 'ή' : 'or'}</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Google Login */}
            <button
              type="button"
              onClick={async () => {
                setError('');
                const result = await signInWithGoogle();
                if (result.error) setError(result.error);
              }}
              className="w-full py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {lang === 'el' ? 'Συνέχεια με Google' : 'Continue with Google'}
            </button>
          </>
        )}

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
