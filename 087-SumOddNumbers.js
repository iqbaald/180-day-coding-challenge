/*
180 day Coding Challenge (87/180)
Link : https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/

// BARBAR ANSWER
function rowSumOddNumbers(n) {
  return n * n * n;
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(10));
console.log(rowSumOddNumbers2(42));

// Math.pow ANSWER
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
function rowSumOddNumbers2(n) {
  return Math.pow(n, 3);
}

console.log(rowSumOddNumbers2(1));
console.log(rowSumOddNumbers2(2));
console.log(rowSumOddNumbers2(10));
console.log(rowSumOddNumbers2(42));
