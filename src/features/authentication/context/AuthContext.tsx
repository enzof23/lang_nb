import { createContext, ReactNode, useContext, useState } from "react";

import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
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

const signUpEmail = async ({
  email,
  password,
  firstName,
  lastName,
}: Credentials) => {
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user: User = userData.user;
    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`,
    });
  } catch (err) {
    alert(`An error has occured: ${err}`);
  }
};

const signInEmail = async ({ email, password }: Credentials) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("signed in");
  } catch (err) {
    alert(`An error has occured: ${err}`);
  }
};

const googleAuth = async () => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    console.log("signed in");
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

const passwordForgotten = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert(`An email has been sent to your address ${email}`);
  } catch (error) {
    alert(`An error has occured: ${error}`);
  }
};

const useAuth = (initial: UserInfo = { id: "", name: "", isLogged: false }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(initial);

  return {
    signUpEmail,
    signInEmail,
    googleAuth,
    passwordForgotten,

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
