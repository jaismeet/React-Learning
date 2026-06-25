import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ["**/.qa_screens/**", "**/.reference_frames/**"]
    }
  }
});
