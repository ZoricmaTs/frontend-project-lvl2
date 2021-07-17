import _ from 'lodash';

const makeDiff = (filepath1, filepath2) => {
  const dataFirst = JSON.parse(filepath1);
  const dataSecond = JSON.parse(filepath2);
  const allKeys = [...Object.keys(dataFirst), ...Object.keys(dataSecond)];
  const keys = allKeys.filter((item, index) => allKeys.indexOf(item) === index);
  const keysSorted = _.sortBy(keys);

  const diff = keysSorted.reduce((acc, key) => {
    if (!_.has(dataSecond, key)) {
      return [...acc, ` - ${key}: ${dataFirst[key]}`];
    }
    if (!_.has(dataFirst, key)) {
      return [...acc, ` + ${key}: ${dataSecond[key]}`];
    }
    if (dataFirst[key] !== dataSecond[key]) {
      return [...acc, ` - ${key}: ${dataFirst[key]}`, ` + ${key}: ${dataSecond[key]}`];
    }

    return [...acc, `   ${key}: ${dataFirst[key]}`];
  }, []);

  const result = `{\n${[...diff].join('\n')}\n}`;
  return result;
};

export default makeDiff;
