// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2c1mi8RHtMJtz_xozprpj2y8uhl2YdhA",
  authDomain: "seventeen-store.firebaseapp.com",
  projectId: "seventeen-store",
  storageBucket: "seventeen-store.appspot.com",
  messagingSenderId: "936071095263",
  appId: "1:936071095263:web:6d0e685e32e28a61ed5a6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;