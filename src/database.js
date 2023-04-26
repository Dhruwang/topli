import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
  
const firebaseConfig = {
    apiKey: "AIzaSyCTeUC2Bz_UYAYxshDI5HFO7ispsaTdNF8",
  authDomain: "topli-7c42c.firebaseapp.com",
  databaseURL: "https://topli-7c42c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "topli-7c42c",
  storageBucket: "topli-7c42c.appspot.com",
  messagingSenderId: "608848835442",
  appId: "1:608848835442:web:4be46dd4105b68055163eb",
  measurementId: "G-YB2SK7Z3DB"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

  
export default database;