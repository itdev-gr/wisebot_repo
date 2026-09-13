/**
 * The sentence under «Είμαι εδώ!» when the phone says no.
 *
 * Three things this pins. How a «denied» is classified: a «denied» the Permissions API
 * knew BEFORE the request is a block; otherwise the clock decides, because Safari says
 * «prompt» whatever it remembers and, since Safari 26, «denied» only after this very
 * document was refused (so reading it afterwards would call every refusal a block).
 * Which settings path each platform gets, because a parent follows it screen by screen.
 * And the one-shot note across the retry reload. Each test imports a fresh module: the
 * «a denial happened in this document» flag is module state, like the document itself.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const IPHONE_17 =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1';
const IPHONE_26 =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 26_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1';
const IPHONE_26_CHROME =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 26_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/140.0.0.0 Mobile/15E148 Safari/604.1';
/** An iPad, or an iPhone with Request Desktop Website: says Macintosh, carries only Version/. */
const IPAD_17_DESKTOP =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15';
const SHELL_18 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';
const SHELL_17 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';
const ANDROID =
  'Mozilla/5.0 (Linux; Android 15; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36';
const MAC =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';

const userAgent = (ua: string) => Object.defineProperty(navigator, 'userAgent', { configurable: true, value: ua });
const touchPoints = (n: number) => Object.defineProperty(navigator, 'maxTouchPoints', { configurable: true, value: n });
const shell = (on: boolean) => {
  (window as unknown as { Capacitor?: unknown }).Capacitor = on ? { isNativePlatform: () => true } : undefined;
};
const standalone = (on: boolean) => {
  (window as unknown as { matchMedia?: unknown }).matchMedia = on ? () => ({ matches: true }) : undefined;
};

/** A fresh document: the module's «denied in this document» flag starts false. */
const fresh = async () => {
  vi.resetModules();
  return import('./geoNotes');
};

beforeEach(() => {
  userAgent(MAC);
  touchPoints(0);
  shell(false);
  standalone(false);
  sessionStorage.clear();
});
afterEach(() => vi.restoreAllMocks());

describe('deniedKind — a «no» from a sheet, or a «no» from memory', () => {
  it('is a block when the browser already said denied before the request, however long it took', async () => {
    const { deniedKind } = await fresh();
    expect(deniedKind(4000, 'denied')).toBe('blocked');
  });

  it('calls an instant «no» a block even when the browser claimed «prompt» — Safari always does', async () => {
    const { deniedKind, NO_PROMPT_MS } = await fresh();
    expect(deniedKind(NO_PROMPT_MS - 1, 'prompt')).toBe('blocked');
  });

  it('calls a «no» that took a while a refusal on a sheet (Safari 26 says denied only afterwards — irrelevant)', async () => {
    const { deniedKind, NO_PROMPT_MS } = await fresh();
    expect(deniedKind(NO_PROMPT_MS + 1, 'prompt')).toBe('refused');
    expect(deniedKind(3000, 'prompt')).toBe('refused');
  });

  it('lets the clock decide when there is no Permissions API at all', async () => {
    const { deniedKind } = await fresh();
    expect(deniedKind(5, 'unknown')).toBe('blocked');
    expect(deniedKind(5000, 'unknown')).toBe('refused');
  });
});

describe('retryNeedsReload — WebKit remembers a refusal for the life of the page', () => {
  it('is false in a document that has never been refused', async () => {
    const { retryNeedsReload } = await fresh();
    expect(retryNeedsReload()).toBe(false);
  });

  it('is true from the first refusal on, whichever kind it was', async () => {
    const { deniedKind, retryNeedsReload } = await fresh();
    deniedKind(5000, 'prompt');
    expect(retryNeedsReload()).toBe(true);
  });

  it('stays false inside the App Store shell, whose native plugin has no such memory', async () => {
    userAgent(SHELL_18);
    shell(true);
    const { deniedKind, retryNeedsReload } = await fresh();
    deniedKind(5, 'unknown');
    expect(retryNeedsReload()).toBe(false);
  });
});

