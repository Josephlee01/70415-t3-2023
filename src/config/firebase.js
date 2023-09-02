import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4mZUAcSVu3YagcoLG2pvHbjDPlPrc04U",
  authDomain: "joe-coffee2.firebaseapp.com",
  projectId: "joe-coffee2",
  storageBucket: "joe-coffee2.appspot.com",
  messagingSenderId: "769090205264",
  appId: "1:769090205264:web:b16f96f8833d6ff53a4355"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
