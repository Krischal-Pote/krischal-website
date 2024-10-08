import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      external: ["svelte-navigator"],
    },
  },
  optimizeDeps: { exclude: ["svelte-navigator"] },
  server: {
    historyApiFallback: true,
  },
});
