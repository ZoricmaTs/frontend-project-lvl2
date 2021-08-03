import _ from 'lodash';

const getIndent = (depth, count = 4) => {
  const spaceIndent = depth * count - 2;
  return ' '.repeat(spaceIndent);
};

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }

  const result = Object.keys(value).map((key) => {
    const valueKey = value[key];

    if (typeof valueKey === 'object') {
      return `${getIndent(depth)}  ${key}: ${stringify(valueKey, depth + 1)}\n`;
    }
    return `${getIndent(depth)}  ${key}: ${valueKey}\n`;
  });

  return `{\n${result.join('')}${getIndent(depth - 1)}  }`;
};

const render = (nodes) => {
  const iter = (node, depth = 1) => {
    const {
      key, type, children, oldValue, newValue,
    } = node;

    switch (type) {
      case 'nested':
        return `\n${getIndent(depth)}  ${key}: {${children.map((child) => iter(child, depth + 1)).join('')}\n${getIndent(depth)}  }`;
      case 'unchanged':
        return `\n${getIndent(depth)}  ${key}: ${stringify(oldValue, depth + 1)}`;
      case 'changed':
        return `\n${getIndent(depth)}- ${key}: ${stringify(oldValue, depth + 1)}\n${getIndent(depth)}+ ${key}: ${stringify(newValue, depth + 1)}`;
      case 'added':
        return `\n${getIndent(depth)}+ ${key}: ${stringify(newValue, depth + 1)}`;
      case 'removed':
        return `\n${getIndent(depth)}- ${key}: ${stringify(oldValue, depth + 1)}`;
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
