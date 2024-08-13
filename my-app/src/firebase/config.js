import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAfh-2Rrds_QBioiRPGEoQ2vTD1nsGPtN4",
    authDomain: "learningreact-bc0ee.firebaseapp.com",
    projectId: "learningreact-bc0ee",
    storageBucket: "learningreact-bc0ee.appspot.com",
    messagingSenderId: "546259367825",
    appId: "1:546259367825:web:6700689498948486538c30"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);