/**
 * OnboardingOverlay — First-time user onboarding
 * =================================================
 * 4-step cinematic flow shown ONCE after first login:
 * 1. Narrative: "Το ταξίδι ξεκινάει..."
 * 2. Nickname: permanent unique username (for gift sending)
 * 3. Avatar: take/upload photo → AI cartoon → save
 *            OR pick a WiseBot hero character
 * 4. Complete: "Αποστολές ξεκινούν!"
 *
 * Persisted to DB via completeOnboarding() in AuthContext.
 * Shown only when profile.onboardingComplete === false.
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Camera, Upload, RefreshCw, CheckCircle2, ArrowRight, Sparkles, User, Loader2, AlertCircle, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../services/supabaseClient';
import { authFetch } from '../services/backendApi';

interface OnboardingOverlayProps {
  lang: 'el' | 'en';
}

type Step = 'narrative' | 'nickname' | 'avatar' | 'complete';
type AvatarState = 'idle' | 'generating' | 'preview' | 'uploading' | 'character-picker';

// WiseBot hero characters available as default avatars
const WISEBOT_CHARACTERS = [
  '/images/WiseBot_Hero_spark.webp',
  '/images/WiseBot_Hero_Leo.webp',
  '/images/WiseBot_Hero_rubi.webp',
  '/images/WiseBot_Hero_tiger.webp',
  '/images/WiseBot_Hero_monk.webp',
  '/images/WiseBot_Hero_octa.webp',
  '/images/WiseBot_Hero_igu.webp',
  '/images/WiseBot_Hero_ori.webp',
  '/images/WiseBot_Hero_kagu.webp',
  '/images/WiseBot_Hero_sniki.webp',
  '/images/WiseBot_Hero_skuiz.webp',
  '/images/WiseBot_Hero_rakos_.webp',
  '/images/WiseBot_Hero_koxil.webp',
  '/images/WiseBot_Hero_pirc.webp',
  '/images/WiseBot_Hero_muri.webp',
  '/images/WiseBot_Hero_snake.webp',
  '/images/WiseBot_Hero_elos.webp',
  '/images/WiseBot_Hero_lion_quin.webp',
  '/images/WiseBot_Hero_Mario.webp',
  '/images/WiseBot_Hero_monkey.webp',
  '/images/WiseBot_Hero_pike.webp',
  '/images/WiseBot_Hero_let_.webp',
  '/images/WiseBot_Hero_kefala.webp',
  '/images/WiseBot_Hero_sniki-2.webp',
];

// Inject keyframe styles once
const STYLE_ID = 'onboarding-v2-styles';
const injectStyles = () => {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = `
    @keyframes ob2-fadeIn { from { opacity: 0 } to { opacity: 1 } }
    @keyframes ob2-slideUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
    @keyframes ob2-pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.5 } }
    @keyframes ob2-spin { to { transform: rotate(360deg) } }
    @keyframes ob2-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
    @keyframes ob2-glow { 0%,100% { box-shadow: 0 0 30px rgba(245,158,11,0.3) } 50% { box-shadow: 0 0 60px rgba(245,158,11,0.6) } }
    .ob2-spin { animation: ob2-spin 1s linear infinite; }
    .ob2-scrollbar-none::-webkit-scrollbar { display: none; }
    .ob2-scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
  `;
  document.head.appendChild(s);
};

/**
 * Resize + compress a dataURL image to max `maxSize`×`maxSize` JPEG.
 * Returns the raw base64 string (no data URI prefix).
 * Keeps payload well under Vercel's 4.5 MB serverless body limit.
 */
async function compressImage(dataUrl: string, maxSize = 512, quality = 0.85): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > maxSize || height > maxSize) {
        if (width >= height) {
          height = Math.round((height * maxSize) / width);
          width = maxSize;
        } else {
          width = Math.round((width * maxSize) / height);
          height = maxSize;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality).split(',')[1]);
    };
    img.onerror = () => resolve(dataUrl.split(',')[1] ?? dataUrl); // fallback: pass original
    img.src = dataUrl;
  });
}

