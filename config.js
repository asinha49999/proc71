import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAZmVUfXRGpj_l_cHrjgjFIcAFNDd6YAY0",
    authDomain: "storytelling-d8de0.firebaseapp.com",
    databaseURL: "https://storytelling-d8de0-default-rtdb.firebaseio.com",
    projectId: "storytelling-d8de0",
    storageBucket: "storytelling-d8de0.appspot.com",
    messagingSenderId: "1017339473916",
    appId: "1:1017339473916:web:b60831e3c71ebe2d848c79"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
