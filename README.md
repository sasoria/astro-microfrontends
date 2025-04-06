# astro-microfrontends

This demo takes advantage of EcmaScript Modules (ESM) and url-imports to do client-side composition of microfrontends. Express is used for serving assets, but ideally one would have a dedicated CDN hosting them.

## Features

- ✨ Client-side composition of microfrontends
- 📦 Multiframeworks with Astro Islands
- 🚀 SSG/SSR supported by Astro

## Usage

### Micro frontends

- Build each micro frontend with `npm run build`
- Start each micro frontend with `npm run preview`

For production you would start the node server in the `server` folder, after building.

### Shell

- Build the shell with `npm run build`
- Start the shell with `npm run preview`

## Shared dependencies

Dependencies such as react and react-dom are shared across applications. They are fetched from [esm.sh](https://esm.sh/) and gets cached in the browser, reducing the bundle size. Each app can share other dependencies as well through url imports.

## Recommendations

I've written a few recommendations and best practices. You can read them [here](/RECOMMENDATIONS.md). I also have a section for [questions and answers](/QUESTIONS.md).

## Resources

- An [article](https://medium.com/@sergio.a.soria/setting-up-micro-frontends-with-astro-and-ecma-script-modules-137340d2c520) on the implementation.
- A [shoe shop](https://github.com/ayoayco/shoe-shop) example by Ayo Ayco.
- A [presentation](https://www.youtube.com/watch?v=UQ_C79OyXI4) at require(lx) by Afonso Ramos.
- An article on [microfrontends with Astro, Solid & React](https://medium.com/@raymondboswel/microfrontends-with-astro-solid-react-14b89a8e861a) by Raymond Boswel.

