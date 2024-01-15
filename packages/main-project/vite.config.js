import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    vue(),
    topLevelAwait({
      promiseExportName: "__tlm",
      promiseImportName: i => `__tlm_${i}`
    }),
    federation({
      name: "main",
      remotes: {
        sub: {
          external: "http://localhost:4173/remoteEntry.js",
          format: 'esm',
          from: 'vite'
        }
      },
      shared: ["vue"],
    }),
  ],
  define: {
    "process.env": process.env,
  },
});
