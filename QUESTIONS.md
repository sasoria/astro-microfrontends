# Questions and answers

## Different React versions?

It's possible to run different React versions, but keep in mind that this could
increase your total bundle size. It can be done with the following:

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

## Is there a polyfill for importmaps?

Yes, Guy Bedford has written a polyfill for importmaps. There's an article on it [here](https://guybedford.com/es-module-shims-production-import-maps).

Its also possible to apply the importmap at [build time](https://github.com/sasoria/astro-importmaps-bt), not needing a polyfill at all.