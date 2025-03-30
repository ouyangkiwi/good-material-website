import moment from 'moment';
import { faCopy, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import axios from 'axios';

export default function VocabGenResultCard({ result, setUserInput, showToast }) {
    const { wordList, zhWordList } = result.payload;
    const [sentences, setSentences] = useState({});  // 儲存每個單字的例句
    const [loading, setLoading] = useState({});      // 追蹤每個單字的載入狀態

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
                        <p className="text-gray-700">{sentences[idx].sentence}</p>
                        <p className="text-gray-500 mt-1">{sentences[idx].translation}</p>
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