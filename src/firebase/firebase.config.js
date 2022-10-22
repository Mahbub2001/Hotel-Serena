// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIZgLChsty2fVBr6yi91qLL0XFmQUl_QU",
  authDomain: "hotel-serena-d24b4.firebaseapp.com",
  projectId: "hotel-serena-d24b4",
  storageBucket: "hotel-serena-d24b4.appspot.com",
  messagingSenderId: "640103969405",
  appId: "1:640103969405:web:fc5c328f5cba2af7d3f714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;