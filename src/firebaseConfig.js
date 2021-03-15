import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9m9TAeGGmpKOPEXRixSd9RVBFvDMK_YM",
  authDomain: "list-101.firebaseapp.com",
  databaseURL: "https://list-101.firebaseio.com",
  projectId: "list-101",
  storageBucket: "list-101.appspot.com",
  messagingSenderId: "64745801262",
  appId: "1:64745801262:web:c77a6ad1703a9b41c381bf",
  measurementId: "G-ZWL8DZCMXR"
};

export default firebase.initializeApp(firebaseConfig);