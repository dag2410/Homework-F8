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
let test = true;
function getTopProducts(products, top) {
  if (top > products.length) {
    console.log("null");
    test = false;
  } else {
    let arrTop = [];
    let productsTop = [...products];

    for (let i = 0; i < top; i++) {
      let topPrice = 0;
      for (let j = 1; j < productsTop.length; j++) {
        if (productsTop[j].price > productsTop[topPrice].price) {
          topPrice = j;
        }
      }
      arrTop.push(productsTop[topPrice]);
      productsTop.splice(topPrice, 1);
    }

    return arrTop;
  }
}

const result = getTopProducts(products, 3);
test == true
  ? console.log(result)
  : console.log("số lượng muốn sắp xếp quá mức mảng");
