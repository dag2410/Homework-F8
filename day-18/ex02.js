let soDien = parseFloat(prompt("nhập số điện(kWh): "));
if (soDien < 0 || isNaN(soDien) || typeof soDien === "string") {
  alert("Vui lòng nhập lại số tiền điện");
} else {
  function tinhTienDien() {
    let tienDien = 0;
    if (soDien <= 50) {
      tienDien = soDien * 1678;
    } else if (soDien <= 100) {
      tienDien = 50 * 1678 + (soDien - 50) * 1734;
    } else if (soDien <= 200) {
      tienDien = 50 * 1678 + 50 * 1734 + (soDien - 100) * 2014;
    } else if (soDien <= 300) {
      tienDien = 50 * 1678 + 50 * 1734 + 100 * 2014 + (soDien - 200) * 2536;
    } else if (soDien <= 400) {
      tienDien =
        50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (soDien - 300) * 2834;
    } else {
      tienDien =
        50 * 1678 +
        50 * 1734 +
        100 * 2014 +
        100 * 2536 +
        100 * 2834 +
        (soDien - 400) * 2927;
    }
    return tienDien;
  }
  tienDien = tinhTienDien(soDien);
  alert(`Số tiền điện là : ${tienDien} VND`);
}
