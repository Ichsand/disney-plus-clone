const firebase = require('firebase/app').default;
require('firebase/auth');
require('firebase/firestore');
require('firebase/storage');

const firebaseConfig = {
  apiKey: "AIzaSyAl8nU0MkMMJIrjsQlr1Kjs45pv2WBKROE",
  authDomain: "disneyplus-clone-50f5b.firebaseapp.com",
  projectId: "disneyplus-clone-50f5b",
  storageBucket: "disneyplus-clone-50f5b.appspot.com",
  messagingSenderId: "702308407986",
  appId: "1:702308407986:web:49da197f37dabce08987ab",
  measurementId: "G-74KH686087"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;