import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    lib: {
      entry: "src/main/main.ts",
      formats: ["es"],
      fileName: () => "main.js",
    },
    rollupOptions: {
      external: ["electron", /^node:.*$/],
    },
  },
});
