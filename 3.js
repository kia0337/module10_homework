// Перевернуть строку
let str = "Hello";
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(str));