describe('the one-shot note across the retry reload', () => {
  it('is read once, by the screen it was left for', async () => {
    const { consumeRetryReload } = await fresh();
    sessionStorage.setItem('wb_world_geo_retry', 'greece');
    expect(consumeRetryReload('greece')).toBe(true);
    expect(consumeRetryReload('greece')).toBe(false);
  });

  it('is cleared even when another screen reads it first', async () => {
    const { consumeRetryReload } = await fresh();
    sessionStorage.setItem('wb_world_geo_retry', 'athens-acropolis');
    expect(consumeRetryReload('greece')).toBe(false);
    expect(sessionStorage.getItem('wb_world_geo_retry')).toBeNull();
  });

  it('says the one thing to do now, in every language', async () => {
    const { afterReloadNote } = await fresh();
    expect(afterReloadNote('el')).toBe('Έτοιμο! Πάτα «Είμαι εδώ!» ακόμη μία φορά.');
    for (const lang of ['en', 'de', 'fr', 'es', 'it'] as const) expect(afterReloadNote(lang)).not.toBe(afterReloadNote('el'));
  });
});

describe('blockedNote — the path a grown-up follows', () => {
  it('sends an iPhone on iOS 18 or later through Settings → Apps → Safari, and names the site', async () => {
    userAgent(IPHONE_26);
    const { blockedNote } = await fresh();
    const note = blockedNote('el');
    expect(note.path).toBe('Ρυθμίσεις → Εφαρμογές → Safari → Τοποθεσία → localhost → «Ερώτηση»');
    expect(note.more).toContain('Ιστότοποι Safari');
    expect(note.note).toContain('Ένας μεγάλος');
  });

  it('sends an iPhone on iOS 17 through Settings → Safari, where Safari still lived', async () => {
    userAgent(IPHONE_17);
    const { blockedNote } = await fresh();
    expect(blockedNote('en').path).toBe('Settings → Safari → Location → localhost → “Ask”');
    expect(blockedNote('en').more).toBeDefined();
  });

  it('reads the version from Version/ on an iPad, which says Macintosh', async () => {
    userAgent(IPAD_17_DESKTOP);
    touchPoints(5);
    const { blockedNote } = await fresh();
    expect(blockedNote('en').path).toMatch(/^Settings → Safari → Location/);
  });

  it('sends Chrome on an iPhone to Chrome’s own Location permission, not Safari’s', async () => {
    userAgent(IPHONE_26_CHROME);
    const { blockedNote } = await fresh();
    const note = blockedNote('el');
    expect(note.path).toBe('Ρυθμίσεις → Εφαρμογές → Chrome → Τοποθεσία → «Κατά τη χρήση της εφαρμογής»');
    expect(note.path).not.toContain('Safari');
    expect(note.more).toContain('Υπηρεσίες τοποθεσίας');
  });

  it('names the App Store shell as the phone does, with and without the Apps section', async () => {
    shell(true);
    userAgent(SHELL_18);
    let { blockedNote } = await fresh();
    expect(blockedNote('en').path).toBe('Settings → Apps → WiseBot Academy → Location → “While Using the App”');
    expect(blockedNote('en').note).toContain('for WiseBot');
    userAgent(SHELL_17);
    ({ blockedNote } = await fresh());
    expect(blockedNote('en').path).toBe('Settings → WiseBot Academy → Location → “While Using the App”');
  });

  it('sends Android in a browser to the site info icon, and the installed app through Chrome’s settings', async () => {
    userAgent(ANDROID);
    let { blockedNote } = await fresh();
    expect(blockedNote('de').path).toMatch(/^Chrome: /);
    expect(blockedNote('de').more).toBeUndefined();
    standalone(true);
    ({ blockedNote } = await fresh());
    expect(blockedNote('de').path).toMatch(/^Chrome → ⋮ → Einstellungen/);
    expect(blockedNote('de').path).toContain('localhost');
    expect(blockedNote('de').note).toContain('für WiseBot');
  });

  it('tells a desktop that the browser, not a phone, is saying no', async () => {
    const { blockedNote } = await fresh();
    const note = blockedNote('en');
    expect(note.note).toMatch(/^The browser/);
    expect(note.path).toContain('icon left of the address');
    expect(note.more).toBeUndefined();
  });

  it('has every line in all six languages, never falling back to English silently', async () => {
    userAgent(IPHONE_26);
    const { blockedNote } = await fresh();
    const seen = new Set<string>();
    for (const lang of ['el', 'en', 'de', 'fr', 'es', 'it'] as const) {
      const note = blockedNote(lang);
      for (const line of [note.note, note.path, note.more ?? '']) {
        expect(line.length).toBeGreaterThan(20);
        seen.add(line);
      }
    }
    // 6 languages × 3 lines, all distinct.
    expect(seen.size).toBe(18);
  });
});
