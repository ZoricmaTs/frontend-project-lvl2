import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import formatter from './formatters/index.js';

const getFormatFile = (filepath) => path.extname(filepath);
const getDataFile = (filepath) => {
  const absFilePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absFilePath, 'utf-8');
};

const buildAST = (data1, data2) => {
  const allKeys = [...Object.keys(data1), ...Object.keys(data2)];
  const keys = allKeys.filter((item, index) => allKeys.indexOf(item) === index);
  const keysSorted = _.sortBy(keys);
  const treeAST = keysSorted.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        type: 'nested',
        name: key,
        children: buildAST(value1, value2),
      };
    }
    if (!_.has(data2, key)) {
      return {
        type: 'removed',
        name: key,
        value: value1,
      };
    }
    if (!_.has(data1, key)) {
      return {
        type: 'added',
        name: key,
        value: value2,
      };
    }
    if (value1 !== value2) {
      return {
        type: 'changed',
        name: key,
        oldValue: value1,
        newValue: value2,
      };
    }
    return {
      type: 'unchanged',
      name: key,
      value: value1,
    };
  });

  return treeAST;
};

const makeDiff = (filepath1, filepath2, format) => {
  const dataFirst = getDataFile(filepath1);
  const dataSecond = getDataFile(filepath2);
  const firstFileFormat = getFormatFile(filepath1);
  const secondFileFormat = getFormatFile(filepath2);
  const dataFirstParse = parser(dataFirst, firstFileFormat);
  const dataSecondParse = parser(dataSecond, secondFileFormat);

  const result = buildAST(dataFirstParse, dataSecondParse);
  const diff = formatter(result, format);

  return diff;
};

export default makeDiff;
