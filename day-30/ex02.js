const cart = [
  {
    id: 1,
    name: "T-Shirt",
    price: 100000,
    quantity: 2,
    hotSale: false,
  },
  {
    id: 2,
    name: "Jean",
    price: 200000,
    quantity: 1,
    hotSale: false,
  },
  {
    id: 3,
    name: "Skirt",
    price: 150000,
    quantity: 3,
    hotSale: true,
  },
  {
    id: 4,
    name: "Shirt",
    price: 120000,
    quantity: 2,
    hotSale: false,
  },
  {
    id: 5,
    name: "Jacket",
    price: 250000,
    quantity: 1,
    hotSale: true,
  },
];
function renderOrder(cart) {
  let content =
    //html
    `<table>
  <thead>
    <tr>
      <th>Tên sản phẩm</th>
      <th>Đơn giá</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
    </tr>
  </thead>`;

  let productsContent = ``;
  let total = 0;
  cart.forEach((element) => {
    total += element.quantity * element.price;
    productsContent += `
    <tr ${element.hotSale ? 'style="color:red"' : ""}>
    <td>${element.name}</td>
    <td>${element.price}</td>
    <td>${element.quantity}</td>
    <td>${element.quantity * element.price}</td>
    </tr>
    `;
  });

  content +=
    //html
    ` <tbody>
${productsContent}

  </tbody>
  <tfoot>
  <tr>
    <td colspan='3'>Tổng tiền</td>
    <td>${total}</td>
  </tr>
  </tfoot>
</table>`;
  document.body.innerHTML = content;

  document.querySelectorAll("td, th").forEach((element) => {
    element.style.border = "1px solid red";
  });
  document.querySelector("table").style.borderCollapse = "collapse";
}
renderOrder(cart);
