var foo = 'foo1';

function bar() {
  if (! foo) {
    var foo = 'foo2';
  }

  return foo;
}

console.log(bar()); // "foo2"
