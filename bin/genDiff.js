#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import makeDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    console.log(makeDiff(filepath1, filepath2, options.format));
  });

program.parse(process.argv);
