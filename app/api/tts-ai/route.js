import openai from "@/services/openai";

export async function POST(req) {
    const body = await req.json();
    const { sentence, language } = body;

    try {
        // 生成語音
        const mp3 = await openai.audio.speech.create({
            model: "gpt-4o-mini-tts",
            voice: "nova",
            input: sentence,
            instructions: `Speak in a natural tone in ${language}.`
        });

        // 將 mp3 轉換為 base64
        const buffer = Buffer.from(await mp3.arrayBuffer());
        const base64Audio = buffer.toString('base64');

        return Response.json({ audioBase64: base64Audio });

    } catch (error) {
        console.error("Error generating speech:", error);
        return Response.json({ error: "Failed to generate speech" }, { status: 500 });
    }
} 