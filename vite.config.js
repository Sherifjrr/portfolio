import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
  include: ["**/*.js", "**/*.jsx"],
});
