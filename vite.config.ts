import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // No GitHub Pages o projeto é servido de um sub-folder (`/portifolio/`),
  // mas na Vercel o site roda na raiz do domínio. Com o base fixo em
  // "/portifolio/", todos os assets (JS, CSS e imagens) 404 na Vercel.
  // A Vercel injeta a env VERCEL durante o build, então usamos base "/"
  // apenas lá e mantemos "/portifolio/" para o deploy de GitHub Pages.
  base: process.env.VERCEL ? "/" : "/portifolio/",
});
