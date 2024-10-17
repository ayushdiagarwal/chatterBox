// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtWjTgd1NDmCAG1q4K2LAChOO2i9zlGQo",
  apiKey: import.meta.env.VITE_APP_FIREBASE_CHATTERBOX_API,
  authDomain: "chatterbox-cd9f4.firebaseapp.com",
  projectId: "chatterbox-cd9f4",
  storageBucket: "chatterbox-cd9f4.appspot.com",
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_CHATTERBOX_MSG,
  appId: import.meta.env.VITE_APP_FIREBASE_CHATTERBOX_APP,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); 