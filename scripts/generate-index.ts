import chalk from 'chalk';
import { readdirSync, type Stats, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Script that creates the index.ts file in the `src/` directory.
 */
function main(): void {
  const srcDir = join(process.cwd(), 'src');
  const directories = ['models', 'utils'];
  const exports: string[] = [
    '// exports will be generated automatically using: pnpm generate:index',
    `export * from './types';`,
  ];
  let indexFilePath: string;
  let path: string;
  let stat: Stats;

  for (const directory of directories) {
    path = join(srcDir, directory);

    for (const item of readdirSync(path)) {
      stat = statSync(join(path, item));

      // if it is not a directory, move on
      if (!stat.isDirectory()) {
        continue;
      }

      exports.push(`export { default as ${item} } from './${directory}/${item}';`);
    }
  }

  indexFilePath = join(srcDir, 'index.ts');

  // write to index file
  writeFileSync(indexFilePath, `${exports.join('\n')}\n`, 'utf-8');

  console.log(`${chalk.yellow('[INFO]')}: generated indexes for components to "./src/index.ts"`);
}

main();
