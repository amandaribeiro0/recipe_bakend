import firebase from "firebase/app";
 
//import firebase from '../node_modules/firebase'
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
 var firebaseConfig = {
  apiKey: "AIzaSyAXPndLsQFTaVjt149MEhoBdo0_clQvibs",
   authDomain: "app-receita-2ac43.firebaseapp.com",
  projectId: "app-receita-2ac43",
   storageBucket: "app-receita-2ac43.appspot.com",
   messagingSenderId: "487420633123",
  appId: "1:487420633123:web:d6bac373892abad3971196",
 };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
// // // // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // export const db = getFirestore(app);
//  const db = getFirestore(app)

// export default {
//   firebase,
//   db,
//  };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAXPndLsQFTaVjt149MEhoBdo0_clQvibs",
//   authDomain: "app-receita-2ac43.firebaseapp.com",
//   projectId: "app-receita-2ac43",
//   storageBucket: "app-receita-2ac43.appspot.com",
//   messagingSenderId: "487420633123",
//   appId: "1:487420633123:web:d6bac373892abad3971196"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);