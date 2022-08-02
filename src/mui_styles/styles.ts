import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

//////// <Navbar /> styles

export const NavbarContainer = styled(Box)(() => ({
  position: "fixed",

  zIndex: "100",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "0.75rem 1rem",
  width: "100%",

  color: "var(--main-white)",
  backgroundColor: "rgba(10, 8, 45, 0.75)",
  backdropFilter: "blur(4px)",

  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 1px 3px rgba(255, 255, 255, 0.1)",
}));

//////// <PageWrapper /> styles

export const PageWrapperContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",

  padding: "130px 1rem 1rem 0",

  color: "var(--main-white)",

  "@media screen and (max-width: 900px)": {
    padding: "100px 0 1rem 0",
    alignItems: "center",
    justifyContent: "center",
  },
}));
