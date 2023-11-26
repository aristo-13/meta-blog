// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDQDqdxMLkDOdFD-vYUETq4NZ2R3T15x8",
  authDomain: "meta-blog-82e74.firebaseapp.com",
  projectId: "meta-blog-82e74",
  storageBucket: "meta-blog-82e74.appspot.com",
  messagingSenderId: "125857545828",
  appId: "1:125857545828:web:e9bd2496fd2959c505a971",
  measurementId: "G-DBB59TZ3WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)