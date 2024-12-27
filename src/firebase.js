import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGwJ6r7UjNB9M0vPkd7QQkzaQtCfA95LI",
  authDomain: "talkio-d.firebaseapp.com",
  projectId: "talkio-d",
  storageBucket: "talkio-d.firebasestorage.app",
  messagingSenderId: "445249277233",
  appId: "1:445249277233:web:aa032b8e1fc489ab93f410",
  measurementId: "G-PF3241269R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
