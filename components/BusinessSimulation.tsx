
import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase, ArrowRight, ArrowLeft, Sparkles, Zap,
  Building2, Pizza, Shirt, Gamepad2, Heart, Music,
  Target, Users, Crown, TrendingUp, Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { backendAI } from '../services/backendApi';
import { useEconomy } from '../context/EconomyContext';
import FirstTimeTip, { useChildName } from './FirstTimeTip';

interface Props {
  lang: 'el' | 'en';
  addXp: (amount: number, id: string) => void;
  completedIds: string[];
}

const INDUSTRIES = [
  { id: 'tech', icon: Building2, el: 'Τεχνολογία', en: 'Technology', activeBorder: 'border-blue-500', activeBg: 'bg-blue-500/10', activeText: 'text-blue-400' },
  { id: 'food', icon: Pizza, el: 'Φαγητό', en: 'Food', activeBorder: 'border-orange-500', activeBg: 'bg-orange-500/10', activeText: 'text-orange-400' },
  { id: 'fashion', icon: Shirt, el: 'Μόδα', en: 'Fashion', activeBorder: 'border-pink-500', activeBg: 'bg-pink-500/10', activeText: 'text-pink-400' },
  { id: 'games', icon: Gamepad2, el: 'Παιχνίδια', en: 'Games', activeBorder: 'border-purple-500', activeBg: 'bg-purple-500/10', activeText: 'text-purple-400' },
  { id: 'health', icon: Heart, el: 'Υγεία', en: 'Health', activeBorder: 'border-emerald-500', activeBg: 'bg-emerald-500/10', activeText: 'text-emerald-400' },
  { id: 'music', icon: Music, el: 'Μουσική', en: 'Music', activeBorder: 'border-rose-500', activeBg: 'bg-rose-500/10', activeText: 'text-rose-400' },
];

const PRICING = [
  { id: 'low', el: 'Χαμηλή Τιμή', en: 'Low Price', desc_el: 'Πολλοί πελάτες, λίγο κέρδος', desc_en: 'Many customers, low profit' },
  { id: 'mid', el: 'Μεσαία Τιμή', en: 'Mid Price', desc_el: 'Ισορροπία κέρδους-πελατών', desc_en: 'Balance of profit and customers' },
  { id: 'premium', el: 'Premium', en: 'Premium', desc_el: 'Λίγοι πελάτες, μεγάλο κέρδος', desc_en: 'Few customers, high profit' },
];

const TARGETS = [
  { id: 'kids', el: 'Παιδιά', en: 'Kids', icon: Gamepad2 },
  { id: 'adults', el: 'Ενήλικες', en: 'Adults', icon: Briefcase },
  { id: 'everyone', el: 'Όλοι', en: 'Everyone', icon: Users },
];

