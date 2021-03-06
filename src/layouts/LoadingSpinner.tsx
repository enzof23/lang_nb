import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { HalfCircleSpinner } from "react-epic-spinners";
import StyleIcon from "@mui/icons-material/Style";

export const LoadingSpinner = () => {
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

        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "0.5rem",
        }}
      >
        <StyleIcon sx={{ fontSize: "2.5rem" }} />
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Words2Go
        </Typography>
      </Box>
      <HalfCircleSpinner color="#fecd1f" />
    </div>
  );
};
