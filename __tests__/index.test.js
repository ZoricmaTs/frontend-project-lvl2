import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import makeDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

const cases = [
  { filePath1: 'file1.json', filePath2: 'file2.json' },
  { filePath1: 'file1.yml', filePath2: 'file2.yml' },
];

const expectedData = { nested: '', plain: '' };

beforeAll(() => {
  const plainData = readFixtureFile('plain.txt');
  expectedData.plain = plainData;
});

describe.each(cases)('makeDiff', ({ filePath1, filePath2 }) => {
  test('plain object', () => {
    const expected = expectedData.plain;
    const data1 = readFixtureFile(filePath1);
    const data2 = readFixtureFile(filePath2);
    const actual = makeDiff(filePath1, filePath2, data1, data2);
    expect(actual).toEqual(expected);
  });
});
