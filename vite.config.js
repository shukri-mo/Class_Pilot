// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://classpilot-chi.vercel.app',
        changeOrigin: true,
        secure: false,
        // strip /api from the front, so /api/auth/register → /auth/register
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
