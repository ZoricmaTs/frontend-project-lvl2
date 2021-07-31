import _ from 'lodash';

const stringify = (value, space) => {
  if (!_.isObject(value)) {
    return value;
  }

  const indent = ' '.repeat(space + 6);
  const indentBraces = ' '.repeat(space + 2);

  const keys = Object.keys(value);

  const result = keys.map((key) => {
    const valueKey = value[key];

    if (typeof valueKey === 'object') {
      return `${indent}${key}: ${stringify(valueKey, space + 4)}\n`;
    }
    return `${indent}${key}: ${valueKey}\n`;
  });
  return `{\n${result.join('')}${indentBraces}}`;
};

const render = (nodes) => {
  const iter = (node, space = 2) => {
    const indent = ' '.repeat(space);
    const indentBraces = ' '.repeat(space + 2);
    const {
      key, type, children, oldValue, newValue,
    } = node;

    switch (type) {
      case 'nested':
        return `\n${indentBraces}${key}: {${children.map((child) => iter(child, space + 4)).join('')}\n${indentBraces}}`;
      case 'unchanged':
        return `\n${indentBraces}${key}: ${stringify(oldValue, space)}`;
      case 'changed':
        return `\n${indent}- ${key}: ${stringify(oldValue, space)}\n${indent}+ ${key}: ${stringify(newValue, space)}`;
      case 'added':
        return `\n${indent}+ ${key}: ${stringify(newValue, space)}`;
      case 'removed':
        return `\n${indent}- ${key}: ${stringify(oldValue, space)}`;
      default:
        throw new Error(`unexpected type ${type}`);
    }
  };
  return iter(nodes);
};

const stylish = (nodes) => {
  const lines = nodes.map((node) => render(node));
  return `{${lines.join('')}\n}`;
};

export default stylish;
