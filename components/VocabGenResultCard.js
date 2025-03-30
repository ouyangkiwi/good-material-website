import moment from 'moment';
import { faCopy, faCommentDots, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from 'react';
import axios from 'axios';

export default function VocabGenResultCard({ result, setUserInput, showToast }) {
    const { wordList, zhWordList } = result.payload;
    const [sentences, setSentences] = useState({});  // 儲存每個單字的例句
    const [loading, setLoading] = useState({});      // 追蹤每個單字的載入狀態
    const [speaking, setSpeaking] = useState({});  // 追蹤播放狀態
    const audioRefs = useRef({});  // 用於存儲音頻元素

    const handleCopy = (zhWord) => {
        setUserInput(zhWord);
        // 平滑滾動到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // 顯示 Toast
        showToast('已複製到輸入框');
    };

    const handleGenerateSentence = async (word, zhWord, idx) => {
        try {
            setLoading(prev => ({ ...prev, [idx]: true }));
            const response = await axios.post('/api/sentence-ai', {
                word,
                zhWord,  // 添加中文意思
                language: result.language
            });
            setSentences(prev => ({
                ...prev,
                [idx]: response.data
            }));
            showToast('例句產生成功！');
        } catch (error) {
            console.error('Error generating sentence:', error);
            showToast('例句產生失敗，請重試');
        } finally {
            setLoading(prev => ({ ...prev, [idx]: false }));
        }
    };

    const handleSpeak = async (sentence, idx) => {
        try {
            setSpeaking(prev => ({ ...prev, [idx]: true }));

            // 檢查是否已經有音頻元素
            if (audioRefs.current[idx]) {
                audioRefs.current[idx].play();
                return;
            }

            const response = await axios.post('/api/tts-ai', {
                sentence,
                language: result.language
            });

            // 創建音頻元素
            const audio = new Audio(`data:audio/mp3;base64,${response.data.audioBase64}`);
            audioRefs.current[idx] = audio;

            // 播放結束時更新狀態
            audio.onended = () => {
                setSpeaking(prev => ({ ...prev, [idx]: false }));
            };

            // 播放音頻
            await audio.play();
            showToast('開始播放');

        } catch (error) {
            console.error('Error playing audio:', error);
            showToast('播放失敗，請重試');
            setSpeaking(prev => ({ ...prev, [idx]: false }));
        }
    };

    const wordItems = wordList.map((word, idx) => {
        const zhWord = zhWordList[idx];
        return (
            <div className="p-3 border-2 border-slate-300 rounded-md" key={idx}>
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-slate-700">{word}</h3>
                        <p className="text-slate-400">{zhWord}</p>
                    </div>
                    <div className="space-x-2">
                        <button
                            className={`px-2 py-1 ${loading[idx]
                                ? 'bg-gray-400'
                                : 'bg-green-500 hover:bg-green-600'} 
                                text-white rounded transition-colors`}
                            title="產生例句"
                            onClick={() => handleGenerateSentence(word, zhWord, idx)}
                            disabled={loading[idx]}
                        >
                            <FontAwesomeIcon icon={faCommentDots}
                                className={loading[idx] ? 'animate-spin' : ''} />
                        </button>
                        <button
                            className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
                            title="複製中文"
                            onClick={() => handleCopy(zhWord)}
                        >
                            <FontAwesomeIcon icon={faCopy} />
                        </button>
                    </div>
                </div>
                {sentences[idx] && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-md">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <p className="text-gray-700">{sentences[idx].sentence}</p>
                                <p className="text-gray-500 mt-1">{sentences[idx].translation}</p>
                            </div>
                            <button
                                className={`ml-2 px-2 py-1 ${speaking[idx]
                                    ? 'bg-blue-600'
                                    : 'bg-blue-500 hover:bg-blue-600'
                                    } text-white rounded transition-colors`}
                                title="朗讀例句"
                                onClick={() => handleSpeak(sentences[idx].sentence, idx)}
                                disabled={speaking[idx]}
                            >
                                <FontAwesomeIcon
                                    icon={faVolumeHigh}
                                    className={speaking[idx] ? 'animate-pulse' : ''}
                                />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        )
    })
    return (
        <div className="bg-white shadow-sm p-4 rounded-xl my-3">
            <h3 className="text-lg">
                {result.title} <span className="py-2 px-4 bg-slate-200 font-semibold rounded-lg inline-block ml-2">{result.language}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                {wordItems}
            </div>
            <p className="mt-3 text-right text-slate-500">
                Created At: {moment(result.createdAt).format("YYYY年MM月DD日 HH:mm:ss")}
            </p>
        </div>
    )
}