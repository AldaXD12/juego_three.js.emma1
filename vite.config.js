// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'juego_three.js.emma1', // Muy importante para que funcione correctamente en producción (por ejemplo en GitHub Pages)
  build: {
    outDir: 'dist',
  },
})
