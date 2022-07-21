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

//////// <Connection /> styles

export const CenteredGrid = styled(Grid)(() => ({
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ConnectionButton = styled(Button)(() => ({
  padding: "1rem 0",
  marginTop: "1.75rem",
  fontSize: "1em",
}));

//////// <Home /> styles

export const HomeBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",

  rowGap: "5rem",

  padding: "130px 0 0 2rem",
  color: "white",
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

//////// <CreateList /> styles

export const PageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",

  padding: "130px 0 0 10rem",
  color: "white",

  "@media screen and (max-width: 996px)": {
    padding: "80px 0.5rem 0 0.5rem",
    alignItems: "center",
  },
}));

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
