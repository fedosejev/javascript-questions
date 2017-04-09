const slowSquare = a => {
  setTimeout(() => {
    console.log(a * a);
  }, 0);
};

const slowAdd = (a, b) => {
  setImmediate(() => {
    console.log(a + b);
  });
};

slowSquare(8);
slowAdd(8, 4);
