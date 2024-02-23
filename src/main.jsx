import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/routes";
import "./styles/index.css";
import { ThemeProvider } from "./utils/contexts/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
