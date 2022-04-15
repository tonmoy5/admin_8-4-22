import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCxnTfO26eY5Oh9FSt71APu2HPLo6dzI0E",
  authDomain: "admin-8-4-22.firebaseapp.com",
  projectId: "admin-8-4-22",
  storageBucket: "admin-8-4-22.appspot.com",
  messagingSenderId: "748216028529",
  appId: "1:748216028529:web:0781cb8228e2388094fad0",
  measurementId: "G-PZ0FWE242C"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);