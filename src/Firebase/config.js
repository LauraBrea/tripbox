import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBB6f2daneqBS7Lz5FVJcQjluWt13YJT4",
  authDomain: "tripbox-f4daa.firebaseapp.com",
  projectId: "tripbox-f4daa",
  storageBucket: "tripbox-f4daa.appspot.com",
  messagingSenderId: "924001233471",
  appId: "1:924001233471:web:82ed014dfb5bee9140268a"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);


