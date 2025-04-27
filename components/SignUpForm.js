import { useState } from 'react';
import { auth } from '../services/filebase-client';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: '',
        confirmPassword: '',
        userLineId: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.userEmail) {
            newErrors.userEmail = '請輸入電子郵件';
        } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
            newErrors.userEmail = '電子郵件格式不正確';
        }

        if (!formData.userPassword) {
            newErrors.userPassword = '請輸入密碼';
        } else if (formData.userPassword.length < 4) {
            newErrors.userPassword = '密碼必須至少4個字元';
        }

        if (formData.userPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = '密碼不一致';
        }

        if (!formData.userLineId) {
            newErrors.userLineId = '請輸入Line ID';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    formData.userEmail,
                    formData.userPassword
                );
                console.log('Firebase 註冊成功:', userCredential);

                // 準備要發送到後端的資料
                const userData = {
                    uid: userCredential.user.uid,
                    userEmail: formData.userEmail,
                    userLineId: formData.userLineId
                };

                // 發送資料到後端 API
                const response = await fetch('/api/auth-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData)
                });

                const result = await response.json();

                if (response.ok) {
                    alert('註冊成功！');
                    router.push('/'); // 跳回首頁
                } else {
                    throw new Error(result.error || '儲存用戶資料失敗');
                }
            } catch (error) {
                console.error('註冊過程發生錯誤:', error);
                alert('註冊失敗，請稍後再試');
            }
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md border border-teal-100">
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
                    />
                    {errors.userEmail && <p className="text-red-500 text-sm mt-1">{errors.userEmail}</p>}
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
                    />
                    {errors.userPassword && <p className="text-red-500 text-sm mt-1">{errors.userPassword}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-teal-700">確認密碼</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-teal-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        placeholder="請再次輸入密碼"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-teal-700">Line ID</label>
                    <input
                        type="text"
                        name="userLineId"
                        value={formData.userLineId}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-teal-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        placeholder="請輸入Line ID"
                    />
                    {errors.userLineId && <p className="text-red-500 text-sm mt-1">{errors.userLineId}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
                >
                    註冊
                </button>
            </form>
        </div>
    );
} 