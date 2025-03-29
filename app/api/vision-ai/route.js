import openai from "@/services/openai";
import db from "@/services/db";

export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    const { base64 } = body;

    try {
        // 先取得圖片描述
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text", text: `請用繁體中文描述這張圖片的內容

    輸出JSON格式
    {
        aiText: "簡單描述圖片主題",
        wordList: ["Apple", "Banana", "Cherry"],
        zhWordList: ["蘋果", "香蕉", "櫻桃"]
    }`
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: `data:image/jpeg;base64,${base64}`
                            }
                        }
                    ],

                }
            ],
            max_tokens: 300,
            response_format: { type: "json_object" },
        });

        const payload = JSON.parse(aiResponse.choices[0].message.content);

        const result = {
            title: payload.aiText,  // 使用 AI 生成的描述作為標題
            payload: payload,
            language: "English",    // 預設語言為英文
            createdAt: Date.now()
        };

        // 儲存到資料庫
        await db.collection("vision-ai").add(result);

        return Response.json(result);

    } catch (error) {
        console.error("Error in vision API:", error);
        return Response.json({ error: "Failed to process image" }, { status: 500 });
    }
}

// 添加 GET 方法來獲取歷史記錄
export async function GET() {
    try {
        const snapshot = await db.collection("vision-ai")
            .orderBy("createdAt", "desc")
            .get();

        const resultList = snapshot.docs.map(doc => doc.data());
        return Response.json(resultList);
    } catch (error) {
        console.error("Error fetching vision history:", error);
        return Response.json({ error: "Failed to fetch vision history" }, { status: 500 });
    }
}