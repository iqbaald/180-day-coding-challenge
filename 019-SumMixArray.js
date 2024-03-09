/*
180 day Coding Challenge (19/180)
Link : https://www.codewars.com/kata/57eaeb9578748ff92a000009
Question : Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Input : ('Daniel', 'Daniel') || ('Greg', 'Daniel')
Output : 'Hello boss' || 'Hello guest'
*/

// BARBAR ANSWER

function sumMix2(x) {
  let numbers = x.map(Number).reduce((acc, curr) => acc + curr);
  return numbers;
}

console.log(sumMix2([9, 3, "7", "3"]));
console.log(sumMix2(["5", "0", 9, 3, 2, 1, "9", 6, 7]));

// ONELINE ANSWER

const sumMix = (x) => x.map(Number).reduce((acc, curr) => acc + curr);

console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
