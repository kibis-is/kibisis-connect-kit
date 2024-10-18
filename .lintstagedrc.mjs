export default {
  '**/*.{js,json,ts,tsx}': (filenames) =>
    `prettier --write ${filenames.join(' ')}`,
};
