import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_FB_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const storage = getStorage();

const auth = getAuth();

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
