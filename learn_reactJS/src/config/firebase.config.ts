// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjvZ48cM0MqQhrNP4SO4-_sT43HztkxZQ",
  authDomain: "fir-be-95e86.firebaseapp.com",
  databaseURL: "https://fir-be-95e86-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-be-95e86",
  storageBucket: "fir-be-95e86.firebasestorage.app",
  messagingSenderId: "26171201728",
  appId: "1:26171201728:web:9f0401ee36f62c20837525",
  measurementId: "G-QMB5F5TE9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// const analytics = getAnalytics(app);