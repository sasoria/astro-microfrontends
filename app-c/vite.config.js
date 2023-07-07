import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";
import cssInject from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [solidPlugin(), cssInject()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    rollupOptions: {
      input: resolve(__dirname, "src/App.jsx"),
      preserveEntrySignatures: "exports-only",
      external: ["solid-js"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
});
