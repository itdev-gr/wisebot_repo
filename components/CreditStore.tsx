
import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Zap, Star, Crown, Rocket, Gift, Sparkles, ArrowRight, BookOpen, Brain, Briefcase, Music, Clapperboard, Box, CheckCircle, Loader2, Shield, AlertCircle, X } from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { isBackendAvailable, backendStripe } from '../services/backendApi';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

const PARENT_VERIFY_TTL = 15 * 60 * 1000; // 15 minutes

interface CreditStoreProps {
  lang: 'el' | 'en';
}

const CREDIT_PACKS = [
  { id: 'starter', credits: 100, price: '€4.99', emoji: '⚡', label: { el: 'Starter', en: 'Starter' }, perCredit: '€0.05', popular: false, color: 'from-blue-500 to-cyan-500', songPrice: '€3.00' },
  { id: 'hero', credits: 240, price: '€9.99', emoji: '🦸', label: { el: 'Hero Pack', en: 'Hero Pack' }, perCredit: '€0.042', popular: true, color: 'from-purple-500 to-fuchsia-500', songPrice: '€2.50' },
  { id: 'legend', credits: 600, price: '€19.99', emoji: '👑', label: { el: 'Legend Pack', en: 'Legend Pack' }, perCredit: '€0.033', popular: false, color: 'from-amber-500 to-orange-500', songPrice: '€2.00' },
  { id: 'ultimate', credits: 1600, price: '€39.99', emoji: '🏆', label: { el: 'Ultimate', en: 'Ultimate' }, perCredit: '€0.025', popular: false, color: 'from-emerald-500 to-teal-500', songPrice: '€1.50' },
];

const EARN_METHODS = [
  { icon: BookOpen, label: { el: 'Διάβασε ιστορία', en: 'Read a story' }, reward: '+2', color: 'text-blue-400' },
  { icon: BookOpen, label: { el: 'Διάβασε βιβλίο', en: 'Read a book' }, reward: '+3', color: 'text-indigo-400' },
  { icon: Brain, label: { el: 'Πέρασε Quiz', en: 'Pass a Quiz' }, reward: '+2', color: 'text-purple-400' },
  { icon: Star, label: { el: 'Ημερήσια Αποστολή', en: 'Daily Mission' }, reward: '+3', color: 'text-amber-400' },
  { icon: Gift, label: { el: 'Ημερήσιο Bonus', en: 'Daily Bonus' }, reward: '+2~10', color: 'text-orange-400' },
];

const COST_TABLE = [
  { icon: Sparkles, label: { el: 'Hero Image', en: 'Hero Image' }, cost: 6, price: '€0.30', color: 'text-fuchsia-400' },
  { icon: Music, label: { el: 'Τραγούδι', en: 'Song' }, cost: 60, price: '€3.00', color: 'text-rose-400' },
  { icon: Box, label: { el: '3D Μοντέλο', en: '3D Model' }, cost: 60, price: '€3.00', color: 'text-cyan-400' },
  { icon: Clapperboard, label: { el: 'Video', en: 'Video' }, cost: 50, price: '€2.50', color: 'text-purple-400' },
  { icon: Briefcase, label: { el: 'Επιχείρηση', en: 'Business' }, cost: 4, price: '€0.20', color: 'text-green-400' },
];

