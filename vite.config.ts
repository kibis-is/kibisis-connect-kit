import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// versions
import { version } from './package.json';

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
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/global.scss";`, // include the global scss file in the library build
        api: 'modern-compiler',
      },
    },
  },
  define: {
    __VERSION__: JSON.stringify(version),
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // resolutions needed for sass, typescript resolutions handled by the vite-tsconfig-paths plugin
      '@fonts': resolve(__dirname, 'src/fonts'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
});
