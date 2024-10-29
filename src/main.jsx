import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
//import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>
);
