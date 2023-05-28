// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCQ87pk5LdakBoQjBcic4R7VBE7kYPruY",
  authDomain: "filmy-store.firebaseapp.com",
  projectId: "filmy-store",
  storageBucket: "filmy-store.appspot.com",
  messagingSenderId: "548221956475",
  appId: "1:548221956475:web:c2406012979f77a024cdde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movieData = collection(db,"FilmyStore" )
export default app;