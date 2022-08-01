import styled from "@emotion/styled";
import {
  Button,
  Divider,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

// Global list styles

export const CreateListInput = styled(Input)(() => ({
  color: "white",
  width: "100%",

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

// TitleInput styles

export const TitleInputLabel = styled(InputLabel)(() => ({
  color: "#bbbdc9",
}));

export const TitleButton = styled(Button)(() => ({
  color: "white",
  marginBottom: "0.5rem",

  "&:hover": {
    backgroundColor: "transparent",
    color: "#fecd1f",
  },
}));

// WordInput styles

export const WordInputContainer = styled(Grid)(() => ({
  justifyContent: "space-between",
  alignItems: "center",

  marginBlock: "1.5rem",
  padding: "3rem 1.5rem",
  borderRadius: "7px",

  backgroundColor: "#2e3756",

  "@media screen and (max-width: 900px)": {
    padding: "2rem 1.5rem",
    rowGap: "1.5rem",
  },
}));

export const WordInputDesc = styled(Typography)(() => ({
  textTransform: "uppercase",
  fontSize: "0.85rem",
  letterSpacing: "0.025rem",
  fontFamily: "inherit",

  color: "#bbbdc9",

  paddingTop: "0.5rem",
}));

export const WordInputButton = styled(Button)(() => ({
  backgroundColor: "#3bcfd0",
  width: "100%",
  paddingBlock: "0.75rem",
  "&:hover": {
    backgroundColor: "#33afaf",
  },
}));

// ListDisplay styles

export const LargeGreenButton = styled(Button)(() => ({
  alignSelf: "center",

  marginBottom: "1.5rem",
  padding: ".75rem 3rem",
  fontSize: "16px",

  backgroundColor: "#3bcfd0",

  "&:hover": {
    backgroundColor: "#33afaf",
  },
}));

export const ListDisplayBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",

  gap: "0.5rem",

  marginBottom: "1rem",

  borderRadius: "7px",
}));

// WordsGrid styles

export const WordGridContainer = styled(Grid)(() => ({
  alignItems: "center",

  padding: "1rem 1rem 1rem 2rem",
  minHeight: "72px",
  borderRadius: "7px",

  backgroundColor: "#2e3756",

  "&:hover": {
    backgroundColor: "#3d4870",
  },

  "@media screen and (max-width: 900px)": {
    padding: "1rem 0.5rem 1rem 1.5rem",
  },
}));

export const VerticalDivider = styled(Divider)(() => ({
  height: "30px",
  borderWidth: "1px",
  borderColor: "#0f0c41",
}));

// ListPage styles

export const ListPageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",

  rowGap: "1.5rem",

  width: "90%",
  maxWidth: "900px",
}));

export const ListPageHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  paddingLeft: "1rem",
}));

export const PracticeContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",

  width: "90%",
  height: "70px",
  maxWidth: "900px",

  borderRadius: "7px",
  marginBottom: "3rem",
  paddingLeft: "2rem",

  backgroundColor: "#2e3756",
}));

export const LoadingContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "50vh",
  width: "100%",
  maxWidth: "900px",
}));

// DeleteModal

export const DeleteModalContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  zIndex: "1000",
  position: "absolute",
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(4px)",
}));

export const DeleteModalBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  rowGap: "1rem",
  width: "90%",
  maxWidth: "420px",
  padding: "2rem",
  borderRadius: "7px",
  backgroundColor: "#0f0c41",
  color: "white",
}));

export const DeleteModalButton = styled(Button)(() => ({
  color: "#fecd1f",
  borderColor: "#fecd1f",

  "&:hover": {
    borderColor: "#fecd1f",
    backgroundColor: "#fecd1f",
    color: "#0f0c41",
  },
}));
