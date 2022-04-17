// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ8qrx5DxMYn0ge5Nc3x01YqZBX98lk70",
  authDomain: "photo-graphi-9e3aa.firebaseapp.com",
  projectId: "photo-graphi-9e3aa",
  storageBucket: "photo-graphi-9e3aa.appspot.com",
  messagingSenderId: "253059257337",
  appId: "1:253059257337:web:b78b19486e2a169f982328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth