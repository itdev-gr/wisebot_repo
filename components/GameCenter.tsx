
import React, { Suspense, useCallback } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { Gamepad2, Eye, Play, Star, Activity, Hexagon, Puzzle, Building2, Cloud, Crosshair, Disc, Grid, Zap, PersonStanding, Shield, Loader2, Wand2, Map, Palette, Calculator, BookA, Globe2, Recycle, Hourglass, Ear } from 'lucide-react';
import FirstTimeTip, { useChildName } from './FirstTimeTip';

// ─── Lazy-loaded games (each becomes its own chunk) ────────────
const NebulaCatch = React.lazy(() => import('./games/NebulaCatch'));
const DifferenceFinder = React.lazy(() => import('./games/DifferenceFinder'));
const HeroSlingshot = React.lazy(() => import('./games/HeroSlingshot'));
const BallRush = React.lazy(() => import('./games/BallRush'));
const HeroFusion = React.lazy(() => import('./games/HeroFusion'));
const WisebotPuzzle = React.lazy(() => import('./games/WisebotPuzzle'));
const BrokenCompanyGame = React.lazy(() => import('./games/BrokenCompanyGame'));
const SkyMetropolis = React.lazy(() => import('./games/SkyMetropolis'));
const TacticalFootball = React.lazy(() => import('./games/TacticalFootball'));
const WiseCards = React.lazy(() => import('./games/WiseCards'));
const GeometryDash = React.lazy(() => import('./games/GeometryDash'));
const EndlessRunner = React.lazy(() => import('./games/EndlessRunner'));
const TowerDefense = React.lazy(() => import('./games/TowerDefense'));
const WizardDuel = React.lazy(() => import('./games/WizardDuel'));
const DungeonExplorer = React.lazy(() => import('./games/DungeonExplorer'));
const ArtBattle = React.lazy(() => import('./games/ArtBattle'));
const MathRush = React.lazy(() => import('./games/MathRush'));
const WordQuest = React.lazy(() => import('./games/WordQuest'));
const GeoExplorer = React.lazy(() => import('./games/GeoExplorer'));
const EcoHero = React.lazy(() => import('./games/EcoHero'));
const TimeMachine = React.lazy(() => import('./games/TimeMachine'));
const SpellListen = React.lazy(() => import('./games/SpellListen'));

const GameLoader = () => (
  <div className="fixed inset-0 z-[9999] bg-[#0B0F1A] flex flex-col items-center justify-center gap-4">
    <Loader2 size={48} className="text-blue-500 animate-spin" />
    <p className="text-white/50 font-black text-sm uppercase tracking-widest animate-pulse">LOADING GAME...</p>
  </div>
);

const motion = m as any;

type GameKey = 'nebula' | 'diff' | 'slingshot' | 'ballrush' | 'fusion' | 'puzzle' | 'company' | 'sky' | 'football' | 'cards' | 'geodash' | 'runner' | 'tower' | 'wizard' | 'dungeon' | 'artbattle' | 'mathrush' | 'wordquest' | 'geo' | 'eco' | 'time' | 'spell';
const GAME_KEYS: GameKey[] = ['nebula', 'diff', 'slingshot', 'ballrush', 'fusion', 'puzzle', 'company', 'sky', 'football', 'cards', 'geodash', 'runner', 'tower', 'wizard', 'dungeon', 'artbattle', 'mathrush', 'wordquest', 'geo', 'eco', 'time', 'spell'];

interface GameCenterProps {
  lang: 'el' | 'en';
}

