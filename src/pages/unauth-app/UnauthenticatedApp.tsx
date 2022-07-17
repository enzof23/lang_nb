import { LogBox } from "../../components";

import { Grid, Hidden, Typography } from "@mui/material";
import { CenteredGrid } from "../../mui_styles/styles";

function UnauthenticatedApp() {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Hidden mdDown={true}>
        <CenteredGrid item md={5} lg={6} sx={{ color: "white" }}>
          <Typography>Left</Typography>
        </CenteredGrid>
      </Hidden>
      <CenteredGrid
        item
        xs={12}
        sm={12}
        md={7}
        lg={6}
        sx={{ backgroundColor: "#f7f7f7", minHeight: "100vh" }}
      >
        <LogBox />
      </CenteredGrid>
    </Grid>
  );
}

export default UnauthenticatedApp;
