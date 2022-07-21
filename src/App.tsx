import { lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "./firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "./features/authentication/context/AuthContext";

import { LoadingSpinner } from "./layouts/index";

// const AuthenticatedApp = lazy(
//   () => import("./pages/auth-app/AuthenticatedApp")
// );
// const Authentication = lazy(
//   () => import("./pages/Authentication")
// );

const AuthenticatedApp = lazy(async () => {
  return Promise.all([
    import("./pages/AuthenticatedApp"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});

const Authentication = lazy(async () => {
  return Promise.all([
    import("./pages/Authentication"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});

const App: React.FC = () => {
  const navigate = useNavigate();

  const { userInfo, setUserInfo } = useAuthContext();
  const { isLogged } = userInfo;

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
          isLogged: true,
        });
      } else {
        setUserInfo({
          id: "",
          name: "",
          photo: "",
          isLogged: false,
        });
      }
      navigate("/");
    });
    return () => authCheck();
  }, [auth]);

  return isLogged ? (
    <Suspense fallback={<LoadingSpinner />}>
      <AuthenticatedApp />
    </Suspense>
  ) : (
    <Suspense fallback={<LoadingSpinner />}>
      <Authentication />
    </Suspense>
  );
};

export default App;
