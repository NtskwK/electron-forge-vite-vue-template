import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: "127.0.0.1", // 明确使用 IPv4
    proxy: {
      "/api/ocr": {
        target: "http://127.0.0.1:8001", // 使用 IPv4 地址而不是 localhost
        changeOrigin: true, // 是否允许跨域
        rewrite: (path) => path.replace(/^\/api\/ocr/, ""), // 路径重写
      },
    },
  },
  build: {
    modulePreload: {
      polyfill: true,
    },
    target: "esnext",
    outDir: ".vite/renderer",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // 提高警告阈值
  },
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src/"),
    },
  },
});
