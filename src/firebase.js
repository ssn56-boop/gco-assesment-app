// ---------------------------------------------------------------------------
// PASTE YOUR FIREBASE CONFIG BELOW.
// You get this from: Firebase Console -> Project Settings -> General ->
// "Your apps" -> Web app -> SDK setup and configuration -> Config.
// See README.md for the full step-by-step walkthrough.
// ---------------------------------------------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoCLXbuA996VvwLbrbIR1UyfFP9S17iu4",
  authDomain: "gco-assessments.firebaseapp.com",
  projectId: "gco-assessments",
  storageBucket: "gco-assessments.firebasestorage.app",
  messagingSenderId: "536390517307",
  appId: "1:536390517307:web:96108858f03a6d466f521e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
