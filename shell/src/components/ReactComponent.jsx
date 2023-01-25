import React from "https://esm.sh/react"
import MicroFrontendA from "http://localhost:7100/bundle.js"
import MicroFrontendB from "http://localhost:7200/bundle.js"

const MyReactComponent = () => (
  <>
    <MicroFrontendA />
    <MicroFrontendB />
  </>
);

export default MyReactComponent;