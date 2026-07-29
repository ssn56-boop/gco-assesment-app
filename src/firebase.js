// ---------------------------------------------------------------------------
// PASTE YOUR FIREBASE CONFIG BELOW.
// You get this from: Firebase Console -> Project Settings -> General ->
// "Your apps" -> Web app -> SDK setup and configuration -> Config.
// See README.md for the full step-by-step walkthrough.
// ---------------------------------------------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
