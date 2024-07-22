// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr10RNYAAmprpEAX4N8VS1zkBK2GDK8oc",
  authDomain: "netflix-react-tailwind-d227c.firebaseapp.com",
  projectId: "netflix-react-tailwind-d227c",
  storageBucket: "netflix-react-tailwind-d227c.appspot.com",
  messagingSenderId: "208670379468",
  appId: "1:208670379468:web:c434f030f88afe81bea169"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

