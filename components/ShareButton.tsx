import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
  url?: string;
  imageUrl?: string;
  lang: 'el' | 'en';
  className?: string;
}

export default function ShareButton({ title, text, url, imageUrl, lang, className = '' }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || window.location.href;

    // Try Web Share API first (mobile / supported browsers)
    if (navigator.share) {
      try {
        const shareData: ShareData = {
          title,
          text,
          url: shareUrl,
        };

        // If imageUrl is a data URL or blob, try to share as file
        if (imageUrl && navigator.canShare) {
          try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const file = new File([blob], 'wisebot-creation.png', { type: blob.type });
            const dataWithFile = { ...shareData, files: [file] };
            if (navigator.canShare(dataWithFile)) {
              await navigator.share(dataWithFile);
              return;
            }
          } catch {
            // Fall through to share without file
          }
        }

        await navigator.share(shareData);
        return;
      } catch (err: any) {
        // User cancelled or share failed — fall through to clipboard
        if (err?.name === 'AbortError') return;
      }
    }

    // Fallback: copy link to clipboard
    try {
      await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Last resort: use old execCommand
      const textarea = document.createElement('textarea');
      textarea.value = `${text}\n${shareUrl}`;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={(e) => { e.stopPropagation(); handleShare(); }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
        copied
          ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
          : 'bg-white/[0.06] border border-white/[0.08] text-white/50 hover:text-white/80 hover:bg-white/10 hover:border-white/15'
      } ${className}`}
      title={lang === 'el' ? 'Κοινοποίηση' : 'Share'}
    >
      {copied ? (
        <>
          <Check size={13} />
          <span>{lang === 'el' ? 'Copied!' : 'Copied!'}</span>
        </>
      ) : (
        <>
          <Share2 size={13} />
          <span className="hidden sm:inline">{lang === 'el' ? 'Share' : 'Share'}</span>
        </>
      )}
    </button>
  );
}
