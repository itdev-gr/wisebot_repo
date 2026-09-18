/**
 * PASSPORT SHARE CARD — «Μοιράσου το διαβατήριό μου»
 * ===================================================
 * The one artefact WiseBot World hands to a parents' group chat: a 1080×1350 PNG with the
 * flags of the countries the family has entered, the three totals and a sentence a child
 * is proud of. It is the product's distribution mechanism (BUSINESS-PLAN.md §6, week 3),
 * so it carries the parent's invite link when they are signed in — the same
 * `wisebot.gr/?ref=CODE` the Account screen already gives out, which pays the inviter once
 * from the signup webhook.
 *
 * PRIVACY — a hard rule, not a preference (audience is 6–12): nothing personal is drawn
 * and nothing personal is in the share text. No child name, no dates (an entry date says
 * where a family was on a given day), no city or place names, no position. The card takes
 * flags and three counts, and that is all `PassportCardInput` can carry, by construction.
 * Rendering happens entirely on the device; the PNG leaves it only through the OS share
 * sheet, and only if the parent picks a target.
 *
 * Two layers, on purpose: `passportCardModel()` is pure — every sentence in every language,
 * the flag cap, the link — and is what the tests pin. `renderPassportCard()` only draws.
 */
import type { WorldLang } from '../data/world/types';
import {
  fitFont,
  loadImageOrNull,
  roundRect,
  setFont,
  shareGameCard,
  withAlpha,
  type GameShareResult,
} from './gameShareCard';

export interface PassportCardInput {
  lang: WorldLang;
  /** Flags of the countries entered, in passport order. Capped on the card. */
  flags: string[];
  countries: number;
  cities: number;
  places: number;
  /** The parent's invite code from `/api/auth/referral`; absent for guests. */
  referralCode?: string | null;
}

export interface PassportCardModel {
  lang: WorldLang;
  kicker: string;
  title: string;
  /** The proud sentence: «5 σφραγίδες σε 2 χώρες!» */
  headline: string;
  flags: string[];
  stats: { value: number; label: string }[];
  /** What the card prints at the bottom and what the share text links to. */
  link: string;
  shareTitle: string;
  shareText: string;
}

/** How many flags fit on the card without shrinking into confetti: two rows of six. */
export const MAX_FLAGS = 12;

const SITE = 'https://wisebot.gr';

type Dict<T> = Record<WorldLang, T>;

const KICKER = 'WISEBOT WORLD';

const TITLE: Dict<string> = {
  el: 'Το διαβατήριό μου',
  en: 'My passport',
  de: 'Mein Reisepass',
  fr: 'Mon passeport',
  es: 'Mi pasaporte',
  it: 'Il mio passaporto',
};

const LABELS: Dict<[string, string, string]> = {
  el: ['ΧΩΡΕΣ', 'ΠΟΛΕΙΣ', 'ΜΕΡΗ'],
  en: ['COUNTRIES', 'CITIES', 'PLACES'],
  de: ['LÄNDER', 'STÄDTE', 'ORTE'],
  fr: ['PAYS', 'VILLES', 'LIEUX'],
  es: ['PAÍSES', 'CIUDADES', 'LUGARES'],
  it: ['PAESI', 'CITTÀ', 'LUOGHI'],
};

/**
 * Whole sentences per language, never assembled from fragments: the six do not agree on
 * word order or on how a plural is made. Three shapes — nothing yet, countries only
 * (entry stamps, no place stamped), and the full count.
 */
const HEADLINE: Dict<(countries: number, places: number) => string> = {
  el: (c, p) =>
    c === 0
      ? 'Η πρώτη σφραγίδα με περιμένει!'
      : p === 0
        ? `${c} ${c === 1 ? 'χώρα' : 'χώρες'} στο διαβατήριό μου!`
        : `${p} ${p === 1 ? 'σφραγίδα' : 'σφραγίδες'} σε ${c} ${c === 1 ? 'χώρα' : 'χώρες'}!`,
  en: (c, p) =>
    c === 0
      ? 'My first stamp is waiting!'
      : p === 0
        ? `${c} ${c === 1 ? 'country' : 'countries'} in my passport!`
        : `${p} ${p === 1 ? 'stamp' : 'stamps'} in ${c} ${c === 1 ? 'country' : 'countries'}!`,
  de: (c, p) =>
    c === 0
      ? 'Mein erster Stempel wartet!'
      : p === 0
        ? `${c} ${c === 1 ? 'Land' : 'Länder'} in meinem Reisepass!`
        : `${p} Stempel in ${c} ${c === 1 ? 'Land' : 'Ländern'}!`,
  fr: (c, p) =>
    c === 0
      ? 'Mon premier tampon m’attend !'
      : p === 0
        ? `${c} pays dans mon passeport !`
        : `${p} tampon${p === 1 ? '' : 's'} dans ${c} pays !`,
  es: (c, p) =>
    c === 0
      ? '¡Mi primer sello me espera!'
      : p === 0
        ? `¡${c} ${c === 1 ? 'país' : 'países'} en mi pasaporte!`
        : `¡${p} sello${p === 1 ? '' : 's'} en ${c} ${c === 1 ? 'país' : 'países'}!`,
  it: (c, p) =>
    c === 0
      ? 'Il mio primo timbro mi aspetta!'
      : p === 0
        ? `${c} ${c === 1 ? 'Paese' : 'Paesi'} nel mio passaporto!`
        : `${p} ${p === 1 ? 'timbro' : 'timbri'} in ${c} ${c === 1 ? 'Paese' : 'Paesi'}!`,
};

