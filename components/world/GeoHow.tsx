/**
 * «Πώς;» — the settings path, folded away until a grown-up asks for it.
 *
 * The owner's rule for «Είμαι εδώ!» is one button: tap, the phone asks, «Allow», stamp.
 * When the phone will not ask, the card still says so in one sentence for the child;
 * the breadcrumb through Settings is the grown-up's business and lives behind this
 * small link, so the card never reads as a five-step manual. Opens in place, nothing
 * else moves; keyed by the path in the parent so a different platform line starts
 * folded again.
 */
import React, { useState } from 'react';
import type { WorldLang } from '../../data/world/types';
import { ui, type UiText } from './worldUi';
import { Breadcrumb } from './Breadcrumb';

const HOW: UiText<string> = { el: 'Πώς;', en: 'How?', de: 'Wie?', fr: 'Comment ?', es: '¿Cómo?', it: 'Come?' };

export const GeoHow: React.FC<{ lang: WorldLang; path: string; more?: string }> = ({ lang, path, more }) => {
  const [open, setOpen] = useState(false);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={false}
        className="mt-1.5 inline-flex min-h-[32px] items-center rounded-lg px-2 -ml-2 text-[13px] font-black uppercase tracking-wider text-amber-200/80 underline decoration-amber-200/40 underline-offset-4 hover:text-amber-100"
      >
        {ui(HOW, lang)}
      </button>
    );
  }
  return (
    <>
      <p className="mt-1.5 text-[13px] font-bold leading-relaxed text-amber-200/80">
        <Breadcrumb text={path} />
      </p>
      {more && (
        <p className="mt-1 text-[13px] font-bold leading-relaxed text-amber-200/80">
          <Breadcrumb text={more} />
        </p>
      )}
    </>
  );
};
