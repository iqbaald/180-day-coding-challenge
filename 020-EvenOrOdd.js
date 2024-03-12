/*
180 day Coding Challenge (20/180)
Link : https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
*/

// BARBAR ANSWER
function evenOrOdd2(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd2(-7));
console.log(evenOrOdd2(2));

// ONELINE ANSWER
const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

console.log(evenOrOdd(-7));
console.log(evenOrOdd(2));
