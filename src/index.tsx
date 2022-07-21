import ReactDOM from "react-dom/client";
import AppProviders from "./context/AppProviders";

import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

import App from "./App";
import "./assets/global.css";
import { BrowserRouter } from "react-router-dom";

let theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <AppProviders>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppProviders>
  </BrowserRouter>
);
