const slowSquare = a => {
  process.nextTick(() => {
    console.log(a * a);
  });
};

const slowAdd = (a, b) => {
  setImmediate(() => {
    console.log(a + b);
  });
};

console.log('One');
slowAdd(8, 4);
console.log('Two');
slowSquare(110);
slowSquare(120);
slowSquare(130);
console.log('Three');
