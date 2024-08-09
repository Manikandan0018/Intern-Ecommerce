// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAFjiO0DOvUrZUDontFoPaPXWr7Ib7VWh8",
  authDomain: "otp-project-899e9.firebaseapp.com",
  projectId: "otp-project-899e9",
  storageBucket: "otp-project-899e9.appspot.com",
  messagingSenderId: "179086818191",
  appId: "1:179086818191:web:e20e1672ae8c6f931929fa",
  measurementId: "G-3746JBFLKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;