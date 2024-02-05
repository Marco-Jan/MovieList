import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/movies": {
          target: env.Vite_JSON_SERVER_URL,
          changeOrigin: true,
        },
      },
    },
  };
  })
