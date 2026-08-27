/**
 * Hero Card Canvas Renderer
 * Generates a beautiful 1080x1350 shareable card image from hero data.
 * Instagram-ready format with WiseBot branding.
 */

interface HeroCardData {
  name: string;
  species?: string;
  gear?: string;
  contribution?: string;
  image: string; // base64 data URL or image URL
  heroClass?: string;
  lang: 'el' | 'en';
}

// Load an image from a URL/data-url
const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

// Draw rounded rectangle helper
const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
};

export const renderHeroCard = async (data: HeroCardData): Promise<string> => {
  const W = 1080;
  const H = 1350;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // ─── BACKGROUND ───
  // Dark gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#0f0a2e');
  bgGrad.addColorStop(0.5, '#0a0e1a');
  bgGrad.addColorStop(1, '#050510');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Ambient glow circles
  ctx.save();
  ctx.globalAlpha = 0.08;
  const glowGrad1 = ctx.createRadialGradient(W * 0.3, H * 0.2, 0, W * 0.3, H * 0.2, 400);
  glowGrad1.addColorStop(0, '#a855f7');
  glowGrad1.addColorStop(1, 'transparent');
  ctx.fillStyle = glowGrad1;
  ctx.fillRect(0, 0, W, H);

  const glowGrad2 = ctx.createRadialGradient(W * 0.7, H * 0.6, 0, W * 0.7, H * 0.6, 350);
  glowGrad2.addColorStop(0, '#3b82f6');
  glowGrad2.addColorStop(1, 'transparent');
  ctx.fillStyle = glowGrad2;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  // ─── HERO IMAGE ───
  try {
    const heroImg = await loadImage(data.image);
    // Draw hero image in top 60% with rounded corners
    const imgH = H * 0.62;
    const imgY = 40;
    const imgX = 60;
    const imgW = W - 120;

    ctx.save();
    roundRect(ctx, imgX, imgY, imgW, imgH, 40);
    ctx.clip();

    // Cover-fit the image
    const scale = Math.max(imgW / heroImg.width, imgH / heroImg.height);
    const sw = heroImg.width * scale;
    const sh = heroImg.height * scale;
    const sx = imgX + (imgW - sw) / 2;
    const sy = imgY + (imgH - sh) / 2;
    ctx.drawImage(heroImg, sx, sy, sw, sh);

    // Gradient overlay at bottom of image
    const imgOverlay = ctx.createLinearGradient(0, imgY + imgH - 250, 0, imgY + imgH);
    imgOverlay.addColorStop(0, 'rgba(10, 14, 26, 0)');
    imgOverlay.addColorStop(1, 'rgba(10, 14, 26, 0.95)');
    ctx.fillStyle = imgOverlay;
    ctx.fillRect(imgX, imgY, imgW, imgH);
    ctx.restore();

    // Subtle border around image
    ctx.save();
    roundRect(ctx, imgX, imgY, imgW, imgH, 40);
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // "GEN 1" badge
    ctx.save();
    const badgeX = imgX + imgW - 130;
    const badgeY = imgY + 24;
    roundRect(ctx, badgeX, badgeY, 106, 36, 10);
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.font = '900 14px "Nunito", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '3px';
    ctx.fillText('GEN 1', badgeX + 53, badgeY + 24);
    ctx.restore();
  } catch (e) {
    // If image fails, draw placeholder
    ctx.fillStyle = 'rgba(168, 85, 247, 0.1)';
    roundRect(ctx, 60, 40, W - 120, H * 0.62, 40);
    ctx.fill();
  }

  // ─── HERO INFO SECTION ───
  const infoY = H * 0.62 + 60;

  // Species / Class label
  if (data.species) {
    ctx.save();
    ctx.font = '900 16px "Nunito", sans-serif';
    ctx.fillStyle = '#a78bfa';
    ctx.textAlign = 'left';
    const speciesText = `★  ${data.species.toUpperCase()}`;
    ctx.fillText(speciesText, 80, infoY);
    ctx.restore();
  }

  // Hero Name (large)
  ctx.save();
  ctx.font = '900 italic 72px "Nunito", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';
  // Truncate name if too long
  const displayName = data.name.length > 16 ? data.name.substring(0, 14) + '...' : data.name;
  ctx.fillText(displayName.toUpperCase(), 80, infoY + 80);
  ctx.restore();

  // ─── STAT CARDS ───
  const statsY = infoY + 120;
  const cardW = (W - 200) / 2;
  const cardH = 100;

  const drawStatCard = (x: number, y: number, label: string, value: string) => {
    ctx.save();
    roundRect(ctx, x, y, cardW, cardH, 20);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Label
    ctx.font = '900 12px "Nunito", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.textAlign = 'left';
    ctx.fillText(label.toUpperCase(), x + 20, y + 30);

    // Value (truncated)
    ctx.font = '700 16px "Nunito", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    const truncVal = value.length > 30 ? value.substring(0, 28) + '...' : value;
    // Word wrap if needed
    const words = truncVal.split(' ');
    let line = '';
    let lineY = y + 55;
    for (const word of words) {
      const test = line + (line ? ' ' : '') + word;
      if (ctx.measureText(test).width > cardW - 40 && line) {
        ctx.fillText(line, x + 20, lineY);
        line = word;
        lineY += 22;
      } else {
        line = test;
      }
    }
    ctx.fillText(line, x + 20, lineY);

    ctx.restore();
  };

  if (data.gear) {
    const powerLabel = data.lang === 'el' ? 'ΔΥΝΑΜΗ' : 'POWER';
    drawStatCard(80, statsY, powerLabel, data.gear);
  }
  if (data.contribution) {
    const missionLabel = data.lang === 'el' ? 'ΑΠΟΣΤΟΛΗ' : 'MISSION';
    drawStatCard(80 + cardW + 20, statsY, missionLabel, data.contribution);
  }

  // ─── BRANDING BAR ───
  const brandY = H - 100;

  // Divider line
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(80, brandY - 20);
  ctx.lineTo(W - 80, brandY - 20);
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();

  // WiseBot logo text
  ctx.save();
  ctx.font = '900 22px "Nunito", sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.textAlign = 'left';
  ctx.fillText('🤖  WISEBOT ACADEMY', 80, brandY + 20);
  ctx.restore();

  // URL
  ctx.save();
  ctx.font = '700 16px "Nunito", sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.textAlign = 'right';
  // The site is wisebot.gr — wisebot.academy does not resolve, so every shared
  // hero card was advertising a dead address.
  ctx.fillText('wisebot.gr', W - 80, brandY + 20);
  ctx.restore();

  // "Made with AI" tag
  ctx.save();
  ctx.font = '700 13px "Nunito", sans-serif';
  ctx.fillStyle = 'rgba(168, 85, 247, 0.4)';
  ctx.textAlign = 'right';
  ctx.fillText('✨ Made with AI', W - 80, brandY + 50);
  ctx.restore();

  return canvas.toDataURL('image/png');
};

