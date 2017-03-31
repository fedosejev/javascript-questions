var foo = { n: 1 };
foo.x = foo = { n: 2 };

console.log(foo.x);
