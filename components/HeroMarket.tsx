/**
 * Hero Market — the children's first real businesses.
 * =====================================================
 * Children sell what they made (songs 10⚡, hero images 3⚡) to other children.
 * Every listing is approved by an admin before anyone sees it; the seller
 * receives 80% (the other 20% leaves the economy). Buying is one atomic RPC on
 * the server. The 3D tab turns a hero into a printed figure (500⚡): the order
 * goes to info@wisebot.gr and delivery is arranged with the parent by email —
 * no address forms inside a kids' app.
 *
 * Replaced the mock market (hard-coded "heroes by other students") on
 * 24 Αυγούστου 2026 — see the economy-hardening PR for the whole story.
 */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Music, Image as ImageIcon, Box, ArrowRight, Play, Pause, Zap, Clock, CheckCircle2, XCircle, Plus, Loader2, Flag, X } from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';
import { useAuth } from '../context/AuthContext';
import { authFetch } from '../services/backendApi';
import { supabase } from '../services/supabaseClient';
import FirstTimeTip, { useChildName } from './FirstTimeTip';

interface HeroMarketProps {
  lang: 'el' | 'en';
  myHeroes?: any[];
}

interface Listing {
  id: string;
  seller_id?: string;
  seller_name?: string;
  type: 'song' | 'image';
  title: string;
  image_url: string | null;
  price: number;
  status?: string;
  sales_count: number;
}

const PRINT_COST = 500;

