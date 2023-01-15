import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "note-it-74fed",
    storageBucket: "note-it-74fed.appspot.com",
    messagingSenderId: "972866543680",
    appId: "1:972866543680:web:149c465ec5b653b8463fa5",
    measurementId: "G-3G45Y8V9WM"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const firebaseAuth = getAuth(app);
