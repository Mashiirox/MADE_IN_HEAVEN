import { defineConfig } from 'vite';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
// import { svgBuilder } from './scripts/svg-to-sprite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

function _resolve(dir: string) {
  return resolve(__dirname, dir);
}

export default defineConfig({
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@a': _resolve('src/assets'),
      '@c': _resolve('src/components'),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  plugins: [
    react(),
    // svgBuilder('./src/assets/'),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',

      /**
       * 自定义插入位置
       * @default: body-last
       */
      inject: 'body-last',

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__',
    }),
  ],
});
