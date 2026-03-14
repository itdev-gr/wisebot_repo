import React, { useState } from 'react';

interface SafeImageProps {
  src: string | undefined;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  loading?: 'eager' | 'lazy';
}

/**
 * Shared image component for Academy & Ebooks.
 * Uses no-referrer and eager loading so external hosts (e.g. postimg.cc) show images consistently.
 */
export function SafeImage({ src, alt, className = '', wrapperClassName = '', loading = 'eager' }: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const url = src?.trim() || '';

  if (!url || failed) {
    return (
      <div className={`bg-[#0f1014] flex items-center justify-center ${wrapperClassName}`}>
        <div className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center text-white/30" aria-hidden />
      </div>
    );
  }

  return (
    <div className={wrapperClassName}>
      <img
        src={url}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={loading}
        decoding="async"
        className={className}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
