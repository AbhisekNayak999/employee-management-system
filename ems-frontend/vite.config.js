import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // The following command is used to change the port number.
  server: {
    port: 3000,
  },
});
