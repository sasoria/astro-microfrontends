import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import { resolve } from "path";

const imports = {
  react: "https://esm.sh/react",
  "react-dom": "https://esm.sh/react-dom",
};

export default ({ command }) => ({
  plugins: [
    react(),
    {
      ...rollupImportMapPlugin({ imports }),
      enforce: "pre",
      apply: "build",
    },
  ],
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
