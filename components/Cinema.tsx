
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
import { GoogleGenAI } from "../services/geminiProxy";
import { useLocation } from 'react-router-dom';
import { HEROES } from '../constants';
import { useEconomy } from '../context/EconomyContext';

const motion = m as any;

// --- ALL CINEMA VIDEOS ---
// 🎬 Inspirational Shorts (featured first)
const INSPIRATION_VIDEOS = [
  {
    id: 'ins-1',
    title: { el: 'ΤΟ ΟΡΑΜΑ', en: 'THE VISION' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/wisebot.jpg',
    videoUrl: '/video/to%20orama.mp4',
    duration: '0:30',
    description: { el: 'Κάθε μεγάλο ταξίδι ξεκινά με ένα όραμα.', en: 'Every great journey starts with a vision.' },
    author: 'WiseBot Studio',
    type: 'official',
    featured: true
  },
  {
    id: 'ins-2',
    title: { el: 'Η ΙΔΕΑ ΖΩΝΤΑΝΕΥΕΙ', en: 'THE IDEA COMES ALIVE' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/sparken.jpg',
    videoUrl: '/video/i%20idea%20zontanevi.mp4',
    duration: '0:30',
    description: { el: 'Μια ιδέα μπορεί να αλλάξει τα πάντα.', en: 'One idea can change everything.' },
    author: 'WiseBot Studio',
    type: 'official',
    featured: true
  },
  {
    id: 'ins-3',
    title: { el: 'ΔΗΜΙΟΥΡΓΙΑ', en: 'CREATION' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/pencilo.jpg',
    videoUrl: '/video/dimiourgia.mp4',
    duration: '0:30',
    description: { el: 'Δημιούργησε κάτι που δεν υπήρχε πριν.', en: 'Create something that never existed before.' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-4',
    title: { el: 'ΦΤΙΑΞΤΕ ΚΑΤΙ ΠΟΥ ΑΝΤΕΧΕΙ', en: 'BUILD SOMETHING TIMELESS' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/crocus.jpg',
    videoUrl: '/video/ftiakste%20kati%20pou%20antexi%20ston%20xrono.mp4',
    duration: '0:30',
    description: { el: 'Φτιάξε κάτι που θα μείνει για πάντα.', en: 'Build something that lasts forever.' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-5',
    title: { el: 'ΕΠΙΜΕΝΟΥΜΕ', en: 'WE PERSIST' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/link.jpg',
    videoUrl: '/video/epimenoume.MP4',
    duration: '0:30',
    description: { el: 'Η επιμονή φέρνει αποτελέσματα.', en: 'Persistence brings results.' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-6',
    title: { el: 'ΦΤΙΑΞΑΤΕ ΤΑ ΦΤΕΡΑ ΣΑΣ', en: 'BUILD YOUR WINGS' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/paidia-wisebot-2.webp',
    videoUrl: '/video/ftiaksate%20ta%20ftera%20sas%20.MP4',
    duration: '0:30',
    description: { el: 'Φτιάξε τα φτερά σου και πέτα ψηλά!', en: 'Build your wings and fly high!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-7',
    title: { el: 'Η ΑΡΧΗ ΕΓΙΝΕ', en: 'THE BEGINNING WAS MADE' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/ta-3-paidia.webp',
    videoUrl: '/video/i%20arxi%20egine.mp4',
    duration: '0:30',
    description: { el: 'Κάθε αρχή κρύβει μεγαλείο.', en: 'Every beginning holds greatness.' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-8',
    title: { el: 'ΣΤΡΑΤΗΓΙΚΗ', en: 'STRATEGY' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/foxi teacher.webp',
    videoUrl: '/video/stratigiki.mp4',
    duration: '0:30',
    description: { el: 'Σκέψου έξυπνα, κάνε στρατηγικές κινήσεις.', en: 'Think smart, make strategic moves.' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-9',
    title: { el: 'ΤΟ ΛΑΘΟΣ ΠΟΥ ΣΕ ΣΩΖΕΙ', en: 'THE MISTAKE THAT SAVES YOU' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/paidia-kai-wisebot.webp',
    videoUrl: '/video/to%20lathos%20pou%20se%20sozi.MP4',
    duration: '0:30',
    description: { el: 'Τα λάθη είναι ο καλύτερος δάσκαλος.', en: 'Mistakes are the best teacher.' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-10',
    title: { el: 'ΠΑΙΧΝΙΔΙ ΜΕ AI', en: 'GAME WITH AI' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/wiseboat kai paidia eksofilo.PNG',
    videoUrl: '/video/paixnidi%20me%20ai.mp4',
    duration: '0:30',
    description: { el: 'Ανακάλυψε τη δύναμη της τεχνητής νοημοσύνης.', en: 'Discover the power of AI.' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-11',
    title: { el: 'ΔΕΙΞΤΟ', en: 'SHOW IT' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/paidia-kai-sparken.webp',
    videoUrl: '/video/diksto.MP4',
    duration: '0:30',
    description: { el: 'Δείξε στον κόσμο τι μπορείς!', en: 'Show the world what you can do!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-12',
    title: { el: 'ΖΩΝΤΑΝΑ ΠΑΙΧΝΙΔΙΑ', en: 'LIVE GAMES' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/paidia-kai-link.webp',
    videoUrl: '/video/zontana%20paixnidia%20.MP4',
    duration: '0:30',
    description: { el: 'Τα παιχνίδια ζωντανεύουν με τη φαντασία σου!', en: 'Games come alive with your imagination!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'ins-13',
    title: { el: 'ΤΟ ΛΑΘΟΣ', en: 'THE MISTAKE' },
    hero: 'WiseBot',
    category: 'inspiration',
    thumbnail: '/images/paidia-kai-crocus.webp',
    videoUrl: '/video/to%20lathos.MP4',
    duration: '0:30',
    description: { el: 'Μη φοβάσαι να κάνεις λάθος.', en: "Don't be afraid to make mistakes." },
    author: 'WiseBot Studio',
    type: 'official'
  },
];

// 🦸 Hero Character Videos
const HERO_VIDEOS = [
  {
    id: 'hero-1',
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
    id: 'hero-2',
    title: { el: 'LINK VIDEO', en: 'LINK VIDEO' },
    hero: 'Link',
    category: 'adventure',
    thumbnail: '/images/link.jpg',
    videoUrl: '/video/link%20claude.mp4',
    duration: '0:30',
    description: { el: 'Η Link σε δράση!', en: 'Link in action!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'hero-3',
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
    id: 'hero-4',
    title: { el: 'PENCILLO VIDEO', en: 'PENCILLO VIDEO' },
    hero: 'Pencillo',
    category: 'adventure',
    thumbnail: '/images/pencilo.jpg',
    videoUrl: '/video/pencillo%20claude.mp4',
    duration: '0:30',
    description: { el: 'Ο Pencillo σε δράση!', en: 'Pencillo in action!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'hero-5',
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
    id: 'hero-6',
    title: { el: 'WISEBOT & ΠΑΙΔΙΑ', en: 'WISEBOT & KIDS' },
    hero: 'Wisebot',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-wisebot.webp',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_7254caf8-e421-49eb-a44c-09d6f4268955_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Ο Wisebot με τα παιδιά!', en: 'Wisebot with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'hero-7',
    title: { el: 'SPARKEN & ΠΑΙΔΙΑ', en: 'SPARKEN & KIDS' },
    hero: 'Sparken',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-sparken.webp',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_51dae794-84f7-4fd3-af4c-e5a22ada28c2_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Ο Sparken με τα παιδιά!', en: 'Sparken with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'hero-8',
    title: { el: 'LINK & ΠΑΙΔΙΑ', en: 'LINK & KIDS' },
    hero: 'Link',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-link.webp',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_8920af1f-ecc7-460e-aec8-b241c15d0b11_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Η Link με τα παιδιά!', en: 'Link with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'hero-9',
    title: { el: 'CROCUS & ΠΑΙΔΙΑ', en: 'CROCUS & KIDS' },
    hero: 'Crocus',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-crocus.webp',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_8e1b62f3-dcba-4feb-beee-6c4a5565298d_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Ο Crocus με τα παιδιά!', en: 'Crocus with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'hero-10',
    title: { el: 'PENCILLO & ΠΑΙΔΙΑ', en: 'PENCILLO & KIDS' },
    hero: 'Pencillo',
    category: 'adventure',
    thumbnail: '/images/paidia-kai-pencilo.webp',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_6ffdf71a-3cc5-4631-8b8d-6c9cad233409_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Ο Pencillo με τα παιδιά!', en: 'Pencillo with the kids!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
  {
    id: 'hero-11',
    title: { el: 'ΟΙ ΗΡΩΕΣ ΜΑΖΙ', en: 'HEROES TOGETHER' },
    hero: 'All',
    category: 'adventure',
    thumbnail: '/images/paidia-wisebot-2.webp',
    videoUrl: '/video/_users_617112eb-fd56-420e-8c6d-32639da2f4b5_generated_026327ca-bbf0-43bd-bb52-f4115f7121ff_generated_video.MP4',
    duration: '0:30',
    description: { el: 'Όλοι οι ήρωες μαζί!', en: 'All heroes together!' },
    author: 'WiseBot Studio',
    type: 'official'
  },
];

const SYSTEM_VIDEOS = [...INSPIRATION_VIDEOS, ...HERO_VIDEOS];

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
  const { spendCredits, costs, trackAction, showNotification } = useEconomy();
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

  const handleGenerate = async () => {
    if (!spendCredits(costs.video)) {
      showNotification('💰', lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
      return;
    }

    setIsGenerating(true);
    setGeneratedVideoUrl(null);

    const randomQuote = LOADING_QUOTES[Math.floor(Math.random() * LOADING_QUOTES.length)];
    setQuoteData(randomQuote);

    const sequence = [
      { text: lang === 'el' ? "🎥 Ρυθμίζουμε τα φώτα..." : "🎥 Setting the lights...", delay: 0 },
      { text: lang === 'el' ? "🎭 Ο ηθοποιός ετοιμάζεται..." : "🎭 The actor is getting ready...", delay: 3000 },
      { text: lang === 'el' ? "🎬 Ησυχία στο πλατό..." : "🎬 Quiet on set...", delay: 7000 },
      { text: randomQuote.text, author: randomQuote.author, isQuote: true, delay: 12000 },
      { text: lang === 'el' ? "✨ Προσθέτουμε μαγεία..." : "✨ Adding magic...", delay: 20000 },
      { text: lang === 'el' ? "🎬 Σχεδόν έτοιμο..." : "🎬 Almost ready...", delay: 35000 },
    ];

    let timeoutIds: ReturnType<typeof setTimeout>[] = [];
    sequence.forEach(({ text, delay }) => {
      const id = setTimeout(() => setLoadingText(text), delay);
      timeoutIds.push(id);
    });

    const finalGreeting = customGreeting || selectedGreeting;
    const finalAction = customAction || selectedAction;
    const finalMessage = customMessage || selectedMessage;

    try {
      // Prepare hero image as base64
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

      const prompt = `Animate the character in this image. Action: ${finalAction}. The character says: "${finalGreeting} ${finalMessage}". Style: cinematic 3D animation, colorful, kid-friendly.`;

      // Step 1: Start video generation via server
      const genResp = await fetch('/api/ai/video-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, imageBytes, mimeType }),
      });
      const genData = await genResp.json();

      if (!genData.operationName) {
        throw new Error(genData.error || 'Failed to start video generation');
      }

      // Step 2: Poll for completion
      let attempts = 0;
      const maxAttempts = 60; // 5 minutes

      const pollVideo = async (): Promise<string> => {
        while (attempts < maxAttempts) {
          attempts++;
          await new Promise(r => setTimeout(r, 5000));

          try {
            const statusResp = await fetch(`/api/ai/video-status?operationName=${encodeURIComponent(genData.operationName)}`);
            const statusData = await statusResp.json();

            if (statusData.status === 'complete') {
              // Server returns base64 video data (API key never exposed to client)
              if (statusData.videoData) {
                return statusData.videoData;
              }
              // Fallback: blob URL from videoUrl (public URLs only)
              if (statusData.videoUrl) {
                try {
                  const videoResp = await fetch(statusData.videoUrl);
                  if (videoResp.ok) {
                    const blob = await videoResp.blob();
                    return URL.createObjectURL(blob);
                  }
                } catch {
                  // If fetch fails, use URL directly
                }
                return statusData.videoUrl;
              }
            }
            if (statusData.status === 'error') {
              throw new Error(statusData.error || 'Video generation failed');
            }
          } catch (pollErr: any) {
            if (pollErr.message?.includes('failed') || pollErr.message?.includes('error')) throw pollErr;
            // Network error — keep polling
            console.warn('Poll error, retrying:', pollErr.message);
          }
        }
        throw new Error(lang === 'el' ? 'Timeout — δοκίμασε ξανά' : 'Timeout — try again');
      };

      const localUrl = await pollVideo();

      const newVideoEntry = {
        id: `my-${Date.now()}`,
        title: { el: `Η Ταινία του ${selectedHero.name}`, en: `${selectedHero.name}'s Movie` },
        hero: selectedHero.name,
        category: 'user',
        thumbnail: selectedHero.avatar,
        videoUrl: localUrl,
        duration: '0:06',
        description: { el: `${finalAction} - ${finalGreeting}`, en: `${finalAction} - ${finalGreeting}` },
        author: 'You',
        type: 'user'
      };

      setGallery(prev => [newVideoEntry, ...prev]);
      setGeneratedVideoUrl(localUrl);
      trackAction('CREATE_VIDEO');
      showNotification('🎬', lang === 'el' ? 'Το βίντεο είναι έτοιμο!' : 'Video is ready!');

    } catch (error: any) {
      console.error(error);
      showNotification('❌', error.message || (lang === 'el' ? 'Σφάλμα βίντεο' : 'Video error'));
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
            className="w-full max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl relative overflow-hidden"
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

      {/* ═══════════════════════════════════════════════════ */}
      {/* CINEMA GALLERY — REDESIGNED                       */}
      {/* ═══════════════════════════════════════════════════ */}
      {!isWizardOpen && (
        <div className="space-y-16">

          {/* ── FEATURED HERO BANNER ── */}
          {(() => {
            const feat = INSPIRATION_VIDEOS[0];
            return (
              <div onClick={() => setSelectedVideo(feat)} className="group cursor-pointer relative rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
                <div className="aspect-[21/9] relative">
                  <img src={feat.thumbnail} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-105 group-hover:scale-100" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-400">FEATURED</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter mb-2">
                      {feat.title[lang]}
                    </h2>
                    <p className="text-white/60 text-sm font-bold max-w-lg">{feat.description[lang]}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                      <Play size={32} fill="white" className="text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ── INSPIRATIONAL SHORTS ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={20} className="text-amber-400" />
              <h3 className="text-xl md:text-2xl font-[1000] text-white uppercase italic tracking-tight">
                {lang === 'el' ? 'ΕΜΠΝΕΥΣΤΙΚΑ SHORTS' : 'INSPIRATIONAL SHORTS'}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {INSPIRATION_VIDEOS.slice(1).map((video) => (
                <div key={video.id} onClick={() => setSelectedVideo(video)} className="group cursor-pointer rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/5">
                  <div className="aspect-video relative bg-black">
                    <img src={video.thumbnail} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={16} fill="white" className="text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-3 right-3">
                      <h4 className="text-xs font-[900] text-white uppercase italic leading-tight line-clamp-1">{video.title[lang]}</h4>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-white/40 text-[10px] font-bold line-clamp-2">{video.description[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA: CREATE YOUR OWN VIDEO ── */}
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/40 via-[#0B0F1A] to-blue-900/40 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Wand2 size={18} className="text-purple-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">{lang === 'el' ? 'AI VIDEO STUDIO' : 'AI VIDEO STUDIO'}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter leading-tight">
                  {lang === 'el' ? 'ΖΩΝΤΑΝΕΨΕ ΤΟΝ ΗΡΩΑ ΣΟΥ!' : 'BRING YOUR HERO TO LIFE!'}
                </h3>
                <p className="text-white/50 text-sm font-bold max-w-md">
                  {lang === 'el'
                    ? 'Φτιάξε τον ήρωά σου στο Hero Lab και μετά ζωντάνεψέ τον εδώ! Δώστου φωνή, κίνηση και μήνυμα — δημιούργησε τη δική σου ταινία AI!'
                    : 'Create your hero in Hero Lab then bring them to life here! Give them voice, movement and a message — create your own AI movie!'}
                </p>
              </div>
              <button
                onClick={() => setIsWizardOpen(true)}
                className="shrink-0 px-8 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-2xl font-[1000] uppercase tracking-widest shadow-xl hover:scale-105 transition-all text-sm flex items-center gap-3 border border-white/10"
              >
                <Film size={22} />
                {lang === 'el' ? 'ΦΤΙΑΞΕ ΤΑΙΝΙΑ' : 'CREATE MOVIE'}
              </button>
            </div>
          </div>

          {/* ── HERO STORIES ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users size={20} className="text-blue-400" />
              <h3 className="text-xl md:text-2xl font-[1000] text-white uppercase italic tracking-tight">
                {lang === 'el' ? 'ΟΙ ΗΡΩΕΣ ΣΕ ΔΡΑΣΗ' : 'HEROES IN ACTION'}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {HERO_VIDEOS.map((video) => (
                <div key={video.id} onClick={() => setSelectedVideo(video)} className="group cursor-pointer rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-blue-500/40 transition-all hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="aspect-video relative bg-black">
                    <img src={video.thumbnail} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={16} fill="white" className="text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-3 right-3">
                      <h4 className="text-xs font-[900] text-white uppercase italic leading-tight line-clamp-1">{video.title[lang]}</h4>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-white/40 text-[10px] font-bold line-clamp-2">{video.description[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── USER CREATED VIDEOS ── */}
          {gallery.filter(v => v.type === 'user').length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wand2 size={20} className="text-purple-400" />
                <h3 className="text-xl md:text-2xl font-[1000] text-white uppercase italic tracking-tight">
                  {lang === 'el' ? 'ΟΙ ΤΑΙΝΙΕΣ ΜΟΥ' : 'MY MOVIES'}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.filter(v => v.type === 'user').map((video) => (
                  <div key={video.id} onClick={() => setSelectedVideo(video)} className="group cursor-pointer rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/5">
                    <div className="aspect-video relative bg-black">
                      {video.thumbnail ? (
                        <img src={video.thumbnail} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="" />
                      ) : (
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center"><Film size={30} className="text-white/20" /></div>
                      )}
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest bg-purple-600 text-white border border-white/10">
                        {lang === 'el' ? 'ΔΙΚΟ ΜΟΥ' : 'MY VIDEO'}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play size={16} fill="white" className="text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-[900] text-white uppercase italic line-clamp-1">{typeof video.title === 'string' ? video.title : video.title[lang]}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
