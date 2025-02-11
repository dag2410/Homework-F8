const container = document.createElement("div");
container.style.width = "400px";
container.style.margin = "auto";
container.style.textAlign = "center";

const title = document.createElement("h1");
title.innerText = "bé tập tính";
title.style.fontSize = "20px";
container.appendChild(title);

const inputContainer = document.createElement("div");

const input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "Nhập số thứ nhất";
input1.style.display = "block";
input1.style.margin = "auto";

inputContainer.appendChild(input1);

const input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Nhập số thứ hai";
input2.style.margin = "auto";
input2.style.display = "block";

inputContainer.appendChild(input2);

container.appendChild(inputContainer);

const radioContainer = document.createElement("div");
radioContainer.style.display = "flex";
radioContainer.style.justifyContent = "space-around";
radioContainer.style.marginBottom = "20px";
container.appendChild(radioContainer);

const operations = [
  { value: "+", label: "Cộng" },
  { value: "-", label: "Trừ" },
  { value: "*", label: "Nhân" },
  { value: "/", label: "Chia" },
];

operations.forEach((op) => {
  const radioLabel = document.createElement("label");
  radioLabel.style.marginRight = "10px";
  radioLabel.style.fontSize = "18px";

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "operation";
  radio.value = op.value;
  radio.style.marginRight = "5px";

  radioLabel.appendChild(radio);
  radioLabel.appendChild(document.createTextNode(op.label));
  radioContainer.appendChild(radioLabel);
});

const calcButton = document.createElement("button");
calcButton.innerText = "Tính";
calcButton.style.padding = "10px 20px";
calcButton.style.backgroundColor = "#007BFF";
calcButton.style.color = "#fff";
calcButton.style.border = "none";
calcButton.style.borderRadius = "5px";
calcButton.style.cursor = "pointer";
container.appendChild(calcButton);

const resultInput = document.createElement("input");
resultInput.type = "text";
resultInput.placeholder = "Kết quả";
resultInput.disabled = true;
resultInput.style.width = "90%";
resultInput.style.padding = "10px";
resultInput.style.marginTop = "20px";
resultInput.style.display = "block";
resultInput.style.margin = "10px auto";
container.appendChild(resultInput);

calcButton.addEventListener("click", () => {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  const operation = document.querySelector('input[name="operation"]:checked');

  if (!operation) {
    resultInput.value = "Vui lòng chọn phép tính.";
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    resultInput.value = "Vui lòng nhập đủ hai số.";
    return;
  }

  let res;
  switch (operation.value) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultInput.value = "Không thể chia cho 0.";
        return;
      }
      res = num1 / num2;
      break;
  }

  resultInput.value = res;
});

document.body.appendChild(container);
