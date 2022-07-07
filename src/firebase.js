import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics'

import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyC6JkrCXcX9Xb-OPMYYki_Z7DvL3zFinO0",
    authDomain: "restaurantusv.firebaseapp.com",
    projectId: "restaurantusv",
    storageBucket: "restaurantusv.appspot.com",
    messagingSenderId: "1073003991124",
    appId: "1:1073003991124:web:d8b35563a1f67915905dc1",
    measurementId: "G-LCN30LMD9X",
    databaseURL: "https://licenta-2022-24551-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

// export const db = getFirestore(app);

export const database = getDatabase(app);