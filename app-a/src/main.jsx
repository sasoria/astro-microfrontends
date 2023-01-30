import React from "react";
import { createRoot } from "react-dom/client";
import MicroFrontend from "./MicroFrontend";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <main>
      <MicroFrontend />
    </main>
  </React.StrictMode>
);
