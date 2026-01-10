import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ MUST be root for custom domain + username.github.io
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});