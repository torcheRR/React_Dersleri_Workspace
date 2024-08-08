// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxUseZ_eg0PmWwW1zEH35dBuquPImr-r0",
  authDomain: "fir-education-e6766.firebaseapp.com",
  projectId: "fir-education-e6766",
  storageBucket: "fir-education-e6766.appspot.com",
  messagingSenderId: "1012844367286",
  appId: "1:1012844367286:web:ccce3baa040f8e2faa0517"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
