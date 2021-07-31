import _ from 'lodash';
import parser from './parsers.js';
import formatter from './formatters/index.js';

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
        key,
        children: buildAST(value1, value2),
      };
    }
    if (!_.has(data2, key)) {
      return {
        type: 'removed',
        key,
        oldValue: value1,
      };
    }
    if (!_.has(data1, key)) {
      return {
        type: 'added',
        key,
        newValue: value2,
      };
    }
    if (value1 !== value2) {
      return {
        type: 'changed',
        key,
        oldValue: value1,
        newValue: value2,
      };
    }
    return {
      type: 'unchanged',
      key,
      oldValue: value1,
    };
  });

  return treeAST;
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parser(filepath1);
  const data2 = parser(filepath2);
  const result = buildAST(data1, data2);
  const diff = formatter(result, format);

  return diff;
};

export default genDiff;
