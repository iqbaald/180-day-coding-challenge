/*
180 day Coding Challenge (21/180)
Link : https://www.codewars.com/kata/55685cd7ad70877c23000102/
*/

// BARBAR ANSWER

function makeNegative2(num) {
  if (num >= 0) {
    return -num;
  } else {
    return num;
  }
}

console.log(makeNegative2(46));
console.log(makeNegative2(-5));

// ONELINE ANSWER

const makeNegative = (num) => (num >= 0 ? -num : num);

console.log(makeNegative(46));
console.log(makeNegative(-5));

// -Math.abs ANSWER
// Refference =

function makeNegative3(num) {
  return -Math.abs(num);
}

console.log(makeNegative3(46));
console.log(makeNegative3(-5));
