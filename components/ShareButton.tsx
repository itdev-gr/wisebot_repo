import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { shareContent } from '../utils/share';

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
    // Full chain (share sheet → clipboard → execCommand) lives in utils/share.ts.
    const result = await shareContent({ title, text, url, imageUrl });
    if (result === 'copied') {
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
