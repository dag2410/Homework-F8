function printMultiplication_Table(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result = j * i;
      console.log(i + " x", j, "=", result);
    }
  }
}
printMultiplication_Table(10);
