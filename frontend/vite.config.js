import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    react(),
    {
      ...tailwindcss("./tailwind.config.js"),
      postcss: {
        plugins: [autoprefixer],
      },
    },
  ],
});
