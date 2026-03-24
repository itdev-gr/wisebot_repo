/**
 * AI PROXY ROUTES
 * ==============
 * All AI calls go through here so the API key stays on the server.
 * Frontend sends the prompt/params → server calls Gemini → returns result.
 * Credit validation: paid actions (image, video, music, 3d, business) check credits before generating.
 */

import { Router, Request, Response } from 'express';
import { GoogleGenAI, Modality } from '@google/genai';
import { supabaseAdmin } from '../lib/supabase.js';

export const aiRouter = Router();

// ─── Credit costs for AI actions ──────────────────────────
const AI_COSTS: Record<string, number> = {
  image: 6,
  video: 50,
  music: 60,
  '3d': 60,
  business: 4,
};

/**
 * Helper: spend credits before AI generation.
 * Returns true if credits were deducted, false if insufficient.
 * On generation failure, call refundCredits to return them.
 */
async function spendForAI(userId: string, action: string): Promise<{ success: boolean; error?: string }> {
  const cost = AI_COSTS[action];
  if (!cost) return { success: true }; // Free actions (chat, quiz, tts)

  const { data: success, error } = await supabaseAdmin.rpc('spend_credits', {
    p_user_id: userId,
    p_amount: cost,
    p_action: `CREATE_${action.toUpperCase()}`,
  });

  if (error) {
    console.error(`[AI] Credit spend error for ${action}:`, error.message);
    return { success: false, error: 'Credit check failed' };
  }

  if (!success) {
    return { success: false, error: 'Insufficient credits' };
  }

  return { success: true };
}

/** Refund credits on generation failure */
async function refundCredits(userId: string, action: string): Promise<void> {
  const cost = AI_COSTS[action];
  if (!cost) return;

  try {
    await supabaseAdmin.rpc('earn_credits', {
      p_user_id: userId,
      p_amount: cost,
      p_action: `REFUND_${action.toUpperCase()}`,
      p_action_id: null,
    });
    console.log(`[AI] Refunded ${cost} credits for failed ${action} (user: ${userId})`);
  } catch (err) {
    console.error(`[AI] Refund failed for ${action}:`, err);
  }
}

const getAI = () => {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error('GEMINI_API_KEY not configured');
  return new GoogleGenAI({ apiKey: key });
};

// ─── CHAT ─────────────────────────────────────────────────
aiRouter.post('/chat', async (req, res) => {
  try {
    const { message, history, systemInstruction } = req.body;
    if (!message) return res.status(400).json({ error: 'Message required' });

    const ai = getAI();
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: { systemInstruction },
      history: history || [],
    });

    const response = await chat.sendMessage({ message });
    res.json({ text: response.text || '' });
  } catch (err: any) {
    console.error('Chat error:', err.message);
    res.status(500).json({ error: 'Chat generation failed' });
  }
});

// ─── IMAGE GENERATION (costs 6 credits) ──────────────────
aiRouter.post('/image', async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

    // Spend credits before generating
    if (userId) {
      const spend = await spendForAI(userId, 'image');
      if (!spend.success) return res.status(402).json({ error: spend.error });
    }

    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
    });

    const part = response.candidates?.[0]?.content?.parts?.find(
      (p: any) => p.inlineData
    );

    if (part?.inlineData) {
      res.json({
        image: `data:image/png;base64,${part.inlineData.data}`,
      });
    } else {
      // Refund credits if no image generated
      if (userId) await refundCredits(userId, 'image');
      res.status(500).json({ error: 'No image generated' });
    }
  } catch (err: any) {
    console.error('Image gen error:', err.message);
    // Refund credits on error
    if (req.user?.id) await refundCredits(req.user.id, 'image');
    res.status(500).json({ error: 'Image generation failed' });
  }
});

