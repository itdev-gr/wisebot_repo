/**
 * GiftInbox — Shows received image/song gifts and lets user claim them
 * ====================================================================
 */
import React, { useState, useEffect, useCallback } from 'react';
import { X, Gift, Image, Music, Check, Loader2, Inbox } from 'lucide-react';
import { authFetch } from '../services/backendApi';

interface GiftItem {
  id: string;
  from_user_id: string;
  from_name: string;
  type: 'image' | 'song';
  title: string;
  image_url?: string;
  audio_url?: string;
  stream_url?: string;
  cover_url?: string;
  lyrics?: string;
  style?: string;
  message: string;
  created_at: string;
}

interface GiftInboxProps {
  lang: 'el' | 'en';
  isOpen: boolean;
  onClose: () => void;
  onClaimImage?: (gift: GiftItem) => void;
  onClaimSong?: (gift: GiftItem) => void;
}

export default function GiftInbox({ lang, isOpen, onClose, onClaimImage, onClaimSong }: GiftInboxProps) {
  const [gifts, setGifts] = useState<GiftItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [claimingId, setClaimingId] = useState<string | null>(null);

  const fetchGifts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await authFetch('/api/auth/get-gifts');
      if (res.ok) {
        const data = await res.json();
        setGifts(data.gifts || []);
      }
    } catch (err) {
      console.error('[GiftInbox] Fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) fetchGifts();
  }, [isOpen, fetchGifts]);

  const handleClaim = useCallback(async (gift: GiftItem) => {
    setClaimingId(gift.id);
    try {
      const res = await authFetch('/api/auth/claim-gift', {
        method: 'POST',
        body: JSON.stringify({ giftId: gift.id }),
      });

      if (res.ok) {
        // Trigger the appropriate callback to add to local library
        if (gift.type === 'image' && onClaimImage) {
          onClaimImage(gift);
        } else if (gift.type === 'song' && onClaimSong) {
          onClaimSong(gift);
        }
        // Remove from inbox
        setGifts(prev => prev.filter(g => g.id !== gift.id));
      }
    } catch (err) {
      console.error('[GiftInbox] Claim error:', err);
    } finally {
      setClaimingId(null);
    }
  }, [onClaimImage, onClaimSong]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 xl:pl-80 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="w-full max-w-md rounded-[2rem] bg-[#0B0F1A] border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.15)] overflow-hidden animate-in zoom-in-95 duration-300 max-h-[80vh] flex flex-col"
      >
        {/* Header */}
        <div className="relative p-6 pb-4 bg-gradient-to-br from-amber-600/20 via-orange-500/10 to-transparent border-b border-white/[0.06] flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 p-2 rounded-full text-white/60 hover:text-white transition-all border border-white/10"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <Inbox size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-[1000] text-white italic uppercase tracking-tight">
                {lang === 'el' ? 'ΔΩΡΑ ΠΟΥ ΕΛΗΨΑ' : 'RECEIVED GIFTS'}
              </h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                {gifts.length > 0
                  ? `${gifts.length} ${lang === 'el' ? 'αδιάβαστα' : 'unclaimed'}`
                  : lang === 'el' ? 'Κανένα νέο δώρο' : 'No new gifts'}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 p-4 space-y-3">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 size={32} className="text-amber-400 animate-spin" />
            </div>
          )}

          {!loading && gifts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
              <Gift size={40} className="text-white/10" />
              <p className="text-white/30 text-sm font-bold">
                {lang === 'el' ? 'Δεν έχεις νέα δώρα' : 'No new gifts yet'}
              </p>
              <p className="text-white/20 text-xs">
                {lang === 'el' ? 'Ζήτα από φίλους να σου στείλουν κάτι!' : 'Ask friends to send you something!'}
              </p>
            </div>
          )}

          {!loading && gifts.map(gift => (
            <div
              key={gift.id}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 flex gap-3 items-start"
            >
              {/* Thumbnail */}
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center">
                {gift.type === 'image' && gift.image_url ? (
                  <img src={gift.image_url} alt={gift.title} className="w-full h-full object-cover" />
                ) : gift.type === 'song' && gift.cover_url ? (
                  <img src={gift.cover_url} alt={gift.title} className="w-full h-full object-cover" />
                ) : gift.type === 'image' ? (
                  <Image size={24} className="text-white/30" />
                ) : (
                  <Music size={24} className="text-white/30" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    gift.type === 'image'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {gift.type === 'image'
                      ? (lang === 'el' ? 'ΕΙΚΟΝΑ' : 'IMAGE')
                      : (lang === 'el' ? 'ΤΡΑΓΟΥΔΙ' : 'SONG')}
                  </span>
                  <span className="text-white/30 text-[10px] font-bold">{lang === 'el' ? 'από' : 'from'} {gift.from_name}</span>
                </div>
                <p className="text-white text-sm font-bold truncate">{gift.title}</p>
                {gift.message && (
                  <p className="text-white/40 text-xs italic truncate mt-0.5">"{gift.message}"</p>
                )}
              </div>

              {/* Claim button */}
              <button
                onClick={() => handleClaim(gift)}
                disabled={claimingId === gift.id}
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 flex items-center justify-center text-emerald-400 transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
              >
                {claimingId === gift.id
                  ? <Loader2 size={16} className="animate-spin" />
                  : <Check size={16} />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Hook to fetch unclaimed gift count for the notification badge
 */
export function useGiftCount(enabled = true): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;

    const fetchCount = async () => {
      try {
        const res = await authFetch('/api/auth/get-gifts');
        if (res.ok && !cancelled) {
          const data = await res.json();
          setCount((data.gifts || []).length);
        }
      } catch {
        // silently ignore
      }
    };

    fetchCount();
    // Poll every 60 seconds
    const interval = setInterval(fetchCount, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [enabled]);

  return count;
}
