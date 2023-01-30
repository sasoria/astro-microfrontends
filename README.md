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
