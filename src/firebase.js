import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC1hANOM4R_dmKho_8mkyJB7a7uuWOIikk',
  authDomain: 'joe-coffee-cabin.firebaseapp.com',
  projectId: 'joe-coffee-cabin',
  storageBucket: 'joe-coffee-cabin.appspot.com',
  messagingSenderId: '687283534571',
  appId: '1:687283534571:web:c64cad487e0b33d3219cae',
};

// init firebase app
initializeApp(firebaseConfig);

// init service
const db = getFirestore();

// collection ref
export const colRef = collection(db, 'coffee');

