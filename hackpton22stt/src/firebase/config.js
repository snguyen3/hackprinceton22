// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//import "firebase/database";
import 'firebase/storage';
import 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkDmz1agH9zX5VvTosSQycNJMb7Y6Kr1w",
  authDomain: "hackpton22-speechtotext.firebaseapp.com",
  projectId: "hackpton22-speechtotext",
  storageBucket: "hackpton22-speechtotext.appspot.com",
  messagingSenderId: "706405324114",
  appId: "1:706405324114:web:86bc09a3032746f14d568b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);


const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
