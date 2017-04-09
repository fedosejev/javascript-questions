const slowAdd = (a, b) => {
  setTimeout(() => {
    console.log(a + b);
  }, 0);
};

slowAdd(8, 4);
