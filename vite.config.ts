import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** GitHub project page: https://<user>.github.io/scottish-dream/ */
const repoBase =
  process.env.GITHUB_PAGES === "true" ? "/scottish-dream/" : "/";

export default defineConfig({
  base: repoBase,
  plugins: [react(), tailwindcss()],
});