export default function OnboardingOverlay({ lang }: OnboardingOverlayProps) {
  const { profile, completeOnboarding } = useAuth();

  const [step, setStep] = useState<Step>('narrative');
  const [isVisible, setIsVisible] = useState(false);

  // Nickname state
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [nicknameChecking, setNicknameChecking] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameSuggestions, setNicknameSuggestions] = useState<string[]>([]);

  // Avatar state
  // Hero picker first: it needs no photo of the child. The camera/upload path is the
  // alternative, and only for accounts whose parent is verified (same rule as HeroFactory).
  const [avatarState, setAvatarState] = useState<AvatarState>('character-picker');
  const photoAllowed = !!profile?.parentVerified;
  const [cartoonUrl, setCartoonUrl] = useState<string | null>(null);
  const [selectedCharacterUrl, setSelectedCharacterUrl] = useState<string | null>(null);
  const [avatarError, setAvatarError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showCamera, setShowCamera] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);

  // Completion state
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Show after brief delay so dashboard loads first
  useEffect(() => {
    injectStyles();
    if (profile && !profile.onboardingComplete) {
      const t = setTimeout(() => {
        setNickname(profile.childName || '');
        setIsVisible(true);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [profile]);

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
      }
    };
  }, []);

  // ── NICKNAME VALIDATION ──────────────────────────────────────────
  // IMPORTANT: useCallback must be called BEFORE any early return (Rules of Hooks)
  const validateNickname = useCallback(async (val: string): Promise<boolean> => {
    if (!profile) return false;
    setNicknameError('');
    setNicknameValid(false);

    const trimmed = val.trim();
    if (trimmed.length < 3) {
      setNicknameError(lang === 'el' ? 'Τουλάχιστον 3 χαρακτήρες' : 'At least 3 characters');
      return false;
    }
    if (trimmed.length > 20) {
      setNicknameError(lang === 'el' ? 'Μέχρι 20 χαρακτήρες' : 'Max 20 characters');
      return false;
    }
    if (!/^[\w\u0370-\u03FF\u1F00-\u1FFF]+$/.test(trimmed)) {
      setNicknameError(lang === 'el' ? 'Μόνο γράμματα, αριθμοί και _' : 'Only letters, numbers and _');
      return false;
    }

    // If same as current child_name, it's already theirs → valid
    if (trimmed.toLowerCase() === profile.childName?.toLowerCase()) {
      setNicknameValid(true);
      return true;
    }

    setNicknameChecking(true);
    try {
      const { data } = await supabase
        .from('profiles')
        .select('id')
        .ilike('child_name', trimmed)
        .neq('id', profile.id)
        .limit(1);

      if (data && data.length > 0) {
        setNicknameError(lang === 'el' ? 'Αυτό το ψευδώνυμο υπάρχει ήδη' : 'This nickname is already taken');

        // Generate and check alternative suggestions (e.g. skevis → skevis1, skevis2, skevis3)
        const candidates = [trimmed + '1', trimmed + '2', trimmed + '3', trimmed + '_'];
        const available: string[] = [];
        for (const candidate of candidates) {
          if (candidate.length > 20) continue;
          try {
            const { data: cd } = await supabase
              .from('profiles')
              .select('id')
              .ilike('child_name', candidate)
              .limit(1);
            if (!cd || cd.length === 0) available.push(candidate);
          } catch { /* skip on error */ }
          if (available.length >= 3) break;
        }
        setNicknameSuggestions(available);
        return false;
      } else {
        setNicknameSuggestions([]);
        setNicknameValid(true);
        return true;
      }
    } catch {
      setNicknameValid(true); // Allow on error
      return true;
    } finally {
      setNicknameChecking(false);
    }
  }, [lang, profile?.childName, profile?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Don't render at all if not needed (AFTER all hooks)
  if (!profile || profile.onboardingComplete || !isVisible) return null;

  const handleNicknameChange = (val: string) => {
    setNickname(val);
    setNicknameValid(false);
    setNicknameError('');
    setNicknameSuggestions([]);
  };

  const handleNicknameNext = async () => {
    const isValid = await validateNickname(nickname);
    if (isValid) {
      setStep('avatar');
    }
  };

  // ── AVATAR / CAMERA ────────────────────────────────────────────
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      streamRef.current = stream;
      setShowCamera(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      }, 100);
    } catch {
      setAvatarError(lang === 'el' ? 'Δεν επιτράπηκε η κάμερα. Δοκίμασε να ανεβάσεις φωτογραφία.' : 'Camera not allowed. Try uploading a photo.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    setShowCamera(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 512;
    canvas.height = videoRef.current.videoHeight || 512;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.drawImage(videoRef.current, 0, 0);
    const base64 = canvas.toDataURL('image/jpeg', 0.85);
    stopCamera();
    generateCartoon(base64, 'image/jpeg');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const base64 = ev.target?.result as string;
      generateCartoon(base64, file.type);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const generateCartoon = async (dataUrl: string, _mimeType: string) => {
    setAvatarError('');
    setAvatarState('generating');
    setCartoonUrl(null);

    try {
      // Always compress to max 512×512 JPEG — keeps payload ~50 KB, well under Vercel's 4.5 MB limit
      const compressedBase64 = await compressImage(dataUrl, 512, 0.85);

      // 55-second client-side timeout (API side allows 60s via maxDuration)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 55_000);

      let resp: Response;
      try {
        resp = await authFetch('/api/ai/avatar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageBytes: compressedBase64, mimeType: 'image/jpeg' }),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeoutId);
      }

      const data = await resp.json();
      if (resp.ok && data.image) {
        setCartoonUrl(data.image);
        setAvatarState('preview');
      } else {
        throw new Error(data.error || 'Generation failed');
      }
    } catch (err: any) {
      const isTimeout = err?.name === 'AbortError';
      setAvatarError(
        lang === 'el'
          ? (isTimeout ? 'Έληξε ο χρόνος αναμονής. Δοκίμασε ξανά!' : 'Δεν μπόρεσα να δημιουργήσω το avatar. Δοκίμασε ξανά!')
          : (isTimeout ? 'Request timed out. Please try again!' : 'Could not generate avatar. Please try again!')
      );
      setAvatarState('idle');
    }
  };

  const retryAvatar = () => {
    setCartoonUrl(null);
    setSelectedCharacterUrl(null);
    setAvatarState('idle');
    setAvatarError('');
  };

  // ── UPLOAD TO STORAGE & COMPLETE ─────────────────────────────
  const handleComplete = async (skipAvatar = false) => {
    setSaving(true);
    setSaveError('');

    let finalAvatarUrl = profile.avatarUrl || '';

    if (selectedCharacterUrl) {
      // WiseBot character selected — use static URL directly, no upload needed
      finalAvatarUrl = selectedCharacterUrl;
      localStorage.setItem('wb_avatar', selectedCharacterUrl);
    } else if (!skipAvatar && cartoonUrl) {
      try {
        setAvatarState('uploading');
        // Convert base64 to blob
        const base64 = cartoonUrl.split(',')[1];
        const mime = cartoonUrl.split(';')[0].split(':')[1] || 'image/png';
        const byteChars = atob(base64);
        const byteArr = new Uint8Array(byteChars.length);
        for (let i = 0; i < byteChars.length; i++) byteArr[i] = byteChars.charCodeAt(i);
        const blob = new Blob([byteArr], { type: mime });

        const ext = mime.includes('png') ? 'png' : 'webp';
        const filePath = `${profile.id}/cartoon.${ext}`;

        const { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(filePath, blob, { contentType: mime, upsert: true });

        if (!uploadError) {
          const { data: { publicUrl } } = supabase.storage
            .from('avatars')
            .getPublicUrl(filePath);
          finalAvatarUrl = publicUrl;
          localStorage.setItem('wb_avatar', publicUrl);
        }
      } catch {
        // Continue even if upload fails
      }
    }

    const { error } = await completeOnboarding(nickname.trim(), finalAvatarUrl);
    if (error) {
      setSaveError(lang === 'el' ? 'Σφάλμα αποθήκευσης. Δοκίμασε ξανά.' : 'Save error. Please try again.');
      setSaving(false);
      if (cartoonUrl) setAvatarState('preview');
      return;
    }

    setStep('complete');
    setSaving(false);
  };

  // ── STEP PROGRESS ─────────────────────────────────────────────
  // (narrative doesn't count as a "form" step)

  // ── RENDER ────────────────────────────────────────────────────
  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#06070e]/95 backdrop-blur-2xl"
      style={{ zIndex: 99999, animation: 'ob2-fadeIn 0.5s ease-out forwards' }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              animation: `ob2-pulse ${2 + Math.random() * 3}s ${Math.random() * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Card */}
      <div
        key={step}
        className="relative w-full max-w-sm mx-4 bg-[#0d0f1a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
        style={{ animation: 'ob2-slideUp 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
      >
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/10 blur-[60px] pointer-events-none" />

        <div className="relative z-10 p-7 flex flex-col gap-6">

          {/* ── STEP 1: NARRATIVE ────────────────────────────────── */}
          {step === 'narrative' && (
            <>
              <div className="flex flex-col items-center text-center gap-5">
                {/* Logo / hero image */}
                <div
                  className="w-28 h-28 rounded-[2rem] bg-gradient-to-br from-amber-500/20 to-purple-600/20 border border-amber-500/30 flex items-center justify-center text-6xl shadow-xl"
                  style={{ animation: 'ob2-float 3s ease-in-out infinite' }}
                >
                  🦉
                </div>

                <div className="space-y-3">
                  <p className="text-amber-400/70 text-[10px] font-black uppercase tracking-[0.4em]">
                    {lang === 'el' ? 'WISEBOT ACADEMY' : 'WISEBOT ACADEMY'}
                  </p>
                  <h1 className="text-2xl font-[1000] text-white uppercase italic tracking-tight leading-tight">
                    {lang === 'el' ? 'ΤΟ ΤΑΞΙΔΙ\nΞΕΚΙΝΑΕΙ!' : 'THE JOURNEY\nBEGINS!'}
                  </h1>
                  <p className="text-white/50 text-sm font-bold leading-relaxed">
                    {lang === 'el'
                      ? 'Βοήθησε τους ήρωες να πετύχουν τον στόχο τους. Δημιούργησε και εσύ τον δικό σου!'
                      : 'Help the heroes achieve their goals. Create your own hero too!'}
                  </p>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {(lang === 'el'
                    ? ['🎵 Τραγούδια', '🎨 Εικόνες', '🎬 Video', '🧠 Quiz']
                    : ['🎵 Songs', '🎨 Images', '🎬 Video', '🧠 Quiz']).map(f => (
                    <span key={f} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 text-[10px] font-black uppercase tracking-wider">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep('nickname')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-[1000] text-base uppercase italic tracking-wider shadow-lg hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                style={{ animation: 'ob2-glow 2s ease-in-out infinite' }}
              >
                <Sparkles size={20} />
                {lang === 'el' ? 'ΞΕΚΙΝΑ ΤΟ ΤΑΞΙΔΙ' : 'START THE JOURNEY'}
              </button>
            </>
          )}

          {/* ── STEP 2: NICKNAME ─────────────────────────────────── */}
          {step === 'nickname' && (
            <>
              {/* Progress dots */}
              <div className="flex justify-center gap-2">
                {[0, 1, 2].map(i => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === 0 ? 'w-8 bg-amber-400' : 'w-4 bg-white/15'}`} />
                ))}
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                  <User size={28} className="text-amber-400" />
                </div>
                <h2 className="text-xl font-[1000] text-white uppercase italic tracking-tight">
                  {lang === 'el' ? 'ΔΙΑΛΕΞΕ ΨΕΥΔΩΝΥΜΟ' : 'CHOOSE NICKNAME'}
                </h2>
                <p className="text-white/40 text-xs font-bold leading-relaxed max-w-[260px]">
                  {lang === 'el'
                    ? 'Οι φίλοι σου θα σου στέλνουν δώρα με αυτό. Δεν αλλάζει!'
                    : 'Friends will send you gifts with this. Cannot be changed!'}
                </p>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={nickname}
                    onChange={e => handleNicknameChange(e.target.value)}
                    onBlur={() => nickname.trim().length >= 3 && validateNickname(nickname)}
                    placeholder={lang === 'el' ? 'Το ψευδώνυμό σου...' : 'Your nickname...'}
                    maxLength={20}
                    className={`w-full bg-white/5 border rounded-2xl px-5 py-4 text-white font-bold text-center text-lg outline-none transition-all
                      ${nicknameError ? 'border-red-500/50 focus:border-red-500' : nicknameValid ? 'border-emerald-500/50 focus:border-emerald-400' : 'border-white/10 focus:border-amber-500/50'}
                      focus:shadow-[0_0_20px_rgba(245,158,11,0.15)]`}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  {nicknameChecking && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Loader2 size={16} className="text-amber-400 ob2-spin" />
                    </div>
                  )}
                  {nicknameValid && !nicknameChecking && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    </div>
                  )}
                </div>

                {nicknameError && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <AlertCircle size={14} className="text-red-400 shrink-0" />
                      <p className="text-red-400 text-xs font-bold">{nicknameError}</p>
                    </div>

                    {/* Alternative nickname suggestions */}
                    {nicknameSuggestions.length > 0 && (
                      <div className="space-y-1.5">
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-wider text-center">
                          {lang === 'el' ? 'Διαθέσιμες εναλλακτικές:' : 'Available alternatives:'}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {nicknameSuggestions.map(sug => (
                            <button
                              key={sug}
                              onClick={() => {
                                setNickname(sug);
                                setNicknameError('');
                                setNicknameSuggestions([]);
                                setNicknameValid(false);
                              }}
                              className="px-4 py-2 bg-amber-500/15 border border-amber-500/30 rounded-xl text-amber-300 text-sm font-[1000] hover:bg-amber-500/25 hover:border-amber-500/50 active:scale-95 transition-all"
                            >
                              {sug}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <p className="text-white/20 text-[10px] font-bold text-center">
                  {nickname.trim().length}/20 {lang === 'el' ? 'χαρακτήρες' : 'characters'}
                </p>
              </div>

              <button
                onClick={handleNicknameNext}
                disabled={nickname.trim().length < 3 || !!nicknameError || nicknameChecking}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-[1000] text-base uppercase italic tracking-wider shadow-lg hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ArrowRight size={20} />
                {lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'CONTINUE'}
              </button>

              <button
                onClick={() => { setNickname(''); setStep('avatar'); }}
                className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-white/30 font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                {lang === 'el' ? 'Παράλειψη — συνέχεια χωρίς ψευδώνυμο' : 'Skip — continue without nickname'}
              </button>
            </>
          )}

          {/* ── STEP 3: AVATAR ───────────────────────────────────── */}
          {step === 'avatar' && (
            <>
              {/* Progress dots */}
              <div className="flex justify-center gap-2">
                {[0, 1, 2].map(i => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i <= 1 ? 'w-8 bg-amber-400' : 'w-4 bg-white/15'}`} />
                ))}
              </div>

              {/* Title — hidden in character picker (has its own) */}
              {avatarState !== 'character-picker' && (
                <div className="flex flex-col items-center text-center gap-2">
                  <h2 className="text-xl font-[1000] text-white uppercase italic tracking-tight">
                    {lang === 'el' ? 'ΓΙΝΕ CARTOON!' : 'GO CARTOON!'}
                  </h2>
                  <p className="text-white/40 text-xs font-bold">
                    {lang === 'el' ? 'Φωτογράφησε τον εαυτό σου και η AI θα σε μετατρέψει σε cartoon ήρωα!' : 'Take a photo and AI will turn you into a cartoon hero!'}
                  </p>
                </div>
              )}

              {/* Camera preview */}
              {showCamera && (
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-square">
                  <video ref={videoRef} className="w-full h-full object-cover" playsInline muted />
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3">
                    <button
                      onClick={capturePhoto}
                      className="px-5 py-2.5 bg-white text-black font-[1000] text-xs uppercase rounded-full hover:bg-white/90 active:scale-95 transition-all"
                    >
                      {lang === 'el' ? '📸 ΦΩΤΟΓΡΑΦΙΑ' : '📸 CAPTURE'}
                    </button>
                    <button
                      onClick={stopCamera}
                      className="p-2.5 bg-white/20 rounded-full hover:bg-white/30 transition-all"
                    >
                      <X size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              )}

              {/* Generating state */}
              {avatarState === 'generating' && !showCamera && (
                <div className="flex flex-col items-center gap-4 py-4">
                  <div className="w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Loader2 size={36} className="text-purple-400 ob2-spin" />
                  </div>
                  <p className="text-purple-300 text-sm font-bold" style={{ animation: 'ob2-pulse 1.5s ease-in-out infinite' }}>
                    {lang === 'el' ? 'Η AI σε μετατρέπει σε cartoon...' : 'AI is turning you into cartoon...'}
                  </p>
                </div>
              )}

              {/* Uploading state */}
              {avatarState === 'uploading' && (
                <div className="flex flex-col items-center gap-4 py-4">
                  <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Loader2 size={36} className="text-amber-400 ob2-spin" />
                  </div>
                  <p className="text-amber-300 text-sm font-bold" style={{ animation: 'ob2-pulse 1.5s ease-in-out infinite' }}>
                    {lang === 'el' ? 'Αποθήκευση avatar...' : 'Saving avatar...'}
                  </p>
                </div>
              )}

              {/* Preview state — cartoon photo */}
              {avatarState === 'preview' && cartoonUrl && (
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <img
                      src={cartoonUrl}
                      alt="Cartoon avatar"
                      className="w-36 h-36 rounded-[2rem] object-cover border-4 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.3)]"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-[#0d0f1a]">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                  </div>
                  <p className="text-white/60 text-sm font-bold text-center">
                    {lang === 'el' ? 'Αυτός/Αυτή είσαι! 🎉' : "That's you! 🎉"}
                  </p>
                  <button
                    onClick={retryAvatar}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/50 text-xs font-bold hover:bg-white/10 transition-all"
                  >
                    <RefreshCw size={12} /> {lang === 'el' ? 'Δοκίμασε ξανά' : 'Try again'}
                  </button>
                </div>
              )}

              {/* ── CHARACTER PICKER ─────────────────────────────── */}
              {avatarState === 'character-picker' && (
                <>
                  <div className="flex flex-col items-center text-center gap-1">
                    <h2 className="text-xl font-[1000] text-white uppercase italic tracking-tight">
                      {lang === 'el' ? 'ΠΟΙΟΣ ΗΡΩΑΣ ΕΙΣΑΙ;' : 'WHICH HERO ARE YOU?'}
                    </h2>
                    <p className="text-white/40 text-xs font-bold">
                      {lang === 'el' ? 'Διάλεξε τον ήρωά σου από την παρέα WiseBot!' : 'Pick your hero from the WiseBot crew!'}
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 max-h-52 overflow-y-auto ob2-scrollbar-none">
                    {WISEBOT_CHARACTERS.map((src) => (
                      <button
                        key={src}
                        onClick={() => setSelectedCharacterUrl(src)}
                        className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-105 active:scale-95
                          ${selectedCharacterUrl === src
                            ? 'border-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.5)]'
                            : 'border-white/10 hover:border-white/30'}`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                        {selectedCharacterUrl === src && (
                          <div className="absolute inset-0 bg-amber-500/25 flex items-center justify-center">
                            <CheckCircle2 size={18} className="text-amber-300" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  {saveError && (
                    <div className="flex items-start gap-2 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <AlertCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
                      <p className="text-red-400 text-xs font-bold">{saveError}</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {photoAllowed && (
                      <button
                        onClick={() => { setAvatarState('idle'); setSelectedCharacterUrl(null); }}
                        className="flex-none px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/40 font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                      >
                        📸 {lang === 'el' ? 'Φωτογραφία' : 'Photo'}
                      </button>
                    )}
                    <button
                      onClick={() => handleComplete(false)}
                      disabled={!selectedCharacterUrl || saving}
                      className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-[1000] text-sm uppercase italic tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {saving ? <Loader2 size={16} className="ob2-spin" /> : <CheckCircle2 size={16} />}
                      {lang === 'el' ? 'ΑΥΤΟΣ ΕΙΜΑΙ!' : "THAT'S ME!"}
                    </button>
                  </div>
                </>
              )}

              {/* Idle — show camera/upload options (verified-parent accounts only) */}
              {avatarState === 'idle' && !showCamera && photoAllowed && (
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={startCamera}
                      className="flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-amber-500/30 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center group-hover:border-amber-500/40 transition-all">
                        <Camera size={22} className="text-amber-400" />
                      </div>
                      <span className="text-white/60 text-xs font-black uppercase tracking-wider">
                        {lang === 'el' ? 'Φωτογραφία' : 'Take Photo'}
                      </span>
                    </button>

                    <label className="flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-purple-500/30 transition-all group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center group-hover:border-purple-500/40 transition-all">
                        <Upload size={22} className="text-purple-400" />
                      </div>
                      <span className="text-white/60 text-xs font-black uppercase tracking-wider">
                        {lang === 'el' ? 'Ανέβασε' : 'Upload'}
                      </span>
                      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                    </label>
                  </div>

                  {/* Privacy notice */}
                  <div className="flex items-start gap-2 px-3 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                    <span className="text-[11px] mt-px">🔒</span>
                    <p className="text-white/25 text-[10px] font-bold leading-relaxed">
                      {lang === 'el'
                        ? 'Η εικόνα σου χρησιμοποιείται αποκλειστικά και μόνο για να γίνει cartoon. Δεν αποθηκεύεται πουθενά και διαγράφεται από τον server αμέσως.'
                        : 'Your photo is used exclusively to create a cartoon. It is never stored and is deleted from the server immediately.'}
                    </p>
                  </div>
                </div>
              )}

              {avatarError && (
                <div className="flex items-start gap-2 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <AlertCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  <p className="text-red-400 text-xs font-bold">{avatarError}</p>
                </div>
              )}

              {saveError && avatarState !== 'character-picker' && (
                <div className="flex items-start gap-2 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <AlertCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  <p className="text-red-400 text-xs font-bold">{saveError}</p>
                </div>
              )}

              {/* Bottom CTAs — not shown during character-picker (has its own) */}
              {avatarState !== 'character-picker' && (
                <div className="flex flex-col gap-2">
                  {/* Main CTA: enabled only if preview */}
                  {avatarState === 'preview' && (
                    <button
                      onClick={() => handleComplete(false)}
                      disabled={saving}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-[1000] text-base uppercase italic tracking-wider shadow-lg hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {saving ? <Loader2 size={20} className="ob2-spin" /> : <CheckCircle2 size={20} />}
                      {lang === 'el' ? 'ΑΥΤΟΣ ΕΙΜΑΙ! ✓' : "THAT'S ME! ✓"}
                    </button>
                  )}

                  {/* Choose hero instead — visible when idle or generating */}
                  {(avatarState === 'idle' || avatarState === 'generating') && !showCamera && (
                    <button
                      onClick={() => setAvatarState('character-picker')}
                      disabled={saving || avatarState === 'generating'}
                      className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-white/40 font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all disabled:opacity-30"
                    >
                      {lang === 'el' ? '🦸 Πίσω στους ήρωες' : '🦸 Back to heroes'}
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          {/* ── STEP 4: COMPLETE ─────────────────────────────────── */}
          {step === 'complete' && (
            <>
              <div className="flex flex-col items-center text-center gap-5 py-2">
                {/* Avatar — cartoon, selected character, or default emoji */}
                <div
                  className="relative"
                  style={{ animation: 'ob2-float 3s ease-in-out infinite' }}
                >
                  {(cartoonUrl || selectedCharacterUrl) ? (
                    <img
                      src={cartoonUrl || selectedCharacterUrl!}
                      alt="Your avatar"
                      className="w-32 h-32 rounded-[2rem] object-cover border-4 border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.4)]"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-amber-500/20 to-purple-600/20 border border-amber-500/30 flex items-center justify-center text-6xl shadow-xl">
                      🦸
                    </div>
                  )}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#0d0f1a] border border-amber-500/40 rounded-full">
                    <span className="text-amber-400 font-[1000] text-xs uppercase tracking-widest">{nickname}</span>
                  </div>
                </div>

                <div className="space-y-2 mt-3">
                  <h2 className="text-2xl font-[1000] text-white uppercase italic tracking-tight">
                    {lang === 'el' ? `ΕΤΟΙΜΟΣ,\n${nickname.toUpperCase()}.` : `READY,\n${nickname.toUpperCase()}.`}
                  </h2>
                  <p className="text-white/50 text-sm font-bold leading-relaxed">
                    {lang === 'el'
                      ? 'Διάβασε 3 ιστορίες και 1 βιβλίο και κερδίζεις το πρώτο σου τραγούδι. Η WiseBot θα σου δείχνει τον δρόμο.'
                      : 'Read 3 stories and 1 book and you earn your first song. WiseBot will show you the way.'}
                  </p>
                </div>

                {/* Quick mission preview */}
                <div className="w-full space-y-2">
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-xl">📖</span>
                    <span className="text-white/60 text-xs font-black flex-1">
                      {lang === 'el' ? '3 Ιστορίες Academy' : '3 Academy Stories'}
                    </span>
                    <span className="text-white/20 text-xs font-bold">0/3</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-xl">📚</span>
                    <span className="text-white/60 text-xs font-black flex-1">
                      {lang === 'el' ? '1 Βιβλίο Ebook' : '1 Ebook'}
                    </span>
                    <span className="text-white/20 text-xs font-bold">0/1</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                    <span className="text-xl">🎵</span>
                    <span className="text-amber-400/80 text-xs font-black flex-1">
                      {lang === 'el' ? 'ΔΩΡΕΑΝ Τραγούδι + 60 Credits' : 'FREE Song + 60 Credits'}
                    </span>
                    <span className="text-amber-500/50 text-xs font-bold">🔒</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-[1000] text-base uppercase italic tracking-wider shadow-lg hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                style={{ animation: 'ob2-glow 2s ease-in-out infinite' }}
              >
                <Rocket size={20} />
                {lang === 'el' ? 'ΠΑΜΕ!' : "LET'S GO!"}
              </button>
            </>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
}

// Fix missing import
const Rocket = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);
