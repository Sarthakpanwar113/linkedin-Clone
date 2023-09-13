// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRRwRTuBojIN16_VjeOn_5toTsKcbvu6A",
  authDomain: "linkdin-clone-8d359.firebaseapp.com",
  projectId: "linkdin-clone-8d359",
  storageBucket: "linkdin-clone-8d359.appspot.com",
  messagingSenderId: "624145011147",
  appId: "1:624145011147:web:f13b4fc7ab7a48af1fa64e",
  measurementId: "G-YH41GJXMP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);