export default function GameCenter({ lang }: GameCenterProps) {
  const childName = useChildName(lang);
  // The active game lives in the URL (/game?g=ballrush), not in component state: the phone's
  // back button/gesture then returns to the game list instead of leaving /game entirely.
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const g = searchParams.get('g');
  const activeGame: GameKey | 'menu' = g && (GAME_KEYS as string[]).includes(g) ? (g as GameKey) : 'menu';
  const setActiveGame = useCallback((key: GameKey) => {
    setSearchParams({ g: key }, { state: { fromGameMenu: true } });
  }, [setSearchParams]);

  const t = {
    title: lang === 'el' ? 'ΠΑΙΧΝΙΔΙΑ' : 'GAMES',
    subtitle: lang === 'el' ? 'Παίξε, διασκέδασε και κέρδισε Badges!' : 'Play, have fun and earn Badges!',
    nebula: { title: 'NEBULA CATCH', desc: lang === 'el' ? 'Πιάσε την ενέργεια!' : 'Catch the energy!' },
    diff: { title: 'SPOT IT', desc: lang === 'el' ? 'Βρες τις διαφορές.' : 'Find the differences.' },
    slingshot: { title: 'SLINGSHOT', desc: lang === 'el' ? 'Στόχευσε!' : 'Aim & fire!' },
    ballrush: { title: 'BALL RUSH', desc: lang === 'el' ? 'Απόφυγε τα κόκκινα!' : 'Avoid the red ones!' },
    fusion: { title: 'HERO FUSION', desc: lang === 'el' ? 'Συνδύασε ήρωες!' : 'Merge heroes!' },
    puzzle: { title: 'PUZZLE', desc: lang === 'el' ? 'Κλασικό παζλ.' : 'Classic puzzle.' },
    company: { title: 'BROKEN CO.', desc: lang === 'el' ? 'Board Game.' : 'Strategy Board Game.' },
    sky: { title: 'SKY CITY', desc: lang === 'el' ? 'Χτίσε πόλη!' : 'Build a city!' },
    football: { title: 'NEON TACTICS', desc: lang === 'el' ? 'Ποδόσφαιρο!' : 'Football!' },
    cards: { title: 'WISE CARDS', desc: lang === 'el' ? 'Μνήμη (2P).' : 'Memory (2P).' },
    geodash: { title: 'GEOMETRY DASH', desc: lang === 'el' ? 'Πήδα & επιβίωσε!' : 'Jump & survive!' },
    runner: { title: 'ENDLESS RUNNER', desc: lang === 'el' ? 'Τρέξε ατελείωτα!' : 'Run forever!' },
    tower: { title: 'TOWER DEFENSE', desc: lang === 'el' ? 'Υπεράσπισε τη βάση!' : 'Defend the base!' },
    wizard: { title: 'WIZARD DUEL', desc: lang === 'el' ? 'Μαγικές μάχες!' : 'Magic battles!' },
    dungeon: { title: 'DUNGEON', desc: lang === 'el' ? 'Εξερεύνησε!' : 'Explore!' },
    artbattle: { title: 'AI ART BATTLE', desc: lang === 'el' ? 'Δημιούργησε AI τέχνη!' : 'Create AI art!' },
    mathrush: { title: 'MATH RUSH', desc: lang === 'el' ? 'Γρήγορα μαθηματικά!' : 'Fast math!' },
    wordquest: { title: 'WORD QUEST', desc: lang === 'el' ? 'Βρες τη λέξη!' : 'Find the word!' },
    geo: { title: 'GEO EXPLORER', desc: lang === 'el' ? 'Γύρισε τον κόσμο!' : 'Travel the world!' },
    eco: { title: 'ECO HERO', desc: lang === 'el' ? 'Σώσε τον πλανήτη!' : 'Save the planet!' },
    time: { title: 'TIME MACHINE', desc: lang === 'el' ? 'Ταξίδι στην ιστορία!' : 'Travel through history!' },
    spell: { title: 'SPELL & LISTEN', desc: lang === 'el' ? 'Άκου και γράψε!' : 'Listen and spell!' },
    play: lang === 'el' ? 'ΠΑΙΞΕ' : 'PLAY'
  };

  const handleBack = useCallback(() => {
    // Came here from the list → real history back (keeps the stack clean). Deep link → replace.
    if (location.state?.fromGameMenu) navigate(-1);
    else navigate('/game', { replace: true });
  }, [location.state, navigate]);

  // When a game is active, render it in a full-screen overlay
  // This covers the Layout header so the game's own back button
  // is the only way to navigate — and it correctly returns to the game list.
  if (activeGame !== 'menu') {
    const gameComponent = (() => {
      switch (activeGame) {
        case 'nebula': return <NebulaCatch lang={lang} onBack={handleBack} />;
        case 'diff': return <DifferenceFinder lang={lang} onBack={handleBack} />;
        case 'slingshot': return <HeroSlingshot lang={lang} onBack={handleBack} />;
        case 'ballrush': return <BallRush lang={lang} onBack={handleBack} />;
        case 'fusion': return <HeroFusion lang={lang} onBack={handleBack} />;
        case 'puzzle': return <WisebotPuzzle lang={lang} onBack={handleBack} />;
        case 'company': return <BrokenCompanyGame lang={lang} onBack={handleBack} />;
        case 'sky': return <SkyMetropolis lang={lang} onBack={handleBack} />;
        case 'football': return <TacticalFootball lang={lang} onBack={handleBack} />;
        case 'cards': return <WiseCards lang={lang} onBack={handleBack} />;
        case 'geodash': return <GeometryDash lang={lang} onBack={handleBack} />;
        case 'runner': return <EndlessRunner lang={lang} onBack={handleBack} />;
        case 'tower': return <TowerDefense lang={lang} onBack={handleBack} />;
        case 'wizard': return <WizardDuel lang={lang} onBack={handleBack} />;
        case 'dungeon': return <DungeonExplorer lang={lang} onBack={handleBack} />;
        case 'artbattle': return <ArtBattle lang={lang} onBack={handleBack} />;
        case 'mathrush': return <MathRush lang={lang} onBack={handleBack} />;
        case 'wordquest': return <WordQuest lang={lang} onBack={handleBack} />;
        case 'geo': return <GeoExplorer lang={lang} onBack={handleBack} />;
        case 'eco': return <EcoHero lang={lang} onBack={handleBack} />;
        case 'time': return <TimeMachine lang={lang} onBack={handleBack} />;
        case 'spell': return <SpellListen lang={lang} onBack={handleBack} />;
        default: return null;
      }
    })();

    return (
      <div className="fixed inset-0 z-[9999] bg-[#0B0F1A] flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="/images/paidia-kai-wisebot.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.04]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-transparent to-[#0B0F1A]" />
        </div>
        <Suspense fallback={<GameLoader />}>
          <div className="relative flex-1 flex flex-col overflow-hidden">
            {gameComponent}
          </div>
        </Suspense>
      </div>
    );
  }

  // GAME DATA with static Tailwind classes and thumbnails
  const games = [
    {
      key: 'mathrush' as const, icon: Calculator, featured: true,
      thumbnail: '/images/sparken.jpg',
      category: lang === 'el' ? 'ΕΚΠΑΙΔΕΥΤΙΚΟ' : 'EDUCATIONAL',
      cardBg: 'bg-gradient-to-br from-emerald-950/90 to-cyan-950/90',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      iconBg: 'bg-emerald-500/20 border-emerald-500/30',
      iconColor: 'text-emerald-400',
      hoverShadow: 'hover:shadow-emerald-500/20',
      playBg: 'group-hover:bg-emerald-500',
      tagBg: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      key: 'wordquest' as const, icon: BookA, featured: true,
      thumbnail: '/images/pencilo.jpg',
      category: lang === 'el' ? 'ΕΚΠΑΙΔΕΥΤΙΚΟ' : 'EDUCATIONAL',
      cardBg: 'bg-gradient-to-br from-amber-950/90 to-rose-950/90',
      borderColor: 'border-amber-500/30 hover:border-amber-400/60',
      iconBg: 'bg-amber-500/20 border-amber-500/30',
      iconColor: 'text-amber-400',
      hoverShadow: 'hover:shadow-amber-500/20',
      playBg: 'group-hover:bg-amber-500',
      tagBg: 'bg-amber-500/20 text-amber-300',
    },
    {
      key: 'geo' as const, icon: Globe2,
      thumbnail: '/images/paidia-kai-wisebot.webp',
      category: lang === 'el' ? 'ΓΕΩΓΡΑΦΙΑ' : 'GEOGRAPHY',
      cardBg: 'bg-gradient-to-br from-sky-950/90 to-teal-950/90',
      borderColor: 'border-sky-500/30 hover:border-sky-400/60',
      iconBg: 'bg-sky-500/20 border-sky-500/30',
      iconColor: 'text-sky-400',
      hoverShadow: 'hover:shadow-sky-500/20',
      playBg: 'group-hover:bg-sky-500',
      tagBg: 'bg-sky-500/20 text-sky-300',
    },
    {
      key: 'eco' as const, icon: Recycle,
      thumbnail: '/images/crocus.jpg',
      category: lang === 'el' ? 'ΠΕΡΙΒΑΛΛΟΝ' : 'ECOLOGY',
      cardBg: 'bg-gradient-to-br from-lime-950/90 to-green-950/90',
      borderColor: 'border-lime-500/30 hover:border-lime-400/60',
      iconBg: 'bg-lime-500/20 border-lime-500/30',
      iconColor: 'text-lime-400',
      hoverShadow: 'hover:shadow-lime-500/20',
      playBg: 'group-hover:bg-lime-500',
      tagBg: 'bg-lime-500/20 text-lime-300',
    },
    {
      key: 'time' as const, icon: Hourglass,
      thumbnail: '/images/link.jpg',
      category: lang === 'el' ? 'ΙΣΤΟΡΙΑ' : 'HISTORY',
      cardBg: 'bg-gradient-to-br from-cyan-950/90 to-indigo-950/90',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400/60',
      iconBg: 'bg-cyan-500/20 border-cyan-500/30',
      iconColor: 'text-cyan-400',
      hoverShadow: 'hover:shadow-cyan-500/20',
      playBg: 'group-hover:bg-cyan-500',
      tagBg: 'bg-cyan-500/20 text-cyan-300',
    },
    {
      key: 'spell' as const, icon: Ear,
      thumbnail: '/images/paidia-kai-pencilo.webp',
      category: lang === 'el' ? 'ΟΡΘΟΓΡΑΦΙΑ' : 'SPELLING',
      cardBg: 'bg-gradient-to-br from-fuchsia-950/90 to-violet-950/90',
      borderColor: 'border-fuchsia-500/30 hover:border-fuchsia-400/60',
      iconBg: 'bg-fuchsia-500/20 border-fuchsia-500/30',
      iconColor: 'text-fuchsia-400',
      hoverShadow: 'hover:shadow-fuchsia-500/20',
      playBg: 'group-hover:bg-fuchsia-500',
      tagBg: 'bg-fuchsia-500/20 text-fuchsia-300',
    },
    {
      key: 'wizard' as const, icon: Wand2, featured: true,
      thumbnail: '/images/wisebot.jpg',
      category: lang === 'el' ? 'ΕΚΠΑΙΔΕΥΤΙΚΟ' : 'EDUCATIONAL',
      cardBg: 'bg-gradient-to-br from-purple-950/90 to-fuchsia-950/90',
      borderColor: 'border-purple-500/30 hover:border-purple-400/60',
      iconBg: 'bg-purple-500/20 border-purple-500/30',
      iconColor: 'text-purple-400',
      hoverShadow: 'hover:shadow-purple-500/20',
      playBg: 'group-hover:bg-purple-500',
      tagBg: 'bg-purple-500/20 text-purple-300',
    },
    {
      key: 'artbattle' as const, icon: Palette, featured: true,
      thumbnail: '/images/pencilo.jpg',
      category: 'AI ART',
      cardBg: 'bg-gradient-to-br from-fuchsia-950/90 to-pink-950/90',
      borderColor: 'border-fuchsia-500/30 hover:border-fuchsia-400/60',
      iconBg: 'bg-fuchsia-500/20 border-fuchsia-500/30',
      iconColor: 'text-fuchsia-400',
      hoverShadow: 'hover:shadow-fuchsia-500/20',
      playBg: 'group-hover:bg-fuchsia-500',
      tagBg: 'bg-fuchsia-500/20 text-fuchsia-300',
    },
    {
      key: 'dungeon' as const, icon: Map,
      thumbnail: '/images/link.jpg',
      category: 'ROGUELIKE',
      cardBg: 'bg-gradient-to-br from-emerald-950/90 to-teal-950/90',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      iconBg: 'bg-emerald-500/20 border-emerald-500/30',
      iconColor: 'text-emerald-400',
      hoverShadow: 'hover:shadow-emerald-500/20',
      playBg: 'group-hover:bg-emerald-500',
      tagBg: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      key: 'geodash' as const, icon: Zap, featured: true,
      thumbnail: '/images/crocus.jpg',
      category: 'ARCADE',
      cardBg: 'bg-gradient-to-br from-cyan-950/90 to-blue-950/90',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400/60',
      iconBg: 'bg-cyan-500/20 border-cyan-500/30',
      iconColor: 'text-cyan-400',
      hoverShadow: 'hover:shadow-cyan-500/20',
      playBg: 'group-hover:bg-cyan-500',
      tagBg: 'bg-cyan-500/20 text-cyan-300',
    },
    {
      key: 'runner' as const, icon: PersonStanding,
      thumbnail: '/images/sparken.jpg',
      category: 'ARCADE',
      cardBg: 'bg-gradient-to-br from-violet-950/90 to-purple-950/90',
      borderColor: 'border-violet-500/30 hover:border-violet-400/60',
      iconBg: 'bg-violet-500/20 border-violet-500/30',
      iconColor: 'text-violet-400',
      hoverShadow: 'hover:shadow-violet-500/20',
      playBg: 'group-hover:bg-violet-500',
      tagBg: 'bg-violet-500/20 text-violet-300',
    },
    {
      key: 'tower' as const, icon: Shield,
      thumbnail: '/images/link.jpg',
      category: lang === 'el' ? 'ΣΤΡΑΤΗΓΙΚΗ' : 'STRATEGY',
      cardBg: 'bg-gradient-to-br from-emerald-950/90 to-green-950/90',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      iconBg: 'bg-emerald-500/20 border-emerald-500/30',
      iconColor: 'text-emerald-400',
      hoverShadow: 'hover:shadow-emerald-500/20',
      playBg: 'group-hover:bg-emerald-500',
      tagBg: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      key: 'cards' as const, icon: Grid, featured: true,
      thumbnail: '/images/wisebot.jpg',
      category: lang === 'el' ? 'ΜΝΗΜΗ' : 'MEMORY',
      cardBg: 'bg-gradient-to-br from-blue-950/90 to-slate-950/90',
      borderColor: 'border-blue-500/30 hover:border-blue-400/60',
      iconBg: 'bg-blue-500/20 border-blue-500/30',
      iconColor: 'text-blue-400',
      hoverShadow: 'hover:shadow-blue-500/20',
      playBg: 'group-hover:bg-blue-500',
      tagBg: 'bg-blue-500/20 text-blue-300',
    },
    {
      key: 'football' as const, icon: Disc,
      thumbnail: '/images/link.jpg',
      category: lang === 'el' ? 'ΑΘΛΗΜΑΤΑ' : 'SPORTS',
      cardBg: 'bg-gradient-to-br from-cyan-950/90 to-slate-950/90',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400/60',
      iconBg: 'bg-cyan-500/20 border-cyan-500/30',
      iconColor: 'text-cyan-400',
      hoverShadow: 'hover:shadow-cyan-500/20',
      playBg: 'group-hover:bg-cyan-500',
      tagBg: 'bg-cyan-500/20 text-cyan-300',
    },
    {
      key: 'sky' as const, icon: Cloud,
      thumbnail: '/images/sparken.jpg',
      category: lang === 'el' ? 'ΣΤΡΑΤΗΓΙΚΗ' : 'STRATEGY',
      cardBg: 'bg-gradient-to-br from-sky-950/90 to-slate-950/90',
      borderColor: 'border-sky-500/30 hover:border-sky-400/60',
      iconBg: 'bg-sky-500/20 border-sky-500/30',
      iconColor: 'text-sky-400',
      hoverShadow: 'hover:shadow-sky-500/20',
      playBg: 'group-hover:bg-sky-500',
      tagBg: 'bg-sky-500/20 text-sky-300',
    },
    {
      key: 'slingshot' as const, icon: Crosshair,
      thumbnail: '/images/crocus.jpg',
      category: 'ARCADE',
      cardBg: 'bg-gradient-to-br from-indigo-950/90 to-slate-950/90',
      borderColor: 'border-indigo-500/30 hover:border-indigo-400/60',
      iconBg: 'bg-indigo-500/20 border-indigo-500/30',
      iconColor: 'text-indigo-400',
      hoverShadow: 'hover:shadow-indigo-500/20',
      playBg: 'group-hover:bg-indigo-500',
      tagBg: 'bg-indigo-500/20 text-indigo-300',
    },
    {
      key: 'company' as const, icon: Building2,
      thumbnail: '/images/pencilo.jpg',
      category: lang === 'el' ? 'ΣΤΡΑΤΗΓΙΚΗ' : 'STRATEGY',
      cardBg: 'bg-gradient-to-br from-rose-950/90 to-slate-950/90',
      borderColor: 'border-rose-500/30 hover:border-rose-400/60',
      iconBg: 'bg-rose-500/20 border-rose-500/30',
      iconColor: 'text-rose-400',
      hoverShadow: 'hover:shadow-rose-500/20',
      playBg: 'group-hover:bg-rose-500',
      tagBg: 'bg-rose-500/20 text-rose-300',
    },
    {
      key: 'puzzle' as const, icon: Puzzle,
      thumbnail: '/images/wisebot.jpg',
      category: lang === 'el' ? 'ΠΑΖΛ' : 'PUZZLE',
      cardBg: 'bg-gradient-to-br from-purple-950/90 to-slate-950/90',
      borderColor: 'border-purple-500/30 hover:border-purple-400/60',
      iconBg: 'bg-purple-500/20 border-purple-500/30',
      iconColor: 'text-purple-400',
      hoverShadow: 'hover:shadow-purple-500/20',
      playBg: 'group-hover:bg-purple-500',
      tagBg: 'bg-purple-500/20 text-purple-300',
    },
    {
      key: 'fusion' as const, icon: Hexagon,
      thumbnail: '/images/sparken.jpg',
      category: lang === 'el' ? 'ΣΥΝΔΥΑΣΜΟΣ' : 'MERGE',
      cardBg: 'bg-gradient-to-br from-amber-950/90 to-slate-950/90',
      borderColor: 'border-amber-500/30 hover:border-amber-400/60',
      iconBg: 'bg-amber-500/20 border-amber-500/30',
      iconColor: 'text-amber-400',
      hoverShadow: 'hover:shadow-amber-500/20',
      playBg: 'group-hover:bg-amber-500',
      tagBg: 'bg-amber-500/20 text-amber-300',
    },
    {
      key: 'nebula' as const, icon: Star,
      thumbnail: '/images/link.jpg',
      category: 'ARCADE',
      cardBg: 'bg-gradient-to-br from-blue-950/90 to-slate-950/90',
      borderColor: 'border-blue-500/30 hover:border-blue-400/60',
      iconBg: 'bg-blue-500/20 border-blue-500/30',
      iconColor: 'text-blue-400',
      hoverShadow: 'hover:shadow-blue-500/20',
      playBg: 'group-hover:bg-blue-500',
      tagBg: 'bg-blue-500/20 text-blue-300',
    },
    {
      key: 'ballrush' as const, icon: Activity,
      thumbnail: '/images/crocus.jpg',
      category: 'ARCADE',
      cardBg: 'bg-gradient-to-br from-emerald-950/90 to-slate-950/90',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      iconBg: 'bg-emerald-500/20 border-emerald-500/30',
      iconColor: 'text-emerald-400',
      hoverShadow: 'hover:shadow-emerald-500/20',
      playBg: 'group-hover:bg-emerald-500',
      tagBg: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      key: 'diff' as const, icon: Eye,
      thumbnail: '/images/pencilo.jpg',
      category: lang === 'el' ? 'ΠΑΡΑΤΗΡΗΣΗ' : 'OBSERVATION',
      cardBg: 'bg-gradient-to-br from-fuchsia-950/90 to-slate-950/90',
      borderColor: 'border-fuchsia-500/30 hover:border-fuchsia-400/60',
      iconBg: 'bg-fuchsia-500/20 border-fuchsia-500/30',
      iconColor: 'text-fuchsia-400',
      hoverShadow: 'hover:shadow-fuchsia-500/20',
      playBg: 'group-hover:bg-fuchsia-500',
      tagBg: 'bg-fuchsia-500/20 text-fuchsia-300',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 pb-32 animate-in fade-in">
      <FirstTimeTip id="games" lang={lang} text={lang === 'el'
        ? <>🦉 16 παιχνίδια, όλα δωρεάν, {childName}. Κάθε νίκη δίνει XP — μέχρι 2 φορές τη μέρα ανά παιχνίδι.</>
        : <>🦉 16 games, all free, {childName}. Every win gives XP — up to twice a day per game.</>} />

      {/* HEADER */}
      <div className="text-center space-y-3 mb-8">
         <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            <Gamepad2 size={14} className="text-fuchsia-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{lang === 'el' ? 'ΖΩΝΗ ΠΑΙΧΝΙΔΙΩΝ' : 'GAME ZONE'}</span>
         </div>
         <h1 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            {t.title}
         </h1>
         <p className="text-white/50 font-bold uppercase tracking-[0.2em] text-[10px] drop-shadow-lg">
            {t.subtitle}
         </p>
      </div>

      {/* GAME GRID — Premium Cards with Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {games.map((game) => {
          const info = t[game.key as keyof typeof t] as { title: string; desc: string };
          const Icon = game.icon;
          const isFeatured = game.featured;

          return (
            <div
              key={game.key}
              onClick={() => setActiveGame(game.key)}
              className={`group relative cursor-pointer rounded-2xl md:rounded-3xl border-2 transition-all duration-300 overflow-hidden backdrop-blur-xl
                ${game.cardBg} ${game.borderColor} ${game.hoverShadow}
                hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]
                ${isFeatured ? 'col-span-2 row-span-1' : ''}
              `}
            >
              {/* Thumbnail Image */}
              <div className={`relative overflow-hidden ${isFeatured ? 'h-32 md:h-40' : 'h-24 md:h-32'}`}>
                <img
                  src={game.thumbnail}
                  alt={info.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                {/* Category Tag */}
                <div className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-widest ${game.tagBg} backdrop-blur-md`}>
                  {game.category}
                </div>

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 group-hover:scale-110 transition-transform`}>
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3 md:p-4">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center shrink-0 border ${game.iconBg}`}>
                    <Icon size={16} className={`${game.iconColor} md:w-[18px] md:h-[18px]`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-[1000] text-white uppercase italic tracking-tight leading-none ${isFeatured ? 'text-base md:text-lg' : 'text-xs md:text-sm'}`}>
                      {info.title}
                    </h3>
                    <p className="text-white/40 text-[9px] md:text-[10px] font-bold truncate mt-0.5">{info.desc}</p>
                  </div>
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-white/5 text-white/30 ${game.playBg} group-hover:text-white transition-all shrink-0`}>
                    <Play size={12} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
