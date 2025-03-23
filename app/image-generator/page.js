"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { faImage } from "@fortawesome/free-solid-svg-icons"
import CurrentFileIndicator from "@/components/CurrentFileIndicator";
import PageHeader from "@/components/PageHeader";
import GeneratorButton from "@/components/GenerateButton";
import ImageGenCard from "@/components/ImageGenCard";
//用來圖像生成結果的卡片
import ImageGenPlaceholder from "@/components/ImageGenPlaceholder";
//圖像生程過程中等待的卡片

export default function ImgGen() {
    const [userInput, setUserInput] = useState("");
    // 是否在等待回應
    const [isWaiting, setIsWaiting] = useState(false);
    //表單送出後會執行的流程
    const [cardList, setCardList] = useState([]);

    // 在組件載入時獲取歷史資料
    useEffect(() => {
        const fetchImageHistory = async () => {
            try {
                const response = await axios.get('/api/image-ai');
                setCardList(response.data);
            } catch (error) {
                console.error('Error fetching image history:', error);
            }
        };

        fetchImageHistory();
    }, []); // 空依賴陣列表示只在組件首次載入時執行

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("======================");
        console.log("User Input: ", userInput);//把前端送的資料包成物件送到後端去
        const body = { userInput };
        console.log("body:", body);
        //將等待中變成true 
        setIsWaiting(true);
        //清空輸入框
        try {
            const response = await axios.post("/api/image-ai", body);
            console.log("後端回傳的資料", response.data);
            // 將新的圖片卡片加到列表最前面
            setCardList(prevList => [response.data, ...prevList]);
            setUserInput("");
            setIsWaiting(false);
        } catch (error) {
            console.log("發生錯誤", error);
            alert("發生錯誤 請重新試一試")
            setIsWaiting(false);
        }
    };

    return (
        <>
            <CurrentFileIndicator filePath="/app/image-generator/page.js" />
            <PageHeader title="AI圖像生成器" icon={faImage} />
            <section>
                <div className="container mx-auto">
                    <form onSubmit={submitHandler}>
                        <div className="flex">
                            <div className="w-4/5 px-2">
                                <input
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    type="text"
                                    className="border-2 focus:border-pink-500 w-full block p-3 rounded-lg"
                                    placeholder="Enter a word or phrase"
                                    required
                                />
                            </div>
                            <div className="w-1/5 px-2">
                                <GeneratorButton />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <div className="container mx-auto grid grid-cols-3 gap-4">
                    {/* TODO: 當iswating是true時才會顯示AI輸出結果 */}
                    {isWaiting && <ImageGenPlaceholder />}
                    {/* 渲染所有圖片卡片 */}
                    {cardList.map((card, index) => (
                        <ImageGenCard
                            key={index}
                            imageURL={card.imageURL}
                            prompt={card.prompt}
                            createdAt={card.createdAT}
                        />
                    ))}
                </div>
            </section>
            <section>
                <div className="container mx-auto mt-8">

                </div>
            </section>
        </>
    );
}