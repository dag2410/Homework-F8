let cart = [];

function updateCartUI() {
  const cartTable = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  cartTable.innerHTML = "";
  let totalPrice = 0;

  if (cart.length === 0) {
    cartTable.innerHTML =
      "<tr><td colspan='5'>Giỏ hàng không có sản phẩm</td></tr>";
    totalPriceElement.textContent = "0";
    return;
  }

  cart.forEach((item, index) => {
    const total = item.price * item.quantity;
    totalPrice += total;

    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${item.name}</td>
              <td>${item.price}</td>
              <td><input type="number" value="${item.quantity}" min="1" class="cart-quantity" data-index="${index}"></td>
              <td>${total}</td>
              <td><button class="delete-btn" data-index="${index}">Xóa</button></td>
          `;
    cartTable.appendChild(row);
  });

  totalPriceElement.textContent = totalPrice;

  document.querySelectorAll(".cart-quantity").forEach((input) => {
    input.addEventListener("change", (event) => {
      const index = event.target.getAttribute("data-index");
      cart[index].quantity = parseInt(event.target.value);
      updateCartUI();
    });
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      cart.splice(index, 1);
      updateCartUI();
    });
  });
}

document.querySelectorAll(".add-to-cart").forEach((button, index) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");
    const name = row.cells[1].textContent;
    const price = parseInt(row.cells[2].textContent);
    const quantity = parseInt(row.querySelector(".quantity").value);

    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ name, price, quantity });
    }

    updateCartUI();
  });
});
