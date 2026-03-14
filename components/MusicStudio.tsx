import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Music, Mic, Play, Pause, FileMusic, Wand2, RefreshCcw, Download, Radio, PenLine, Sparkles, Guitar, SkipBack, SkipForward, Volume2, Clock, Trash2 } from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';

interface MusicStudioProps {
  lang: 'el' | 'en';
}

interface GeneratedSong {
  id: string;
  title: string;
  lyrics: string;
  cover: string;
  style: string;
  instrumental: boolean;
  createdAt: number;
}

const GENRES = [
  { id: 'pop', label: 'Pop', emoji: '🎤' },
  { id: 'trap', label: 'Trap', emoji: '🔥' },
  { id: 'rock', label: 'Rock', emoji: '🎸' },
  { id: 'lofi', label: 'Lo-Fi', emoji: '🌙' },
  { id: 'epic', label: 'Cinematic', emoji: '🎬' },
  { id: 'laiko', label: 'Laiko', emoji: '🇬🇷' },
  { id: 'rnb', label: 'R&B', emoji: '💜' },
  { id: 'edm', label: 'EDM', emoji: '⚡' },
  { id: 'jazz', label: 'Jazz', emoji: '🎷' },
  { id: 'hiphop', label: 'Hip-Hop', emoji: '🎧' },
  { id: 'acoustic', label: 'Acoustic', emoji: '🪕' },
  { id: 'reggaeton', label: 'Reggaeton', emoji: '🌴' },
];

