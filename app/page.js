"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import CurrentFileIndicator from "@/components/CurrentFileIndicator";
import PageHeader from "@/components/PageHeader";
import GeneratorButton from "@/components/GenerateButton";
import VocabGenResultCard from "@/components/VocabGenResultCard";
import VocabGenResultPlaceholder from "@/components/VocabGenResultPlaceholder";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [language, setLanguage] = useState("English");
  // 所有的單字生成結果清單
  const [vocabList, setVocabList] = useState([]);
  // 是否在等待回應
  const [isWaiting, setIsWaiting] = useState(false);
  const [loading, setLoading] = useState(false);

  const languageList = ["English", "Japanese", "Korean", "Spanish", "French", "German", "Italian", "Simple Chinese"];

  // 在組件載入時獲取歷史資料
  useEffect(() => {
    const fetchVocabHistory = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/vocab-ai');
        setVocabList(response.data);
      } catch (error) {
        console.error('Error fetching vocab history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVocabHistory();
  }, []); // 空依賴陣列表示只在組件首次載入時執行

  const submitHandler = async (e) => {
    e.preventDefault();
    // 防止會重新整理的預設行為
    console.log("User Input: ", userInput);
    console.log("Language: ", language);
    const body = { userInput, language };
    // 物件是傳遞給後端的元件
    console.log("body:", body);
    setLoading(true);
    try {
      const response = await axios.post('/api/vocab-ai', body);
      console.log("Response:", response.data);
      // 將新的單字卡加到現有列表的最前面
      setVocabList(prevList => [response.data, ...prevList]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setUserInput('');
    }
  }

  return (
    <>
      <CurrentFileIndicator filePath="/app/page.js" />
      <PageHeader title="AI單字聯想生成器" icon={faEarthAmericas} />
      <section>
        <div className="container mx-auto">
          <form onSubmit={submitHandler}>
            <div className="flex">
              <div className="w-3/5 px-2">
                <input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  type="text"
                  className="border-2 focus:border-pink-500 w-full block p-3 rounded-lg"
                  placeholder="Enter a word or phrase 請輸入想學習的單字或片語"
                  required
                />
              </div>
              <div className="w-1/5 px-2">
                <select
                  className="border-2 w-full block p-3 rounded-lg"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  required
                >
                  {
                    languageList.map(language => <option key={language} value={language}>{language}</option>)
                  }
                </select>
              </div>
              <div className="w-1/5 px-2">
                <GeneratorButton />
              </div>
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          {/* 等待後端回應時要顯示的載入畫面 */}
          {loading ? <VocabGenResultPlaceholder /> : null}

          {/* 顯示所有單字卡 */}
          {vocabList.map((vocab, index) => (
            <VocabGenResultCard
              key={index}
              result={vocab}
            />
          ))}

          {/* 移除範例卡片 */}
        </div>
      </section>
    </>
  );
}
