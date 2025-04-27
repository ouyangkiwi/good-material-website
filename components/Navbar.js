'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../services/filebase-client";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log('Navbar: 開始監聽認證狀態');

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('Navbar: 認證狀態變化', user ? '用戶已登入' : '用戶未登入');
            if (user) {
                console.log('Navbar: 用戶資訊', {
                    email: user.email,
                    uid: user.uid
                });
            }
            setUser(user);
        }, (error) => {
            console.error('Navbar: 認證狀態監聽錯誤', error);
        });

        // 清理函數
        return () => {
            console.log('Navbar: 清理認證狀態監聽');
            unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        try {
            console.log('Navbar: 開始登出流程');
            await signOut(auth);
            console.log('Navbar: 登出成功');
        } catch (error) {
            console.error('Navbar: 登出失敗:', error);
        }
    };

    return (
        <nav className="shadow-sm w-full h-[50px] flex justify-between items-center px-5 fixed z-[999] top-0 bg-white">
            <div className="flex items-center">
                <Link href="/" className="font-bold text-lg text-slate-900 hover:text-pink-500 mr-4">
                    奇異果的OPEN AI工具
                </Link>
                {user && (
                    <span className="text-slate-600 text-sm">
                        哈囉您好!歡迎, {user.email}
                    </span>
                )}
            </div>
            <div className="flex items-center">
                <Link href="/" className="mr-3 text-slate-900 hover:text-pink-500 font-semibold">
                    單字聯想成生器
                </Link>
                <Link href="/image-generator" className="mr-3 text-slate-900 hover:text-pink-500 font-semibold">
                    AI圖片產生器
                </Link>
                <Link href="/vision" className="mr-3 text-slate-900 hover:text-pink-500 font-semibold">
                    上傳圖片AI分析
                </Link>
                {!user ? (
                    <>
                        <Link href="/SIGN-IN" className="mr-3 text-slate-900 hover:text-blue-700 font-semibold">
                            登入
                        </Link>
                        <Link href="/SIGN-UP" className="mr-3 text-slate-900 hover:text-blue-700 font-semibold">
                            註冊
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md font-semibold"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}