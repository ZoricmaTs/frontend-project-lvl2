import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import makeDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

const cases = [
  ['file1.json', 'file2.json'],
];

const expectedData = { nested: '', plain: '' };

beforeAll(() => {
  const plainData = readFile('plain.txt');
  expectedData.plain = plainData;
});

describe.each(cases)('makeDiff', (filePath1, filePath2) => {
  test('plain object', () => {
    const expected = expectedData.plain;
    const dataFirst = readFile(filePath1);
    const dataSecond = readFile(filePath2);
    const actual = makeDiff(dataFirst, dataSecond);
    expect(actual).toEqual(expected);
  });
});
