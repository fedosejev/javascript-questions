const data = 'aaaaggbbbbc';
const resultList = [];

const dataObject = data.split('').reduce((result, item) => {
  result[item] = (result[item] ? (result[item] + 1) : 1);
  return result;
}, {});

Object.keys(dataObject).map(key => {
  const value = dataObject[key];
  resultList.push(value);
  resultList.push(key);
});

const result = resultList.join('');

console.log(result);
