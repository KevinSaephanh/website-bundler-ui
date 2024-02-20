import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');
const assetsDir = resolve(srcDir, 'assets');
const pagesDir = resolve(srcDir, 'pages');
const outDir = resolve(rootDir, 'dist');
const publicDir = resolve(rootDir, 'public');

export default defineConfig({
  resolve: {
    alias: {
      '@src': srcDir,
      '@assets': assetsDir,
      '@pages': pagesDir,
    },
  },
  plugins: [react()],
  publicDir,
  build: {
    outDir,
    minify: isProd,
    modulePreload: false,
    reportCompressedSize: isProd,
    emptyOutDir: !isDev,
    rollupOptions: {
      input: {
        background: resolve(pagesDir, 'background', 'index.ts'),
        content: resolve(pagesDir, 'content', 'index.tsx'),
        contentStyle: resolve(pagesDir, 'content', 'index.css'),
        popup: resolve(pagesDir, 'popup', 'index.html'),
        options: resolve(pagesDir, 'options', 'index.html'),
      },
      output: {
        entryFileNames: 'src/pages/[name]/index.js',
        chunkFileNames: isDev
          ? 'assets/js/[name].js'
          : 'assets/js/[name].[hash].js',
      },
    },
  },
});
