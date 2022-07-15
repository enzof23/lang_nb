import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-config";

type Credentials = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const signUpEmail = ({
  email,
  password,
  firstName,
  lastName,
}: Credentials) => {
  const verifyEmail = validateEmail(email);

  if (verifyEmail && password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user: User | null = auth.currentUser;
        if ((firstName && user) || (lastName && user)) {
          updateProfile(user, {
            displayName: `${firstName} ${lastName}`,
          });
        }
      })
      // POPULATE USER STATE HERE
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`An error has occured: ${errorCode} ${errorMessage}`);
      });
  } else {
    alert("Please fill all required input");
  }
};

export const googleSignIn = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      // POPULATE USER STATE HERE
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};

export const SignOut = () => {
  signOut(auth)
    .then(() => console.log("signed out"))
    .catch((error) => console.log(error.message));
};
