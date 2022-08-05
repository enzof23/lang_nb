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

  "@media screen and (max-width: 900px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

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

export const PracticeComponentContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  padding: "1rem 2rem",

  border: "1px solid var(--light-grey-faded)",
  borderRadius: "7px",

  "@media screen and (max-width: 900px)": {
    padding: "1rem",
  },
}));

// Flashcard styles

export const FlashcardsBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "475px",

  svg: {
    fontSize: "48px",
    cursor: "pointer",

    "&:hover": {
      color: "var(--main-yellow)",
    },
  },

  "@media screen and (max-width: 900px)": {
    justifyContent: "center",
    height: "425px",
    svg: {
      display: "none",
    },
  },
}));

export const Flashcard = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",
  wordBreak: "break-word",
  textAlign: "center",

  height: "375px",
  minWidth: "250px",
  maxWidth: "250px",
  padding: "0 1rem",
  borderRadius: "10px",

  cursor: "pointer",

  background:
    "linear-gradient(210deg, rgba(254,205,31,1) 0%, rgba(142,139,60,1) 100%)",

  boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",

  "@media screen and (max-width: 900px)": {
    width: "100%",
    minWidth: "200px",
    height: "350px",
  },
}));

export const FlashcardFooter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  marginBottom: "1rem",

  svg: {
    visibility: "hidden",
  },

  "@media screen and (max-width: 900px)": {
    justifyContent: "space-between",
    width: "50%",

    svg: {
      visibility: "visible",
    },
  },
}));

// Write

export const WriteContainer = styled(Box)(() => ({
  width: "95%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  rowGap: "2rem",

  padding: "2rem 0",

  "@media screen and (max-width: 900px)": {
    rowGap: "1rem",
  },
}));
