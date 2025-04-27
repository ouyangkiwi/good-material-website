'use client';

import SignInForm from '../../components/SignInForm';

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-white">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-teal-900 mb-2">Welcome Back</h1>
                    <p className="text-teal-700">登入以繼續使用我們的服務</p>
                </div>
                <SignInForm />
                <div className="mt-6 text-center">
                    <p className="text-sm text-teal-700">
                        還沒有帳號？{' '}
                        <a href="/SIGN-UP" className="text-teal-600 hover:text-teal-700 font-medium">
                            立即註冊
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
