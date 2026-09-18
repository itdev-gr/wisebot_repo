/**
 * GAME SHARE CARD — one 1080×1350 PNG for all six new games
 * =========================================================
 * The card is the distribution mechanism: the parent sends "8/10 σήμερα, εσύ;"
 * to the parents' group chat. So it is deliberately generic — every game passes
 * the same four strings (title, headline, big stat, optional sub-stat) and gets
 * back the same WiseBot-branded card, instead of six near-identical renderers
 * drifting apart.
 *
 * PRIVACY — this is a hard rule, not a preference (audience is 6–12):
 * nothing personal is ever drawn. No child name, no date of birth, no avatar of
 * the child, no free text the child typed. `GameCardData` has no field for any
 * of that on purpose; the only strings it takes are score/streak/branding text
 * written by us in `data/games/<key>.ts`. Rendering happens entirely on the
 * device — the PNG never leaves it unless the user picks a target in the OS
 * share sheet.
 *
 *   const url = await renderGameCard({
 *     gameTitle: t.title, headline: t.headline, stat: '8/10',
 *     substat: t.rounds, streak: 5, lang, accent: '#38bdf8',
 *   });
 *   const how = await shareGameCard(url, { title: t.shareTitle, text: t.shareText });
 *   // how: 'shared' | 'copied' | 'downloaded' — tell the child which one happened.
 *
 * Text casing is left to the caller: Greek must not be run through
 * `toUpperCase()` (it keeps the accents — «ΠΡΌΚΛΗΣΗ»), so pass strings already
 * cased the way they should appear.
 */
import { downloadFile } from './downloadFile';

export interface GameCardData {
  /** Game name, e.g. 'Η ΠΡΟΚΛΗΣΗ ΤΗΣ ΗΜΕΡΑΣ'. */
  gameTitle: string;
  /** One line of context, e.g. 'Πέτυχα 8 στα 10 σήμερα'. */
  headline: string;
  /** The number that carries the card, e.g. '8/10' or 'COMBO 48'. */
  stat: string;
  /** Optional second line under the stat, e.g. the three round names. */
  substat?: string;
  /** Day streak; draws the 🔥 pill when > 0. */
  streak?: number;
  lang: 'el' | 'en';
  /** Hex accent, default WiseBot purple. */
  accent?: string;
}

const W = 1080;
const H = 1350;
const MARGIN = 80;
const FONT = '"Nunito", system-ui, sans-serif';
const DEFAULT_ACCENT = '#a855f7';
const WISEBOT_AVATAR = '/images/wisebot.jpg';

/* ───────────────────────────── small helpers ───────────────────────────── */

/** Load an image, resolving to null instead of rejecting — a missing avatar
 *  must never cost the child their card. */
export function loadImageOrNull(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
      // Cached images can already be complete before onload is attached.
      if (img.complete && img.naturalWidth > 0) resolve(img);
    } catch {
      resolve(null);
    }
  });
}

export function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number,
) {
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.lineTo(x + w - rad, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rad);
  ctx.lineTo(x + w, y + h - rad);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
  ctx.lineTo(x + rad, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rad);
  ctx.lineTo(x, y + rad);
  ctx.quadraticCurveTo(x, y, x + rad, y);
  ctx.closePath();
}

/** '#a855f7' | '#a5f' → 'rgba(168,85,247,0.4)'. Falls back to the default
 *  accent rather than producing an invalid fillStyle. */