export default function CreditStore({ lang }: CreditStoreProps) {
  const { credits, costs, earnCredits, showNotification } = useEconomy();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [buyingPack, setBuyingPack] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const backendReady = isBackendAvailable();

  // Parent verification modal state
  const [showParentModal, setShowParentModal] = useState(false);
  const [pendingPackId, setPendingPackId] = useState<string | null>(null);
  const [parentPassword, setParentPassword] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState('');

  // Handle Stripe redirect
  // Stripe redirects to: /store?success=true&session_id=xxx
  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    const success = searchParams.get('success');
    if (success && sessionId && backendReady) {
      // Prevent duplicate processing: check if this session was already verified
      const processedSessions = JSON.parse(localStorage.getItem('wb_verified_sessions') || '[]');
      if (processedSessions.includes(sessionId)) {
        // Already processed — just clean up URL
        window.history.replaceState({}, '', '/store');
        return;
      }

      backendStripe.verify(sessionId).then(result => {
        if (result.success && result.credits > 0) {
          // Mark session as processed BEFORE doing anything else
          const updated = [...processedSessions, sessionId];
          localStorage.setItem('wb_verified_sessions', JSON.stringify(updated));

          // Don't call earnCredits — rely on webhook + cloud sync to add credits
          // This prevents double-crediting if webhook already fired
          showNotification('🎉', lang === 'el'
            ? `+${result.credits} Credits! Ευχαριστούμε!`
            : `+${result.credits} Credits! Thank you!`);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
          // Clean up URL params after processing
          window.history.replaceState({}, '', '/store');
        }
      }).catch(console.error);
    }
  }, [searchParams, lang, backendReady]);

  // Check if parent was verified recently (within 15 min)
  const isParentRecentlyVerified = (): boolean => {
    try {
      const ts = sessionStorage.getItem('parent_verified_at');
      if (!ts) return false;
      return Date.now() - parseInt(ts, 10) < PARENT_VERIFY_TTL;
    } catch {
      return false;
    }
  };

  const handleBuy = async (packId: string) => {
    if (!backendReady) return;

    // If parent verified recently, proceed directly
    if (isParentRecentlyVerified()) {
      setBuyingPack(packId);
      try {
        const { url } = await backendStripe.checkout(packId);
        if (url) window.location.href = url;
      } catch (err) {
        showNotification('❌', lang === 'el' ? 'Σφάλμα πληρωμής' : 'Payment error');
      } finally {
        setBuyingPack(null);
      }
      return;
    }

    // Otherwise, show parent verification modal
    setPendingPackId(packId);
    setParentPassword('');
    setVerifyError('');
    setShowParentModal(true);
  };

  const handleParentVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyError('');
    setVerifying(true);

    try {
      const email = user?.email || profile?.parentEmail;
      if (!email || !parentPassword) {
        setVerifyError(lang === 'el' ? 'Εισάγετε τον κωδικό' : 'Please enter the password');
        setVerifying(false);
        return;
      }

      // Create a temporary Supabase client to verify password without disrupting the active session
      const { createClient } = await import('@supabase/supabase-js');
      const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || '';
      const supabaseKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';

      if (supabaseUrl && supabaseKey) {
        const tempClient = createClient(supabaseUrl, supabaseKey, {
          auth: { autoRefreshToken: false, persistSession: false }
        });
        const { error } = await tempClient.auth.signInWithPassword({ email, password: parentPassword });

        if (error) {
          setVerifyError(lang === 'el' ? 'Λάθος κωδικός' : 'Wrong password');
          setVerifying(false);
          return;
        }
      }

      // Verification successful — store timestamp and proceed to checkout
      sessionStorage.setItem('parent_verified_at', Date.now().toString());
      setShowParentModal(false);
      setParentPassword('');

      if (pendingPackId) {
        setBuyingPack(pendingPackId);
        try {
          const { url } = await backendStripe.checkout(pendingPackId);
          if (url) window.location.href = url;
        } catch (err) {
          showNotification('❌', lang === 'el' ? 'Σφάλμα πληρωμής' : 'Payment error');
        } finally {
          setBuyingPack(null);
          setPendingPackId(null);
        }
      }
    } catch {
      setVerifyError(lang === 'el' ? 'Σφάλμα επαλήθευσης' : 'Verification error');
    }
    setVerifying(false);
  };

  const handleCloseParentModal = () => {
    setShowParentModal(false);
    setPendingPackId(null);
    setParentPassword('');
    setVerifyError('');
  };

  const t = {
    title: lang === 'el' ? 'ΚΑΤΑΣΤΗΜΑ' : 'CREDIT STORE',
    subtitle: lang === 'el' ? 'Ενίσχυσε τη δημιουργικότητά σου' : 'Boost your creativity',
    balance: lang === 'el' ? 'Το Πορτοφόλι σου' : 'Your Wallet',
    comingSoon: lang === 'el' ? 'ΕΡΧΕΤΑΙ ΣΥΝΤΟΜΑ' : 'COMING SOON',
    earnTitle: lang === 'el' ? 'Πώς κερδίζεις Credits ΔΩΡΕΑΝ' : 'How to earn Credits FREE',
    costTitle: lang === 'el' ? 'Τι κοστίζει' : 'What it costs',
    parentNote: lang === 'el'
      ? 'Ζήτα βοήθεια από τον γονέα ή κηδεμόνα σου για αγορές.'
      : 'Ask your parent or guardian for help with purchases.',
    backBtn: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    bestValue: lang === 'el' ? 'ΔΗΜΟΦΙΛΕΣ' : 'POPULAR',
    perCredit: lang === 'el' ? 'ανά credit' : 'per credit',
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 pb-32 min-h-screen space-y-10">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl md:text-6xl font-[1000] uppercase italic tracking-tighter text-white">
          {t.title}
        </h1>
        <p className="text-white/50 font-bold text-lg">{t.subtitle}</p>

        {/* Current Balance */}
        <div className="inline-flex items-center gap-4 bg-black/40 border border-white/10 rounded-2xl px-8 py-4">
          <span className="text-white/50 text-sm font-black uppercase tracking-widest">{t.balance}</span>
          <div className="h-6 w-px bg-white/10" />
          <span className="text-amber-400 font-[1000] text-3xl italic flex items-center gap-2">
            <Zap size={24} fill="currentColor" /> {credits}
          </span>
        </div>
      </motion.div>

      {/* CREDIT PACKS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CREDIT_PACKS.map((pack, i) => (
          <motion.div
            key={pack.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-3xl border overflow-hidden transition-all hover:scale-105 ${
              pack.popular
                ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
                : 'border-white/10'
            }`}
          >
            {/* Popular badge */}
            {pack.popular && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-[10px] font-black uppercase tracking-widest text-center py-1.5">
                {t.bestValue}
              </div>
            )}

            <div className={`bg-[#0B0F1A] p-6 space-y-5 h-full flex flex-col ${pack.popular ? 'pt-10' : ''}`}>
              {/* Emoji + Credits */}
              <div className="text-center space-y-3">
                <span className="text-5xl block">{pack.emoji}</span>
                <h3 className="text-white font-[1000] uppercase italic text-lg tracking-tight">{pack.label[lang]}</h3>
                <div className="flex items-center justify-center gap-2">
                  <Zap size={18} className="text-amber-400 fill-current" />
                  <span className="text-amber-400 font-[1000] text-3xl italic">{pack.credits}</span>
                </div>
                <p className="text-white/30 text-xs font-bold">{pack.perCredit} {t.perCredit}</p>
              </div>

              {/* Price */}
              <div className="text-center">
                <span className={`text-3xl font-[1000] italic text-transparent bg-clip-text bg-gradient-to-r ${pack.color}`}>
                  {pack.price}
                </span>
              </div>

              {/* Buy / Coming Soon button */}
              <button
                onClick={() => handleBuy(pack.id)}
                disabled={!backendReady || buyingPack === pack.id}
                className={`w-full py-3 rounded-xl font-[1000] uppercase tracking-widest text-xs border mt-auto transition-all flex items-center justify-center gap-2 ${
                  backendReady
                    ? `bg-gradient-to-r ${pack.color} text-white border-white/20 hover:scale-105 active:scale-95 shadow-lg cursor-pointer`
                    : 'bg-white/5 text-white/30 cursor-not-allowed border-white/5'
                }`}
              >
                {buyingPack === pack.id ? (
                  <><Loader2 size={14} className="animate-spin" /> {lang === 'el' ? 'ΦΟΡΤΩΣΗ...' : 'LOADING...'}</>
                ) : backendReady ? (
                  <>{lang === 'el' ? 'ΑΓΟΡΑ' : 'BUY NOW'} <ArrowRight size={14} /></>
                ) : (
                  t.comingSoon
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PARENT NOTE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <p className="text-white/30 text-xs font-bold bg-white/5 inline-block px-6 py-3 rounded-xl border border-white/5">
          👨‍👩‍👧 {t.parentNote}
        </p>
      </motion.div>

      {/* TWO COLUMNS: EARN & COSTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* HOW TO EARN FREE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0B0F1A] rounded-3xl border border-white/10 p-6 space-y-5"
        >
          <h3 className="text-lg font-[1000] text-white uppercase italic flex items-center gap-3">
            <Gift size={20} className="text-emerald-400" /> {t.earnTitle}
          </h3>
          <div className="space-y-3">
            {EARN_METHODS.map((method, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <method.icon size={18} className={method.color} />
                <span className="text-white/70 text-sm font-bold flex-1">{method.label[lang]}</span>
                <span className="text-emerald-400 font-[1000] text-sm italic flex items-center gap-1">
                  <Zap size={12} fill="currentColor" /> {method.reward}
                </span>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs font-bold text-center">
            {lang === 'el' ? '~15-19 credits/μέρα χωρίς αγορές!' : '~15-19 credits/day without purchases!'}
          </p>
        </motion.div>

        {/* WHAT THINGS COST */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0B0F1A] rounded-3xl border border-white/10 p-6 space-y-5"
        >
          <h3 className="text-lg font-[1000] text-white uppercase italic flex items-center gap-3">
            <Zap size={20} className="text-amber-400" /> {t.costTitle}
          </h3>
          <div className="space-y-3">
            {COST_TABLE.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <item.icon size={18} className={item.color} />
                <span className="text-white/70 text-sm font-bold flex-1">{item.label[lang]}</span>
                <div className="text-right">
                  <span className="text-amber-400 font-[1000] text-sm italic flex items-center gap-1">
                    <Zap size={12} fill="currentColor" /> -{item.cost}
                  </span>
                  <span className="text-white/30 text-[9px] font-bold block">{(item as any).price}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs font-bold text-center">
            {lang === 'el' ? 'Chat, Quiz & Ιστορίες = ΔΩΡΕΑΝ πάντα!' : 'Chat, Quiz & Stories = Always FREE!'}
          </p>
        </motion.div>
      </div>

      {/* BACK BUTTON */}
      <div className="text-center">
        <button
          onClick={() => navigate('/dashboard')}
          className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
        >
          {t.backBtn}
        </button>
      </div>

      {/* PARENT VERIFICATION MODAL */}
      <AnimatePresenceAny>
        {showParentModal && (
          <motion
            key="parent-verify-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={handleCloseParentModal}
          >
            <motion
              key="parent-verify-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="w-full max-w-sm bg-[#0B0F1A] border border-white/10 rounded-3xl p-8 text-center shadow-2xl shadow-blue-500/10 relative"
            >
              {/* Close button */}
              <button
                onClick={handleCloseParentModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </button>

              {/* Shield icon */}
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-blue-500/30">
                <Shield size={32} className="text-blue-400" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-[1000] text-white uppercase italic tracking-tighter mb-2">
                {lang === 'el' ? 'Γονεϊκή Επιβεβαίωση' : 'Parent Verification'}
              </h2>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                {lang === 'el'
                  ? 'Ο γονέας πρέπει να εισάγει τον κωδικό για να συνεχίσει η αγορά'
                  : 'Parent must enter password to continue the purchase'}
              </p>

              {/* Password form */}
              <form onSubmit={handleParentVerify} className="space-y-4">
                <input
                  type="password"
                  value={parentPassword}
                  onChange={(e) => { setParentPassword(e.target.value); setVerifyError(''); }}
                  placeholder={lang === 'el' ? 'Κωδικός λογαριασμού' : 'Account password'}
                  autoFocus
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 text-center"
                />

                {/* Error message */}
                {verifyError && (
                  <p className="text-red-400 text-xs font-bold flex items-center justify-center gap-1">
                    <AlertCircle size={14} /> {verifyError}
                  </p>
                )}

                {/* Buttons */}
                <button
                  type="submit"
                  disabled={verifying || !parentPassword}
                  className="w-full py-3 bg-blue-600/20 border border-blue-500/30 rounded-xl text-white font-[1000] uppercase tracking-widest text-xs hover:bg-blue-600/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {verifying ? (
                    <><Loader2 size={14} className="animate-spin" /> {lang === 'el' ? 'ΕΛΕΓΧΟΣ...' : 'VERIFYING...'}</>
                  ) : (
                    lang === 'el' ? 'ΕΠΙΒΕΒΑΙΩΣΗ' : 'VERIFY'
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCloseParentModal}
                  className="w-full py-2.5 text-white/30 font-bold text-xs uppercase tracking-widest hover:text-white/50 transition-all"
                >
                  {lang === 'el' ? 'ΑΚΥΡΩΣΗ' : 'CANCEL'}
                </button>
              </form>
            </motion>
          </motion>
        )}
      </AnimatePresenceAny>
    </div>
  );
}
