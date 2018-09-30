function fiboNumber(number) {
  var a = 1,
    b = 0,
    temp;
  var result = [];
  while (number >= 1) {

    temp = a;
    a = a + b;
    b = temp;
    result.push(b);
    number--;
  }
  console.log(result);
  return b;
}

fiboNumber(5);