export function withAlpha(hex: string, alpha: number): string {
  let h = (hex || '').trim().replace('#', '');
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  if (!/^[0-9a-fA-F]{6}$/.test(h)) h = DEFAULT_ACCENT.slice(1);
  const n = parseInt(h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

export function setFont(ctx: CanvasRenderingContext2D, weight: number, size: number, italic = false) {
  ctx.font = `${italic ? 'italic ' : ''}${weight} ${size}px ${FONT}`;
}

/** Largest size in [min, start] at which `text` fits `maxWidth`. */
export function fitFont(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  start: number,
  min: number,
  weight = 900,
  italic = false,
): number {
  let size = start;
  setFont(ctx, weight, size, italic);
  while (size > min && ctx.measureText(text).width > maxWidth) {
    size -= Math.max(2, Math.round(size * 0.06));
    setFont(ctx, weight, size, italic);
  }
  return size;
}

/** Word-wrap into at most `maxLines`, ellipsising the last one. */
function wrapLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number,
): string[] {
  const words = (text || '').split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines) break;
    } else {
      line = next;
    }
  }
  if (lines.length < maxLines && line) lines.push(line);
  if (lines.length === maxLines) {
    // Ellipsise the tail if anything did not fit.
    let last = lines[maxLines - 1];
    const used = lines.join(' ');
    if (used.length < (text || '').trim().length) {
      while (last.length > 1 && ctx.measureText(`${last}…`).width > maxWidth) {
        last = last.slice(0, -1);
      }
      lines[maxLines - 1] = `${last}…`;
    }
  }
  return lines;
}

/* ────────────────────────────── the renderer ───────────────────────────── */

/**
 * Render the card and resolve to a PNG data URL. Never rejects because of the
 * avatar: if `/images/wisebot.jpg` fails (offline first load, blocked request)
 * the card is drawn with a badge in its place.
 */
