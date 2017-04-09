# Manipulating data

## Parsing string

### Problem

Convert `'aaaaggbbbbc'` to `'4a2g4b1c'`.

### Solution

```js
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
```

### Try it yourself

`node solution5`

## Manipulating arrays

### Problem

Convert `[1, 24, 6, 0, 3, 7, 0, 3]` to `[1, 24, 6, 3, 7, 3, 0, 0]`.

### Solution

```js
const list = [1, 24, 6, 0, 3, 7, 0, 3];

const zeros = list.filter(number => (number === 0));
const nonZeros = list.filter(number => (number > 0));

const result = nonZeros.concat(zeros);

console.log(result);

```

### Try it yourself

`node solution6`
