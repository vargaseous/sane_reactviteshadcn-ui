/*******************************************************************************
 * 
  Sanity___________________________________________________github.com/vargaseous

  main.tsx
  The key entry point for the React website.

*******************************************************************************/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

{
  /* ThemeProvider and Mode Toggle */
}
import { ThemeProvider } from "./components/theme-provider";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
