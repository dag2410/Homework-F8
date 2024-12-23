let n = parseInt(prompt("Nhập số lượng cho dãy Fibonacci: "));
function printFibonacci(n) {
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
printFibonacci(n);
