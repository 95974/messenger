import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyAlK2qN05CiSWnghcL3teSJ-A21ISLjATA",
  authDomain: "mess-9b175.firebaseapp.com",
  databaseURL: "https://mess-9b175-default-rtdb.firebaseio.com",
  projectId: "mess-9b175",
  storageBucket: "mess-9b175.appspot.com",
  messagingSenderId: "316210066299",
  appId: "1:316210066299:web:d10ff3404c0b3e8c5183de"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  export { db,timestamp };
