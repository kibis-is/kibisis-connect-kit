import eslint from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import typescriptConfig from 'typescript-eslint';

/**
 * @type {import('eslint').Linter.Config[]}
 **/
export default [
  eslint.configs.recommended,
  ...typescriptConfig.configs.recommended,
  prettierConfig,
  // custom config
  {
    files: ['**/*.{cjs,js,mjs,ts,tsx}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
  },
  {
    ignores: ['.example/', 'dist/', 'node_modules/'],
  },
  {
    rules: {
      'no-async-promise-executor': 'warn',
      'prefer-const': 'off',
    },
  },
];
