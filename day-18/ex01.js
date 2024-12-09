let salary = parseFloat(prompt("nhap tien luong"));

if (salary <= 0 || isNaN(salary) || typeof salary === "string") {
  alert("vui long nhap lai so tien luong");
} else {
  function tinhTienThue(salary) {
    let thue = 0;
    if (salary <= 11000000) {
      thue = 0;
    } else if (salary <= 25000000) {
      thue = salary * 0.05;
    } else if (salary <= 50000000) {
      thue = salary * 0.1;
    } else if (salary <= 80000000) {
      thue = salary * 0.2;
    } else {
      thue = salary * 0.3;
    }

    return thue;
  }

  let thue = tinhTienThue(salary);
  alert(`so tien thue phai nop la: ${thue} VND`);
}
