let n = parseInt(prompt("Nhập số lượng cho dãy Fibonacci: "));
function printFibonacci(n) {
  if (
    n <= 0 ||
    typeof n == "string" ||
    isNaN(n) ||
    !isFinite(n) ||
    !Number.isInteger(n)
  ) {
    return "Số phần tử không hợp lệ";
  }

  let result = [0];
  if (n === 1) {
    console.log(result);
  }
  result.push(1);
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.join(" ");
}
console.log(printFibonacci(n));
