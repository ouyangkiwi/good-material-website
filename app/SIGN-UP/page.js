'use client';

import SignUpForm from '../../components/SignUpForm';
import { Auth } from '../../services/filebase-client';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-white">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-teal-900 mb-2">Create Account</h1>
                    <p className="text-teal-700">註冊新帳號，開始使用我們的服務</p>
                </div>
                <SignUpForm />
                <div className="mt-6 text-center">
                    <p className="text-sm text-teal-700">
                        已經有帳號了 。{' '}
                        <a href="/SIGN-IN" className="text-teal-600 hover:text-teal-700 font-medium">
                            立即登入
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
