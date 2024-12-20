const products = [
  {
    id: 1,
    name: "Apple iPhone 12",
    price: 1000,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 900,
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    price: 800,
  },
  {
    id: 4,
    name: "Apple iPhone 11",
    price: 700,
  },
  {
    id: 5,
    name: "Samsung Galaxy S20",
    price: 600,
  },
  {
    id: 6,
    name: "Xiaomi Mi 10",
    price: 500,
  },
];
function getTopProducts(products, top) {
  let arrTop = [];
  let productsTop = [...products];
  for (let i = 0; i < top; i++) {
    let priceTop = productsTop[0].price;
    for (let j = 1; j < productsTop.length; j++) {
      if (productsTop[j].price > priceTop) {
        priceTop = j;
      }
    }
    arrTop.push(productsTop[0]);
    productsTop.splice(0, 1);
  }

  return arrTop;
}

const result = getTopProducts(products, 3);
console.log(result);
