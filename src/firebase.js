// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBrMSDU8zamdvyTaVGdMEQ2poJY7XXBas",
    authDomain: "clone-yt-69062.firebaseapp.com",
    projectId: "clone-yt-69062",
    storageBucket: "clone-yt-69062.appspot.com",
    messagingSenderId: "997548737046",
    appId: "1:997548737046:web:c1469c3a57200e812f2b37"
  };
   
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };