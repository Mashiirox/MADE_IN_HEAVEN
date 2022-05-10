import { defineConfig } from 'vite';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import svgoConfig from './svgo.config';

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
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets')],
      svgoOptions: svgoConfig,
      symbolId: '[name]',
      inject: 'body-last',
      customDomId: '__svg__icons__dom__',
    }),
  ],
});
