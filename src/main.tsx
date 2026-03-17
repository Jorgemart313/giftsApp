import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GisfsApp } from "./GisfsApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GisfsApp />
  </StrictMode>,
);
