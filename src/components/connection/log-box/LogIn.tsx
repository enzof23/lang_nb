import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Divider, Box, TextField, Typography } from "@mui/material";
import { SignUpButton } from "../../../mui_styles/styles";

import { validateEmail } from "../../../firebase/firebase-auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";

import GoogleAuthButton from "./GoogleAuthButton";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInEmail = async () => {
    const verifyEmail = validateEmail(email);

    if (verifyEmail && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <>
      <Box sx={{ marginBlock: "1rem 2rem" }}>
        <GoogleAuthButton textVariant={"log in"} />
      </Box>
      <Divider variant="middle">
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "#aeb4c4",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          or email
        </Typography>
      </Divider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          margin: "1rem 0",
        }}
      >
        <TextField
          required
          placeholder="Email"
          label="Email"
          type="email"
          sx={{ width: "100%", margin: "1rem 0" }}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <TextField
          required
          placeholder="Password"
          label="Password"
          type="password"
          sx={{ width: "100%", marginTop: "1rem" }}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button
          variant="text"
          sx={{
            justifyContent: "start",
            paddingLeft: "0.15rem",
            fontSize: "0.75em",
            width: "161px",
          }}
        >
          Forgotten Password ?
        </Button>
        <SignUpButton variant="contained" onClick={signInEmail}>
          log in !
        </SignUpButton>
      </div>
    </>
  );
}

export default LogIn;
