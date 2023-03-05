import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbMYK08En0RqB4mrCBuL2EoBpRaxH0VRE",
  authDomain: "agrow-170db.firebaseapp.com",
  projectId: "agrow-170db",
  storageBucket: "agrow-170db.appspot.com",
  messagingSenderId: "184723691421",
  appId: "1:184723691421:web:f5cc5e998f95e6cd3e8174",
  measurementId: "G-X1MS4DYVVR",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
