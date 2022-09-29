
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGIoNIRuwBuZZ4cy_GSGm5sJlmqt27QbE",
  authDomain: "shark-db-c42c4.firebaseapp.com",
  projectId: "shark-db-c42c4",
  storageBucket: "shark-db-c42c4.appspot.com",
  messagingSenderId: "941754992729",
  appId: "1:941754992729:web:31a09c47749195e60e8948",
  measurementId: "G-Q1W1Y6XRWS"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);

// import firebase from 'firebase/compat/app';
export const auth = getAuth(firebaseApp);
