import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint({ cache: false }),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: [
        '/src/assets/favicon.svg',
        '/src/assets/apple-touch-icon.png',
        '/src/assets/logo.svg',
      ],
      manifest: {
        name: 'Parcel Mate',
        short_name: 'ParcelMate',
        description: 'Your ParcelMate',
        theme_color: '#ffffff',
        icons: [
          { src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
