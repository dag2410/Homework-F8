function countElements(tagName) {
  if (typeof tagName != "string") {
    return "Invalid";
  }
  let countTag = document.getElementsByTagName(tagName);
  return countTag.length;
}
// Giả sử trên trang web có 10 thẻ div và 5 thẻ p

console.log(countElements("div")); // 10
console.log(countElements("p")); // 5
console.log(countElements("pd")); // 5
