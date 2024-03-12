/*
180 day Coding Challenge (19/180)
Link : https://www.codewars.com/kata/5715eaedb436cf5606000381
*/

// BARBAR ANSWER
function positiveSum2(arr) {
  let result = 0;
  for (let array of arr) {
    if (array >= 0) {
      result += array;
    }
  }
  return result;
}

console.log(positiveSum2([1, 2, 3, 4, 5]));
console.log(positiveSum2([1, -2, 3, 4, 5]));
console.log(positiveSum2([-1, -2, -3, -4, -5]));

// ONLINE ANSWER

const positiveSum = (arr) =>
  arr.reduce((acc, curr) => (curr >= 0 ? acc + curr : acc), 0);

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([]));
