import _ from 'lodash';
import parser from './parsers.js';
import path from 'path';

const format = (filepath) => path.extname(filepath);

const calculateDiff = (data1, data2) => {
  const allKeys = [...Object.keys(data1), ...Object.keys(data2)];
  const keys = allKeys.filter((item, index) => allKeys.indexOf(item) === index);
  const keysSorted = _.sortBy(keys);

  const diff = keysSorted.reduce((acc, key) => {
    if (!_.has(data2, key)) {
      return [...acc, ` - ${key}: ${data1[key]}`];
    }
    if (!_.has(data1, key)) {
      return [...acc, ` + ${key}: ${data2[key]}`];
    }
    if (data1[key] !== data2[key]) {
      return [...acc, ` - ${key}: ${data1[key]}`, ` + ${key}: ${data2[key]}`];
    }

    return [...acc, `   ${key}: ${data1[key]}`];
  }, []);

  const result = `{\n${[...diff].join('\n')}\n}`;
  return result;
};

const makeDiff = (filepath1, filepath2, dataFirst, dataSecond) => {
  const FirstFileFormat = format(filepath1);
  const SecondFileFormat = format(filepath2);
  const dataFirstParse = parser(dataFirst, FirstFileFormat);
  const dataSecondParse = parser(dataSecond, SecondFileFormat);

  const result = calculateDiff(dataFirstParse, dataSecondParse);
  return result;
};

export default makeDiff;
