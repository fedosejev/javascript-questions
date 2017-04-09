# Lexical scope

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

### Try it yourself

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
