import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-26040.firebaseapp.com",
  projectId: "reactchat-26040",
  storageBucket: "reactchat-26040.appspot.com",
  messagingSenderId: "137731190560",
  appId: "1:137731190560:web:ef9d22533d041b122f3145",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
