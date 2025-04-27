
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_Filebase_API_KEY,
    authDomain: "aicoursekiwi.firebaseapp.com",
    projectId: "aicoursekiwi",
    storageBucket: "aicoursekiwi.firebasestorage.app",
    messagingSenderId: "558626575724",
    appId: "1:558626575724:web:a15dd4810af86993de0f49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Auth = getAuth(app);
export const auth = getAuth(app);
