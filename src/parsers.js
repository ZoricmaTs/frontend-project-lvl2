import yaml from 'js-yaml';

const parser = (data, formatFile) => {
  switch (formatFile) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.load(data);
    default:
      return new Error(`Wrong input format: '${formatFile}'`);
  }
};

export default parser;
