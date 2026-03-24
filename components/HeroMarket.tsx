
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

// Heroes created by WiseBot kids! Each hero was designed by a student.
const MARKET_HEROES = [
  { id: 'm1',  name: 'Leo the Brave',     creator: 'Αλέξανδρος_12',  price: 15, image: '/images/WiseBot_Hero_Leo.webp',        rarity: 'Rare',      sold: false },
  { id: 'm2',  name: 'Mario Jump',        creator: 'Μαρία_Κ',        price: 10, image: '/images/WiseBot_Hero_Mario.webp',      rarity: 'Common',    sold: false },
  { id: 'm3',  name: 'Elos Spirit',       creator: 'Νίκος_Gamer',    price: 18, image: '/images/WiseBot_Hero_elos.webp',       rarity: 'Rare',      sold: false },
  { id: 'm4',  name: 'Igu Blaze',         creator: 'Σοφία_Art',      price: 12, image: '/images/WiseBot_Hero_igu.webp',        rarity: 'Common',    sold: false },
  { id: 'm5',  name: 'Kagu Storm',        creator: 'Δημήτρης_Pro',   price: 25, image: '/images/WiseBot_Hero_kagu.webp',       rarity: 'Epic',      sold: false },
  { id: 'm6',  name: 'Captain Kefala',    creator: 'Ελένη_Star',     price: 14, image: '/images/WiseBot_Hero_kefala.webp',     rarity: 'Common',    sold: false },
  { id: 'm7',  name: 'Koxil Thunder',     creator: 'Γιώργος_99',     price: 20, image: '/images/WiseBot_Hero_koxil.webp',      rarity: 'Rare',      sold: false },
  { id: 'm8',  name: 'Let the Swift',     creator: 'Κατερίνα_Dev',   price: 10, image: '/images/WiseBot_Hero_let_.webp',       rarity: 'Common',    sold: false },
  { id: 'm9',  name: 'Lion Quin',         creator: 'Αντώνης_X',      price: 30, image: '/images/WiseBot_Hero_lion_quin.webp',  rarity: 'Legendary', sold: false },
  { id: 'm10', name: 'Zen Monk',          creator: 'Ιωάννα_Wise',    price: 16, image: '/images/WiseBot_Hero_monk.webp',       rarity: 'Rare',      sold: false },
  { id: 'm11', name: 'Monkey King',       creator: 'Πέτρος_Jungle',  price: 22, image: '/images/WiseBot_Hero_monkey.webp',     rarity: 'Epic',      sold: false },
  { id: 'm12', name: 'Muri Flash',        creator: 'Χριστίνα_C',     price: 11, image: '/images/WiseBot_Hero_muri.webp',       rarity: 'Common',    sold: false },
  { id: 'm13', name: 'Octa Wave',         creator: 'Στέφανος_Sea',   price: 28, image: '/images/WiseBot_Hero_octa.webp',       rarity: 'Epic',      sold: false },
  { id: 'm14', name: 'Ori Light',         creator: 'Ειρήνη_Luna',    price: 13, image: '/images/WiseBot_Hero_ori.webp',        rarity: 'Common',    sold: false },
  { id: 'm15', name: 'Pike Warrior',      creator: 'Μιχάλης_M',      price: 19, image: '/images/WiseBot_Hero_pike.webp',       rarity: 'Rare',      sold: false },
  { id: 'm16', name: 'Pirc Shadow',       creator: 'Θεοδώρα_Dark',   price: 17, image: '/images/WiseBot_Hero_pirc.webp',       rarity: 'Rare',      sold: false },
  { id: 'm17', name: 'Rakos Fire',        creator: 'Λεωνίδας_Lava',  price: 35, image: '/images/WiseBot_Hero_rakos_.webp',     rarity: 'Legendary', sold: false },
  { id: 'm18', name: 'Rubi Crystal',      creator: 'Αθηνά_Gem',      price: 24, image: '/images/WiseBot_Hero_rubi.webp',       rarity: 'Epic',      sold: false },
  { id: 'm19', name: 'Skuiz Turbo',       creator: 'Βασίλης_Zoom',   price: 15, image: '/images/WiseBot_Hero_skuiz.webp',      rarity: 'Rare',      sold: false },
  { id: 'm20', name: 'Snake Venom',       creator: 'Δάφνη_Green',    price: 21, image: '/images/WiseBot_Hero_snake.webp',      rarity: 'Epic',      sold: false },
  { id: 'm21', name: 'Sniki Stealth',     creator: 'Κώστας_Ninja',   price: 26, image: '/images/WiseBot_Hero_sniki.webp',      rarity: 'Epic',      sold: false },
  { id: 'm22', name: 'Sniki Gold',        creator: 'Φίλιππος_F',     price: 32, image: '/images/WiseBot_Hero_sniki-2.webp',    rarity: 'Legendary', sold: false },
  { id: 'm23', name: 'Spark Nova',        creator: 'Ελευθερία_E',    price: 14, image: '/images/WiseBot_Hero_spark.webp',      rarity: 'Common',    sold: false },
  { id: 'm24', name: 'Tiger Fang',        creator: 'Νικόλας_Tiger',  price: 27, image: '/images/WiseBot_Hero_tiger.webp',      rarity: 'Epic',      sold: false },
  { id: 'm25', name: 'Ερίκ ο Δυνατός',   creator: 'Μαριάννα_V',     price: 20, image: '/images/WiseBot_Hero_ερικ.webp',       rarity: 'Rare',      sold: false },
  { id: 'm26', name: 'Καμίλ ο Σοφός',    creator: 'Παναγιώτης_P',   price: 33, image: '/images/WiseBot_Hero_καμιλ.webp',      rarity: 'Legendary', sold: false },
  // New community characters
  { id: 'm27', name: 'Bunny Hero',        creator: 'Μαρία_8',        price: 12, image: '/images/bunny.jpg',       rarity: 'Common',    sold: false },
  { id: 'm28', name: 'Sky Pilot',         creator: 'Γιάννης_11',     price: 22, image: '/images/pilot.jpg',       rarity: 'Epic',      sold: false },
  { id: 'm29', name: 'Drake Storm',       creator: 'Νίκος_10',       price: 28, image: '/images/drake.jpg',       rarity: 'Epic',      sold: false },
  { id: 'm30', name: 'Dolphi Wave',       creator: 'Ελένη_9',        price: 16, image: '/images/dolphi.jpg',      rarity: 'Rare',      sold: false },
  { id: 'm31', name: 'Panda Zen',         creator: 'Αλέξης_7',       price: 18, image: '/images/panda.jpg',       rarity: 'Rare',      sold: false },
  { id: 'm32', name: 'Fly Ace',           creator: 'Σοφία_12',       price: 15, image: '/images/fly.jpg',         rarity: 'Common',    sold: false },
  { id: 'm33', name: 'Golden Knight',     creator: 'Δημήτρης_10',    price: 30, image: '/images/golde.jpg',       rarity: 'Legendary', sold: false },
  { id: 'm34', name: 'Sharki Fang',       creator: 'Κατερίνα_11',    price: 25, image: '/images/sharki.jpg',      rarity: 'Epic',      sold: false },
  { id: 'm35', name: 'Donkey Power',      creator: 'Παναγιώτης_8',   price: 10, image: '/images/donkey.jpg',      rarity: 'Common',    sold: false },
  { id: 'm36', name: 'Ratti Ninja',       creator: 'Χριστίνα_9',     price: 14, image: '/images/ratti.jpg',       rarity: 'Rare',      sold: false },
  { id: 'm37', name: 'Montzi Beat',       creator: 'Στέφανος_12',    price: 19, image: '/images/montzi.jpg',      rarity: 'Rare',      sold: false },
  { id: 'm38', name: 'Octa Splash',       creator: 'Αναστασία_10',   price: 26, image: '/images/octapus.jpg',     rarity: 'Epic',      sold: false },
  { id: 'm39', name: 'Tauru Charge',      creator: 'Μιχάλης_11',     price: 24, image: '/images/tauru.jpg',       rarity: 'Epic',      sold: false },
  { id: 'm40', name: 'Piguin Ice',        creator: 'Ειρήνη_7',       price: 11, image: '/images/piguin.jpg',      rarity: 'Common',    sold: false },
  { id: 'm41', name: 'Skoti Shadow',      creator: 'Βασίλης_13',     price: 20, image: '/images/skoti.jpg',       rarity: 'Rare',      sold: false },
  { id: 'm42', name: 'Hamel Guard',       creator: 'Ελευθερία_9',    price: 13, image: '/images/hamel.jpg',       rarity: 'Common',    sold: false },
  { id: 'm43', name: 'Buty Spark',        creator: 'Γεωργία_8',      price: 17, image: '/images/buty.jpg',        rarity: 'Rare',      sold: false },
  { id: 'm44', name: 'Ku Ku Bird',        creator: 'Θανάσης_10',     price: 15, image: '/images/ku ku.jpg',       rarity: 'Common',    sold: false },
];

