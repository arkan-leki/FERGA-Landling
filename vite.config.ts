import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig((): UserConfig => {
  return {
    // 'mpa' (not the default 'spa'): the site is a single page, and the SPA
    // html-fallback would otherwise swallow the static /get.html quick-download page
    // that the QR code points at, serving the landing page instead of it.
    appType: 'mpa',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
