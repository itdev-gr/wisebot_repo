/**
 * On site the question comes before the story, and the order never flips mid-visit.
 *
 * Read from source, like countryEntry.test.ts, because the failure worth pinning is one
 * edit away and invisible in a render test: switch `questionFirst` to read `stamp`, and the
 * page reorders itself the instant a child answers — `onComplete` lands the stamp in the
 * same commit — sliding the result out from under their finger.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const card = readFileSync(join(__dirname, 'PlaceCard.tsx'), 'utf8');

describe('the on-site order of a place', () => {
  it('decides question-first from the fix and from what was stamped BEFORE the card opened', () => {
    expect(card).toMatch(/const stampedAtOpen = useRef\(Boolean\(stamp\)\)\.current;/);
    expect(card).toMatch(/const questionFirst = geo === 'here' && !stampedAtOpen;/);
  });

  it('never reads the live stamp to decide the order', () => {
    const line = card.split('\n').find((l) => l.includes('const questionFirst ='));
    expect(line, 'questionFirst is gone').toBeTruthy();
    expect(line).not.toMatch(/\bstamp\b(?!edAtOpen)/);
  });

  it('renders the story exactly twice: above the question from home, below it on site', () => {
    expect(card.match(/\{!questionFirst && storyBlock\}/g) ?? []).toHaveLength(1);
    expect(card.match(/\{questionFirst && storyBlock\}/g) ?? []).toHaveLength(1);
    expect(card.indexOf('{!questionFirst && storyBlock}')).toBeLessThan(card.indexOf('THE QUESTION'));
    expect(card.indexOf('{questionFirst && storyBlock}')).toBeGreaterThan(card.indexOf('THE QUESTION'));
  });

  it('keeps the story one tap away on site', () => {
    expect(card).toMatch(/onClick=\{scrollToStory\}/);
    expect(card).toMatch(/ui\(T\.readStory, lang\)/);
  });

  it('still calls onComplete from exactly one place', () => {
    expect(card.match(/onComplete\(/g) ?? []).toHaveLength(1);
  });
});
