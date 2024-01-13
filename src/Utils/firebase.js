// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOl9D-kyrF6PRCls1pMzxOsP6v_nETwms",
  authDomain: "netflixgpt-yash.firebaseapp.com",
  projectId: "netflixgpt-yash",
  storageBucket: "netflixgpt-yash.appspot.com",
  messagingSenderId: "462044998348",
  appId: "1:462044998348:web:c10b676b5ecef0f39ff069",
  measurementId: "G-FTV7LLE69M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
