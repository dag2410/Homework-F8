let a = 16;
let b = 11;
let c = 12;
if (a > b) {
  [a, b] = [b, a];
}
if (a > c) {
  [a, c] = [c, a];
}
if (b > c) {
  [b, c] = [c, b];
}
console.log("Day so sap xep theo thu tu tang dan: ", a, b, c);
