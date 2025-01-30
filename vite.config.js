import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Desativa os mapas de código no build
  },
  server: {
    sourcemap: false, // Desativa no ambiente de desenvolvimento
  },
});
