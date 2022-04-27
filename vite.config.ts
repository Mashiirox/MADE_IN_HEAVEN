import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'; // 设置了 allowSyntheticDefaultImports 仍有报错提示，故如此导入 =_+

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@a/*': _resolve('src/assets'),
      '@c/*': _resolve('src/components'),
    },
  },
  plugins: [react()],
});
