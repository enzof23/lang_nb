import styled from "@emotion/styled";
import { Button, Grid, Input, InputLabel, Typography } from "@mui/material";
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

  padding: ".75rem 3rem",
  fontSize: "16px",

  backgroundColor: "#3bcfd0",

  "&:hover": {
    backgroundColor: "#33afaf",
  },

  "@media screen and (max-width: 900px)": {
    marginTop: "0.75rem",
    marginBottom: "0.5rem",
  },
}));

export const ListDisplayBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",

  gap: "0.75rem",

  marginBottom: "1rem",

  borderRadius: "7px",
}));

// WordsGrid styles

export const WordRowContainer = styled(Box)(() => ({
  display: "flex",

  width: "100%",
  padding: "1.25rem 1.5rem",

  minHeight: "72px",
  borderRadius: "7px",

  backgroundColor: "#2e3756",

  "&:hover": {
    backgroundColor: "#3d4870",
  },

  "@media screen and (max-width: 900px)": {
    flexDirection: "column-reverse",
    padding: "0.75rem 1rem calc(0.75rem + 24px) 1.5rem",
  },
}));

export const WordBoxContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",

  rowGap: "0.75rem",
  columnGap: "1rem",

  width: "100%",

  textTransform: "uppercase",

  "@media screen and (max-width: 900px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const WordContainer = styled(Box)(() => ({
  width: "50%",
  borderRight: "1px solid #0f0c41",

  "@media screen and (max-width: 900px)": {
    width: "100%",
    paddingBottom: "0.75rem",

    borderRight: "none",
    borderBottom: "1px solid #0f0c41",
  },
}));

export const TranslationContainer = styled(Box)(() => ({
  width: "50%",

  "@media screen and (max-width: 900px)": {
    width: "100%",
  },
}));

export const ButtonsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",

  "@media screen and (max-width: 900px)": {
    alignSelf: "flex-end",
  },
}));

// ListPage styles

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

export const ListMenuContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",

  columnGap: "1rem",
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
