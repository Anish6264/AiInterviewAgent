
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterviewagent-8a7b6.firebaseapp.com",
  projectId: "aiinterviewagent-8a7b6",
  storageBucket: "aiinterviewagent-8a7b6.firebasestorage.app",
  messagingSenderId: "858452407795",
  appId: "1:858452407795:web:3399a8cc33dca53aee8e86"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}