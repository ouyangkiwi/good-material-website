import openai from "@/services/openai";

//設計一個post api可接受前端傳來的word單字，language語言
//輸出是回傳一個指定語言 使ai產生的例句給前端，請前端顯示在畫面上

export async function POST(req) {
    const body = await req.json();
    const { word, zhWord, language } = body;

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "你是一個語言教師，請針對給定的單字產生一個簡單的例句。"
                },
                {
                    role: "user",
                    content: `請用${language}為單字 "${word}"（中文意思：${zhWord}）產生一個例句，並提供中文翻譯。
                    請用 JSON 格式回應：
                    {
                        "sentence": "例句",
                        "translation": "中文翻譯"
                    }`
                }
            ],
            response_format: { type: "json_object" }
        });

        const result = JSON.parse(completion.choices[0].message.content);
        return Response.json(result);

    } catch (error) {
        console.error("Error generating sentence:", error);
        return Response.json({ error: "Failed to generate sentence" }, { status: 500 });
    }
}