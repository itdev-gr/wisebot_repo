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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.MESHY_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Meshy API key not configured.' });
  }

  const { imageUrl, enablePbr = false, targetPolycount = 30000 } = req.body || {};

  if (!imageUrl) {
    return res.status(400).json({ error: 'imageUrl is required.' });
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

    return res.status(200).json({ taskId: data.result });
  } catch (err: any) {
    console.error('[meshy-generate] Error:', err.message || err);
    return res.status(500).json({ error: err.message || 'Internal server error.' });
  }
}
