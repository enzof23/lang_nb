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
  backgroundColor: "#282e3e",
}));

export const ListHeader = styled(ListSubheader)(() => ({
  fontSize: "1em",
  fontWeight: "500",

  backgroundColor: "transparent",
  color: "white",
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

export const ListBox = styled(Grid)(() => ({
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
