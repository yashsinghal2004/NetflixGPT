// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqOVtF-HZrPo-04VRcU-OUoAu2mQExfp8",
  authDomain: "netflixgpt-yash-cc6ed.firebaseapp.com",
  projectId: "netflixgpt-yash-cc6ed",
  storageBucket: "netflixgpt-yash-cc6ed.appspot.com",
  messagingSenderId: "393345752216",
  appId: "1:393345752216:web:39dc756b1f33492d7ac4ed",
  measurementId: "G-9SYNKVX1L0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
