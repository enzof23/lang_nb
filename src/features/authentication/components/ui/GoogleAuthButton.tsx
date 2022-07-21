import { useAuthContext } from "../../context/AuthContext";

import { FcGoogle } from "react-icons/fc";
import { GoogleSignInButton } from "../mui_styled/styles";

export const GoogleAuthButton: React.FC = () => {
  const svgStyle = { marginRight: "0.5rem", fontSize: "1.75em" };

  const { googleAuth } = useAuthContext();

  return (
    <GoogleSignInButton onClick={googleAuth}>
      <FcGoogle style={svgStyle} />
      Sign in/up with Google
    </GoogleSignInButton>
  );
};
