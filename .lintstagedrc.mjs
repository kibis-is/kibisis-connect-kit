export default {
  '*': `sh -c 'yarn generate:index && git add src/index.ts'`,
  '**/*.{js,json,ts,tsx}': (filenames) =>
    `prettier --write ${filenames.join(' ')}`,
};
