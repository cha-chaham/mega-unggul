import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/routes";
import "@/styles/index.css";
import { ThemeProvider } from "./utils/contexts/theme";
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpeedInsights>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SpeedInsights>
  </React.StrictMode>
);
