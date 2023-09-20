import { s as setContext, g as getContext } from "./ssr.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const contextKey = "firebase";
function setFirebaseContext(sdks) {
  setContext(contextKey, sdks);
}
function getFirebaseContext() {
  return getContext(contextKey);
}
const firebaseConfig = {
  apiKey: "AIzaSyBGaYSlGNY5fqJUlyFpvDMfxKV4PxLu_Ck",
  authDomain: "m4m-foosball-competition.firebaseapp.com",
  databaseURL: "https://m4m-foosball-competition.firebaseio.com",
  projectId: "m4m-foosball-competition",
  storageBucket: "m4m-foosball-competition.appspot.com",
  messagingSenderId: "470339542325",
  appId: "1:470339542325:web:5331737bde4be4765d407c"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export {
  auth as a,
  firestore as f,
  getFirebaseContext as g,
  setFirebaseContext as s
};
