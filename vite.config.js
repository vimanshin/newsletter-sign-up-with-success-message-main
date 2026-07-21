import path from 'node:path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      // SVG-спрайт содержит внешние symbol, которые нельзя удалять как неиспользуемые.
      exclude: /icons\.svg$/i,
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
});
