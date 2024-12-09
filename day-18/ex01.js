let salary = parseFloat(prompt("nhap tien luong"));

if (
  salary <= 0 ||
  isNaN(salary) ||
  typeof salary === "string" ||
  salary == "Infinity"
) {
  alert("vui long nhap lai so tien luong");
} else {
  function calc_Tax(salary) {
    let tax = 0;
    if (salary <= 11000000) {
      tax = 0;
    } else if (salary <= 25000000) {
      tax = (salary - 11000000) * 0.05;
    } else if (salary <= 50000000) {
      tax = (salary - 11000000) * 0.05 + (salary - 25000000) * 0.1;
    } else if (salary <= 80000000) {
      tax =
        (salary - 11000000) * 0.05 +
        (salary - 25000000) * 0.1 +
        (salary - 50000000) * 0.2;
    } else {
      tax =
        (salary - 11000000) * 0.05 +
        (salary - 25000000) * 0.1 +
        (salary - 50000000) * 0.2 +
        (salary - 80000000) * 0.3;
    }

    return tax;
  }

  let tax = calc_Tax(salary);
  alert(`so tien thue phai nop la: ${tax} VND`);
}
