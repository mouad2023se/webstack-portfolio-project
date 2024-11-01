// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBV8PXJiaDfeiAs6bYSHqqeeMsHYDGCbBc",

  authDomain: "anime-oasis-6982c.firebaseapp.com",

  projectId: "anime-oasis-6982c",

  storageBucket: "anime-oasis-6982c.appspot.com",

  messagingSenderId: "970424239711",

  appId: "1:970424239711:web:14c2dc121f8de2ed123dea"

};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
