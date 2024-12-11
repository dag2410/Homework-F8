let weight = parseFloat(prompt("Nhập cân nặng"));
let height = parseFloat(prompt("Nhập chiều cao"));
let BMI = weight / (height * height);
if (
  weight < 0 ||
  isNaN(weight) ||
  typeof weight === "string" ||
  weight == "Infinity" ||
  height < 0 ||
  isNaN(height) ||
  typeof height === "string" ||
  height == "Infinity"
) {
  alert("Dữ liệu không hợp lệ");
} else {
  function calcBMI(weight, height) {
    if (BMI < 18.5) {
      alert("Thiếu cân");
    } else if (BMI < 23) {
      alert("Bình thường");
    } else if (BMI < 25) {
      alert("Thừa cân");
    } else {
      alert("Béo phì");
    }
    return;
  }
  alert(`Chỉ số BMI của bạn là:, ${BMI}`);
  calcBMI(weight, height);
}
