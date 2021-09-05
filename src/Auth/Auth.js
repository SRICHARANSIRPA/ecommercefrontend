import * as firebase from "firebase/app";
import config from "./AuthConfig";
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
export const auth = getAuth();
const provider = new GoogleAuthProvider();

//Methods
export const googleSignIn = async () => {
  const result = await signInWithPopup(auth, provider);
  if (result) {
    console.log("Hello");
    console.log(result);
    return result.user;
  }
  // await signInWithPopup(auth, provider)
  //   .then((result) => )
  //   .catch((error) => {
  //     window.alert("Authentication Failed");
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode);
  //     console.log(errorMessage);
  //   });
};

export const EmailPasswordLogin = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
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

export { onAuthStateChanged };
