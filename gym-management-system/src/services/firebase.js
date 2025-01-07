import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Ensure the environment variables are loaded
console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDz81AFKDu38c4euX-uacnEB7pGMZvCkko",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "minator-a7908.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "minator-a7908",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "minator-a7908.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "630690285712",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:630690285712:web:304726578d683d50e03015",
};

let app;
let auth;
let db;

try {
  app = initializeApp(firebaseConfig); // Initialize Firebase app
  auth = getAuth(app); // Initialize Firebase Auth
  db = getFirestore(app); // Initialize Firestore
} catch (error) {
  console.error("Firebase initialization error:", error); // Log any initialization errors
}

export { auth, db };
export default app;
