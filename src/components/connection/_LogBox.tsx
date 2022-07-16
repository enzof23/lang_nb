import { useState } from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Tab } from "@mui/material";

import { LogIn, SignUp } from "./index";

const LogBox = () => {
  const [value, setValue] = useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        padding: { xs: "1rem", md: "3rem 2rem" },
        backgroundColor: "white",
      }}
    >
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab label="Sign Up" value="1" sx={{ fontSize: "22px" }} />
            <Tab label="Log In" value="2" sx={{ fontSize: "22px" }} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ width: "100%", maxWidth: "700px" }}>
          <SignUp />
          <Button
            variant="text"
            onClick={() => setValue("2")}
            sx={{ marginTop: "0.5rem" }}
          >
            Already have an account ? Log In !
          </Button>
        </TabPanel>
        <TabPanel value="2" sx={{ width: "100%", maxWidth: "700px" }}>
          <LogIn />
          <Button
            variant="text"
            onClick={() => setValue("1")}
            sx={{ marginTop: "0.5rem" }}
          >
            Not yet signed up ? Create an account !
          </Button>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default LogBox;
