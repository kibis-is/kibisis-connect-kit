import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, '.example'),
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.example.json'),
    }),
  ],
  resolve: {
    alias: {
      '@example/components': resolve(__dirname, 'example/components'),
      '@example/containers': resolve(__dirname, 'example/containers'),
      '@example/styles': resolve(__dirname, 'example/styles'),
      '@fonts': resolve(__dirname, 'src/fonts'),
      '@models': resolve(__dirname, 'src/models'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@types': resolve(__dirname, 'src/types'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },
  root: 'example',
  server: {
    port: 8080,
  },
});
