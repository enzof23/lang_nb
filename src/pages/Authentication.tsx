import { Grid, Icon, Typography } from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "0.5rem",
          }}
        >
          <StyleIcon sx={{ fontSize: "2.5rem" }} />

          <Typography
            variant="h3"
            sx={{ fontWeight: "700", letterSpacing: "0.1rem" }}
          >
            Words2Go
          </Typography>
        </Box>

        <DemoTypo
          variant="h6"
          onClick={() =>
            signInEmail({ email: "account@demo.com", password: "1234567890" })
          }
        >
          Try with a demo account !
        </DemoTypo>

        <SignIn />
      </SignInContainer>

      <SignUpContainer item xs={12} md={6.5}>
        <Box sx={{ maxWidth: "650px" }}>
          <Typography variant="h4">
            Organize and practice your vocabulary all in one place.
          </Typography>

          <Typography variant="body1">
            Get started by signing up or have a look at the demo to play around
            with the application.
          </Typography>
        </Box>

        <SignUp />
      </SignUpContainer>
    </Grid>
  );
};

export default Authentication;