export default function MusicStudio({ lang }: MusicStudioProps) {
  const { spendCredits } = useEconomy();

  // Mode: 'simple' = describe song, 'custom' = write own lyrics
  const [mode, setMode] = useState<'simple' | 'custom'>('simple');
  const [description, setDescription] = useState('');
  const [customLyrics, setCustomLyrics] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>(['pop']);
  const [customStyle, setCustomStyle] = useState('');
  const [instrumental, setInstrumental] = useState(false);

  // Generation
  const [isGenerating, setIsGenerating] = useState(false);
  const [genStep, setGenStep] = useState(0);
  const [genProgress, setGenProgress] = useState(0);

  // Library
  const [songs, setSongs] = useState<GeneratedSong[]>(() => {
    try {
      const saved = localStorage.getItem('wisebot_music_library');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  // Player
  const [currentSong, setCurrentSong] = useState<GeneratedSong | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playProgress, setPlayProgress] = useState(0);
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const barsRef = useRef<number[]>(Array(24).fill(0).map(() => Math.random()));

  // Save songs to localStorage
  useEffect(() => {
    localStorage.setItem('wisebot_music_library', JSON.stringify(songs));
  }, [songs]);

  // Animate equalizer bars
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      barsRef.current = Array(24).fill(0).map(() => Math.random());
    }, 150);
    return () => clearInterval(id);
  }, [isPlaying]);

  // Simulate progress during playback
  useEffect(() => {
    if (isPlaying) {
      setPlayProgress(0);
      progressInterval.current = setInterval(() => {
        setPlayProgress(p => {
          if (p >= 100) {
            stopPlayback();
            return 0;
          }
          return p + (100 / 300); // ~30 seconds
        });
      }, 100);
    } else {
      if (progressInterval.current) clearInterval(progressInterval.current);
    }
    return () => { if (progressInterval.current) clearInterval(progressInterval.current); };
  }, [isPlaying]);

  const t = {
    title: 'MUSIC STUDIO',
    subtitle: lang === 'el' ? 'Φτιάξε μουσική με AI' : 'Create music with AI',
    simpleMode: lang === 'el' ? 'Περιγραφή' : 'Describe',
    customMode: lang === 'el' ? 'Δικοί σου στίχοι' : 'Custom lyrics',
    descPlaceholder: lang === 'el' ? 'Περίγραψε τι τραγούδι θέλεις... π.χ. Ένα χαρούμενο pop τραγούδι για το καλοκαίρι' : 'Describe the song you want... e.g. A happy pop song about summer',
    lyricsPlaceholder: lang === 'el' ? 'Γράψε τους στίχους σου εδώ...' : 'Write your lyrics here...',
    titlePlaceholder: lang === 'el' ? 'Τίτλος τραγουδιού (προαιρετικό)' : 'Song title (optional)',
    stylePlaceholder: lang === 'el' ? 'Πρόσθεσε δικό σου στυλ...' : 'Add custom style...',
    genre: lang === 'el' ? 'Στυλ μουσικής' : 'Style of Music',
    instrumentalLabel: lang === 'el' ? 'Instrumental' : 'Instrumental',
    createBtn: lang === 'el' ? 'Δημιουργία' : 'Create',
    library: lang === 'el' ? 'Η Μουσική μου' : 'My Music',
    empty: lang === 'el' ? 'Δεν έχεις τραγούδια ακόμα. Φτιάξε το πρώτο σου!' : "No songs yet. Create your first one!",
    credits: '-2⚡',
  };

  const GEN_STEPS = lang === 'el'
    ? ['Ακούω την ιδέα σου...', 'Γράφω στίχους...', 'Συνθέτω μελωδία...', 'Σχεδιάζω εξώφυλλο...']
    : ['Listening to your idea...', 'Writing lyrics...', 'Composing melody...', 'Designing cover...'];

  const toggleGenre = (id: string) => {
    setSelectedGenres(prev =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter(g => g !== id) : prev) : [...prev, id]
    );
  };

  const handleGenerate = async () => {
    const input = mode === 'simple' ? description.trim() : customLyrics.trim();
    if (!input) return;

    if (!spendCredits(2)) {
      alert(lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
      return;
    }

    setIsGenerating(true);
    setGenStep(0);
    setGenProgress(0);

    const stepTimer = setInterval(() => {
      setGenStep(s => Math.min(s + 1, GEN_STEPS.length - 1));
    }, 2500);
    const progTimer = setInterval(() => {
      setGenProgress(p => Math.min(p + 1, 95));
    }, 200);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const genreLabels = selectedGenres.map(id => GENRES.find(g => g.id === id)?.label || id).join(', ');
      const finalStyle = customStyle || genreLabels;

      let lyricsPrompt = '';
      if (mode === 'simple') {
        lyricsPrompt = `
        You are a hit songwriter. Create a song based on this description: "${description}".
        Style: ${finalStyle}.
        Language: ${lang === 'el' ? 'Greek' : 'English'}.
        ${instrumental ? 'This is an instrumental track - generate a descriptive title and a mood/atmosphere description instead of lyrics.' : 'Structure: Title, Verse 1, Chorus, Verse 2, Chorus, Bridge, Chorus (final).'}

        Return ONLY valid JSON:
        {
          "title": "Song Title",
          "lyrics": "${instrumental ? 'Instrumental mood/atmosphere description' : 'Full lyrics with [Verse 1], [Chorus], etc. markers and line breaks'}",
          "artPrompt": "A detailed album cover description based on the song theme, modern, artistic, vibrant"
        }`;
      } else {
        lyricsPrompt = `
        You are a music producer. The user provided these lyrics:
        ---
        ${customLyrics}
        ---
        ${customTitle ? `Song title: "${customTitle}"` : 'Generate a fitting title.'}
        Style: ${finalStyle}.

        Polish the lyrics slightly (fix formatting, add section markers like [Verse], [Chorus] if missing).
        Return ONLY valid JSON:
        {
          "title": "${customTitle || 'Generated Title'}",
          "lyrics": "Polished lyrics with section markers and line breaks",
          "artPrompt": "A detailed album cover description based on the song theme, modern, artistic, vibrant"
        }`;
      }

      const lyricsResp = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: { parts: [{ text: lyricsPrompt }] },
        config: { responseMimeType: 'application/json' }
      });

      const textResponse = lyricsResp.text;
      if (!textResponse) throw new Error("No text from API");
      const lyricsData = JSON.parse(textResponse);

      setGenStep(3);

      // Generate cover art
      const imageResp = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: lyricsData.artPrompt }] }
      });

      let coverUrl = '';
      if (imageResp.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
        coverUrl = `data:image/png;base64,${imageResp.candidates[0].content.parts[0].inlineData.data}`;
      }

      clearInterval(stepTimer);
      clearInterval(progTimer);
      setGenProgress(100);

      const newSong: GeneratedSong = {
        id: Date.now().toString(),
        title: lyricsData.title,
        lyrics: lyricsData.lyrics,
        cover: coverUrl,
        style: finalStyle,
        instrumental,
        createdAt: Date.now(),
      };

      setSongs(prev => [newSong, ...prev]);
      setCurrentSong(newSong);

      // Reset form
      setDescription('');
      setCustomLyrics('');
      setCustomTitle('');

    } catch (error) {
      console.error("Music Gen Error", error);
      clearInterval(stepTimer);
      clearInterval(progTimer);
      alert(lang === 'el' ? 'Σφάλμα. Δοκίμασε ξανά.' : 'Error. Try again.');
    } finally {
      setIsGenerating(false);
      setGenProgress(0);
    }
  };

  const stopPlayback = useCallback(() => {
    synthRef.current.cancel();
    setIsPlaying(false);
    setPlayProgress(0);
  }, []);

  const togglePlay = (song?: GeneratedSong) => {
    const target = song || currentSong;
    if (!target) return;

    if (isPlaying && currentSong?.id === target.id) {
      stopPlayback();
    } else {
      synthRef.current.cancel();
      setCurrentSong(target);

      if (!target.instrumental) {
        const u = new SpeechSynthesisUtterance(target.lyrics);
        u.lang = lang === 'el' ? 'el-GR' : 'en-US';
        u.rate = 1.05;
        u.pitch = 1.15;
        u.onend = () => stopPlayback();
        utteranceRef.current = u;
        synthRef.current.speak(u);
      }
      setIsPlaying(true);
    }
  };

  const deleteSong = (id: string) => {
    setSongs(prev => prev.filter(s => s.id !== id));
    if (currentSong?.id === id) {
      stopPlayback();
      setCurrentSong(null);
    }
  };

  const downloadLyrics = (song: GeneratedSong) => {
    const text = `${song.title}\nStyle: ${song.style}\n\n${song.lyrics}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${song.title}.txt`;
    a.click();
  };

  useEffect(() => {
    return () => {
      synthRef.current.cancel();
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  const canGenerate = mode === 'simple' ? description.trim().length > 0 : customLyrics.trim().length > 0;

  return (
    <div className="flex flex-col min-h-screen pb-24 relative">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-3 sm:px-4 py-3 sm:py-6 space-y-4 sm:space-y-6">

        {/* Header - hidden on mobile */}
        <div className="hidden sm:flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Music size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-[900] text-white tracking-tight">{t.title}</h1>
            <p className="text-white/40 text-xs font-medium">{t.subtitle}</p>
          </div>
        </div>

        {/* ── CREATION CARD ── */}
        <div className="bg-[#111318] border border-white/[0.06] rounded-2xl overflow-hidden">

          {/* Mode Toggle */}
          <div className="flex border-b border-white/[0.06]">
            <button
              onClick={() => setMode('simple')}
              className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${mode === 'simple' ? 'text-white bg-white/[0.04] border-b-2 border-purple-500' : 'text-white/30 hover:text-white/50'}`}
            >
              <Sparkles size={13} /> {t.simpleMode}
            </button>
            <button
              onClick={() => setMode('custom')}
              className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${mode === 'custom' ? 'text-white bg-white/[0.04] border-b-2 border-purple-500' : 'text-white/30 hover:text-white/50'}`}
            >
              <PenLine size={13} /> {t.customMode}
            </button>
          </div>

          <div className="p-3 sm:p-5 space-y-4">

            {/* Input Area */}
            {mode === 'simple' ? (
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder={t.descPlaceholder}
                rows={3}
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 sm:p-4 text-white text-sm font-medium placeholder-white/20 focus:border-purple-500/50 focus:bg-white/[0.05] outline-none resize-none transition-all"
              />
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  value={customTitle}
                  onChange={e => setCustomTitle(e.target.value)}
                  placeholder={t.titlePlaceholder}
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 sm:px-4 py-2.5 text-white text-sm font-bold placeholder-white/20 focus:border-purple-500/50 outline-none transition-all"
                />
                <textarea
                  value={customLyrics}
                  onChange={e => setCustomLyrics(e.target.value)}
                  placeholder={t.lyricsPlaceholder}
                  rows={5}
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 sm:p-4 text-white text-sm font-medium placeholder-white/20 focus:border-purple-500/50 focus:bg-white/[0.05] outline-none resize-none transition-all font-mono"
                />
              </div>
            )}

            {/* Genre Pills */}
            <div className="space-y-2">
              <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{t.genre}</label>
              <div className="flex flex-wrap gap-1.5">
                {GENRES.map(g => (
                  <button
                    key={g.id}
                    onClick={() => toggleGenre(g.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all border ${
                      selectedGenres.includes(g.id)
                        ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 shadow-sm shadow-purple-500/10'
                        : 'bg-white/[0.03] border-white/[0.06] text-white/30 hover:text-white/50 hover:border-white/10'
                    }`}
                  >
                    {g.emoji} {g.label}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={customStyle}
                onChange={e => setCustomStyle(e.target.value)}
                placeholder={t.stylePlaceholder}
                className="w-full bg-transparent border-b border-white/[0.06] py-2 px-1 text-white/60 text-xs font-medium placeholder-white/15 focus:border-purple-500/40 outline-none transition-all"
              />
            </div>

            {/* Instrumental Toggle */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-white/40 text-xs font-bold">
                <Guitar size={14} /> {t.instrumentalLabel}
              </span>
              <button
                onClick={() => setInstrumental(!instrumental)}
                className={`w-10 h-5.5 rounded-full relative transition-all ${
                  instrumental ? 'bg-purple-500' : 'bg-white/10'
                }`}
              >
                <div className={`absolute top-0.5 w-4.5 h-4.5 rounded-full bg-white shadow-md transition-all ${
                  instrumental ? 'left-[calc(100%-1.25rem)]' : 'left-0.5'
                }`} />
              </button>
            </div>

            {/* Create Button */}
            <button
              onClick={handleGenerate}
              disabled={!canGenerate || isGenerating}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-40 disabled:hover:from-purple-600 disabled:hover:to-pink-600 transition-all hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.99] flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {GEN_STEPS[genStep]}
                </span>
              ) : (
                <>
                  <Wand2 size={16} />
                  {t.createBtn} <span className="text-white/50 text-xs ml-1">{t.credits}</span>
                </>
              )}
            </button>

            {/* Generation Progress */}
            {isGenerating && (
              <div className="space-y-2">
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                    style={{ width: `${genProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-white/20 font-mono">
                  <span>{GEN_STEPS[genStep]}</span>
                  <span>{genProgress}%</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── SONG LIBRARY ── */}
        <div className="space-y-3">
          <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            <FileMusic size={12} /> {t.library} <span className="text-white/20">({songs.length})</span>
          </h3>

          {songs.length === 0 ? (
            <div className="text-center py-12 text-white/15 text-sm font-medium">
              <Music size={32} className="mx-auto mb-3 opacity-30" />
              <p>{t.empty}</p>
            </div>
          ) : (
            <div className="space-y-2">
              {songs.map(song => (
                <div
                  key={song.id}
                  className={`group flex items-center gap-3 p-2.5 rounded-xl border transition-all cursor-pointer ${
                    currentSong?.id === song.id
                      ? 'bg-purple-500/10 border-purple-500/20'
                      : 'bg-[#111318] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                  }`}
                  onClick={() => { setCurrentSong(song); }}
                >
                  {/* Cover */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 bg-white/5">
                    {song.cover ? (
                      <img src={song.cover} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Music size={18} className="text-white/20" />
                      </div>
                    )}
                    {/* Play overlay */}
                    <button
                      onClick={e => { e.stopPropagation(); togglePlay(song); }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {isPlaying && currentSong?.id === song.id
                        ? <Pause size={18} className="text-white" fill="white" />
                        : <Play size={18} className="text-white ml-0.5" fill="white" />
                      }
                    </button>
                    {/* Playing indicator */}
                    {isPlaying && currentSong?.id === song.id && (
                      <div className="absolute bottom-0.5 left-0.5 right-0.5 flex items-end justify-center gap-[2px] h-3">
                        {[0,1,2,3].map(i => (
                          <div key={i} className="w-[3px] bg-purple-400 rounded-full animate-pulse" style={{ height: `${40 + Math.random() * 60}%`, animationDelay: `${i * 0.15}s` }} />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-bold truncate">{song.title}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-white/25 text-[10px] font-medium truncate">{song.style}</span>
                      {song.instrumental && (
                        <span className="text-purple-400/50 text-[9px] font-bold uppercase">Instrumental</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <button
                      onClick={e => { e.stopPropagation(); downloadLyrics(song); }}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-white/30 hover:text-white/60 transition-colors"
                      title="Download lyrics"
                    >
                      <Download size={14} />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); deleteSong(song.id); }}
                      className="p-1.5 rounded-lg hover:bg-red-500/10 text-white/30 hover:text-red-400 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── BOTTOM PLAYER BAR ── */}
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0b0f]/95 backdrop-blur-xl border-t border-white/[0.06]">
          {/* Progress bar on top */}
          <div className="w-full h-0.5 bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-100"
              style={{ width: `${playProgress}%` }}
            />
          </div>

          <div className="max-w-5xl mx-auto flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3">
            {/* Cover */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shrink-0 bg-white/5">
              {currentSong.cover ? (
                <img src={currentSong.cover} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center"><Music size={16} className="text-white/20" /></div>
              )}
            </div>

            {/* Song Info */}
            <div className="min-w-0 flex-shrink mr-2">
              <h4 className="text-white text-xs sm:text-sm font-bold truncate">{currentSong.title}</h4>
              <p className="text-white/25 text-[10px] font-medium truncate">{currentSong.style}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0 mx-auto">
              <button
                onClick={() => togglePlay()}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
              >
                {isPlaying
                  ? <Pause size={16} className="text-black" fill="black" />
                  : <Play size={16} className="text-black ml-0.5" fill="black" />
                }
              </button>
            </div>

            {/* Equalizer Bars */}
            <div className="hidden sm:flex items-end gap-[2px] h-6 ml-auto shrink-0">
              {isPlaying && barsRef.current.slice(0, 16).map((v, i) => (
                <div
                  key={i}
                  className="w-[3px] bg-gradient-to-t from-purple-500 to-pink-400 rounded-full transition-all duration-150"
                  style={{ height: `${20 + v * 80}%` }}
                />
              ))}
            </div>

            {/* Volume Icon */}
            <Volume2 size={14} className="text-white/20 shrink-0 hidden sm:block" />
          </div>

          {/* Lyrics Preview - expandable */}
          {currentSong && !currentSong.instrumental && (
            <details className="group">
              <summary className="text-center text-white/20 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-white/40 py-1 select-none">
                {lang === 'el' ? 'Στίχοι' : 'Lyrics'} ▲
              </summary>
              <div className="max-h-[40vh] overflow-y-auto px-4 sm:px-8 py-4 text-center">
                <p className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap font-medium">
                  {currentSong.lyrics}
                </p>
              </div>
            </details>
          )}
        </div>
      )}
    </div>
  );
}
