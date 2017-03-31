# JavaScript Q&A
Problems that I was asked to solve.

## 1. Recursion

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

#### Try

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

## 2. Immediately-Invoked Function Expression (IIFE)

### Problem

What will `obj.a` reference to?

```js
const obj = {
  a: 'a',
  b: 'b'
};

(function iife(obj) {
  obj.a = 'c';
})(obj);

console.log(obj.a); // "c"
```

### Solution

```js
"c"
```

#### Try

`node solution2`

### How it works

We call `iife()` function passing `obj` as an argument. `obj` is a reference to `{ a: 'a', b: 'b' }` that we've defined earlier. We're not copying `{ a: 'a', b: 'b' }` when we're passing its reference to `iife()` function - we're only passing the reference. Then we mutate `obj.a` value by setting it to `c`. JS does it by calling internal `[[Put]]` function.

## 3. Lexical scope

### Problem

What will `bar()` log?

```js
var foo = 'foo1';

function bar() {
  if (! foo) {
    var foo = 'foo2';
  }

  return foo;
}

console.log(bar()); // "foo2"
```

### Solution

```js
"foo2"
```

#### Try

`node solution3`

### How it works

When you run this code JS does 2 things:

1. Registers variable declarations with scope manager during compilation phase.
2. Assigs values to variables during execution phase.

Which means JS "seems" our `bar()` function like this:
```js
function bar() {
  var foo; // undefined
  if (! foo) { // true
    foo = 'foo2';
  }

  return foo;
}
```

`foo` is declared in `bar()` scope and it's initial value is `undefined`. `undefined` is falsy, so we assign `'foo2'` to `foo`.
