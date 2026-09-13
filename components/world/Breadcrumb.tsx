/**
 * A settings path («Ρυθμίσεις → Εφαρμογές → Safari → Τοποθεσία»), rendered so that it
 * can only wrap AT the arrows. Left to the browser, a 360 px phone breaks inside a
 * label — «Απόρρητο και» on one line, «ασφάλεια» on the next — and the parent then
 * searches Settings for a row called «Απόρρητο και». Each step is one unbreakable
 * span; the arrows are decoration, hidden from screen readers, which then hear the
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
          <span className="whitespace-nowrap">{step}</span>
        </React.Fragment>
      ))}
    </>
  );
};
