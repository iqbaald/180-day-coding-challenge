/**
180 day Coding Challenge (1/180)
Link : https://www.codewars.com/kata/5a00e05cc374cb34d100000d
Question : Build a function that returns an array of integers from n to 1 where n>0.
Input : n=5
Result : [5,4,3,2,1]
*/

// BARBAR ANSWER

const reverseSeq = (n) => {
  const result = [];
  for (i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
};

// FILL AND REVERSE ANSWER
// Reference Spread operator : https://www.w3schools.com/howto/howto_js_spread_operator.asp
// Reference .map() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const reverseSeq2 = (n) => {
  return [...Array(n)] // create an array using spread operator with length 'n'
    .map((a, i) => i + 1) // map each element of the array to his index + 1
    .reverse(); // reverse the order
};

// ONE LINE ANSWER

const reverseSeq3 = (n) => {
  return [...Array(n)].map((a, i) => i + 1).reverse();
};

console.log(reverseSeq(5));
console.log(reverseSeq2(7));
console.log(reverseSeq3(5));
