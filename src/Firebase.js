
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqoRi_3KPTxnc8JnazDlmHnZdbwjAETno",
  authDomain: "getkayy-ec285.firebaseapp.com",
  databaseURL: "https://getkayy-ec285.firebaseio.com",
  projectId: "getkayy-ec285",
  storageBucket: "getkayy-ec285.appspot.com",
  messagingSenderId: "613770384189",
  appId: "1:613770384189:web:1098dad26cd48b1b226b54",
  measurementId: "G-F39NLD65HK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;