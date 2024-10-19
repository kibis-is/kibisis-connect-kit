import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
  resolve: {
    alias: {
      '@fonts': resolve(__dirname, 'src/fonts'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
});
