// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSyK0Wu2LyLNav-gIN8Qe63mxJfD86yqc",
  authDomain: "valley-auto-parts-12240.firebaseapp.com",
  projectId: "valley-auto-parts-12240",
  storageBucket: "valley-auto-parts-12240.appspot.com",
  messagingSenderId: "151186204993",
  appId: "1:151186204993:web:119456ade555cadd75d9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;