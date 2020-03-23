// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyASoE5OnaZswrDZhNVMG35OD16f-GWTHqk",
  authDomain: "gloveblog-bc647.firebaseapp.com",
  databaseURL: "https://gloveblog-bc647.firebaseio.com",
  projectId: "gloveblog-bc647",
  storageBucket: "gloveblog-bc647.appspot.com",
  messagingSenderId: "5160147897",
  appId: "1:5160147897:web:d206fc53278091c2907468"
};
// Initialize Firebase
firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();

export { db }