const HeroMarket: React.FC<HeroMarketProps> = ({ lang, myHeroes = [] }) => {
  const navigate = useNavigate();
  const { credits, spendCredits, refundCredits, showNotification, trackAction, syncFromCloud } = useEconomy();
  const { user, isGuest, profile } = useAuth();
  const childName = useChildName(lang);
  const el = lang === 'el';

  const [tab, setTab] = useState<'shop' | 'mine' | 'print'>('shop');
  const [listings, setListings] = useState<Listing[]>([]);
  const [mine, setMine] = useState<Listing[]>([]);
  const [purchased, setPurchased] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [mySongs, setMySongs] = useState<any[]>([]);
  const [playingUrl, setPlayingUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [printHero, setPrintHero] = useState<any | null>(null);
  const [printDone, setPrintDone] = useState<string | null>(null);
  const [reportTarget, setReportTarget] = useState<Listing | null>(null);
  const [reportBusy, setReportBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await authFetch('/api/market/list');
      if (!res.ok) return;
      const data = await res.json();
      setListings(data.listings || []);
      setMine(data.mine || []);
      setPurchased(data.purchased || []);
    } catch { /* offline */ } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    if (isGuest) return;
    authFetch('/api/auth/user-songs')
      .then(r => (r.ok ? r.json() : { songs: [] }))
      .then(d => setMySongs((d.songs || []).filter((s: any) => s.audio_url || s.stream_url)))
      .catch(() => {});
  }, [isGuest]);

  useEffect(() => () => { audioRef.current?.pause(); }, []);

  const togglePlay = (url: string | null) => {
    if (!url) return;
    if (playingUrl === url) { audioRef.current?.pause(); setPlayingUrl(null); return; }
    audioRef.current?.pause();
    const a = new Audio(url);
    audioRef.current = a;
    a.onended = () => setPlayingUrl(null);
    a.play().catch(() => {});
    setPlayingUrl(url);
  };

  const requireLogin = () => {
    showNotification('🔑', el ? 'Φτιάξε λογαριασμό για την Αγορά!' : 'Create an account for the Market!');
    setTimeout(() => navigate('/login?mode=register'), 1200);
  };

  const buy = async (listing: Listing) => {
    if (isGuest) return requireLogin();
    if (!spendCredits(listing.price)) {
      showNotification('💰', el ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
      setTimeout(() => navigate('/store'), 1200);
      return;
    }
    setBusyId(listing.id);
    try {
      const res = await authFetch('/api/market/buy', { method: 'POST', body: JSON.stringify({ listingId: listing.id }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        refundCredits(listing.price, typeof data.credits === 'number' ? data.credits : undefined);
        showNotification('❌', data.error || (el ? 'Η αγορά δεν ολοκληρώθηκε.' : 'Purchase failed.'));
        return;
      }
      if (typeof data.credits === 'number') refundCredits(0, data.credits); // adopt server balance
      setPurchased(p => [...p, listing.id]);
      showNotification('🎉', el ? `Δικό σου! Ο/η ${listing.seller_name} κέρδισε ${Math.floor(listing.price * 0.8)}⚡` : `Yours! ${listing.seller_name} earned ${Math.floor(listing.price * 0.8)}⚡`,
        listing.type === 'song' ? (el ? 'Θα το βρεις στα τραγούδια σου στο Studio.' : "It's in your songs in the Studio.") : undefined);
    } finally { setBusyId(null); }
  };

  const sellSong = async (song: any) => {
    setBusyId(`sell-${song.id}`);
    try {
      const res = await authFetch('/api/market/create', { method: 'POST', body: JSON.stringify({ type: 'song', songId: song.id }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { showNotification('❌', data.error || 'Error'); return; }
      trackAction('UPLOAD_HERO');
      showNotification('🕐', el ? 'Στάλθηκε για έγκριση!' : 'Sent for approval!', el ? 'Η WiseBot το ελέγχει και βγαίνει στην Αγορά.' : 'WiseBot checks it, then it goes live.');
      load();
    } finally { setBusyId(null); }
  };

  const sellHero = async (hero: any) => {
    if (!hero?.avatar && !hero?.image) return;
    setBusyId(`sell-hero-${hero.id}`);
    try {
      const res = await authFetch('/api/market/create', {
        method: 'POST',
        body: JSON.stringify({ type: 'image', title: hero.name || (el ? 'Ο ήρωάς μου' : 'My hero'), imageData: hero.avatar || hero.image }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { showNotification('❌', data.error || 'Error'); return; }
      trackAction('UPLOAD_HERO');
      showNotification('🕐', el ? 'Στάλθηκε για έγκριση!' : 'Sent for approval!');
      load();
    } finally { setBusyId(null); }
  };

  const orderPrint = async () => {
    if (isGuest) return requireLogin();
    if (!printHero) return;
    if (!spendCredits(PRINT_COST)) {
      showNotification('💰', el ? `Η 3D εκτύπωση κοστίζει ${PRINT_COST}⚡.` : `3D printing costs ${PRINT_COST}⚡.`);
      setTimeout(() => navigate('/store'), 1200);
      return;
    }
    setBusyId('print');
    try {
      const res = await authFetch('/api/market/print-order', {
        method: 'POST',
        body: JSON.stringify({ heroName: printHero.name || 'Hero', imageUrl: printHero.avatar || printHero.image }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        refundCredits(PRINT_COST, typeof data.credits === 'number' ? data.credits : undefined);
        showNotification('❌', data.error || (el ? 'Η παραγγελία δεν ολοκληρώθηκε.' : 'Order failed.'));
        return;
      }
      setPrintDone(data.orderId);
      showNotification('📦', el ? 'Η παραγγελία στάλθηκε!' : 'Order sent!', el ? 'Θα μιλήσουμε με τον γονιό σου για την παράδοση.' : "We'll arrange delivery with your parent.");
    } finally { setBusyId(null); }
  };

  // Report a live listing (post-approval safety net; RLS: insert-own, one per listing).
  // At 3 open reports the listing auto-unpublishes for re-review (DB trigger).
  const sendReport = async (reason: 'upsetting' | 'mean' | 'other') => {
    if (!reportTarget || !user) return;
    setReportBusy(true);
    try {
      const { error } = await supabase.from('market_reports').insert({
        listing_id: reportTarget.id,
        reporter_id: user.id,
        reason,
      });
      if (error && error.code === '23505') {
        showNotification('🦉', el ? 'Το έχεις ήδη αναφέρει — η WiseBot θα το κοιτάξει!' : "You already reported this — WiseBot is on it!");
      } else if (error) {
        showNotification('😕', el ? 'Κάτι πήγε στραβά, δοκίμασε ξανά.' : 'Something went wrong, try again.');
      } else {
        showNotification('💙', el ? 'Ευχαριστούμε! Η WiseBot θα το κοιτάξει αμέσως.' : 'Thank you! WiseBot will look right away.');
      }
    } catch {
      showNotification('😕', el ? 'Κάτι πήγε στραβά, δοκίμασε ξανά.' : 'Something went wrong, try again.');
    } finally {
      setReportBusy(false);
      setReportTarget(null);
    }
  };

  const statusChip = (status?: string) => {
    if (status === 'approved') return <span className="flex items-center gap-1 text-emerald-300 text-[10px] font-black uppercase"><CheckCircle2 size={11} /> {el ? 'Στην αγορά' : 'Live'}</span>;
    if (status === 'rejected') return <span className="flex items-center gap-1 text-red-300 text-[10px] font-black uppercase"><XCircle size={11} /> {el ? 'Δεν εγκρίθηκε' : 'Not approved'}</span>;
    return <span className="flex items-center gap-1 text-amber-300 text-[10px] font-black uppercase"><Clock size={11} /> {el ? 'Σε έλεγχο' : 'In review'}</span>;
  };

  const card = (l: Listing, actions: React.ReactNode) => (
    <div key={l.id} className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden flex flex-col">
      <div className="aspect-square bg-white/5 relative">
        {l.image_url
          ? <img src={l.image_url} alt={l.title} className="w-full h-full object-cover" loading="lazy" />
          : <div className="w-full h-full flex items-center justify-center text-white/20"><Music size={40} /></div>}
        {l.type === 'song' && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-black/60 text-fuchsia-300 text-[9px] font-black uppercase tracking-wider flex items-center gap-1"><Music size={10} /> {el ? 'Τραγούδι' : 'Song'}</span>
        )}
        {l.seller_id !== user?.id && (
          <button
            onClick={() => (isGuest ? requireLogin() : setReportTarget(l))}
            aria-label={el ? 'Αναφορά στη WiseBot' : 'Report to WiseBot'}
            title={el ? 'Αναφορά στη WiseBot' : 'Report to WiseBot'}
            className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/50 text-white/35 hover:text-red-300 hover:bg-black/70 transition-colors"
          >
            <Flag size={12} />
          </button>
        )}
      </div>
      <div className="p-3 flex-1 flex flex-col gap-1.5">
        <p className="text-white font-[900] text-sm leading-tight truncate">{l.title}</p>
        {l.seller_name && <p className="text-white/40 text-[11px] font-bold">{el ? 'από' : 'by'} {l.seller_name}{l.sales_count > 0 ? ` · ${l.sales_count} ${el ? 'πωλήσεις' : 'sold'}` : ''}</p>}
        <div className="mt-auto pt-2">{actions}</div>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 pb-32">
      <FirstTimeTip id="market" lang={lang} text={el
        ? <>🦉 Εδώ είναι η Αγορά, {childName} — η πρώτη σου επιχείρηση! Πούλα τραγούδια και ήρωες που έφτιαξες. Από κάθε πώληση κρατάς το 80%.</>
        : <>🦉 This is the Market, {childName} — your first business! Sell songs and heroes you made. You keep 80% of every sale.</>} />

      <div className="text-center space-y-3 mb-8">
        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.35em]">{el ? 'Η Αγορά' : 'The Market'}</p>
        <h1 className="text-3xl md:text-4xl font-[1000] text-white uppercase italic tracking-tight">{el ? 'Η πρώτη σου επιχείρηση' : 'Your first business'}</h1>
        <p className="text-white/60 text-sm font-semibold max-w-xl mx-auto">
          {el ? 'Δημιουργίες από παιδιά, για παιδιά. Κάθε αγγελία ελέγχεται από τη WiseBot πριν βγει.' : 'Made by kids, for kids. Every listing is checked by WiseBot before going live.'}
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {([['shop', Store, el ? 'ΑΓΟΡΑ' : 'SHOP'], ['mine', Plus, el ? 'ΠΟΥΛΑΩ' : 'SELL'], ['print', Box, el ? '3D ΕΚΤΥΠΩΣΗ' : '3D PRINT']] as const).map(([key, Icon, label]) => (
        <button key={key} onClick={() => setTab(key)}
          className={`px-4 py-2.5 rounded-2xl font-[1000] text-xs uppercase tracking-wider flex items-center gap-2 border transition-all ${tab === key ? 'bg-violet-600 text-white border-violet-500' : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10'}`}>
          <Icon size={14} /> {label}
        </button>
        ))}
      </div>

      {tab === 'shop' && (
        loading ? <div className="text-center py-16 text-white/40"><Loader2 className="animate-spin mx-auto" /></div>
        : listings.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-4xl">🛍️</p>
            <p className="text-white/60 font-bold">{el ? 'Η Αγορά μόλις άνοιξε — γίνε ο πρώτος πωλητής!' : 'The Market just opened — be the first seller!'}</p>
            <button onClick={() => setTab('mine')} className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-[1000] text-sm uppercase tracking-wider inline-flex items-center gap-2">
              {el ? 'Πούλα κάτι δικό σου' : 'Sell something of yours'} <ArrowRight size={14} />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {listings.map(l => card(l, (
              <div className="flex items-center gap-2">
                {l.type === 'song' && (
                  <button onClick={async () => {
                    // Preview only plays for already-bought songs; others buy first.
                    const bought = purchased.includes(l.id);
                    if (!bought) { showNotification('🎧', el ? 'Αγόρασέ το για να το ακούσεις ολόκληρο!' : 'Buy it to hear the whole song!'); return; }
                  }} className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60">
                    {playingUrl ? <Pause size={13} /> : <Play size={13} />}
                  </button>
                )}
                {purchased.includes(l.id) || l.seller_id === user?.id ? (
                  <span className="flex-1 text-center text-emerald-300 text-[11px] font-black uppercase">{l.seller_id === user?.id ? (el ? 'Δικό σου' : 'Yours') : (el ? 'Το έχεις ✓' : 'Owned ✓')}</span>
                ) : (
                  <button onClick={() => buy(l)} disabled={busyId === l.id}
                    className="flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-[1000] text-xs uppercase tracking-wider flex items-center justify-center gap-1 active:scale-95 transition-all disabled:opacity-50">
                    {busyId === l.id ? <Loader2 size={13} className="animate-spin" /> : <><Zap size={12} fill="currentColor" /> {l.price}</>}
                  </button>
                )}
              </div>
            )))}
          </div>
        )
      )}

      {tab === 'mine' && (
        isGuest ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-white/60 font-bold">{el ? 'Για να πουλήσεις, φτιάξε λογαριασμό.' : 'Create an account to sell.'}</p>
            <button onClick={requireLogin} className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-[1000] text-sm uppercase">{el ? 'Εγγραφή' : 'Sign up'}</button>
          </div>
        ) : (
        <div className="space-y-10">
          {mine.length > 0 && (
            <div>
              <h3 className="text-white/80 font-[1000] text-sm uppercase tracking-wider mb-3">{el ? 'Οι αγγελίες μου' : 'My listings'}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mine.map(l => card(l, <div className="flex items-center justify-between">{statusChip(l.status)}<span className="text-amber-300 text-xs font-black flex items-center gap-0.5"><Zap size={11} fill="currentColor" />{l.price}</span></div>))}
              </div>
            </div>
          )}
          <div>
            <h3 className="text-white/80 font-[1000] text-sm uppercase tracking-wider mb-1">{el ? 'Πούλα ένα τραγούδι σου' : 'Sell one of your songs'} <span className="text-amber-300">10⚡</span></h3>
            <p className="text-white/40 text-xs font-bold mb-3">{el ? 'Κρατάς 8⚡ από κάθε πώληση.' : 'You keep 8⚡ per sale.'}</p>
            {mySongs.length === 0 ? (
              <button onClick={() => navigate('/music')} className="w-full p-4 rounded-2xl bg-white/[0.03] border border-dashed border-white/15 text-white/50 font-bold text-sm hover:bg-white/5 transition-all">
                {el ? 'Δεν έχεις τραγούδια ακόμα — φτιάξε το πρώτο στο Studio 🎵' : 'No songs yet — make your first in the Studio 🎵'}
              </button>
            ) : (
              <div className="grid gap-2">
                {mySongs.slice(0, 10).map((s: any) => (
                  <div key={s.id} className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                    <button onClick={() => togglePlay(s.audio_url || s.stream_url)} className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70">
                      {playingUrl === (s.audio_url || s.stream_url) ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                    <p className="flex-1 text-white/85 font-bold text-sm truncate">{s.title}</p>
                    <button onClick={() => sellSong(s)} disabled={busyId === `sell-${s.id}`}
                      className="px-3 py-2 rounded-xl bg-violet-600/30 border border-violet-400/40 text-violet-100 text-[11px] font-black uppercase tracking-wider active:scale-95 disabled:opacity-50">
                      {busyId === `sell-${s.id}` ? <Loader2 size={12} className="animate-spin" /> : (el ? 'Πούλα το' : 'Sell it')}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-white/80 font-[1000] text-sm uppercase tracking-wider mb-1">{el ? 'Πούλα έναν ήρωά σου' : 'Sell one of your heroes'} <span className="text-amber-300">3⚡</span></h3>
            <p className="text-white/40 text-xs font-bold mb-3">{el ? 'Κρατάς 2⚡ από κάθε πώληση.' : 'You keep 2⚡ per sale.'}</p>
            {myHeroes.length === 0 ? (
              <button onClick={() => navigate('/factory')} className="w-full p-4 rounded-2xl bg-white/[0.03] border border-dashed border-white/15 text-white/50 font-bold text-sm hover:bg-white/5 transition-all">
                {el ? 'Δεν έχεις ήρωες ακόμα — φτιάξε τον πρώτο στο Εργαστήριο 🎨' : 'No heroes yet — make your first in the Factory 🎨'}
              </button>
            ) : (
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {myHeroes.filter((h: any) => h.avatar || h.image).slice(0, 10).map((h: any, i: number) => (
                  <button key={h.id || i} onClick={() => sellHero(h)} disabled={busyId === `sell-hero-${h.id}`}
                    className="rounded-2xl overflow-hidden border border-white/10 relative group active:scale-95 transition-all">
                    <img src={h.avatar || h.image} alt={h.name} className="aspect-square w-full object-cover" />
                    <span className="absolute inset-x-0 bottom-0 bg-black/70 text-white text-[10px] font-black uppercase py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">{el ? 'Πούλα το' : 'Sell it'}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        )
      )}

      {tab === 'print' && (
        <div className="max-w-lg mx-auto space-y-6">
          {printDone ? (
            <div className="text-center py-10 space-y-4">
              <p className="text-5xl">📦</p>
              <h3 className="text-white font-[1000] text-xl uppercase italic">{el ? 'Η παραγγελία στάλθηκε!' : 'Order sent!'}</h3>
              <p className="text-white/60 text-sm font-semibold">
                {el ? 'Θα επικοινωνήσουμε με τον γονιό σου με email για την παράδοση. Ο ήρωάς σου έρχεται σπίτι!' : "We'll email your parent to arrange delivery. Your hero is coming home!"}
              </p>
            </div>
          ) : (
            <>
              <div className="text-center space-y-2">
                <h3 className="text-white font-[1000] text-lg uppercase italic">{el ? 'Ο ήρωάς σου, αληθινός' : 'Your hero, for real'}</h3>
                <p className="text-white/60 text-sm font-semibold">
                  {el ? `Διάλεξε ήρωα και τον τυπώνουμε σε 3D φιγούρα. ${PRINT_COST}⚡ με την αποστολή. Θα κανονίσουμε την παράδοση με τον γονιό σου.` : `Pick a hero and we print a 3D figure. ${PRINT_COST}⚡ incl. delivery. We arrange it with your parent.`}
                </p>
              </div>
              {myHeroes.filter((h: any) => h.avatar || h.image).length === 0 ? (
                <button onClick={() => navigate('/factory')} className="w-full p-5 rounded-2xl bg-white/[0.03] border border-dashed border-white/15 text-white/50 font-bold text-sm">
                  {el ? 'Φτιάξε πρώτα έναν ήρωα στο Εργαστήριο 🎨' : 'Make a hero in the Factory first 🎨'}
                </button>
              ) : (
                <>
                  <div className="grid grid-cols-3 gap-3">
                    {myHeroes.filter((h: any) => h.avatar || h.image).slice(0, 9).map((h: any, i: number) => (
                      <button key={h.id || i} onClick={() => setPrintHero(h)}
                        className={`rounded-2xl overflow-hidden border-2 transition-all ${printHero === h ? 'border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]' : 'border-white/10'}`}>
                        <img src={h.avatar || h.image} alt={h.name} className="aspect-square w-full object-cover" />
                      </button>
                    ))}
                  </div>
                  <button onClick={orderPrint} disabled={!printHero || busyId === 'print' || (!isGuest && !profile?.parentVerified)}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-[1000] text-base uppercase italic tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-40">
                    {busyId === 'print' ? <Loader2 size={18} className="animate-spin" /> : <><Box size={18} /> {el ? `ΠΑΡΑΓΓΕΙΛΕ ΤΟ` : 'ORDER IT'} · <Zap size={14} fill="currentColor" /> {PRINT_COST}</>}
                  </button>
                  {!isGuest && !profile?.parentVerified && (
                    <p className="text-center text-amber-300/70 text-xs font-bold">{el ? 'Χρειάζεται επιβεβαιωμένος γονιός για παραγγελίες.' : 'A verified parent is needed for orders.'}</p>
                  )}
                  <p className="text-center text-white/30 text-[11px] font-bold">
                    {el ? `Έχεις ${credits}⚡` : `You have ${credits}⚡`}
                  </p>
                </>
              )}
            </>
          )}
        </div>
      )}

      {/* ── REPORT MODAL — kid-friendly, one tap per reason ── */}
      {reportTarget && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6" onClick={() => !reportBusy && setReportTarget(null)}>
          <div className="max-w-sm w-full rounded-[2rem] border border-white/15 bg-gradient-to-b from-slate-900 to-black p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-1">
              <p className="text-white font-[1000] text-sm uppercase tracking-wider flex items-center gap-2">
                <Flag size={14} className="text-red-300" /> {el ? 'Αναφορά στη WiseBot' : 'Report to WiseBot'}
              </p>
              <button onClick={() => !reportBusy && setReportTarget(null)} aria-label={el ? 'Κλείσιμο' : 'Close'} className="p-1 text-white/40 hover:text-white/80">
                <X size={16} />
              </button>
            </div>
            <p className="text-white/50 text-xs font-bold mb-4 truncate">
              {el ? 'Τι δεν πάει καλά με' : "What's wrong with"} «{reportTarget.title}»;
            </p>
            <div className="space-y-2">
              {([
                ['upsetting', '😟', el ? 'Με ενοχλεί / δεν είναι για παιδιά' : "It upsets me / it's not for kids"],
                ['mean', '😠', el ? 'Κοροϊδεύει ή πληγώνει κάποιον' : 'It mocks or hurts someone'],
                ['other', '🤔', el ? 'Κάτι άλλο' : 'Something else'],
              ] as const).map(([key, emoji, label]) => (
                <button key={key} onClick={() => sendReport(key)} disabled={reportBusy}
                  className="w-full flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-left text-white/80 text-sm font-bold hover:bg-white/10 hover:border-white/25 transition-all disabled:opacity-50">
                  <span className="text-xl leading-none">{emoji}</span> {label}
                </button>
              ))}
            </div>
            <p className="text-white/25 text-[10px] font-bold mt-4 text-center">
              {el ? 'Η αναφορά σου είναι ανώνυμη για τα άλλα παιδιά — τη βλέπει μόνο η WiseBot.' : 'Your report is anonymous to other kids — only WiseBot sees it.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroMarket;
