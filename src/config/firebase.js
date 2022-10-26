import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyCr13XIM8kz-GKFEo3U-X4k1SEs0Ut5bFs",
  authDomain: "mydrakorlist.firebaseapp.com",
  projectId: "mydrakorlist",
  storageBucket: "mydrakorlist.appspot.com",
  messagingSenderId: "207097010619",
  appId: "1:207097010619:web:3490ec1018d6cd4d1b8c9e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
