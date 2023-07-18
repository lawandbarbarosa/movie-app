// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtBa26kjNKL9uLa0Kkz9QRc3dhB1A6da0",
  authDomain: "barbarosa-movies.firebaseapp.com",
  projectId: "barbarosa-movies",
  storageBucket: "barbarosa-movies.appspot.com",
  messagingSenderId: "161845917689",
  appId: "1:161845917689:web:db460f1a68f3fb2c622f28",
  measurementId: "G-S68L0XR2TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Corrected line

export { app, analytics, auth, provider };