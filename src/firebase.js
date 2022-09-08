import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyDxbQ6cEQiBuBsPNR3TMImm9nrE-2A8Xnk",
  authDomain: "wedding-invitation-merakinoya.firebaseapp.com",
  databaseURL: "https://wedding-invitation-merakinoya-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wedding-invitation-merakinoya",
  storageBucket: "wedding-invitation-merakinoya.appspot.com",
  messagingSenderId: "721942610910",
  appId: "1:721942610910:web:3306a42baa07712c87934f",
  measurementId: "G-TT74T00MVF",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }