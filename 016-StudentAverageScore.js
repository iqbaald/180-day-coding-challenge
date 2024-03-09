/*
180 day Coding Challenge (16/180)
Link : https://www.codewars.com/kata/563e320cee5dddcf77000158
Question : It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Input : [1,2,3,4,5,]
Output : 3
*/

// BARBAR ANSWER

function getAverage2(marks) {
  let result = 0;
  for (let i = 0; i < marks.length; i++) {
    result += marks[i];
  }
  return Math.round(result / marks.length);
}

console.log(getAverage2([1, 2, 3, 4, 5]));
console.log(getAverage2([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(getAverage2([2, 2, 2, 2]));

// REDUCE ANSWER
// Refference Reduce : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);

console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(getAverage([2, 2, 2, 2]));
