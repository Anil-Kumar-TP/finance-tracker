import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore,doc,setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj5R3xLIXK2hcbVsN1S5nRbuPhhsHoywU",
  authDomain: "fintrack-8f035.firebaseapp.com",
  projectId: "fintrack-8f035",
  storageBucket: "fintrack-8f035.appspot.com",
  messagingSenderId: "7106765509",
  appId: "1:7106765509:web:7d1c6d0897a5fbc83706ac",
  measurementId: "G-0T9GVWGVX1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };