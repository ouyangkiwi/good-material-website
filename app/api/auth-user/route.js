import { db } from "@/services/filebase-client";
import { doc, setDoc } from "firebase/firestore";

export async function POST(req) {
    try {
        const { uid, userEmail, userLineId } = await req.json();

        // 驗證必要資料
        if (!uid || !userEmail || !userLineId) {
            return new Response(JSON.stringify({
                error: '缺少必要資料'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 儲存資料到 Firestore
        await setDoc(doc(db, "USER-LIST", uid), {
            userEmail,
            userLineId,
            createdAt: new Date().toISOString()
        });

        return new Response(JSON.stringify({
            success: true,
            message: '用戶資料已成功儲存'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('儲存用戶資料時發生錯誤:', error);
        return new Response(JSON.stringify({
            error: '儲存用戶資料時發生錯誤',
            details: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
