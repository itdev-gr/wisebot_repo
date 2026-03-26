
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  X, 
  Shield, 
  Brain, 
  Wand2, 
  Zap, 
  Plus, 
  Box, 
  Activity,
  Flame,
  ShoppingBag,
  Bot,
  Quote,
  Clapperboard,
  Lock,
  Book,
  CheckCircle2,
  Lightbulb,
  HeartHandshake
} from 'lucide-react';
import { HEROES } from '../constants';

const motion = m as any;

// --- RICH DATA STRUCTURE BASED ON USER INPUT ---
const HERO_DATA: Record<string, any> = {
  wisebot: {
    roleTitle: { el: 'Mindset & Ψυχολογία', en: 'Mindset & Psychology' },
    tagline: { 
      el: 'Η ήρεμη φωνή μέσα στο χάος. Η σοφία πριν την απόφαση.', 
      en: 'The calm voice in chaos. Wisdom before decision.' 
    },
    bio: {
      el: 'Η Wisebot είναι ο νους της ομάδας. Παρατηρεί, ακούει, καταλαβαίνει. Δεν πιέζει, δεν φωνάζει, δεν τρομάζει. Σε μαθαίνει να σκέφτεσαι καθαρά όταν όλα μέσα σου τρέχουν.',
      en: 'Wisebot is the mind of the team. She observes, listens, understands. She doesn\'t push, shout, or scare. She teaches you to think clearly when everything inside is racing.'
    },
    traits: {
      el: ['Ηρεμία', 'Αυτογνωσία', 'Συναισθηματική νοημοσύνη', 'Λογική σκέψη'],
      en: ['Calmness', 'Self-awareness', 'Emotional Intelligence', 'Logical Thinking']
    },
    teamRole: {
      el: 'Όταν τα συναισθήματα ανεβαίνουν και οι αποφάσεις θολώνουν, η Wisebot επαναφέρει την ισορροπία. Κρατά το μυαλό καθαρό για να μπορούν όλοι οι άλλοι να λειτουργήσουν σωστά.',
      en: 'When emotions rise and decisions blur, Wisebot restores balance. She keeps the mind clear so everyone else can function correctly.'
    },
    lessons: {
      el: ['Να αναγνωρίζεις τον φόβο χωρίς να τον υπακούς', 'Να σκέφτεσαι πριν αντιδράσεις', 'Να εμπιστεύεσαι τη λογική σου'],
      en: ['Recognize fear without obeying it', 'Think before reacting', 'Trust your logic']
    },
    quote: {
      el: '«Ο φόβος είναι απλώς μια σκέψη. Δεν είναι εντολή.»',
      en: '«Fear is just a thought. It is not a command.»'
    },
    theme: 'purple',
    icon: Brain
  },
  crocus: {
    roleTitle: { el: 'Δράση & Αντοχή', en: 'Action & Endurance' },
    tagline: { 
      el: 'Λιγότερα λόγια. Περισσότερη κίνηση.', 
      en: 'Less talk. More movement.' 
    },
    bio: {
      el: 'Ο Crocus είναι η δύναμη της πράξης. Δεν περιμένει την τέλεια στιγμή — τη δημιουργεί. Λερώνει τα χέρια του, αντέχει, συνεχίζει.',
      en: 'Crocus is the power of action. He doesn\'t wait for the perfect moment — he creates it. He gets his hands dirty, endures, and keeps going.'
    },
    traits: {
      el: ['Θάρρος', 'Πειθαρχία', 'Αντοχή', 'Επιμονή'],
      en: ['Courage', 'Discipline', 'Endurance', 'Persistence']
    },
    teamRole: {
      el: 'Όταν η σκέψη γίνεται υπερβολική και η αναβολή κυριαρχεί, ο Crocus σπρώχνει μπροστά. Μετατρέπει τις αποφάσεις σε πράξη.',
      en: 'When overthinking takes over and procrastination rules, Crocus pushes forward. He turns decisions into action.'
    },
    lessons: {
      el: ['Να ξεκινάς χωρίς να είσαι έτοιμος', 'Να χτίζεις αυτοπεποίθηση μέσα από την πράξη', 'Να μη φοβάσαι τη δουλειά'],
      en: ['Start without being ready', 'Build confidence through action', 'Don\'t fear the work']
    },
    quote: {
      el: '«Σταμάτα να σκέφτεσαι και ξεκίνα. Η όρεξη έρχεται δουλεύοντας.»',
      en: '«Stop thinking and start. Appetite comes with working.»'
    },
    theme: 'emerald',
    icon: Shield
  },
  pencilo: {
    roleTitle: { el: 'Φαντασία & Αυθεντικότητα', en: 'Imagination & Authenticity' },
    tagline: { 
      el: 'Η ιδέα που γίνεται σχέδιο.', 
      en: 'The idea that becomes a plan.' 
    },
    bio: {
      el: 'Ο Pencilo είναι η δημιουργική καρδιά της ομάδας. Βλέπει αυτό που δεν υπάρχει ακόμα και το σχεδιάζει σαν να ήταν ήδη πραγματικό.',
      en: 'Pencilo is the creative heart of the team. He sees what doesn\'t exist yet and designs it as if it were already real.'
    },
    traits: {
      el: ['Δημιουργικότητα', 'Πρωτοτυπία', 'Φαντασία', 'Σχεδιαστική σκέψη'],
      en: ['Creativity', 'Originality', 'Imagination', 'Design Thinking']
    },
    teamRole: {
      el: 'Παίρνει την ιδέα και της δίνει μορφή. Φτιάχνει τον χάρτη πριν ξεκινήσει το ταξίδι.',
      en: 'He takes the idea and gives it form. He creates the map before the journey begins.'
    },
    lessons: {
      el: ['Να σκέφτεσαι διαφορετικά', 'Να μην αντιγράφεις', 'Να βάζεις τη δική σου σφραγίδα σε ό,τι φτιάχνεις'],
      en: ['Think differently', 'Don\'t copy', 'Put your own stamp on whatever you make']
    },
    quote: {
      el: '«Μην φτιάξεις αυτό που θέλουν. Φτιάξε αυτό που είσαι.»',
      en: '«Don\'t make what they want. Make what you are.»'
    },
    theme: 'yellow',
    icon: Wand2
  },
  link: {
    roleTitle: { el: 'Συστήματα & Λογική', en: 'Systems & Logic' },
    tagline: { 
      el: 'Η μηχανικός που ενώνει τα πάντα.', 
      en: 'The engineer who connects everything.' 
    },
    bio: {
      el: 'Η Link είναι το πρακτικό μυαλό της ομάδας. Δεν την εντυπωσιάζουν τα ωραία λόγια, μόνο το αν κάτι δουλεύει στην πραγματικότητα.',
      en: 'Link is the practical mind of the team. Pretty words don\'t impress her, only if something works in reality.'
    },
    traits: {
      el: ['Λογική', 'Τεχνολογική σκέψη', 'Οργάνωση', 'Επίλυση προβλημάτων'],
      en: ['Logic', 'Tech Thinking', 'Organization', 'Problem Solving']
    },
    teamRole: {
      el: 'Ενώνει τα κομμάτια, διορθώνει αστοχίες και μετατρέπει το σχέδιο σε σύστημα που λειτουργεί.',
      en: 'She connects the pieces, fixes failures, and turns the plan into a working system.'
    },
    lessons: {
      el: ['Να σκέφτεσαι με δομή', 'Να ελέγχεις αν κάτι δουλεύει πραγματικά', 'Να λύνεις προβλήματα χωρίς δράμα'],
      en: ['Think structurally', 'Check if something really works', 'Solve problems without drama']
    },
    quote: {
      el: '«Δείξε μου τον κώδικα, όχι τα λόγια. Το σύστημα δεν λέει ψέματα.»',
      en: '«Show me the code, not the words. The system doesn\'t lie.»'
    },
    theme: 'blue',
    icon: Zap
  },
  sparken: {
    roleTitle: { el: 'Όραμα & Στρατηγική', en: 'Vision & Strategy' },
    tagline: { 
      el: 'Βλέπει μακριά για να μη χαθείς κοντά.', 
      en: 'Sees far so you don\'t get lost near.' 
    },
    bio: {
      el: 'Ο Sparken κοιτά από ψηλά. Ξέρει πού πάει η ομάδα και τι αξίζει να αφήσει πίσω. Δεν λέει «ναι» σε όλα — λέει «ναι» στα σημαντικά.',
      en: 'Sparken looks from above. He knows where the team is going and what is worth leaving behind. He doesn\'t say "yes" to everything — only to what matters.'
    },
    traits: {
      el: ['Στρατηγική σκέψη', 'Όραμα', 'Ιεράρχηση', 'Ηγεσία'],
      en: ['Strategic Thinking', 'Vision', 'Prioritization', 'Leadership']
    },
    teamRole: {
      el: 'Δίνει κατεύθυνση και νόημα. Κρατά την ενέργεια για τα μεγάλα και προστατεύει το όνειρο.',
      en: 'Gives direction and meaning. Saves energy for big things and protects the dream.'
    },
    lessons: {
      el: ['Να βλέπεις τη μεγάλη εικόνα', 'Να επιλέγεις σωστά', 'Να χτίζεις κάτι που αντέχει στον χρόνο'],
      en: ['See the big picture', 'Choose correctly', 'Build something that lasts in time']
    },
    quote: {
      el: '«Αν λες “ναι” σε όλα, λες “όχι” στο όνειρό σου.»',
      en: '«If you say "yes" to everything, you say "no" to your dream.»'
    },
    theme: 'red',
    icon: Flame
  }
};

// Helper to handle localized strings vs simple strings (for user heroes)
const getLoc = (val: any, lang: 'el' | 'en') => {
  if (typeof val === 'object' && val !== null && (val.el || val.en)) {
    return val[lang];
  }
  return val;
}

// MAPPING: Which book unlocks which hero
const HERO_UNLOCK_REQUIREMENTS: Record<string, number> = {
  wisebot: 1,
  crocus: 4, 
  pencilo: 2, 
  link: 3, 
  sparken: 5 
};

// Theme Colors Helper
const getThemeColors = (theme: string) => {
  switch (theme) {
    case 'purple': return { bg: 'bg-purple-600', text: 'text-purple-400', border: 'border-purple-500/30', gradient: 'from-purple-900 to-indigo-900', badge: 'bg-purple-500/20' };
    case 'emerald': return { bg: 'bg-emerald-600', text: 'text-emerald-400', border: 'border-emerald-500/30', gradient: 'from-emerald-900 to-teal-900', badge: 'bg-emerald-500/20' };
    case 'yellow': return { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500/30', gradient: 'from-yellow-900 to-orange-900', badge: 'bg-yellow-500/20' };
    case 'blue': return { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500/30', gradient: 'from-blue-900 to-cyan-900', badge: 'bg-blue-500/20' };
    case 'red': return { bg: 'bg-red-600', text: 'text-red-400', border: 'border-red-500/30', gradient: 'from-red-900 to-orange-900', badge: 'bg-red-500/20' };
    default: return { bg: 'bg-fuchsia-600', text: 'text-fuchsia-400', border: 'border-fuchsia-500/30', gradient: 'from-fuchsia-900 to-purple-900', badge: 'bg-fuchsia-500/20' };
  }
};

interface WiseFriendsProps {
  lang: 'el' | 'en';
  myHeroes: any[];
  updateHero: (hero: any) => void;
  completedIds: string[];
}

const WiseFriends: React.FC<WiseFriendsProps> = ({ lang, myHeroes, updateHero, completedIds }) => {
  const navigate = useNavigate();
  const [selectedHero, setSelectedHero] = useState<any | null>(null);

  // Helper to check if a specific hero is unlocked (UNLOCKED FOR TESTING)
  const isHeroUnlocked = (heroId: string) => {
    return true; 
  };

  // Combine default heroes with user created heroes
  const allHeroes = [
    ...HEROES.map(h => ({ ...h, type: 'default' })),
    ...myHeroes.map(h => ({ ...h, avatar: h.image, role: { el: 'Δημιουργός', en: 'Creator' }, type: 'user' }))
  ];

  const handleHeroClick = (hero: any) => {
    if (isHeroUnlocked(hero.id)) {
      setSelectedHero(hero);
    }
  };

  const handle3DOrder = (hero: any) => {
    const heroName = getLoc(hero.name, lang);
    const heroRole = getLoc(hero.role, lang);
    const subject = encodeURIComponent(lang === 'el' ? `Παραγγελία 3D Εκτύπωσης: ${heroName}` : `3D Print Order: ${heroName}`);
    const body = encodeURIComponent(
      lang === 'el' 
      ? `Γεια σας WiseBot Team,\n\nΘα ήθελα να παραγγείλω μια 3D φιγούρα για τον ήρωα: ${heroName} (${heroRole}).\n\nΠαρακαλώ ενημερώστε με για τα βήματα.`
      : `Hello WiseBot Team,\n\nI would like to order a 3D figure for the hero: ${heroName} (${heroRole}).\n\nPlease inform me about the next steps.`
    );
    window.location.href = `mailto:orders@wisebot.app?subject=${subject}&body=${body}`;
  };

  // Get Data for Selected Hero (Fallback to generic user data if not preset)
  const getSelectedHeroData = (heroId: string) => {
    if (HERO_DATA[heroId]) return HERO_DATA[heroId];
    return {
      roleTitle: { el: 'Ο Ήρωάς Σου', en: 'Your Hero' },
      tagline: { el: 'Μοναδικό δημιούργημα της φαντασίας σου.', en: 'A unique creation of your imagination.' },
      bio: { el: 'Αυτόν τον ήρωα τον δημιούργησες εσύ! Έχει τις δικές του μοναδικές δυνάμεις.', en: 'You created this hero! They have their own unique powers.' },
      traits: { el: ['Δημιουργικότητα', 'Πρωτοτυπία', 'Έμπνευση', 'Δράση'], en: ['Creativity', 'Originality', 'Inspiration', 'Action'] },
      teamRole: { el: 'Προσθέτει τη δική σου προσωπική πινελιά στην ομάδα.', en: 'Adds your personal touch to the team.' },
      lessons: { el: ['Η φαντασία δεν έχει όρια', 'Μπορείς να φτιάξεις τα πάντα', 'Πίστεψε στο έργο σου'], en: ['Imagination has no limits', 'You can build anything', 'Believe in your work'] },
      quote: { el: '«Είμαι ό,τι ονειρεύτηκες.»', en: '«I am whatever you dreamed.»' },
      theme: 'fuchsia',
      icon: Users
    };
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 space-y-12 pb-32">
      
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
         <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Users size={32} className="text-white" />
         </div>
         <div>
            <h2 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
              WISEBOT & <span className="text-transparent bg-clip-text magic-gradient">FRIENDS</span>
            </h2>
            <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mt-1">
               {lang === 'el' ? 'ΤΟ ΑΡΧΗΓΕΙΟ ΤΩΝ ΗΡΩΩΝ' : 'THE HEROES HEADQUARTERS'}
            </p>
         </div>
      </div>

      {/* GUARDIANS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {allHeroes.map((hero) => {
            const unlocked = isHeroUnlocked(hero.id);
            const reqBook = HERO_UNLOCK_REQUIREMENTS[hero.id];
            const data = HERO_DATA[hero.id] || getSelectedHeroData('user'); // Fallback for color/icons on grid
            const colors = getThemeColors(data.theme);

            return (
              <motion.div 
                 key={hero.id}
                 whileHover={unlocked ? { y: -10, scale: 1.02 } : {}}
                 onClick={() => handleHeroClick(hero)}
                 className={`relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 bg-black/40 shadow-2xl transition-all ${unlocked ? 'border-white/10 cursor-pointer group hover:border-white/30' : 'border-white/5 opacity-80 cursor-not-allowed'}`}
              >
                 <img 
                    src={hero.avatar} 
                    alt={hero.name} 
                    className={`w-full h-full object-cover transition-all duration-700 ${unlocked ? 'opacity-80 group-hover:opacity-100 group-hover:scale-110' : 'opacity-20 blur-sm grayscale'}`} 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                 {!unlocked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center">
                        <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center mb-4 border border-white/10 backdrop-blur-md">
                            <Lock size={32} className="text-white/50" />
                        </div>
                        <h4 className="text-white font-[1000] uppercase italic tracking-tighter text-xl mb-2">
                            {lang === 'el' ? 'ΚΛΕΙΔΩΜΕΝΟΣ' : 'LOCKED'}
                        </h4>
                        <div className="inline-flex items-center gap-2 bg-blue-900/40 px-3 py-1.5 rounded-lg border border-blue-500/30">
                            <Book size={12} className="text-blue-400" />
                            <span className="text-[10px] font-black text-blue-200 uppercase tracking-widest">
                                {lang === 'el' ? `ΔΙΑΒΑΣΕ ΒΙΒΛΙΟ ${reqBook}` : `READ BOOK ${reqBook}`}
                            </span>
                        </div>
                    </div>
                 )}

                 {/* Top Right Pulse */}
                 {unlocked && (
                   <div className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:bg-white/10">
                      <Activity size={18} className={`${colors.text} opacity-80`} />
                   </div>
                 )}

                 {/* Bottom Content */}
                 <div className={`absolute bottom-0 inset-x-0 p-6 flex flex-col items-center text-center ${!unlocked ? 'opacity-30' : ''}`}>
                    <h3 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter leading-none mb-1 drop-shadow-xl">{hero.name}</h3>
                    <p className={`text-[10px] font-black ${colors.text} uppercase tracking-[0.2em] mb-4`}>{getLoc(data.roleTitle, lang)}</p>
                 </div>
              </motion.div>
            );
         })}

         {/* ADD YOUR HERO CARD */}
         <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => navigate('/factory')}
            className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center gap-6 cursor-pointer group hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
         >
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.2)]">
               <Plus size={32} className="text-white/30 group-hover:text-blue-400" />
            </div>
            <div className="text-center">
               <h3 className="text-2xl font-black text-white/40 uppercase italic tracking-tighter group-hover:text-blue-400 transition-colors">{lang === 'el' ? 'ΝΕΟΣ ΗΡΩΑΣ' : 'ADD HERO'}</h3>
               <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-2">{lang === 'el' ? 'ΜΠΕΣ ΣΤΗΝ ΟΜΑΔΑ' : 'JOIN THE TEAM'}</p>
            </div>
         </motion.div>
      </div>

      {/* NEW HEROES TEXT SECTION */}
      <div className="text-center pt-8 border-t border-white/5">
         <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs">
            {lang === 'el' ? 'ΠΡΟΣΘΕΣΕ ΚΙ ΑΛΛΟΥΣ ΗΡΩΕΣ' : 'ADD MORE HEROES TO THE TEAM'}
         </p>
         <button 
            onClick={() => navigate('/factory')}
            className="mt-4 text-blue-400 hover:text-blue-300 font-black italic underline uppercase tracking-widest text-sm transition-colors"
         >
            {lang === 'el' ? 'ΠΑΤΑ ΕΔΩ ΓΙΑ ΤΟ ΕΡΓΑΣΤΗΡΙΟ' : 'CLICK HERE FOR THE FACTORY'}
         </button>
      </div>

      {/* --- DETAILED HERO MODAL (REDESIGNED) --- */}
      <AnimatePresence>
        {selectedHero && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 xl:pl-80 bg-black/95 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedHero(null)}
          >
             <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row bg-[#0f1014] border border-white/10"
             >
                {(() => {
                   const data = getSelectedHeroData(selectedHero.id);
                   const colors = getThemeColors(data.theme);
                   const Icon = data.icon;

                   return (
                     <>
                        {/* LEFT: VISUALS */}
                        <div className="w-full md:w-5/12 h-80 md:h-auto relative overflow-hidden">
                           <img src={selectedHero.avatar} className="w-full h-full object-cover" alt={selectedHero.name} />
                           <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${colors.gradient} opacity-60 mix-blend-multiply`}></div>
                           <div className="absolute inset-0 bg-gradient-to-t from-[#0f1014] via-transparent to-transparent"></div>
                           
                           <button 
                              onClick={() => setSelectedHero(null)} 
                              className="absolute top-6 left-6 md:hidden bg-black/50 p-2 rounded-full text-white z-20 border border-white/10"
                           >
                              <X size={20}/>
                           </button>

                           {/* Quote Overlay */}
                           <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
                              <Quote size={24} className={`${colors.text} mb-3 opacity-80`} />
                              <p className="text-white font-[1000] text-xl italic leading-tight drop-shadow-lg">
                                {getLoc(data.quote, lang)}
                              </p>
                           </div>
                        </div>

                        {/* RIGHT: DATA DOSSIER */}
                        <div className="w-full md:w-7/12 p-8 md:p-12 space-y-8 relative overflow-y-auto max-h-[85vh] custom-scrollbar bg-[#0f1014]">
                           
                           {/* Close Button Desktop */}
                           <button 
                              onClick={() => setSelectedHero(null)} 
                              className="hidden md:block absolute top-8 right-8 bg-white/5 hover:bg-white/10 p-3 rounded-full text-white z-20 border border-white/10 transition-all"
                           >
                              <X size={24}/>
                           </button>

                           {/* Header Info */}
                           <div>
                              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${colors.border} ${colors.badge} mb-4`}>
                                 <Icon size={14} className={colors.text} />
                                 <span className={`text-[10px] font-black uppercase tracking-widest ${colors.text}`}>
                                    {getLoc(data.roleTitle, lang)}
                                 </span>
                              </div>
                              <h2 className="text-5xl md:text-6xl font-[1000] text-white uppercase italic tracking-tighter leading-none mb-3">
                                {selectedHero.name}
                              </h2>
                              <p className="text-white/60 font-bold text-sm md:text-base leading-relaxed border-l-2 border-white/10 pl-4">
                                {getLoc(data.bio, lang)}
                              </p>
                           </div>

                           {/* 1. CHARACTERISTICS */}
                           <div className="space-y-4">
                              <h4 className="text-white/40 font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                                <Activity size={14} /> {lang === 'el' ? 'ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ' : 'CHARACTERISTICS'}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                 {getLoc(data.traits, lang).map((trait: string, idx: number) => (
                                    <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wide">
                                       {trait}
                                    </span>
                                 ))}
                              </div>
                           </div>

                           {/* 2. TEAM ROLE */}
                           <div className={`p-6 rounded-2xl border ${colors.border} bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group`}>
                              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                                 <Users size={64} />
                              </div>
                              <h4 className={`font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2 ${colors.text}`}>
                                <HeartHandshake size={14} /> {lang === 'el' ? 'ΠΩΣ ΒΟΗΘΑ ΤΗΝ ΟΜΑΔΑ' : 'TEAM ROLE'}
                              </h4>
                              <p className="text-white/80 font-medium text-sm leading-relaxed relative z-10">
                                {getLoc(data.teamRole, lang)}
                              </p>
                           </div>

                           {/* 3. LESSONS */}
                           <div className="space-y-4">
                              <h4 className="text-white/40 font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                                <Lightbulb size={14} /> {lang === 'el' ? 'ΤΙ ΜΑΘΑΙΝΕΙΣ ΜΑΖΙ ΤΟΥ' : 'WHAT YOU LEARN'}
                              </h4>
                              <div className="space-y-2">
                                 {getLoc(data.lessons, lang).map((lesson: string, idx: number) => (
                                    <div key={idx} className="flex items-start gap-3">
                                       <CheckCircle2 size={16} className={`${colors.text} mt-0.5 shrink-0`} />
                                       <span className="text-white/70 text-sm font-bold">{lesson}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>

                           {/* ACTIONS FOOTER */}
                           <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <button 
                                 onClick={() => handle3DOrder(selectedHero)}
                                 className="py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
                              >
                                 <Box size={16} /> {lang === 'el' ? '3D ΕΚΤΥΠΩΣΗ' : '3D PRINT'}
                              </button>
                              <button 
                                 onClick={() => navigate('/cinema', { state: { animateHero: selectedHero } })}
                                 className={`py-4 ${colors.bg} hover:brightness-110 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg flex items-center justify-center gap-2`}
                              >
                                 <Clapperboard size={16} /> {lang === 'el' ? 'ΖΩΝΤΑΝΕΨΕ ΤΟ' : 'BRING TO LIFE'}
                              </button>
                           </div>

                        </div>
                     </>
                   );
                })()}
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default WiseFriends;
