"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import CurrentFileIndicator from "@/components/CurrentFileIndicator";
import PageHeader from "@/components/PageHeader";
import GeneratorButton from "@/components/GenerateButton";
import VocabGenResultCard from "@/components/VocabGenResultCard";
import VocabGenResultPlaceholder from "@/components/VocabGenResultPlaceholder";
import Toast from "@/components/Toast";
import { auth } from '../services/filebase-client';
import { onAuthStateChanged } from 'firebase/auth';
import VocabularyForm from '../components/VocabularyForm';

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [language, setLanguage] = useState("English");
  // 所有的單字生成結果清單
  const [vocabList, setVocabList] = useState([]);
  // 是否在等待回應
  const [isWaiting, setIsWaiting] = useState(false);
  const [showToastMessage, setShowToastMessage] = useState("");

  const languageList = ["English", "Japanese", "Korean", "Spanish", "French", "German", "Italian", "Simple Chinese"];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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
  }, []);

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

  const showToast = (message) => {
    setShowToastMessage(message);
    setTimeout(() => {
      setShowToastMessage("");
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-4 text-teal-600">載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {user ? (
            <VocabularyForm />
          ) : (
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">請先登入</h2>
              <p className="text-teal-700 mb-6">您需要登入才能使用單字生成功能</p>
              <div className="space-x-4">
                <a
                  href="/SIGN-IN"
                  className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
                >
                  登入
                </a>
                <a
                  href="/SIGN-UP"
                  className="bg-white text-teal-600 px-6 py-2 rounded-md border border-teal-600 hover:bg-teal-50 transition-colors"
                >
                  註冊
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
