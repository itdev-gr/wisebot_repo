
import { GoogleGenAI } from "./geminiProxy";

// All AI requests are proxied through /api/ai/generate (server-side API key)
const getAI = () => new GoogleGenAI();

export function isAIAvailable(): boolean {
  // Always available — proxied through serverless endpoint
  return true;
}

// Chat / Text — uses generateContent with full history
export const generateChatResponse = async (
  model: string,
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model,
    contents: [
      ...history,
      { role: 'user', parts: [{ text: message }] }
    ],
  });
  return response.text || "";
};

// Image Generation
export const generateImage = async (prompt: string): Promise<string> => {
  const ai = getAI();
  // Using gemini-2.5-flash-image for better quota and speed (Nano Banana)
  // unless explicitly needing pro features
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }],
    },
    // imageConfig is not needed/supported for flash-image in the same way as pro-image-preview
    // Remove complex config for the basic flash model
  });

  if (response.candidates && response.candidates[0].content.parts) {
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  }
  throw new Error("No image generated");
};

// Photo-to-Avatar: Transform a photo into a cartoon hero using multimodal input
export const generateAvatarFromPhoto = async (photoBase64: string, mimeType: string = 'image/jpeg'): Promise<string> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: photoBase64,
            mimeType: mimeType,
          }
        },
        {
          text: `Transform this person's photo into a stunning 3D animated hero character.

STYLE:
- Pixar/DreamWorks quality 3D render with cinematic lighting
- Keep the ESSENCE of the person (similar features, expression, vibe)
- Heroic cartoon character with big expressive eyes
- Vibrant colorful hero outfit (cape, armor, or cool adventure gear)
- Dynamic heroic pose, full body
- Dark gradient studio background with subtle glow effects

CRITICAL — DO NOT:
- Do NOT add any text, titles, labels, watermarks, or writing
- Do NOT add name tags, speech bubbles, or description boxes
- Do NOT add any letters or words anywhere on the image
- Just the character alone, clean, no text whatsoever`
        }
      ],
    },
  });

  if (response.candidates && response.candidates[0].content.parts) {
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  }
  throw new Error("No avatar generated");
};

// Video Generation (Veo) — requires server-side long-running process
// TODO: Implement server-side video generation endpoint
export const generateVideo = async (_prompt: string): Promise<string> => {
  throw new Error('VIDEO_NOT_AVAILABLE');
};

// Live API Connection — requires WebSocket support
// TODO: Implement server-side live session endpoint
export const connectLiveSession = async (
  _onOpen: () => void,
  _onMessage: (msg: any) => void,
  _onError: (e: any) => void,
  _onClose: (e: any) => void
): Promise<any> => {
  throw new Error('LIVE_NOT_AVAILABLE');
};
