const list = [1, 24, 6, 0, 3, 7, 0, 3];

const zeros = list.filter(number => (number === 0));
const nonZeros = list.filter(number => (number > 0));

const result = nonZeros.concat(zeros);

console.log(result);
