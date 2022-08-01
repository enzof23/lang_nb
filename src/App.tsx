import { lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "./firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "./features/authentication/context/AuthContext";
import { suspend } from "suspend-react";

const AuthenticatedApp = lazy(() => import("./pages/AuthenticatedApp"));
const Authentication = lazy(() => import("./pages/Authentication"));

const getInitialAuth = async () => {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      resolve(user);
      unsub();
    });
  });
};

console.log("watch render");

const App: React.FC = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAuthContext();

  const initialUser = suspend(getInitialAuth, ["initialAuth"]);
  const [currentUser, setCurrentUser] = useState(initialUser);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        });
      }

      setCurrentUser(user);

      navigate("/");
    });
    // eslint-disable-next-line
  }, []);

  return currentUser ? <AuthenticatedApp /> : <Authentication />;
};

export default App;
