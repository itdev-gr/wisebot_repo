/**
 * Suno Music Generation Status Polling Endpoint
 * ================================================
 * Polls the Suno API for the status of a music generation task.
 *
 * GET /api/ai/suno-status?taskId=xxx
 *
 * Response:
 *   {
 *     status: 'pending' | 'processing' | 'complete' | 'error',
 *     audioUrl?: string,       // Available when complete
 *     streamUrl?: string,      // Available early (30-40s)
 *     coverUrl?: string,       // Suno-generated cover
 *     title?: string,
 *     duration?: number,
 *     songs?: Array<{ id, audio_url, stream_audio_url, image_url, title, duration }>
 *   }
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { withAuth } from '../_lib/middleware';

const SUNO_STATUS_URL = 'https://api.sunoapi.org/api/v1/generate/record-info';

export default withAuth(async (req: any, res: any, user) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.SUNO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Suno API key not configured.' });
  }

  const taskId = req.query.taskId as string;
  if (!taskId) {
    return res.status(400).json({ error: 'taskId is required.' });
  }

  try {
    const url = `${SUNO_STATUS_URL}?taskId=${encodeURIComponent(taskId)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[suno-status] API error:', response.status, errorText);
      return res.status(502).json({ error: `Suno API error: ${response.status}` });
    }

    const data = await response.json();

    if (data.code !== 200) {
      return res.status(502).json({ error: data.msg || 'Failed to get task status.' });
    }

    const taskData = data.data;

    if (!taskData) {
      return res.status(404).json({ error: 'Task not found.', status: 'error' });
    }

    // Log raw response for debugging
    console.log('[suno-status] Raw taskData keys:', Object.keys(taskData));
    console.log('[suno-status] taskData.status:', taskData.status);

    // Map Suno status to our simplified status
    let status: 'pending' | 'processing' | 'complete' | 'error' = 'pending';

    const rawStatus = String(taskData.status || '').toUpperCase();
    if (rawStatus === 'SUCCESS' || rawStatus === 'COMPLETED' || rawStatus === 'COMPLETE') {
      status = 'complete';
    } else if (rawStatus === 'FAILED' || rawStatus === 'ERROR') {
      status = 'error';
    } else if (rawStatus === 'PROCESSING' || rawStatus === 'RUNNING') {
      status = 'processing';
    } else if (rawStatus === 'PENDING' || rawStatus === 'QUEUED') {
      status = 'pending';
    }

    // Extract songs from multiple possible response structures
    let songs: any[] = [];

    // Try multiple paths where songs data might live
    if (Array.isArray(taskData.response?.data)) {
      songs = taskData.response.data;
    } else if (Array.isArray(taskData.data)) {
      songs = taskData.data;
    } else if (Array.isArray(taskData.response?.sunoData)) {
      songs = taskData.response.sunoData;
    } else if (Array.isArray(taskData.sunoData)) {
      songs = taskData.sunoData;
    } else if (taskData.response && typeof taskData.response === 'object') {
      // Maybe the response itself contains audio info
      const resp = taskData.response;
      if (resp.audio_url || resp.stream_audio_url) {
        songs = [resp];
      }
    }

    // If still no songs found but status is complete, try to find audio_url at top level
    if (songs.length === 0 && status === 'complete') {
      if (taskData.audio_url || taskData.stream_audio_url) {
        songs = [taskData];
      }
      // Log the full structure to help debug
      console.log('[suno-status] No songs found. Full taskData:', JSON.stringify(taskData).slice(0, 1000));
    }

    const firstSong = songs[0];
    const result: any = { status };

    if (firstSong) {
      // Support both camelCase (sunoapi.org) and snake_case field names
      const audioUrl = firstSong.audioUrl || firstSong.audio_url || firstSong.sourceAudioUrl;
      const streamUrl = firstSong.streamAudioUrl || firstSong.stream_audio_url || firstSong.sourceStreamAudioUrl;
      const imageUrl = firstSong.imageUrl || firstSong.image_url || firstSong.sourceImageUrl;

      if (audioUrl) {
        result.audioUrl = audioUrl;
        result.status = 'complete';
      }
      if (streamUrl) {
        result.streamUrl = streamUrl;
      }
      if (imageUrl) {
        result.coverUrl = imageUrl;
      }
      if (firstSong.title) {
        result.title = firstSong.title;
      }
      if (firstSong.duration) {
        result.duration = firstSong.duration;
      }
    }

    // Include all songs (Suno generates 2 per request)
    if (songs.length > 0) {
      result.songs = songs.map((s: any) => ({
        id: s.id,
        audio_url: s.audioUrl || s.audio_url || s.sourceAudioUrl || null,
        stream_audio_url: s.streamAudioUrl || s.stream_audio_url || s.sourceStreamAudioUrl || null,
        image_url: s.imageUrl || s.image_url || s.sourceImageUrl || null,
        title: s.title || '',
        duration: s.duration || 0,
      }));
    }

    return res.status(200).json(result);
  } catch (err: any) {
    console.error('[suno-status] Error:', err.message || err);
    return res.status(500).json({ error: err.message || 'Internal server error.' });
  }
});
