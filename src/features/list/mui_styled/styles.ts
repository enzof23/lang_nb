import styled from "@emotion/styled";
import { Button, Grid, Input, InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Global list styles

export const CreateListInput = styled(Input)(() => ({
  color: "var(--main-white)",
  width: "100%",

  "::before": {
    borderBottomColor: "var(--main-white)",
  },
  "::after": {
    borderBottomColor: "var(--main-yellow)",
  },
  "&:hover": {
    "::before": {
      borderBottom: "2px solid var(--main-white) !important",
    },
  },
}));

// TitleInput styles

export const TitleInputLabel = styled(InputLabel)(() => ({
  color: "var(--light-grey)",
}));

export const TitleButton = styled(Button)(() => ({
  color: "var(--main-white)",
  marginBottom: "0.5rem",

  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--main-yellow)",
  },
}));

// WordInput styles

export const WordInputContainer = styled(Grid)(() => ({
  justifyContent: "space-between",
  alignItems: "center",

  marginBlock: "1.5rem",
  padding: "3rem 1.5rem",
  borderRadius: "7px",

  backgroundColor: "var(--light-blue-1)",

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

  color: "var(--light-grey)",

  paddingTop: "0.5rem",
}));

export const WordInputButton = styled(Button)(() => ({
  backgroundColor: "var(--greenish-blue-1)",
  width: "100%",
  paddingBlock: "0.75rem",
  "&:hover": {
    backgroundColor: "var(--greenish-blue-2)",
  },
}));

// ListDisplay styles

export const LargeGreenButton = styled(Button)(() => ({
  alignSelf: "center",

  marginTop: "0.75rem",
  padding: ".75rem 3rem",
  fontSize: "16px",

  backgroundColor: "var(--greenish-blue-1)",

  "&:hover": {
    backgroundColor: "var(--greenish-blue-2)",
  },

  "@media screen and (max-width: 900px)": {
    marginTop: "0.75rem",
    marginBottom: "0.5rem",
  },
}));

// WordsGrid styles

export const WordRowContainer = styled(Box)(() => ({
  display: "flex",

  width: "100%",
  padding: "1.25rem 1.5rem",
  marginBlock: "0.25rem",

  minHeight: "72px",
  borderRadius: "7px",

  backgroundColor: "var(--light-blue-1)",

  "&:hover": {
    backgroundColor: "var(--light-blue-3)",
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
  borderRight: "1px solid var(--dark-blue)",

  "@media screen and (max-width: 900px)": {
    width: "100%",
    paddingBottom: "0.75rem",

    borderRight: "none",
    borderBottom: "1px solid var(--dark-blue)",
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
  alignItems: "center",

  "@media screen and (max-width: 900px)": {
    alignSelf: "flex-end",
  },
}));

export const WordRowContainerEdit = styled(Box)(() => ({
  display: "flex",

  width: "100%",
  padding: "1.25rem 1.5rem",
  marginBlock: "0.25rem",

  minHeight: "72px",
  borderRadius: "7px",

  backgroundColor: "var(--light-blue-1)",

  "&:hover": {
    backgroundColor: "var(--light-blue-3)",
  },

  "@media screen and (max-width: 900px)": {
    flexDirection: "column",
    rowGap: "1rem",
  },
}));

export const EditDoneButton = styled(Button)(() => ({
  padding: "0",
  height: "32px",
  alignSelf: "center",

  color: "var(--main-white)",
  backgroundColor: "var(--greenish-blue-1)",

  "&:hover": {
    backgroundColor: "var(--greenish-blue-1)",
  },

  "@media screen and (max-width: 900px)": {},
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
  boxShadow: "2px 2px 5px var(--dark-blue)",
  backgroundColor: "var(--dark-blue)",
  color: "var(--main-white)",
}));

export const DeleteModalButton = styled(Button)(() => ({
  color: "var(--main-yellow)",
  borderColor: "var(--main-yellow)",

  "&:hover": {
    borderColor: "var(--main-yellow)",
    backgroundColor: "var(--main-yellow)",
    color: "var(--dark-blue)",
  },
}));
