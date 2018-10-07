Array.prototype.diff = function(a) {
  return this.filter(function(i){return a.indexOf(i) < 0;});
};
let arrayOne = [7,6,5,4,3],
  arrayTwo = [1,2,3,4];
let result = arrayTwo.diff(arrayOne);
console.info(result);