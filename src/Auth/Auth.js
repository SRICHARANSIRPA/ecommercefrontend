import * as firebase from "firebase/app";
import config from "./AuthConfig";
import StateContext from "../context/context";
import { useContext } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//initializing App
firebase.initializeApp(config);

//configuration
const auth = getAuth();
const provider = new GoogleAuthProvider();

//Methods
export const googleSignIn = async () => {
  const result = await signInWithPopup(auth, provider);
  if (result) {
    console.log(result);
  }
};

export const EmailPasswordLogin = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const signout = () => {
  signOut(auth)
    .then(() => {
      console.log("succeefull");
    })
    .catch((error) => {
      console.log(error);
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // const { userName, userId, Gender, UIDNumber } = useContext(StateContext);
    const uid = user.uid;
    console.log(uid, "SignIn");
  } else {
    console.log("SignOut");
  }
});