/**
 * GiftModal — Send credits, images, or songs as a gift to a friend
 * =================================================================
 * A bilingual (Greek/English) modal for sending gifts.
 * Tabs: Credits | Images | Songs
 *
 * v2: Live username verification (debounce 600ms → /api/auth/lookup-user)
 *     Send button disabled until recipient is confirmed found in DB.
 */
import React, { useState, useCallback, useEffect } from 'react';
import { X, Gift, Search, Send, Sparkles, AlertCircle, Check, Loader2, Image, Music, CheckCircle2, XCircle } from 'lucide-react';
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
  { id: 'bravo', label: { el: '⭐ Μπράβο ρε!', en: '⭐ You rock!' } },
  { id: 'gift', label: { el: '🎁 Δώρο για σένα!', en: '🎁 A gift for you!' } },
  { id: 'music', label: { el: '🎵 Άκου αυτό!', en: '🎵 Listen to this!' } },
  { id: 'hero', label: { el: '🦸 Γίνε ήρωας!', en: '🦸 Be a hero!' } },
  { id: 'thanks', label: { el: '🙏 Ευχαριστώ φίλε!', en: '🙏 Thanks friend!' } },
  { id: 'fire', label: { el: '🔥 Είσαι φωτιά!', en: '🔥 You\'re on fire!' } },
  { id: 'cool', label: { el: '😎 Τέλειος!', en: '😎 So cool!' } },
  { id: 'heart', label: { el: '💜 Σ\' αγαπώ φίλε!', en: '💜 Love you friend!' } },
  { id: 'rocket', label: { el: '🚀 Πάμε δυνατά!', en: '🚀 Let\'s gooo!' } },
];

type GiftTab = 'credits' | 'image' | 'song';
type GiftStep = 'form' | 'sending' | 'success' | 'error';
type UsernameStatus = 'idle' | 'checking' | 'found' | 'not_found';

interface LocalHero {
  id: string;
  name: string;
  image: string;
  description?: string;
}

interface LocalSong {
  id: string;
  title: string;
  cover?: string;
  audioUrl?: string;
  streamUrl?: string;
  sunoCover?: string;
  lyrics?: string;
  style?: string;
  audioStatus?: string;
}

function loadLocalHeroes(): LocalHero[] {
  try {
    const raw = localStorage.getItem('wb_heroes');
    if (!raw) return [];
    return JSON.parse(raw) || [];
  } catch { return []; }
}

function loadLocalSongs(): LocalSong[] {
  try {
    const raw = localStorage.getItem('wisebot_music_library');
    if (!raw) return [];
    return JSON.parse(raw) || [];
  } catch { return []; }
}

export default function GiftModal({ lang, isOpen, onClose, prefilledUsername = '', onGiftSent }: GiftModalProps) {
  const [tab, setTab] = useState<GiftTab>('credits');
  const [username, setUsername] = useState(prefilledUsername);

  // ── Live username verification state ─────────────────────────────
  const [usernameStatus, setUsernameStatus] = useState<UsernameStatus>('idle');
  const [verifiedName, setVerifiedName] = useState('');   // exact name from DB

  const [amount, setAmount] = useState<number>(5);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<number>(5);
  const [message, setMessage] = useState(PRESET_MESSAGES[2].label[lang]);
  const [customMessage, setCustomMessage] = useState('');
  const [useCustomMessage, setUseCustomMessage] = useState(false);
  const [heroes, setHeroes] = useState<LocalHero[]>([]);
  const [songs, setSongs] = useState<LocalSong[]>([]);
  const [selectedHero, setSelectedHero] = useState<LocalHero | null>(null);
  const [selectedSong, setSelectedSong] = useState<LocalSong | null>(null);
  const [step, setStep] = useState<GiftStep>('form');
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ recipientName: string; type: GiftTab; title?: string; newBalance?: number } | null>(null);

  // ── Reset on open ──────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      setUsername(prefilledUsername);
      setUsernameStatus(prefilledUsername ? 'idle' : 'idle');
      setVerifiedName('');
      setAmount(5);
      setCustomAmount('');
      setSelectedPreset(5);
      setMessage(PRESET_MESSAGES[2].label[lang]);
      setCustomMessage('');
      setUseCustomMessage(false);
      setSelectedHero(null);
      setSelectedSong(null);
      setStep('form');
      setError('');
      setResult(null);
      setHeroes(loadLocalHeroes());
      setSongs(loadLocalSongs().filter(s => s.audioStatus === 'complete' && (s.audioUrl || s.streamUrl)));
    }
  }, [isOpen, prefilledUsername, lang]);

  // ── Live username lookup with 600ms debounce ───────────────────────
  useEffect(() => {
    const trimmed = username.trim();
    if (!trimmed || trimmed.length < 2) {
      setUsernameStatus('idle');
      setVerifiedName('');
      return;
    }

    setUsernameStatus('checking');
    setVerifiedName('');

    const timer = setTimeout(async () => {
      try {
        const res = await authFetch(`/api/auth/lookup-user?username=${encodeURIComponent(trimmed)}`);
        // Only trust "not found" when the request itself succeeded (2xx)
        if (!res.ok) {
          // Server error — don't block the user, let the backend decide on send
          setUsernameStatus('idle');
          setVerifiedName('');
          return;
        }
        const data = await res.json();
        if (data.found) {
          setUsernameStatus('found');
          setVerifiedName(data.name);
        } else {
          setUsernameStatus('not_found');
          setVerifiedName('');
        }
      } catch {
        // Network error — don't block sending
        setUsernameStatus('idle');
        setVerifiedName('');
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [username]);

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

  const handleSend = useCallback(async () => {
    if (!username.trim()) {
      setError(lang === 'el' ? 'Γράψε το username του φίλου σου' : "Enter your friend's username");
      return;
    }
    const finalMessage = useCustomMessage ? customMessage.trim().slice(0, 100) : message;
    // Use the verified DB name if available, otherwise the typed username
    const toUsername = verifiedName || username.trim();

    if (tab === 'credits') {
      if (amount < 1) {
        setError(lang === 'el' ? 'Επίλεξε ποσό' : 'Select an amount');
        return;
      }
      setStep('sending');
      setError('');
      try {
        const res = await authFetch('/api/auth/gift', {
          method: 'POST',
          body: JSON.stringify({ toUsername, amount, message: finalMessage }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || (lang === 'el' ? 'Κάτι πήγε στραβά' : 'Something went wrong'));
          setStep('error');
          return;
        }
        setResult({ recipientName: data.recipientName, type: 'credits', newBalance: data.newBalance });
        setStep('success');
        if (onGiftSent) onGiftSent(data.newBalance);
      } catch (err: any) {
        setError(err.message || (lang === 'el' ? 'Σφάλμα σύνδεσης' : 'Connection error'));
        setStep('error');
      }

    } else if (tab === 'image') {
      if (!selectedHero) {
        setError(lang === 'el' ? 'Επίλεξε εικόνα' : 'Select an image');
        return;
      }
      setStep('sending');
      setError('');
      try {
        const res = await authFetch('/api/auth/send-gift-item', {
          method: 'POST',
          body: JSON.stringify({
            toUsername,
            type: 'image',
            title: selectedHero.name,
            imageData: selectedHero.image,
            message: finalMessage,
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || (lang === 'el' ? 'Κάτι πήγε στραβά' : 'Something went wrong'));
          setStep('error');
          return;
        }
        setResult({ recipientName: data.recipientName, type: 'image', title: selectedHero.name });
        setStep('success');
      } catch (err: any) {
        setError(err.message || (lang === 'el' ? 'Σφάλμα σύνδεσης' : 'Connection error'));
        setStep('error');
      }

    } else if (tab === 'song') {
      if (!selectedSong) {
        setError(lang === 'el' ? 'Επίλεξε τραγούδι' : 'Select a song');
        return;
      }
      setStep('sending');
      setError('');
      try {
        const coverUrl = selectedSong.sunoCover || selectedSong.cover || null;
        const res = await authFetch('/api/auth/send-gift-item', {
          method: 'POST',
          body: JSON.stringify({
            toUsername,
            type: 'song',
            title: selectedSong.title,
            audioUrl: selectedSong.audioUrl || null,
            streamUrl: selectedSong.streamUrl || null,
            coverUrl,
            lyrics: selectedSong.lyrics || null,
            style: selectedSong.style || null,
            message: finalMessage,
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || (lang === 'el' ? 'Κάτι πήγε στραβά' : 'Something went wrong'));
          setStep('error');
          return;
        }
        setResult({ recipientName: data.recipientName, type: 'song', title: selectedSong.title });
        setStep('success');
      } catch (err: any) {
        setError(err.message || (lang === 'el' ? 'Σφάλμα σύνδεσης' : 'Connection error'));
        setStep('error');
      }
    }
  }, [tab, username, usernameStatus, verifiedName, amount, message, customMessage, useCustomMessage, selectedHero, selectedSong, lang, onGiftSent]);

  if (!isOpen) return null;

  const tabItems: { key: GiftTab; icon: React.ReactNode; label: string }[] = [
    { key: 'credits', icon: <span className="text-xs">💰</span>, label: 'Credits' },
    { key: 'image', icon: <Image size={13} />, label: lang === 'el' ? 'Εικόνα' : 'Image' },
    { key: 'song', icon: <Music size={13} />, label: lang === 'el' ? 'Τραγούδι' : 'Song' },
  ];

  // Send button is disabled if:
  // - username is empty
  // - lookup is still running (checking)
  // - tab-specific item not selected
  // NOTE: 'not_found' is a warning only — backend makes the final decision
  const sendDisabled =
    !username.trim() ||
    usernameStatus === 'checking' ||
    (tab === 'credits' && amount < 1) ||
    (tab === 'image' && !selectedHero) ||
    (tab === 'song' && !selectedSong);

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 xl:pl-80 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="w-full max-w-md rounded-[2rem] bg-[#0B0F1A] border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.15)] overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="relative p-6 pb-4 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-transparent border-b border-white/[0.06] flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 p-2 rounded-full text-white/60 hover:text-white transition-all border border-white/10"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
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

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">

          {/* Form Step */}
          {step === 'form' && (
            <div className="p-6 space-y-5">

              {/* Tabs */}
              <div className="flex gap-2 bg-white/[0.04] rounded-2xl p-1">
                {tabItems.map(t => (
                  <button
                    key={t.key}
                    onClick={() => { setTab(t.key); setSelectedHero(null); setSelectedSong(null); setError(''); }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      tab === t.key
                        ? 'bg-purple-500/30 text-purple-300 border border-purple-500/40'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    {t.icon}
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Username Search with live verification */}
              <div className="space-y-1.5">
                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                  {lang === 'el' ? 'ΨΑΞΕ ΦΙΛΟ' : 'SEARCH FRIEND'}
                </label>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type="text"
                    value={username}
                    onChange={e => { setUsername(e.target.value); setError(''); }}
                    placeholder={lang === 'el' ? 'Ψευδώνυμο φίλου...' : "Friend's username..."}
                    className={`w-full bg-white/5 border rounded-xl pl-10 pr-10 py-3 text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:ring-1 transition-all ${
                      usernameStatus === 'found'
                        ? 'border-emerald-500/50 focus:border-emerald-400 focus:ring-emerald-500/20'
                        : usernameStatus === 'not_found'
                        ? 'border-red-500/40 focus:border-red-500/60 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20'
                    }`}
                  />
                  {/* Status indicator */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {usernameStatus === 'checking' && (
                      <Loader2 size={16} className="text-purple-400 animate-spin" />
                    )}
                    {usernameStatus === 'found' && (
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    )}
                    {usernameStatus === 'not_found' && (
                      <XCircle size={16} className="text-red-400" />
                    )}
                  </div>
                </div>

                {/* Inline username status feedback */}
                {usernameStatus === 'found' && verifiedName && (
                  <p className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold px-1">
                    <CheckCircle2 size={12} />
                    {lang === 'el' ? `Βρέθηκε: ` : 'Found: '}
                    <span className="text-emerald-300">{verifiedName}</span>
                  </p>
                )}
                {usernameStatus === 'not_found' && username.trim().length >= 2 && (
                  <p className="flex items-center gap-1.5 text-red-400 text-xs font-bold px-1">
                    <XCircle size={12} />
                    {lang === 'el' ? 'Χρήστης δεν βρέθηκε' : 'User not found'}
                  </p>
                )}
              </div>

              {/* Credits tab content */}
              {tab === 'credits' && (
                <div className="space-y-2">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                    {lang === 'el' ? 'ΠΟΣΟ' : 'AMOUNT'}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {PRESET_AMOUNTS.map(amt => (
                      <button
                        key={amt}
                        onClick={() => handleAmountSelect(amt)}
                        className={`py-3 rounded-xl font-[1000] text-lg italic transition-all duration-200 border ${
                          selectedPreset === amt
                            ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.25)] scale-105'
                            : 'bg-white/[0.04] border-white/[0.08] text-white/50 hover:bg-white/[0.08] hover:text-white/80 hover:scale-105 active:scale-95'
                        }`}
                      >
                        {amt}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={e => handleCustomAmountChange(e.target.value)}
                    placeholder={lang === 'el' ? 'Ή γράψε ποσό...' : 'Or type amount...'}
                    min={1}
                    max={1000}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>
              )}

              {/* Images tab content */}
              {tab === 'image' && (
                <div className="space-y-2">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                    {lang === 'el' ? 'ΕΠΙΛΕΞΕ ΕΙΚΟΝΑ' : 'SELECT IMAGE'}
                  </label>
                  {heroes.length === 0 ? (
                    <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 text-center">
                      <Image size={32} className="text-white/20 mx-auto mb-2" />
                      <p className="text-white/30 text-sm font-bold">
                        {lang === 'el' ? 'Δεν έχεις δημιουργήσει εικόνες ακόμα' : 'No images created yet'}
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                      {heroes.map(hero => (
                        <button
                          key={hero.id}
                          onClick={() => setSelectedHero(selectedHero?.id === hero.id ? null : hero)}
                          className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                            selectedHero?.id === hero.id
                              ? 'border-purple-500 scale-105 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                              : 'border-transparent hover:border-white/20'
                          }`}
                        >
                          <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                          {selectedHero?.id === hero.id && (
                            <div className="absolute inset-0 bg-purple-500/30 flex items-center justify-center">
                              <Check size={20} className="text-white" />
                            </div>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-1.5 py-1">
                            <p className="text-white text-[9px] font-bold truncate">{hero.name}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Songs tab content */}
              {tab === 'song' && (
                <div className="space-y-2">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                    {lang === 'el' ? 'ΕΠΙΛΕΞΕ ΤΡΑΓΟΥΔΙ' : 'SELECT SONG'}
                  </label>
                  {songs.length === 0 ? (
                    <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 text-center">
                      <Music size={32} className="text-white/20 mx-auto mb-2" />
                      <p className="text-white/30 text-sm font-bold">
                        {lang === 'el' ? 'Δεν έχεις ολοκληρωμένα τραγούδια ακόμα' : 'No completed songs yet'}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {songs.map(song => (
                        <button
                          key={song.id}
                          onClick={() => setSelectedSong(selectedSong?.id === song.id ? null : song)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                            selectedSong?.id === song.id
                              ? 'bg-purple-500/20 border-purple-500/50'
                              : 'bg-white/[0.04] border-white/[0.06] hover:bg-white/[0.08]'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center">
                            {(song.sunoCover || song.cover) ? (
                              <img src={song.sunoCover || song.cover} alt={song.title} className="w-full h-full object-cover" />
                            ) : (
                              <Music size={16} className="text-white/30" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-bold truncate">{song.title}</p>
                            {song.style && <p className="text-white/30 text-xs truncate">{song.style}</p>}
                          </div>
                          {selectedSong?.id === song.id && (
                            <Check size={16} className="text-purple-400 flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Message Selection */}
              <div className="space-y-2">
                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                  {lang === 'el' ? 'ΜΗΝΥΜΑ' : 'MESSAGE'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {PRESET_MESSAGES.map(pm => (
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
                    onClick={() => { setUseCustomMessage(true); setMessage(''); }}
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
                    onChange={e => setCustomMessage(e.target.value.slice(0, 100))}
                    placeholder={lang === 'el' ? 'Γράψε μήνυμα... (max 100)' : 'Write message... (max 100)'}
                    maxLength={100}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                )}
              </div>

              {/* Preview Card — shows verified name */}
              {usernameStatus === 'found' && (
                (tab === 'credits' && amount > 0) ||
                (tab === 'image' && !!selectedHero) ||
                (tab === 'song' && !!selectedSong)
              ) && (
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-4 text-center">
                  <p className="text-white/80 text-sm font-bold">
                    {tab === 'credits'
                      ? (lang === 'el' ? `Στέλνεις ${amount} credits στον ` : `You're sending ${amount} credits to `)
                      : tab === 'image'
                      ? (lang === 'el' ? 'Στέλνεις εικόνα στον ' : "You're sending an image to ")
                      : (lang === 'el' ? 'Στέλνεις τραγούδι στον ' : "You're sending a song to ")}
                    <span className="text-purple-300 font-[1000]">{verifiedName}</span>
                    {' 🎁'}
                  </p>
                  {tab === 'image' && selectedHero && (
                    <p className="text-white/40 text-xs mt-1 italic">"{selectedHero.name}"</p>
                  )}
                  {tab === 'song' && selectedSong && (
                    <p className="text-white/40 text-xs mt-1 italic">"{selectedSong.title}"</p>
                  )}
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
                disabled={sendDisabled}
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
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.4)] animate-pulse">
                  <Check size={40} className="text-emerald-400 drop-shadow-lg" />
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
                  {result.type === 'image'
                    ? (lang === 'el' ? `Έστειλες εικόνα στον ${result.recipientName}!` : `You sent an image to ${result.recipientName}!`)
                    : result.type === 'song'
                    ? (lang === 'el' ? `Έστειλες τραγούδι στον ${result.recipientName}!` : `You sent a song to ${result.recipientName}!`)
                    : (lang === 'el' ? `Έστειλες credits στον ${result.recipientName}!` : `You sent credits to ${result.recipientName}!`)}
                </p>
                {result.title && (
                  <p className="text-white/30 text-xs font-bold mt-1">"{result.title}"</p>
                )}
                {result.type === 'credits' && result.newBalance !== undefined && (
                  <p className="text-white/30 text-xs font-bold mt-1">
                    {lang === 'el' ? `Νέο υπόλοιπο: ${result.newBalance} credits` : `New balance: ${result.newBalance} credits`}
                  </p>
                )}
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
    </div>
  );
}
