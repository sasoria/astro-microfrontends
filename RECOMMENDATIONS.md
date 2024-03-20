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

## Sharing state

It's possible to share state with something like [nanoevents](https://www.npmjs.com/package/nanoevents), [postMessage](https://github.com/ayoayco/shoe-shop/blob/main/utils/orchestrator.mjs)() or [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage). The nanoevents instance has to be the same across applications, so import it from [esm.sh](https://esm.sh/).

Keep in mind that sharing state is something that should be avoided as much as possible, because it introduces tighter coupling between applications.
