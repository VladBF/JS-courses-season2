var exapleArray = [3, 7, 4, 1, 5];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function sortJavaScript(arr) {
  return arr.sort(compareNumeric);
}

function mySort(arr) {
  var changVariable;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        changVariable = arr[i];
        arr[i] = arr[j];
        arr[j] = changVariable;
      }
    }
  }

  return arr;
}
