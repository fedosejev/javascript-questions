# Immediately-Invoked Function Expression (IIFE)

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

### Try it yourself

`node solution2`

### How it works

We call `iife()` function passing `obj` as an argument. `obj` is a reference to `{ a: 'a', b: 'b' }` that we've defined earlier. We're not copying `{ a: 'a', b: 'b' }` when we're passing its reference to `iife()` function - we're only passing the reference. Then we mutate `obj.a` value by setting it to `c`. JS does it by calling internal `[[Put]]` function.
