function sum(number) {
  if (number < 1) {
    return number;
  }

  return (number + sum(number - 1));
}

console.log(sum(3)); // 6
