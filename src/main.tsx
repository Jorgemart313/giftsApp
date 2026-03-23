import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GisfsApp } from "./GisfsApp";
//import { MyCounterApp } from "./counter/Components/MyCounterApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GisfsApp />
    {/* <MyCounterApp /> */}
  </StrictMode>,
);
