export default {
  '**/*.{cjs,js,json,mjs,ts,tsx}': (filenames) => [
    `sh -c 'pnpm generate:index && git add src/index.ts'`,
    `prettier --write ${filenames.join(' ')}`,
  ],
};