export async function renderGameCard(data: GameCardData): Promise<string> {
  const accent = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test((data.accent || '').trim())
    ? (data.accent as string)
    : DEFAULT_ACCENT;
  const el = data.lang === 'el';

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('[gameShareCard] 2D canvas context unavailable');

  /* ─── background: dark gradient + two soft glows ─── */
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0f0a2e');
  bg.addColorStop(0.5, '#0a0e1a');
  bg.addColorStop(1, '#050510');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  const glowA = ctx.createRadialGradient(W * 0.22, H * 0.14, 0, W * 0.22, H * 0.14, 520);
  glowA.addColorStop(0, withAlpha(accent, 0.22));
  glowA.addColorStop(1, 'transparent');
  ctx.fillStyle = glowA;
  ctx.fillRect(0, 0, W, H);

  const glowB = ctx.createRadialGradient(W * 0.82, H * 0.72, 0, W * 0.82, H * 0.72, 480);
  glowB.addColorStop(0, 'rgba(59, 130, 246, 0.16)');
  glowB.addColorStop(1, 'transparent');
  ctx.fillStyle = glowB;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  /* ─── header: WiseBot avatar + wordmark ─── */
  const avatar = await loadImageOrNull(WISEBOT_AVATAR);
  const avCx = MARGIN + 62;
  const avCy = 152;
  const avR = 62;

  ctx.save();
  ctx.beginPath();
  ctx.arc(avCx, avCy, avR, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  if (avatar) {
    const scale = Math.max((avR * 2) / avatar.width, (avR * 2) / avatar.height);
    const dw = avatar.width * scale;
    const dh = avatar.height * scale;
    ctx.drawImage(avatar, avCx - dw / 2, avCy - dh / 2, dw, dh);
  } else {
    ctx.fillStyle = withAlpha(accent, 0.25);
    ctx.fillRect(avCx - avR, avCy - avR, avR * 2, avR * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    setFont(ctx, 700, 56);
    ctx.textAlign = 'center';
    ctx.fillText('🤖', avCx, avCy + 20);
  }
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(avCx, avCy, avR, 0, Math.PI * 2);
  ctx.strokeStyle = withAlpha(accent, 0.55);
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.textAlign = 'left';
  ctx.letterSpacing = '5px';
  setFont(ctx, 900, 38);
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.fillText('WISEBOT', avCx + avR + 34, avCy - 4);
  setFont(ctx, 900, 26);
  ctx.fillStyle = withAlpha(accent, 0.8);
  ctx.fillText('ACADEMY', avCx + avR + 34, avCy + 36);
  ctx.restore();

  /* ─── main panel ─── */
  const panelX = MARGIN;
  const panelY = 300;
  const panelW = W - MARGIN * 2;
  const panelH = 790;
  const centerX = W / 2;
  const innerW = panelW - 100;

  ctx.save();
  roundRect(ctx, panelX, panelY, panelW, panelH, 48);
  ctx.fillStyle = 'rgba(255,255,255,0.05)';
  ctx.fill();
  ctx.strokeStyle = withAlpha(accent, 0.22);
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();

  /* ─── panel content ───
   * Measured first, then centred as one stack. The six games pass wildly
   * different shapes — one line or two, streak or no streak, '8/10' or
   * 'COMBO 148' — and fixed y positions leave whichever variant is shortest
   * sitting in the top half of an empty panel. */
  const hasStreak = typeof data.streak === 'number' && data.streak > 0;
  // Greek needs the singular on day one — «1 ΜΕΡΑ ΣΕΡΙ», not «1 ΜΕΡΕΣ ΣΕΡΙ» — and day
  // one is the most-shared day of all. English «1 DAY STREAK» is already idiomatic.
  const streakText = hasStreak
    ? (el
      ? `🔥 ${data.streak} ${data.streak === 1 ? 'ΜΕΡΑ' : 'ΜΕΡΕΣ'} ΣΕΡΙ`
      : `🔥 ${data.streak} DAY STREAK`)
    : '';

  // Measure (font state matters, so each measurement sets its own font).
  ctx.save();
  ctx.letterSpacing = '7px';
  const titleSize = data.gameTitle ? fitFont(ctx, data.gameTitle, innerW, 32, 18) : 0;
  ctx.letterSpacing = '0px';
  setFont(ctx, 800, 44);
  const headlineLines = wrapLines(ctx, data.headline, innerW, 2);
  const statSize = fitFont(ctx, data.stat, innerW, 250, 70, 900, true);
  setFont(ctx, 700, 30);
  const subLines = data.substat ? wrapLines(ctx, data.substat, innerW, 2) : [];
  setFont(ctx, 900, 32);
  ctx.letterSpacing = '3px';
  const pillW = hasStreak ? Math.min(ctx.measureText(streakText).width + 80, innerW) : 0;
  ctx.restore();

  const TITLE_H = titleSize * 1.25;
  const HEAD_LH = 56;
  const STAT_H = statSize * 1.02;
  const SUB_LH = 40;
  const PILL_H = 88;

  let stackH = 0;
  if (titleSize) stackH += TITLE_H + 34;
  if (headlineLines.length) stackH += headlineLines.length * HEAD_LH + 52;
  stackH += STAT_H;
  if (subLines.length) stackH += 30 + subLines.length * SUB_LH;
  if (hasStreak) stackH += 44 + PILL_H;

  let cursor = panelY + Math.max(48, (panelH - stackH) / 2);

  // Game title
  if (titleSize) {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.letterSpacing = '7px';
    setFont(ctx, 900, titleSize);
    ctx.fillStyle = withAlpha(accent, 0.95);
    ctx.fillText(data.gameTitle, centerX, cursor + titleSize * 0.78);
    ctx.restore();
    cursor += TITLE_H + 34;
  }

  // Headline (up to two lines)
  if (headlineLines.length) {
    ctx.save();
    ctx.textAlign = 'center';
    setFont(ctx, 800, 44);
    ctx.fillStyle = 'rgba(255,255,255,0.82)';
    headlineLines.forEach((line, i) => {
      ctx.fillText(line, centerX, cursor + 36 + i * HEAD_LH);
    });
    ctx.restore();
    cursor += headlineLines.length * HEAD_LH + 52;
  }

  // The stat — the reason the card exists
  ctx.save();
  ctx.textAlign = 'center';
  setFont(ctx, 900, statSize, true);
  ctx.shadowColor = withAlpha(accent, 0.55);
  ctx.shadowBlur = 60;
  ctx.fillStyle = '#ffffff';
  ctx.fillText(data.stat, centerX, cursor + statSize * 0.78);
  ctx.restore();
  cursor += STAT_H;

  // Sub-stat
  if (subLines.length) {
    cursor += 30;
    ctx.save();
    ctx.textAlign = 'center';
    setFont(ctx, 700, 30);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    subLines.forEach((line, i) => {
      ctx.fillText(line, centerX, cursor + 24 + i * SUB_LH);
    });
    ctx.restore();
    cursor += subLines.length * SUB_LH;
  }

  // Streak pill
  if (hasStreak) {
    cursor += 44;
    ctx.save();
    setFont(ctx, 900, 32);
    ctx.letterSpacing = '3px';
    roundRect(ctx, centerX - pillW / 2, cursor, pillW, PILL_H, PILL_H / 2);
    ctx.fillStyle = withAlpha(accent, 0.16);
    ctx.fill();
    ctx.strokeStyle = withAlpha(accent, 0.45);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.textAlign = 'center';
    ctx.fillText(streakText, centerX, cursor + 58);
    ctx.restore();
  }

  /* ─── footer ─── */
  const footY = H - 150;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(MARGIN, footY);
  ctx.lineTo(W - MARGIN, footY);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.textAlign = 'left';
  setFont(ctx, 900, 30);
  ctx.fillStyle = withAlpha(accent, 0.75);
  ctx.fillText(el ? 'ΠΑΙΞΕ ΚΙ ΕΣΥ' : 'PLAY IT TOO', MARGIN, footY + 54);
  setFont(ctx, 700, 22);
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fillText(el ? 'Δωρεάν παιχνίδια στο WiseBot Academy' : 'Free games at WiseBot Academy', MARGIN, footY + 96);
  ctx.restore();

  ctx.save();
  ctx.textAlign = 'right';
  setFont(ctx, 900, 30);
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.fillText('wisebot.gr', W - MARGIN, footY + 54);
  ctx.restore();

  return canvas.toDataURL('image/png');
}

/* ─────────────────────────────── sharing ───────────────────────────────── */

export type GameShareResult = 'shared' | 'copied' | 'downloaded';

function fileNameFor(title: string): string {
  const slug = (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 32);
  return `wisebot-${slug || 'game'}.png`;
}

/**
 * Hand the card to the OS share sheet, and report which path actually ran so
 * the UI can say «Το αντέγραψα!» when no sheet ever appeared:
 *
 *   'shared'     — the native share sheet took the PNG (this includes the user
 *                  dismissing it; the sheet ran, there is nothing to fall back to)
 *   'copied'     — the PNG went to the clipboard (desktop browsers)
 *   'downloaded' — the PNG was saved as a file (last resort, always works)
 *
 * `payload.title` / `payload.text` must be our own localised strings — never a
 * child's name or anything they typed.
 */
export async function shareGameCard(
  dataUrl: string,
  payload: { title: string; text: string },
): Promise<GameShareResult> {
  const filename = fileNameFor(payload.title);

  let file: File | null = null;
  try {
    const blob = await (await fetch(dataUrl)).blob();
    file = new File([blob], filename, { type: 'image/png' });
  } catch {
    // Can't build a File — share sheet and clipboard are both out; download.
  }

  if (file && typeof navigator !== 'undefined' && navigator.share) {
    const shareData = { title: payload.title, text: payload.text, files: [file] };
    let canShareFiles = false;
    try {
      canShareFiles = !!navigator.canShare?.(shareData);
    } catch {
      canShareFiles = false;
    }
    if (canShareFiles) {
      try {
        await navigator.share(shareData);
        return 'shared';
      } catch (err) {
        // The user dismissing the sheet is not a failure — do not then dump a
        // file they just declined to share.
        if ((err as { name?: string } | null)?.name === 'AbortError') return 'shared';
      }
    }
  }

  if (
    file &&
    typeof navigator !== 'undefined' &&
    typeof ClipboardItem !== 'undefined' &&
    navigator.clipboard?.write
  ) {
    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': file })]);
      return 'copied';
    } catch {
      // Clipboard images are blocked in Firefox and in Android WebViews.
    }
  }

  await downloadFile(dataUrl, filename);
  return 'downloaded';
}
