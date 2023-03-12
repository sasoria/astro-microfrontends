import React, { useEffect } from "react";
import MicorFrontendA from "http://localhost:7100/bundle.js";
import MicorFrontendB from "http://localhost:7200/bundle.js";

const ReactComponent = () => (
  <>
    <MicorFrontendA />
    <MicorFrontendB />
  </>
);

export default ReactComponent;