import { useState } from "react";

import { Divider, Grid, TextField, Typography, Box } from "@mui/material";
import { CenteredGrid, ConnectionButton } from "../../../../mui_styles/styles";

import { GoogleAuthButton } from "../ui/GoogleAuthButton";
import { useAuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUpEmail } = useAuthContext();

  return (
    <>
      <Box sx={{ marginBlock: "1rem 2rem", width: "100%" }}>
        <GoogleAuthButton />
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
        <ConnectionButton
          variant="contained"
          onClick={() => signUpEmail({ email, password, firstName, lastName })}
        >
          Sign Up !
        </ConnectionButton>
      </div>
    </>
  );
};

export default SignUp;
