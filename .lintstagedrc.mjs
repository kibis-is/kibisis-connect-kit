export default {
  '*': 'yarn generate:index',
  '**/*.{js,json,ts,tsx}': (filenames) =>
    `prettier --write ${filenames.join(' ')}`,
};
