"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import CurrentFileIndicator from "@/components/CurrentFileIndicator";
import PageHeader from "@/components/PageHeader";
import { faEye } from "@fortawesome/free-solid-svg-icons"
import VocabGenResultCard from "@/components/VocabGenResultCard";

export default function Vision() {
    const [isWaiting, setIsWaiting] = useState(false);
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");
    const [resultList, setResultList] = useState([]);

    // 在組件載入時獲取歷史資料
    useEffect(() => {
        const fetchVisionHistory = async () => {
            try {
                const response = await axios.get('/api/vision-ai');
                setResultList(response.data);
            } catch (error) {
                console.error('Error fetching vision history:', error);
                setError('無法載入歷史記錄');
            }
        };

        fetchVisionHistory();
    }, []);

    const changeHandler = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setError("");

        if (file.size > 20 * 1024 * 1024) {
            setError("圖片大小不能超過 20MB");
            return;
        }

        if (!file.type.match('image.*')) {
            setError("請上傳正確的圖片格式");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = async () => {
            try {
                const base64String = reader.result
                    .replace('data:', '')
                    .replace(/^.+,/, '');

                setImage(base64String);
                setIsWaiting(true);

                const response = await axios.post('/api/vision-ai', {
                    base64: base64String
                });

                if (response.data.error) {
                    throw new Error(response.data.error);
                }

                // 將新的結果添加到列表最前面
                setResultList(prevList => [response.data, ...prevList]);
            } catch (error) {
                console.error('發生錯誤:', error);
                setError(error.response?.data?.error || "圖片處理過程發生錯誤，請重試");
            } finally {
                setIsWaiting(false);
            }
        };

        reader.onerror = () => {
            setError("圖片讀取失敗，請重試");
            setIsWaiting(false);
        };

        reader.readAsDataURL(file);
    }

    return (
        <>
            <CurrentFileIndicator filePath="/app/vision/page.js" />
            <PageHeader title="AI Vision" icon={faEye} />
            <section>
                <div className="container mx-auto">
                    <label
                        htmlFor="imageUploader"
                        className={`inline-block p-2 rounded-md cursor-pointer transition-colors
                            ${isWaiting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-indigo-400 hover:bg-indigo-600'}`}
                        disabled={isWaiting}
                    >
                        {isWaiting ? '處理中...' : '上傳圖片'}
                    </label>
                    <input
                        className="hidden"
                        id="imageUploader"
                        type="file"
                        onChange={changeHandler}
                        accept="image/*"
                        disabled={isWaiting}
                    />
                </div>
            </section>
            <section>
                <div className="container mx-auto mt-4">
                    {error && (
                        <div className="max-w-2xl mx-auto mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                            {error}
                        </div>
                    )}

                    {isWaiting && (
                        <div className="max-w-2xl mx-auto mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg text-center">
                            AI 正在分析圖片中...
                        </div>
                    )}

                    {image && (
                        <div className="max-w-2xl mx-auto mb-4">
                            <img
                                src={`data:image/jpeg;base64,${image}`}
                                alt="Uploaded"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    )}

                    {resultList.map((result, index) => (
                        <VocabGenResultCard
                            key={index}
                            result={result}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}