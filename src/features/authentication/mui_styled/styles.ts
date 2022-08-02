import { Button, Grid, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const SignInContainer = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  rowGap: "4rem",

  minHeight: "100vh",

  color: "var(--main-white)",
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
  backgroundColor: "var(--main-white)",
  borderRadius: "3px",

  ".MuiInputLabel-root": {
    color: "var(--dark-blue)",
  },

  ".MuiFilledInput-root": {
    "::after": {
      borderBottomColor: "var(--main-yellow)",
      borderBottomWidth: "4px",
    },
  },
}));

export const SignInButton = styled(Button)(() => ({
  padding: "0.75rem",

  borderColor: "var(--main-white)",
  borderWidth: "1px",
  color: "var(--main-white)",
  fontSize: "1em",

  "&:hover": {
    borderColor: "var(--main-yellow)",
    backgroundColor: "var(--main-yellow)",
    color: "var(--dark-blue)",
  },
}));

export const ForgotPassword = styled(Button)(() => ({
  alignSelf: "flex-start",
  marginTop: "-1rem",

  color: "var(--main-white)",

  "&:hover": {
    color: "var(--main-yellow)",
  },
}));

/////////////////////////////////

export const SignUpContainer = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  rowGap: "3.5rem",

  padding: "1rem",

  minHeight: "100vh",
  width: "90%",

  color: "var(--dark-blue)",
  backgroundColor: "var(--main-white)",
}));

export const SignUpInput = styled(TextField)(() => ({
  width: "100%",

  "& label.Mui-focused": {
    color: "var(--dark-blue)",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--dark-blue)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--main-yellow)",
    },
  },
}));

export const SignUpButton = styled(Button)(() => ({
  alignSelf: "center",
  padding: "0.75rem",
  marginTop: "1.5rem",

  width: "50%",
  maxWidth: "250px",

  borderColor: "var(--dark-blue)",
  borderWidth: "1px",

  color: "var(--dark-blue)",
  fontSize: "1em",

  "&:hover": {
    borderColor: "var(--dark-blue)",
    backgroundColor: "var(--main-yellow)",
    color: "var(--dark-blue)",
  },
}));

export const DemoTypo = styled(Typography)(() => ({
  color: "var(--main-white)",
  cursor: "pointer",

  "&:hover": {
    color: "var(--main-yellow)",
  },
}));

////////////////////////////

export const GoogleSignInButton = styled(Button)(() => ({
  padding: "1.25rem",

  width: "100%",
  maxWidth: "300px",

  border: "1px solid var(--main-white)",
  color: "var(--main-white)",
  fontSize: "0.9em",

  "&:hover": {
    backgroundColor: "var(--main-yellow)",
    borderColor: "var(--main-yellow)",
    color: "var(--dark-blue)",
  },
}));
