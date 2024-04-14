/*
180 day Coding Challenge (60/180)
Link : https://www.codewars.com/kata/515e271a311df0350d00000f

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 



*/

// BARBAR ANSWER

// const squareSum=(numbers) => numbers.length > 0 ? numbers.map((a) => a * a).reduce((a,b) => a + b) : 0

function squareSum(numbers) {
  return numbers.length > 0
    ? numbers.map((a) => a * a).reduce((a, b) => a + b)
    : 0;
}
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([1, 2]));
console.log(squareSum([]));
