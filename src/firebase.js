import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBik6JvfY31VapKrHV9n0Qd-HZPdhbShe8",
    authDomain: "rookas-telegram-app.firebaseapp.com",
    projectId: "rookas-telegram-app",
    storageBucket: "rookas-telegram-app.appspot.com",
    messagingSenderId: "510982523109",
    appId: "1:510982523109:web:ce261e8d1d58bcb0e52c0c",
    measurementId: "G-3TE3CR5PS4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export {auth, provider};