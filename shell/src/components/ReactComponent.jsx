import React from "react";
import MicroFrontendA from "http://localhost:7100/bundle.js";
import MicroFrontendB from "http://localhost:7200/bundle.js";

const ReactComponent = () => (
  <>
    <MicroFrontendA />
    <MicroFrontendB />
  </>
);

export default ReactComponent;
