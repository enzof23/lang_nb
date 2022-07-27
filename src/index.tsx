import ReactDOM from "react-dom/client";
import AppProviders from "./context/AppProviders";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import App from "./App";
import "./assets/global.css";

import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Error, LoadingSpinner } from "./layouts";
import { ErrorBoundary } from "react-error-boundary";

let theme = createTheme({
  typography: {
    fontFamily: `"Roboto", "DotGothic16"`,
  },
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <AppProviders>
            <App />
          </AppProviders>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </ThemeProvider>
);
