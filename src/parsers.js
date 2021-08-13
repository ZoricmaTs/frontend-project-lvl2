import yaml from 'js-yaml';

const parser = (data, typeFile) => {
  switch (typeFile) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.load(data);
    default:
      return new Error(`Wrong input format: '${typeFile}'`);
  }
};

export default parser;
