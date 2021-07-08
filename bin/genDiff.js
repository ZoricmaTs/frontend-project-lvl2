#!/usr/bin/env node

import genDiff from '@hexlet/code';
import { Command } from 'commander';

const diff = genDiff(filepath1, filepath2);
console.log(diff);

const program = new Command();
