// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASPE5EYd28nf9xXENQd0zT-f6pe5QoE9w",
  authDomain: "smart-door-unlock-7053c.firebaseapp.com",
  projectId: "smart-door-unlock-7053c",
  storageBucket: "smart-door-unlock-7053c.appspot.com",
  messagingSenderId: "1001115979419",
  appId: "1:1001115979419:web:b94a2b2dcf627c1bc0803e",
  measurementId: "G-LY281KK45X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Generate Functions
export const auth = getAuth(app);
export const db = getFirestore(app)

