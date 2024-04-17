/*
180 day Coding Challenge (64/180)
Link : https://www.codewars.com/kata/5412509bd436bd33920011bc/

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

// BARBAR ANSWER

function getSum(a, b) {
  let result = 0;
  if (a === b) return a;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      result += i;
    }
  } else if (a > b) {
    for (let j = b; j <= a; j++) {
      result += j;
    }
  }
  return result;
}

console.log(getSum(-1, 0));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log(getSum(-1, 2));
console.log(getSum(5, -1));

// Math.abs ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function getSum2(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

console.log(getSum2(-1, 0));
console.log(getSum2(0, 1));
console.log(getSum2(2, 2));
console.log(getSum2(3, 3));
console.log(getSum2(-1, 2));
console.log(getSum2(5, -1));
