// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARFk7El4ZPO-HTSmFPS9zPTekvMCo4Yp4",
  authDomain: "notion-clone-846e6.firebaseapp.com",
  projectId: "notion-clone-846e6",
  storageBucket: "notion-clone-846e6.firebasestorage.app",
  messagingSenderId: "796974722378",
  appId: "1:796974722378:web:fde30b5d4f5f39697265b3",
  measurementId: "G-RSWC8LNJHK",
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

export { db };
