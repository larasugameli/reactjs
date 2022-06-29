// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFRpX02WZttxfDXhFB5ybhS0DVs688Hl8",
  authDomain: "p-grab-company.firebaseapp.com",
  projectId: "p-grab-company",
  storageBucket: "p-grab-company.appspot.com",
  messagingSenderId: "1011376535906",
  appId: "1:1011376535906:web:1399324d1d19f73ebf543b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore initialize
const db = getFirestore(app);

export default db;
