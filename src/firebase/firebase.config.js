// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDszmqRLRiQFrShIArp4JCnpqIVlrs5CGk",
  authDomain: "the-news-dragon-5caf2.firebaseapp.com",
  projectId: "the-news-dragon-5caf2",
  storageBucket: "the-news-dragon-5caf2.appspot.com",
  messagingSenderId: "315779597836",
  appId: "1:315779597836:web:c42147b8c7e0e7e1469029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;