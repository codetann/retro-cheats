import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./samples/node-api";
import "styles/index.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/theme";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme as any}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

postMessage({ payload: "removeLoading" }, "*");
