let weight = parseFloat(prompt("Nhập cân nặng"));
let height = parseFloat(prompt("Nhập chiều cao"));
let BMI_cal = weight / (height * height);
if (
  weight < 0 ||
  isNaN(weight) ||
  typeof weight === "string" ||
  height < 0 ||
  isNaN(height) ||
  typeof height === "string"
) {
  alert("Dữ liệu không hợp lệ");
} else {
  function BMI(weight, height) {
    if (BMI_cal < 18.5) {
      alert("Thiếu cân");
    } else if (BMI_cal < 23) {
      alert("Bình thường");
    } else if (BMI_cal < 25) {
      alert("Thừa cân");
    } else {
      alert("Béo phì");
    }
    return;
  }
  alert(`Chỉ số BMI của bạn là:, ${BMI_cal}`);
  BMI(weight, height);
}
