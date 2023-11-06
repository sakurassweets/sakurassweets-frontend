import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8000,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
  },
});
