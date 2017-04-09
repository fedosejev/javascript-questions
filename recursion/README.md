# Recursion

### Problem

Write a function that uses recursion: `sum(3); // 6`

### Solution

```js
function sum(number) {
  if (number < 1) {
    return number;
  }

  return (number + sum(number - 1));
}

console.log(sum(3)); // 6
```

### Try it yourself

`node solution1`

### How it works

You can imagine that `sum(3)` works like this: `sum(3) + sum(2) + sum(1) + sum(0)`.

1. First it executes `sum(3)`.
2. Then it executes `sum(2)`.
3. Then it executes `sum(1)`.
4. Then it executes `sum(0)`.
5. Then it returns `0`.
6. Then it adds `0` to `1` and returns `1`.
7. Then it adds `2` to `1` and returns `3`.
8. Then it adds `3` to `3` and returns `6`.
