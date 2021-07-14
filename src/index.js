const makeDiff = (filepath1, filepath2) => {
  const fileObj1 = JSON.parse(filepath1);
  const fileObj2 = JSON.parse(filepath2);
  const allKeys = [...Object.keys(fileObj1), ...Object.keys(fileObj2)];
  const keys = allKeys.filter((item, index) => allKeys.indexOf(item) === index);
  const keysSorted = keys.sort();
  const diff = keysSorted.reduce((acc, key) => {
    if (!Object.prototype.hasOwnProperty.call(fileObj2, key)) {
      return [...acc, `- ${key}: ${fileObj1[key]}`];
    }
    if (!Object.prototype.hasOwnProperty.call(fileObj1, key)) {
      return [...acc, `+ ${key}: ${fileObj2[key]}`];
    }
    if (fileObj1[key] !== fileObj2[key]) {
      return [...acc, `- ${key}: ${fileObj1[key]}`, `+ ${key}: ${fileObj2[key]}`];
    }

    return [...acc, `  ${key}: ${fileObj1[key]}`];
  }, []);

  let str = '{\n';
  diff.forEach((item) => {
    str += `  ${item}\n`;
  });

  return `${str}}`;
};

export default makeDiff;
