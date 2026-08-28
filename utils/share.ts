/**
 * Share with guaranteed feedback on every platform.
 * ==================================================
 * navigator.share is missing on desktop browsers, and navigator.clipboard
 * .writeText rejects silently inside the Android WebView — so a bare
 * share-then-writeText chain can no-op with no feedback at all. This helper
 * runs the full chain — native share sheet → async clipboard → legacy
 * execCommand textarea copy — and reports which path landed, so callers can
 * show "Copied!" feedback whenever the OS share sheet never appeared.
 */

export type ShareResult = 'shared' | 'copied' | 'cancelled';

export interface SharePayload {
  title: string;
  text: string;
  /** Defaults to the current page URL. */
  url?: string;
  /** Optional data:/blob: image, attached as a file where the OS supports it. */
  imageUrl?: string;
  /** What lands on the clipboard in the fallback — defaults to `${text}\n${url}`. */
  clipboardText?: string;
}

/**
 * Share via the OS sheet when available, otherwise copy to the clipboard.
 * Resolves to 'shared' (sheet handled it), 'copied' (clipboard fallback —
 * show copied feedback) or 'cancelled' (user dismissed the sheet).
 */
export async function shareContent({ title, text, url, imageUrl, clipboardText }: SharePayload): Promise<ShareResult> {
  const shareUrl = url || window.location.href;

  // Try Web Share API first (mobile / supported browsers)
  if (navigator.share) {
    try {
      const shareData: ShareData = {
        title,
        text,
        url: shareUrl,
      };

      // If imageUrl is a data URL or blob, try to share as file
      if (imageUrl && navigator.canShare) {
        try {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const file = new File([blob], 'wisebot-creation.png', { type: blob.type });
          const dataWithFile = { ...shareData, files: [file] };
          if (navigator.canShare(dataWithFile)) {
            await navigator.share(dataWithFile);
            return 'shared';
          }
        } catch {
          // Fall through to share without file
        }
      }

      await navigator.share(shareData);
      return 'shared';
    } catch (err: any) {
      // User cancelled — done. Any other share failure falls through to clipboard.
      if (err?.name === 'AbortError') return 'cancelled';
    }
  }

  // Fallback: copy to clipboard
  const copyText = clipboardText ?? `${text}\n${shareUrl}`;
  try {
    await navigator.clipboard.writeText(copyText);
  } catch {
    // Last resort: use old execCommand (async clipboard rejects in Android WebView)
    const textarea = document.createElement('textarea');
    textarea.value = copyText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  return 'copied';
}
