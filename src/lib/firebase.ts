import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDNf4th78xPbP7PoI0Xb682s26iU4Xim2M",
  authDomain: "e-commerce-5adb7.firebaseapp.com",
  projectId: "e-commerce-5adb7",
  storageBucket: "e-commerce-5adb7.firebasestorage.app",
  messagingSenderId: "18126051206",
  appId: "1:18126051206:web:398570a3c7ade7525abe07",
  measurementId: "G-GVQCCFXQQK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


