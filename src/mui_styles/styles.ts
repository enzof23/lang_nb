import { styled } from "@mui/material/styles";
import {
  Button,
  Grid,
  Input,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";

export const NavbarContainer = styled(Box)(() => ({
  position: "fixed",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "0.75rem 1rem",
  width: "100%",

  color: "white",
  backgroundColor: "rgba(10, 8, 45, 0.75)",
  backdropFilter: "blur(4px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 1px 3px rgba(255, 255, 255, 0.1)",
}));

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

export const MainBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  rowGap: "5rem",

  padding: "130px 0 0 2rem",
  color: "white",
}));

export const HomeBox = styled(Box)(() => ({
  width: "100%",
}));

export const ListsDisplay = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "2rem",
  rowGap: "1rem",

  "@media screen and (max-width: 996px)": {
    justifyContent: "center",
  },
}));

export const ListBox = styled(Box)(() => ({
  width: "280px",
  height: "140px",

  padding: "1.5rem",
  backgroundColor: "#2e3756",
  borderRadius: "5px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#2e3756cc",
    borderBottom: "5px solid white",
  },
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
