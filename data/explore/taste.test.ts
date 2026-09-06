/**
 * Every "taste the city" file: shape, both languages, kid-safety (no alcohol offered to a
 * child, wine only as an adults-only note), no business names, three or more things a child
 * can actually tick so the taste stamp is reachable.
 */
import { describe, it, expect } from 'vitest';
import { CITY_META, loadTaste, hasTaste } from './registry';
import type { TasteItem } from './types';
import { TASTE_BADGE_AT } from './progress';

const both = (v: { el: string; en: string } | undefined, where: string) => {
  expect(v?.el?.trim(), `${where}: Greek`).toBeTruthy();
  expect(v?.en?.trim(), `${where}: English`).toBeTruthy();
};
// A child is never told to drink these; they may only appear on adults-only items.
const ALCOHOL = /\b(wine|beer|liqueur|brandy|schnapps|cocktail|vodka|whisky|rakı|raki|ouzo|ginjinha|port wine|vinho do porto|sangria|pálinka|slivovitz|jenever|absinthe)\b|(^|[^\p{L}])(κρασ|μπίρ|μπύρ|λικέρ|ούζο|ρακ[ήί]|τσίπουρ|κοκτέιλ|σανγκρί)/iu;
// The card names kinds of places, never a business (the flyer was an ad; this is not).
const BUSINESS = /\b(McDonald|Starbucks|Lello|Majestic|Manteigaria|Pastéis de Belém|Confeitaria|Cervejaria|Café A Brasileira|Casa|Restaurante) [A-Z]/;

describe('taste the city', () => {
  it('cities that have a taste file load it; the rest get an empty list, not a crash', async () => {
    expect(await loadTaste('atlantis')).toEqual([]);
    for (const meta of CITY_META) {
      const items = await loadTaste(meta.id);
      expect(Array.isArray(items), meta.id).toBe(true);
      if (!hasTaste(meta.id)) expect(items).toEqual([]);
    }
  });

  for (const meta of CITY_META) {
    it(`${meta.id}: well-formed, bilingual, kid-safe`, async () => {
      if (!hasTaste(meta.id)) return;
      const items: TasteItem[] = await loadTaste(meta.id);
      expect(items.length, 'items').toBeGreaterThanOrEqual(5);
      expect(items.length, 'items').toBeLessThanOrEqual(9);
      expect(new Set(items.map(i => i.id)).size, 'unique ids').toBe(items.length);
      const kids = items.filter(i => !i.adultsOnly);
      expect(kids.length, 'tickable items').toBeGreaterThanOrEqual(TASTE_BADGE_AT + 1);
      expect(kids.some(i => i.brave === 1), 'at least one easy taste').toBe(true);
      for (const i of items) {
        const w = `${meta.id}/${i.id}`;
        expect(i.id, w).toMatch(/^[a-z0-9-]+$/);
        expect(i.emoji.trim(), `${w} emoji`).toBeTruthy();
        expect(['dish', 'sweet', 'snack', 'drink'], `${w} kind`).toContain(i.kind);
        expect([1, 2, 3], `${w} brave`).toContain(i.brave);
        for (const f of ['name', 'what', 'kidTip', 'funFact', 'where'] as const) both(i[f], `${w}.${f}`);
        if (!['GR', 'CY'].includes(meta.countryCode)) expect(i.name.el, `${w} keeps the local name`).toMatch(/\(|[A-Za-zÀ-ÿ]/);
        for (const f of ['what', 'kidTip', 'where'] as const) {
          expect(i[f].en.length, `${w}.${f} en length`).toBeLessThanOrEqual(260);
          expect(i[f].el.length, `${w}.${f} el length`).toBeLessThanOrEqual(300);
        }
        if (!i.adultsOnly) {
          const text = `${i.name.en} ${i.what.en} ${i.kidTip.en} ${i.where.en} ${i.name.el} ${i.what.el} ${i.kidTip.el} ${i.where.el}`;
          expect(text, `${w} offers alcohol to a child`).not.toMatch(ALCOHOL);
        }
        const all = Object.values(i).filter((v): v is { el: string; en: string } => !!v && typeof v === 'object' && 'en' in v).map(v => `${v.el} ${v.en}`).join(' ');
        expect(all, `${w} names a business`).not.toMatch(BUSINESS);
        expect(all, `${w} WiseBot is feminine`).not.toMatch(/(^|[^\p{L}])(ο|Ο|τον|Τον|του|Του|έναν|Έναν)\s+WiseBot\b/u);
      }
    });
  }
});
