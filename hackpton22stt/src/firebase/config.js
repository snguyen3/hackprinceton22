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

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);


const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
