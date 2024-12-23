// Input:
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];
let result = fruits.reduce((acc, cur) => {
  if (!acc.find((item) => item === cur)) {
    acc.push(cur);
  }

  return acc;
}, []);

// Output:
console.log(result); // ["apple", "banana", "kiwi", "orange"]
