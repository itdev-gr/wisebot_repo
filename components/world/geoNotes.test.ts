/**
 * The sentence under «Είμαι εδώ!» when the phone says no.
 *
 * Two things this pins. First, how a «denied» is classified: the Permissions API is
 * believed when it says «denied», but Safari always says «prompt», so an answer that
 * arrived faster than any sheet could have been shown is a block, and a slow one is a
 * refusal. Second, which settings path each platform gets, because a parent will follow
 * it screen by screen. Each test imports a fresh module: the «a denial happened in this
 * document» flag is module state, and so is the document it describes.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

type State = 'granted' | 'prompt' | 'denied' | 'missing';

const IPHONE_17 =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1';
const IPHONE_26 =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 26_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1';
const ANDROID =
  'Mozilla/5.0 (Linux; Android 15; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36';
const MAC =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';

const permissions = (state: State) =>
  Object.defineProperty(navigator, 'permissions', {
    configurable: true,
    value: state === 'missing' ? undefined : { query: vi.fn().mockResolvedValue({ state }) },
  });

const userAgent = (ua: string) => Object.defineProperty(navigator, 'userAgent', { configurable: true, value: ua });

/** A fresh document: the module's «denied in this document» flag starts false. */
const fresh = async () => {
  vi.resetModules();
  return import('./geoNotes');
};

afterEach(() => {
  permissions('missing');
  userAgent(MAC);
});

describe('deniedKind — a «no» from a sheet, or a «no» from memory', () => {
  it('believes a Permissions API that says denied, however long the answer took', async () => {
    permissions('denied');
    const { deniedKind } = await fresh();
    expect(await deniedKind(4000)).toBe('blocked');
  });

  it('calls an instant «no» a block even when the browser claims «prompt» — Safari always does', async () => {
    permissions('prompt');
    const { deniedKind, NO_PROMPT_MS } = await fresh();
    expect(await deniedKind(NO_PROMPT_MS - 1)).toBe('blocked');
  });

  it('calls a «no» that took a while a refusal on a sheet', async () => {
    permissions('prompt');
    const { deniedKind, NO_PROMPT_MS } = await fresh();
    expect(await deniedKind(NO_PROMPT_MS + 1)).toBe('refused');
  });

  it('lets the clock decide when there is no Permissions API at all', async () => {
    permissions('missing');
    const { deniedKind } = await fresh();
    expect(await deniedKind(5)).toBe('blocked');
    expect(await deniedKind(5000)).toBe('refused');
  });
});

describe('retryNeedsReload — WebKit remembers a refusal for the life of the page', () => {
  it('is false in a document that has never been refused', async () => {
    const { retryNeedsReload } = await fresh();
    expect(retryNeedsReload()).toBe(false);
  });

  it('is true from the first refusal on, whichever kind it was', async () => {
    permissions('prompt');
    const { deniedKind, retryNeedsReload } = await fresh();
    await deniedKind(5000);
    expect(retryNeedsReload()).toBe(true);
  });
});

describe('blockedNote — the path a grown-up follows', () => {
  it('sends an iPhone on iOS 18 or later through Settings → Apps → Safari, and names the site', async () => {
    userAgent(IPHONE_26);
    const { blockedNote } = await fresh();
    const note = blockedNote('el');
    expect(note.path).toBe('Ρυθμίσεις → Εφαρμογές → Safari → Τοποθεσία → localhost → «Ερώτηση»');
    expect(note.more).toContain('Υπηρεσίες τοποθεσίας');
    expect(note.note).toContain('Ένας μεγάλος');
  });

  it('sends an iPhone on iOS 17 through Settings → Safari, where Safari still lived', async () => {
    userAgent(IPHONE_17);
    const { blockedNote } = await fresh();
    expect(blockedNote('en').path).toBe('Settings → Safari → Location → localhost → “Ask”');
    expect(blockedNote('en').more).toBeDefined();
  });

  it('sends Android to Chrome’s site permissions, with no phone-wide line', async () => {
    userAgent(ANDROID);
    const { blockedNote } = await fresh();
    const note = blockedNote('de');
    expect(note.path).toMatch(/^Chrome: /);
    expect(note.more).toBeUndefined();
  });

  it('tells a desktop that the browser, not a phone, is saying no', async () => {
    userAgent(MAC);
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
