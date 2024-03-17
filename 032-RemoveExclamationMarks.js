/*
180 day Coding Challenge (32/180)
Link : https://www.codewars.com/kata/57a0885cbb9944e24c00008e
*/

// BARBAR ANSWER

function removeExclamationMarks2(words) {
  let result = "";
  for (let word of words) {
    if (word !== "!") {
      result += word;
    }
  }
  return result;
}

console.log(removeExclamationMarks2("Hello World!"));

// SPLIT ANSWER

const removeExclamationMarks = (words) => words.split("!").join("");

console.log(removeExclamationMarks("Hello World!"));

// REPLACE ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

function removeExclamationMarks3(words) {
  return words.replace(/!/g, "");
}
console.log(removeExclamationMarks3("Hello World!!!"));
