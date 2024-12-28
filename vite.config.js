// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Expose server to local network
    hmr: {
      overlay: false // Optional: disable the HMR overlay if causing issues
    }
  }
});
