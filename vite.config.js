import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: env.VITE_BASE_URL,
    server: {
      // Puedes agregar aquí configuraciones específicas del servidor si las necesitas
    },
    build: {
      rollupOptions: {
        output: {
          format: 'es',
        },
      },
    },
  };
});