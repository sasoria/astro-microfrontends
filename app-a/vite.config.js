import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import { resolve } from "path";

export default ({ command }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/MicroFrontend.jsx"),
      preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
});
