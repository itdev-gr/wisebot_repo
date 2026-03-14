
import React, { useState, useEffect, useRef } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Zap, 
  Wand2, 
  Sparkles, 
  Upload, 
  Mic, 
  Activity, 
  Download, 
  Film,
  Users,
  MessageCircle,
  Play,
  RefreshCcw,
  AlertCircle,
  Quote,
  Globe
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useLocation } from 'react-router-dom';
import { HEROES } from '../constants';
import { useEconomy } from '../context/EconomyContext';

const motion = m as any;

// --- ALL CINEMA VIDEOS ---
const SYSTEM_VIDEOS = [
  {
    id: 'vid-1',
    title: { el: 'WISEBOT VIDEO', en: 'WISEBOT VIDEO' },
    hero: 'Wisebot',
    category: 'adventure',
    thumbnail: '/images/wisebot.jpg',
    videoUrl: '/video/wisebot%20claude.mp4',
    duration: '0:30',
    description: { el: 'Η Wisebot σε δράση!', en: 'Wisebot in action!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-2',
    title: { el: 'LINK VIDEO', en: 'LINK VIDEO' },
    hero: 'Link',
    category: 'lesson',
    thumbnail: '/images/link.jpg',
    videoUrl: '/video/link%20claude.mp4',
    duration: '0:30',
    description: { el: 'Η Link σε δράση!', en: 'Link in action!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-3',
    title: { el: 'SPARKEN VIDEO', en: 'SPARKEN VIDEO' },
    hero: 'Sparken',
    category: 'adventure',
    thumbnail: '/images/sparken.jpg',
    videoUrl: '/video/sparken%20claude.mp4',
    duration: '0:30',
    description: { el: 'Ο Sparken σε δράση!', en: 'Sparken in action!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-4',
    title: { el: 'PENCILLO VIDEO', en: 'PENCILLO VIDEO' },
    hero: 'Pencillo',
    category: 'lesson',
    thumbnail: '/images/pencilo.jpg',
    videoUrl: '/video/pencillo%20claude.mp4',
    duration: '0:30',
    description: { el: 'Ο Pencillo σε δράση!', en: 'Pencillo in action!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-5',
    title: { el: 'CROCUS VIDEO', en: 'CROCUS VIDEO' },
    hero: 'Crocus',
    category: 'adventure',
    thumbnail: '/images/crocus.jpg',
    videoUrl: '/video/crocus%20claude.mp4',
    duration: '0:30',
    description: { el: 'Ο Crocus σε δράση!', en: 'Crocus in action!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-6',
    title: { el: 'WISEBOT & ΠΑΙΔΙΑ', en: 'WISEBOT & KIDS' },
    hero: 'Wisebot',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-wisebot.png',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_7254caf8-e421-49eb-a44c-09d6f4268955_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Ο Wisebot με τα παιδιά!', en: 'Wisebot with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-7',
    title: { el: 'SPARKEN & ΠΑΙΔΙΑ', en: 'SPARKEN & KIDS' },
    hero: 'Sparken',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-sparken.png',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_51dae794-84f7-4fd3-af4c-e5a22ada28c2_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Ο Sparken με τα παιδιά!', en: 'Sparken with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-8',
    title: { el: 'LINK & ΠΑΙΔΙΑ', en: 'LINK & KIDS' },
    hero: 'Link',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-link.png',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_8920af1f-ecc7-460e-aec8-b241c15d0b11_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Η Link με τα παιδιά!', en: 'Link with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-9',
    title: { el: 'CROCUS & ΠΑΙΔΙΑ', en: 'CROCUS & KIDS' },
    hero: 'Crocus',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-crocus.png',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_8e1b62f3-dcba-4feb-beee-6c4a5565298d_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Ο Crocus με τα παιδιά!', en: 'Crocus with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-10',
    title: { el: 'PENCILLO & ΠΑΙΔΙΑ', en: 'PENCILLO & KIDS' },
    hero: 'Pencillo',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-pencilo.png',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_6ffdf71a-3cc5-4631-8b8d-6c9cad233409_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Ο Pencillo με τα παιδιά!', en: 'Pencillo with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'vid-11',
    title: { el: 'ΟΙ ΗΡΩΕΣ ΜΑΖΙ', en: 'HEROES TOGETHER' },
    hero: 'All',
    category: 'adventure',
    thumbnail: '/images/paidia-wisebot-2.png',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_026327ca-bbf0-43bd-bb52-f4115f7121ff_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Όλοι οι ήρωες μαζί!', en: 'All heroes together!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
];

// --- COMMUNITY VIDEOS ---
const MARKET_VIDEOS: any[] = [];

// STEP 1 OPTIONS
const GREETINGS = [
  { id: 'morning', text: { el: 'Καλημέρα!', en: 'Good morning!' } },
  { id: 'evening', text: { el: 'Καλησπέρα!', en: 'Good evening!' } },
  { id: 'night', text: { el: 'Καληνύχτα!', en: 'Good night!' } }
];

// STEP 2 OPTIONS
const ACTIONS = [
  { id: 'dance', text: { el: 'Να χορεύει', en: 'Dancing' } },
  { id: 'serious', text: { el: 'Να είναι σοβαρός', en: 'Being serious' } },
  { id: 'disappear', text: { el: 'Να εξαφανίζεται', en: 'Disappearing' } }
];

// STEP 3 OPTIONS
const MESSAGES = [
  { id: 'friend', text: { el: 'Είσαι ο καλύτερός μου φίλος.', en: 'You are my best friend.' } },
  { id: 'create', text: { el: 'Πάμε να δημιουργήσουμε κάτι όμορφο.', en: 'Let\'s create something beautiful.' } },
  { id: 'book', text: { el: 'Πάμε να διαβάσουμε βιβλίο.', en: 'Let\'s read a book.' } }
];

// QUOTES FOR LOADING SCREEN
const LOADING_QUOTES = [
  { text: "Η φαντασία είναι το μάτι της ψυχής.", author: "Joseph Joubert" },
  { text: "Κάθε καλλιτέχνης ήταν κάποτε ερασιτέχνης.", author: "Ralph Waldo Emerson" },
  { text: "Η δημιουργία θέλει θάρρος.", author: "Henri Matisse" },
  { text: "Όλα ξεκίνησαν από ένα ποντίκι.", author: "Walt Disney" }
];

interface CinemaProps {
  lang: 'el' | 'en';
  myHeroes: any[];
}

const Cinema: React.FC<CinemaProps> = ({ lang, myHeroes }) => {
  const { spendCredits, costs, trackAction } = useEconomy();
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Gallery State
  const [gallery, setGallery] = useState<any[]>([...SYSTEM_VIDEOS, ...MARKET_VIDEOS]);

  // Wizard State
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Selection State
  const [selectedHero, setSelectedHero] = useState<any | null>(null);
  
  const [selectedGreeting, setSelectedGreeting] = useState<string>('');
  const [customGreeting, setCustomGreeting] = useState('');
  
  const [selectedAction, setSelectedAction] = useState<string>('');
  const [customAction, setCustomAction] = useState('');
  
  const [selectedMessage, setSelectedMessage] = useState<string>('');
  const [customMessage, setCustomMessage] = useState('');

  // Generation State
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [quoteData, setQuoteData] = useState({ text: '', author: '' });
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);

  useEffect(() => {
    if (location.state && location.state.animateHero) {
      setIsWizardOpen(true);
      setSelectedHero(location.state.animateHero);
      setCurrentStep(2); // Skip hero selection if coming from WiseFriends
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const allHeroes = [
    ...HEROES.map(h => ({ ...h, type: 'default' })),
    ...myHeroes.map(h => ({ ...h, avatar: h.image, role: { el: 'Δικός σου', en: 'Yours' }, type: 'user' }))
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const newHero = {
            id: `uploaded-${Date.now()}`,
            name: 'Uploaded Hero',
            avatar: event.target.result as string,
            type: 'uploaded'
          };
          setSelectedHero(newHero);
          setCurrentStep(2);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const getApiKey = async (): Promise<string> => {
    let key = process.env.API_KEY;
    const win = window as any;
    if (win.aistudio) {
        const hasKey = await win.aistudio.hasSelectedApiKey();
        if (!hasKey) {
            await win.aistudio.openSelectKey();
        }
    }
    return key || '';
  };

  const handleGenerate = async () => {
    if (!spendCredits(costs.video)) {
        alert(lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
        return;
    }

    setIsGenerating(true);
    setGeneratedVideoUrl(null);
    
    // Select a random quote for this session
    const randomQuote = LOADING_QUOTES[Math.floor(Math.random() * LOADING_QUOTES.length)];
    setQuoteData(randomQuote);

    // --- LOADING SEQUENCE ---
    const sequence = [
        { text: lang === 'el' ? "🎥 Ρυθμίζουμε τα φώτα..." : "🎥 Setting the lights...", delay: 0 },
        { text: lang === 'el' ? "🎭 Ο ηθοποιός ετοιμάζεται..." : "🎭 The actor is getting ready...", delay: 2000 },
        { text: lang === 'el' ? "🎬 Ησυχία στο πλατό..." : "🎬 Quiet on set...", delay: 4000 },
        { text: randomQuote.text, author: randomQuote.author, isQuote: true, delay: 6000 },
        { text: lang === 'el' ? "✨ Προσθέτουμε λίγη μαγεία..." : "✨ Adding some magic...", delay: 10000 },
    ];

    let timeoutIds: ReturnType<typeof setTimeout>[] = [];
    sequence.forEach(({ text, delay, isQuote }) => {
        const id = setTimeout(() => {
            setLoadingText(text);
        }, delay);
        timeoutIds.push(id);
    });

    // Prepare Inputs
    const finalGreeting = customGreeting || selectedGreeting;
    const finalAction = customAction || selectedAction;
    const finalMessage = customMessage || selectedMessage;

    try {
      await getApiKey();
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // Image Prep
      let imageBytes = "";
      let mimeType = "image/png";

      if (selectedHero.avatar.startsWith('data:')) {
          const parts = selectedHero.avatar.split(',');
          mimeType = parts[0].match(/:(.*?);/)?.[1] || "image/png";
          imageBytes = parts[1];
      } else {
          const resp = await fetch(selectedHero.avatar);
          const blob = await resp.blob();
          mimeType = blob.type;
          const reader = new FileReader();
          imageBytes = await new Promise((resolve) => {
              reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
              reader.readAsDataURL(blob);
          });
      }

      const prompt = `Animate the character in this image.
      Action: The character is doing: ${finalAction}.
      Speech: The character is looking at the camera and speaking this exact text: "${finalGreeting} ${finalMessage}".
      Lip Sync: Synchronize mouth movement to the speech text provided.
      Style: High quality, cinematic 3D.`;

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: { imageBytes, mimeType },
        config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '9:16' }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({operation: operation});
      }

      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
        const videoUri = operation.response.generatedVideos[0].video.uri;
        const fetchUrl = `${videoUri}&key=${process.env.API_KEY}`;
        const videoResponse = await fetch(fetchUrl);
        const videoBlob = await videoResponse.blob();
        const localUrl = URL.createObjectURL(videoBlob);
        
        // --- ADD TO GALLERY ---
        const newVideoEntry = {
            id: `my-${Date.now()}`,
            title: { el: `Η Ταινία του ${selectedHero.name}`, en: `${selectedHero.name}'s Movie` },
            hero: selectedHero.name,
            category: 'user',
            thumbnail: selectedHero.avatar, // Use hero image as thumbnail for now
            videoUrl: localUrl,
            duration: '0:06', // Veo videos are usually short
            description: { el: `${finalAction} - ${finalGreeting}`, en: `${finalAction} - ${finalGreeting}` },
            author: 'You',
            type: 'user'
        };
        
        setGallery(prev => [newVideoEntry, ...prev]);
        setGeneratedVideoUrl(localUrl);
        trackAction('CREATE_VIDEO');
      } else {
        throw new Error("No video generated.");
      }

    } catch (error: any) {
      console.error(error);
      alert(lang === 'el' ? 'Σφάλμα στη δημιουργία βίντεο: ' + error.message : 'Error generating video: ' + error.message);
    } finally {
      setIsGenerating(false);
      timeoutIds.forEach(clearTimeout);
    }
  };

  const resetWizard = () => {
    setIsWizardOpen(false);
    setCurrentStep(1);
    setSelectedHero(null);
    setGeneratedVideoUrl(null);
    setSelectedGreeting(''); setCustomGreeting('');
    setSelectedAction(''); setCustomAction('');
    setSelectedMessage(''); setCustomMessage('');
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4 md:py-10 pb-32">
      
      {/* Header */}
      {!isWizardOpen && (
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter">
            WISE <span className="text-blue-500">CINEMA</span>
          </h2>
          <button 
            onClick={() => setIsWizardOpen(true)}
            className="px-8 py-4 bg-white text-black rounded-full font-[1000] uppercase tracking-widest shadow-xl hover:scale-105 transition-transform text-sm md:text-base flex items-center gap-2 mx-auto"
          >
            <Sparkles size={20} className="text-purple-600" />
            {lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΑ LIVE VIDEO' : 'CREATE LIVE VIDEO'}
          </button>
        </div>
      )}

      {/* WIZARD CONTAINER */}
      <AnimatePresence mode="wait">
        {isWizardOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-4xl mx-auto bg-[#0f1014] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <button onClick={resetWizard} className="absolute top-6 right-6 text-white/50 hover:text-white p-2 z-50">
                <X size={24} />
            </button>

            {/* PROGRESS BAR */}
            {!generatedVideoUrl && !isGenerating && (
                <div className="flex gap-2 mb-8 pr-10">
                    {[1, 2, 3, 4].map(s => (
                        <div key={s} className={`h-1.5 flex-1 rounded-full transition-colors ${s <= currentStep ? 'bg-blue-500' : 'bg-white/10'}`}></div>
                    ))}
                </div>
            )}

            {/* LOADING STATE */}
            {isGenerating ? (
                <div className="text-center py-20 flex flex-col items-center justify-center h-[50vh]">
                    <div className="relative w-32 h-32 mb-8">
                        <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 border-4 border-purple-500/50 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Film size={40} className="text-white animate-pulse" />
                        </div>
                    </div>
                    
                    <motion.div
                        key={loadingText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="max-w-xl"
                    >
                        {loadingText === quoteData.text ? (
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                                <Quote className="text-blue-400 mb-4 mx-auto opacity-80" size={32} />
                                <p className="text-2xl font-serif italic text-white leading-relaxed">"{quoteData.text}"</p>
                                <p className="text-blue-300 text-xs font-black uppercase tracking-[0.3em] mt-6">{quoteData.author}</p>
                            </div>
                        ) : (
                            <h3 className="text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 uppercase italic tracking-wider animate-pulse">
                                {loadingText}
                            </h3>
                        )}
                    </motion.div>
                </div>
            ) : generatedVideoUrl ? (
                // RESULT STATE
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                    
                    <h3 className="text-3xl md:text-5xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 italic uppercase tracking-tighter mb-4 drop-shadow-2xl text-center">
                        {lang === 'el' ? 'Η ΤΑΙΝΙΑ ΣΟΥ ΕΙΝΑΙ ΕΤΟΙΜΗ!' : 'YOUR MOVIE IS READY!'}
                    </h3>
                    
                    <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-8">
                        {lang === 'el' ? 'ΑΠΟΘΗΚΕΥΤΗΚΕ ΣΤΗ ΣΥΛΛΟΓΗ ΣΟΥ' : 'SAVED TO YOUR GALLERY'}
                    </p>

                    <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl mb-10 group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2.6rem] blur opacity-40 group-hover:opacity-70 transition-opacity duration-1000"></div>
                        <div className="aspect-[9/16] w-full max-w-[280px] md:max-w-sm bg-black rounded-[2rem] overflow-hidden relative z-10">
                            <video ref={(el) => { if (el) { el.muted = false; el.play().catch(() => {}); } }} src={generatedVideoUrl} controls loop playsInline className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md relative z-20">
                       <a href={generatedVideoUrl} download="WiseBot_Cinema.mp4" className="flex-1 py-4 bg-white text-black rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl">
                           <Download size={20} /> {lang === 'el' ? 'ΚΑΤΕΒΑΣΜΑ' : 'DOWNLOAD'}
                       </a>
                       <button onClick={resetWizard} className="flex-1 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-[1000] uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                           <RefreshCcw size={20} /> {lang === 'el' ? 'ΝΕΟ ΕΡΓΟ' : 'NEW PROJECT'}
                       </button>
                    </div>
                </motion.div>
            ) : (
                // WIZARD STEPS (Existing code)
                <div className="space-y-6 md:space-y-8">
                    
                    {/* STEP 1: HERO */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase italic flex items-center gap-3">
                                <Users className="text-blue-400" size={24}/> {lang === 'el' ? '1. ΕΠΙΛΕΞΕ ΗΡΩΑ' : '1. CHOOSE HERO'}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
                                <div onClick={() => fileInputRef.current?.click()} className="aspect-square rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 bg-white/5">
                                    <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleFileUpload}/>
                                    <Upload size={24} className="text-white/50 mb-2"/>
                                    <span className="text-[9px] font-bold text-white/50 uppercase">{lang === 'el' ? 'ΑΝΕΒΑΣΜΑ' : 'UPLOAD'}</span>
                                </div>
                                {allHeroes.map(h => (
                                    <div key={h.id} onClick={() => { setSelectedHero(h); setCurrentStep(2); }} className="aspect-square rounded-2xl overflow-hidden border-2 border-white/10 hover:border-blue-500 cursor-pointer transition-all bg-black/40">
                                        <img src={h.avatar} className="w-full h-full object-cover" alt={h.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 2: GREETING */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase italic flex items-center gap-3">
                                <Mic className="text-purple-400" size={24}/> {lang === 'el' ? '2. ΤΙ ΧΑΙΡΕΤΙΣΜΟ ΘΕΛΕΙΣ;' : '2. CHOOSE A GREETING'}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {GREETINGS.map(g => (
                                    <button
                                        key={g.id}
                                        onClick={() => { setSelectedGreeting(g.text[lang]); setCustomGreeting(''); }}
                                        className={`p-4 rounded-xl text-left font-bold border-2 transition-all text-sm md:text-base ${selectedGreeting === g.text[lang] ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 text-white/50 hover:border-white/30'}`}
                                    >
                                        "{g.text[lang]}"
                                    </button>
                                ))}
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        placeholder={lang === 'el' ? 'Ή γράψε κάτι δικό σου...' : 'Or write your own...'}
                                        value={customGreeting}
                                        onChange={(e) => { setCustomGreeting(e.target.value); setSelectedGreeting(''); }}
                                        className="w-full p-4 rounded-xl bg-black border border-white/20 text-white focus:border-purple-500 outline-none font-bold text-sm md:text-base"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pt-4">
                                <button onClick={() => setCurrentStep(1)} className="text-white/50 font-bold uppercase text-xs p-2">{lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}</button>
                                <button disabled={!selectedGreeting && !customGreeting} onClick={() => setCurrentStep(3)} className="px-8 py-3 bg-white text-black rounded-xl font-black uppercase text-xs md:text-sm disabled:opacity-50">{lang === 'el' ? 'ΕΠΟΜΕΝΟ' : 'NEXT'}</button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: ACTION */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase italic flex items-center gap-3">
                                <Activity className="text-emerald-400" size={24}/> {lang === 'el' ? '3. ΤΙ ΚΙΝΗΣΗ ΝΑ ΚΑΝΕΙ;' : '3. WHAT ACTION?'}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {ACTIONS.map(a => (
                                    <button
                                        key={a.id}
                                        onClick={() => { setSelectedAction(a.text[lang]); setCustomAction(''); }}
                                        className={`p-4 rounded-xl text-left font-bold border-2 transition-all text-sm md:text-base ${selectedAction === a.text[lang] ? 'border-emerald-500 bg-emerald-500/20 text-white' : 'border-white/10 text-white/50 hover:border-white/30'}`}
                                    >
                                        {a.text[lang]}
                                    </button>
                                ))}
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        placeholder={lang === 'el' ? 'Ή γράψε δική σου κίνηση...' : 'Or write your own action...'}
                                        value={customAction}
                                        onChange={(e) => { setCustomAction(e.target.value); setSelectedAction(''); }}
                                        className="w-full p-4 rounded-xl bg-black border border-white/20 text-white focus:border-emerald-500 outline-none font-bold text-sm md:text-base"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pt-4">
                                <button onClick={() => setCurrentStep(2)} className="text-white/50 font-bold uppercase text-xs p-2">{lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}</button>
                                <button disabled={!selectedAction && !customAction} onClick={() => setCurrentStep(4)} className="px-8 py-3 bg-white text-black rounded-xl font-black uppercase text-xs md:text-sm disabled:opacity-50">{lang === 'el' ? 'ΕΠΟΜΕΝΟ' : 'NEXT'}</button>
                            </div>
                        </div>
                    )}

                    {/* STEP 4: MESSAGE */}
                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase italic flex items-center gap-3">
                                <MessageCircle className="text-blue-400" size={24}/> {lang === 'el' ? '4. ΤΙ ΜΗΝΥΜΑ ΝΑ ΠΕΙ;' : '4. WHAT MESSAGE?'}
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {MESSAGES.map(m => (
                                    <button
                                        key={m.id}
                                        onClick={() => { setSelectedMessage(m.text[lang]); setCustomMessage(''); }}
                                        className={`p-4 rounded-xl text-left font-bold border-2 transition-all text-sm md:text-base ${selectedMessage === m.text[lang] ? 'border-blue-500 bg-blue-500/20 text-white' : 'border-white/10 text-white/50 hover:border-white/30'}`}
                                    >
                                        "{m.text[lang]}"
                                    </button>
                                ))}
                                <div>
                                    <textarea
                                        placeholder={lang === 'el' ? 'Ή γράψε το δικό σου μήνυμα...' : 'Or write your own message...'}
                                        value={customMessage}
                                        onChange={(e) => { setCustomMessage(e.target.value); setSelectedMessage(''); }}
                                        className="w-full p-4 rounded-xl bg-black border border-white/20 text-white focus:border-blue-500 outline-none font-bold min-h-[100px] text-sm md:text-base"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pt-4">
                                <button onClick={() => setCurrentStep(3)} className="text-white/50 font-bold uppercase text-xs p-2">{lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}</button>
                                <button
                                    disabled={!selectedMessage && !customMessage}
                                    onClick={handleGenerate}
                                    className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-black uppercase flex items-center gap-2 shadow-lg hover:scale-105 transition-transform text-sm"
                                >
                                    <Zap size={20} fill="currentColor" /> {lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΑ' : 'CREATE'}
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* STANDARD VIDEOS GRID (Below Wizard) */}
      {!isWizardOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((video) => (
                <div key={video.id} onClick={() => setSelectedVideo(video)} className="group cursor-pointer rounded-[2rem] overflow-hidden border border-white/10 bg-[#0f1014] relative shadow-lg hover:border-blue-500/50 transition-all">
                    <div className="aspect-video relative bg-black">
                        {video.thumbnail ? (
                            <img src={video.thumbnail} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={typeof video.title === 'string' ? video.title : video.title[lang]}/>
                        ) : (
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                                <Film size={40} className="text-white/20" />
                            </div>
                        )}
                        
                        {/* TYPE BADGE */}
                        <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest z-10 border border-white/10 shadow-lg
                            ${video.type === 'user' ? 'bg-purple-600 text-white' : video.type === 'community' ? 'bg-emerald-600 text-white' : 'bg-blue-600 text-white'}">
                            {video.type === 'user' ? (lang === 'el' ? 'ΔΙΚΟ ΜΟΥ' : 'MY VIDEO') : video.type === 'community' ? (lang === 'el' ? 'ΚΟΙΝΟΤΗΤΑ' : 'COMMUNITY') : (lang === 'el' ? 'ΕΠΙΣΗΜΟ' : 'OFFICIAL')}
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><Play size={20} fill="white" className="text-white"/></div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-black text-white uppercase italic leading-tight line-clamp-1">{typeof video.title === 'string' ? video.title : video.title[lang]}</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            {video.type === 'community' && <Globe size={12} className="text-emerald-400" />}
                            {video.type === 'user' && <Users size={12} className="text-purple-400" />}
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{video.author}</span>
                        </div>
                        <p className="text-white/50 text-xs font-bold line-clamp-2">{typeof video.description === 'string' ? video.description : video.description[lang]}</p>
                    </div>
                </div>
            ))}
        </div>
      )}

      {/* VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 xl:pl-80" onClick={() => setSelectedVideo(null)}>
             <div className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setSelectedVideo(null)} className="absolute top-4 right-4 text-white z-20 bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors"><X size={24}/></button>
                
                {selectedVideo.videoUrl ? (
                    selectedVideo.videoUrl.includes('youtube') || selectedVideo.videoUrl.includes('vimeo') ? (
                        <iframe 
                            src={selectedVideo.videoUrl} 
                            className="w-full h-full" 
                            allow="autoplay; fullscreen" 
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <video ref={(el) => { if (el) { el.muted = false; el.play().catch(() => {}); } }} src={selectedVideo.videoUrl} controls playsInline className="w-full h-full object-contain" />
                    )
                ) : (
                    <div className="text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto border border-white/10">
                            <AlertCircle size={40} className="text-white/30" />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase italic">{lang === 'el' ? 'ΒΙΝΤΕΟ ΣΕ ΛΙΓΟ' : 'VIDEO COMING SOON'}</h3>
                        <p className="text-white/50 text-sm font-bold">{lang === 'el' ? 'Αυτό το βίντεο δεν είναι διαθέσιμο ακόμα.' : 'This video is not yet available.'}</p>
                    </div>
                )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Cinema;
