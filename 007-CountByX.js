/*
180 day Coding Challenge (7/180)
Link : https://www.codewars.com/kata/5513795bd3fafb56c200049e
Question : Create a function with two arguments that will return an array of the first n multiples of x.
        Assume both the given number and the number of times to count will be positive numbers greater than 0.
        Return the results as an array
Input : countBy(1,10) or countBy(2,5)
Result : [1,2,3,4,5,6,7,8,9,10] or [2,4,6,8,10]
*/

// BARBAR ANSWER
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

console.log(countBy(1, 4));
console.log(countBy(2, 5));

// MAP ANSWER
// Reference .map() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Reference Spread operator : https://www.w3schools.com/howto/howto_js_spread_operator.asp

const countBy2 = (x, n) => {
  return [...Array(n)].map((el, i) => (i + 1) * x);
};

console.log(countBy2(1, 4));
console.log(countBy2(2, 5));

// ONE LINE ANSWER
const countBy3 = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy3(1, 4));
console.log(countBy3(2, 5));
