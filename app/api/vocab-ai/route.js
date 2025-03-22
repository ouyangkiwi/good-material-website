import openai from "@/services/openai";
import db from "@/services/db";
// 引入db
export async function GET() {
    try {
        // 獲取資料並按 createdAt 降序排列（由新到舊）
        const snapshot = await db.collection("vocab-ai")
            .orderBy("createdAt", "desc")
            .get();

        const vocabList = snapshot.docs.map(doc => doc.data());
        return Response.json(vocabList);
    } catch (error) {
        console.error("Error fetching vocab list:", error);
        return Response.json({ error: "Failed to fetch vocab list" }, { status: 500 });
    }
}

export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    // TODO: 透過gpt-4o-mini模型讓AI回傳相關單字
    // 文件連結：https://platform.openai.com/docs/guides/text-generation/chat-completions-api?lang=node.js
    // JSON Mode: https://platform.openai.com/docs/guides/text-generation/json-mode?lang=node.js
    const { userInput, language } = body;
    console.log("User Input:", userInput);
    console.log("Language:", language);
    const systemPrompt = `請作為一個親切的單字聯想AI根據所提供的單字聯想5個相關單字
    例如：
    聯想主題： 水果
    語言： English
    輸出JSON格式
    {
                wordList: ["Apple", "Banana", "Cherry", "Date", "Elderberry"],
                zhWordList: ["蘋果", "香蕉", "櫻桃", "棗子", "接骨木"],
              }
              `
        ;
    const propmpt = `聯想主題：${userInput} 語言：${language}`;

    const openAIReqBody = {
        messages: [
            { "role": "system", "content": systemPrompt },
            { "role": "user", "content": propmpt }
        ],
        model: "gpt-4o-mini",
        response_format: { "type": "json_object" }

    };
    const completion = await openai.chat.completions.create(openAIReqBody);
    const payload = completion.choices[0].message.content;
    console.log("payload:", payload);
    // 將open ai物件傳回再取得 印出open AI回傳的內容，確認完再回傳給前端，把內容輸出
    const result = {
        title: userInput,
        payload: JSON.parse(payload),
        language: language,
        createdAt: Date.now()
    }
    await db.collection("vocab-ai").add(result)
    // 上述任務完成後，才會做以下工作
    return Response.json(result);
}