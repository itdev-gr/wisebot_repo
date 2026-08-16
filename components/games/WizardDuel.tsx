
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowLeft, Zap, Heart, Shield, Flame, Sparkles, Star, RotateCcw } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
interface WizardDuelProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// ─── TYPES ──────────────────────────────────
type Difficulty = 'easy' | 'medium' | 'hard';

interface Question {
  question: string;
  answer: string;
  type: 'math' | 'word' | 'trivia';
}

interface Spell {
  name: string;
  emoji: string;
  damage: number;
  color: string;
  manaCost: number;
}

interface Particle {
  x: number; y: number; vx: number; vy: number;
  life: number; color: string; size: number; type: string;
}

// ─── SPELL DEFINITIONS ─────────────────────
const SPELLS: Spell[] = [
  { name: 'Fireball', emoji: '🔥', damage: 20, color: '#ff4400', manaCost: 0 },
  { name: 'Lightning', emoji: '⚡', damage: 30, color: '#ffee00', manaCost: 0 },
  { name: 'Ice Blast', emoji: '❄️', damage: 25, color: '#00ccff', manaCost: 0 },
  { name: 'Dark Pulse', emoji: '💀', damage: 35, color: '#9900ff', manaCost: 0 },
  { name: 'Nova', emoji: '💫', damage: 45, color: '#ff00ff', manaCost: 0 },
];

// ─── BOSS DATA ──────────────────────────────
const BOSSES = [
  { name: 'Shadow Imp', emoji: '👿', hp: 80, attack: 8, color: '#884488', level: 1 },
  { name: 'Ice Golem', emoji: '🧊', hp: 120, attack: 12, color: '#4488cc', level: 2 },
  { name: 'Fire Drake', emoji: '🐉', hp: 160, attack: 16, color: '#cc4422', level: 3 },
  { name: 'Dark Sorcerer', emoji: '🧙', hp: 200, attack: 20, color: '#6622cc', level: 4 },
  { name: 'Chaos Lord', emoji: '👹', hp: 250, attack: 25, color: '#ff0066', level: 5 },
];

// ─── QUESTION GENERATORS ────────────────────
function generateMathQuestion(difficulty: Difficulty): Question {
  let a: number, b: number, op: string, answer: number;
  if (difficulty === 'easy') {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    op = Math.random() > 0.5 ? '+' : '-';
    if (op === '-' && b > a) [a, b] = [b, a];
    answer = op === '+' ? a + b : a - b;
  } else if (difficulty === 'medium') {
    a = Math.floor(Math.random() * 12) + 2;
    b = Math.floor(Math.random() * 12) + 2;
    const ops = ['+', '-', '×'];
    op = ops[Math.floor(Math.random() * ops.length)];
    if (op === '-' && b > a) [a, b] = [b, a];
    answer = op === '+' ? a + b : op === '-' ? a - b : a * b;
  } else {
    a = Math.floor(Math.random() * 20) + 5;
    b = Math.floor(Math.random() * 15) + 2;
    const ops = ['+', '-', '×'];
    op = ops[Math.floor(Math.random() * ops.length)];
    if (op === '-' && b > a) [a, b] = [b, a];
    answer = op === '+' ? a + b : op === '-' ? a - b : a * b;
  }
  return { question: `${a} ${op} ${b} = ?`, answer: answer.toString(), type: 'math' };
}

function generateWordQuestion(difficulty: Difficulty, isGreek: boolean): Question {
  const greekWords = [
    // Easy
    { q: 'Ποιο ζώο γαυγίζει;', a: 'σκύλος' },
    { q: 'Ποιο χρώμα έχει ο ουρανός;', a: 'μπλε' },
    { q: 'Πόσες μέρες έχει η εβδομάδα;', a: '7' },
    { q: 'Ποιο ζώο νιαουρίζει;', a: 'γάτα' },
    { q: 'Τι πίνουμε κάθε μέρα;', a: 'νερό' },
    // Medium
    { q: 'Ποια η πρωτεύουσα της Ελλάδας;', a: 'αθήνα' },
    { q: 'Πόσοι μήνες έχει ο χρόνος;', a: '12' },
    { q: 'Ποιο είναι το μεγαλύτερο ζώο;', a: 'φάλαινα' },
    { q: 'Πόσα χρώματα έχει το ουράνιο τόξο;', a: '7' },
    { q: 'Ποιος πλανήτης είναι κόκκινος;', a: 'άρης' },
  ];
  const englishWords = [
    { q: 'Which animal barks?', a: 'dog' },
    { q: 'What color is the sky?', a: 'blue' },
    { q: 'How many days in a week?', a: '7' },
    { q: 'Which animal meows?', a: 'cat' },
    { q: 'What do we drink every day?', a: 'water' },
    { q: 'Capital of France?', a: 'paris' },
    { q: 'How many months in a year?', a: '12' },
    { q: 'Largest animal on Earth?', a: 'whale' },
    { q: 'How many colors in a rainbow?', a: '7' },
    { q: 'Which planet is red?', a: 'mars' },
  ];
  const words = isGreek ? greekWords : englishWords;
  const pool = difficulty === 'easy' ? words.slice(0, 5) : words;
  const w = pool[Math.floor(Math.random() * pool.length)];
  return { question: w.q, answer: w.a.toLowerCase(), type: 'word' };
}

