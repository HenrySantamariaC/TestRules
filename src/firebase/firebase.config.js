import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKlHgZwZ0NGX7QY9kHTdx-PDynptG6V7s",
  authDomain: "simulatest-23339.firebaseapp.com",
  projectId: "simulatest-23339",
  storageBucket: "simulatest-23339.appspot.com",
  messagingSenderId: "762608216643",
  appId: "1:762608216643:web:2fab5ccd46811b11d0c2f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const appFb = app 