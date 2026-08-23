/**
 * Meshy.ai Image-to-3D Generation Endpoint
 * ==========================================
 * Converts an image to a real 3D model using Meshy.ai API.
 * Returns a taskId that can be polled with /api/ai/meshy-status.
 *
 * POST /api/ai/meshy-generate
 *
 * Request body:
 *   {
 *     imageUrl: string,        // Base64 data URI or public URL
 *     enablePbr?: boolean,     // Enable PBR maps (default false)
 *     targetPolycount?: number // Target polygons (default 30000)
 *   }
 *
 * Response:
 *   { taskId: string }
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

const MESHY_API_URL = 'https://api.meshy.ai/openapi/v1/image-to-3d';

/**
 * Validate the supplied imageUrl before forwarding it to Meshy, which fetches
 * the URL server-side. Accept only image data URIs or public HTTPS URLs, and
 * reject internal/loopback/link-local hosts to prevent SSRF abuse.
 */
function isValidImageUrl(value: unknown): value is string {
  if (typeof value !== 'string' || value.length > 12_000_000) return false;

  if (/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(value)) return true;

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  if (url.protocol !== 'https:') return false;

  const host = url.hostname.toLowerCase();
  if (host === 'localhost' || host.endsWith('.localhost') ||
      host.endsWith('.internal') || host.endsWith('.local')) return false;
  if (host === '0.0.0.0' || host === '::1' || host === '[::1]') return false;
  if (/^(0\.|127\.|10\.|169\.254\.|192\.168\.)/.test(host)) return false;
  if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(host)) return false;

  return true;
}

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  // 3D costs 60⚡ — more than a guest's 10⚡ trial — so signed-in children only.
  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: false });
  if (!user) return res.status(401).json({ error: 'login_required' });

  // Server-side credit guard — Meshy 3D generation costs credits
  const { COSTS } = await import('../_lib/costs.js');
  const THREED_COST = COSTS.THREE_D;
  const { checkCredits } = await import('../_lib/auth.js');
  const creditCheck = await checkCredits(user.id, THREED_COST);
  if (!creditCheck.ok) {
    return res.status(402).json({ error: 'Not enough credits', credits: creditCheck.credits ?? 0, required: THREED_COST });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Abuse guard — 3D generation is expensive; tight limits
  const { aiRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await aiRateLimit(req, user, 'meshy', { guest: 2, user: 10, windowMinutes: 60 });
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  const apiKey = process.env.MESHY_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Meshy API key not configured.' });
  }

  const { imageUrl, enablePbr = false, targetPolycount = 30000 } = req.body || {};

  if (!imageUrl) {
    return res.status(400).json({ error: 'imageUrl is required.' });
  }
  if (!isValidImageUrl(imageUrl)) {
    return res.status(400).json({ error: 'imageUrl must be an image data URI or a public HTTPS image URL.' });
  }

  try {
    const body: any = {
      image_url: imageUrl,
      ai_model: 'latest',
      should_texture: true,
      enable_pbr: !!enablePbr,
      topology: 'triangle',
      target_polycount: Math.min(Math.max(targetPolycount, 100), 100000),
    };

    const response = await fetch(MESHY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[meshy-generate] API error:', response.status, errorText);

      if (response.status === 402) {
        return res.status(402).json({ error: 'Insufficient Meshy credits.' });
      }
      return res.status(502).json({ error: `Meshy API error: ${response.status}` });
    }

    const data = await response.json();

    if (!data.result) {
      console.error('[meshy-generate] Unexpected response:', JSON.stringify(data));
      return res.status(502).json({ error: 'Failed to create 3D task.' });
    }

    const { deductCredits } = await import('../_lib/auth.js');
    await deductCredits(user.id, THREED_COST, 'CREATE_3D');
    return res.status(200).json({ taskId: data.result });
  } catch (err: any) {
    console.error('[meshy-generate] Error:', err.message || err);
    return res.status(500).json({ error: '3D generation failed.' });
  }
}