const REDEEM_ITEMS = [
  {
    id: 'r1',
    title: { el: '🖨️ 3D Εκτύπωση Ήρωα', en: '🖨️ 3D Print Your Hero' },
    cost: 600,
    icon: Printer,
    desc: {
      el: 'Εκτύπωσε τον ήρωά σου σε 3D! Πάρε υποστήριξη από τους πραγματικούς ήρωες του παιχνιδιού.',
      en: 'Print your hero in 3D! Get support from the real game heroes.'
    },
    color: 'from-cyan-500 to-blue-600',
    highlight: { el: '≈ 30€ αξία', en: '≈ €30 value' },
  },
  {
    id: 'r2',
    title: { el: '🎁 Mystery Box', en: '🎁 Mystery Box' },
    cost: 50,
    icon: Box,
    desc: {
      el: 'Τυχαίο ψηφιακό δώρο! 1 δωρεάν εικόνα, video credits, 3 τραγούδια, ή bonus credits!',
      en: 'Random digital gift! 1 free image, video credits, 3 songs, or bonus credits!'
    },
    color: 'from-fuchsia-500 to-purple-600',
    highlight: { el: 'ΤΥΧΗ!', en: 'LUCK!' },
  },
  {
    id: 'r3',
    title: { el: '🏆 Expert Plan', en: '🏆 Expert Plan' },
    cost: 1000,
    icon: Star,
    desc: {
      el: 'Σε βοηθάμε να βρεις φανταστικές ιδέες! Πες μας το δικό σου παιχνίδι ή ιστορία και θα τα προσθέσουμε στο WiseBot Academy!',
      en: 'We help you find fantastic ideas! Tell us your game or story and we\'ll add it to WiseBot Academy!'
    },
    color: 'from-amber-500 to-orange-600',
    highlight: { el: 'VIP', en: 'VIP' },
  },
];

export default function HeroMarket({ lang, myHeroes }: HeroMarketProps) {
  const navigate = useNavigate();
  const { credits, spendCredits, earnCredits, trackAction, stats, showNotification, badges } = useEconomy();
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
      title: lang === 'el' ? 'Βάλε Αγγελία' : 'List for Sale',
      sub: lang === 'el' ? 'Ανέβασε τους ήρωες στην Αγορά! Κάθε παιδί που αγοράζει = εσύ κερδίζεις Credits! 🚀' : 'List heroes in the Market! Every kid that buys = you earn Credits! 🚀',
      listBtn: lang === 'el' ? '📢 ΑΝΑΡΤΗΣΗ ΣΤΗΝ ΑΓΟΡΑ' : '📢 LIST ON MARKET',
      listed: lang === 'el' ? '✅ ΣΤΗΝ ΑΓΟΡΑ' : '✅ LISTED',
      empty: lang === 'el' ? 'Δεν έχεις φτιάξει ήρωες ακόμα!' : 'You haven\'t created any heroes yet!',
      createBtn: lang === 'el' ? 'ΦΤΙΑΞΕ ΤΩΡΑ' : 'CREATE NOW',
      tip: lang === 'el' ? '💡 Η ίδια εικόνα μπορεί να αρέσει σε πολλά παιδιά! Κάθε αγορά = +15⚡ για εσένα!' : '💡 The same image can be loved by many kids! Each purchase = +15⚡ for you!',
      miniBusinessTitle: lang === 'el' ? '🏪 Η ΠΡΩΤΗ ΣΟΥ ΕΠΙΧΕΙΡΗΣΗ' : '🏪 YOUR FIRST BUSINESS',
      miniBusinessSub: lang === 'el' ? 'Φτιάξε ψηφιακά έργα τέχνης, ανέβασέ τα στην αγορά, και κέρδισε credits από άλλους μαθητές!' : 'Create digital artwork, list it on the market, and earn credits from other students!',
    },
    redeem: {
      title: lang === 'el' ? 'Τα Κέρδη σου' : 'Your Earnings',
      sub: lang === 'el' ? 'Μετάτρεψε τα Credits σε αληθινά δώρα.' : 'Turn Credits into real rewards.',
      getBtn: lang === 'el' ? 'ΑΠΟΚΤΗΣΗ' : 'GET IT'
    }
  };

  const showLocalNotif = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleBuy = async (item: any) => {
    if (item.sold) return;
    if (await spendCredits(item.price, 'CREATE_IMAGE')) {
      // For user listings: don't mark as sold (many kids can buy!)
      // For pre-made heroes: mark as sold (one-time)
      if (item.isUserListing) {
        // Give seller credits (simulated — same user gets them since no backend)
        earnCredits(item.price);
        showLocalNotif(lang === 'el'
          ? `🎉 Αγόρασες τον ${item.name}! Ο δημιουργός κέρδισε +${item.price}⚡`
          : `🎉 You bought ${item.name}! Creator earned +${item.price}⚡`);
        showNotification('💰', lang === 'el' ? `+${item.price}⚡ στον δημιουργό!` : `+${item.price}⚡ to creator!`);
      } else {
        setMarketItems(prev => prev.map(i => i.id === item.id ? { ...i, sold: true } : i));
        showLocalNotif(lang === 'el' ? `Αγόρασες τον ${item.name}!` : `You bought ${item.name}!`);
      }
    } else {
      showNotification('💰', lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
    }
  };

  const handleListOnMarket = (hero: any) => {
    if (sellingIds.includes(hero.id)) return;

    // Mark as listed
    setSellingIds(prev => [...prev, hero.id]);
    trackAction('UPLOAD_HERO');

    // Add hero to the marketplace (BUY tab) so other kids can buy it
    const price = 15; // default listing price
    const newMarketItem = {
      id: `user_${hero.id}_${Date.now()}`,
      name: hero.name || 'My Hero',
      creator: lang === 'el' ? 'Εσύ! ⭐' : 'You! ⭐',
      price,
      image: hero.image,
      rarity: 'Player Made' as string,
      sold: false,
      isUserListing: true,
    };
    setMarketItems(prev => [newMarketItem, ...prev]);

    setTimeout(() => {
        showLocalNotif(lang === 'el'
          ? `📢 ${hero.name || 'Ο ήρωάς σου'} ανέβηκε στην Αγορά! Πήγαινε στο "ΑΓΟΡΑ ΗΡΩΩΝ" να τον δεις!`
          : `📢 ${hero.name || 'Your hero'} is now on the Market! Go to "BUY HEROES" to see it!`);
        showNotification('📢', lang === 'el' ? 'Ο ήρωάς σου είναι στην Αγορά!' : 'Your hero is on the Market!');
    }, 800);
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
                { id: 'buy', icon: ShoppingBag, label: t.tabs.buy, activeClass: 'bg-blue-500 text-white shadow-lg' },
                { id: 'sell', icon: Tag, label: t.tabs.sell, activeClass: 'bg-emerald-500 text-white shadow-lg' },
                { id: 'redeem', icon: Gift, label: t.tabs.redeem, activeClass: 'bg-purple-500 text-white shadow-lg' },
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase tracking-wider text-xs transition-all ${
                        activeTab === tab.id
                        ? tab.activeClass
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
                    {marketItems.map((item) => {
                        const isUserMade = (item as any).isUserListing;
                        return (
                        <div key={item.id} className={`bg-[#0B0F1A] border rounded-[2rem] overflow-hidden group transition-all hover:-translate-y-1 hover:shadow-2xl ${
                          isUserMade ? 'border-emerald-500/30 hover:border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'border-white/10 hover:border-blue-500/50'
                        }`}>
                            <div className="aspect-square relative overflow-hidden bg-gray-800">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className={`absolute top-3 right-3 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black uppercase border ${
                                  isUserMade
                                    ? 'bg-emerald-500/80 text-white border-emerald-400/30'
                                    : 'bg-black/60 text-white border-white/10'
                                }`}>
                                    {isUserMade ? (lang === 'el' ? '⭐ ΜΑΘΗΤΗΣ' : '⭐ STUDENT') : item.rarity}
                                </div>
                                {isUserMade && (
                                  <div className="absolute top-3 left-3 bg-amber-500/90 text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-lg border border-amber-400/30">
                                    NEW!
                                  </div>
                                )}
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-lg font-[1000] text-white uppercase italic leading-tight">{item.name}</h4>
                                    <div className="text-amber-400 font-black text-lg flex items-center gap-1 shrink-0">
                                        {item.price} <Zap size={14} fill="currentColor"/>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className={`w-5 h-5 rounded-full ${isUserMade ? 'bg-gradient-to-br from-emerald-400 to-cyan-500' : 'bg-gradient-to-br from-blue-400 to-purple-500'}`}></div>
                                    <span className="text-white/40 text-xs font-bold">@{item.creator}</span>
                                </div>
                                {isUserMade && (
                                  <p className="text-emerald-400/60 text-[10px] font-bold mb-3 flex items-center gap-1">
                                    <TrendingUp size={10} /> {lang === 'el' ? 'Πολλά παιδιά μπορούν να αγοράσουν!' : 'Many kids can buy this!'}
                                  </p>
                                )}
                                <button
                                    onClick={() => handleBuy(item)}
                                    disabled={item.sold && !isUserMade}
                                    className={`w-full py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${
                                        item.sold && !isUserMade
                                        ? 'bg-white/10 text-white/30 cursor-not-allowed'
                                        : isUserMade
                                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white shadow-lg shadow-emerald-500/20 active:scale-95'
                                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg active:scale-95'
                                    }`}
                                >
                                    {item.sold && !isUserMade ? t.buy.owned : t.buy.buyBtn}
                                </button>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </motion.div>
        )}

        {/* SELL TAB */}
        {activeTab === 'sell' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                {/* Mini Business Banner */}
                <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-[2rem] p-6 border border-emerald-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10">
                        <h3 className="text-xl font-[1000] text-white uppercase italic">{t.sell.miniBusinessTitle}</h3>
                        <p className="text-white/50 text-sm font-bold mt-1 max-w-lg">{t.sell.miniBusinessSub}</p>
                        <div className="mt-3 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5">
                            <TrendingUp size={14} className="text-emerald-400" />
                            <span className="text-emerald-300 text-xs font-bold">{t.sell.tip}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-[1000] text-white uppercase italic">{t.sell.title}</h3>
                    <p className="text-white/40 text-sm font-bold">{t.sell.sub}</p>
                </div>

                {myHeroes.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-[3rem] border-2 border-dashed border-white/10">
                        <Tag size={48} className="text-white/20 mx-auto mb-4" />
                        <h4 className="text-xl font-black text-white mb-2">{t.sell.empty}</h4>
                        <p className="text-white/30 text-sm max-w-xs mx-auto mb-4">
                            {lang === 'el' ? 'Πήγαινε στο Hero Factory, φτιάξε ήρωες, και μετά ανέβασέ τους εδώ!' : 'Go to Hero Factory, create heroes, then list them here!'}
                        </p>
                        <button onClick={() => navigate('/factory')} className="mt-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-white/10">
                            {t.sell.createBtn}
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myHeroes.map((hero) => {
                            const isListed = sellingIds.includes(hero.id);
                            return (
                                <div key={hero.id} className={`bg-[#0B0F1A] border rounded-[2rem] overflow-hidden transition-all ${isListed ? 'border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'border-white/10 hover:border-emerald-500/30'}`}>
                                    <div className="aspect-square relative overflow-hidden bg-gray-800">
                                        <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                                        {isListed && (
                                            <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                                <Store size={10} /> {lang === 'el' ? 'ΣΤΗΝ ΑΓΟΡΑ' : 'ON MARKET'}
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <h4 className="text-lg font-[1000] text-white uppercase italic leading-none">{hero.name}</h4>
                                            <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{hero.role}</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        {isListed ? (
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between bg-emerald-500/10 rounded-xl px-4 py-2.5 border border-emerald-500/20">
                                                    <span className="text-emerald-300 text-xs font-bold">{t.sell.listed}</span>
                                                    <span className="text-emerald-400 text-xs font-[900]">15⚡ / {lang === 'el' ? 'αγορά' : 'sale'}</span>
                                                </div>
                                                <p className="text-white/30 text-[10px] text-center font-bold">
                                                    {lang === 'el' ? '🔄 Πολλά παιδιά μπορούν να αγοράσουν τον ίδιο ήρωα!' : '🔄 Many kids can buy the same hero!'}
                                                </p>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleListOnMarket(hero)}
                                                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-xl font-[900] uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-white/10"
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
                    {REDEEM_ITEMS.map((item) => {
                        const canAfford = credits >= item.cost;
                        return (
                        <div key={item.id} className="relative group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-7 overflow-hidden hover:border-white/20 transition-all">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-colors" />

                            {/* Highlight badge */}
                            <div className="absolute top-4 right-4">
                                <span className={`text-[9px] font-[900] uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r ${(item as any).color} text-white shadow-lg`}>
                                    {(item as any).highlight[lang]}
                                </span>
                            </div>

                            <div className="relative z-10 flex flex-col items-center text-center h-full">
                                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-5 border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                                    <item.icon size={32} className="text-purple-300" />
                                </div>
                                <h4 className="text-lg font-[1000] text-white uppercase italic tracking-tighter mb-2 leading-tight">{item.title[lang]}</h4>
                                <p className="text-white/50 text-xs font-bold mb-6 leading-relaxed">{item.desc[lang]}</p>

                                {/* Cost display */}
                                <div className="mb-4 flex items-center gap-2">
                                    <Zap size={18} className="text-amber-400 fill-current" />
                                    <span className="text-amber-400 font-[1000] text-2xl italic">{item.cost}</span>
                                    <span className="text-white/30 text-xs font-bold">Credits</span>
                                </div>

                                <button
                                    onClick={async () => {
                                        if (!canAfford) {
                                            showNotification('💰', lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
                                            return;
                                        }
                                        if (item.id === 'r2') {
                                            // Mystery Box - give random digital gift
                                            if (await spendCredits(item.cost, 'CREATE_IMAGE')) {
                                                const gifts = [
                                                    { reward: 6, msg: lang === 'el' ? '🎨 1 Δωρεάν Hero Image! (+6⚡)' : '🎨 1 Free Hero Image! (+6⚡)' },
                                                    { reward: 50, msg: lang === 'el' ? '🎬 1 Δωρεάν Video! (+50⚡)' : '🎬 1 Free Video! (+50⚡)' },
                                                    { reward: 180, msg: lang === 'el' ? '🎵 3 Δωρεάν Τραγούδια! (+180⚡)' : '🎵 3 Free Songs! (+180⚡)' },
                                                    { reward: 100, msg: lang === 'el' ? '💎 Bonus Credits! (+100⚡)' : '💎 Bonus Credits! (+100⚡)' },
                                                    { reward: 60, msg: lang === 'el' ? '🧊 1 Δωρεάν 3D Model! (+60⚡)' : '🧊 1 Free 3D Model! (+60⚡)' },
                                                    { reward: 30, msg: lang === 'el' ? '⚡ Mini Bonus! (+30⚡)' : '⚡ Mini Bonus! (+30⚡)' },
                                                ];
                                                const gift = gifts[Math.floor(Math.random() * gifts.length)];
                                                earnCredits(gift.reward);
                                                showNotification('🎁', gift.msg);
                                                showLocalNotif(gift.msg);
                                            }
                                        } else {
                                            // 3D Print or Expert Plan - just deduct and show confirmation
                                            if (await spendCredits(item.cost, 'CREATE_IMAGE')) {
                                                showNotification('✅', lang === 'el' ? 'Επιτυχής εξαργύρωση! Θα επικοινωνήσουμε μαζί σου!' : 'Redeemed! We\'ll contact you!');
                                                showLocalNotif(lang === 'el' ? `✅ ${item.title[lang]} - Θα επικοινωνήσουμε σύντομα!` : `✅ ${item.title[lang]} - We'll contact you soon!`);
                                            }
                                        }
                                    }}
                                    className={`mt-auto w-full py-3.5 rounded-2xl font-[1000] uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all border ${
                                        canAfford
                                            ? `bg-gradient-to-r ${(item as any).color} text-white border-white/20 hover:scale-105 active:scale-95 shadow-lg`
                                            : 'bg-white/5 text-white/30 border-white/5 cursor-not-allowed'
                                    }`}
                                >
                                    {canAfford ? (
                                        <>{t.redeem.getBtn} <ArrowRight size={14} /></>
                                    ) : (
                                        <><Lock size={12} /> {lang === 'el' ? `ΛΕΙΠΟΥΝ ${item.cost - credits}⚡` : `NEED ${item.cost - credits}⚡ MORE`}</>
                                    )}
                                </button>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </motion.div>
        )}

      </div>
    </div>
  );
}
