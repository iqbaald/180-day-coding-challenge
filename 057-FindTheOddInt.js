/*
180 day Coding Challenge (57/180)
Link : https://www.codewars.com/kata/54da5a58ea159efa38000836

Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


*/

// BARBAR ANSWER

function findOdd(A) {
  let number = A.toString("").split(",");
  const count = {};

  for (total of number) {
    count[total] = (count[total] || 0) + 1;
  }

  //   {key: value}
  //   { 1: 2, 2: 4, 3: 6, 4: 1 }

  let keyOfCount = Object.keys(count);
  let valueOfCount = Object.values(count);

  for (let i = 0; i < keyOfCount.length; i++) {
    if (valueOfCount[i] % 2 !== 0) {
      return parseInt(keyOfCount[i]);
    }
  }
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// CLEAN ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function findOdd2(A) {
  let count = {};

  A.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  for (let key in count) {
    // pake in bukan of
    if (count[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}

console.log(findOdd2([7]));
console.log(findOdd2([0]));
console.log(findOdd2([1, 1, 2]));
console.log(findOdd2([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// BITWISE XOR ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
const findOdd3 = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd3([7]));
console.log(findOdd3([0]));
console.log(findOdd3([1, 1, 2]));
console.log(findOdd3([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
