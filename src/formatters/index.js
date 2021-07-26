import stylish from './stylishFormatter.js';
import plain from './plainFormatter.js';

const formatter = (data, outputFormat = 'stylish') => {
  switch (outputFormat) {
    case 'json':
      return JSON.stringify(data, null, 2);
    case 'plain':
      return plain(data);
    default:
      return stylish(data);
  }
};

export default formatter;