/** The line under the card in the share sheet. Ours, always; never anything typed. */
const SHARE_TEXT: Dict<(headline: string, link: string) => string> = {
  el: (h, l) => `${h} Ταξιδεύουμε με το WiseBot World: ${l}`,
  en: (h, l) => `${h} We travel with WiseBot World: ${l}`,
  de: (h, l) => `${h} Wir reisen mit WiseBot World: ${l}`,
  fr: (h, l) => `${h} On voyage avec WiseBot World : ${l}`,
  es: (h, l) => `${h} Viajamos con WiseBot World: ${l}`,
  it: (h, l) => `${h} Viaggiamo con WiseBot World: ${l}`,
};

/** A referral code is ours (server-generated, short, alphanumeric); anything else is dropped. */
const cleanCode = (code?: string | null): string | null => {
  const c = (code ?? '').trim();
  return /^[A-Za-z0-9_-]{3,32}$/.test(c) ? c : null;
};

const clampCount = (n: number): number => (Number.isFinite(n) && n > 0 ? Math.floor(n) : 0);

export function passportCardModel(input: PassportCardInput): PassportCardModel {
  const lang: WorldLang = input.lang in TITLE ? input.lang : 'en';
  const countries = clampCount(input.countries);
  const cities = clampCount(input.cities);
  const places = clampCount(input.places);
  const flags = (Array.isArray(input.flags) ? input.flags : [])
    .filter((f) => typeof f === 'string' && f.trim().length > 0)
    .slice(0, MAX_FLAGS);
  const code = cleanCode(input.referralCode);
  const link = code ? `${SITE}/?ref=${code}` : `${SITE}/world`;
  const headline = HEADLINE[lang](countries, places);
  const [l1, l2, l3] = LABELS[lang];
  return {
    lang,
    kicker: KICKER,
    title: TITLE[lang],
    headline,
    flags,
    stats: [
      { value: countries, label: l1 },
      { value: cities, label: l2 },
      { value: places, label: l3 },
    ],
    link,
    // Also the file name's stem («wisebot-world-passport.png» via shareGameCard).
    shareTitle: 'World passport',
    shareText: SHARE_TEXT[lang](headline, link),
  };
}

/* ────────────────────────────── the renderer ───────────────────────────── */

const W = 1080;
const H = 1350;
const MARGIN = 80;
const ACCENT = '#3b82f6';
const ACCENT_2 = '#a855f7';
const WISEBOT_AVATAR = '/images/wisebot.jpg';
const EMOJI_FONT = '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Twemoji Mozilla", sans-serif';

/**
 * Draw the card and resolve to a PNG data URL. Never rejects because of the avatar: a
 * missing image costs a badge, not the card.
 */
