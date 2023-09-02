import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdse-Pbo6LWo4G34Qd7L5sV6_o-GJgHwo",
  authDomain: "joe-coffee-39ea4.firebaseapp.com",
  projectId: "joe-coffee-39ea4",
  storageBucket: "joe-coffee-39ea4.appspot.com",
  messagingSenderId: "467623015437",
  appId: "1:467623015437:web:b85bb75dd1aa7e6a9d9144"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
