// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjisHX5cesKK-R_aeqFqxItDevE7mIYkQ",
  authDomain: "cobanext-acb84.firebaseapp.com",
  projectId: "cobanext-acb84",
  storageBucket: "cobanext-acb84.appspot.com",
  messagingSenderId: "1060236368731",
  appId: "1:1060236368731:web:14650c9f2469a1aa83987e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
