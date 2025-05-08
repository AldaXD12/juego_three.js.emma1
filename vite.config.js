// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/juego_three.js.emma1/',
  build: {
    rollupOptions: {
      output: {
        format: 'es', // Asegúrate de que el formato sea 'es' para ESM
      },
    },
  },
});