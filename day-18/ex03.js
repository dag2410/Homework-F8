let a = parseFloat(prompt("nhập cạnh a: "));
let b = parseFloat(prompt("nhập cạnh b: "));
let c = parseFloat(prompt("nhập cạnh c: "));
if (
  a < 0 || isNaN(a) || typeof a === "string" ||
  b < 0 || isNaN(b) || typeof b === "string" ||
  c < 0 || isNaN(c) || typeof c === "string"
) {
  alert("Vui lòng nhập lại số đo cạnh");
} else {
  function kiemTraTamGiac() {
    if (a + b > c && a + c > b && b + c > a) {
      return " 3 cạnh này có thể thành 1 tam giác ";
    } else {
      return "3 cạnh không thể thành 1 tam giác ";
    }
  }
  alert(kiemTraTamGiac());
}
