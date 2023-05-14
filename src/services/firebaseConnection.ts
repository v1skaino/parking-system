import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCibxlL424k65k5ek5lR02czyKNtpInTiA",
  authDomain: "parking-system-a9ad4.firebaseapp.com",
  projectId: "parking-system-a9ad4",
  storageBucket: "parking-system-a9ad4.appspot.com",
  messagingSenderId: "585167096116",
  appId: "1:585167096116:web:5cf961ad322ee02ddafd61",
  measurementId: "G-ZVMB5Z5R3L",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
