import React, { useState, useEffect, useRef, useCallback } from 'react';
import { backendAI } from '../services/backendApi';
import { Music, Mic, Play, Pause, FileMusic, Wand2, RefreshCcw, Download, Radio, PenLine, Sparkles, Guitar, SkipBack, SkipForward, Volume2, Clock, Trash2, ArrowRight } from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';
import ShareButton from './ShareButton';

interface MusicStudioProps {
  lang: 'el' | 'en';
}

// ── FEATURED SONGS (WiseBot Academy originals) ──
const FEATURED_SONGS = [
  {
    id: 'f1', title: 'Μικροί Ήρωες', subtitle: 'WiseBot World',
    style: 'Kids Pop, Greek', emoji: '🦸',
    src: '/songs/mikroi-iroes-wisebot-world.mp3',
    cover: '/images/paidia-kai-wisebot.webp',
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 'f2', title: 'WiseBot Hero Squad', subtitle: 'Theme Song',
    style: 'Epic Kids Anthem', emoji: '⚡',
    src: '/songs/wisebot-hero-squad.mp3',
    cover: '/images/paidia-kai-sparken.webp',
    color: 'from-amber-500 to-red-600',
  },
  {
    id: 'f3', title: 'Φέρτο!', subtitle: 'WiseBot',
    style: 'Trap, Greek, Hype', emoji: '🔥',
    src: '/songs/wisebot-ferto-f77e.mp3',
    cover: '/images/paidia-kai-crocus.webp',
    color: 'from-red-500 to-orange-600',
  },
  {
    id: 'f4', title: 'The Creator Code', subtitle: 'WiseBot',
    style: 'Hip-Hop, Motivational', emoji: '💻',
    src: '/songs/wisebot-creator-code-b49f.mp3',
    cover: '/images/paidia-kai-pencilo.webp',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'f5', title: 'Future Mode', subtitle: 'WiseBot',
    style: 'EDM, Futuristic', emoji: '🚀',
    src: '/songs/wisebot-future-mode.mp3',
    cover: '/images/paidia-kai-link.webp',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'f6', title: 'Creator Squad', subtitle: 'WiseBot',
    style: 'Pop, Teamwork', emoji: '🤝',
    src: '/songs/wisebot-creator-squad.mp3',
    cover: '/images/ta-3-paidia.webp',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'f7', title: 'The Maker Mind', subtitle: 'WiseBot',
    style: 'Lo-Fi, Chill', emoji: '🧠',
    src: '/songs/wisebot-maker-mind.mp3',
    cover: '/images/foxi.webp',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'f8', title: 'WiseBots', subtitle: 'Academy Anthem',
    style: 'Kids Pop, Fun', emoji: '🎓',
    src: '/songs/wisebots-song.mp3',
    cover: '/images/wisebot.jpg',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'f9', title: 'WiseBot Is Awakening', subtitle: '',
    style: 'Cinematic, Epic', emoji: '🌅',
    src: '/songs/wisebot-is-awakening.mp3',
    cover: '/images/eksofilo.webp',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'f10', title: 'Ξύπνα Maker!', subtitle: '',
    style: 'Trap, Greek, Energy', emoji: '⚡',
    src: '/songs/xypna-maker.mp3',
    cover: '/images/foxi teacher.webp',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'f11', title: 'Το Ξύπνημα των Makers', subtitle: '',
    style: 'Pop Rock, Greek', emoji: '🎸',
    src: '/songs/xypnima-ton-makers.mp3',
    cover: '/images/sparken.jpg',
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 'f12', title: 'Από Ιδέα… σε Παιχνίδι!', subtitle: '',
    style: 'Pop, Uplifting, Greek', emoji: '🎮',
    src: '/songs/apo-idea-se-paixnidi.mp3',
    cover: '/images/pencilo.jpg',
    color: 'from-fuchsia-500 to-purple-600',
  },
];

interface GeneratedSong {
  id: string;
  title: string;
  lyrics: string;
  cover: string;
  style: string;
  instrumental: boolean;
  createdAt: number;
  audioUrl?: string;       // Real Suno audio URL
  streamUrl?: string;      // Suno stream URL (available faster)
  sunoCover?: string;      // Suno-generated cover
  sunoTaskId?: string;     // For polling
  audioStatus?: 'pending' | 'processing' | 'complete' | 'error';
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

// Guided wizard steps
const WIZARD_RECIPIENTS = [
  { id: 'mama', label: { el: 'Μαμά', en: 'Mom' }, emoji: '👩' },
  { id: 'papa', label: { el: 'Μπαμπά', en: 'Dad' }, emoji: '👨' },
  { id: 'family', label: { el: 'Οικογένεια', en: 'Family' }, emoji: '👨‍👩‍👧‍👦' },
  { id: 'sibling', label: { el: 'Αδερφή/Αδερφό', en: 'Sibling' }, emoji: '👫' },
  { id: 'grandma', label: { el: 'Γιαγιά/Παππού', en: 'Grandparents' }, emoji: '👵' },
  { id: 'friends', label: { el: 'Φίλους', en: 'Friends' }, emoji: '🤝' },
  { id: 'me', label: { el: 'Εμένα', en: 'Myself' }, emoji: '⭐' },
  { id: 'pet', label: { el: 'Κατοικίδιο', en: 'Pet' }, emoji: '🐾' },
];

const WIZARD_STYLES = [
  { id: 'pop', label: 'Pop', emoji: '🎤' },
  { id: 'kpop', label: 'K-Pop', emoji: '💜' },
  { id: 'trap', label: 'Trap', emoji: '🔥' },
  { id: 'rock', label: 'Rock', emoji: '🎸' },
  { id: 'hiphop', label: 'Hip-Hop', emoji: '🎧' },
  { id: 'lofi', label: 'Lo-Fi', emoji: '🌙' },
  { id: 'kids', label: { el: 'Παιδικό', en: 'Kids' }, emoji: '🧸' },
  { id: 'acoustic', label: 'Acoustic', emoji: '🪕' },
  { id: 'edm', label: 'EDM', emoji: '⚡' },
  { id: 'reggaeton', label: 'Reggaeton', emoji: '🌴' },
];

export default function MusicStudio({ lang }: MusicStudioProps) {
  const { spendCredits, showNotification, costs, trackAction } = useEconomy();

  // Mode: 'simple' = describe song, 'custom' = write own lyrics, 'guided' = step wizard
  const [mode, setMode] = useState<'simple' | 'custom' | 'guided'>('guided');
  const [description, setDescription] = useState('');
  const [customLyrics, setCustomLyrics] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>(['pop']);
  const [customStyle, setCustomStyle] = useState('');
  const [instrumental, setInstrumental] = useState(false);

  // Featured songs player
  const [featuredPlaying, setFeaturedPlaying] = useState<string | null>(null);
  const featuredAudioRef = useRef<HTMLAudioElement | null>(null);

  const playFeatured = (songId: string, src: string) => {
    if (featuredPlaying === songId) {
      featuredAudioRef.current?.pause();
      setFeaturedPlaying(null);
      return;
    }
    // IMPORTANT: Create + play FIRST before state updates (mobile user gesture chain)
    const audio = new Audio(src);
    audio.onended = () => setFeaturedPlaying(null);
    audio.play().then(() => {
      if (featuredAudioRef.current) featuredAudioRef.current.pause();
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
      if (isPlaying) stopPlayback();
      featuredAudioRef.current = audio;
      setFeaturedPlaying(songId);
    }).catch((err) => {
      console.warn('[MusicStudio] Featured play failed:', err.message);
    });
  };

  // Guided wizard state
  const [wizardStep, setWizardStep] = useState(0);
  const [wizardData, setWizardData] = useState({
    recipient: '',
    recipientName: '',
    uniqueThing: '',
    emotionalThing: '',
    style: 'pop',
  });

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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const barsRef = useRef<number[]>(Array(24).fill(0).map(() => Math.random()));
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Save songs to localStorage
  useEffect(() => {
    localStorage.setItem('wisebot_music_library', JSON.stringify(songs));
  }, [songs]);

  // Resume polling for songs that were still processing
  useEffect(() => {
    songs.forEach(song => {
      if (song.audioStatus === 'processing' && song.sunoTaskId) {
        startSunoPolling(song.id, song.sunoTaskId);
      }
    });
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animate equalizer bars
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      barsRef.current = Array(24).fill(0).map(() => Math.random());
    }, 150);
    return () => clearInterval(id);
  }, [isPlaying]);

  // Track progress during playback (HTML5 Audio or fallback)
  useEffect(() => {
    if (isPlaying && currentSong?.audioUrl && audioRef.current) {
      // Use real audio progress
      const audio = audioRef.current;
      const updateProgress = () => {
        if (audio.duration > 0) {
          setPlayProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      progressInterval.current = setInterval(updateProgress, 200);
    } else if (isPlaying) {
      // Fallback: simulate progress for TTS playback
      setPlayProgress(0);
      progressInterval.current = setInterval(() => {
        setPlayProgress(p => {
          if (p >= 100) {
            stopPlayback();
            return 0;
          }
          return p + (100 / 300);
        });
      }, 100);
    } else {
      if (progressInterval.current) clearInterval(progressInterval.current);
    }
    return () => { if (progressInterval.current) clearInterval(progressInterval.current); };
  }, [isPlaying, currentSong]);

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
    ? ['Ακούω την ιδέα σου...', 'Γράφω στίχους...', 'Σχεδιάζω εξώφυλλο...', 'Συνθέτω μουσική με AI...', 'Σχεδόν έτοιμο...']
    : ['Listening to your idea...', 'Writing lyrics...', 'Designing cover...', 'Composing music with AI...', 'Almost ready...'];

  const toggleGenre = (id: string) => {
    setSelectedGenres(prev =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter(g => g !== id) : prev) : [...prev, id]
    );
  };

  const handleGenerate = async () => {
    const input = mode === 'simple' ? description.trim() : customLyrics.trim();
    if (!input) return;

    if (!(await spendCredits(costs.song, 'CREATE_SONG'))) {
      showNotification('💰', lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
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
      const genreLabels = selectedGenres.map(id => GENRES.find(g => g.id === id)?.label || id).join(', ');
      const finalStyle = customStyle || genreLabels;

      let lyricsPrompt = '';
      if (mode === 'simple') {
        lyricsPrompt = `
        You are an expert lyric writer for Suno AI music generation. You write songs that are ready to paste into Suno.

        RULES:
        - Write catchy hooks and strong choruses (ρεφρέν)
        - Write natural lyrics, NOT wooden/generic
        - Keep the vibe matching the style requested
        - If names are given, incorporate them naturally
        - Write in ${lang === 'el' ? 'Greek' : 'English'} (or mix if it fits the style)
        - No analysis. Just deliver the result.
        - Structure: [Verse 1], [Chorus], [Verse 2], [Chorus], [Bridge], [Chorus]

        Song request: "${description}"
        Style: ${finalStyle}
        ${instrumental ? 'This is an instrumental track - generate a descriptive title and mood description, no vocals.' : ''}

        Return ONLY valid JSON:
        {
          "title": "Catchy song title",
          "lyrics": "${instrumental ? 'Instrumental mood/atmosphere description' : 'Full lyrics with [Verse 1], [Chorus], etc. markers. Write catchy, natural, emotional lyrics with a strong hook.'}",
          "style": "Short targeted style tag for Suno, e.g. 'Greek pop, emotional piano, female voice, catchy chorus, 120 BPM'",
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

      const artPrompt = `A detailed album cover for a ${finalStyle} song, modern, artistic, vibrant`;
      const lyricsData = await backendAI.music(lyricsPrompt, artPrompt);
      const coverUrl = lyricsData.cover || '';

      setGenStep(2);

      // ── Step 3: Send to Suno for REAL music generation ──
      setGenStep(3);
      setGenProgress(70);

      let sunoTaskId = '';
      try {
        const sunoResp = await fetch('/api/ai/suno-generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lyrics: lyricsData.lyrics,
            style: finalStyle,
            title: lyricsData.title,
            instrumental,
          }),
        });
        const sunoData = await sunoResp.json();
        if (sunoData.taskId) {
          sunoTaskId = sunoData.taskId;
        }
      } catch (sunoErr) {
        console.warn('Suno generation failed, song will be lyrics-only:', sunoErr);
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
        sunoTaskId: sunoTaskId || undefined,
        audioStatus: sunoTaskId ? 'processing' : undefined,
      };

      setSongs(prev => [newSong, ...prev]);
      setCurrentSong(newSong);
      trackAction('CREATE_SONG');

      // Start polling for Suno audio if we have a task
      if (sunoTaskId) {
        startSunoPolling(newSong.id, sunoTaskId);
      }

      // Reset form
      setDescription('');
      setCustomLyrics('');
      setCustomTitle('');

    } catch (error) {
      console.error("Music Gen Error", error);
      clearInterval(stepTimer);
      clearInterval(progTimer);
      showNotification('❌', lang === 'el' ? 'Σφάλμα. Δοκίμασε ξανά.' : 'Error. Try again.');
    } finally {
      setIsGenerating(false);
      setGenProgress(0);
    }
  };

  const stopPlayback = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    synthRef.current.cancel();
    setIsPlaying(false);
    setPlayProgress(0);
  }, []);

  // Poll Suno for audio completion
  const startSunoPolling = useCallback((songId: string, taskId: string) => {
    // Clear any existing polling
    if (pollingRef.current) clearInterval(pollingRef.current);

    let attempts = 0;
    const maxAttempts = 60; // ~5 minutes at 5s intervals

    pollingRef.current = setInterval(async () => {
      attempts++;
      if (attempts > maxAttempts) {
        if (pollingRef.current) clearInterval(pollingRef.current);
        setSongs(prev => prev.map(s => s.id === songId ? { ...s, audioStatus: 'error' as const } : s));
        return;
      }

      try {
        const resp = await fetch(`/api/ai/suno-status?taskId=${encodeURIComponent(taskId)}`);
        const data = await resp.json();

        if (data.status === 'complete' && (data.audioUrl || data.streamUrl)) {
          if (pollingRef.current) clearInterval(pollingRef.current);
          const updatedSong = {
            audioUrl: data.audioUrl || data.streamUrl,
            streamUrl: data.streamUrl,
            sunoCover: data.coverUrl,
            audioStatus: 'complete' as const,
          };
          setSongs(prev => prev.map(s => {
            if (s.id === songId) {
              return { ...s, ...updatedSong, cover: data.coverUrl || s.cover };
            }
            return s;
          }));
          // Also update currentSong if it's the same song
          setCurrentSong(prev => {
            if (prev?.id === songId) {
              return { ...prev, ...updatedSong, cover: data.coverUrl || prev.cover };
            }
            return prev;
          });
          showNotification('🎵', lang === 'el' ? 'Το τραγούδι σου είναι έτοιμο! Πάτα Play!' : 'Your song is ready! Press Play!');
        } else if (data.status === 'error') {
          if (pollingRef.current) clearInterval(pollingRef.current);
          setSongs(prev => prev.map(s => s.id === songId ? { ...s, audioStatus: 'error' as const } : s));
        }
        // else keep polling (pending/processing)
      } catch (err) {
        console.warn('Suno poll error:', err);
      }
    }, 5000); // Poll every 5 seconds
  }, [lang, showNotification]);

  const togglePlay = (song?: GeneratedSong) => {
    // Get the LATEST version of the song from the songs array
    const songId = (song || currentSong)?.id;
    if (!songId) return;
    const target = songs.find(s => s.id === songId) || song || currentSong;
    if (!target) return;

    if (isPlaying && currentSong?.id === target.id) {
      stopPlayback();
    } else {
      // Stop any existing playback
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      synthRef.current.cancel();
      setCurrentSong(target);

      // Check if real audio is available
      if (target.audioUrl || target.streamUrl) {
        const audioSrc = target.audioUrl || target.streamUrl;
        if (!audioRef.current) {
          audioRef.current = new Audio();
        }
        audioRef.current.src = audioSrc!;
        audioRef.current.onended = () => stopPlayback();
        audioRef.current.play().catch(err => {
          console.warn('Audio play failed:', err);
          showNotification('❌', lang === 'el' ? 'Αδυναμία αναπαραγωγής' : 'Playback failed');
          stopPlayback();
        });
        setIsPlaying(true);
      } else if (target.audioStatus === 'processing') {
        // Still generating — show notification, don't play TTS
        showNotification('🎵', lang === 'el' ? 'Το τραγούδι δημιουργείται ακόμα... Περίμενε λίγο!' : 'Song is still being created... Wait a moment!');
      } else {
        showNotification('⏳', lang === 'el' ? 'Δεν υπάρχει ήχος ακόμα' : 'No audio yet');
      }
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
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      if (featuredAudioRef.current) { featuredAudioRef.current.pause(); featuredAudioRef.current = null; }
      if (progressInterval.current) clearInterval(progressInterval.current);
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, []);

  const canGenerate = mode === 'simple' ? description.trim().length > 0 : mode === 'custom' ? customLyrics.trim().length > 0 : false;

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
        <div className="bg-[#0F1B2D] border border-white/[0.06] rounded-2xl overflow-hidden">

          {/* Mode Toggle */}
          <div className="flex border-b border-white/[0.06]">
            <button
              onClick={() => { setMode('guided'); setWizardStep(0); }}
              className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${mode === 'guided' ? 'text-white bg-white/[0.04] border-b-2 border-purple-500' : 'text-white/30 hover:text-white/50'}`}
            >
              <Mic size={13} /> {lang === 'el' ? 'Βοηθός' : 'Wizard'}
            </button>
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

            {/* ── GUIDED WIZARD MODE ── */}
            {mode === 'guided' && (
              <div className="space-y-4">
                {/* Progress dots */}
                <div className="flex justify-center gap-2">
                  {[0,1,2,3].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i <= wizardStep ? 'bg-purple-400 scale-125' : 'bg-white/10'}`} />
                  ))}
                </div>

                {/* Step 0: Who is this song for? */}
                {wizardStep === 0 && (
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-purple-300 text-xs font-black uppercase tracking-widest mb-1">{lang === 'el' ? 'ΒΗΜΑ 1' : 'STEP 1'}</p>
                      <h3 className="text-white text-lg font-[900]">
                        {lang === 'el' ? '💜 Για ποιον θέλεις να φτιάξεις τραγούδι;' : '💜 Who is this song for?'}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {WIZARD_RECIPIENTS.map(r => (
                        <button
                          key={r.id}
                          onClick={() => { setWizardData(d => ({ ...d, recipient: r.id })); }}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            wizardData.recipient === r.id
                              ? 'bg-purple-500/20 border-purple-500/50 scale-105'
                              : 'bg-white/[0.03] border-white/[0.06] hover:border-white/20'
                          }`}
                        >
                          <span className="text-2xl block mb-1">{r.emoji}</span>
                          <span className="text-white text-xs font-bold">{typeof r.label === 'object' ? r.label[lang] : r.label}</span>
                        </button>
                      ))}
                    </div>
                    {wizardData.recipient && (
                      <input
                        type="text"
                        value={wizardData.recipientName}
                        onChange={e => setWizardData(d => ({ ...d, recipientName: e.target.value }))}
                        placeholder={lang === 'el' ? 'Πώς τον/την λένε; (προαιρετικό)' : "What's their name? (optional)"}
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:border-purple-500/50 outline-none transition-all"
                      />
                    )}
                    <button
                      onClick={() => wizardData.recipient && setWizardStep(1)}
                      disabled={!wizardData.recipient}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm disabled:opacity-30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      {lang === 'el' ? 'ΕΠΟΜΕΝΟ' : 'NEXT'} <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {/* Step 1: What connects you? */}
                {wizardStep === 1 && (
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-purple-300 text-xs font-black uppercase tracking-widest mb-1">{lang === 'el' ? 'ΒΗΜΑ 2' : 'STEP 2'}</p>
                      <h3 className="text-white text-lg font-[900]">
                        {lang === 'el' ? '🌟 Πες μου κάτι μοναδικό που σας ενώνει!' : '🌟 Tell me something unique that connects you!'}
                      </h3>
                      <p className="text-white/40 text-xs mt-1">
                        {lang === 'el' ? 'π.χ. Παίζουμε μπάλα, λέμε παραμύθια, μαγειρεύουμε μαζί...' : 'e.g. We play ball, tell stories, cook together...'}
                      </p>
                    </div>
                    <textarea
                      value={wizardData.uniqueThing}
                      onChange={e => setWizardData(d => ({ ...d, uniqueThing: e.target.value }))}
                      placeholder={lang === 'el' ? 'Γράψε εδώ τι κάνετε μαζί...' : 'Write what you do together...'}
                      rows={3}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-white text-sm placeholder-white/20 focus:border-purple-500/50 outline-none resize-none transition-all"
                    />
                    <div className="flex gap-2">
                      <button onClick={() => setWizardStep(0)} className="px-4 py-3 rounded-xl bg-white/5 text-white/40 font-bold text-sm hover:bg-white/10 transition-all">
                        ←
                      </button>
                      <button
                        onClick={() => wizardData.uniqueThing.trim() && setWizardStep(2)}
                        disabled={!wizardData.uniqueThing.trim()}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm disabled:opacity-30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                      >
                        {lang === 'el' ? 'ΕΠΟΜΕΝΟ' : 'NEXT'} <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Something emotional */}
                {wizardStep === 2 && (
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-purple-300 text-xs font-black uppercase tracking-widest mb-1">{lang === 'el' ? 'ΒΗΜΑ 3' : 'STEP 3'}</p>
                      <h3 className="text-white text-lg font-[900]">
                        {lang === 'el' ? '❤️ Κάτι που θα τον/την συγκινήσει!' : '❤️ Something that will move them!'}
                      </h3>
                      <p className="text-white/40 text-xs mt-1">
                        {lang === 'el' ? 'Κάτι που αγαπάτε, μια ανάμνηση, ένα αστείο σας...' : 'Something you love, a memory, an inside joke...'}
                      </p>
                    </div>
                    <textarea
                      value={wizardData.emotionalThing}
                      onChange={e => setWizardData(d => ({ ...d, emotionalThing: e.target.value }))}
                      placeholder={lang === 'el' ? 'Γράψε κάτι από καρδιάς...' : 'Write something from the heart...'}
                      rows={3}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-white text-sm placeholder-white/20 focus:border-purple-500/50 outline-none resize-none transition-all"
                    />
                    <div className="flex gap-2">
                      <button onClick={() => setWizardStep(1)} className="px-4 py-3 rounded-xl bg-white/5 text-white/40 font-bold text-sm hover:bg-white/10 transition-all">
                        ←
                      </button>
                      <button
                        onClick={() => wizardData.emotionalThing.trim() && setWizardStep(3)}
                        disabled={!wizardData.emotionalThing.trim()}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm disabled:opacity-30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                      >
                        {lang === 'el' ? 'ΕΠΟΜΕΝΟ' : 'NEXT'} <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Pick style */}
                {wizardStep === 3 && (
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-purple-300 text-xs font-black uppercase tracking-widest mb-1">{lang === 'el' ? 'ΒΗΜΑ 4' : 'STEP 4'}</p>
                      <h3 className="text-white text-lg font-[900]">
                        {lang === 'el' ? '🎶 Τι στυλ μουσικής θέλεις;' : '🎶 What music style do you want?'}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {WIZARD_STYLES.map(s => (
                        <button
                          key={s.id}
                          onClick={() => setWizardData(d => ({ ...d, style: s.id }))}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            wizardData.style === s.id
                              ? 'bg-purple-500/20 border-purple-500/50 scale-105'
                              : 'bg-white/[0.03] border-white/[0.06] hover:border-white/20'
                          }`}
                        >
                          <span className="text-lg block">{s.emoji}</span>
                          <span className="text-white text-[10px] font-bold">{typeof s.label === 'object' ? s.label[lang] : s.label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setWizardStep(2)} className="px-4 py-3 rounded-xl bg-white/5 text-white/40 font-bold text-sm hover:bg-white/10 transition-all">
                        ←
                      </button>
                      <button
                        onClick={() => {
                          // Build description from wizard data and trigger generation
                          const recipient = WIZARD_RECIPIENTS.find(r => r.id === wizardData.recipient);
                          const recipientLabel = recipient ? (typeof recipient.label === 'object' ? recipient.label[lang] : recipient.label) : '';
                          const nameStr = wizardData.recipientName ? ` (${wizardData.recipientName})` : '';

                          const wizardDescription = lang === 'el'
                            ? `Φτιάξε ένα τραγούδι για: ${recipientLabel}${nameStr}. Κάτι μοναδικό: ${wizardData.uniqueThing}. Κάτι συγκινητικό: ${wizardData.emotionalThing}`
                            : `Make a song for: ${recipientLabel}${nameStr}. Something unique: ${wizardData.uniqueThing}. Something emotional: ${wizardData.emotionalThing}`;

                          const styleLabel = WIZARD_STYLES.find(s => s.id === wizardData.style);
                          const styleName = styleLabel ? (typeof styleLabel.label === 'object' ? styleLabel.label[lang] : styleLabel.label) : 'Pop';

                          setDescription(wizardDescription);
                          setSelectedGenres([wizardData.style]);
                          setMode('simple');

                          // Auto-trigger generation with a small delay
                          setTimeout(() => {
                            const btn = document.getElementById('music-generate-btn');
                            if (btn) btn.click();
                          }, 300);
                        }}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-[900] text-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                      >
                        🎵 {lang === 'el' ? 'ΦΤΙΑΞΕ ΤΟ ΤΡΑΓΟΥΔΙ!' : 'CREATE THE SONG!'} <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── SIMPLE MODE ── */}
            {mode === 'simple' && (
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder={t.descPlaceholder}
                rows={3}
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 sm:p-4 text-white text-sm font-medium placeholder-white/20 focus:border-purple-500/50 focus:bg-white/[0.05] outline-none resize-none transition-all"
              />
            )}

            {/* ── CUSTOM MODE ── */}
            {mode === 'custom' && (
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
              id="music-generate-btn"
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
                      : 'bg-[#0F1B2D] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
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
                      className="absolute inset-0 bg-black/40 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity"
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
                      {song.audioStatus === 'processing' && (
                        <span className="text-amber-400/70 text-[9px] font-bold uppercase flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                          {lang === 'el' ? 'Μουσική...' : 'Music...'}
                        </span>
                      )}
                      {song.audioStatus === 'complete' && (
                        <span className="text-emerald-400/70 text-[9px] font-bold uppercase">♪ Audio</span>
                      )}
                      {song.audioStatus === 'error' && (
                        <span className="text-red-400/50 text-[9px] font-bold uppercase">{lang === 'el' ? 'Μόνο στίχοι' : 'Lyrics only'}</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    {song.audioStatus === 'complete' && (
                      <ShareButton
                        title={song.title}
                        text={lang === 'el' ? 'Δες το τραγούδι που έφτιαξα στο WiseBot Academy!' : 'Check out the song I made on WiseBot Academy!'}
                        url={song.audioUrl || song.streamUrl}
                        lang={lang}
                        className="py-1 px-2"
                      />
                    )}
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

        {/* ── FEATURED SONGS (WiseBot Originals) ── */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white/60 text-xs font-[900] uppercase tracking-[0.15em] flex items-center gap-2">
              <Radio size={14} className="text-purple-400" /> {lang === 'el' ? 'WiseBot Originals' : 'WiseBot Originals'}
            </h3>
            <span className="text-white/20 text-[9px] font-bold">{FEATURED_SONGS.length} {lang === 'el' ? 'τραγούδια' : 'songs'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {FEATURED_SONGS.map(song => (
              <div
                key={song.id}
                onClick={() => playFeatured(song.id, song.src)}
                className={`group relative rounded-xl overflow-hidden border cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  featuredPlaying === song.id
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'border-white/[0.06] hover:border-white/10'
                }`}
              >
                {/* Cover image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      featuredPlaying === song.id ? 'scale-110 brightness-75' : 'group-hover:scale-105'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Play/Pause overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity pointer-events-none ${
                    featuredPlaying === song.id ? 'opacity-100' : 'md:opacity-0 md:group-hover:opacity-100'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                      featuredPlaying === song.id
                        ? 'bg-purple-500 scale-110'
                        : 'bg-white/20 group-hover:bg-white/30'
                    }`}>
                      {featuredPlaying === song.id ? (
                        <Pause size={20} className="text-white" fill="white" />
                      ) : (
                        <Play size={20} className="text-white ml-0.5" fill="white" />
                      )}
                    </div>
                  </div>

                  {/* Equalizer animation when playing */}
                  {featuredPlaying === song.id && (
                    <div className="absolute bottom-2 right-2 flex items-end gap-[2px] h-4">
                      {[0,1,2,3,4].map(i => (
                        <div key={i} className="w-[3px] bg-purple-400 rounded-full animate-pulse" style={{ height: `${30 + Math.random() * 70}%`, animationDelay: `${i * 0.12}s` }} />
                      ))}
                    </div>
                  )}

                  {/* Style badge */}
                  <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md">
                    <span className="text-[8px] font-bold text-white/70">{song.style.split(',')[0]}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-2.5 bg-[#0F1B2D]">
                  <p className="text-white text-xs font-[900] truncate leading-tight">{song.emoji} {song.title}</p>
                  {song.subtitle && <p className="text-white/30 text-[9px] font-medium truncate">{song.subtitle}</p>}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/15 text-[10px] font-bold">
            {lang === 'el' ? '🎵 Φτιαγμένα με AI — Φτιάξε κι εσύ το δικό σου!' : '🎵 Made with AI — Create your own!'}
          </p>
        </div>
      </div>

      {/* ── BOTTOM PLAYER BAR ── */}
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F1A]/95 backdrop-blur-xl border-t border-white/[0.06]">
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
