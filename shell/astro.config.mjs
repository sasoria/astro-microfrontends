import { defineConfig } from 'astro/config';
import importmap from "./importmap.json";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    {
      name: 'importmap',
      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if(target === 'client') {
            vite.plugins.push({
              ...rollupImportMapPlugin(importmap),
              enforce: "pre",
              apply: "build",
            });
          }
       }
      }
    }
  ]
});