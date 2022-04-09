import { initializeApp } from "firebase/app";
import {
  getAuth
} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA1aVqH6JgEla36bldKKpvmKWKM4xsqLqI",
  authDomain: "botplant101.firebaseapp.com",
  projectId: "botplant101",
  storageBucket: "botplant101.appspot.com",
  messagingSenderId: "108185468362",
  appId: "1:108185468362:web:0ee6306d3ff49bca29a333",
  measurementId: "G-J8R50CBKQF",
};

// ? Initialize Firebase
const app = initializeApp(firebaseConfig);
// ? Authentication Firebase
export const auth = getAuth(app);

export const db = getFirestore(app);