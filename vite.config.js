import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/admin/lookbook/uploads": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/admin/, "").replace(/^\/lookbook/, ""),
      },
      "/admin/headers/uploads": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/admin/, "").replace(/^\/headers/, ""),
      },
      "/admin/fabrics/uploads": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/admin/, "").replace(/^\/fabrics/, ""),
      },
      "/admin/products/uploads": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/admin/, "").replace(/^\/products/, ""),
      },
      "/uploads/": "http://127.0.0.1:5000",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
