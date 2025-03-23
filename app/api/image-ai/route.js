import openai from "@/services/openai";
import axios from "axios";
import OpenAI from "openai";
import db from "@/services/db";
export async function GET() {
    try {
        // 獲取資料並按 createdAT 降序排列（由新到舊）
        const snapshot = await db.collection("image-ai")
            .orderBy("createdAT", "desc")
            .get();

        const cardList = snapshot.docs.map(doc => doc.data());
        return Response.json(cardList);
    } catch (error) {
        console.error("Error fetching image list:", error);
        return Response.json({ error: "Failed to fetch image list" }, { status: 500 });
    }
}
export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    const { userInput } = body;
    console.log("userInput", userInput);

    try {
        // 使用 DALL-E 生成圖片
        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: userInput,
            size: "1024x1024",
            quality: "standard",
            n: 1,
        });

        const openAIImageURL = response.data[0].url;
        console.log("openAIImageURL:", openAIImageURL);

        // 從 OpenAI URL 獲取圖片數據
        const imageResponse = await axios.get(openAIImageURL, {
            responseType: 'arraybuffer'
        });
        const imageBuffer = Buffer.from(imageResponse.data, 'binary').toString('base64');

        // 上傳圖片到 Imgur
        const imgurResponse = await axios.post('https://api.imgur.com/3/image', {
            image: imageBuffer,
            type: 'base64'
        }, {
            headers: {
                'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
                'Content-Type': 'application/json'
            }
        });

        const imgurUrl = imgurResponse.data.data.link;
        console.log("Imgur URL:", imgurUrl);

        const data = {
            imageURL: imgurUrl,
            prompt: userInput,
            createdAT: new Date().getTime(),
        }
        await db.collection("image-ai").add(data);

        return Response.json(data);
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ error: "Failed to process image" }, { status: 500 });
    }
}