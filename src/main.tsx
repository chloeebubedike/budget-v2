import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import App from "./App";
import theme from "./theme/theme";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
