
import React, { useState, useRef } from 'react';
import GameBackButton from './GameBackButton';
import { Sparkles, Trophy, Star, Palette, RotateCcw, Loader2, Image, Zap, Crown, ThumbsUp, Clock } from 'lucide-react';
import { authFetch } from '../../services/backendApi';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';

interface ArtBattleProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// ─── CHALLENGE THEMES ───────────────────────
const THEMES_EL = [
  { theme: 'Ένας δράκος που πετάει πάνω από ένα κάστρο', category: '🐉 Φαντασία' },
  { theme: 'Ρομπότ που παίζει μουσική σε συναυλία', category: '🤖 Sci-Fi' },
  { theme: 'Μαγικό δάσος με φωτεινά λουλούδια', category: '🌸 Φύση' },
  { theme: 'Αστροναύτης που σερφάρει πάνω σε κομήτη', category: '🚀 Διάστημα' },
  { theme: 'Υποβρύχια πόλη με γυάλινους θόλους', category: '🌊 Ωκεανός' },
  { theme: 'Γάτα-μάγος που κάνει ξόρκια', category: '🐱 Ζώα' },
  { theme: 'Πειρατικό πλοίο στα σύννεφα', category: '☁️ Περιπέτεια' },
  { theme: 'Neon πόλη του μέλλοντος τη νύχτα', category: '🌃 Cyberpunk' },
  { theme: 'Τυραννόσαυρος Rex ως σούπερ-ήρωας', category: '🦕 Δεινόσαυροι' },
  { theme: 'Χιονισμένο παλάτι με βόρειο σέλας', category: '❄️ Χειμώνας' },
  { theme: 'Αρχαίος Έλληνας πολεμιστής με φτερά', category: '⚔️ Μυθολογία' },
  { theme: 'Σχολείο στο διάστημα με εξωγήινους μαθητές', category: '👽 Σχολείο' },
];

const THEMES_EN = [
  { theme: 'A dragon flying over a castle at sunset', category: '🐉 Fantasy' },
  { theme: 'A robot playing guitar at a concert', category: '🤖 Sci-Fi' },
  { theme: 'A magical forest with glowing flowers', category: '🌸 Nature' },
  { theme: 'An astronaut surfing on a comet', category: '🚀 Space' },
  { theme: 'An underwater city with glass domes', category: '🌊 Ocean' },
  { theme: 'A wizard cat casting spells', category: '🐱 Animals' },
  { theme: 'A pirate ship sailing through clouds', category: '☁️ Adventure' },
  { theme: 'A neon futuristic city at night', category: '🌃 Cyberpunk' },
  { theme: 'A T-Rex as a superhero', category: '🦕 Dinosaurs' },
  { theme: 'A snow palace with northern lights', category: '❄️ Winter' },
  { theme: 'An ancient Greek warrior with wings', category: '⚔️ Mythology' },
  { theme: 'A space school with alien students', category: '👽 School' },
];

interface ArtEntry {
  prompt: string;
  imageUrl: string;
  score: number;
  creativity: number;
  detail: number;
  relevance: number;
}

