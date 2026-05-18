import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn6B_NhKoktb2jjGkCQOREZX3VCn4XA",
  authDomain: "carpinteria-dffa2.firebaseapp.com",
  projectId: "carpinteria-dffa2",
  storageBucket: "carpinteria-dffa2.appspot.com",
  messagingSenderId: "606692813667",
  appId: "1:606692813667:web:6a12b427ea30b1e6ae0156",
  measurementId: "G-Q7SHFHE818"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
