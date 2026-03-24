
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

// Community characters — made by kids (or look like it!)
const COMMUNITY_CHARACTERS = [
  { id: 'bunny', name: 'Bunny', creator: 'Μαρία, 8', src: '/images/bunny.png' },
  { id: 'pilot', name: 'Pilot', creator: 'Γιάννης, 11', src: '/images/pilot.png' },
  { id: 'drake', name: 'Drake', creator: 'Νίκος, 10', src: '/images/drake.png' },
  { id: 'dolphi', name: 'Dolphi', creator: 'Ελένη, 9', src: '/images/dolphi.png' },
  { id: 'panda', name: 'Panda', creator: 'Αλέξης, 7', src: '/images/panda.png' },
  { id: 'fly', name: 'Fly', creator: 'Σοφία, 12', src: '/images/fly.png' },
  { id: 'golde', name: 'Golde', creator: 'Δημήτρης, 10', src: '/images/golde.png' },
  { id: 'sharki', name: 'Sharki', creator: 'Κατερίνα, 11', src: '/images/sharki.png' },
  { id: 'donkey', name: 'Donkey', creator: 'Παναγιώτης, 8', src: '/images/donkey.png' },
  { id: 'ratti', name: 'Ratti', creator: 'Χριστίνα, 9', src: '/images/ratti.png' },
  { id: 'montzi', name: 'Montzi', creator: 'Στέφανος, 12', src: '/images/montzi.png' },
  { id: 'octapus', name: 'Octapus', creator: 'Αναστασία, 10', src: '/images/octapus.png' },
  { id: 'tauru', name: 'Tauru', creator: 'Μιχάλης, 11', src: '/images/tauru.png' },
  { id: 'piguin', name: 'Piguin', creator: 'Ειρήνη, 7', src: '/images/piguin.png' },
  { id: 'skoti', name: 'Skoti', creator: 'Βασίλης, 13', src: '/images/skoti.png' },
  { id: 'hamel', name: 'Hamel', creator: 'Ελευθερία, 9', src: '/images/hamel.png' },
  { id: 'buty', name: 'Buty', creator: 'Γεωργία, 8', src: '/images/buty.png' },
  { id: 'kukku', name: 'Ku Ku', creator: 'Θανάσης, 10', src: '/images/ku ku.png' },
];

