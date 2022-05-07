import { defineConfig } from 'vite';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { svgBuilder } from './scripts/svg-to-sprite';

function _resolve(dir: string) {
  return resolve(__dirname, dir);
}

export default defineConfig({
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@a': _resolve('src/assets'),
      '@c': _resolve('src/components'),
    },
  },
  plugins: [react(), svgBuilder('./src/assets/')],
});
