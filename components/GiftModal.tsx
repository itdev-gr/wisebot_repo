/**
 * GiftModal — Send credits as a gift to a friend
 * ================================================
 * A bilingual (Greek/English) modal for sending credit gifts.
 * Features: username search, preset amounts, preset messages, preview, success animation.
 */
import React, { useState, useCallback } from 'react';
import { X, Gift, Search, Send, Sparkles, AlertCircle, Check, Loader2 } from 'lucide-react';
import { authFetch } from '../services/backendApi';

interface GiftModalProps {
  lang: 'el' | 'en';
  isOpen: boolean;
  onClose: () => void;
  prefilledUsername?: string;
  onGiftSent?: (newBalance: number) => void;
}

const PRESET_AMOUNTS = [5, 10, 25, 50];

const PRESET_MESSAGES = [
  { id: 'birthday', label: { el: '🎂 Χρόνια Πολλά!', en: '🎂 Happy Birthday!' } },
  { id: 'bravo', label: { el: '⭐ Μπράβο!', en: '⭐ Great job!' } },
  { id: 'gift', label: { el: '🎁 Δώρο!', en: '🎁 A gift for you!' } },
];

type GiftStep = 'form' | 'sending' | 'success' | 'error';

export default function GiftModal({ lang, isOpen, onClose, prefilledUsername = '', onGiftSent }: GiftModalProps) {
  const [username, setUsername] = useState(prefilledUsername);
  const [amount, setAmount] = useState<number>(5);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<number>(5);
  const [message, setMessage] = useState(PRESET_MESSAGES[2].label[lang]);
  const [customMessage, setCustomMessage] = useState('');
  const [useCustomMessage, setUseCustomMessage] = useState(false);
  const [step, setStep] = useState<GiftStep>('form');
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ recipientName: string; amount: number; newBalance: number } | null>(null);

  // Reset state when modal opens with new prefilled username
  React.useEffect(() => {
    if (isOpen) {
      setUsername(prefilledUsername);
      setAmount(5);
      setCustomAmount('');
      setSelectedPreset(5);
      setMessage(PRESET_MESSAGES[2].label[lang]);
      setCustomMessage('');
      setUseCustomMessage(false);
      setStep('form');
      setError('');
      setResult(null);
    }
  }, [isOpen, prefilledUsername, lang]);

  const handleAmountSelect = useCallback((amt: number) => {
    setSelectedPreset(amt);
    setAmount(amt);
    setCustomAmount('');
  }, []);

  const handleCustomAmountChange = useCallback((val: string) => {
    setCustomAmount(val);
    setSelectedPreset(0);
    const num = parseInt(val, 10);
    if (num > 0) setAmount(num);
  }, []);

  const handlePresetMessage = useCallback((msg: string) => {
    setMessage(msg);
    setUseCustomMessage(false);
    setCustomMessage('');
  }, []);

  const handleCustomMessageSwitch = useCallback(() => {
    setUseCustomMessage(true);
    setMessage('');
  }, []);

  const handleSend = useCallback(async () => {
    if (!username.trim()) {
      setError(lang === 'el' ? 'Γράψε το username του φίλου σου' : 'Enter your friend\'s username');
      return;
    }
    if (amount < 1) {
      setError(lang === 'el' ? 'Επίλεξε ποσό' : 'Select an amount');
      return;
    }

    setStep('sending');
    setError('');

    try {
      const finalMessage = useCustomMessage ? customMessage.trim().slice(0, 100) : message;

      const res = await authFetch('/api/auth/gift', {
        method: 'POST',
        body: JSON.stringify({
          toUsername: username.trim(),
          amount,
          message: finalMessage,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || (lang === 'el' ? 'Κάτι πήγε στραβά' : 'Something went wrong'));
        setStep('error');
        return;
      }

      setResult({
        recipientName: data.recipientName,
        amount: data.amount,
        newBalance: data.newBalance,
      });
      setStep('success');

      if (onGiftSent) {
        onGiftSent(data.newBalance);
      }
    } catch (err: any) {
      setError(err.message || (lang === 'el' ? 'Σφάλμα σύνδεσης' : 'Connection error'));
      setStep('error');
    }
  }, [username, amount, message, customMessage, useCustomMessage, lang, onGiftSent]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 xl:pl-80 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-[2rem] bg-[#0B0F1A] border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.15)] overflow-hidden animate-in zoom-in-95 duration-300"
      >
        {/* Header */}
        <div className="relative p-6 pb-4 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border-b border-white/5">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 p-2 rounded-full text-white/60 hover:text-white transition-all border border-white/10"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Gift size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-[1000] text-white italic uppercase tracking-tight">
                {lang === 'el' ? 'ΣΤΕΙΛΕ ΔΩΡΟ' : 'SEND GIFT'}
              </h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                {lang === 'el' ? 'Χαροποίησε έναν φίλο!' : 'Make a friend happy!'}
              </p>
            </div>
          </div>
        </div>

        {/* Form Step */}
        {step === 'form' && (
          <div className="p-6 space-y-5">
            {/* Username Search */}
            <div className="space-y-2">
              <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                {lang === 'el' ? 'ΨΑΞΕ ΦΙΛΟ' : 'SEARCH FRIEND'}
              </label>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={lang === 'el' ? 'Ψευδώνυμο φίλου...' : 'Friend\'s username...'}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
              </div>
            </div>

            {/* Amount Selection */}
            <div className="space-y-2">
              <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                {lang === 'el' ? 'ΠΟΣΟ' : 'AMOUNT'}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {PRESET_AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => handleAmountSelect(amt)}
                    className={`py-3 rounded-xl font-[1000] text-lg italic transition-all border ${
                      selectedPreset === amt
                        ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                        : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white/80'
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder={lang === 'el' ? 'Ή γράψε ποσό...' : 'Or type amount...'}
                min={1}
                max={1000}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all"
              />
            </div>

            {/* Message Selection */}
            <div className="space-y-2">
              <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                {lang === 'el' ? 'ΜΗΝΥΜΑ' : 'MESSAGE'}
              </label>
              <div className="flex flex-wrap gap-2">
                {PRESET_MESSAGES.map((pm) => (
                  <button
                    key={pm.id}
                    onClick={() => handlePresetMessage(pm.label[lang])}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                      !useCustomMessage && message === pm.label[lang]
                        ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                        : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
                    }`}
                  >
                    {pm.label[lang]}
                  </button>
                ))}
                <button
                  onClick={handleCustomMessageSwitch}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                    useCustomMessage
                      ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                      : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
                  }`}
                >
                  {lang === 'el' ? '✏️ Δικό μου' : '✏️ Custom'}
                </button>
              </div>
              {useCustomMessage && (
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value.slice(0, 100))}
                  placeholder={lang === 'el' ? 'Γράψε μήνυμα... (max 100)' : 'Write message... (max 100)'}
                  maxLength={100}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all"
                />
              )}
            </div>

            {/* Preview Card */}
            {username.trim() && amount > 0 && (
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-4 text-center">
                <p className="text-white/80 text-sm font-bold">
                  {lang === 'el'
                    ? `Στέλνεις ${amount} credits στον `
                    : `You're sending ${amount} credits to `}
                  <span className="text-purple-300 font-[1000]">{username.trim()}</span>
                  {' 🎁'}
                </p>
                <p className="text-white/40 text-xs mt-1 italic">
                  {useCustomMessage ? customMessage || '...' : message}
                </p>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <AlertCircle size={14} />
                {error}
              </div>
            )}

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={!username.trim() || amount < 1}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[1000] text-sm uppercase italic tracking-widest hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-purple-500/20 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {lang === 'el' ? 'ΣΤΕΙΛΕ ΔΩΡΟ' : 'SEND GIFT'}
            </button>
          </div>
        )}

        {/* Sending Step */}
        {step === 'sending' && (
          <div className="p-12 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center animate-pulse">
              <Loader2 size={32} className="text-purple-400 animate-spin" />
            </div>
            <p className="text-white/60 font-bold text-sm">
              {lang === 'el' ? 'Στέλνω το δώρο...' : 'Sending your gift...'}
            </p>
          </div>
        )}

        {/* Success Step */}
        {step === 'success' && result && (
          <div className="p-8 flex flex-col items-center justify-center gap-5 text-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <Check size={40} className="text-emerald-400" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles size={24} className="text-amber-400 animate-bounce" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-[1000] text-white italic uppercase tracking-tight">
                {lang === 'el' ? 'ΕΣΤΑΛΗ!' : 'SENT!'}
              </h3>
              <p className="text-white/60 text-sm font-bold mt-2">
                {lang === 'el'
                  ? `Έστειλες ${result.amount} credits στον ${result.recipientName}!`
                  : `You sent ${result.amount} credits to ${result.recipientName}!`}
              </p>
              <p className="text-white/30 text-xs font-bold mt-1">
                {lang === 'el'
                  ? `Νέο υπόλοιπο: ${result.newBalance} credits`
                  : `New balance: ${result.newBalance} credits`}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              {lang === 'el' ? 'Κλείσιμο' : 'Close'}
            </button>
          </div>
        )}

        {/* Error Step */}
        {step === 'error' && (
          <div className="p-8 flex flex-col items-center justify-center gap-5 text-center">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
              <AlertCircle size={32} className="text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-[1000] text-white italic uppercase tracking-tight">
                {lang === 'el' ? 'ΣΦΑΛΜΑ' : 'ERROR'}
              </h3>
              <p className="text-red-400 text-sm font-bold mt-2">{error}</p>
            </div>
            <button
              onClick={() => { setStep('form'); setError(''); }}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              {lang === 'el' ? 'Δοκίμασε ξανά' : 'Try again'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
