import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";

export const CenteredGrid = styled(Grid)(() => ({
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const GoogleSignInButton = styled(Button)(() => ({
  padding: "1rem",
  width: "100%",
  border: "1px solid #dadde5",
  fontSize: "0.9em",
  "&:hover": {
    backgroundColor: "#f7f7f7",
  },
}));

export const SignUpButton = styled(Button)(() => ({
  padding: "1rem 0",
  marginTop: "1.75rem",
  fontSize: "1em",
}));
