# astro-microfrontends

This demo takes advantage of EcmaScript Modules (ESM) and url-imports to do client-side composition of microfrontends. Express is used for serving assets, but ideally one would have a dedicated CDN hosting them.

## Features

- ✨ Client-side composition of microfrontends
- 📦 Multiframeworks with Astro Islands
- 🚀 SSG/SSR supported by Astro

## Usage

- Build each microfrontend with `npm run build`
- Start each microfrontend with `node server.js`
- Start the shell with `npm run dev`

## Composition

The shell app composes the microfrontends with url imports. This means that there is no need for frameworks or plugins in order to import microfrontends, just a single line of javascript:

```javascript
import Microfrontend from "https://localhost:7100/bundle.js";
```

`Microfrontend` can now be used as a regular react component:

```javascript
const ReactComponent = () => <Microfrontend />;
```

## Shared dependencies

Dependencies such as react and react-dom are shared across applications. They are fetched from [esm.sh](https://esm.sh/), reducing the bundle size. Each app can share other dependencies aswell through url imports.

I recomend using either importmaps in the client or ahead of time importmaps at build time to share dependencies, this demo uses the latter.
