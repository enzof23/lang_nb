import styled from "@emotion/styled";
import { Grid, ListSubheader } from "@mui/material";
import { Box } from "@mui/system";

///////// Header

export const HeaderContainer = styled(Box)(() => ({
  width: "90%",
  maxWidth: "900px",

  padding: "1.5rem 3rem",
  marginBottom: "4rem",

  borderRadius: "15px",
  backgroundColor: "var(--dark-grey)",

  "@media screen and (max-width: 900px)": {
    padding: "1.5rem 2rem",
  },
}));

export const ListHeader = styled(ListSubheader)(() => ({
  fontSize: "1em",
  fontWeight: "500",
  lineHeight: "20px",

  marginBlock: "1rem",
  padding: "0",

  backgroundColor: "transparent",
  color: "var(--main-white)",
}));

//////// List Display

export const ListsDisplayContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "2rem",
  rowGap: "1rem",

  width: "90%",
  maxWidth: "1300px",

  "@media screen and (max-width: 900px)": {
    justifyContent: "center",
  },
}));

export const ListsGrid = styled(Grid)(() => ({
  columnGap: "2rem",
  rowGap: "2rem",

  "@media screen and (max-width: 900px)": {
    justifyContent: "center",
  },
}));

export const ListBox = styled(Grid)(() => ({
  width: "280px",
  height: "140px",

  padding: "1.5rem",
  backgroundColor: "var(--light-blue-1)",
  borderRadius: "5px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "var(--light-blue-2)",
    borderBottom: "5px solid var(--main-yellow)",
  },
}));
