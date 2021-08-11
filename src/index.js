import parser from './parsers.js';
import formatter from './formatters/index.js';
import buildAST from './build.js';
import fileReader from './fileReader.js';
import getFormat from './format.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parser(fileReader(filepath1), getFormat(filepath1));
  const data2 = parser(fileReader(filepath2), getFormat(filepath2));
  const result = buildAST(data1, data2);
  const diff = formatter(result, format);

  return diff;
};

export default genDiff;
