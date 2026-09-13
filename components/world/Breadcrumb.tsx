/**
 * A settings path («Ρυθμίσεις → Εφαρμογές → Safari → Τοποθεσία»), rendered so that it
 * wraps AT the arrows. Left to the browser, a 360 px phone breaks inside a label —
 * «Απόρρητο και» on one line, «ασφάλεια» on the next — and the parent then searches
 * Settings for a row called «Απόρρητο και». Each step is an inline-block: it moves to
 * the next line as one piece when it does not fit, and only a step wider than the whole
 * card wraps inside itself (which `whitespace-nowrap` would have pushed out of the card
 * instead). The arrows are decoration, hidden from screen readers, which then hear the
 * labels alone.
 */
import React from 'react';

export const Breadcrumb: React.FC<{ text: string }> = ({ text }) => {
  const steps = text.split(' → ');
  return (
    <>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span aria-hidden="true">{' → '}</span>}
          <span className="inline-block max-w-full align-top">{step}</span>
        </React.Fragment>
      ))}
    </>
  );
};
