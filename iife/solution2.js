const obj = {
  a: 'a',
  b: 'b'
};

(function iife(obj) {
  obj.a = 'c';
})(obj);

console.log(obj.a); // "c"
