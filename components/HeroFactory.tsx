
import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import {
  Wand2,
  ArrowRight,
  ArrowLeft,
  RefreshCcw,
  Sparkles,
  Zap,
  Fingerprint,
  Quote,
  Users,
  HeartHandshake,
  Ghost,
  Stars,
  Crown,
  Download,
  Share2,
  Camera,
  Upload,
  UserCircle,
  ImageIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { useEconomy } from '../context/EconomyContext';
import { generateAvatarFromPhoto } from '../services/gemini';
import { renderHeroCard, shareHeroCard, downloadDataUrl } from '../utils/heroCardCanvas';

const motion = m as any;

interface HeroFactoryProps {
  lang: 'el' | 'en';
  addHero: (hero: any) => void;
}

export default function HeroFactory({ lang, addHero }: HeroFactoryProps) {
  const navigate = useNavigate();
  const { credits, spendCredits, costs, trackAction } = useEconomy(); // Economy
  
  const [step, setStep] = useState(-1); // Start at mode selection
  const [mode, setMode] = useState<'create' | 'avatar' | null>(null);
  const [hero, setHero] = useState({
    species: '',
    gear: '',
    contribution: '',
    name: ''
  });
  const [loadingText, setLoadingText] = useState('');
  const [quoteData, setQuoteData] = useState({ text: '', author: '' });

  const DEFAULT_IMAGE = "/images/wisebot.jpg";
  const [resultImage, setResultImage] = useState(DEFAULT_IMAGE);

  // Avatar mode state
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [avatarName, setAvatarName] = useState('');
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [avatarResult, setAvatarResult] = useState<string | null>(null);

  // Hero card state
  const [heroCardImage, setHeroCardImage] = useState<string | null>(null);
  const [cardLoading, setCardLoading] = useState(false);

  // --- INSPIRATION POOL ---
  const QUOTES = [
    {
      text: lang === 'el' ? "Η φαντασία είναι πιο σημαντική από τη γνώση." : "Imagination is more important than knowledge.",
      author: "Albert Einstein"
    },
    {
      text: lang === 'el' ? "Κάθε ήρωας ήταν κάποτε ένα παιδί που ονειρευόταν." : "Every hero was once a child who dreamed.",
      author: "WiseBot"
    }
  ];

  // --- LOADING SEQUENCE & GENERATION LOGIC ---
  useEffect(() => {
    if (step === 4) {
      const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
      setQuoteData(randomQuote);

      // 1. Visual Loading Sequence
      const sequence = [
        { text: lang === 'el' ? `✨ Η μαγεία ξεκινά (-${costs.image}⚡)...` : `✨ Magic begins (-${costs.image}⚡)...`, delay: 0 },
        { text: lang === 'el' ? "🔥 Δίνουμε μορφή στη φαντασία σου..." : "🔥 Shaping your imagination...", delay: 2000 },
        { text: lang === 'el' ? "🛡️ Προσθέτουμε τις δυνάμεις..." : "🛡️ Adding powers...", delay: 4000 },
        { text: randomQuote.text, author: randomQuote.author, delay: 6000, isQuote: true }, 
        { text: lang === 'el' ? "🌟 Ο Θρύλος γεννήθηκε!" : "🌟 A Legend is born!", delay: 10000 },
      ];

      let timeoutIds: ReturnType<typeof setTimeout>[] = [];

      sequence.forEach(({ text, delay, isQuote }) => {
        const id = setTimeout(() => {
          setLoadingText(text);
        }, delay);
        timeoutIds.push(id);
      });

      // 2. Trigger Real AI Generation
      const generateHero = async () => {
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

          const prompt = `Create a masterpiece 3D render of a unique, heroic character for a kids' adventure game. Pixar/Disney animation style.
          
          CORE APPEARANCE (Species/Look): ${hero.species}.
          SPECIAL POWER/GEAR (Visuals): ${hero.gear}.
          THEIR ROLE (Vibe): ${hero.contribution}.
          
          Details: High fidelity, 8k resolution, cinematic lighting, octane render, adorable yet capable, expressive face, vibrant colors. 
          The character stands confidently on a podium. Plain dark gradient studio background to emphasize the character.`;

          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image', 
            contents: { parts: [{ text: prompt }] },
          });

          const parts = response.candidates?.[0]?.content?.parts;
          if (parts) {
            for (const part of parts) {
              if (part.inlineData) {
                const base64String = part.inlineData.data;
                const newImageUrl = `data:image/png;base64,${base64String}`;
                setResultImage(newImageUrl);
                // Track stats
                trackAction('CREATE_IMAGE');
                break;
              }
            }
          }
        } catch (error: any) {
          console.error("Hero generation failed:", error);
        }
      };

      generateHero();

      const finishId = setTimeout(() => {
        setStep(5);
      }, 12000); 
      
      timeoutIds.push(finishId);

      return () => timeoutIds.forEach(clearTimeout);
    }
  }, [step, lang, hero]);

  // Effect to save hero
  useEffect(() => {
    if (step === 5) {
       addHero({
            id: Date.now().toString(),
            name: hero.name,
            role: lang === 'el' ? 'Ο Νέος Φύλακας' : 'The New Guardian',
            image: resultImage,
            description: `${hero.species} • ${hero.gear}`,
            isUserGenerated: true,
            color: 'from-fuchsia-500 to-purple-600',
            heroClass: 'creator'
        });
       trackAction('COMPLETE_HERO'); 
    }
  }, [step, resultImage]); 

  const handleNext = () => {
    if (step === 0 && !hero.species) return;
    if (step === 1 && !hero.gear) return;
    if (step === 2 && !hero.contribution) return;
    if (step === 3 && !hero.name) return;
    
    if (step === 3) {
        // Attempt to spend credits before proceeding
        const success = spendCredits(costs.image);
        if (!success) {
            alert(lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
            return;
        }
    }
    setStep(s => s + 1);
  };

  const handleBack = () => {
    if (step === 0) {
      setStep(-1);
      setMode(null);
    } else if (step > 0) {
      setStep(s => s - 1);
    }
  };

  const reset = () => {
    setStep(-1);
    setMode(null);
    setHero({ species: '', gear: '', contribution: '', name: '' });
    setLoadingText('');
    setResultImage(DEFAULT_IMAGE);
    setUploadedPhoto(null);
    setAvatarName('');
    setAvatarResult(null);
    setAvatarLoading(false);
    setHeroCardImage(null);
    setCardLoading(false);
  };

  // Avatar mode: handle photo upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedPhoto(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Avatar mode: generate avatar from photo
  const handleGenerateAvatar = async () => {
    if (!uploadedPhoto || !avatarName) return;
    const success = spendCredits(costs.image);
    if (!success) {
      alert(lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
      return;
    }
    setAvatarLoading(true);
    setStep(7); // avatar loading step
    try {
      // Extract base64 data from data URL
      const base64Data = uploadedPhoto.split(',')[1];
      const mimeType = uploadedPhoto.split(';')[0].split(':')[1] || 'image/jpeg';
      const result = await generateAvatarFromPhoto(base64Data, mimeType);
      setAvatarResult(result);
      trackAction('CREATE_IMAGE');
      // Save as user avatar
      localStorage.setItem('wb_user_avatar', result);
      // Also save as a hero
      addHero({
        id: `avatar-${Date.now()}`,
        name: avatarName,
        role: lang === 'el' ? 'Ο Πραγματικός Ήρωας' : 'The Real Hero',
        image: result,
        description: lang === 'el' ? 'Μεταμόρφωση φωτογραφίας σε ήρωα' : 'Photo transformed into a hero',
        isUserGenerated: true,
        color: 'from-cyan-500 to-blue-600',
        heroClass: 'avatar'
      });
      trackAction('COMPLETE_HERO');
    } catch (error) {
      console.error('Avatar generation failed:', error);
      alert(lang === 'el' ? 'Κάτι πήγε στραβά. Δοκίμασε ξανά!' : 'Something went wrong. Try again!');
      setStep(6); // back to upload step
    }
    setAvatarLoading(false);
    setStep(8); // avatar result step
  };

  // Generate the hero card image (canvas-based)
  const generateHeroCard = async (): Promise<string | null> => {
    if (heroCardImage) return heroCardImage;
    setCardLoading(true);
    try {
      const cardDataUrl = await renderHeroCard({
        name: hero.name,
        species: hero.species,
        gear: hero.gear,
        contribution: hero.contribution,
        image: resultImage,
        lang,
      });
      setHeroCardImage(cardDataUrl);
      setCardLoading(false);
      return cardDataUrl;
    } catch (e) {
      console.error('Hero card generation failed:', e);
      setCardLoading(false);
      return null;
    }
  };

  const handleDownload = async () => {
    const card = await generateHeroCard();
    if (card) {
      downloadDataUrl(card, `WiseBot_Hero_${hero.name.replace(/\s+/g, '_')}.png`);
    }
  };

  const handleShare = async () => {
    const card = await generateHeroCard();
    if (card) {
      await shareHeroCard(card, hero.name, lang);
    }
  };

  // --- GUIDED TEXTS ---
  const t = {
    step1: {
      badge: lang === 'el' ? 'ΜΟΡΦΗ' : 'FORM',
      title: lang === 'el' ? 'Τι πλάσμα ονειρεύεσαι;' : 'What creature do you dream of?',
      desc: lang === 'el' 
        ? 'Μην πεις απλά "σκύλος". Κλείσε τα μάτια. Είναι ένας ιπτάμενος σκύλος; Ένα ρομπότ από ζελεδάκια; Ένας δράκος με γυαλιά;' 
        : 'Don\'t just say "dog". Close your eyes. Is it a flying dog? A robot made of jelly? A dragon with glasses?',
      ph: lang === 'el' ? 'π.χ. Ένας ιπτάμενος ελέφαντας με μεταλλικά φτερά...' : 'e.g. A flying elephant with metal wings...'
    },
    step2: {
      badge: lang === 'el' ? 'ΔΥΝΑΜΗ' : 'POWER',
      title: lang === 'el' ? 'Τι το κάνει ξεχωριστό;' : 'What makes it special?',
      desc: lang === 'el'
        ? 'Κάθε ήρωας έχει κάτι μοναδικό. Έχει μάτια που βλέπουν στο σκοτάδι; Χέρια από λάβα; Ένα σακίδιο που βγάζει εργαλεία;'
        : 'Every hero has something unique. Eyes that see in the dark? Lava hands? A backpack that spawns tools?',
      ph: lang === 'el' ? 'π.χ. Φοράει γυαλιά που διαβάζουν σκέψεις...' : 'e.g. Wears glasses that read minds...'
    },
    step3: {
      badge: lang === 'el' ? 'ΑΠΟΣΤΟΛΗ' : 'MISSION',
      title: lang === 'el' ? 'Πώς θα βοηθήσει την ομάδα;' : 'How will they help the team?',
      desc: lang === 'el'
        ? 'Η ομάδα μας χρειάζεται βοήθεια. Τι μας λείπει; Μας λείπει το θάρρος; Η γνώση; Το γέλιο; Γίνε ο σωτήρας του παιχνιδιού.'
        : 'Our team needs help. What are we missing? Courage? Knowledge? Laughter? Be the savior of the game.',
      ph: lang === 'el' ? 'π.χ. Δίνει θάρρος σε όποιον φοβάται...' : 'e.g. Gives courage to anyone afraid...'
    },
    step4: {
      badge: lang === 'el' ? 'ΟΝΟΜΑ' : 'NAME',
      title: lang === 'el' ? 'Πώς θα το φωνάζουμε;' : 'What shall we call it?',
      desc: lang === 'el'
        ? 'Ένα θρυλικό όνομα για έναν θρυλικό ήρωα. Κάντο να ακούγεται δυνατά!'
        : 'A legendary name for a legendary hero. Make it sound loud!',
      ph: lang === 'el' ? 'Γράψε το όνομα εδώ...' : 'Type the name here...'
    },
    btn: {
      next: lang === 'el' ? 'ΕΠΟΜΕΝΟ' : 'NEXT',
      back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
      create: lang === 'el' ? `ΔΗΜΙΟΥΡΓΗΣΕ ΤΟ (-${costs.image}⚡)` : `CREATE IT (-${costs.image}⚡)`
    }
  };

  // Compute AnimatePresence key — each distinct view gets a unique key
  const getStepKey = (): string => {
    if (step === -1) return 'mode-select';
    if (step >= 0 && step < 4) return 'inputs';
    if (step === 4) return 'loading';
    if (step === 5) return 'result';
    if (step === 6) return 'avatar-upload';
    if (step === 7) return 'avatar-loading';
    if (step === 8) return 'avatar-result';
    return 'unknown';
  };

  // Render the step content as a single child for AnimatePresence
  const renderStepContent = () => {
    // STEP -1: MODE SELECTION
    if (step === -1) {
      return (
        <motion.div
          key="mode-select"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          className="glass-panel p-8 md:p-12 rounded-[3rem] border-2 border-white/10 shadow-[0_0_60px_rgba(124,58,237,0.15)] relative backdrop-blur-2xl overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />

          <div className="relative z-10 text-center space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 text-white mb-4 shadow-lg">
                <Wand2 size={16} className="text-purple-300" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  {lang === 'el' ? 'ΕΡΓΟΣΤΑΣΙΟ ΗΡΩΩΝ' : 'HERO FACTORY'}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-tight">
                {lang === 'el' ? 'Πώς θέλεις να φτιάξεις τον ήρωά σου;' : 'How do you want to create your hero?'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option 1: Become a Hero (Photo) */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { setMode('avatar'); setStep(6); }}
                className="group relative p-6 rounded-[2rem] border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 text-left hover:border-cyan-400/60 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <Camera size={32} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-[1000] text-white uppercase italic tracking-tight">
                    {lang === 'el' ? 'ΓΙΝΕ ΗΡΩΑΣ!' : 'BECOME A HERO!'}
                  </h3>
                  <p className="text-white/50 text-sm font-bold">
                    {lang === 'el'
                      ? 'Ανέβασε τη φωτογραφία σου και το AI θα σε κάνει ήρωα Pixar!'
                      : 'Upload your photo and AI will turn you into a Pixar hero!'}
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-black uppercase tracking-wider">
                    <Sparkles size={14} /> {lang === 'el' ? 'ΝΕΟ!' : 'NEW!'}
                  </div>
                </div>
              </motion.button>

              {/* Option 2: Create from Imagination */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { setMode('create'); setStep(0); }}
                className="group relative p-6 rounded-[2rem] border-2 border-purple-500/40 bg-gradient-to-br from-purple-800/40 to-fuchsia-800/30 text-left hover:border-purple-400/60 hover:from-purple-700/50 hover:to-fuchsia-700/40 transition-all overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl group-hover:bg-fuchsia-500/20 transition-all" />
                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                    <Wand2 size={32} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-[1000] text-white uppercase italic tracking-tight">
                    {lang === 'el' ? 'ΦΤΙΑΞΕ ΑΠΟ ΦΑΝΤΑΣΙΑ' : 'CREATE FROM IMAGINATION'}
                  </h3>
                  <p className="text-white/50 text-sm font-bold">
                    {lang === 'el'
                      ? 'Περίγραψε τον ήρωα που ονειρεύεσαι και το AI θα τον ζωντανέψει!'
                      : 'Describe the hero you dream of and AI will bring it to life!'}
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-black uppercase tracking-wider">
                    <Stars size={14} /> {lang === 'el' ? '4 ΒΗΜΑΤΑ' : '4 STEPS'}
                  </div>
                </div>
              </motion.button>
            </div>

            <p className="text-white/30 text-xs font-bold">
              {lang === 'el' ? `⚡ ${costs.image} Credits για μαγεία! | Έχεις: ${credits}` : `⚡ ${costs.image} Credits for magic! | You have: ${credits}`}
            </p>
          </div>
        </motion.div>
      );
    }

    // STEP 6: AVATAR - UPLOAD PHOTO
    if (step === 6) {
      return (
        <motion.div
          key="avatar-upload"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          className="glass-panel p-8 md:p-12 rounded-[3rem] border-2 border-cyan-500/20 shadow-[0_0_60px_rgba(6,182,212,0.15)] relative backdrop-blur-2xl overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />

          <div className="relative z-10 space-y-8">
            {/* Back button */}
            <button onClick={() => { setStep(-1); setMode(null); }} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold">
              <ArrowLeft size={16} /> {lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}
            </button>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-lg">
                <Camera size={16} />
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  {lang === 'el' ? 'ΓΙΝΕ ΗΡΩΑΣ' : 'BECOME A HERO'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-[1000] text-white uppercase italic tracking-tighter">
                {lang === 'el' ? 'Ανέβασε τη Φωτογραφία σου!' : 'Upload Your Photo!'}
              </h2>
              <p className="text-white/50 text-sm font-bold max-w-md mx-auto">
                {lang === 'el'
                  ? 'Το AI θα μεταμορφώσει τη φωτογραφία σου σε ήρωα κινουμένων σχεδίων στυλ Pixar!'
                  : 'AI will transform your photo into a Pixar-style cartoon hero!'}
              </p>
            </div>

            {/* Upload Area */}
            <div className="flex flex-col items-center gap-6">
              {!uploadedPhoto ? (
                <label className="w-48 h-48 rounded-[2rem] border-2 border-dashed border-cyan-500/40 bg-cyan-500/5 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-cyan-500/10 hover:border-cyan-400/60 transition-all group">
                  <input
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <Upload size={40} className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-xs font-black text-cyan-400/60 uppercase tracking-wider group-hover:text-cyan-400">
                    {lang === 'el' ? 'ΠΑΤΑ ΕΔΩ' : 'TAP HERE'}
                  </span>
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={uploadedPhoto}
                    alt="Your photo"
                    className="w-48 h-48 rounded-[2rem] object-cover border-2 border-cyan-500/40 shadow-lg"
                  />
                  <button
                    onClick={() => setUploadedPhoto(null)}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-400 transition-colors"
                  >
                    <RefreshCcw size={14} />
                  </button>
                </div>
              )}

              {/* Name input */}
              <input
                type="text"
                value={avatarName}
                onChange={e => setAvatarName(e.target.value)}
                placeholder={lang === 'el' ? 'Πώς σε λένε, ήρωα;' : "What's your name, hero?"}
                className="w-full max-w-sm px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:border-cyan-500/50 text-white text-center text-lg font-[1000] italic placeholder:text-white/20 outline-none transition-all"
              />

              {/* Generate button */}
              <button
                onClick={handleGenerateAvatar}
                disabled={!uploadedPhoto || !avatarName}
                className={`w-full max-w-sm py-4 rounded-2xl font-[1000] text-lg uppercase italic tracking-wider flex items-center justify-center gap-3 transition-all ${
                  uploadedPhoto && avatarName
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white shadow-[0_8px_30px_rgba(6,182,212,0.4)] hover:brightness-110 hover:scale-105 active:scale-95'
                    : 'bg-white/5 text-white/20 cursor-not-allowed'
                }`}
              >
                <Sparkles size={22} />
                {lang === 'el' ? `ΜΕΤΑΜΟΡΦΩΣΕ ΜΕ! (-${costs.image}⚡)` : `TRANSFORM ME! (-${costs.image}⚡)`}
              </button>
            </div>
          </div>
        </motion.div>
      );
    }

    // STEP 7: AVATAR LOADING
    if (step === 7) {
      return (
        <motion.div
          key="avatar-loading"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          className="glass-panel p-12 rounded-[3rem] border-2 border-cyan-500/20 text-center space-y-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-cyan-500/10 flex items-center justify-center animate-pulse">
            <Sparkles size={48} className="text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <div>
            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter">
              {lang === 'el' ? 'Η ΜΑΓΕΙΑ ΞΕΚΙΝΑ...' : 'MAGIC BEGINS...'}
            </h2>
            <p className="text-cyan-400/60 text-sm font-bold mt-2 animate-pulse">
              {lang === 'el' ? 'Μεταμορφώνουμε τη φωτογραφία σου σε ήρωα...' : 'Transforming your photo into a hero...'}
            </p>
          </div>
          {uploadedPhoto && (
            <div className="flex items-center justify-center gap-4">
              <img src={uploadedPhoto} alt="" className="w-20 h-20 rounded-2xl object-cover border border-white/10 opacity-50" />
              <ArrowRight size={24} className="text-cyan-400 animate-pulse" />
              <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <span className="text-3xl">?</span>
              </div>
            </div>
          )}
        </motion.div>
      );
    }

    // STEP 8: AVATAR RESULT
    if (step === 8 && avatarResult) {
      return (
        <motion.div
          key="avatar-result"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-8 md:p-12 rounded-[3rem] border-2 border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.2)] text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
                <Crown size={16} />
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  {lang === 'el' ? 'ΜΕΤΑΜΟΡΦΩΣΗ ΟΛΟΚΛΗΡΩΘΗΚΕ' : 'TRANSFORMATION COMPLETE'}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter">
                {lang === 'el' ? 'ΑΥΤΟΣ ΕΙΣΑΙ ΕΣΥ!' : "THIS IS YOU!"}
              </h2>
            </div>

            {/* Before / After */}
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {uploadedPhoto && (
                <>
                  <div className="space-y-2">
                    <img src={uploadedPhoto} alt="Before" className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] object-cover border-2 border-white/10 opacity-60" />
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">{lang === 'el' ? 'ΠΡΙΝ' : 'BEFORE'}</p>
                  </div>
                  <ArrowRight size={28} className="text-cyan-400 shrink-0" />
                </>
              )}
              <div className="space-y-2">
                <img src={avatarResult} alt="Hero Avatar" className="w-36 h-36 md:w-48 md:h-48 rounded-[2rem] object-cover border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.3)]" />
                <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">{lang === 'el' ? 'ΗΡΩΑΣ!' : 'HERO!'}</p>
              </div>
            </div>

            <p className="text-2xl font-[1000] text-white italic">"{avatarName}"</p>

            {/* Action buttons - share card */}
            <div className="w-full space-y-3 max-w-sm mx-auto">
              <button onClick={async () => {
                if (!avatarResult) return;
                const cardUrl = await renderHeroCard({
                  name: avatarName,
                  image: avatarResult,
                  lang,
                  heroClass: 'avatar',
                });
                await shareHeroCard(cardUrl, avatarName, lang);
              }} className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white font-[1000] text-lg uppercase italic tracking-wider shadow-[0_8px_30px_rgba(6,182,212,0.4)] hover:brightness-110 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                <ImageIcon size={22} /> {lang === 'el' ? 'ΜΟΙΡΑΣΟΥ ΤΗΝ ΚΑΡΤΑ!' : 'SHARE HERO CARD!'}
              </button>
              <button onClick={async () => {
                if (!avatarResult) return;
                const cardUrl = await renderHeroCard({
                  name: avatarName,
                  image: avatarResult,
                  lang,
                  heroClass: 'avatar',
                });
                downloadDataUrl(cardUrl, `WiseBot_Hero_${avatarName.replace(/\s+/g, '_')}.png`);
              }} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-bold hover:bg-white/10 transition-all text-xs uppercase tracking-widest">
                <Download size={16} /> {lang === 'el' ? 'ΛΗΨΗ ΚΑΡΤΑΣ' : 'DOWNLOAD CARD'}
              </button>
            </div>

            <button onClick={reset} className="text-white/30 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 mx-auto">
              <RefreshCcw size={14} /> {lang === 'el' ? 'ΦΤΙΑΞΕ ΑΛΛΟΝ' : 'CREATE ANOTHER'}
            </button>
          </div>
        </motion.div>
      );
    }

    // STEPS 0-3: GUIDED INPUTS
    if (step >= 0 && step < 4) {
      return (
        <motion.div
          key="inputs"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="glass-panel p-8 md:p-12 rounded-[3rem] border-2 border-white/10 shadow-[0_0_60px_rgba(124,58,237,0.15)] relative backdrop-blur-2xl overflow-hidden"
        >
          {/* Floating Decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />

          {/* Back to mode selection at step 0 */}
          {step === 0 && (
            <button onClick={() => { setStep(-1); setMode(null); }} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold mb-4">
              <ArrowLeft size={16} /> {lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}
            </button>
          )}

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mb-8">
            {[0, 1, 2, 3].map(i => (
              <motion.div
                key={i}
                animate={{
                    scale: i === step ? 1.5 : 1,
                    backgroundColor: i <= step ? '#fff' : 'rgba(255,255,255,0.1)'
                }}
                className={`w-2 h-2 rounded-full transition-all duration-500 shadow-glow`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="mb-8 text-center md:text-left">
            <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 text-white mb-6 shadow-lg"
            >
              {step === 0 && <Ghost size={16} className="text-purple-300" />}
              {step === 1 && <Sparkles size={16} className="text-amber-300" />}
              {step === 2 && <HeartHandshake size={16} className="text-cyan-300" />}
              {step === 3 && <Fingerprint size={16} className="text-emerald-300" />}
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                {step === 0 ? t.step1.badge : step === 1 ? t.step2.badge : step === 2 ? t.step3.badge : t.step4.badge}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-[1000] text-white leading-[0.9] italic tracking-tighter drop-shadow-xl mb-4">
              {step === 0 ? t.step1.title : step === 1 ? t.step2.title : step === 2 ? t.step3.title : t.step4.title}
            </h2>

            <p className="text-lg md:text-xl text-blue-200/80 font-medium leading-relaxed max-w-2xl">
                {step === 0 ? t.step1.desc : step === 1 ? t.step2.desc : step === 2 ? t.step3.desc : t.step4.desc}
            </p>
          </div>

          <div className="relative group mb-8">
            <input
              type="text"
              autoFocus
              value={step === 0 ? hero.species : step === 1 ? hero.gear : step === 2 ? hero.contribution : hero.name}
              onChange={(e) => {
                const val = e.target.value;
                if (step === 0) setHero({ ...hero, species: val });
                if (step === 1) setHero({ ...hero, gear: val });
                if (step === 2) setHero({ ...hero, contribution: val });
                if (step === 3) setHero({ ...hero, name: val });
              }}
              placeholder={step === 0 ? t.step1.ph : step === 1 ? t.step2.ph : step === 2 ? t.step3.ph : t.step4.ph}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-6 text-2xl md:text-3xl text-white placeholder-white/20 focus:border-blue-400 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-bold italic tracking-wide shadow-inner"
              onKeyDown={(e) => e.key === 'Enter' && handleNext()}
            />
            <div className="absolute right-6 top-1/2 -translate-x-1/2 text-white/20 animate-pulse">
              <Wand2 size={24} />
            </div>
          </div>

          {/* Credits Check for final step */}
          {step === 3 && (
              <div className="flex items-center justify-center md:justify-end gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
                  Your Credits: <span className={credits >= costs.image ? 'text-emerald-400 text-lg' : 'text-red-400 text-lg'}>{credits}</span>
              </div>
          )}

          <div className="flex justify-between items-center pt-6 border-t border-white/5">
            <button
                onClick={handleBack}
                className={`text-white/40 hover:text-white font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-colors ${step === 0 ? 'opacity-0 pointer-events-none' : ''}`}
            >
                <ArrowLeft size={16} /> {t.btn.back}
            </button>

            <button
              onClick={handleNext}
              disabled={(step === 0 && !hero.species) || (step === 1 && !hero.gear) || (step === 2 && !hero.contribution) || (step === 3 && !hero.name) || (step === 3 && credits < costs.image)}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl font-[1000] text-lg text-white shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 disabled:shadow-none flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 italic uppercase tracking-wider flex items-center gap-2">
                {step === 3 ? <>{t.btn.create}</> : <>{t.btn.next} <ArrowRight size={20}/></>}
              </span>
            </button>
          </div>
        </motion.div>
      );
    }

    // STEP 4: MAGICAL LOADING CEREMONY
    if (step === 4) {
      return (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="text-center space-y-12 px-4 h-[60vh] flex flex-col items-center justify-center"
        >
          {/* Magic Vortex */}
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin blur-2xl opacity-50" />
            <div className="absolute inset-2 bg-[#020617] rounded-full flex items-center justify-center border-2 border-white/20 relative z-10 overflow-hidden">
               <div className="absolute inset-0 bg-[url('/images/stardust.png')] opacity-50 animate-pulse"></div>
               <Sparkles size={64} className="text-white animate-pulse" />
            </div>
            {/* Floating Particles (Simulated) */}
            <div className="absolute -top-4 -right-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce blur-sm" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce blur-sm" style={{ animationDelay: '0.5s' }} />
          </div>

          <motion.div
            key={loadingText}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-xl"
          >
            {loadingText === quoteData.text ? (
              <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                <Quote className="text-blue-400 mb-4 mx-auto opacity-80" size={32} />
                <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                  "{quoteData.text}"
                </p>
                <p className="text-blue-300 text-xs font-black uppercase tracking-[0.3em] mt-6">
                  {quoteData.author}
                </p>
              </div>
            ) : (
              <h3 className="text-3xl md:text-5xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 uppercase italic tracking-wider animate-pulse leading-tight">
                {loadingText}
              </h3>
            )}
          </motion.div>
        </motion.div>
      );
    }

    // STEP 5: THE GRAND REVEAL
    if (step === 5) {
      return (
        <motion.div
          key="result"
          initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="perspective-1000 w-full flex flex-col items-center"
        >
          {/* Confetti / Burst Effect (Simple CSS) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/50 px-6 py-2 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          >
             <Crown size={20} className="text-yellow-400" fill="currentColor" />
             <span className="text-yellow-200 font-black uppercase tracking-[0.2em] text-xs">{lang === 'el' ? 'ΘΡΥΛΙΚΗ ΔΗΜΙΟΥΡΓΙΑ ΞΕΚΛΕΙΔΩΘΗΚΕ' : 'LEGENDARY CREATION UNLOCKED'}</span>
          </motion.div>

          {/* HERO CARD */}
          <div className="relative w-full max-w-sm mx-auto bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border-[6px] border-white/10 shadow-[0_0_100px_rgba(168,85,247,0.5)] group hover:scale-[1.02] transition-transform duration-500 z-10">

            {/* Shiny overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20 pointer-events-none" />

            {/* Image Area */}
            <div className="h-96 relative overflow-hidden">
              <img src={resultImage} className="w-full h-full object-cover" alt="Hero" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

              {/* Stats Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                 <div className="bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-lg border border-white/10 uppercase tracking-widest">
                    GEN 1
                 </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 relative z-10 bg-gradient-to-b from-transparent to-black/80 backdrop-blur-sm -mt-32 pt-20">
              <div className="mb-2 flex items-center gap-2">
                <Stars size={14} className="text-purple-400" />
                <span className="text-purple-400 text-xs font-black uppercase tracking-[0.3em]">{hero.species}</span>
              </div>
              <h2 className="text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-none mb-6 drop-shadow-lg">
                {hero.name}
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 p-3 rounded-2xl border border-white/5 backdrop-blur-md">
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">{t.step2.badge}</div>
                  <div className="text-white font-bold text-xs leading-tight line-clamp-2">{hero.gear}</div>
                </div>
                <div className="bg-white/10 p-3 rounded-2xl border border-white/5 backdrop-blur-md">
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">{t.step3.badge}</div>
                  <div className="text-white font-bold text-xs leading-tight line-clamp-2">{hero.contribution}</div>
                </div>
              </div>
            </div>
          </div>

          {/* SHARE CARD - Primary CTA */}
          <div className="mt-8 w-full max-w-md relative z-20 space-y-3">
              <button
                onClick={handleShare}
                disabled={cardLoading}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 text-white font-[1000] text-lg uppercase italic tracking-wider shadow-[0_8px_30px_rgba(168,85,247,0.4)] hover:brightness-110 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {cardLoading ? (
                  <><Sparkles size={22} className="animate-spin" /> {lang === 'el' ? 'ΦΤΙΑΧΝΩ ΚΑΡΤΑ...' : 'MAKING CARD...'}</>
                ) : (
                  <><ImageIcon size={22} /> {lang === 'el' ? 'ΜΟΙΡΑΣΟΥ ΤΗΝ ΚΑΡΤΑ!' : 'SHARE HERO CARD!'}</>
                )}
              </button>
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  disabled={cardLoading}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 font-bold uppercase text-xs tracking-widest transition-all disabled:opacity-50"
                >
                  <Download size={16} /> {lang === 'el' ? 'ΛΗΨΗ ΚΑΡΤΑΣ' : 'DOWNLOAD CARD'}
                </button>
                <button
                  onClick={() => {
                    if (!resultImage) return;
                    const link = document.createElement('a');
                    link.href = resultImage;
                    link.download = `WiseBot_${hero.name.replace(/\s+/g, '_')}_raw.png`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white/60 rounded-xl border border-white/10 font-bold uppercase text-xs tracking-widest transition-all"
                >
                  <Download size={16} /> {lang === 'el' ? 'ΜΟΝΟ ΕΙΚΟΝΑ' : 'IMAGE ONLY'}
                </button>
              </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md relative z-20">
            <button
              onClick={() => navigate('/wise-friends')}
              className="w-full py-5 rounded-2xl bg-white text-black font-[1000] text-sm uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
               <Users size={20} /> {lang === 'el' ? 'ΠΗΓΑΙΝΕ ΣΤΗΝ ΟΜΑΔΑ' : 'GO TO TEAM'}
            </button>

            <button
              onClick={reset}
              className="w-full py-5 rounded-2xl bg-white/10 text-white border border-white/20 font-[1000] text-sm uppercase tracking-widest hover:bg-white/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 backdrop-blur-md"
            >
               <RefreshCcw size={20} /> {lang === 'el' ? 'ΦΤΙΑΞΕ ΑΛΛΟΝ' : 'CREATE ANOTHER'}
            </button>
          </div>

        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden font-['Nunito']">

      {/* 🌌 MAGICAL BACKGROUND (Moving Nebula) */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute inset-0 bg-[url('/images/stardust.png')] opacity-30 animate-pulse" />
        <div className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent blur-[120px] animate-rotate-3d" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {renderStepContent()}
        </AnimatePresence>
      </div>
    </div>
  );
}
