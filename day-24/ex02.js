function fibonacci(n) {
  if (n <= 0 || typeof n == "string") {
    console.log("Số phần tử không hợp lệ");
    return;
  }
  let result = [0];
  if (n === 1) {
    console.log(result);
    return;
  }
  result.push(1);
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  console.log(result);
}


fibonacci(5); // 0 1 1 2 3

fibonacci(10); // 0 1 1 2 3 5 8 13 21 34

fibonacci(0); // Số phần tử không hợp lệ

fibonacci(-5); // Số phần tử không hợp lệ

fibonacci("abc"); // Số phần tử không hợp lệ

fibonacci(1); // 0
