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

## Shared dependencies

Both react and react-dom are shared across microfrontends and only downloaded once on the first page load. Each app can share other dependencies either by applying import maps at build time or run time, converting bare imports to url-imports that gets cached in the browser.

These are loaded from [esm.sh](https://esm.sh/) and this reduces the bundle size considerably. Due to a constraint in Astro, react and react dom cannot be shared with the shell app.
