# JavaScript Questions
Questions that I was asked.

## Recursion

```js
function sum(number) {
  if (number === 0) {
    return number;
  } else {
    return (number + sum(number - 1));
  }
}

console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(3)); // 6
```
