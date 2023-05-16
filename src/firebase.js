import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlYEBC6FSEq2UijJS0zgII_Zj--sTNv_g",
  authDomain: "sohail-data-react.firebaseapp.com",
  projectId: "sohail-data-react",
  storageBucket: "sohail-data-react.appspot.com",
  messagingSenderId: "553892404655",
  appId: "1:553892404655:web:b212227630c3324243635a"
};

 export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
