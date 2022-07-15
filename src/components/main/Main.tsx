import { Box, Container } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainBox } from "../../mui_styles/styles";
import { CreateList, Home } from "./index";

export const Main: React.FC = () => {
  return (
    <MainBox>
      <Home />
      {/* <CreateList /> */}
    </MainBox>
  );
};
