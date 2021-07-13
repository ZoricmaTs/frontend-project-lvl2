#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Command } from 'commander/esm.mjs';
import makeDiff from '../src/index.js';

const program = new Command();
const getFilePath = (filename) => path.resolve(process.cwd(), filename);
const readFile = (filename) => fs.readFileSync(getFilePath(filename), 'utf-8');

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(makeDiff(readFile(filepath1), readFile(filepath2)));
  });

program.parse(process.argv);
