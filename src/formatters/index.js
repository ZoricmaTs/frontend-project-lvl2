import getStylishFormat from './stylishFormatter.js';
import getPlainFormat from './plainFormatter.js';
import getJsonFormat from './jsonFormatter.js';

const formatter = (data, outputFormat = 'stylish') => {
  switch (outputFormat) {
    case 'json':
      return getJsonFormat(data);
    case 'plain':
      return getPlainFormat(data);
    default:
      return getStylishFormat(data);
  }
};

export default formatter;
