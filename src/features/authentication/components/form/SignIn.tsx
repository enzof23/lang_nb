import { Typography } from "@mui/material";
import { verify } from "crypto";
import { verifyBeforeUpdateEmail } from "firebase/auth";
import { useState } from "react";
import { verifyEmail } from "../../../../utils/verifyEmail";
import { useAuthContext } from "../../context/AuthContext";
import {
  ForgotPassword,
  SignInButton,
  SignInForm,
  SignInFormContainer,
  SignInInput,
} from "../../mui_styled/styles";

import { GoogleAuthButton } from "../ui/GoogleAuthButton";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInEmail, passwordForgotten } = useAuthContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validEmail = verifyEmail(email);

    if (validEmail && password) {
      signInEmail({ email, password });
    } else if (!validEmail) {
      alert("Enter a valid Email address");
    } else {
      alert("An error has occured during sign in, try again");
    }
  };

  const handlePasswordForgotten = () => {
    const emailAddress = prompt("Enter your email address", "");

    if (emailAddress) {
      const validEmail = verifyEmail(emailAddress);

      if (validEmail) {
        passwordForgotten(emailAddress);
      } else {
        alert("Please enter a valid email address");
      }
    }
  };

  return (
    <SignInFormContainer>
      <Typography variant="h4" sx={{ alignSelf: "flex-start" }}>
        Sign in
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <SignInForm>
          {/* error message for unsuccessful log in */}
          <SignInInput
            label="Email address"
            type="email"
            variant="filled"
            color="primary"
            required
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <SignInInput
            label="Password"
            type="password"
            variant="filled"
            color="primary"
            required
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <SignInButton
            variant="outlined"
            type="submit"
            sx={{
              padding: "0.75rem",
              borderColor: "white",
              color: "white",
              borderWidth: "1px",
            }}
          >
            Sign in
          </SignInButton>
          <ForgotPassword onClick={handlePasswordForgotten}>
            Forgot Password ?
          </ForgotPassword>
        </SignInForm>
      </form>
      <GoogleAuthButton />
    </SignInFormContainer>
  );
};
