function countElements(tagName) {
  if (typeof tagName !== "string") {
    return "Invalid";
  }
  const numberOfTags = document.getElementsByTagName(tagName);
  return numberOfTags.length;
}
// Giả sử trên trang web có 10 thẻ div và 5 thẻ p

console.log(countElements("div")); // 10
console.log(countElements("p")); // 5
console.log(countElements("pd")); // 5
