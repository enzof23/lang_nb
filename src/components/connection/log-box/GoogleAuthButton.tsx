import { googleSignIn } from "../../../firebase/firebase-auth";

import { GoogleSignInButton } from "../../../mui_styles/styles";

import { FcGoogle } from "react-icons/fc";

interface GoogleAuthProps {
  textVariant: string;
}

const GoogleAuthButton: React.FC<GoogleAuthProps> = (props) => {
  const svgStyle = { marginRight: "0.5rem", fontSize: "1.3em" };
  const { textVariant } = props;

  return (
    <GoogleSignInButton onClick={googleSignIn}>
      <FcGoogle style={svgStyle} />
      {`${textVariant} with google`}
    </GoogleSignInButton>
  );
};

export default GoogleAuthButton;
