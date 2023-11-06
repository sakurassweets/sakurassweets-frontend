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
    origin: ["http://0.0.0.0:8000", "http://0.0.0.0:8080", "https://sakurassweets.asion.tk:8080"],
  },
});
