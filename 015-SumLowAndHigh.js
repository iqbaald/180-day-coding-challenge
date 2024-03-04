/*
180 day Coding Challenge (15/180)
Link : https://www.codewars.com/kata/576b93db1129fcf2200001e6
Question : Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.
Input : { 6, 2, 1, 8, 10 } || { 1, 1, 11, 2, 3 }
Output : 16 || 6
*/

// BARBAR ANSWER
// Refference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function sumArray2(array) {
  if (array == null || array.length <= 2) return 0;
  const sorted = array.sort((a, b) => a - b);

  let result = 0;
  for (i = 1; i < sorted.length - 1; i++) {
    result += sorted[i];
  }
  return result;
}

console.log(sumArray2(null));
console.log(sumArray2([6, 2, 1, 8, 10]));
console.log(sumArray2([0, 1, 6, 10, 10]));

// ANOTHER ANSWER

function sumArray(array) {
  if (array == null || array.length <= 2) return 0;
  return;
}
console.log(sumArray(null));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