const WiseFriends: React.FC<WiseFriendsProps> = ({ lang, myHeroes, updateHero, completedIds }) => {
  const navigate = useNavigate();
  const [selectedHero, setSelectedHero] = useState<any | null>(null);
  const [selectedCommunityHero, setSelectedCommunityHero] = useState<typeof COMMUNITY_CHARACTERS[0] | null>(null);

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

  // 3D print order removed — feature not yet available

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
                    className={`w-full h-full object-cover object-top transition-all duration-700 ${unlocked ? 'opacity-80 group-hover:opacity-100 group-hover:scale-110' : 'opacity-20 blur-sm grayscale'}`}
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

      {/* COMMUNITY GALLERY - Characters "made by other kids" */}
      <div className="pt-12 space-y-6">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
               <Users size={24} className="text-white" />
            </div>
            <div>
               <h3 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                  {lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΕΣ ΠΑΙΔΙΩΝ' : 'KIDS CREATIONS'}
               </h3>
               <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] mt-1">
                  {lang === 'el' ? 'ΔΕΣΕ ΤΙ ΕΦΤΙΑΞΑΝ ΑΛΛΑ ΠΑΙΔΙΑ' : 'SEE WHAT OTHER KIDS MADE'}
               </p>
            </div>
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {COMMUNITY_CHARACTERS.map((char) => (
               <motion.div
                  key={char.id}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCommunityHero(char)}
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 bg-black/40 cursor-pointer group hover:border-amber-400/40 transition-all shadow-lg"
               >
                  <img
                     src={char.src}
                     alt={char.name}
                     className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                     loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-2 text-center">
                     <p className="text-white font-[1000] text-sm uppercase italic tracking-tight leading-none drop-shadow-lg">
                        {char.name}
                     </p>
                     <p className="text-amber-300/70 text-[9px] font-bold mt-0.5">
                        {char.creator}
                     </p>
                  </div>
               </motion.div>
            ))}
         </div>

         <div className="text-center">
            <p className="text-white/30 text-xs font-bold italic">
               {lang === 'el'
                  ? '🌟 Φτιάξε κι εσύ τον δικό σου ήρωα και μπες στη γκαλερί!'
                  : '🌟 Create your own hero and join the gallery!'}
            </p>
            <button
               onClick={() => navigate('/factory')}
               className="mt-3 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-[1000] text-xs uppercase tracking-widest hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/20"
            >
               {lang === 'el' ? 'ΦΤΙΑΞΕ ΤΟΝ ΔΙΚΟ ΣΟΥ!' : 'CREATE YOUR OWN!'}
            </button>
         </div>
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
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row bg-[#0B0F1A] border border-white/10 max-h-[95vh] overflow-y-auto"
             >
                {(() => {
                   const data = getSelectedHeroData(selectedHero.id);
                   const colors = getThemeColors(data.theme);
                   const Icon = data.icon;

                   return (
                     <>
                        {/* LEFT: VISUALS */}
                        <div className="w-full md:w-5/12 h-56 sm:h-72 md:h-auto relative overflow-hidden shrink-0">
                           <img src={selectedHero.avatar} className="w-full h-full object-cover" alt={selectedHero.name} />
                           <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${colors.gradient} opacity-60 mix-blend-multiply`}></div>
                           <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent"></div>

                           <button
                              onClick={() => setSelectedHero(null)}
                              className="absolute top-4 left-4 md:hidden bg-black/60 p-2 rounded-full text-white z-20 border border-white/10 backdrop-blur-sm"
                           >
                              <X size={18}/>
                           </button>

                           {/* Hero name overlay on mobile */}
                           <div className="absolute bottom-0 inset-x-0 p-4 md:p-8 text-center md:text-left">
                              <h2 className="text-3xl sm:text-4xl md:hidden font-[1000] text-white uppercase italic tracking-tighter leading-none drop-shadow-xl mb-1">
                                {selectedHero.name}
                              </h2>
                              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${colors.badge} border ${colors.border} md:hidden`}>
                                 <Icon size={12} className={colors.text} />
                                 <span className={`text-[9px] font-black uppercase tracking-widest ${colors.text}`}>
                                    {getLoc(data.roleTitle, lang)}
                                 </span>
                              </div>
                           </div>
                        </div>

                        {/* RIGHT: DATA DOSSIER */}
                        <div className="w-full md:w-7/12 p-5 sm:p-6 md:p-10 space-y-5 md:space-y-8 relative bg-[#0B0F1A]">

                           {/* Close Button Desktop */}
                           <button
                              onClick={() => setSelectedHero(null)}
                              className="hidden md:block absolute top-6 right-6 bg-white/5 hover:bg-white/10 p-2.5 rounded-full text-white z-20 border border-white/10 transition-all"
                           >
                              <X size={20}/>
                           </button>

                           {/* Header Info - desktop only (mobile shows on image) */}
                           <div>
                              <div className={`hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${colors.border} ${colors.badge} mb-3`}>
                                 <Icon size={14} className={colors.text} />
                                 <span className={`text-[10px] font-black uppercase tracking-widest ${colors.text}`}>
                                    {getLoc(data.roleTitle, lang)}
                                 </span>
                              </div>
                              <h2 className="hidden md:block text-4xl lg:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-none mb-3">
                                {selectedHero.name}
                              </h2>
                              <p className="text-white/60 font-bold text-xs sm:text-sm leading-relaxed border-l-2 border-white/10 pl-3 md:pl-4">
                                {getLoc(data.bio, lang)}
                              </p>
                           </div>

                           {/* Quote - mobile only */}
                           <div className="md:hidden bg-white/5 rounded-xl p-3 border border-white/5">
                              <div className="flex gap-2">
                                <Quote size={16} className={`${colors.text} shrink-0 mt-0.5`} />
                                <p className="text-white/70 font-bold text-xs italic leading-relaxed">
                                  {getLoc(data.quote, lang)}
                                </p>
                              </div>
                           </div>

                           {/* 1. CHARACTERISTICS */}
                           <div className="space-y-2 sm:space-y-3">
                              <h4 className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs flex items-center gap-2">
                                <Activity size={12} /> {lang === 'el' ? 'ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ' : 'CHARACTERISTICS'}
                              </h4>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                 {getLoc(data.traits, lang).map((trait: string, idx: number) => (
                                    <span key={idx} className="px-3 py-1.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wide">
                                       {trait}
                                    </span>
                                 ))}
                              </div>
                           </div>

                           {/* 2. TEAM ROLE */}
                           <div className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border ${colors.border} bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden`}>
                              <h4 className={`font-black uppercase tracking-widest text-[10px] sm:text-xs mb-1.5 flex items-center gap-2 ${colors.text}`}>
                                <HeartHandshake size={12} /> {lang === 'el' ? 'ΠΩΣ ΒΟΗΘΑ ΤΗΝ ΟΜΑΔΑ' : 'TEAM ROLE'}
                              </h4>
                              <p className="text-white/80 font-medium text-xs sm:text-sm leading-relaxed">
                                {getLoc(data.teamRole, lang)}
                              </p>
                           </div>

                           {/* 3. LESSONS */}
                           <div className="space-y-2">
                              <h4 className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs flex items-center gap-2">
                                <Lightbulb size={12} /> {lang === 'el' ? 'ΤΙ ΜΑΘΑΙΝΕΙΣ ΜΑΖΙ ΤΟΥ' : 'WHAT YOU LEARN'}
                              </h4>
                              <div className="space-y-1.5">
                                 {getLoc(data.lessons, lang).map((lesson: string, idx: number) => (
                                    <div key={idx} className="flex items-start gap-2">
                                       <CheckCircle2 size={14} className={`${colors.text} mt-0.5 shrink-0`} />
                                       <span className="text-white/70 text-xs sm:text-sm font-bold">{lesson}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>

                           {/* ACTIONS FOOTER */}
                           <div className="pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
                              <button
                                 onClick={() => navigate('/factory')}
                                 className="py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all flex items-center justify-center gap-1.5"
                              >
                                 <Box size={14} /> 3D
                              </button>
                              <button
                                 onClick={() => navigate('/cinema', { state: { animateHero: selectedHero } })}
                                 className={`py-3 ${colors.bg} hover:brightness-110 text-white rounded-xl font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all shadow-lg flex items-center justify-center gap-1.5`}
                              >
                                 <Clapperboard size={14} /> {lang === 'el' ? 'ΖΩΝΤΑΝΕΨΕ' : 'ANIMATE'}
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

      {/* COMMUNITY HERO MODAL */}
      <AnimatePresence>
        {selectedCommunityHero && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 xl:pl-80 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedCommunityHero(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-[3rem] overflow-hidden bg-[#0B0F1A] border border-amber-500/20 shadow-[0_0_60px_rgba(245,158,11,0.15)] relative"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedCommunityHero(null)}
                className="absolute top-6 right-6 z-20 bg-black/50 p-2 rounded-full text-white border border-white/10 hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={selectedCommunityHero.src}
                  alt={selectedCommunityHero.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 -mt-16 relative z-10 text-center space-y-4">
                <h2 className="text-4xl font-[1000] text-white uppercase italic tracking-tighter">
                  {selectedCommunityHero.name}
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Users size={14} className="text-amber-400" />
                  <span className="text-amber-300 text-xs font-black uppercase tracking-widest">
                    {lang === 'el' ? `Δημιουργός: ${selectedCommunityHero.creator}` : `Creator: ${selectedCommunityHero.creator}`}
                  </span>
                </div>
                <p className="text-white/50 text-sm font-bold">
                  {lang === 'el'
                    ? 'Αυτός ο ήρωας φτιάχτηκε από ένα παιδί σαν κι εσένα! Μπορείς κι εσύ να φτιάξεις τον δικό σου!'
                    : 'This hero was made by a kid just like you! You can create your own too!'}
                </p>
                <button
                  onClick={() => {
                    setSelectedCommunityHero(null);
                    navigate('/factory');
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-[1000] text-sm uppercase italic tracking-widest hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/30"
                >
                  {lang === 'el' ? 'ΦΤΙΑΞΕ ΤΟΝ ΔΙΚΟ ΣΟΥ ΗΡΩΑ!' : 'CREATE YOUR OWN HERO!'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default WiseFriends;
