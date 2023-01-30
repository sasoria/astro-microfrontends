# astro-microfrontends

This demo takes advantage of EcmaScript Modules (ESM) and url-imports to do client-side composition of microfrontends. Express is used for serving assets, but ideally one would have a dedicated CDN hosting them.

## Features

- Client-side composition of microfrontends
- Isolation within Astro Islands
- SSG/SSR supported by Astro

## Usage

- Build each microfrontend with `npm run build`
- Start each microfrontend with `node server.js`
- Start the shell with `npm run dev`

## Shared dependencies

Due to a constraint in Astro, react and react dom cannot be shared across micro-frontends. Each app can share other dependencies through url imports that gets cached in the browser, thus reducing the bundle size considerably (see [esm.sh](https://esm.sh/)).

I recomend using either importmaps in the client or ahead of time importmaps at build time to share those dependencies.
