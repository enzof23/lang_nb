import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { HalfCircleSpinner } from "react-epic-spinners";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const Error = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "3rem",

        color: "#c42f2f",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "0.5rem",
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: "2.5rem", color: "#c42f2f" }} />
        <Typography variant="h3">An error has occured</Typography>
      </Box>
      <HalfCircleSpinner color="#fecd1f" />
    </div>
  );
};
