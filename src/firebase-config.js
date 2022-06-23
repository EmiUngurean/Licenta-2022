import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAe47odpqV6dkh4GjUIwEc00DVWMlVYbkI",
    authDomain: "licenta-2022-24551.firebaseapp.com",
    projectId: "licenta-2022-24551",
    storageBucket: "licenta-2022-24551.appspot.com",
    messagingSenderId: "1065642843630",
    appId: "1:1065642843630:web:f31d60d0458f53358c82ff",
    measurementId: "G-1R21D0TV34"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);