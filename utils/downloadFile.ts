/**
 * Real file downloads, including cross-origin ones.
 * ==================================================
 * The HTML `download` attribute is silently ignored when the href points at
 * another origin — the browser just navigates to the file instead. Every
 * creation a child can keep lives on another origin (videos and songs on
 * Supabase Storage, 3D models on the Meshy CDN), so "Download" only ever
 * opened the file for viewing.
 *
 * Fetching the bytes and handing the browser a blob: URL sidesteps that, since
 * a blob belongs to the page's own origin. Requires the host to allow CORS —
 * Supabase Storage and Meshy both send `Access-Control-Allow-Origin: *`. If a
 * host ever stops, we fall back to opening the file so the child is never left
 * with a dead button.
 */

/** Trigger a browser download for a blob/data URL that is already local. */
const triggerDownload = (href: string, filename: string) => {
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export type DownloadResult = 'downloaded' | 'opened-fallback';

/**
 * Download `url` as `filename`. Resolves to 'downloaded' on a real save, or
 * 'opened-fallback' when CORS blocked the fetch and the file was opened in a
 * new tab instead. Throws only if both paths fail.
 */
export async function downloadFile(url: string, filename: string): Promise<DownloadResult> {
  // data: and blob: URLs are already same-origin — the attribute works as-is.
  if (url.startsWith('data:') || url.startsWith('blob:')) {
    triggerDownload(url, filename);
    return 'downloaded';
  }

  try {
    const response = await fetch(url, { mode: 'cors', credentials: 'omit' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    try {
      triggerDownload(objectUrl, filename);
    } finally {
      // Revoke after the click has been handed to the browser. Revoking
      // synchronously cancels the download in Safari.
      setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    }
    return 'downloaded';
  } catch (err) {
    console.warn('[downloadFile] blob download failed, opening instead:', err);
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) throw err instanceof Error ? err : new Error('Download failed');
    return 'opened-fallback';
  }
}
