import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages the project will be served from a
  // sub‑folder named after the repository. The trailing slash is
  // important so that assets resolve correctly (e.g. `/portifolio/`).
  base: "/portifolio/",
});
