// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjFK7jhshf1ZdAF5BGUwR5XOSqOiYlqK0",
  authDomain: "vite-contac.firebaseapp.com",
  projectId: "vite-contac",
  storageBucket: "vite-contac.appspot.com",
  messagingSenderId: "108728630482",
  appId: "1:108728630482:web:e5e496d7894c850107c10b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
