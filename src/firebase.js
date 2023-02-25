import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeOZkNqOPQizgoGZmabbSsmAF0E3iTM58",
    authDomain: "linkedin-clone-c4efe.firebaseapp.com",
    projectId: "linkedin-clone-c4efe",
    storageBucket: "linkedin-clone-c4efe.appspot.com",
    messagingSenderId: "425201887586",
    appId: "1:425201887586:web:e0ee3053d1a37ee04de43b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };