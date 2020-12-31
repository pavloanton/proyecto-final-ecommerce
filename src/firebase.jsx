import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9jkYcAeO7K_YV2GDt1doy9LkqcNzenes",
  authDomain: "abyssal-ce8d1.firebaseapp.com",
  projectId: "abyssal-ce8d1",
  storageBucket: "abyssal-ce8d1.appspot.com",
  messagingSenderId: "29637838597",
  appId: "1:29637838597:web:a0616aabbaca9d5bf0d96c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };