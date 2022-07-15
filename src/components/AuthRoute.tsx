import { ReactElement, useEffect, useState, FC } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase-config";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/system";
import { SemipolarSpinner } from "react-epic-spinners";

interface AuthRouteProps {
  children: ReactElement[];
}

const AuthRoute: FC<AuthRouteProps> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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

  if (loading)
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SemipolarSpinner />
      </Box>
    );

  return <div>{children}</div>;
};

export default AuthRoute;
