import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Netflix-React-Tailwind/",
  css:{
    postcss:{
      plugins: [tailwindcss()],
    }
  },
  server: {
    open: true,
    port: 5173,
  },
});