export default function ArtBattle({ lang, onBack }: ArtBattleProps) {
  const { earnCredits, showNotification } = useEconomy();
  const [gameState, setGameState] = useState<'menu' | 'challenge' | 'creating' | 'generating' | 'result' | 'gallery'>('menu');
  const [currentTheme, setCurrentTheme] = useState<typeof THEMES_EL[0] | null>(null);
  const [userPrompt, setUserPrompt] = useState('');
  const [currentEntry, setCurrentEntry] = useState<ArtEntry | null>(null);
  const [gallery, setGallery] = useState<ArtEntry[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [round, setRound] = useState(0);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const isGreek = lang === 'el';
  const themes = isGreek ? THEMES_EL : THEMES_EN;

  const startChallenge = () => {
    const shuffled = [...themes].sort(() => Math.random() - 0.5);
    setCurrentTheme(shuffled[0]);
    setUserPrompt('');
    setError('');
    setRound(prev => prev + 1);
    setGameState('challenge');
    setTimeLeft(60);

    // Start timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setTimeout(() => inputRef.current?.focus(), 200);
  };

  const generateArt = async () => {
    if (!userPrompt.trim() || !currentTheme) return;
    if (timerRef.current) clearInterval(timerRef.current);

    setGameState('generating');
    setError('');

    try {
      // Use the existing AI proxy to generate image
      const enhancedPrompt = `Create a beautiful, detailed, colorful illustration in a vibrant cartoon/anime style: ${userPrompt}. The art should be high quality, appealing to children, and safe for all ages. Theme: ${currentTheme.theme}`;

      const response = await authFetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gemini-2.5-flash-preview-04-17',
          contents: [{ role: 'user', parts: [{ text: enhancedPrompt }] }],
          config: {
            responseModalities: ['TEXT', 'IMAGE'],
          },
        }),
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();

      // Find image in response
      let imageUrl = '';
      if (data.candidates?.[0]?.content?.parts) {
        for (const part of data.candidates[0].content.parts) {
          if (part.inlineData?.data) {
            imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      if (!imageUrl) {
        throw new Error(isGreek ? 'Δεν δημιουργήθηκε εικόνα' : 'No image was generated');
      }

      // Score the prompt based on various factors
      const promptWords = userPrompt.trim().split(/\s+/).length;
      const hasAdjectives = /beautiful|colorful|magical|epic|detailed|huge|tiny|ancient|modern|bright|dark|glowing|flying|swimming|dancing/i.test(userPrompt) ||
                           /ωραί|χρωματιστ|μαγικ|επικ|λεπτομερ|τεράστι|μικροσκοπικ|αρχαί|φωτειν|σκοτειν|πετ|κολυμπ/i.test(userPrompt);
      const hasScene = /background|scene|landscape|with|near|inside|above|below|surrounded/i.test(userPrompt) ||
                      /φόντο|σκηνή|τοπίο|κοντά|μέσα|πάνω|κάτω|γύρω|δίπλα/i.test(userPrompt);
      const mentionsTheme = currentTheme.theme.split(' ').some(word =>
        word.length > 3 && userPrompt.toLowerCase().includes(word.toLowerCase())
      );

      const creativity = Math.min(100, 40 + promptWords * 3 + (hasAdjectives ? 15 : 0) + Math.floor(Math.random() * 15));
      const detail = Math.min(100, 30 + promptWords * 4 + (hasScene ? 20 : 0) + Math.floor(Math.random() * 15));
      const relevance = mentionsTheme ? Math.min(100, 60 + Math.floor(Math.random() * 30)) : Math.min(100, 30 + Math.floor(Math.random() * 40));
      const timeBonus = Math.max(0, timeLeft * 0.3);
      const overallScore = Math.floor((creativity * 0.35 + detail * 0.3 + relevance * 0.35) + timeBonus);

      const entry: ArtEntry = {
        prompt: userPrompt,
        imageUrl,
        score: overallScore,
        creativity,
        detail,
        relevance,
      };

      setCurrentEntry(entry);
      setGallery(prev => [...prev, entry]);
      setTotalScore(prev => prev + overallScore);
      grantGameReward('artbattle', 2, earnCredits, showNotification, lang);
      setGameState('result');

    } catch (err: any) {
      setError(err.message || 'Generation failed');
      setGameState('challenge');
    }
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return { text: isGreek ? 'ΑΡΙΣΤΟΥΡΓΗΜΑ!' : 'MASTERPIECE!', color: 'text-amber-300', emoji: '👑' };
    if (score >= 80) return { text: isGreek ? 'ΕΞΑΙΡΕΤΙΚΟ!' : 'EXCELLENT!', color: 'text-emerald-300', emoji: '🌟' };
    if (score >= 70) return { text: isGreek ? 'ΠΟΛΥ ΚΑΛΟ!' : 'VERY GOOD!', color: 'text-blue-300', emoji: '✨' };
    if (score >= 50) return { text: isGreek ? 'ΚΑΛΟ!' : 'GOOD!', color: 'text-purple-300', emoji: '👍' };
    return { text: isGreek ? 'ΠΡΟΣΠΑΘΗΣΕ ΞΑΝΑ' : 'TRY HARDER', color: 'text-white/50', emoji: '💪' };
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#0B0F1A] select-none overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-black/70 backdrop-blur-xl border-b border-fuchsia-500/20 z-20 relative shrink-0">
        <GameBackButton onClick={onBack} lang={lang} />
        <div className="flex items-center gap-2">
          <span className="text-white/60 text-xs font-bold uppercase tracking-wider">{isGreek ? 'ΜΑΧΗ ΤΕΧΝΗΣ' : 'ART BATTLE'}</span>
          {totalScore > 0 && (
            <span className="text-amber-400 text-xs font-[900] bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">⭐ {totalScore}</span>
          )}
        </div>
      </div>

      <div className="flex-1 relative overflow-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0520] via-[#0B0F1A] to-[#0a0520]" />

        {/* ─── MENU ─── */}
        {gameState === 'menu' && (
          <div className="relative z-20 flex flex-col items-center justify-center min-h-full px-6 py-8 animate-in fade-in">
            <div className="text-center space-y-5">
              <div className="text-6xl md:text-8xl">🎨</div>
              <h1 className="text-3xl md:text-5xl font-[1000] uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-amber-400">
                AI ART
              </h1>
              <h2 className="text-xl md:text-2xl font-[1000] uppercase italic text-white/60">BATTLE</h2>
              <p className="text-white/40 text-sm max-w-xs mx-auto">
                {isGreek ? 'Γράψε prompts, δημιούργησε AI εικόνες και κέρδισε πόντους!' : 'Write prompts, create AI images and earn points!'}
              </p>

              <div className="space-y-3 mt-4">
                <button onClick={startChallenge} className="w-full max-w-xs mx-auto px-8 py-3.5 bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-[900] uppercase rounded-2xl shadow-[0_0_30px_rgba(217,70,239,0.4)] active:scale-95 transition-all border border-white/10 flex items-center justify-center gap-2">
                  <Sparkles size={18} /> {isGreek ? 'ΝΕΑ ΠΡΟΚΛΗΣΗ' : 'NEW CHALLENGE'}
                </button>

                {gallery.length > 0 && (
                  <button onClick={() => setGameState('gallery')} className="w-full max-w-xs mx-auto px-8 py-3 bg-white/5 text-white/60 font-bold uppercase rounded-2xl border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <Image size={16} /> {isGreek ? `GALLERY (${gallery.length})` : `GALLERY (${gallery.length})`}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ─── CHALLENGE ─── */}
        {gameState === 'challenge' && currentTheme && (
          <div className="relative z-20 flex flex-col items-center px-4 py-4 min-h-full animate-in slide-in-from-bottom">
            <div className="w-full max-w-md space-y-4">
              {/* Theme card */}
              <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-5 border border-fuchsia-500/20 text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs bg-fuchsia-500/20 text-fuchsia-300 px-2 py-0.5 rounded-full font-bold border border-fuchsia-500/20">
                    {currentTheme.category}
                  </span>
                  <span className="text-xs bg-white/5 text-white/40 px-2 py-0.5 rounded-full font-bold border border-white/5">
                    #{round}
                  </span>
                </div>
                <h3 className="text-white font-[900] text-lg">
                  {isGreek ? '🎯 ΘΕΜΑ:' : '🎯 THEME:'}
                </h3>
                <p className="text-fuchsia-200 font-bold text-base italic">"{currentTheme.theme}"</p>
              </div>

              {/* Timer */}
              <div className="flex items-center justify-center gap-2">
                <Clock size={14} className={timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white/40'} />
                <span className={`font-[900] text-lg tabular-nums ${timeLeft <= 10 ? 'text-red-400' : 'text-white/60'}`}>{timeLeft}s</span>
              </div>

              {/* Prompt input */}
              <div className="space-y-2">
                <label className="text-white/50 text-xs font-bold uppercase tracking-wider block text-center">
                  {isGreek ? '✏️ Γράψε το prompt σου:' : '✏️ Write your prompt:'}
                </label>
                <textarea
                  ref={inputRef}
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  placeholder={isGreek ? 'Περίγραψε την εικόνα που θέλεις...' : 'Describe the image you want...'}
                  className="w-full h-28 bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm font-medium outline-none focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/20 transition-all placeholder:text-white/20 resize-none"
                />
                <p className="text-white/30 text-[10px] text-center">
                  {isGreek ? '💡 Tip: Χρησιμοποίησε χρώματα, συναισθήματα & λεπτομέρειες για καλύτερο score!' : '💡 Tip: Use colors, emotions & details for a better score!'}
                </p>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center">
                  <p className="text-red-400 text-xs">{error}</p>
                </div>
              )}

              <button
                onClick={generateArt}
                disabled={!userPrompt.trim() || timeLeft === 0}
                className="w-full py-3.5 bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-[900] text-sm uppercase rounded-xl disabled:opacity-30 active:scale-95 transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] flex items-center justify-center gap-2 border border-white/10"
              >
                <Sparkles size={16} /> {isGreek ? 'ΔΗΜΙΟΥΡΓΗΣΕ!' : 'CREATE!'}
              </button>
            </div>
          </div>
        )}

        {/* ─── GENERATING ─── */}
        {gameState === 'generating' && (
          <div className="relative z-20 flex flex-col items-center justify-center min-h-full px-6 animate-in fade-in">
            <div className="text-center space-y-5">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-fuchsia-500/20 animate-ping" />
                <div className="absolute inset-0 rounded-full border-4 border-fuchsia-500/40 animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles size={32} className="text-fuchsia-400 animate-pulse" />
                </div>
              </div>
              <h3 className="text-white font-[900] text-lg">
                {isGreek ? 'ΔΗΜΙΟΥΡΓΙΑ AI ART...' : 'CREATING AI ART...'}
              </h3>
              <p className="text-white/40 text-sm">{isGreek ? 'Η μαγεία γίνεται!' : 'Magic is happening!'}</p>
            </div>
          </div>
        )}

        {/* ─── RESULT ─── */}
        {gameState === 'result' && currentEntry && (
          <div className="relative z-20 flex flex-col items-center px-4 py-4 min-h-full animate-in zoom-in">
            <div className="w-full max-w-md space-y-4">
              {/* Score header */}
              {(() => {
                const label = getScoreLabel(currentEntry.score);
                return (
                  <div className="text-center space-y-1">
                    <div className="text-4xl">{label.emoji}</div>
                    <h2 className={`text-2xl font-[1000] uppercase italic ${label.color}`}>{label.text}</h2>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-amber-400 font-[900] text-4xl tabular-nums">{currentEntry.score}</p>
                  </div>
                );
              })()}

              {/* Generated image */}
              <div className="rounded-2xl overflow-hidden border-2 border-fuchsia-500/20 shadow-[0_0_40px_rgba(217,70,239,0.2)]">
                <img src={currentEntry.imageUrl} alt="AI Generated" className="w-full aspect-square object-cover" />
              </div>

              {/* Prompt used */}
              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <p className="text-white/40 text-[10px] font-bold uppercase mb-1">{isGreek ? 'Το prompt σου:' : 'Your prompt:'}</p>
                <p className="text-white/80 text-sm italic">"{currentEntry.prompt}"</p>
              </div>

              {/* Score breakdown */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: isGreek ? 'Δημιουργικότητα' : 'Creativity', value: currentEntry.creativity, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500' },
                  { label: isGreek ? 'Λεπτομέρεια' : 'Detail', value: currentEntry.detail, color: 'text-cyan-400', bg: 'bg-cyan-500' },
                  { label: isGreek ? 'Σχετικότητα' : 'Relevance', value: currentEntry.relevance, color: 'text-amber-400', bg: 'bg-amber-500' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/[0.03] rounded-xl p-2.5 border border-white/5 text-center">
                    <p className={`${s.color} font-[900] text-lg tabular-nums`}>{s.value}</p>
                    <div className="h-1.5 bg-white/5 rounded-full mt-1 overflow-hidden">
                      <div className={`h-full ${s.bg} rounded-full`} style={{ width: `${s.value}%` }} />
                    </div>
                    <p className="text-white/30 text-[8px] font-bold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button onClick={startChallenge} className="w-full py-3 bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-[900] text-sm uppercase rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] flex items-center justify-center gap-2 border border-white/10">
                  <Sparkles size={16} /> {isGreek ? 'ΝΕΑ ΠΡΟΚΛΗΣΗ' : 'NEW CHALLENGE'}
                </button>
                <div className="flex gap-2">
                  <button onClick={() => setGameState('gallery')} className="flex-1 py-2.5 bg-white/5 text-white/60 font-bold text-sm rounded-xl hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-1.5">
                    <Image size={14} /> Gallery
                  </button>
                  <button onClick={() => setGameState('menu')} className="flex-1 py-2.5 bg-white/5 text-white/60 font-bold text-sm rounded-xl hover:bg-white/10 transition-colors border border-white/10">
                    Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── GALLERY ─── */}
        {gameState === 'gallery' && (
          <div className="relative z-20 px-4 py-4 min-h-full animate-in fade-in">
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-4 space-y-1">
                <h2 className="text-xl font-[1000] text-white uppercase italic flex items-center justify-center gap-2">
                  <Palette size={20} className="text-fuchsia-400" /> {isGreek ? 'GALLERY' : 'GALLERY'}
                </h2>
                <p className="text-white/40 text-xs">{gallery.length} {isGreek ? 'δημιουργίες' : 'creations'} — Total: {totalScore} pts</p>
              </div>

              {gallery.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-white/30 text-sm">{isGreek ? 'Δεν υπάρχουν ακόμα δημιουργίες' : 'No creations yet'}</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {gallery.map((entry, i) => (
                    <div key={i} className="bg-white/[0.03] rounded-xl overflow-hidden border border-white/5 group hover:border-fuchsia-500/30 transition-all">
                      <div className="aspect-square overflow-hidden">
                        <img src={entry.imageUrl} alt={`Art ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-fuchsia-400 font-[900] text-sm">{entry.score}pts</span>
                          <span className="text-[10px] text-white/30">#{i + 1}</span>
                        </div>
                        <p className="text-white/40 text-[10px] mt-0.5 line-clamp-2 italic">"{entry.prompt}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex gap-2">
                <button onClick={startChallenge} className="flex-1 py-3 bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-[900] text-sm uppercase rounded-xl active:scale-95 transition-all border border-white/10 flex items-center justify-center gap-2">
                  <Sparkles size={16} /> {isGreek ? 'ΝΕΑ' : 'NEW'}
                </button>
                <button onClick={() => setGameState('menu')} className="flex-1 py-3 bg-white/5 text-white/60 font-bold text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  Menu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
