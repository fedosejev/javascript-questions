# Expressions

### Problem

```js
var foo = { n: 1 };
foo.x = foo = { n: 2 };

console.log(foo.x);
```

What's the value of `foo.x`?

### Solution

```js
undefined
```

### Try it yourself

`node solution4`

### How it works

First JavaScript engine assigns a _reference_ to `{ n: 1 }` to `foo` variable: `var foo = { n: 1 };`. Now `foo` stores the reference to `{ n: 1 }` object.

Next JavaScript engine evaluates `foo.x` expression - as expected, it evaluates to `undefined`.

Next JavaScript engine assigns a _new reference_ to `foo` - this time, `foo` stores a reference to `{ n: 2 }` object: `foo = { n: 2 }`.

Finally JavaScript engine assigns a reference to `{ n: 2 }` to a `x` property of an old object - `{ n: 1 }`.

As a result we have `foo` referencing `{ n: 2 }` object and no variable referencing `{ n: 1, x: { n: 2 } }` object.
