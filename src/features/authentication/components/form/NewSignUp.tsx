import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { verifyEmail } from "../../../../utils/verifyEmail";
import { useAuthContext } from "../../context/AuthContext";
import { SignUpButton, SignUpInput } from "../mui_styled/styles";

export const NewSignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { signUpEmail } = useAuthContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validEmail = verifyEmail(email);
    const validPassword = password.length > 5;
    const passwordConfirmed = password === confirmPassword;

    const allCredentialsValid =
      firstName && lastName && validEmail && validPassword && passwordConfirmed;

    if (allCredentialsValid) {
      signUpEmail({ email, password, firstName, lastName });
    } else if (!validEmail) {
      alert("Please enter a valid email address");
    } else if (!passwordConfirmed) {
      alert("Your password confirmation isn't matching");
    } else {
      alert("An error has occured");
    }
  };

  return (
    <fieldset
      style={{
        border: "2px solid #0a082d",
        borderRadius: "4px",
        padding: "2rem",
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <legend style={{ padding: "0 8px" }}>
        <Typography variant="h4">Sign Up</Typography>
      </legend>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            marginBlock: "1rem",
            rowGap: "1rem",
          }}
        >
          <Grid item xs={12} sm={5.7}>
            <SignUpInput
              variant="outlined"
              required
              label="First Name"
              onChange={(e) => setFirstName(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5.7}>
            <SignUpInput
              variant="outlined"
              required
              label="Last Name"
              onChange={(e) => setLastName(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <SignUpInput
              variant="outlined"
              required
              label="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5.7}>
            <SignUpInput
              variant="outlined"
              type="password"
              required
              label="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5.7}>
            <SignUpInput
              variant="outlined"
              type="password"
              required
              label="Confirm Password"
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <SignUpButton variant="outlined" type="submit">
              Sign Up
            </SignUpButton>
          </Grid>
        </Grid>
      </form>
    </fieldset>
  );
};
