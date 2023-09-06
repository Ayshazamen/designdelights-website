




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyCSLKb2_lwirgL49OMibkjP4kzfcaLetxg",
  authDomain: "kitchendesigns-b60d8.firebaseapp.com",
  projectId: "kitchendesigns-b60d8",
  storageBucket: "kitchendesigns-b60d8.appspot.com",
  messagingSenderId: "922624736214",
  appId: "1:922624736214:web:f15179c16f368e4d824277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app;