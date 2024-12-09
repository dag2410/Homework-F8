let electricityNumber = parseFloat(prompt("nhập số điện(kWh): "));
if (
  electricityNumber < 0 ||
  isNaN(electricityNumber) ||
  typeof electricityNumber === "string" ||
  electricityNumber == "Infinity"
) {
  alert("Vui lòng nhập lại số tiền điện");
} else {
  function calc_electricityBill() {
    let electricityBill = 0;
    if (electricityNumber <= 50) {
      electricityBill = electricityNumber * 1678;
    } else if (electricityNumber <= 100) {
      electricityBill = 50 * 1678 + (electricityNumber - 50) * 1734;
    } else if (electricityNumber <= 200) {
      electricityBill =
        50 * 1678 + 50 * 1734 + (electricityNumber - 100) * 2014;
    } else if (electricityNumber <= 300) {
      electricityBill =
        50 * 1678 + 50 * 1734 + 100 * 2014 + (electricityNumber - 200) * 2536;
    } else if (electricityNumber <= 400) {
      electricityBill =
        50 * 1678 +
        50 * 1734 +
        100 * 2014 +
        100 * 2536 +
        (electricityNumber - 300) * 2834;
    } else {
      electricityBill =
        50 * 1678 +
        50 * 1734 +
        100 * 2014 +
        100 * 2536 +
        100 * 2834 +
        (electricityNumber - 400) * 2927;
    }
    return electricityBill;
  }
  electricityBill = calc_electricityBill(electricityNumber);
  alert(`số tiền điện là : ${electricityBill} VND`);
}