/**
 * Download a data URL as a file
 */
export const downloadDataUrl = (dataUrl: string, filename: string) => {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Share a data URL using Web Share API, with download fallback
 */
export const shareHeroCard = async (
  dataUrl: string,
  heroName: string,
  lang: 'el' | 'en'
): Promise<boolean> => {
  try {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const file = new File([blob], `WiseBot_${heroName}.png`, { type: 'image/png' });

    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: lang === 'el' ? `Ο ήρωάς μου: ${heroName}` : `My hero: ${heroName}`,
        text: lang === 'el'
          ? `Δες τον ${heroName}, τον νέο μου ήρωα στο WiseBot Academy! 🦸‍♂️`
          : `Check out ${heroName}, my new hero at WiseBot Academy! 🦸‍♂️`,
        files: [file],
      });
      return true;
    } else if (navigator.share) {
      await navigator.share({
        title: lang === 'el' ? `Ο ήρωάς μου: ${heroName}` : `My hero: ${heroName}`,
        text: lang === 'el'
          ? `Δες τον ${heroName}, τον νέο μου ήρωα στο WiseBot Academy!`
          : `Check out ${heroName}, my new hero at WiseBot Academy!`,
        url: window.location.href,
      });
      return true;
    }
  } catch (e) {
    console.error('Share failed:', e);
  }
  // Fallback: download
  downloadDataUrl(dataUrl, `WiseBot_Hero_${heroName.replace(/\s+/g, '_')}.png`);
  return false;
};
