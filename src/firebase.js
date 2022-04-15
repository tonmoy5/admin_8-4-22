
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCxnTfO26eY5Oh9FSt71APu2HPLo6dzI0E",
  authDomain: "admin-8-4-22.firebaseapp.com",
  projectId: "admin-8-4-22",
  storageBucket: "admin-8-4-22.appspot.com",
  messagingSenderId: "748216028529",
  appId: "1:748216028529:web:0781cb8228e2388094fad0",
  measurementId: "G-PZ0FWE242C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();