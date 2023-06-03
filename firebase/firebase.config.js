import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyALwjqHuOjtWRmDZj8I-hn0USf2ILPTjGY",
    authDomain: "zomato-clone-c4414.firebaseapp.com",
    projectId: "zomato-clone-c4414",
    storageBucket: "zomato-clone-c4414.appspot.com",
    messagingSenderId: "883655563982",
    appId: "1:883655563982:web:77fd5085a4263e1541ce9f",
    measurementId: "G-FMW5D2RQ78"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics =
    app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;
export const Auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage()
