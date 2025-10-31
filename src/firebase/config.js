import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyCZ7IHD5P_BVq_z3tGQg65aYOqckGIII2U",
    authDomain: "babysits-3cfdd.firebaseapp.com",
    projectId: "babysits-3cfdd",
    storageBucket: "babysits-3cfdd.firebasestorage.app",
    messagingSenderId: "169800253420",
    appId: "1:169800253420:web:9309ada13fba76ca830ac9"
};


// init firebase
initializeApp(firebaseConfig)





//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();

const analytics = getAnalytics();



export { auth, db, database, storage, analytics}

