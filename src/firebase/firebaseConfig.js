import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyBhedL50-5hDfc5HRpnbYB3-qFuMKAE5Ns",
  authDomain: "hell-in-raccon-city.firebaseapp.com",
  projectId: "hell-in-raccon-city",
  storageBucket: "hell-in-raccon-city.appspot.com",
  messagingSenderId: "562915339946",
  appId: "1:562915339946:web:3957dc03e33cb7c6e1ead3"
};
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
// const db = getFirestore()

export {
    app,
    google,
    // db
}