export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    const { GoogleGenAI } = await import('@google/genai');
    const key = process.env.GEMINI_API_KEY;
    if (!key) return res.status(200).json({ error: 'no key', status: 'key missing' });

    const ai = new GoogleGenAI({ apiKey: key });
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: 'Say hello in 3 words',
    });

    return res.status(200).json({ text: result.text || 'no text' });
  } catch (err: any) {
    return res.status(200).json({ error: err.message, stack: err.stack?.slice(0, 500) });
  }
}
