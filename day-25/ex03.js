Array.prototype.reduce2 = function (callback, initialValue) {
  if (this.length === 0 && arguments.length < 2) {
    return "Reduce of empty array with no initial value";
  }

  let accumulator;
  let startIndex;
  if (arguments.length >= 2) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

// Sample usage

// Sample 1

const arr1 = [1, 2, 3, 4, 5];

const result1 = arr1.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result1); // 15

// Sample 2

const arr2 = [];

const result2 = arr2.reduce2((accumulator, value) => {
  return accumulator + value;
});

console.log(result2); // Error: Reduce of empty array with no initial value

// Sample 3

const arr3 = [];

const result3 = arr3.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result3); // 0