export async function renderPassportCard(model: PassportCardModel): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas 2d context unavailable');

  // Background: the app's night sky, with the two brand glows.
  ctx.fillStyle = '#0B0F1A';
  ctx.fillRect(0, 0, W, H);
  const glowA = ctx.createRadialGradient(W * 0.2, H * 0.15, 0, W * 0.2, H * 0.15, 620);
  glowA.addColorStop(0, withAlpha(ACCENT, 0.45));
  glowA.addColorStop(1, withAlpha(ACCENT, 0));
  ctx.fillStyle = glowA;
  ctx.fillRect(0, 0, W, H);
  const glowB = ctx.createRadialGradient(W * 0.85, H * 0.9, 0, W * 0.85, H * 0.9, 620);
  glowB.addColorStop(0, withAlpha(ACCENT_2, 0.4));
  glowB.addColorStop(1, withAlpha(ACCENT_2, 0));
  ctx.fillStyle = glowB;
  ctx.fillRect(0, 0, W, H);

  // Passport frame with a perforated binding edge — it is a passport, not a poster.
  ctx.save();
  roundRect(ctx, MARGIN - 24, MARGIN - 24, W - 2 * (MARGIN - 24), H - 2 * (MARGIN - 24), 48);
  ctx.strokeStyle = 'rgba(255,255,255,0.14)';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.setLineDash([10, 14]);
  ctx.beginPath();
  ctx.moveTo(MARGIN + 6, MARGIN + 40);
  ctx.lineTo(MARGIN + 6, H - MARGIN - 40);
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();

  // Kicker and title.
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  setFont(ctx, 900, 30);
  ctx.letterSpacing = '8px';
  ctx.fillText(model.kicker, MARGIN + 40, MARGIN + 60);
  ctx.letterSpacing = '0px';

  ctx.fillStyle = '#ffffff';
  const titleSize = fitFont(ctx, model.title, W - 2 * MARGIN - 220, 92, 56, 900, true);
  setFont(ctx, 900, titleSize, true);
  ctx.fillText(model.title, MARGIN + 40, MARGIN + 60 + titleSize + 24);

  // WiseBot avatar, top right; a badge if the image is not there.
  const avatar = await loadImageOrNull(WISEBOT_AVATAR);
  const aSize = 150;
  const aX = W - MARGIN - aSize;
  const aY = MARGIN + 6;
  ctx.save();
  roundRect(ctx, aX, aY, aSize, aSize, 40);
  ctx.clip();
  if (avatar) {
    ctx.drawImage(avatar, aX, aY, aSize, aSize);
  } else {
    const g = ctx.createLinearGradient(aX, aY, aX + aSize, aY + aSize);
    g.addColorStop(0, ACCENT);
    g.addColorStop(1, ACCENT_2);
    ctx.fillStyle = g;
    ctx.fillRect(aX, aY, aSize, aSize);
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    setFont(ctx, 900, 64);
    ctx.fillText('W', aX + aSize / 2, aY + aSize / 2 + 4);
  }
  ctx.restore();
  ctx.save();
  roundRect(ctx, aX, aY, aSize, aSize, 40);
  ctx.strokeStyle = 'rgba(255,255,255,0.25)';
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.restore();

  // Flags: two rows of six, big enough to read across a room. None yet: a dotted page.
  const flagsTop = MARGIN + 250;
  const flagsBottom = flagsTop + 360;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (model.flags.length === 0) {
    ctx.save();
    roundRect(ctx, MARGIN + 40, flagsTop, W - 2 * MARGIN - 40, 300, 40);
    ctx.setLineDash([12, 16]);
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();
    ctx.font = `160px ${EMOJI_FONT}`;
    ctx.fillText('🛂', W / 2, flagsTop + 150);
  } else {
    const perRow = Math.min(6, Math.max(3, Math.ceil(model.flags.length / 2)));
    const rows = Math.ceil(model.flags.length / perRow);
    const cell = Math.min(160, (W - 2 * MARGIN - 40) / perRow);
    const size = Math.round(cell * 0.72);
    const startY = flagsTop + (rows === 1 ? 150 : 80);
    ctx.font = `${size}px ${EMOJI_FONT}`;
    model.flags.forEach((flag, i) => {
      const row = Math.floor(i / perRow);
      const inRow = row === rows - 1 ? model.flags.length - row * perRow : perRow;
      const col = i % perRow;
      const rowWidth = inRow * cell;
      const x = W / 2 - rowWidth / 2 + col * cell + cell / 2;
      const y = startY + row * (cell + 10);
      ctx.fillText(flag, x, y);
    });
  }

  // The proud sentence.
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  const hSize = fitFont(ctx, model.headline, W - 2 * MARGIN - 40, 84, 44, 900);
  setFont(ctx, 900, hSize);
  ctx.fillText(model.headline, W / 2, flagsBottom + 60);

  // Three totals.
  const tilesTop = flagsBottom + 130;
  const gap = 24;
  const tileW = (W - 2 * MARGIN - 40 - gap * 2) / 3;
  const tileH = 200;
  model.stats.forEach((stat, i) => {
    const x = MARGIN + 40 + i * (tileW + gap);
    ctx.save();
    roundRect(ctx, x, tilesTop, tileW, tileH, 36);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.14)';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    setFont(ctx, 900, 92, true);
    ctx.fillText(String(stat.value), x + tileW / 2, tilesTop + 112);
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    const lSize = fitFont(ctx, stat.label, tileW - 40, 26, 18, 900);
    setFont(ctx, 900, lSize);
    ctx.letterSpacing = '4px';
    ctx.fillText(stat.label, x + tileW / 2, tilesTop + 162);
    ctx.letterSpacing = '0px';
  });

  // Footer: the link. With a referral code this is the parent's invite.
  const footY = H - MARGIN - 20;
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  setFont(ctx, 800, 28);
  ctx.fillText(model.link.replace(/^https?:\/\//, ''), MARGIN + 40, footY);
  ctx.textAlign = 'right';
  ctx.fillStyle = withAlpha(ACCENT, 0.9);
  setFont(ctx, 900, 28);
  ctx.letterSpacing = '6px';
  ctx.fillText('WISEBOT', W - MARGIN, footY);
  ctx.letterSpacing = '0px';

  return canvas.toDataURL('image/png');
}

/** Render, then hand to the share sheet (clipboard, then download, as fallbacks). */
export async function sharePassportCard(model: PassportCardModel): Promise<GameShareResult> {
  const url = await renderPassportCard(model);
  return shareGameCard(url, { title: model.shareTitle, text: model.shareText });
}
