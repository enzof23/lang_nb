import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PracticeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  width: "90%",
  maxWidth: "900px",

  marginBottom: "3rem",

  "@media screen and (max-width: 900px)": {
    width: "95%",
  },
}));

export const PracticeClosedContainer = styled(Box)(() => ({
  borderRadius: "7px",
  padding: "2rem",

  backgroundColor: "var(--light-blue-1)",

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "var(--light-blue-3)",
  },
}));

export const PracticeOpenedContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "2.5rem",

  borderRadius: "7px",
  padding: "2rem",

  backgroundColor: "var(--dark-blue-2)",
  border: "1px solid rgba(255, 255, 255, 0.1)",

  "@media screen and (max-width: 900px)": {
    padding: "1.5rem 1rem",
    rowGap: "1.5rem",
  },
}));

export const PracticeOpenedHeader = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",

  button: {
    padding: 0,
    color: "var(--main-yellow)",
  },
}));

export const PracticeDisplayContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  alignItems: "center",

  width: "90%",

  rowGap: "1.5rem",

  "@media screen and (max-width: 900px)": {
    flexDirection: "column-reverse",
    width: "100%",
    rowGap: "2rem",
  },
}));

export const PracticeMenuContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  columnGap: "0.25rem",

  width: "100%",
  padding: "0 48px",

  "@media screen and (max-width: 900px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    padding: 0,

    rowGap: "0.75rem",
  },
}));

export const PracticeMenuOption = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  columnGap: "0.5rem",

  height: "50px",
  width: "190px",
  paddingLeft: "1rem",
  borderRadius: "4px",

  fontSize: "20px",
  backgroundColor: "var(--light-blue-1)",
  color: "var(--main-white)",

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "var(--light-blue-2)",
    fontWeight: 500,

    svg: {
      color: "var(--main-yellow)",
    },
  },

  "@media screen and (max-width: 900px)": {
    width: "100%",
    height: "60px",
  },
}));

// Flashcard styles

export const FlashcardsContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "2rem",

  "@media screen and (max-width: 900px)": {
    rowGap: "1rem",
  },
}));

export const FlashcardsBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  svg: {
    fontSize: "48px",
    cursor: "pointer",

    "&:hover": {
      color: "var(--main-yellow)",
    },
  },

  "@media screen and (max-width: 900px)": {
    justifyContent: "center",

    svg: {
      display: "none",
    },
  },
}));

export const Flashcard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "90%",
  height: "475px",
  borderRadius: "7px",

  border: "1px solid var(--light-grey-faded)",
  cursor: "pointer",

  "@media screen and (max-width: 900px)": {
    width: "100%",
    height: "350px",
  },
}));

export const Type = styled(Box)(() => ({
  position: "relative",
  top: "-180px",

  textTransform: "uppercase",
  color: "var(--light-grey)",

  "@media screen and (max-width: 900px)": {
    top: "-125px",
  },
}));

export const FlashcardFooter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "50%",

  svg: {
    display: "none",
  },

  "@media screen and (max-width: 900px)": {
    justifyContent: "space-between",

    svg: {
      display: "inline-block",
    },
  },
}));
