/**
 * FETCH WITH TIMEOUT — Vercel Serverless
 * ========================================
 * Wraps fetch() with an AbortController timeout.
 * Prevents functions from hanging when external APIs are slow/down.
 *
 * Usage:
 *   const res = await fetchWithTimeout('https://api.openai.com/...', {
 *     method: 'POST',
 *     headers: { ... },
 *     body: JSON.stringify({ ... }),
 *   }, 25000); // 25 second timeout
 */

export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs: number = 25000
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } catch (err: any) {
    if (err.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeoutMs}ms: ${url.split('?')[0]}`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
