import { Grid, Typography } from "@mui/material";
import { NewSignIn, NewSignUp } from "../features/authentication/components";
import {
  SignInContainer,
  SignUpContainer,
} from "../features/authentication/components/mui_styled/styles";

export const Authentication = () => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <SignInContainer item xs={12} md={5.5}>
        <Typography variant="h3">Logo</Typography>
        <NewSignIn />
      </SignInContainer>
      <SignUpContainer item xs={12} md={6.5}>
        <Typography variant="h4">Short intro to app</Typography>
        <NewSignUp />
      </SignUpContainer>
    </Grid>
  );
};
