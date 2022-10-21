import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGXg6eo2FR7c6jx3-2H9wwVhgrUzwBBQs",
  authDomain: "backend-tiendajs.firebaseapp.com",
  projectId: "backend-tiendajs",
  storageBucket: "backend-tiendajs.appspot.com",
  messagingSenderId: "188022907199",
  appId: "1:188022907199:web:b91fc656b1fb2ffc42338a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)