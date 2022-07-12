import { ReactElement, useEffect, useState, FC } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase-config";

interface AuthRouteProps {
  children: ReactElement[];
}

const AuthRoute: FC<AuthRouteProps> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        navigate("/login");
      }
    });

    return () => AuthCheck();
  }, [auth]);

  if (loading) return <p>loading...</p>;

  return <div>{children}</div>;
};

export default AuthRoute;
