import { useState } from "react";

import { Button, Divider, Box, TextField, Typography } from "@mui/material";
import { ConnectionButton } from "../../../../mui_styles/styles";

import { useAuthContext } from "../../context/AuthContext";
import { GoogleAuthButton } from "../ui/GoogleAuthButton";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInEmail } = useAuthContext();

  return (
    <>
      <Box sx={{ marginBlock: "1rem 2rem" }}>
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
        <ConnectionButton
          variant="contained"
          onClick={() => signInEmail({ email, password })}
        >
          log in !
        </ConnectionButton>
      </div>
    </>
  );
}

// export default LogIn;
