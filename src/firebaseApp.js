// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS-ANkwpBWTbGHV7eIui43mbRfReQ4gkc",
  authDomain: "miss-db.firebaseapp.com",
  projectId: "miss-db",
  storageBucket: "miss-db.appspot.com",
  messagingSenderId: "563698591208",
  appId: "1:563698591208:web:1da540fe6da2f73c74f05d",
  measurementId: "G-VER6YS0JK0",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);

// import firebase from 'firebase/compat/app';
export const auth = getAuth(firebaseApp);