const BusinessSimulation: React.FC<Props> = ({ lang, addXp, completedIds }) => {
  const childName = useChildName(lang);
  const navigate = useNavigate();
  const { credits, spendCredits, trackAction, showNotification, costs } = useEconomy();
  const [step, setStep] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const [resultLogo, setResultLogo] = useState('');
  const [resultSlogan, setResultSlogan] = useState('');
  const [resultDesc, setResultDesc] = useState('');
  const bizSavedRef = useRef(false);

  const [biz, setBiz] = useState({
    industry: '',
    name: '',
    product: '',
    pricing: '',
    target: '',
  });

  const COST = costs.business;

  // Step definitions
  const steps = [
    {
      badge: lang === 'el' ? 'ΒΗΜΑ 1' : 'STEP 1',
      title: lang === 'el' ? 'ΤΙ ΕΤΑΙΡΕΙΑ ΘΕΛΕΙΣ;' : 'WHAT KIND OF COMPANY?',
      desc: lang === 'el' ? 'Διάλεξε τον κλάδο και δώσε όνομα στην εταιρεία σου.' : 'Pick your industry and name your company.',
    },
    {
      badge: lang === 'el' ? 'ΒΗΜΑ 2' : 'STEP 2',
      title: lang === 'el' ? 'ΤΙ ΠΟΥΛΑΣ;' : 'WHAT DO YOU SELL?',
      desc: lang === 'el' ? 'Περίγραψε το προϊόν ή την υπηρεσία σου.' : 'Describe your product or service.',
    },
    {
      badge: lang === 'el' ? 'ΒΗΜΑ 3' : 'STEP 3',
      title: lang === 'el' ? 'ΣΤΡΑΤΗΓΙΚΗ' : 'STRATEGY',
      desc: lang === 'el' ? 'Διάλεξε τιμολόγηση και κοινό-στόχο.' : 'Choose pricing and target audience.',
    },
    {
      badge: lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΑ' : 'CREATING',
      title: lang === 'el' ? 'ΤΟ AI ΔΟΥΛΕΥΕΙ...' : 'AI IS WORKING...',
      desc: loadingText,
    },
    {
      badge: lang === 'el' ? 'ΕΤΟΙΜΟ!' : 'READY!',
      title: biz.name || 'YOUR COMPANY',
      desc: lang === 'el' ? 'Η εταιρεία σου είναι έτοιμη!' : 'Your company is ready!',
    },
  ];

  // AI Generation on step 3
  useEffect(() => {
    if (step === 3) {
      const loadingSeq = [
        { text: lang === 'el' ? '📋 Αναλύουμε την αγορά...' : '📋 Analyzing the market...', delay: 0 },
        { text: lang === 'el' ? '🎨 Σχεδιάζουμε το λογότυπο...' : '🎨 Designing the logo...', delay: 2000 },
        { text: lang === 'el' ? '📝 Γράφουμε το slogan...' : '📝 Writing the slogan...', delay: 4000 },
        { text: lang === 'el' ? '🚀 Ετοιμάζουμε τα πάντα...' : '🚀 Preparing everything...', delay: 6000 },
      ];

      const timeoutIds: NodeJS.Timeout[] = [];
      loadingSeq.forEach(({ text, delay }) => {
        timeoutIds.push(setTimeout(() => setLoadingText(text), delay));
      });

      const startedAt = Date.now();
      const generateBusiness = async () => {
        try {
          const industryName = INDUSTRIES.find(i => i.id === biz.industry)?.[lang === 'el' ? 'el' : 'en'] || biz.industry;

          const textPrompt = `${industryName} company "${biz.name}" sells ${biz.product}, pricing: ${biz.pricing}, target: ${biz.target}`;
          const logoPrompt = `Modern minimalist logo for ${industryName} company "${biz.name}". Clean, professional, vibrant, flat design, dark background. No text.`;

          // Use backend API (never expose API keys client-side)
          const result = await backendAI.business(textPrompt, logoPrompt);

          if (result.slogan) setResultSlogan(result.slogan);
          if (result.description) setResultDesc(result.description);
          if (result.logo) setResultLogo(result.logo);
        } catch (error) {
          console.error("Business generation failed:", error);
          setResultSlogan(lang === 'el' ? 'Η καλύτερη εταιρεία!' : 'The best company!');
          setResultDesc(lang === 'el' ? 'Μια φανταστική επιχείρηση που θα αλλάξει τον κόσμο.' : 'An amazing business that will change the world.');
        } finally {
          // Advance when generation actually finishes — min 6s on screen so
          // the loading sequence doesn't flash by
          const wait = Math.max(0, 6000 - (Date.now() - startedAt));
          timeoutIds.push(setTimeout(() => setStep(4), wait));
        }
      };

      generateBusiness();

      // Safety net only — fires if the API hangs past the function timeout
      const finishId = setTimeout(() => setStep(4), 45000);
      timeoutIds.push(finishId);

      return () => timeoutIds.forEach(clearTimeout);
    }
    // The biz.* values are listed as primitives, never as the `biz` object: by the time
    // step reaches 3 the child can no longer edit them, so they are effectively frozen
    // and cannot re-trigger this paid generation. Depending on `biz` itself would —
    // that object-identity shape is bugs B2/B4 in AUDIT-BUGS.md.
  }, [step, biz.industry, biz.name, biz.pricing, biz.product, biz.target, lang]);

  // Save business on final step
  useEffect(() => {
    if (step === 4 && resultLogo) {
      const bizId = `business-${Date.now()}`;
      if (!bizSavedRef.current) {
        bizSavedRef.current = true;
        trackAction('CREATE_BUSINESS');
        addXp(50, bizId);

        // Save to localStorage collection
        let saved: any[] = [];
        try { saved = JSON.parse(localStorage.getItem('wb_businesses') || '[]'); } catch { /* corrupted data, use default */ }
        saved.push({
          id: bizId,
          name: biz.name,
          industry: biz.industry,
          product: biz.product,
          pricing: biz.pricing,
          target: biz.target,
          logo: resultLogo,
          slogan: resultSlogan,
          desc: resultDesc,
          createdAt: Date.now(),
        });
        localStorage.setItem('wb_businesses', JSON.stringify(saved));
      }
    }
    // Safe to list everything: `bizSavedRef` makes the body run at most once, so extra
    // renders cannot save a second business. Including the biz.* values also removes the
    // stale-closure risk — the saved record now matches what the child actually built.
  }, [step, resultLogo, addXp, biz.industry, biz.name, biz.pricing, biz.product, biz.target, resultDesc, resultSlogan, trackAction]);

  const canProceed = () => {
    if (step === 0) return biz.industry && biz.name.trim().length >= 2;
    if (step === 1) return biz.product.trim().length >= 5;
    if (step === 2) return biz.pricing && biz.target;
    return false;
  };

  const handleNext = () => {
    if (step === 2) {
      if (!spendCredits(COST)) {
        showNotification('💰', lang === 'el' ? `Χρειάζεσαι ${COST} Credits!` : `You need ${COST} Credits!`);
        setTimeout(() => navigate('/store'), 1500);
        return;
      }
    }
    setStep(s => s + 1);
  };

  const handleReset = () => {
    bizSavedRef.current = false;
    setStep(0);
    setBiz({ industry: '', name: '', product: '', pricing: '', target: '' });
    setResultLogo('');
    setResultSlogan('');
    setResultDesc('');
  };

  return (
    <div className="pb-32 px-4 max-w-4xl mx-auto animate-in fade-in duration-700 space-y-8">
      <FirstTimeTip id="business" lang={lang} text={lang === 'el'
        ? <>🦉 Εδώ γίνεσαι αφεντικό, {childName}. Διάλεξε τι πουλάς, βάλε όνομα, φτιάξε λογότυπο — και η εταιρεία σου είναι αληθινή. Κοστίζει 4⚡.</>
        : <>🦉 Here you're the boss, {childName}. Choose what you sell, name it, design a logo — and your company is real. It costs 4⚡.</>} />

      {/* Header */}
      <header className="pt-6 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 border border-green-500/30 text-green-300">
          <Briefcase size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            {lang === 'el' ? 'ΕΠΙΧΕΙΡΗΜΑΤΙΚΗ ΕΞΟΜΟΙΩΣΗ' : 'BUSINESS SIMULATION'}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-[1000] text-white italic tracking-tighter uppercase leading-none">
          {steps[step]?.title}
        </h1>
        <p className="text-white/50 font-bold text-sm max-w-xl mx-auto">
          {steps[step]?.desc}
        </p>
      </header>

      {/* Step Progress */}
      {step < 3 && (
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map(i => (
            <div key={i} className={`h-2 rounded-full transition-all duration-500 ${
              i === step ? 'w-12 bg-green-500' : i < step ? 'w-8 bg-green-500/50' : 'w-8 bg-white/10'
            }`} />
          ))}
        </div>
      )}

      {/* STEP 0: Industry + Name */}
      {step === 0 && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {INDUSTRIES.map(ind => (
              <button
                key={ind.id}
                onClick={() => setBiz(b => ({ ...b, industry: ind.id }))}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3 cursor-pointer ${
                  biz.industry === ind.id
                    ? `${ind.activeBorder} ${ind.activeBg} scale-105`
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <ind.icon size={32} className={biz.industry === ind.id ? ind.activeText : 'text-white/60'} />
                <span className="text-sm font-bold text-white">{lang === 'el' ? ind.el : ind.en}</span>
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2 block">
              {lang === 'el' ? 'ΟΝΟΜΑ ΕΤΑΙΡΕΙΑΣ' : 'COMPANY NAME'}
            </label>
            <input
              type="text"
              value={biz.name}
              onChange={e => setBiz(b => ({ ...b, name: e.target.value }))}
              placeholder={lang === 'el' ? 'π.χ. WiseGames, FoodMaster...' : 'e.g. WiseGames, FoodMaster...'}
              className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 text-white font-bold text-lg placeholder:text-white/20 focus:outline-none focus:border-green-500/50 transition-colors"
              maxLength={30}
            />
          </div>
        </div>
      )}

      {/* STEP 1: Product Description */}
      {step === 1 && (
        <div className="max-w-lg mx-auto space-y-4">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2 block">
            {lang === 'el' ? 'ΠΕΡΙΓΡΑΨΕ ΤΟ ΠΡΟΪΟΝ ΣΟΥ' : 'DESCRIBE YOUR PRODUCT'}
          </label>
          <textarea
            value={biz.product}
            onChange={e => setBiz(b => ({ ...b, product: e.target.value }))}
            placeholder={lang === 'el'
              ? 'Τι πουλάει η εταιρεία σου; Π.χ. "Ένα app που μαθαίνει στα παιδιά μαθηματικά μέσα από παιχνίδια"'
              : 'What does your company sell? E.g. "An app that teaches kids math through games"'
            }
            className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 text-white font-bold placeholder:text-white/20 focus:outline-none focus:border-green-500/50 transition-colors min-h-[140px] resize-none"
            maxLength={200}
          />
          <p className="text-right text-white/30 text-xs font-bold">{biz.product.length}/200</p>
        </div>
      )}

      {/* STEP 2: Strategy */}
      {step === 2 && (
        <div className="space-y-8 max-w-lg mx-auto">
          {/* Pricing */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 block">
              {lang === 'el' ? 'ΤΙΜΟΛΟΓΗΣΗ' : 'PRICING'}
            </label>
            <div className="space-y-3">
              {PRICING.map(p => (
                <button
                  key={p.id}
                  onClick={() => setBiz(b => ({ ...b, pricing: p.id }))}
                  className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                    biz.pricing === p.id
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <span className="font-bold text-white">{lang === 'el' ? p.el : p.en}</span>
                  <span className="text-xs text-white/40">{lang === 'el' ? p.desc_el : p.desc_en}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Target */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 block">
              {lang === 'el' ? 'ΚΟΙΝΟ-ΣΤΟΧΟΣ' : 'TARGET AUDIENCE'}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {TARGETS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setBiz(b => ({ ...b, target: t.id }))}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 cursor-pointer ${
                    biz.target === t.id
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <t.icon size={24} className={biz.target === t.id ? 'text-green-400' : 'text-white/50'} />
                  <span className="text-xs font-bold text-white">{lang === 'el' ? t.el : t.en}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cost notice */}
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
            <Zap size={14} className="text-amber-400 fill-current" />
            <span className="font-bold">{lang === 'el' ? `⚡ ${COST} Credits για δημιουργία!` : `⚡ ${COST} Credits to create!`}</span>
          </div>
        </div>
      )}

      {/* STEP 3: Loading */}
      {step === 3 && (
        <div className="flex flex-col items-center justify-center py-16 space-y-8">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center animate-pulse shadow-[0_0_60px_rgba(16,185,129,0.3)]">
            <Sparkles size={48} className="text-white animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <p className="text-white/60 font-bold text-lg animate-pulse">{loadingText}</p>
        </div>
      )}

      {/* STEP 4: Results */}
      {step === 4 && (
        <div className="space-y-8">
          {/* Company Card */}
          <div className="bg-gradient-to-br from-[#0B0F1A] to-[#0F1B2D] rounded-[2rem] border-2 border-green-500/20 overflow-hidden shadow-2xl">
            {/* Logo */}
            <div className="flex justify-center py-8 bg-gradient-to-b from-green-500/5 to-transparent">
              {resultLogo ? (
                <img src={resultLogo} alt="Logo" className="w-40 h-40 rounded-3xl object-cover shadow-xl border-2 border-white/10" />
              ) : (
                <div className="w-40 h-40 rounded-3xl bg-green-500/10 flex items-center justify-center border-2 border-white/10">
                  <Briefcase size={64} className="text-green-400/50" />
                </div>
              )}
            </div>

            <div className="px-8 pb-8 space-y-4 text-center">
              <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter">{biz.name}</h2>

              {resultSlogan && (
                <p className="text-green-400 font-black text-sm uppercase tracking-widest">"{resultSlogan}"</p>
              )}

              {resultDesc && (
                <p className="text-white/60 font-bold text-sm max-w-md mx-auto leading-relaxed">{resultDesc}</p>
              )}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 mt-6">
                <div className="text-center">
                  <Target size={20} className="text-blue-400 mx-auto mb-1" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40">
                    {lang === 'el' ? 'ΚΛΑΔΟΣ' : 'INDUSTRY'}
                  </p>
                  <p className="text-white font-bold text-sm">
                    {INDUSTRIES.find(i => i.id === biz.industry)?.[lang === 'el' ? 'el' : 'en']}
                  </p>
                </div>
                <div className="text-center">
                  <Crown size={20} className="text-amber-400 mx-auto mb-1" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40">
                    {lang === 'el' ? 'ΤΙΜΟΛΟΓΗΣΗ' : 'PRICING'}
                  </p>
                  <p className="text-white font-bold text-sm">
                    {PRICING.find(p => p.id === biz.pricing)?.[lang === 'el' ? 'el' : 'en']}
                  </p>
                </div>
                <div className="text-center">
                  <Users size={20} className="text-purple-400 mx-auto mb-1" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40">
                    {lang === 'el' ? 'ΚΟΙΝΟ' : 'AUDIENCE'}
                  </p>
                  <p className="text-white font-bold text-sm">
                    {TARGETS.find(t => t.id === biz.target)?.[lang === 'el' ? 'el' : 'en']}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reward */}
          <div className="flex items-center justify-center gap-3 py-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <TrendingUp size={20} className="text-green-400" />
            <span className="text-green-300 font-black text-sm">
              {lang === 'el' ? 'ΚΕΡΔΙΣΕΣ +3 CREDITS & +50 XP!' : 'YOU EARNED +3 CREDITS & +50 XP!'}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            {resultLogo && (
              <a
                href={resultLogo}
                download={`${biz.name}-logo.png`}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Download size={16} />
                {lang === 'el' ? 'Κατέβασε Logo' : 'Download Logo'}
              </a>
            )}
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black uppercase tracking-wider hover:scale-105 transition-transform cursor-pointer"
            >
              {lang === 'el' ? 'ΝΕΑ ΕΤΑΙΡΕΙΑ' : 'NEW COMPANY'}
            </button>
          </div>
        </div>
      )}

      {/* Navigation Buttons (Steps 0-2) */}
      {step < 3 && (
        <div className="flex items-center justify-between max-w-lg mx-auto pt-4">
          <button
            onClick={() => step > 0 && setStep(s => s - 1)}
            className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all cursor-pointer ${
              step > 0 ? 'bg-white/10 text-white hover:bg-white/15' : 'opacity-0 pointer-events-none'
            }`}
          >
            <ArrowLeft size={16} />
            {lang === 'el' ? 'Πίσω' : 'Back'}
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`px-8 py-3 rounded-xl font-black uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              canProceed()
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105'
                : 'bg-white/5 text-white/20 cursor-not-allowed'
            }`}
          >
            {step === 2 ? (lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΑ' : 'CREATE') : (lang === 'el' ? 'Επόμενο' : 'Next')}
            <ArrowRight size={16} />
          </button>
        </div>
      )}

    </div>
  );
};

export default BusinessSimulation;
