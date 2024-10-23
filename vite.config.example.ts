import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, '.example'),
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.example.json'),
    }),
    react(),
    tsconfigPaths({
      configNames: ['tsconfig.example.json'],
    }),
  ],
  resolve: {
    alias: {
      // resolutions needed for sass, typescript resolutions handled by the vite-tsconfig-paths plugin
      '@example/styles': resolve(__dirname, 'example/styles'),
      '@fonts': resolve(__dirname, 'src/fonts'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
  root: 'example',
  server: {
    port: 8080,
  },
});
