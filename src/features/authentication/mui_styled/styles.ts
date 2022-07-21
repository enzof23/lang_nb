import { Button, Grid, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const SignInContainer = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  rowGap: "5rem",

  minHeight: "100vh",

  color: "white",
}));

export const SignInFormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "1.5rem",

  width: "90%",
  maxWidth: "475px",
}));

export const SignInForm = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "1.25rem",
}));

export const SignInInput = styled(TextField)(() => ({
  backgroundColor: "white",
  borderRadius: "3px",

  ".MuiInputLabel-root": {
    color: "#0a082d",
  },

  ".MuiFilledInput-root": {
    "::after": {
      borderBottomColor: "#fecd1f",
      borderBottomWidth: "4px",
    },
  },
}));

export const SignInButton = styled(Button)(() => ({
  padding: "0.75rem",

  borderColor: "white",
  borderWidth: "1px",
  color: "white",
  fontSize: "1em",

  "&:hover": {
    borderColor: "#fecd1f",
    backgroundColor: "#fecd1f",
    color: "black",
  },
}));

export const ForgotPassword = styled(Button)(() => ({
  alignSelf: "flex-start",
  marginTop: "-1rem",

  color: "white",

  "&:hover": {
    color: "#fecd1f",
  },
}));

/////////////////////////////////

export const SignUpContainer = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  rowGap: "4rem",

  padding: "1rem",

  minHeight: "100vh",

  color: "#0a082d",
  backgroundColor: "white",
}));

export const SignUpInput = styled(TextField)(() => ({
  width: "100%",

  "& label.Mui-focused": {
    color: "#0a082d",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0a082d",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fecd1f",
    },
  },
}));

export const SignUpButton = styled(Button)(() => ({
  alignSelf: "center",
  padding: "0.75rem",
  marginTop: "1.5rem",

  width: "50%",
  maxWidth: "250px",

  borderColor: "#0a082d",
  borderWidth: "1px",

  color: "#0a082d",
  fontSize: "1em",

  "&:hover": {
    borderColor: "#fecd1f",
    backgroundColor: "#fecd1f",
    color: "black",
  },
}));

////////////////////////////

export const GoogleSignInButton = styled(Button)(() => ({
  padding: "1.25rem",

  width: "100%",
  maxWidth: "300px",

  border: "1px solid #dadde5",
  color: "white",
  fontSize: "0.9em",

  "&:hover": {
    backgroundColor: "#fecd1f",
    borderColor: "#fecd1f",
    color: "black",
  },
}));
