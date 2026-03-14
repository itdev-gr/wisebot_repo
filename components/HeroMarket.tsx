
import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Tag, 
  TrendingUp, 
  Search, 
  Filter, 
  Zap, 
  CheckCircle, 
  Store, 
  Gift, 
  Box, 
  Printer, 
  Lock,
  ArrowRight,
  User,
  Star
} from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';
import { useNavigate } from 'react-router-dom';

const motion = m as any;

interface HeroMarketProps {
  lang: 'el' | 'en';
  myHeroes: any[];
}

// MOCK DATA FOR "OTHER KIDS" HEROES
const MARKET_HEROES = [
  { id: 'm1', name: 'Cyber Dragon', creator: 'Nick_99', price: 15, image: '/images/crocus.jpg', rarity: 'Rare', sold: false },
  { id: 'm2', name: 'Aqua Girl', creator: 'Elena_K', price: 10, image: '/images/wisebot.jpg', rarity: 'Common', sold: false },
  { id: 'm3', name: 'Space Dog', creator: 'Max_Power', price: 25, image: '/images/pencilo.jpg', rarity: 'Epic', sold: false },
  { id: 'm4', name: 'Forest Spirit', creator: 'Anna_Tree', price: 12, image: '/images/link.jpg', rarity: 'Common', sold: false },
  { id: 'm5', name: 'Iron Bear', creator: 'Geo_Iron', price: 30, image: '/images/sparken.jpg', rarity: 'Legendary', sold: false },
  { id: 'm6', name: 'Pixel Ninja', creator: 'Code_Kid', price: 18, image: '/images/wisebot.jpg', rarity: 'Rare', sold: false },
];

const REDEEM_ITEMS = [
  { id: 'r1', title: { el: 'Εκπτωτικό Κουπόνι 3D', en: '3D Print Coupon' }, cost: 100, icon: Printer, desc: { el: '-20% στην επόμενη παραγγελία', en: '-20% on next order' } },
  { id: 'r2', title: { el: 'Mystery Box', en: 'Mystery Box' }, cost: 50, icon: Box, desc: { el: 'Τυχαία ψηφιακά δώρα', en: 'Random digital gifts' } },
  { id: 'r3', title: { el: 'Master Class', en: 'Master Class' }, cost: 200, icon: Star, desc: { el: 'Μάθημα με Expert', en: 'Lesson with Expert' } },
];

