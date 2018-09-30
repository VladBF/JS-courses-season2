function fibo(n) {
  if (n <= 2) {
    return 1;
  } else {
    var a = 1,
        b = 1,
        c = 0;
    for (var i = 3; i <= n ; i++) {
      c = a + b;
      a = b;
      b = c;
    }

    return c;
  }
}
