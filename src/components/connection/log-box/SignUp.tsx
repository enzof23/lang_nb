import { useState } from "react";

import { Divider, Grid, TextField, Typography, Box } from "@mui/material";
import { CenteredGrid, SignUpButton } from "../../../mui_styles/styles";

import { signUpEmail } from "../../../firebase/firebase-auth";

import GoogleAuthButton from "./GoogleAuthButton";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Box sx={{ marginBlock: "1rem 2rem", width: "100%" }}>
        <GoogleAuthButton textVariant={"continue"} />
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
        }}
      >
        <CenteredGrid
          container
          sx={{
            margin: "1rem 0",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={5}>
            <TextField
              placeholder="First Name"
              label="First Name"
              sx={{ width: "100%" }}
              onChange={(e) => setFirstName(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Last Name"
              label="Last Name"
              sx={{ width: "100%" }}
              onChange={(e) => setLastName(e.currentTarget.value)}
            />
          </Grid>
        </CenteredGrid>
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
          sx={{ width: "100%", margin: "1rem 0" }}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <SignUpButton
          variant="contained"
          onClick={() => signUpEmail({ email, password, firstName, lastName })}
        >
          Sign Up !
        </SignUpButton>
      </div>
    </>
  );
};

export default SignUp;
