import { useAuthContext } from "../../context/AuthContext";

import { GoogleSignInButton } from "../../mui_styles/styles";
import { FcGoogle } from "react-icons/fc";

interface GoogleAuthProps {
  textVariant: string;
}

const GoogleAuthButton: React.FC<GoogleAuthProps> = (props) => {
  const svgStyle = { marginRight: "0.5rem", fontSize: "1.3em" };
  const { textVariant } = props;

  const { googleAuth } = useAuthContext();

  return (
    <GoogleSignInButton onClick={googleAuth}>
      <FcGoogle style={svgStyle} />
      {`${textVariant} with google`}
    </GoogleSignInButton>
  );
};

export default GoogleAuthButton;