function getQuestion(difficulty: Difficulty, isGreek: boolean): Question {
  return Math.random() > 0.4 ? generateMathQuestion(difficulty) : generateWordQuestion(difficulty, isGreek);
}

// ─── COMPONENT ──────────────────────────────
export default function WizardDuel({ lang, onBack }: WizardDuelProps) {
  const { earnCredits, showNotification } = useEconomy();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const [gameState, setGameState] = useState<'menu' | 'battle' | 'question' | 'casting' | 'enemy_turn' | 'victory' | 'defeat'>('menu');
  const [bossIndex, setBossIndex] = useState(0);
  const [playerHP, setPlayerHP] = useState(100);
  const [bossHP, setBossHP] = useState(80);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedSpell, setSelectedSpell] = useState(0);
  const [combo, setCombo] = useState(0);
  const [score, setScore] = useState(0);
  const [shieldActive, setShieldActive] = useState(false);
  const [message, setMessage] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [streak, setStreak] = useState(0);
  const [showHit, setShowHit] = useState<'player' | 'boss' | null>(null);
  const [castingSpell, setCastingSpell] = useState<Spell | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const boss = BOSSES[bossIndex];
  const isGreek = lang === 'el';

  // Canvas animation for spell effects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => {
      const p = canvas.parentElement;
      if (p) { canvas.width = p.clientWidth; canvas.height = p.clientHeight; }
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Update & draw particles
      particlesRef.current.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.life -= 0.015;
        if (p.type === 'spark') p.vy += 0.05;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);

      animRef.current = requestAnimationFrame(draw);
    };
    animRef.current = requestAnimationFrame(draw);
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animRef.current); };
  }, []);

  // Spawn particles helper
  const spawnParticles = useCallback((x: number, y: number, color: string, count: number, spread = 5) => {
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x, y,
        vx: (Math.random() - 0.5) * spread,
        vy: (Math.random() - 0.5) * spread,
        life: 0.8 + Math.random() * 0.5,
        color, size: 2 + Math.random() * 4, type: 'spark',
      });
    }
  }, []);

  const startBattle = useCallback((bIdx = 0) => {
    setBossIndex(bIdx);
    setPlayerHP(100);
    setBossHP(BOSSES[bIdx].hp);
    setCombo(0);
    setScore(0);
    setShieldActive(false);
    setStreak(0);
    setMessage('');
    setCastingSpell(null);
    setShowHit(null);
    setDifficulty(bIdx < 2 ? 'easy' : bIdx < 4 ? 'medium' : 'hard');
    setGameState('battle');
  }, []);

  const askQuestion = useCallback((spellIdx: number) => {
    setSelectedSpell(spellIdx);
    const diff = bossIndex < 2 ? 'easy' : bossIndex < 4 ? 'medium' : 'hard';
    setCurrentQuestion(getQuestion(diff, isGreek));
    setUserAnswer('');
    setGameState('question');
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [bossIndex, isGreek]);

  // Defined before submitAnswer, which lists it as a dependency — a const in the
  // same scope must be initialised before that dep array is evaluated (TDZ).
  const enemyAttack = useCallback((currentBossHP: number) => {
    setGameState('enemy_turn');
    const bossData = BOSSES[bossIndex];
    let damage = bossData.attack + Math.floor(Math.random() * 5);

    if (shieldActive) {
      damage = Math.floor(damage * 0.4);
      setShieldActive(false);
      setMessage(isGreek ? '🛡️ Η ασπίδα απορρόφησε τη ζημιά!' : '🛡️ Shield absorbed damage!');
    } else {
      setMessage(isGreek ? `${bossData.emoji} ${bossData.name} επιτίθεται! -${damage}HP` : `${bossData.emoji} ${bossData.name} attacks! -${damage}HP`);
    }

    const canvas = canvasRef.current;
    if (canvas) {
      spawnParticles(canvas.width / 2, canvas.height * 0.65, bossData.color, 20, 6);
    }

    setTimeout(() => {
      setShowHit('player');
      const newHP = Math.max(0, playerHP - damage);
      setPlayerHP(newHP);

      setTimeout(() => {
        setShowHit(null);
        if (newHP <= 0) {
          setGameState('defeat');
          setMessage(isGreek ? '💀 Ηττήθηκες...' : '💀 You were defeated...');
        } else {
          setGameState('battle');
          setMessage('');
        }
      }, 500);
    }, 500);
    // `score` removed: not read in this callback body.
  }, [bossIndex, playerHP, shieldActive, isGreek, spawnParticles]);

  const submitAnswer = useCallback(() => {
    if (!currentQuestion) return;
    const correct = userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase();
    const spell = SPELLS[selectedSpell];

    if (correct) {
      const newCombo = combo + 1;
      const newStreak = streak + 1;
      setCombo(newCombo);
      setStreak(newStreak);
      setGameState('casting');
      setCastingSpell(spell);
      setMessage(isGreek ? '✨ ΣΩΣΤΑ!' : '✨ CORRECT!');

      // Calculate damage with combo bonus
      const comboMult = 1 + Math.min(newCombo * 0.1, 0.5);
      const damage = Math.floor(spell.damage * comboMult);

      // Spawn attack particles
      const canvas = canvasRef.current;
      if (canvas) {
        spawnParticles(canvas.width / 2, canvas.height * 0.3, spell.color, 30, 8);
      }

      setTimeout(() => {
        setShowHit('boss');
        const newBossHP = Math.max(0, bossHP - damage);
        setBossHP(newBossHP);
        setScore(prev => prev + damage + newCombo * 5);

        setTimeout(() => {
          setShowHit(null);
          setCastingSpell(null);

          if (newBossHP <= 0) {
            // Victory
            grantGameReward('wizard', 2, earnCredits, showNotification, lang);
            if (bossIndex < BOSSES.length - 1) {
              setMessage(isGreek ? `🎉 Νίκησες ${boss.name}!` : `🎉 You defeated ${boss.name}!`);
              setGameState('victory');
            } else {
              // Final boss defeated
              setMessage(isGreek ? '🏆 ΝΙΚΗΣΕΣ ΟΛΟΥΣ!' : '🏆 YOU DEFEATED ALL BOSSES!');
              setGameState('victory');
              // All bosses defeated
            }
          } else {
            // Enemy turn
            enemyAttack(newBossHP);
          }
        }, 600);
      }, 500);
    } else {
      setCombo(0);
      setStreak(0);
      setMessage(isGreek ? `❌ Λάθος! Σωστό: ${currentQuestion.answer}` : `❌ Wrong! Answer: ${currentQuestion.answer}`);
      setTimeout(() => {
        enemyAttack(bossHP);
      }, 1000);
    }
  }, [currentQuestion, userAnswer, selectedSpell, combo, streak, bossHP, bossIndex, boss, isGreek, spawnParticles, earnCredits, showNotification, lang, enemyAttack]);

  const nextBoss = useCallback(() => {
    const next = bossIndex + 1;
    if (next < BOSSES.length) {
      startBattle(next);
    }
  }, [bossIndex, startBattle]);

  // ─── RENDER ───────────────────────────────
  return (
    <div className="flex flex-col h-full w-full bg-[#0B0F1A] select-none overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-black/70 backdrop-blur-xl border-b border-purple-500/20 z-20 relative shrink-0">
        <button onClick={(e) => { e.stopPropagation(); onBack(); }} className="flex items-center justify-center w-9 h-9 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-white/60 text-xs font-bold uppercase tracking-wider">
            {isGreek ? 'ΜΑΧΗ ΜΑΓΩΝ' : 'WIZARD DUEL'}
          </span>
          {gameState !== 'menu' && (
            <span className="text-amber-400 text-xs font-[900] bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              ⭐ {score}
            </span>
          )}
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background canvas for particles */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 pointer-events-none" />

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0520] via-[#0B0F1A] to-[#0a0520]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* ─── MENU ─── */}
        {gameState === 'menu' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 animate-in fade-in">
            <div className="text-center space-y-5">
              <div className="text-6xl md:text-8xl">🧙‍♂️</div>
              <h1 className="text-4xl md:text-5xl font-[1000] uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-amber-400">
                WIZARD DUEL
              </h1>
              <p className="text-white/40 text-sm font-bold max-w-xs mx-auto">
                {isGreek ? 'Απάντησε σωστά για να κάνεις μαγικά ξόρκια!' : 'Answer correctly to cast magic spells!'}
              </p>

              {/* Boss Preview */}
              <div className="grid grid-cols-5 gap-2 max-w-xs mx-auto mt-4">
                {BOSSES.map((b, i) => (
                  <div key={i} className={`text-center p-2 rounded-xl border ${i === 0 ? 'border-white/20 bg-white/5' : 'border-white/5 bg-white/[0.02] opacity-50'}`}>
                    <div className="text-2xl">{b.emoji}</div>
                    <div className="text-[8px] text-white/40 font-bold mt-1">LV{b.level}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => startBattle(0)}
                className="mt-4 px-8 py-3.5 bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 text-white font-[900] text-sm uppercase rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)] active:scale-95 transition-all border border-white/10"
              >
                {isGreek ? '⚔️ ΞΕΚΙΝΑ ΜΑΧΗ' : '⚔️ START BATTLE'}
              </button>
            </div>
          </div>
        )}

        {/* ─── BATTLE / QUESTION / CASTING / ENEMY ─── */}
        {(gameState === 'battle' || gameState === 'question' || gameState === 'casting' || gameState === 'enemy_turn') && (
          <div className="absolute inset-0 flex flex-col z-20 p-4 animate-in fade-in">
            {/* BOSS AREA */}
            <div className="flex-none text-center mb-3">
              <div className={`inline-block text-5xl md:text-6xl transition-all duration-300 ${showHit === 'boss' ? 'scale-125 animate-pulse' : ''}`}>
                {boss.emoji}
              </div>
              <div className="mt-1">
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider">{boss.name} — LV{boss.level}</p>
                {/* Boss HP */}
                <div className="max-w-xs mx-auto mt-1">
                  <div className="h-3 bg-black/50 rounded-full border border-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                      style={{ width: `${(bossHP / boss.hp) * 100}%` }}
                    />
                  </div>
                  <p className="text-red-400/70 text-[10px] font-bold mt-0.5">{bossHP}/{boss.hp} HP</p>
                </div>
              </div>
            </div>

            {/* CASTING EFFECT */}
            {castingSpell && (
              <div className="flex-none text-center py-2 animate-in zoom-in">
                <div className="text-4xl animate-bounce">{castingSpell.emoji}</div>
                <p className="text-sm font-[900] mt-1" style={{ color: castingSpell.color }}>{castingSpell.name}!</p>
              </div>
            )}

            {/* MESSAGE */}
            {message && (
              <div className="flex-none text-center py-2">
                <p className="text-white text-sm font-bold bg-white/5 rounded-xl px-4 py-2 inline-block border border-white/10 backdrop-blur-md">{message}</p>
              </div>
            )}

            {/* QUESTION AREA */}
            {gameState === 'question' && currentQuestion && (
              <div className="flex-1 flex flex-col items-center justify-center px-2 animate-in slide-in-from-bottom">
                <div className="w-full max-w-sm bg-white/[0.04] backdrop-blur-xl rounded-2xl p-5 border border-purple-500/20 shadow-[0_0_40px_rgba(120,0,255,0.15)] space-y-4">
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-bold border border-purple-500/20">
                      {currentQuestion.type === 'math' ? '🔢 MATH' : '📝 QUIZ'}
                    </span>
                    {combo > 0 && (
                      <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold border border-amber-500/20">
                        🔥 ×{combo}
                      </span>
                    )}
                  </div>
                  <p className="text-white text-lg md:text-xl font-[900] text-center">{currentQuestion.question}</p>
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type={currentQuestion.type === 'math' ? 'number' : 'text'}
                      inputMode={currentQuestion.type === 'math' ? 'numeric' : 'text'}
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter' && userAnswer.trim()) submitAnswer(); }}
                      placeholder={isGreek ? 'Απάντηση...' : 'Answer...'}
                      className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-bold text-center text-lg outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-white/20"
                      autoComplete="off"
                    />
                    <button
                      onClick={submitAnswer}
                      disabled={!userAnswer.trim()}
                      className="px-5 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-[900] rounded-xl disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    >
                      ⚡
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* SPELL SELECTION */}
            {gameState === 'battle' && (
              <div className="flex-1 flex flex-col justify-end pb-2 space-y-3">
                {/* Shield toggle */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setShieldActive(!shieldActive)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      shieldActive
                        ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                        : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                    }`}
                  >
                    <Shield size={14} /> {isGreek ? 'ΑΣΠΙΔΑ' : 'SHIELD'} {shieldActive ? '✓' : ''}
                  </button>
                </div>

                {/* Spells */}
                <div className="grid grid-cols-5 gap-1.5 max-w-md mx-auto w-full">
                  {SPELLS.map((spell, i) => (
                    <button
                      key={i}
                      onClick={() => askQuestion(i)}
                      className="group relative bg-white/[0.04] border border-white/10 rounded-xl p-2.5 text-center hover:border-white/30 active:scale-90 transition-all"
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform">{spell.emoji}</div>
                      <div className="text-[8px] text-white/40 font-bold mt-0.5 truncate">{spell.name}</div>
                      <div className="text-[9px] font-[900] mt-0.5" style={{ color: spell.color }}>{spell.damage}dmg</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PLAYER AREA */}
            <div className="flex-none mt-2 pb-2">
              <div className="flex items-center justify-between max-w-sm mx-auto">
                <div className={`text-3xl transition-all duration-300 ${showHit === 'player' ? 'scale-75 opacity-50' : ''}`}>🧙‍♂️</div>
                <div className="flex-1 px-3">
                  <div className="h-3 bg-black/50 rounded-full border border-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      style={{ width: `${playerHP}%` }}
                    />
                  </div>
                  <p className="text-emerald-400/70 text-[10px] font-bold mt-0.5">{playerHP}/100 HP</p>
                </div>
                <div className="flex items-center gap-1">
                  {streak >= 3 && <span className="text-xs bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded font-bold border border-amber-500/20">🔥{streak}</span>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── VICTORY ─── */}
        {gameState === 'victory' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 animate-in zoom-in">
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-[2rem] p-7 border border-emerald-500/20 shadow-[0_0_60px_rgba(16,185,129,0.2)] text-center space-y-4 max-w-sm w-full">
              <div className="text-5xl">🎉</div>
              <h2 className="text-2xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 uppercase italic">
                {isGreek ? 'ΝΙΚΗ!' : 'VICTORY!'}
              </h2>
              <p className="text-white/60 text-sm">{message}</p>
              <div className="flex items-center justify-center gap-2 bg-amber-500/10 rounded-xl py-2 border border-amber-500/20">
                <Star size={16} className="text-amber-400" />
                <span className="text-amber-300 font-[900]">{score} {isGreek ? 'Πόντοι' : 'Points'}</span>
              </div>
              {bossIndex < BOSSES.length - 1 ? (
                <button onClick={nextBoss} className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-[900] text-sm uppercase rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-white/10">
                  {isGreek ? `⚔️ ΕΠΟΜΕΝΟΣ: ${BOSSES[bossIndex + 1].name}` : `⚔️ NEXT: ${BOSSES[bossIndex + 1].name}`}
                </button>
              ) : (
                <button onClick={() => setGameState('menu')} className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-[900] text-sm uppercase rounded-xl active:scale-95 transition-all border border-white/10">
                  {isGreek ? '🏆 ΤΕΛΟΣ - ΜΕΝΟΥ' : '🏆 COMPLETE - MENU'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* ─── DEFEAT ─── */}
        {gameState === 'defeat' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 animate-in fade-in">
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-[2rem] p-7 border border-red-500/20 shadow-[0_0_60px_rgba(239,68,68,0.15)] text-center space-y-4 max-w-sm w-full">
              <div className="text-5xl">💀</div>
              <h2 className="text-2xl font-[1000] text-white uppercase italic">GAME OVER</h2>
              <div className="flex items-center justify-center gap-2 bg-amber-500/10 rounded-xl py-2 border border-amber-500/20">
                <Star size={16} className="text-amber-400" />
                <span className="text-amber-300 font-[900]">{score}</span>
              </div>
              <button onClick={() => startBattle(bossIndex)} className="w-full py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-[900] text-sm uppercase rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 border border-white/10">
                <RotateCcw size={16} /> {isGreek ? 'ΞΑΝΑΠΑΙΞΕ' : 'RETRY'}
              </button>
              <button onClick={() => setGameState('menu')} className="w-full py-2.5 bg-white/5 text-white/60 font-bold text-sm rounded-xl hover:bg-white/10 transition-colors border border-white/10">
                {isGreek ? 'ΜΕΝΟΥ' : 'MENU'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
