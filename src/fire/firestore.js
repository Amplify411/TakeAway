// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDesAqqz7KMRWne0lY1NhA-HBy7Dz22qZw",
  authDomain: "munching-b0c08.firebaseapp.com",
  projectId: "munching-b0c08",
  storageBucket: "munching-b0c08.appspot.com",
  messagingSenderId: "1058586138196",
  appId: "1:1058586138196:web:0557f4cf74966c9ef5ffc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db =getFirestore(app);
export const analytics = getAnalytics(app);

export default app;