export default function HeroMarket({ lang, myHeroes }: HeroMarketProps) {
  const navigate = useNavigate();
  const { credits, spendCredits, earnCredits, trackAction, stats } = useEconomy();
  const [activeTab, setActiveTab] = useState<'buy' | 'sell' | 'redeem'>('buy');
  const [marketItems, setMarketItems] = useState(MARKET_HEROES);
  const [sellingIds, setSellingIds] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // Texts
  const t = {
    tabs: {
      buy: lang === 'el' ? 'ΑΓΟΡΑ ΗΡΩΩΝ' : 'BUY HEROES',
      sell: lang === 'el' ? 'ΤΟ ΜΑΓΑΖΙ ΜΟΥ' : 'MY SHOP',
      redeem: lang === 'el' ? 'ΕΞΑΡΓΥΡΩΣΗ' : 'REDEEM'
    },
    buy: {
      title: lang === 'el' ? 'Ανακάλυψε Ήρωες' : 'Discover Heroes',
      sub: lang === 'el' ? 'Μοναδικές δημιουργίες από άλλους μαθητές.' : 'Unique creations by other students.',
      buyBtn: lang === 'el' ? 'ΑΓΟΡΑ' : 'BUY',
      owned: lang === 'el' ? 'ΤΟ ΕΧΕΙΣ' : 'OWNED'
    },
    sell: {
      title: lang === 'el' ? 'Πούλα τους Ήρωές σου' : 'Sell Your Heroes',
      sub: lang === 'el' ? 'Ανέβασε τις δημιουργίες σου και κέρδισε Credits.' : 'Upload your creations and earn Credits.',
      listBtn: lang === 'el' ? 'ΠΩΛΗΣΗ (+20⚡)' : 'SELL (+20⚡)',
      empty: lang === 'el' ? 'Δεν έχεις φτιάξει ήρωες ακόμα!' : 'You haven\'t created any heroes yet!',
      createBtn: lang === 'el' ? 'ΦΤΙΑΞΕ ΤΩΡΑ' : 'CREATE NOW'
    },
    redeem: {
      title: lang === 'el' ? 'Τα Κέρδη σου' : 'Your Earnings',
      sub: lang === 'el' ? 'Μετάτρεψε τα Credits σε αληθινά δώρα.' : 'Turn Credits into real rewards.',
      getBtn: lang === 'el' ? 'ΑΠΟΚΤΗΣΗ' : 'GET IT'
    }
  };

  const handleBuy = (item: any) => {
    if (item.sold) return;
    if (spendCredits(item.price)) {
      setMarketItems(prev => prev.map(i => i.id === item.id ? { ...i, sold: true } : i));
      showNotification(lang === 'el' ? `Αγόρασες τον ${item.name}!` : `You bought ${item.name}!`);
    } else {
      alert(lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
    }
  };

  const handleSell = (hero: any) => {
    if (sellingIds.includes(hero.id)) return;
    
    // Simulate selling process
    setSellingIds(prev => [...prev, hero.id]);
    
    // Fake delay for "Market processing"
    setTimeout(() => {
        earnCredits(20); // Flat rate for now
        trackAction('UPLOAD_HERO'); // Updates economy stats
        showNotification(lang === 'el' ? `Ο ήρωας ${hero.name} ΠΩΛΗΘΗΚΕ! (+20 Credits)` : `Hero ${hero.name} SOLD! (+20 Credits)`);
    }, 1500);
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 pb-32 min-h-screen relative">
      
      {/* NOTIFICATION TOAST */}
      <AnimatePresence>
        {notification && (
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -50 }}
                className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white px-6 py-3 rounded-full font-black shadow-2xl flex items-center gap-2 border-2 border-white/20"
            >
                <CheckCircle size={20} /> {notification}
            </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1 rounded-full mb-2">
                <Store size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">WISEBOT MARKETPLACE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                HERO <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">MARKET</span>
            </h1>
        </div>

        {/* BALANCE CARD */}
        <div className="bg-gradient-to-r from-slate-900 to-black border border-white/10 p-6 rounded-3xl flex items-center gap-6 shadow-xl">
            <div className="text-right">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">BALANCE</p>
                <p className="text-3xl font-[1000] text-amber-400 italic">{credits} ⚡</p>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="text-right">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">{lang === 'el' ? 'ΠΩΛΗΣΕΙΣ' : 'SALES'}</p>
                <p className="text-3xl font-[1000] text-emerald-400 italic">{stats.heroesUploaded}</p>
            </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center mb-10">
        <div className="bg-white/5 p-2 rounded-2xl flex gap-2 border border-white/10 overflow-x-auto max-w-full">
            {[
                { id: 'buy', icon: ShoppingBag, label: t.tabs.buy, color: 'blue' },
                { id: 'sell', icon: Tag, label: t.tabs.sell, color: 'emerald' },
                { id: 'redeem', icon: Gift, label: t.tabs.redeem, color: 'purple' },
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase tracking-wider text-xs transition-all ${
                        activeTab === tab.id 
                        ? `bg-${tab.color}-500 text-white shadow-lg` 
                        : 'text-white/40 hover:text-white hover:bg-white/5'
                    }`}
                >
                    <tab.icon size={16} /> {tab.label}
                </button>
            ))}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="min-h-[400px]">
        
        {/* BUY TAB */}
        {activeTab === 'buy' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                        <h3 className="text-2xl font-[1000] text-white uppercase italic">{t.buy.title}</h3>
                        <p className="text-white/40 text-sm font-bold">{t.buy.sub}</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 bg-white/5 rounded-lg text-white/60 hover:text-white"><Filter size={20}/></button>
                        <button className="p-2 bg-white/5 rounded-lg text-white/60 hover:text-white"><Search size={20}/></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {marketItems.map((item) => (
                        <div key={item.id} className="bg-[#0f1014] border border-white/10 rounded-[2rem] overflow-hidden group hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
                            <div className="aspect-square relative overflow-hidden bg-gray-800">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black uppercase text-white border border-white/10">
                                    {item.rarity}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-lg font-[1000] text-white uppercase italic">{item.name}</h4>
                                    <div className="text-amber-400 font-black text-lg flex items-center gap-1">
                                        {item.price} <Zap size={14} fill="currentColor"/>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                                    <span className="text-white/40 text-xs font-bold">@{item.creator}</span>
                                </div>
                                <button 
                                    onClick={() => handleBuy(item)}
                                    disabled={item.sold}
                                    className={`w-full py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${
                                        item.sold 
                                        ? 'bg-white/10 text-white/30 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                                    }`}
                                >
                                    {item.sold ? t.buy.owned : t.buy.buyBtn}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        )}

        {/* SELL TAB */}
        {activeTab === 'sell' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                    <h3 className="text-2xl font-[1000] text-white uppercase italic">{t.sell.title}</h3>
                    <p className="text-white/40 text-sm font-bold">{t.sell.sub}</p>
                </div>

                {myHeroes.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-[3rem] border-2 border-dashed border-white/10">
                        <Tag size={48} className="text-white/20 mx-auto mb-4" />
                        <h4 className="text-xl font-black text-white mb-2">{t.sell.empty}</h4>
                        <button onClick={() => navigate('/factory')} className="mt-4 px-8 py-3 bg-white text-black rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                            {t.sell.createBtn}
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myHeroes.map((hero) => {
                            const isSold = sellingIds.includes(hero.id);
                            return (
                                <div key={hero.id} className={`bg-[#0f1014] border rounded-[2rem] p-4 flex gap-4 transition-all ${isSold ? 'border-emerald-500/50 bg-emerald-900/10' : 'border-white/10 hover:border-white/30'}`}>
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-800 shrink-0">
                                        <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <h4 className="text-lg font-[1000] text-white uppercase italic leading-none mb-1">{hero.name}</h4>
                                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{hero.role}</p>
                                        </div>
                                        {isSold ? (
                                            <div className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-widest">
                                                <CheckCircle size={14} /> {lang === 'el' ? 'ΠΩΛΗΘΗΚΕ' : 'SOLD'}
                                            </div>
                                        ) : (
                                            <button 
                                                onClick={() => handleSell(hero)}
                                                className="self-start px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2"
                                            >
                                                {t.sell.listBtn}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </motion.div>
        )}

        {/* REDEEM TAB */}
        {activeTab === 'redeem' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                    <h3 className="text-2xl font-[1000] text-white uppercase italic">{t.redeem.title}</h3>
                    <p className="text-white/40 text-sm font-bold">{t.redeem.sub}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {REDEEM_ITEMS.map((item) => (
                        <div key={item.id} className="relative group bg-gradient-to-br from-purple-900/20 to-slate-900/40 border border-white/10 rounded-[2.5rem] p-8 overflow-hidden hover:border-purple-500/50 transition-all">
                            <div className="absolute top-0 right-0 p-20 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-colors"></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center h-full">
                                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                                    <item.icon size={32} className="text-purple-300" />
                                </div>
                                <h4 className="text-xl font-[1000] text-white uppercase italic tracking-tighter mb-2">{item.title[lang]}</h4>
                                <p className="text-white/50 text-xs font-bold mb-8">{item.desc[lang]}</p>
                                
                                <button className="mt-auto w-full py-4 bg-white text-purple-900 rounded-2xl font-[1000] uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl">
                                    {item.cost} ⚡ {t.redeem.getBtn}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        )}

      </div>
    </div>
  );
}
