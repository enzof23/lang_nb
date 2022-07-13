import { styled } from "@mui/material/styles";
import {
  Button,
  Grid,
  Input,
  InputLabel,
  Box,
  Container,
  Typography,
} from "@mui/material";

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

export const NewTitleLabel = styled(InputLabel)(() => ({
  color: "rgb(138, 138, 138)",
}));

export const NewItemInput = styled(Input)(() => ({
  "::before": {
    borderBottomColor: "white",
  },
  "::after": {
    borderBottomColor: "#fecd1f",
  },
  "&:hover": {
    "::before": {
      borderBottom: "2px solid white !important",
    },
  },
}));

export const NewTitleButton = styled(Button)(() => ({
  color: "white",
  marginBottom: "0.5rem",

  "&:hover": {
    backgroundColor: "transparent",
    color: "#3bcfd0",
  },
}));

export const NewItemContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "2rem",

  width: "100%",
}));

export const NewItemBox = styled(Box)(() => ({
  display: "flex",
  gap: "2.5rem",

  width: "90%",
  padding: "3rem 1.5rem",
  borderRadius: "7px",

  backgroundColor: "#2e3756",
}));

export const NewItemDesc = styled(Typography)(() => ({
  textTransform: "uppercase",
  fontSize: "0.85rem",
  color: "#bbbdc9",
  letterSpacing: "0.025rem",
  fontFamily: "inherit",

  paddingTop: "0.5rem",
}));
