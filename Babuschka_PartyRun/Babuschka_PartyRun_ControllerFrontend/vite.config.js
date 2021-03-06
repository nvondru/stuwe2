import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: false,
  },
  define: {
    __VUE_PROD_DEVTOOLS__: true,
  },
  // this sh*t literally drove me insane to figure out!!!
  base: "./",
});
