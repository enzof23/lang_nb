import { lazy, Suspense, useEffect } from "react";
import { useAuthContext } from "./context/AuthContext";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import { LoadingSpinner } from "./components/index";
import { useLocation, useNavigate } from "react-router-dom";

const AuthenticatedApp = lazy(async () => {
  return Promise.all([
    import("./pages/auth-app/AuthenticatedApp"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});

const UnauthenticatedApp = lazy(async () => {
  return Promise.all([
    import("./pages/unauth-app/UnauthenticatedApp"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { userInfo, setUserInfo } = useAuthContext();
  const { isLogged } = userInfo;

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (location.pathname === "/create-list") {
          navigate("/");
        }
        setUserInfo({
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
          isLogged: true,
        });
      } else {
        navigate("/");
        setUserInfo({
          id: "",
          name: "",
          photo: "",
          isLogged: false,
        });
      }
    });
    return () => authCheck();
  }, [auth]);

  return isLogged ? (
    <Suspense fallback={<LoadingSpinner />}>
      <AuthenticatedApp />
    </Suspense>
  ) : (
    <Suspense fallback={<LoadingSpinner />}>
      <UnauthenticatedApp />
    </Suspense>
  );
};

export default App;
