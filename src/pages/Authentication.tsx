import { Grid, Typography } from "@mui/material";
import { SignIn, SignUp } from "../features/authentication/components";
import {
  SignInContainer,
  SignUpContainer,
} from "../features/authentication/mui_styled/styles";

const Authentication = () => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <SignInContainer item xs={12} md={5.5}>
        <Typography variant="h3">Logo</Typography>
        <SignIn />
      </SignInContainer>
      <SignUpContainer item xs={12} md={6.5}>
        <Typography variant="h4">Short intro to app</Typography>
        <SignUp />
      </SignUpContainer>
    </Grid>
  );
};

export default Authentication;
