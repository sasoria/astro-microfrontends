import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

export const injectMicroFrontendB = (parentElementId) => {
  const container = document.getElementById(parentElementId);
  const root = createRoot(container);
  root.render(<App />);
};

const MicroFrontend = () => <App />;

export default MicroFrontend;
