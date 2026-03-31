/**
 * Meshy.ai Image-to-3D Status Polling Endpoint
 * ================================================
 * Polls the Meshy API for the status of a 3D generation task.
 *
 * GET /api/ai/meshy-status?taskId=xxx
 *
 * Response:
 *   {
 *     status: 'pending' | 'processing' | 'complete' | 'error',
 *     progress: number,       // 0-100
 *     modelUrls?: {           // Available when complete
 *       glb?: string,
 *       fbx?: string,
 *       obj?: string,
 *       stl?: string,
 *       usdz?: string,
 *     },
 *     thumbnailUrl?: string,
 *     error?: string,
 *   }
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

const MESHY_TASK_URL = 'https://api.meshy.ai/openapi/v1/image-to-3d';

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = await (await import('../_lib/auth')).getAuthUser(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.MESHY_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Meshy API key not configured.' });
  }

  const taskId = req.query.taskId as string;
  if (!taskId) {
    return res.status(400).json({ error: 'taskId is required.' });
  }

  try {
    const url = `${MESHY_TASK_URL}/${encodeURIComponent(taskId)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[meshy-status] API error:', response.status, errorText);
      return res.status(502).json({ error: `Meshy API error: ${response.status}` });
    }

    const data = await response.json();

    // Map Meshy status to our simplified status
    let status: 'pending' | 'processing' | 'complete' | 'error' = 'pending';

    switch (data.status) {
      case 'SUCCEEDED':
        status = 'complete';
        break;
      case 'FAILED':
      case 'CANCELED':
        status = 'error';
        break;
      case 'IN_PROGRESS':
        status = 'processing';
        break;
      case 'PENDING':
      default:
        status = 'pending';
        break;
    }

    const result: any = {
      status,
      progress: data.progress || 0,
    };

    if (status === 'complete' && data.model_urls) {
      result.modelUrls = {
        glb: data.model_urls.glb || null,
        fbx: data.model_urls.fbx || null,
        obj: data.model_urls.obj || null,
        stl: data.model_urls.stl || null,
        usdz: data.model_urls.usdz || null,
      };
    }

    if (data.thumbnail_url) {
      result.thumbnailUrl = data.thumbnail_url;
    }

    if (data.task_error) {
      result.error = typeof data.task_error === 'string' ? data.task_error : data.task_error.message || 'Unknown error';
    }

    return res.status(200).json(result);
  } catch (err: any) {
    console.error('[meshy-status] Error:', err.message || err);
    return res.status(500).json({ error: err.message || 'Internal server error.' });
  }
}
