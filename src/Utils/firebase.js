// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1DB3d6qephtCMoJr--QYxg9qOQt6OwJU",
  authDomain: "yash-netflix-gpt.firebaseapp.com",
  projectId: "yash-netflix-gpt",
  storageBucket: "yash-netflix-gpt.appspot.com",
  messagingSenderId: "298986758999",
  appId: "1:298986758999:web:9dd87bd89d5b057fb21412",
  measurementId: "G-QTX9FTPBN8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
