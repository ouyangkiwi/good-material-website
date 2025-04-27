'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CurrentFileIndicator from './CurrentFileIndicator';
import PageHeader from './PageHeader';
import GeneratorButton from './GenerateButton';
import VocabGenResultCard from './VocabGenResultCard';
import VocabGenResultPlaceholder from './VocabGenResultPlaceholder';
import Toast from './Toast';

export default function VocabularyForm() {
    const [userInput, setUserInput] = useState("");
    const [language, setLanguage] = useState("English");
    const [vocabList, setVocabList] = useState([]);
    const [isWaiting, setIsWaiting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showToastMessage, setShowToastMessage] = useState("");

    const languageList = ["English", "Japanese", "Korean", "Spanish", "French", "German", "Italian", "Simple Chinese"];

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
        console.log("User Input: ", userInput);
        console.log("Language: ", language);
        const body = { userInput, language };
        console.log("body:", body);
        setLoading(true);
        try {
            const response = await axios.post('/api/vocab-ai', body);
            console.log("Response:", response.data);
            setVocabList(prevList => [response.data, ...prevList]);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
            setUserInput('');
        }
    };

    const showToast = (message) => {
        setShowToastMessage(message);
        setTimeout(() => {
            setShowToastMessage("");
        }, 2000);
    };

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
                                    {languageList.map(language => (
                                        <option key={language} value={language}>{language}</option>
                                    ))}
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
                    {loading ? <VocabGenResultPlaceholder /> : null}
                    {vocabList.map((vocab, index) => (
                        <VocabGenResultCard
                            key={index}
                            result={vocab}
                            setUserInput={setUserInput}
                            showToast={showToast}
                        />
                    ))}
                </div>
            </section>
            {showToastMessage && <Toast message={showToastMessage} />}
        </>
    );
} 