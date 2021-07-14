import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzt9AcElqfdOHlnqklistLyF6vv6A6_84",
  authDomain: "docs-a7a15.firebaseapp.com",
  projectId: "docs-a7a15",
  storageBucket: "docs-a7a15.appspot.com",
  messagingSenderId: "144224781968",
  appId: "1:144224781968:web:4455f446ff4e75bfc67a15",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();

export { db };
