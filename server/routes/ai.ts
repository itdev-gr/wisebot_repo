/**
 * AI PROXY ROUTES
 * ==============
 * All AI calls go through here so the API key stays on the server.
 * Frontend sends the prompt/params → server calls Gemini → returns result.
 */

import { Router } from 'express';
import { GoogleGenAI, Modality } from '@google/genai';

export const aiRouter = Router();

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

// ─── IMAGE GENERATION ─────────────────────────────────────
aiRouter.post('/image', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

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
      res.status(500).json({ error: 'No image generated' });
    }
  } catch (err: any) {
    console.error('Image gen error:', err.message);
    res.status(500).json({ error: 'Image generation failed' });
  }
});

// ─── MUSIC (LYRICS + COVER ART) ──────────────────────────
aiRouter.post('/music', async (req, res) => {
  try {
    const { lyricsPrompt, artPrompt } = req.body;
    if (!lyricsPrompt) return res.status(400).json({ error: 'Prompt required' });

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
    res.status(500).json({ error: 'Music generation failed' });
  }
});

// ─── VIDEO GENERATION ─────────────────────────────────────
aiRouter.post('/video', async (req, res) => {
  try {
    const { prompt, imageBytes, mimeType } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

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
    res.status(500).json({ error: 'Video generation failed' });
  }
});

// ─── 3D GENERATION ────────────────────────────────────────
aiRouter.post('/3d', async (req, res) => {
  try {
    const { prompt, imageBytes, mimeType } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

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
      res.status(500).json({ error: 'No 3D result generated' });
    }
  } catch (err: any) {
    console.error('3D gen error:', err.message);
    res.status(500).json({ error: '3D generation failed' });
  }
});

// ─── BUSINESS (TEXT + LOGO) ───────────────────────────────
aiRouter.post('/business', async (req, res) => {
  try {
    const { textPrompt, logoPrompt } = req.body;
    if (!textPrompt) return res.status(400).json({ error: 'Prompt required' });

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
