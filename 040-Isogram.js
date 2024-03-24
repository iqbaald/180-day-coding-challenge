/*
180 day Coding Challenge (40/180)
Link : https://www.codewars.com/kata/59b0a6da44a4b7080300008a/
*/

// BARBAR ANSWER

function isIsogram(str) {
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));

// ANOTHER ANSWER

function isIsogram2(str) {
  const array = [...str.toLowerCase()].filter(
    (letter) => letter >= "a" && letter <= "z"
  );

  return new Set(array).size == array.length;
}

console.log(isIsogram2("Dermatoglyphics"));
console.log(isIsogram2("isogram"));
console.log(isIsogram2("aba"));

// ONELINE ANSWER

const isIsogram3 = (str) => new Set(str.toUpperCase()).size == str.length;

console.log(isIsogram3("Dermatoglyphics"));
console.log(isIsogram3("isogram"));
console.log(isIsogram3("aba"));
