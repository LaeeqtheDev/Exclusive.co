// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMwvrw3i5_U6oM9XEnqZ0uvOPbzaEBZDY",
  authDomain: "excl-b4315.firebaseapp.com",
  projectId: "excl-b4315",
  storageBucket: "excl-b4315.appspot.com",
  messagingSenderId: "113088400834",
  appId: "1:113088400834:web:aa81d0526cf082b6de5a5b"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export const database = getDatabase(app);



export default app;