// ─── AVATAR (Photo-to-Hero) — costs 6 credits (same as image) ─
aiRouter.post('/avatar', async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { photoBase64, mimeType, prompt } = req.body;
    if (!photoBase64) return res.status(400).json({ error: 'Photo required' });

    // Same cost as image generation
    if (userId) {
      const spend = await spendForAI(userId, 'image');
      if (!spend.success) return res.status(402).json({ error: spend.error });
    }

    const ai = getAI();
    const avatarPrompt = prompt || `Transform this person's photo into a stunning Pixar/Disney 3D animated hero character for a kids' adventure game.
IMPORTANT RULES:
- Keep the ESSENCE of the person's face (similar features, expression, vibe)
- Make it a heroic cartoon character - NOT a realistic portrait
- Pixar/Disney animation style with big expressive eyes
- Vibrant, colorful hero outfit (cape, armor, or cool adventure gear)
- Heroic confident pose
- Clean magical background with sparkles
- Kid-friendly, adorable yet capable look
- High quality 3D render, cinematic lighting`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: { data: photoBase64, mimeType: mimeType || 'image/jpeg' } },
          { text: avatarPrompt },
        ],
      },
    });

    const part = response.candidates?.[0]?.content?.parts?.find(
      (p: any) => p.inlineData
    );

    if (part?.inlineData) {
      res.json({
        image: `data:image/png;base64,${part.inlineData.data}`,
      });
    } else {
      if (userId) await refundCredits(userId, 'image');
      res.status(500).json({ error: 'No avatar generated' });
    }
  } catch (err: any) {
    console.error('Avatar gen error:', err.message);
    if (req.user?.id) await refundCredits(req.user.id, 'image');
    res.status(500).json({ error: 'Avatar generation failed' });
  }
});

// ─── MUSIC (LYRICS + COVER ART) — costs 60 credits ──────
aiRouter.post('/music', async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { lyricsPrompt, artPrompt } = req.body;
    if (!lyricsPrompt) return res.status(400).json({ error: 'Prompt required' });

    if (userId) {
      const spend = await spendForAI(userId, 'music');
      if (!spend.success) return res.status(402).json({ error: spend.error });
    }

    const ai = getAI();

    // Generate lyrics
    const lyricsResp = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [{ text: lyricsPrompt }] },
      config: { responseMimeType: 'application/json' },
    });

    const lyricsData = JSON.parse(lyricsResp.text || '{}');

    // Generate cover art
    let coverUrl = '';
    if (artPrompt || lyricsData.artPrompt) {
      const imageResp = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: artPrompt || lyricsData.artPrompt }] },
      });
      const imgPart = imageResp.candidates?.[0]?.content?.parts?.find(
        (p: any) => p.inlineData
      );
      if (imgPart?.inlineData) {
        coverUrl = `data:image/png;base64,${imgPart.inlineData.data}`;
      }
    }

    res.json({ ...lyricsData, cover: coverUrl });
  } catch (err: any) {
    console.error('Music gen error:', err.message);
    if (req.user?.id) await refundCredits(req.user.id, 'music');
    res.status(500).json({ error: 'Music generation failed' });
  }
});

// ─── VIDEO GENERATION — costs 50 credits ─────────────────
aiRouter.post('/video', async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { prompt, imageBytes, mimeType } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

    if (userId) {
      const spend = await spendForAI(userId, 'video');
      if (!spend.success) return res.status(402).json({ error: spend.error });
    }

    const ai = getAI();
    const apiKey = process.env.GEMINI_API_KEY!;

    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt,
      image: imageBytes ? { imageBytes, mimeType: mimeType || 'image/png' } : undefined,
      config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '9:16' },
    });

    // Poll (max 5 min)
    let polls = 0;
    while (!operation.done && polls < 60) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({ operation });
      polls++;
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) return res.status(500).json({ error: 'Video generation failed' });

    // Fetch video bytes and send as base64
    const fetchUrl = `${videoUri}&key=${apiKey}`;
    const videoResponse = await fetch(fetchUrl);
    const videoBuffer = Buffer.from(await videoResponse.arrayBuffer());
    const videoBase64 = videoBuffer.toString('base64');

    res.json({
      video: `data:video/mp4;base64,${videoBase64}`,
    });
  } catch (err: any) {
    console.error('Video gen error:', err.message);
    if (req.user?.id) await refundCredits(req.user.id, 'video');
    res.status(500).json({ error: 'Video generation failed' });
  }
});

// ─── 3D GENERATION — costs 60 credits ────────────────────
aiRouter.post('/3d', async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { prompt, imageBytes, mimeType } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

    if (userId) {
      const spend = await spendForAI(userId, '3d');
      if (!spend.success) return res.status(402).json({ error: spend.error });
    }

    const ai = getAI();

    const contents: any = { parts: [{ text: prompt }] };
    if (imageBytes) {
      contents.parts.unshift({
        inlineData: { data: imageBytes, mimeType: mimeType || 'image/png' },
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents,
    });

    const part = response.candidates?.[0]?.content?.parts?.find(
      (p: any) => p.inlineData
    );

    if (part?.inlineData) {
      res.json({
        image: `data:image/png;base64,${part.inlineData.data}`,
      });
    } else {
      if (userId) await refundCredits(userId, '3d');
      res.status(500).json({ error: 'No 3D result generated' });
    }
  } catch (err: any) {
    console.error('3D gen error:', err.message);
    if (req.user?.id) await refundCredits(req.user.id, '3d');
    res.status(500).json({ error: '3D generation failed' });
  }
});

// ─── BUSINESS (TEXT + LOGO) — costs 4 credits ────────────
aiRouter.post('/business', async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { textPrompt, logoPrompt } = req.body;
    if (!textPrompt) return res.status(400).json({ error: 'Prompt required' });

    if (userId) {
      const spend = await spendForAI(userId, 'business');
      if (!spend.success) return res.status(402).json({ error: spend.error });
    }

    const ai = getAI();

    // Generate business text
    const textResp = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [{ text: textPrompt }] },
      config: { responseMimeType: 'application/json' },
    });
    const bizData = JSON.parse(textResp.text || '{}');

    // Generate logo
    let logoUrl = '';
    if (logoPrompt) {
      const logoResp = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: logoPrompt }] },
      });
      const logoPart = logoResp.candidates?.[0]?.content?.parts?.find(
        (p: any) => p.inlineData
      );
      if (logoPart?.inlineData) {
        logoUrl = `data:image/png;base64,${logoPart.inlineData.data}`;
      }
    }

    res.json({ ...bizData, logo: logoUrl });
  } catch (err: any) {
    console.error('Business gen error:', err.message);
    if (req.user?.id) await refundCredits(req.user.id, 'business');
    res.status(500).json({ error: 'Business generation failed' });
  }
});

// ─── TTS (Text-to-Speech) ─────────────────────────────────
aiRouter.post('/tts', async (req, res) => {
  try {
    const { text, voice } = req.body;
    if (!text) return res.status(400).json({ error: 'Text required' });

    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
      contents: { parts: [{ text }] },
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voice || 'Kore' },
          },
        },
      },
    });

    const audioPart = response.candidates?.[0]?.content?.parts?.find(
      (p: any) => p.inlineData
    );

    if (audioPart?.inlineData) {
      res.json({
        audio: audioPart.inlineData.data, // base64
        mimeType: audioPart.inlineData.mimeType || 'audio/wav',
      });
    } else {
      res.status(500).json({ error: 'No audio generated' });
    }
  } catch (err: any) {
    console.error('TTS error:', err.message);
    res.status(500).json({ error: 'TTS generation failed' });
  }
});

// ─── QUIZ GENERATION ──────────────────────────────────────
aiRouter.post('/quiz', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [{ text: prompt }] },
      config: { responseMimeType: 'application/json' },
    });

    res.json(JSON.parse(response.text || '{}'));
  } catch (err: any) {
    console.error('Quiz gen error:', err.message);
    res.status(500).json({ error: 'Quiz generation failed' });
  }
});
