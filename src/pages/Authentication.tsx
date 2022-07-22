import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SignIn, SignUp } from "../features/authentication/components";
import { useAuthContext } from "../features/authentication/context/AuthContext";
import {
  DemoTypo,
  SignInContainer,
  SignUpContainer,
} from "../features/authentication/mui_styled/styles";

const Authentication = () => {
  const { signInEmail } = useAuthContext();
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <SignInContainer item xs={12} md={5.5}>
        <Typography variant="h3">Logo</Typography>
        <SignIn />
      </SignInContainer>
      <SignUpContainer item xs={12} md={6.5}>
        <Box sx={{ minWidth: "450px", maxWidth: "650px" }}>
          <Typography variant="h4">
            Organize and practice your vocabulary all in one place.
          </Typography>
          <Typography variant="body1">
            Get started by signing up or have a look at the demo to play around
            with the application.
          </Typography>
        </Box>
        <SignUp />
        <DemoTypo
          variant="h6"
          onClick={() =>
            signInEmail({ email: "account@demo.com", password: "1234567890" })
          }
        >
          Try with a demo account !
        </DemoTypo>
      </SignUpContainer>
    </Grid>
  );
};

export default Authentication;
