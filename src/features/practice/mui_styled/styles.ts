import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PracticeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  width: "90%",
  maxWidth: "900px",

  marginBottom: "3rem",
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
}));

export const PracticeMenuContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",

  width: "100%",
  padding: "0 48px",
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
}));

export const PracticeDisplayBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
}));

// Flashcard styles

export const FlashcardsContainer = styled(Box)(() => ({
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
}));

export const Flashcard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "90%",
  height: "475px",
  borderRadius: "7px",

  //   backgroundColor: "var(--light-blue-1)",
  border: "1px solid var(--light-grey-faded)",
  cursor: "pointer",
}));

export const Type = styled(Box)(() => ({
  position: "relative",
  top: "-180px",

  textTransform: "uppercase",
  color: "var(--light-grey)",
}));
