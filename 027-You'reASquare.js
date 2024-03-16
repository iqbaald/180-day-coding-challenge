/*
180 day Coding Challenge (19/180)
Link : https://www.codewars.com/kata/54c27a33fb7da0db0100040e
*/

// BARBAR ANSWER
const isSquare2 = function (n) {
  for (let i = 0; i <= n; i++) {
    let guess = i * i;
    if (guess === n) {
      return true;
    }
  }
  return false;
};

console.log(isSquare2(0));
console.log(isSquare2(-1));
console.log(isSquare2(4));
console.log(isSquare2(25));

// MATH.SQRT ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

const isSquare = (n) => {
  return Math.sqrt(n) % 1 === 0;
};

console.log(isSquare(0));
console.log(isSquare(-1));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25)); //25 is a square number (5 * 5)

// ONELINE ANSWER

const isSquare3 = (n) => Math.sqrt(n) % 1 === 0;

console.log(isSquare3(0));
console.log(isSquare3(-1));
console.log(isSquare3(3));
console.log(isSquare3(4));
console.log(isSquare3(25)); //25 is a square number (5 * 5)
