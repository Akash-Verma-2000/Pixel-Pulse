// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMTo8iGuZqXvX-QRyyEak6t7JPP9HYPoc",
  authDomain: "pixel-pulse-10b4c.firebaseapp.com",
  projectId: "pixel-pulse-10b4c",
  storageBucket: "pixel-pulse-10b4c.appspot.com",
  messagingSenderId: "522561739951",
  appId: "1:522561739951:web:6e58bee211004184e0485a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);