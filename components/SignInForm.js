'use client';

import { useState, useEffect } from 'react';
import { auth } from '../services/filebase-client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: ''
    });
    const [error, setError] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                formData.userEmail,
                formData.userPassword
            );
            console.log('登入成功:', userCredential);
            router.push('/');
        } catch (error) {
            console.error('登入錯誤:', error);
            setError('登入失敗，請檢查郵箱和密碼是否正確');
        }
    };

    if (!isClient) {
        return null; // 或返回一個載入中的狀態
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md border border-teal-100">
            <h2 className="text-2xl font-bold mb-6 text-center">登入</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-teal-700">電子郵件</label>
                    <input
                        type="email"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-teal-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        placeholder="請輸入電子郵件"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-teal-700">密碼</label>
                    <input
                        type="password"
                        name="userPassword"
                        value={formData.userPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-teal-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        placeholder="請輸入密碼"
                        required
                    />
                </div>

                {error && (
                    <div className="text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
                >
                    登入
                </button>
            </form>
        </div>
    );
} 