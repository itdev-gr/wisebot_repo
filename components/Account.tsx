
import React, { useState } from 'react';
import {
  CreditCard,
  Award,
  History,
  ShieldCheck,
  Star,
  Gem,
  Gift,
  Mail,
  Smartphone,
  Check,
  Zap,
  BookOpen,
  Image as ImageIcon,
  Clapperboard,
  Brain,
  Calendar,
  Store,
  Music,
  FlaskConical,
  Globe,
  Camera,
  X,
  LogIn,
  LogOut,
  Cloud
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { USER_GROUP_PHOTO } from '../constants';
import { useEconomy } from '../context/EconomyContext';
import { useAuth } from '../context/AuthContext';

// Available avatars from hero images
const AVATAR_OPTIONS = [
  '/images/WiseBot_Hero_Leo.webp',
  '/images/WiseBot_Hero_Mario.webp',
  '/images/WiseBot_Hero_elos.webp',
  '/images/WiseBot_Hero_igu.webp',
  '/images/WiseBot_Hero_kagu.webp',
  '/images/WiseBot_Hero_kefala.webp',
  '/images/WiseBot_Hero_koxil.webp',
  '/images/WiseBot_Hero_let_.webp',
  '/images/WiseBot_Hero_lion_quin.webp',
  '/images/WiseBot_Hero_monk.webp',
  '/images/WiseBot_Hero_monkey.webp',
  '/images/WiseBot_Hero_muri.webp',
  '/images/WiseBot_Hero_octa.webp',
  '/images/WiseBot_Hero_ori.webp',
  '/images/WiseBot_Hero_pike.webp',
  '/images/WiseBot_Hero_pirc.webp',
  '/images/WiseBot_Hero_rakos_.webp',
  '/images/WiseBot_Hero_rubi.webp',
  '/images/WiseBot_Hero_skuiz.webp',
  '/images/WiseBot_Hero_snake.webp',
];

interface AccountProps {
  lang: 'el' | 'en';
  onClaimBonus: () => boolean;
  lastClaimDate: string;
}

export default function Account({ lang, onClaimBonus, lastClaimDate }: AccountProps) {
  const [claimedJustNow, setClaimedJustNow] = useState(false);
  const { stats, badges, credits } = useEconomy();
  const { user, profile, isGuest, signOut } = useAuth();
  const navigate = useNavigate();
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [avatar, setAvatar] = useState<string>(() => {
    return localStorage.getItem('wb_avatar') || USER_GROUP_PHOTO;
  });

  const handleAvatarSelect = (src: string) => {
    setAvatar(src);
    localStorage.setItem('wb_avatar', src);
    setShowAvatarPicker(false);
  };
  
  const today = new Date().toDateString();
  const alreadyClaimed = lastClaimDate === today;
  const canClaim = !alreadyClaimed && !claimedJustNow;

  const handleClaim = () => {
    if (canClaim) {
      const success = onClaimBonus();
      if (success) {
        setClaimedJustNow(true);
      }
    }
  };

  const text = {
    el: {
      pro: 'Certified Creator',
      joined: 'Μέλος από',
      membership: 'Κάρτα Μέλους',
      planName: 'WISEBOT ACADEMY PRO',
      renew: 'Ανανέωση: 12 Απριλίου',
      statsTitle: 'Στατιστικά Δημιουργού',
      statBooks: 'Βιβλία',
      statImages: 'Εικόνες',
      statVideos: 'Βίντεο',
      statQuiz: 'Quiz',
      recent: 'Ημερολόγιο Δραστηριότητας',
      achievements: 'Η Συλλογή σου',
      giftTitle: 'Ημερήσια Ενέργεια!',
      giftDesc: 'Πάρε 3 Credits δώρο για να συνεχίσεις τις δημιουργίες σου.',
      claim: 'ΠΑΡΕ 3 CREDITS',
      comeBack: 'ΕΛΑ ΑΥΡΙΟ ΓΙΑ ΑΛΛΑ',
      claimed: 'ΤΑ ΠΗΡΕΣ!',
      badgeLocked: 'Κλειδωμένο',
      badges: {
        thinker: 'Thinker',
        creator: 'Creator',
        filmmaker: 'Director',
        builder: 'Builder',
        market: 'Trader',
        musician: 'Μουσικός',
        scientist: 'Επιστήμονας',
        explorer: 'Εξερευνητής'
      }
    },
    en: {
      pro: 'Certified Creator',
      joined: 'Member since',
      membership: 'Membership Card',
      planName: 'WISEBOT ACADEMY PRO',
      renew: 'Renews: April 12',
      statsTitle: 'Creator Stats',
      statBooks: 'Books',
      statImages: 'Images',
      statVideos: 'Videos',
      statQuiz: 'Quizzes',
      recent: 'Activity Log',
      achievements: 'Your Collection',
      giftTitle: 'Daily Energy!',
      giftDesc: 'Claim 3 free Credits to continue your creations.',
      claim: 'CLAIM 3 CREDITS',
      comeBack: 'COME BACK TOMORROW',
      claimed: 'CLAIMED!',
      badgeLocked: 'Locked',
      badges: {
        thinker: 'Thinker',
        creator: 'Creator',
        filmmaker: 'Director',
        builder: 'Builder',
        market: 'Trader',
        musician: 'Musician',
        scientist: 'Scientist',
        explorer: 'Explorer'
      }
    }
  };

  const t = text[lang];

  // Static color maps for Tailwind (dynamic classes break in production builds)
  const BADGE_COLORS: Record<string, { bg: string; border: string; iconBg: string; iconText: string; shadow: string }> = {
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/50', iconBg: 'bg-purple-500/20', iconText: 'text-purple-400', shadow: 'shadow-lg shadow-purple-500/20' },
    fuchsia: { bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/50', iconBg: 'bg-fuchsia-500/20', iconText: 'text-fuchsia-400', shadow: 'shadow-lg shadow-fuchsia-500/20' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/50', iconBg: 'bg-cyan-500/20', iconText: 'text-cyan-400', shadow: 'shadow-lg shadow-cyan-500/20' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/50', iconBg: 'bg-emerald-500/20', iconText: 'text-emerald-400', shadow: 'shadow-lg shadow-emerald-500/20' },
    rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/50', iconBg: 'bg-rose-500/20', iconText: 'text-rose-400', shadow: 'shadow-lg shadow-rose-500/20' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/50', iconBg: 'bg-amber-500/20', iconText: 'text-amber-400', shadow: 'shadow-lg shadow-amber-500/20' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/50', iconBg: 'bg-blue-500/20', iconText: 'text-blue-400', shadow: 'shadow-lg shadow-blue-500/20' },
  };

  // Helper for badges visual
  const BadgeDisplay = ({ icon: Icon, id, color }: any) => {
    const isUnlocked = badges[id as keyof typeof badges];
    const c = BADGE_COLORS[color] || BADGE_COLORS.purple;
    return (
        <div className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all ${isUnlocked ? `${c.bg} ${c.border}` : 'bg-white/5 border-white/5 opacity-50 grayscale'}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isUnlocked ? `${c.iconBg} ${c.iconText} ${c.shadow}` : 'bg-white/10 text-white/20'}`}>
                <Icon size={24} />
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${isUnlocked ? 'text-white' : 'text-white/30'}`}>
                {t.badges[id as keyof typeof t.badges]}
            </span>
        </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-700 pb-32">
      
      {/* 1. HEADER PROFILE */}
      <header className="flex flex-col md:flex-row items-center gap-8 glass-panel p-10 rounded-[3rem] border-white/20 relative overflow-hidden">
        {/* Ambient Bg */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <div
            onClick={() => setShowAvatarPicker(true)}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 p-1 shadow-2xl overflow-hidden bg-black cursor-pointer group relative"
          >
            <img src={avatar} alt="Profile" className="w-full h-full object-cover rounded-full transition-all group-hover:brightness-75" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={24} className="text-white drop-shadow-lg" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full border-4 border-[#0B0F1A] text-white shadow-lg">
            <ShieldCheck size={20} />
          </div>
        </div>

        {/* Avatar Picker Modal */}
        {showAvatarPicker && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4" onClick={() => setShowAvatarPicker(false)}>
            <div className="bg-[#0B0F1A]/95 border border-white/10 rounded-3xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">
                  {lang === 'el' ? 'ΑΛΛΑΞΕ AVATAR' : 'CHANGE AVATAR'}
                </h3>
                <button onClick={() => setShowAvatarPicker(false)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
                  <X size={20} />
                </button>
              </div>

              {/* Default avatar */}
              <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-3">{lang === 'el' ? 'ΠΡΟΕΠΙΛΟΓΗ' : 'DEFAULT'}</p>
              <button
                onClick={() => handleAvatarSelect(USER_GROUP_PHOTO)}
                className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all mb-6 ${avatar === USER_GROUP_PHOTO ? 'border-blue-500 scale-110 shadow-lg shadow-blue-500/30' : 'border-white/10 hover:border-white/30'}`}
              >
                <img src={USER_GROUP_PHOTO} alt="Default" className="w-full h-full object-cover" />
              </button>

              {/* Hero avatars */}
              <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-3">{lang === 'el' ? 'ΗΡΩΕΣ' : 'HEROES'}</p>
              <div className="grid grid-cols-5 gap-3">
                {AVATAR_OPTIONS.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => handleAvatarSelect(src)}
                    className={`w-full aspect-square rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 ${avatar === src ? 'border-blue-500 scale-110 shadow-lg shadow-blue-500/30' : 'border-white/10 hover:border-white/30'}`}
                  >
                    <img src={src} alt={`Hero ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex-1 text-center md:text-left space-y-3 z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-[1000] text-white tracking-tighter uppercase italic">
              {profile?.childName || 'Wise'}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {profile?.childName ? '' : 'Kids'}
              </span>
            </h2>
            {!isGuest && (
              <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest self-center md:self-auto backdrop-blur-md flex items-center gap-2">
                <Cloud size={12} /> Synced
              </span>
            )}
          </div>
          <p className="text-white/50 font-bold italic flex items-center justify-center md:justify-start gap-2">
             <Calendar size={14}/> {t.joined} {new Date().getFullYear()}
          </p>

          {/* Current Balance Pill */}
          <div className="inline-flex items-center gap-3 bg-black/40 px-5 py-2 rounded-xl border border-white/10 mt-2">
             <span className="text-white/60 text-xs font-black uppercase tracking-widest">{lang === 'el' ? 'ΠΟΡΤΟΦΟΛΙ' : 'WALLET'}</span>
             <div className="h-4 w-px bg-white/10"></div>
             <span className="text-amber-400 font-[1000] text-xl italic flex items-center gap-1">
                <Zap size={18} fill="currentColor" /> {credits}
             </span>
          </div>

          {/* Login / Logout Button */}
          <div className="mt-3">
            {isGuest ? (
              <button
                onClick={() => navigate('/login')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl text-white font-[900] text-xs uppercase tracking-wider hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all active:scale-[0.97]"
              >
                <LogIn size={16} />
                {lang === 'el' ? 'ΣΥΝΔΕΣΗ / ΕΓΓΡΑΦΗ' : 'LOGIN / REGISTER'}
              </button>
            ) : (
              <button
                onClick={() => signOut()}
                className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-white/50 font-bold text-xs hover:text-white/70 hover:border-white/20 transition-all"
              >
                <LogOut size={14} />
                {lang === 'el' ? 'Αποσύνδεση' : 'Sign Out'}
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COL: STATS & MEMBERSHIP */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* STATS GRID */}
          <section className="glass-panel p-8 rounded-[2.5rem] border-white/10 space-y-6">
             <h3 className="text-xl font-black text-white uppercase italic flex items-center gap-3">
               <History size={20} className="text-blue-400" /> {t.statsTitle}
             </h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                    <BookOpen className="text-indigo-400" size={24} />
                    <span className="text-3xl font-[1000] text-white">{stats.booksRead}</span>
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{t.statBooks}</span>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                    <Brain className="text-purple-400" size={24} />
                    <span className="text-3xl font-[1000] text-white">{stats.quizzesPassed}</span>
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{t.statQuiz}</span>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                    <ImageIcon className="text-fuchsia-400" size={24} />
                    <span className="text-3xl font-[1000] text-white">{stats.imagesCreated}</span>
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{t.statImages}</span>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                    <Clapperboard className="text-cyan-400" size={24} />
                    <span className="text-3xl font-[1000] text-white">{stats.videosCreated}</span>
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{t.statVideos}</span>
                </div>
             </div>
          </section>

          {/* MEMBERSHIP CARD */}
          <section className="relative h-64 rounded-[2.5rem] overflow-hidden shadow-2xl group transition-transform hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-black"></div>
            {/* Decorative Patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
            <div className="absolute inset-0 bg-[url('/images/carbon-fibre.webp')] opacity-20"></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
                            <Gem className="text-emerald-400" size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-[1000] uppercase italic tracking-wider text-lg leading-none">{t.planName}</h4>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">{lang === 'el' ? 'Ενεργή Πρόσβαση' : 'Active Access'}</p>
                        </div>
                    </div>
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30">
                        <Star className="text-amber-400 fill-current" size={20} />
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="space-y-1">
                        <p className="text-[9px] text-white/40 font-black uppercase tracking-widest">{lang === 'el' ? 'ΙΣΤΟΡΙΕΣ & QUIZ' : 'STORIES & QUIZZES'}</p>
                        <p className="text-white/70 font-bold text-sm">{stats.lessonsRead + stats.booksRead + stats.quizzesPassed} {lang === 'el' ? 'ολοκληρωμένα' : 'completed'}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[9px] text-white/40 font-black uppercase tracking-widest">{lang === 'el' ? 'ΣΥΝΟΛΙΚΑ CREDITS' : 'TOTAL CREDITS'}</p>
                        <p className="text-amber-400 font-[1000] text-lg flex items-center justify-end gap-1"><Zap size={14} fill="currentColor" /> {credits}</p>
                    </div>
                </div>
            </div>
          </section>

        </div>

        {/* RIGHT COL: DAILY & BADGES */}
        <div className="space-y-8">
           
           {/* DAILY BONUS CARD (REDESIGNED) */}
           <div className={`relative rounded-[2.5rem] p-1 overflow-hidden transition-all duration-500 ${canClaim ? 'hover:scale-105' : ''}`}>
              <div className={`absolute inset-0 ${canClaim ? 'bg-gradient-to-br from-amber-400 via-orange-500 to-purple-600 animate-pulse' : 'bg-slate-800'}`}></div>
              <div className="relative bg-[#0B0F1A] h-full rounded-[2.4rem] p-8 flex flex-col items-center text-center space-y-6 overflow-hidden">
                  
                  {/* Rays Effect */}
                  {canClaim && <div className="absolute inset-0 bg-[url('/images/stardust.webp')] opacity-30 animate-spin-slow"></div>}

                  <div className={`w-24 h-24 rounded-full flex items-center justify-center relative z-10 transition-all ${canClaim ? 'bg-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.4)]' : 'bg-white/5'}`}>
                      {canClaim 
                        ? <Gift size={48} className="text-amber-400 animate-bounce" />
                        : <Check size={48} className="text-emerald-500" />
                      }
                  </div>

                  <div className="relative z-10">
                      <h4 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter mb-2">{canClaim ? t.giftTitle : t.claimed}</h4>
                      <p className="text-white/50 text-xs font-bold leading-relaxed">{t.giftDesc}</p>
                  </div>

                  <button 
                    onClick={handleClaim}
                    disabled={!canClaim}
                    className={`w-full py-4 rounded-xl font-[1000] uppercase tracking-widest text-xs relative z-10 transition-all flex items-center justify-center gap-2 ${
                        canClaim 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xl hover:brightness-110' 
                        : 'bg-white/5 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    {canClaim ? <><Zap size={16} fill="currentColor"/> {t.claim}</> : t.comeBack}
                  </button>
              </div>
           </div>

           {/* BADGES COLLECTION */}
           <div className="glass-panel p-8 rounded-[2.5rem] border-white/10 space-y-6">
              <h3 className="text-xl font-black text-white uppercase italic flex items-center gap-3">
                <Award size={20} className="text-fuchsia-400" /> {t.achievements}
              </h3>
              
              <div className="grid grid-cols-4 gap-3">
                 <BadgeDisplay icon={Brain} id="thinker" color="purple" />
                 <BadgeDisplay icon={ImageIcon} id="creator" color="fuchsia" />
                 <BadgeDisplay icon={Clapperboard} id="filmmaker" color="cyan" />
                 <BadgeDisplay icon={Smartphone} id="builder" color="emerald" />
                 <BadgeDisplay icon={Store} id="market" color="purple" />
                 <BadgeDisplay icon={Music} id="musician" color="rose" />
                 <BadgeDisplay icon={FlaskConical} id="scientist" color="amber" />
                 <BadgeDisplay icon={Globe} id="explorer" color="blue" />
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}
