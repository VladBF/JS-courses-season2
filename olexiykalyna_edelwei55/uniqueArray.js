var summArray = [1, 4, 57, 2, 65, 1, 6, 9, 3];
function unique(arr) {
  var result = [];

  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; // для каждого элемента
      for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
        if (result[j] == str) continue nextInput; // если да, то следующий
      }
      result.push(str);
    }

  return result;
}
alert("Массив с уникальными элементами: " + unique(summArray) );
