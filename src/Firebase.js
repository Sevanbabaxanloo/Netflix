import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzLOhGWj_oJoI3l_0cwd5Yji5O6rVPuC4",
  authDomain: "netflix-95774.firebaseapp.com",
  projectId: "netflix-95774",
  storageBucket: "netflix-95774.appspot.com",
  messagingSenderId: "1031611134918",
  appId: "1:1031611134918:web:a132653587641a279478c7"
};

// Initialize Firebase
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };