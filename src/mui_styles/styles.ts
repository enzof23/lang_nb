import { styled } from "@mui/material/styles";
import {
  Button,
  Grid,
  Input,
  InputLabel,
  Box,
  Typography,
  Divider,
} from "@mui/material";

//////// <Navbar /> styles

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

//////// <PageWrapper /> styles

export const PageWrapperContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "flex-end",
  flexWrap: "wrap",

  paddingTop: "130px",
  paddingRight: "1rem",

  color: "white",

  "@media screen and (max-width: 900px)": {
    paddingTop: "100px",
    paddingLeft: "0",
    paddingRight: "0",
    alignItems: "center",
  },
}));

//////// <CreateList /> styles

export const CreateListInput = styled(Input)(() => ({
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

// NewTitleInput

export const NewTitleLabel = styled(InputLabel)(() => ({
  color: "rgb(138, 138, 138)",
}));

export const NewTitleButton = styled(Button)(() => ({
  color: "white",
  marginBottom: "0.5rem",

  "&:hover": {
    backgroundColor: "transparent",
    color: "#3bcfd0",
  },
}));

// ListDisplay

export const ListDisplayContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "900px",
  marginTop: "2rem",
}));

export const ListDisplayBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",

  gap: "0.5rem",

  padding: "1rem",
  marginBottom: "1rem",

  borderRadius: "7px",
}));

export const WordGridContainer = styled(Grid)(() => ({
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem 2rem",
  minHeight: "72px",
  borderRadius: "7px",

  backgroundColor: "#2e3756",

  "&:hover": {
    backgroundColor: "#3d4870",
  },
}));

export const VerticalDivider = styled(Divider)(() => ({
  height: "30px",
  borderWidth: "1px",
  borderColor: "#0f0c41",
}));

// NewItem

export const NewWordContainer = styled(Grid)(() => ({
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "900px",
  marginBottom: "2rem",
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

//////// <ListPage /> style

export const ListPageHeader = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  maxWidth: "900px",
  padding: "0 1rem",
}));

export const LargeGreenButton = styled(Button)(() => ({
  alignSelf: "center",
  marginBottom: "1rem",
  padding: ".75rem 3rem",
  fontSize: "16px",
  backgroundColor: "#3bcfd0",
  "&:hover": {
    backgroundColor: "#33afaf",
  },
}));
