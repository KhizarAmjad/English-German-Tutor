// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";
// import * as firebase from 'firebase/app'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//import "firebase/functions";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0hq918f_bsDHBNlBXOshg4-Zo71eDblQ",
  authDomain: "englishgerman-fc3fb.firebaseapp.com",
  projectId: "englishgerman-fc3fb",
  storageBucket: "englishgerman-fc3fb.appspot.com",
  messagingSenderId: "814460390979",
  appId: "1:814460390979:web:21f671053bad1ce1124ef6",
  measurementId: "G-7BBJLRH0GX",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
// app.firestore().settings({ persistence: false });

const db = app.firestore();

const auth = firebase.auth();
// const storage = firebase.storage();

export { db, auth };
