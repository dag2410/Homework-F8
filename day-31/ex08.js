const container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";

const title = document.createElement("h2");
title.innerText = "Chia Bill";
container.appendChild(title);

const totalBillLabel = document.createElement("label");
totalBillLabel.innerText = "Tổng bill:";
container.appendChild(totalBillLabel);

const totalBillInput = document.createElement("input");
totalBillInput.type = "number";
container.appendChild(totalBillInput);
container.appendChild(document.createElement("br"));

const peopleLabel = document.createElement("label");
peopleLabel.innerText = "Số người chia:";
container.appendChild(peopleLabel);

const peopleInput = document.createElement("input");
peopleInput.type = "number";
container.appendChild(peopleInput);
container.appendChild(document.createElement("br"));

const tipLabel = document.createElement("label");
tipLabel.innerText = "Tiền tip:";
container.appendChild(tipLabel);

const tipInput = document.createElement("input");
tipInput.type = "number";
container.appendChild(tipInput);
container.appendChild(document.createElement("br"));

const calculateButton = document.createElement("button");
calculateButton.innerText = "Tính tiền";
container.appendChild(calculateButton);

const resultDiv = document.createElement("div");
container.appendChild(resultDiv);

calculateButton.addEventListener("click", () => {
  let totalBill = parseFloat(totalBillInput.value);
  let peopleCount = parseInt(peopleInput.value);
  let tipAmount = parseFloat(tipInput.value) || 0;

  if (isNaN(totalBill) || totalBill <= 0) {
    alert("Vui lòng nhập tổng bill hợp lệ!");
    return;
  }

  if (
    isNaN(peopleCount) ||
    peopleCount <= 0 ||
    !Number.isInteger(peopleCount)
  ) {
    alert("Vui lòng nhập số người hợp lệ (là số nguyên dương)!");
    return;
  }

  if (tipAmount < 0 || tipAmount > totalBill) {
    alert("Tiền tip phải từ 0 đến tổng bill!");
    return;
  }

  let totalAmount = totalBill + tipAmount;
  let amountPerPerson = totalAmount / peopleCount;

  resultDiv.innerHTML = `
        <p>Mỗi người cần trả: ${amountPerPerson.toFixed(2)} VND</p>
        <p>Tổng số tiền cần trả: ${totalAmount.toFixed(2)} VND</p>
    `;
});
