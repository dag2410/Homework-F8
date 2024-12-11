let n = parseInt(prompt("nhap so n"));
if (n <= 0 || isNaN(n) || n == "Infinity" || typeof n == "string") {
  console.log("nhập sai dữ liệu vui lòng nhập lại");
} else {
  function squareNumber(n) {
    for (let i = 1; i * i <= n; i++) {
      console.log(i * i);
    }
  }
  squareNumber(n);
}
