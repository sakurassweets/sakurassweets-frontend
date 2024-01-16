import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
export default defineConfig({
  base: '/',
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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "/src/styles/helpers/vars.scss";
        @import "/src/styles/layout/layout.scss";
        @import "/src/styles/helpers/mixinsAll.scss";


      `,
      },
    },
  },
});
