import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCN6CqaRIrxR1QCkcZCXlVnz1Cna_w8oSs",
    authDomain: "onosui-d2fc1.firebaseapp.com",
    projectId: "onosui-d2fc1",
    storageBucket: "onosui-d2fc1.appspot.com",
    messagingSenderId: "831046514476",
    appId: "1:831046514476:web:3d9181a92c3baa2d769e89",
    measurementId: "G-5SYMNS6FWB"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);