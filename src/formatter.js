import stylish from './stylishFormatter.js';

const formatter = (data, outputFormat = 'stylish') => {
  switch (outputFormat) {
    case 'json':
      return JSON.stringify(data, null, 2);
    default:
      return stylish(data);
  }
};

export default formatter;
