import { createContext, ReactNode, useContext, useState } from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";

export type UserInfo = {
  id: string;
  name: string | null;
  photo?: string | null;
  isLogged: boolean;
};

type Credentials = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const signUpEmail = async ({
  email,
  password,
  firstName,
  lastName,
}: Credentials) => {
  const verifyEmail = validateEmail(email);

  if (verifyEmail && password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        const user: User = auth.currentUser;
        if (firstName || lastName) {
          console.log(firstName);
          updateProfile(user, {
            displayName: `${firstName} ${lastName}`,
          });
        }
      }
    } catch (err) {
      alert(`An error has occured: ${err}`);
    }
  } else {
    alert("Please fill all required input");
  }
};

const signInEmail = async ({ email, password }: Credentials) => {
  const verifyEmail = validateEmail(email);

  if (verifyEmail && password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("signed in");
    } catch (err) {
      alert(`An error has occured: ${err}`);
    }
  } else {
    alert("Please fill all required input");
  }
};

const googleAuth = async () => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
  } catch (err) {
    alert(`An error has occured: ${err}`);
  }
};

const authSignOut = async () => {
  try {
    signOut(auth);

    console.log("signed out");
  } catch (err) {
    alert(`An error has occured: ${err}`);
  }
};

const useAuth = (initial: UserInfo = { id: "", name: "", isLogged: false }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(initial);

  return {
    signUpEmail: ({ email, password, firstName, lastName }: Credentials) => {
      signUpEmail({ email, password, firstName, lastName });
    },
    signInEmail: ({ email, password }: Credentials) => {
      signInEmail({ email, password });
    },
    googleAuth: () => {
      googleAuth();
    },
    authSignOut: () => {
      authSignOut();
      setUserInfo(initial);
    },

    userInfo,
    setUserInfo,
  };
};

const AuthContext = createContext<ReturnType<typeof useAuth> | null>(null);

export const useAuthContext = () => useContext(AuthContext)!;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};
