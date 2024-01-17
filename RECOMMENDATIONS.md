# Recommendations

## Avoid CSS overrides

Use [CSS-modules](https://vitejs.dev/guide/features#css-modules) to avoid CSS overrides.

## Isolate errors

Isolate errors with an [Error boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) in the Shell app.

```js
import Microfrontend from "https://microfrontend.com/bundle.js";

<ErrorBoundary>
  <Microfrontend />
</ErrorBoundary>;
```

## Suspense

Show loading indicators with [Suspense](https://react.dev/reference/react/Suspense).

```js
import React from "react";
import Microfrontend from "https://microfrontend.com/bundle.js";

<React.Suspense fallback="Loading...">
  <Microfrontend />
</React.Suspense>;
```

# Questions and answers

## Different React versions?

It's possible to run different React versions, but keep in mind that this could
increase your total bundle size. Therefore I would not recommend it, however it can be done
with the following:

1. Export an injection function from the microfrontend in Microfrontend.tsx

```js
import App from "./App";

export const injectMicrofrontend = (parentElementId) => {
  const container = document.getElementById(parentElementId);
  const root = createRoot(container);

  root.render(<App />);
};
```

2. Mount the injection point in the Shell app.

```js
import { injectMicrofrontend } from "https://microfrontend.com/bundle.js";

const ReactComponent = () => {
  useEffect(() => {
    injectMicrofrontend(mountpoint);
  }, []);

  return <div id={mountpoint} />;
};
```
