import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import makeDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
// const getFilePath = (filename) => path.resolve(process.cwd(), filename);

const expected = `{\n
  - follow: false\n
    host: hexlet.io\n
  - proxy: 123.234.53.22\n
  - timeout: 50\n
  + timeout: 20\n
  + verbose: true\n
}`;
test('makeDiff', () => {

  // expect(makeDiff('file1.json', 'file2.json').toBe('{\n' +
  //   '  - follow: false\n' +
  //   '    host: hexlet.io\n' +
  //   '  - proxy: 123.234.53.22\n' +
  //   '  - timeout: 50\n' +
  //   '  + timeout: 20\n' +
  //   '  + verbose: true\n' +
  //   '}\n'))
});
