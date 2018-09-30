function unique(arr) {
  var result = [];

  nextStep:
    for (var i = 0; i < arr.length; i++) {
      var buff = arr[i];

      for (var j = 0; j < result.length; j++) {
        if (result[j] == buff) {
        	continue nextStep; 
        }
      }
      result.push(buff);
    }

  return result;
}

var numbers = [1,1,2,3,1,2];

console.log(" ");
console.log(numbers);
console.log( unique(numbers) ); 
