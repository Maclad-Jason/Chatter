import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCKpgubV6qwpOCMpcxSwPkJfTe4jhh3JQY",
  authDomain: "chatter-2b67e.firebaseapp.com",
  databaseURL: "https://chatter-2b67e-default-rtdb.firebaseio.com",
  projectId: "chatter-2b67e",
  storageBucket: "chatter-2b67e.appspot.com",
  messagingSenderId: "558696838713",
  appId: "1:558696838713:web:7930554408256c0e033fe8",
  measurementId: "G-FXPB6G438K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
