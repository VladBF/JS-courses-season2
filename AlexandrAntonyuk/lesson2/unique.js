
let arr = [2, 1, 1, 1, 2, 2];
var unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique)