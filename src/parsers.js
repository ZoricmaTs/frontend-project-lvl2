import yaml from 'js-yaml';
import path from 'path';
import fileReader from './fileReader.js';

const getFormat = (filepath) => path.extname(filepath);

const parser = (filepath) => {
  const format = getFormat(filepath);
  const data = fileReader(filepath);
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.load(data);
    default:
      return new Error(`Wrong input format: '${format}'`);
  }
};

export default parser;
