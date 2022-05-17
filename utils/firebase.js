// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZc3RNFRm_YdlcOcw12XEA0TRyXx-SInY",
  authDomain: "alula-345302.firebaseapp.com",
  projectId: "alula-345302",
  storageBucket: "alula-345302.appspot.com",
  messagingSenderId: "25721093997",
  appId: "1:25721093997:web:2d0ea8e044bf47ed4ba464",
  measurementId: "G-6Z1RS778Z0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
